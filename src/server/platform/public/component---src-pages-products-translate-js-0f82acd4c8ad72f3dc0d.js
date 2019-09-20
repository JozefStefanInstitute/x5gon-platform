(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{220:function(e,l,t){"use strict";t.r(l),t.d(l,"default",(function(){return i}));var a=t(0),n=t.n(a),r=(t(143),t(152),t(207),t(226),t(16)),u=t(97),c=t(208);var i=function(e){var l,t;function a(){for(var l,t=this,a=arguments.length,u=new Array(a),i=0;i<a;i++)u[i]=arguments[i];return(l=e.call.apply(e,[this].concat(u))||this).Description=function(){return n.a.createElement("div",{className:"bg-white p-128 maxer mx-auto"},n.a.createElement("div",{className:"mx-lg-1 px-4"},n.a.createElement("h4",{className:"maxer-880 pb-128 mb-0 text-purple"},"X5GON's Translate not just translates, but also transcribes any type of content from videos to textbooks. Using cutting-edge machine learning software, our service provides results that come close to human translations. Your text is processed within seconds and quality comparable with Google Translate."),n.a.createElement(c.a,{object:[["While most translation services aim to be general purpose, we have optimized ours for OER content. We took great care in designing the Deep Neural Networks for acoustic modeling, speech recognition and machine translation, using thousands of selected OER materials and lectures from our case studies as training data. At this moment we have the following language pairs: German, Spanish, French, Italian, Slovenian to English, German to French and Portuguese to Spanish. More are coming."],["We created an Automatic Speech Recognition system for automatic transcription of OER in different languages, and then trained our Machine Translation tools for translating those OER. Our machine translation systems are on par with Google Translate for all our language pairs."]]}),n.a.createElement("p",{className:"p2 pt-128 pb-5 mb-3"},"Check the API"),n.a.createElement(t.Accordion,null)))},l.ServiceAPI=function(){return n.a.createElement("div",{className:"maxer mx-auto translate-api"},n.a.createElement("div",{className:"api-header"},n.a.createElement("ul",null,n.a.createElement("li",{key:1},n.a.createElement(r.a,{to:"#translate"},"/translate")),n.a.createElement("li",{key:2},n.a.createElement(r.a,{to:"#ingest "},"/ingest ")),n.a.createElement("li",{key:3},n.a.createElement(r.a,{to:"#ingest_status"},"/ingest_status")),n.a.createElement("li",{key:4},n.a.createElement(r.a,{to:"#ingest_control"},"/ingest_control")),n.a.createElement("li",{key:5},n.a.createElement(r.a,{to:"#system_status"},"/system_status")),n.a.createElement("li",{key:6},n.a.createElement(r.a,{to:"#identify_language_(future)"},"/identify_language (future)")))),n.a.createElement("hr",null),n.a.createElement("div",{className:"api-docs maxer-880 text-purple"},n.a.createElement("div",{className:"layoutArea"},n.a.createElement("div",{className:"column"},n.a.createElement("p",null,"Web Service is implemented as a Python Web Server Gateway Interface (WSGI) and a set of processes controlling data flow."),n.a.createElement("p",null,"WSGI application is accepting API calls, which are then relayed:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"via NMT Controller to NMT Core engines for direct translation or")),n.a.createElement("li",null,n.a.createElement("p",null,"to database for queued translation"))),n.a.createElement("p",null,"NMT Controller is responsible for starting new NMT Core engines with proper language pairs on the next free GPU or reusing the existing ones, returning the connection parameters for them. There can be several NMT Core engines (each with different language pair) running in parallel on different GPU cards as long as there is sufficient memory left on GPU cards. With the current configuration of 2 NVIDIA GeForce GTX 1080Ti with 11GB memory each there can be 8-9 concurrent NMT Core engines running in parallel."),n.a.createElement("p",null,"Queue Processor listens for notifications from database (or after timeout) and process new requests from the database queue via NMT Controller and NMT Core engines in the same way as WSGI application for direct translation. After the request has been processed, the callback (if specified in the API call) is executed. If there was no callback, one can get the result of translation via another API call."),n.a.createElement("p",null,"In the case of direct translation, the translation is returned as text (or in original format) and in all other cases the relevant data is returned as JSON data structure. If there has been an error processing request or some of the data hasn't been found, an appropriate HTTP 500 or 404 error is returned with more detailed explanation in the body of the returned HTML."),n.a.createElement("p",null,"Base URL for "," Web service API is"," ",n.a.createElement("a",{href:"http://matterhorn.ijs.si/trans",target:"blank"},"http://matterhorn.ijs.si/trans"),".",n.a.createElement("br",null)," On top of that API defines the following set of HTTP interfaces:"))),n.a.createElement("p",null," "),n.a.createElement("hr",null),n.a.createElement("div",{id:"translate"},n.a.createElement("h4",{className:""},"/translate"),n.a.createElement("p",null,"Translates document immediately.",n.a.createElement("br",null),"Limitations: size, frequency, number of queued documents, format, ..."),n.a.createElement("p",null," "),n.a.createElement("p",null,"Input (POST):"),n.a.createElement("ul",{className:"list-items"},n.a.createElement("li",null,n.a.createElement("b",null,"auth")," – authentication data (future, ignored)",n.a.createElement("ul",null,n.a.createElement("li",null,"Username/password, authentication key, ..."),n.a.createElement("li",null,"Currently ignored"))),n.a.createElement("li",null,n.a.createElement("b",null,"src")," – source language (future, optional)",n.a.createElement("ul",null,n.a.createElement("li",null,"Follows ISO 639-1 language code"),n.a.createElement("li",null,"Currently only English ('en') is supported"),n.a.createElement("li",null,"Default: 'en'"))),n.a.createElement("li",null,n.a.createElement("b",null,"dst")," – destination language (required)",n.a.createElement("ul",null,n.a.createElement("li",null,"Follows ISO 639-1 language code"),n.a.createElement("li",null,"Currently supported languages:",n.a.createElement("ul",null,n.a.createElement("li",null,"Bulgarian ('bg')"),n.a.createElement("li",null,"Czech ('cs')"),n.a.createElement("li",null,"German ('de')"),n.a.createElement("li",null,"Greek ('el')"),n.a.createElement("li",null,"Croatian ('hr')"),n.a.createElement("li",null,"Italian ('it')"),n.a.createElement("li",null,"Dutch ('nl')"),n.a.createElement("li",null,"Polish ('pl')"),n.a.createElement("li",null,"Portuguese ('pt')"),n.a.createElement("li",null,"Russian ('ru')"),n.a.createElement("li",null,"Chinese ('zh')"))),n.a.createElement("li",null,"No default"))),n.a.createElement("li",null,n.a.createElement("b",null,"domain")," – domain (optional)",n.a.createElement("ul",null,n.a.createElement("li",null,"Currently only 'informal' domain is supported"),n.a.createElement("li",null,"Default: 'informal'"))),n.a.createElement("li",null,n.a.createElement("b",null,"type")," – document format (optional)",n.a.createElement("ul",null,n.a.createElement("li",null,"Text, subtitle (WebVTT, srt, DFXP, ...), HTML, docx, pptx, PDF, ..."),n.a.createElement("li",null,"Follows MIME type specification"),n.a.createElement("li",null,"Currently the following formats are supported:",n.a.createElement("ul",null,n.a.createElement("li",null,"text ('text/plain')",n.a.createElement("br",null),"subtitle ('text/vtt')"),n.a.createElement("li",null,"Subtitle format is converted to and returned as WebVTT.",n.a.createElement("br",null),"HTML ('text/html')"),n.a.createElement("li",null,"Text inside ","<pre>"," and comment blocks is not translated."),n.a.createElement("li",null,"Microsoft Open XML documents:",n.a.createElement("ul",null,n.a.createElement("li",null,"MS Word docx (' application/vnd.openxmlformats- officedocument.wordprocessingml.document ')"),n.a.createElement("li",null,"MS PowerPoint pptx (' application/vnd.openxmlformats- officedocument.presentationml.presentation')"),n.a.createElement("li",null,"MS Excel xlsx (' application/vnd.openxmlformats- officedocument.spreadsheetml.sheet')"),n.a.createElement("li",null,"Default: 'text/plain'"))))))),n.a.createElement("li",null,n.a.createElement("b",null,"data")," – document (data, required)",n.a.createElement("ul",null,n.a.createElement("li",null,"Should be encoded as UTF-8")))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Output (raw data):"),n.a.createElement("ul",null,n.a.createElement("li",null,"Translated document",n.a.createElement("ul",null,n.a.createElement("li",null,"Encoded as UTF-8")))),n.a.createElement("p",null," "),n.a.createElement("p",{className:"text-danger"},"Errors:"),n.a.createElement("ul",null,n.a.createElement("li",null,"500 Internal Server Error",n.a.createElement("ul",null,n.a.createElement("li",null,"All other possible errors"))),n.a.createElement("li",null,"503 Service Unavailable",n.a.createElement("ul",null,n.a.createElement("li",null,"Translation service unavailable"))),n.a.createElement("li",null,"400 Bad Request",n.a.createElement("ul",null,n.a.createElement("li",null,"Target language not present"),n.a.createElement("li",null,"Invalid target language specified"),n.a.createElement("li",null,"Zero length or no input data")))),n.a.createElement("p",null,"Example – translate text in file sample.txt from English to German:"),n.a.createElement("div",{className:"code-block"},n.a.createElement("p",null,"$ curl -F dst=de -F type=text/plain -F data=@sample.txt -u user:password http://matterhorn.ijs.si/trans/translate"),n.a.createElement("p",null,"200 OK"),n.a.createElement("p",null,"...translated text...")),n.a.createElement("p",null,"Example – translate subtitle sample.vtt from English to Italian:"),n.a.createElement("div",{className:"code-block"},n.a.createElement("p",null,"$ curl -F dst=it -F type=text/vtt -F data=@sample.vtt -u user:password http://matterhorn.ijs.si/trans/translate"),n.a.createElement("p",null,"200 OK"),n.a.createElement("p",null,"...translated subtitle..."))),n.a.createElement("hr",null),n.a.createElement("div",{id:"ingest"},n.a.createElement("h4",null,"/ingest"),n.a.createElement("p",null,"Ingests a document into a queue for postponed translation.",n.a.createElement("br",null),"Limitations: size, number of queued documents, format, …"),n.a.createElement("p",null," "),n.a.createElement("p",null,"Input (POST):"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"auth"),"– authentication data (future, ignored)",n.a.createElement("ul",null,n.a.createElement("li",null,"Username/password, authentication key, …"),n.a.createElement("li",null,"Currently ignored"))),n.a.createElement("li",null,n.a.createElement("strong",null,"src"),"– source language (future, optional)",n.a.createElement("ul",null,n.a.createElement("li",null,"Follows ISO 639-1 language code"),n.a.createElement("li",null,"Currently only English ('en') is supported"),n.a.createElement("li",null,"Default: 'en'"))),n.a.createElement("li",null,n.a.createElement("strong",null,"dst"),"– destination language (required)",n.a.createElement("ul",null,n.a.createElement("li",null,"Follows ISO 639-1 language code"),n.a.createElement("li",null,"Currently supported languages:",n.a.createElement("ul",null,n.a.createElement("li",null,"Bulgarian ('bg')"),n.a.createElement("li",null,"Czech ('cs')"),n.a.createElement("li",null,"German ('de')"),n.a.createElement("li",null,"Greek ('el')"),n.a.createElement("li",null,"Croatian ('hr')"),n.a.createElement("li",null,"Italian ('it')"),n.a.createElement("li",null,"Dutch ('nl')"),n.a.createElement("li",null,"Polish ('pl')"),n.a.createElement("li",null,"Portuguese ('pt')"),n.a.createElement("li",null,"Russian ('ru')"),n.a.createElement("li",null,"Chinese ('zh')"))),n.a.createElement("li",null,"No default"))),n.a.createElement("li",null,n.a.createElement("strong",null,"domain"),"– domain (optional)",n.a.createElement("ul",null,n.a.createElement("li",null,"Currently only 'informal' domain is supported"),n.a.createElement("li",null,"Default: 'informal'"))),n.a.createElement("li",null,n.a.createElement("strong",null,"type"),"– document format (optional)",n.a.createElement("ul",null,n.a.createElement("li",null,"Text, subtitle (WebVTT, srt, DFXP, …), HTML, docx, pptx, PDF, …"),n.a.createElement("li",null,"Follows MIME type specification"),n.a.createElement("li",null,"Currently the following formats are supported:",n.a.createElement("ul",null,n.a.createElement("li",null,"text ('text/plain')"),n.a.createElement("li",null,"subtitle ('text/vtt')",n.a.createElement("br",null),"Subtitle format is converted to and returned as WebVTT."),n.a.createElement("li",null,"HTML ('text/html')",n.a.createElement("br",null),"Text inside <pre> and comment blocks is not translated."),n.a.createElement("li",null,"Microsoft Open XML documents:",n.a.createElement("ul",null,n.a.createElement("li",null,"MS Word docx (' application/vnd.openxmlformats-officedocument.wordprocessingml.document ')"),n.a.createElement("li",null,"MS PowerPoint pptx (' application/vnd.openxmlformats-officedocument.presentationml.presentation')"),n.a.createElement("li",null,"MS Excel xlsx (' application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')"))),n.a.createElement("li",null,"Default: 'text/plain'"))),n.a.createElement("li",null,n.a.createElement("strong",null,"data"),"– document (data, required)",n.a.createElement("ul",null,n.a.createElement("li",null,"Should be encoded as UTF-8"))),n.a.createElement("li",null,n.a.createElement("strong",null,"prio"),"– document priority (for queue, optional)",n.a.createElement("ul",null,n.a.createElement("li",null,"Integer value between 1 and 9"),n.a.createElement("li",null,"Default: 5"))),n.a.createElement("li",null,n.a.createElement("strong",null,"callback"),"– callback URL (optional)",n.a.createElement("ul",null,n.a.createElement("li",null,"HTTP or e-mail notification, executed when translation is done"),n.a.createElement("li",null,"Follows URI specification"),n.a.createElement("li",null,"Currently only e-mail notification ('mailto:user@domain.com') is supported"),n.a.createElement("li",null,"No default")))))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Output (JSON):"),n.a.createElement("ul",null,n.a.createElement("li",null,"Document ID"),n.a.createElement("li",null,"Status (queued)"),n.a.createElement("li",null,"Source language (en)"),n.a.createElement("li",null,"Destination language"),n.a.createElement("li",null,"Domain (informal)"),n.a.createElement("li",null,"Document type"),n.a.createElement("li",null,"Queue entered date"),n.a.createElement("li",null,"Translation started date (null)"),n.a.createElement("li",null,"Finished date (null)"),n.a.createElement("li",null,"Translation status (null)"),n.a.createElement("li",null,"Callback URL"),n.a.createElement("li",null,"Priority"),n.a.createElement("li",null,"Document size"),n.a.createElement("li",null,"Queue position")),n.a.createElement("p",null," "),n.a.createElement("p",{className:"text-danger"},"Errors:"),n.a.createElement("ul",null,n.a.createElement("li",null,"500 Internal Server Error",n.a.createElement("ul",null,n.a.createElement("li",null,"Insert into database failed"),n.a.createElement("li",null,"All other possible errors"))),n.a.createElement("li",null,"503 Service Unavailable",n.a.createElement("ul",null,n.a.createElement("li",null,"Translation service unavailable"))),n.a.createElement("li",null,"400 Bad Request",n.a.createElement("ul",null,n.a.createElement("li",null,"Target language not present"),n.a.createElement("li",null,"Invalid target language specified"),n.a.createElement("li",null,"Zero length or no input data")))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Example – put text in file sample.txt into translation queue from English to German:"),n.a.createElement("div",{className:"code-block"},n.a.createElement("p",null,"$ curl -F dst=de -F callback=mailto:user@domain.com -F data=@sample.txt -u user:password http://matterhorn.ijs.si/trans/ingest")),n.a.createElement("div",{className:"json-colors"},n.a.createElement("p",null,"{"),n.a.createElement("p",null,'"id": 2,'),n.a.createElement("p",null,'"status": "queued",'),n.a.createElement("p",null,'"src_lang": "en",'),n.a.createElement("p",null,'"dst_lang": "de",'),n.a.createElement("p",null,'"domain": "informal",'),n.a.createElement("p",null,'"type": "text/plain",'),n.a.createElement("p",null,'"enter_date": "2017-10-31T12:31:53.052",'),n.a.createElement("p",null,'"trans_date": null,'),n.a.createElement("p",null,'"finish_date": null,'),n.a.createElement("p",null,'"trans_status": null,'),n.a.createElement("p",null,'"callback": "mailto:user@domain.com",'),n.a.createElement("p",null,'"prio": 5,'),n.a.createElement("p",null,'"size": 1536,'),n.a.createElement("p",null,'"que_pos": 1'),n.a.createElement("p",null,"}")),n.a.createElement("p",null," "),n.a.createElement("p",null,"When queued text has been processed, the following e-mail arrives:"),n.a.createElement("div",{className:"code-block"},n.a.createElement("p",null,n.a.createElement("em",null,"From: Translation Service <user@ijs.si>")),n.a.createElement("p",null,n.a.createElement("em",null,"Subject: Translated request id: 2 (en-de, plain text)")),n.a.createElement("p",null,n.a.createElement("em",null," ")),n.a.createElement("p",null,n.a.createElement("em",null,"Translated request id: 2")),n.a.createElement("p",null,n.a.createElement("em",null,"Source language: en")),n.a.createElement("p",null,n.a.createElement("em",null,"Target language: de")),n.a.createElement("p",null,n.a.createElement("em",null,"Document type: text/plain")),n.a.createElement("p",null,n.a.createElement("em",null,"Document size: 1536")),n.a.createElement("p",null,n.a.createElement("em",null,"Entered in queue: 2017-10-31 12:31:53.052047")),n.a.createElement("p",null,n.a.createElement("em",null,"Translation finished: 2017-10-31 12:50:45.183930")),n.a.createElement("p",null,n.a.createElement("em",null,"Translation status: success"))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Attached to the e-mail are two files:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Original input text (random file name with an extension '.en.txt')"),n.a.createElement("li",null,"Translated output text (random file name with an extension '.en-de.txt')"))),n.a.createElement("hr",null),n.a.createElement("div",{id:"ingest_status"},n.a.createElement("h4",null,"/ingest_status"),n.a.createElement("p",null,"Returns status of queued document."),n.a.createElement("p",null," "),n.a.createElement("p",null,"Input (GET):"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"auth"),"– authentication data (future, ignored)",n.a.createElement("ul",null,n.a.createElement("li",null,"Username/password, authentication key, …"),n.a.createElement("li",null,"Currently ignored"))),n.a.createElement("li",null,n.a.createElement("strong",null,"id"),"– document ID (required)",n.a.createElement("ul",null,n.a.createElement("li",null,"as returned from /ingest API")))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Output (JSON):"),n.a.createElement("ul",null,n.a.createElement("li",null,"Document ID"),n.a.createElement("li",null,"Status (queued, finished or failed)"),n.a.createElement("li",null,"Source language (en)"),n.a.createElement("li",null,"Destination language"),n.a.createElement("li",null,"Domain (informal)"),n.a.createElement("li",null,"Document type"),n.a.createElement("li",null,"Queue entered date"),n.a.createElement("li",null,"Translation started date"),n.a.createElement("li",null,"Finished date"),n.a.createElement("li",null,"Translation status"),n.a.createElement("li",null,"Callback URL"),n.a.createElement("li",null,"Priority"),n.a.createElement("li",null,"Document size"),n.a.createElement("li",null,"Queue position")),n.a.createElement("p",null," "),n.a.createElement("p",{className:"text-danger"},"Errors:"),n.a.createElement("ul",null,n.a.createElement("li",null,"500 Internal Server Error",n.a.createElement("ul",null,n.a.createElement("li",null,"All other possible errors"))),n.a.createElement("li",null,"400 Bad Request",n.a.createElement("ul",null,n.a.createElement("li",null,"No document id specified or id is empty"))),n.a.createElement("li",null,"404 Not Found",n.a.createElement("ul",null,n.a.createElement("li",null,"Document id <n> not found")))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Example – check status of document in translation queue:"),n.a.createElement("div",{className:"code-block"},n.a.createElement("p",null,"$ curl -u user:password http://matterhorn.ijs.si/trans/ingest_status?id=2")),n.a.createElement("div",{className:"json-colors"},n.a.createElement("p",null,"{"),n.a.createElement("p",null,'"id": 2,'),n.a.createElement("p",null,'"status": "finished",'),n.a.createElement("p",null,'"src_lang": "en",'),n.a.createElement("p",null,'"dst_lang": "de",'),n.a.createElement("p",null,'"domain": "informal",'),n.a.createElement("p",null,'"type": "text/plain",'),n.a.createElement("p",null,'"enter_date": "2017-10-31T12:31:53.052",'),n.a.createElement("p",null,'"trans_date": "2017-10-31T12:50:31.181",'),n.a.createElement("p",null,'"finish_date": "2017-10-31T12:50:45.183",'),n.a.createElement("p",null,'"trans_status": "success",'),n.a.createElement("p",null,'"callback": "mailto:user@domain.com",'),n.a.createElement("p",null,'"prio": 5,'),n.a.createElement("p",null,'"size": 1536,'),n.a.createElement("p",null,'"que_pos": null'),n.a.createElement("p",null,"}"))),n.a.createElement("hr",null),n.a.createElement("div",{id:"ingest_control"},n.a.createElement("h4",null,"/ingest_control"),n.a.createElement("p",null,"Executes action (get, modify or delete) on queued document. You can get current status of queued document with /ingest_status API."),n.a.createElement("p",null," "),n.a.createElement("p",null,"Input (GET):"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"auth"),"– authentication data (future, ignored)",n.a.createElement("ul",null,n.a.createElement("li",null,"Username/password, authentication key, …"),n.a.createElement("li",null,"Currently ignored"))),n.a.createElement("li",null,n.a.createElement("strong",null,"id"),"– document ID (required)",n.a.createElement("ul",null,n.a.createElement("li",null,"as returned from /ingest API"))),n.a.createElement("li",null,n.a.createElement("strong",null,"action"),"– action to be executed on document ID (required)",n.a.createElement("ul",null,n.a.createElement("li",null,"Currently supported actions:",n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"get"),n.a.createElement("br",null),"Transfers translated document as raw data.",n.a.createElement("br",null),"Usable for example when no callback was specified."),n.a.createElement("li",null,n.a.createElement("strong",null,"modify",n.a.createElement("br",null)),"Modifies specified document ID in queue.",n.a.createElement("br",null),"You can modify src, dst, domain, type, prio and callback parameters. This is reasonable only before the document has been processed."),n.a.createElement("li",null,n.a.createElement("strong",null,"delete"),n.a.createElement("br",null),"Deletes specified document ID from queue."))),n.a.createElement("li",null,"No default"))),n.a.createElement("li",null,n.a.createElement("strong",null,"src"),"– source language (future, optional for modify action)",n.a.createElement("ul",null,n.a.createElement("li",null,"Follows ISO 639-1 language code"),n.a.createElement("li",null,"Currently only English ('en') is supported"),n.a.createElement("li",null,"No default"))),n.a.createElement("li",null,n.a.createElement("strong",null,"dst"),"– destination language (optional for modify action)",n.a.createElement("ul",null,n.a.createElement("li",null,"Follows ISO 639-1 language code"),n.a.createElement("li",null,"Currently supported languages:",n.a.createElement("ul",null,n.a.createElement("li",null,"Bulgarian ('bg')"),n.a.createElement("li",null,"Czech ('cs')"),n.a.createElement("li",null,"German ('de')"),n.a.createElement("li",null,"Greek ('el')"),n.a.createElement("li",null,"Croatian ('hr')"),n.a.createElement("li",null,"Italian ('it')"),n.a.createElement("li",null,"Dutch ('nl')"),n.a.createElement("li",null,"Polish ('pl')"),n.a.createElement("li",null,"Portuguese ('pt')"),n.a.createElement("li",null,"Russian ('ru')"),n.a.createElement("li",null,"Chinese ('zh')"))),n.a.createElement("li",null,"No default"))),n.a.createElement("li",null,n.a.createElement("strong",null,"domain"),"– domain (optional for modify action)",n.a.createElement("ul",null,n.a.createElement("li",null,"Currently only 'informal' domain is supported"),n.a.createElement("li",null,"No default"))),n.a.createElement("li",null,n.a.createElement("strong",null,"type"),"– document format (optional for modify action)",n.a.createElement("ul",null,n.a.createElement("li",null,"Text, subtitle (WebVTT, srt, DFXP, …), HTML, docx, pptx, PDF, …"),n.a.createElement("li",null,"Follows MIME type specification"),n.a.createElement("li",null,"Currently the following formats are supported:",n.a.createElement("ul",null,n.a.createElement("li",null,"text ('text/plain')"),n.a.createElement("li",null,"subtitle ('text/vtt')",n.a.createElement("br",null),"Subtitle format is converted to and returned as WebVTT."),n.a.createElement("li",null,"HTML ('text/html')",n.a.createElement("br",null),"Text inside <pre> and comment blocks is not translated."),n.a.createElement("li",null,"Microsoft Open XML documents:",n.a.createElement("ul",null,n.a.createElement("li",null,"MS Word docx (' application/vnd.openxmlformats-officedocument.wordprocessingml.document ')"),n.a.createElement("li",null,"MS PowerPoint pptx (' application/vnd.openxmlformats-officedocument.presentationml.presentation')"),n.a.createElement("li",null,"MS Excel xlsx (' application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')"))),n.a.createElement("li",null,"No default"))),n.a.createElement("li",null,n.a.createElement("strong",null,"prio"),"– document priority (optional for modify action)",n.a.createElement("ul",null,n.a.createElement("li",null,"Integer value between 1 and 9"),n.a.createElement("li",null,"No default"))),n.a.createElement("li",null,n.a.createElement("strong",null,"callback"),"– callback URL (optional for modify action)",n.a.createElement("ul",null,n.a.createElement("li",null,"HTTP or e-mail notification, executed when translation is done"),n.a.createElement("li",null,"Follows URI specification"),n.a.createElement("li",null,"Currently only e-mail notification ('mailto:user@domain.com') is supported"),n.a.createElement("li",null,"No default")))))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Output (raw data):"),n.a.createElement("ul",null,n.a.createElement("li",null,"Translated document",n.a.createElement("ul",null,n.a.createElement("li",null,"Encoded as UTF-8")))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Output (JSON):"),n.a.createElement("ul",null,n.a.createElement("li",null,"Document ID"),n.a.createElement("li",null,"Status (modified, deleted or failed)")),n.a.createElement("p",null," "),n.a.createElement("p",{className:"text-danger"},"Errors:"),n.a.createElement("ul",null,n.a.createElement("li",null,"500 Internal Server Error",n.a.createElement("ul",null,n.a.createElement("li",null,"Update database failed"),n.a.createElement("li",null,"All other possible errors"))),n.a.createElement("li",null,"400 Bad Request",n.a.createElement("ul",null,n.a.createElement("li",null,"No document id specified or id is empty"),n.a.createElement("li",null,"No action specified or action is empty"),n.a.createElement("li",null,"No valid action specified"),n.a.createElement("li",null,"Document id <n> has not been translated yet"))),n.a.createElement("li",null,"404 Not Found",n.a.createElement("ul",null,n.a.createElement("li",null,"Document id <n> not found")))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Example – get the translated document from the translation queue:"),n.a.createElement("div",{className:"code-block"},n.a.createElement("p",null,"$ curl -u user:password http://matterhorn.ijs.si/trans/ingest_control?id=2&action=get"),n.a.createElement("p",null,"200 OK"),n.a.createElement("p",null,"...translated text...")),n.a.createElement("p",null," "),n.a.createElement("p",null,"Example – modify the priority of the document in the translation queue:"),n.a.createElement("div",{className:"code-block"},n.a.createElement("p",null,"$ curl -u user:password http://matterhorn.ijs.si/trans/ingest_control?id=2&action=modify&prio=9")),n.a.createElement("div",{className:"json-colors"},n.a.createElement("p",null,"{"),n.a.createElement("p",null,'"id": 2,'),n.a.createElement("p",null,'"status": "modified"'),n.a.createElement("p",null,"}")),n.a.createElement("p",null,"Example – delete the document in the translation queue:"),n.a.createElement("div",{className:"code-block"},n.a.createElement("p",null,"$ curl -u user:password http://matterhorn.ijs.si/trans/ingest_control?id=2&action=delete")),n.a.createElement("div",{className:"json-colors"},n.a.createElement("p",null,"{"),n.a.createElement("p",null,'"id": 2,'),n.a.createElement("p",null,'"status": "deleted"'),n.a.createElement("p",null,"}"))),n.a.createElement("hr",null),n.a.createElement("div",{id:"system_status"},n.a.createElement("h4",null,"/system_status"),n.a.createElement("p",null,"Returns system status."),n.a.createElement("p",null," "),n.a.createElement("p",null,"Output (JSON):"),n.a.createElement("ul",null,n.a.createElement("li",null,"API version"),n.a.createElement("li",null,"System status (available or unavailable)"),n.a.createElement("li",null,"List of available language pairs"),n.a.createElement("li",null,"Concurrency (number of possible concurrent NMT cores/language pairs)"),n.a.createElement("li",null,"Current queue size")),n.a.createElement("p",null," "),n.a.createElement("p",{className:"text-danger"},"Errors:"),n.a.createElement("ul",null,n.a.createElement("li",null,"500 Internal Server Error",n.a.createElement("ul",null,n.a.createElement("li",null,"All other possible errors")))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Example – get the system status:"),n.a.createElement("div",{className:"code-block"},n.a.createElement("p",null,"$ curl -u user:password http://matterhorn.ijs.si/trans/system_status")),n.a.createElement("div",{className:"json-colors"},n.a.createElement("p",null,"{"),n.a.createElement("p",null,'"API_version": "1.0",'),n.a.createElement("p",null,'"status": "available",'),n.a.createElement("p",null,'"lang_pairs": ["en-bg", "en-cs", "en-de", "en-el", "en-hr", "en-it", "en-nl", "en-pl", "en-pt", "en-ru", "en-zh"],'),n.a.createElement("p",null,'"concurrency": 2,'),n.a.createElement("p",null,'"queue_size": 0'),n.a.createElement("p",null,"}"))),n.a.createElement("hr",null),n.a.createElement("div",{id:"identify_language_(future)"},n.a.createElement("h4",null,"/identify_language (future)"),n.a.createElement("p",null,"Identify document language (not implemented yet)."),n.a.createElement("p",null," "),n.a.createElement("p",null,"Input (POST):"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"auth"),"– authentication data (future, ignored)",n.a.createElement("ul",null,n.a.createElement("li",null,"Username/password, authentication key, …"),n.a.createElement("li",null,"Currently ignored"))),n.a.createElement("li",null,n.a.createElement("strong",null,"type"),"– document format (optional)",n.a.createElement("ul",null,n.a.createElement("li",null,"Text, subtitle (WebVTT, srt, DFXP, …), HTML, docx, pptx, PDF, …"),n.a.createElement("li",null,"Follows MIME type specification"),n.a.createElement("li",null,"Currently the following formats are supported:",n.a.createElement("ul",null,n.a.createElement("li",null,"text ('text/plain')"),n.a.createElement("li",null,"subtitle ('text/vtt')",n.a.createElement("br",null),"Subtitle format is converted to and returned as WebVTT."),n.a.createElement("li",null,"HTML ('text/html')",n.a.createElement("br",null),"Text inside <pre> and comment blocks is not translated."),n.a.createElement("li",null,"Microsoft Open XML documents:",n.a.createElement("ul",null,n.a.createElement("li",null,"MS Word docx (' application/vnd.openxmlformats-officedocument.wordprocessingml.document ')"),n.a.createElement("li",null,"MS PowerPoint pptx (' application/vnd.openxmlformats-officedocument.presentationml.presentation')"),n.a.createElement("li",null,"MS Excel xlsx (' application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')"))),n.a.createElement("li",null,"Default: 'text/plain'"))),n.a.createElement("li",null,n.a.createElement("strong",null,"data"),"– document (data, required)",n.a.createElement("ul",null,n.a.createElement("li",null,"Should be encoded as UTF-8")))))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Output (JSON):"),n.a.createElement("ul",null,n.a.createElement("li",null,"Detected document language (currently hardcoded to 'en')")),n.a.createElement("p",null," "),n.a.createElement("p",{className:"text-danger"},"Errors:"),n.a.createElement("ul",null,n.a.createElement("li",null,"500 Internal Server Error",n.a.createElement("ul",null,n.a.createElement("li",null,"All other possible errors"))),n.a.createElement("li",null,"400 Bad Request",n.a.createElement("ul",null,n.a.createElement("li",null,"Zero length or no input data")))),n.a.createElement("p",null," "),n.a.createElement("p",null,"Example – identify document language:"),n.a.createElement("div",{className:"code-block"},n.a.createElement("p",null,"$ curl -F type=text/plain -F data=@sample.txt -u user:password http://matterhorn.ijs.si/trans/identify_language")),n.a.createElement("div",{className:"json-colors"},n.a.createElement("p",null,"{"),n.a.createElement("p",null,'"lang": "en"'),n.a.createElement("p",null,"}")),n.a.createElement("p",null," "))))},l.Accordion=function(){return n.a.createElement("div",{className:"accordion accordion-single",id:"accordionExample"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header",id:"headingOne"},n.a.createElement("div",{className:"btn w-100 text-left .h4","data-toggle":"collapse","data-target":"#API","aria-expanded":"true","aria-controls":"collapseAPI"},n.a.createElement("h4",{className:"mb-0 text-green"},"Translate API",n.a.createElement("span",{id:"API",className:"float-right collapse show plus-minus"})))),n.a.createElement("div",{id:"API",className:"collapse","aria-labelledby":"headingOne"},n.a.createElement("div",{className:"card-body"},n.a.createElement(t.ServiceAPI,null)))))},l}return t=e,(l=a).prototype=Object.create(t.prototype),l.prototype.constructor=l,l.__proto__=t,a.prototype.render=function(){return n.a.createElement("div",null,n.a.createElement(c.b,{object:{product:"Translate",description:"Translate all of your content",button:{text:"Try Now",link:""}}}),n.a.createElement(this.Description,null),n.a.createElement(u.c,{current:"Translate",padding:!0}),n.a.createElement(u.b,null))},a}(n.a.Component)}}]);
//# sourceMappingURL=component---src-pages-products-translate-js-0f82acd4c8ad72f3dc0d.js.map