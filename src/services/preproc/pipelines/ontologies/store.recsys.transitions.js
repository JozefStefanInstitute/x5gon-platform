// configurations
const config = require('@config/config');

module.exports = {
  general: {
    heartbeat: 2000,
    pass_binary_messages: true
  },
  spouts: [
    {
      name: 'kafka.recsys.transitions',
      type: 'inproc',
      working_dir: './spouts',
      cmd: 'kafka-spout.js',
      init: {
        kafka_host: config.kafka.host,
        topic: 'STORE_RECSYS_TRANSITION',
        groupId: config.kafka.groupId
      }
    }
  ],
  bolts: [
    {
      name: 'store.pg.recsys.transitions',
      type: 'inproc',
      working_dir: './bolts',
      cmd: 'store-pg-recsys-transitions.js',
      inputs: [
        {
          source: 'kafka.recsys.transitions'
        }
      ],
      init: {
        pg: config.pg
      }
    }
  ],
  variables: {}
};