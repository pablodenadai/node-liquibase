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
//   referenceUrl: 'jdbc:postgresql://localhost:5432/MYDATABASE_DEV',
//   referenceUsername: 'postgres',
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
//   url: 'jdbc:postgresql://localhost:5432/MYDATABASE_TEST',
//   classpath: 'Drivers/postgresql-42.2.8.jar',
//   username: 'postgres',
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
//   changeLogFile: 'changeLog_examples/postgreSQL/my_new_changelog.postgresql.sql',
//   url: 'jdbc:postgresql://localhost:5432/MYDATABASE_TEST',
//   classpath: 'Drivers/postgresql-42.2.8.jar',
//   username: 'postgres',
//   password: 'password',
//   logLevel: 'debug',
//   overwriteOutputFile: 'true',
//   logFile: 'myLog.log'
// })
// .run('generateChangeLog')
// .then(() => console.log('success'))
// .catch((err) => console.log('fail', err));