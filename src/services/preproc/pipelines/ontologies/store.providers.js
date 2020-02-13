// configurations
const config = require('@config/config');

module.exports = {
  general: {
    heartbeat: 2000,
    pass_binary_messages: true
  },
  spouts: [
    {
      name: 'kafka.providers',
      type: 'inproc',
      working_dir: './spouts',
      cmd: 'kafka-spout.js',
      init: {
        kafka_host: config.kafka.host,
        topic: 'STORE_PROVIDER',
        groupId: config.kafka.groupId
      }
    }
  ],
  bolts: [
    {
      name: 'store.pg.providers',
      type: 'inproc',
      working_dir: './bolts',
      cmd: 'store-pg-providers.js',
      inputs: [
        {
          source: 'kafka.providers'
        }
      ],
      init: {
        pg: config.pg
      }
    }
  ],
  variables: {}
};