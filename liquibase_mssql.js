const status = require('liquibase');
const updateSQL = require('liquibase');
const diff = require('liquibase');
const update = require('liquibase');
const snapshot = require('liquibase');
const generateChangeLog = require('liquibase');


//*********** commands template ************
//const <command name> = require('liquibase');

// <command name> ({
//   contexts: '<ontext1>,<context2>',
//   labels: '<ontext1>,<context2>',
//   logLevel: '<debug or sql or info or warning or severe>',
//   overwriteOutputFile: '<true or false>',
//   logFile: '<myLog.log or path/to/myLog.log>'
// })
// .run('<command name>', '<command parameter>')
// .then(() => console.log('success'))
// .catch((err) => console.log('fail', err));



//********** commands samples *************

status ({
  contexts: 'TEST,DEV',
  labels: 'staging,Jira-1200',
  logLevel: 'debug',
  overwriteOutputFile: 'true',
  logFile: 'myLog.log'
})
.run('status', '--verbose')
.then(() => console.log('success'))
.catch((err) => console.log('fail', err));

// updateSQL ({
//     contexts: 'TEST,DEV',
//     labels: 'staging,Jira-1200',
//     logLevel: 'debug',
//     overwriteOutputFile: 'true',
//     logFile: 'myLog.log'
// })
// .run('updateSQL')
// .then(() => console.log('success'))
// .catch((err) => console.log('fail', err));

// update ({
//   contexts: 'TEST,DEV',
//   labels: 'staging,Jira-1200',
//   logLevel: 'debug',
//   overwriteOutputFile: 'true',
//   logFile: 'myLog.log'
// })
// .run('update')
// .then(() => console.log('success'))
// .catch((err) => console.log('fail', err));

// diff ({
//   referenceUrl: '"jdbc:sqlserver://localhost;database=HR_DEV;"',
//   referenceUsername: 'system',
//   referencePassword: 'password',
//   overwriteOutputFile: 'true',
//   outputFile: 'myDiff.txt',
//   logLevel: 'debug',
//   overwriteOutputFile: 'true',
//   logFile: 'myLog.log'
// })
// .run('diff')
// .then(() => console.log('success'))
// .catch((err) => console.log('fail', err));

// snapshot ({
//   url: '"jdbc:sqlserver://localhost;database=HR_TEST;"',
//   classpath: 'Drivers/mssql-jdbc-7.4.1.jre8.jar',
//   username: 'system',
//   password: 'password',
//   overwriteOutputFile: 'true',
//   outputFile: 'mySnapshot.json',
//   logLevel: 'debug',
//   logFile: 'myLog.log'
// })
// .run('snapshot')
// .then(() => console.log('success'))
// .catch((err) => console.log('fail', err));

// generateChangeLog ({
//   changeLogFile: 'changeLog_examples/mssql/changelog.mssql.sql',
//   url: '"jdbc:sqlserver://localhost;database=HR_TEST;"'
//   classpath: 'Drivers/mssql-jdbc-7.4.1.jre8.jar',
//   username: 'system',
//   password: 'password',
//   logLevel: 'debug',
//   overwriteOutputFile: 'true',
//   logFile: 'myLog.log'
// })
// .run('generateChangeLog')
// .then(() => console.log('success'))
// .catch((err) => console.log('fail', err));