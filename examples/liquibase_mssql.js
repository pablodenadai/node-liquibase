const liquibase = require("../lib/index");
// const path = require('path');  // Uncomment if needed

/**
 *******************************************
 ************ COMMANDS TEMPLATE ************
 *******************************************
 */
//const <command name> = require('../lib/index');

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
//   referenceUrl: '"jdbc:sqlserver://localhost;database=HR_DEV;"',
//   referenceUsername: 'system',
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
//   url: '"jdbc:sqlserver://localhost;database=HR_TEST;"',
//   classpath: 'Drivers/mssql-jdbc-7.4.1.jre8.jar',
//   username: 'system',
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
//   changeLogFile: 'change-log-examples/mssql/changelog.mssql.sql',
//   url: '"jdbc:sqlserver://localhost;database=HR_TEST;"',
//   classpath: 'Drivers/mssql-jdbc-7.4.1.jre8.jar',
//   username: 'system',
//   password: 'password',
//   logLevel: 'debug',
//   overwriteOutputFile: 'true',
//   logFile: 'myLog.log'
// })
//   .run('generateChangeLog')
//   .then(() => console.log('success'))
//   .catch((err) => console.error('fail', err));
