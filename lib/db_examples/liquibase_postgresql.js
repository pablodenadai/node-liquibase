const liquibase = require("../lib/index");
const path = require('path');

//*********** commands template ************
//const <command name> = require('node-liquibase');

// <command name> ({
//   contexts: '<ontext1>,<context2>',
//   labels: '<ontext1>,<context2>',
//   logLevel: '<debug or sql or info or warning or severe>',
//   overwriteOutputFile: '<true or false>',
//   logFile: '<myLog.log or path/to/myLog.log>'
// })
// .run('<command name>', '<command parameter>')
// .then(() => console.log('success'))
// .catch((err) => console.error('fail', err));


/**
 ******************************************
 *********** COMMANDS SAMPLES *************
 ******************************************
 */
const config = {
  contexts: 'TEST,DEV',
  labels: 'staging,Jira-1200',
  logLevel: 'debug',
  overwriteOutputFile: 'true',
  logFile: 'myLog.log'
};

liquibase(config)
  .run('status', '--verbose')
  .then(() => console.log('success'))
  .catch((err) => console.error('fail', err));

// liquibase(config)
//   .run('updateSQL')
//   .then(() => console.log('success'))
//   .catch((err) => console.error('fail', err));

// liquibase(config)
//   .run('update')
//   .then(() => console.log('success'))
//   .catch((err) => console.error('fail', err));

// liquibase({
//   referenceUrl: 'jdbc:postgresql://localhost:5432/MYDATABASE_DEV',
//   referenceUsername: 'postgres',
//   referencePassword: 'password',
//   overwriteOutputFile: 'true',
//   outputFile: 'myDiff.txt',
//   logLevel: 'debug',
//   overwriteOutputFile: 'true',
//   logFile: 'myLog.log'
// })
//   .run('diff')
//   .then(() => console.log('success'))
//   .catch((err) => console.error('fail', err));

// liquibase({
//   url: 'jdbc:postgresql://localhost:5432/MYDATABASE_TEST',
//   classpath: 'Drivers/postgresql-42.2.8.jar',
//   username: 'postgres',
//   password: 'password',
//   overwriteOutputFile: 'true',
//   outputFile: 'mySnapshot.json',
//   logLevel: 'debug',
//   logFile: 'myLog.log'
// })
//   .run('snapshot')
//   .then(() => console.log('success'))
//   .catch((err) => console.error('fail', err));

// liquibase({
//   changeLogFile: 'change-log-examples/postgreSQL/my_new_changelog.postgresql.sql',
//   url: 'jdbc:postgresql://localhost:5432/MYDATABASE_TEST',
//   classpath: 'Drivers/postgresql-42.2.8.jar',
//   username: 'postgres',
//   password: 'password',
//   logLevel: 'debug',
//   overwriteOutputFile: 'true',
//   logFile: 'myLog.log'
// })
//   .run('generateChangeLog')
//   .then(() => console.log('success'))
//   .catch((err) => console.error('fail', err));
