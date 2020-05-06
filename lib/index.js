#!/usr/bin/env node
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var childProcess = require('child_process');

var path = require('path');

var Liquibase = /*#__PURE__*/function () {
  /**
   * Returns an instance of a lightweight Liquibase Wrapper.
   * @param {Object} params default parameters for Liquibase
   * @param {String} params.liquibase - Absolute path to your Liquibase executable.
   * @param {String} params.changeLogFile - Absolute path to your Change Log File
   * @param {String} params.url - JDBC connection string
   * @param {String} params.username - username
   * @param {String} params.password - password
   * @param {String} params.liquibaseProLicenseKey - Your Liquibase Pro License key
   * @param {String} params.classpath - Absolute path to your JDBC driver jar file
   * 
   * @example
   * ```javascript
   * const liquibase = require('node-liquibase');
   *
   * const config = {
   *   contexts: 'TEST,DEV',
   *   labels: 'staging,Jira-1200',
   *   logLevel: 'debug',
   *   overwriteOutputFile: 'true',
   *   logFile: 'myLog.log'
   * };
   *
   * liquibase(config)
    *   .run('status', '--verbose')
    *   .then(() => console.log('success'))
    *   .catch((err) => console.error('fail', err));
   * ```
   */
  function Liquibase() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Liquibase);

    var defaultParams = {
      // MSSQL Default Parameters
      liquibase: path.join(__dirname, './liquibase-4.0.0/liquibase'),
      changeLogFile: path.join(__dirname, './change-log-examples/mssql/changelog.mssql.sql'),
      url: '"jdbc:sqlserver://<IP OR HOSTNAME>:<port number>;database=<database name>;"',
      username: '<username>',
      password: '<password>',
      // liquibaseProLicenseKey: '<paste liquibase-pro-license-key here>',
      classpath: path.join(__dirname, './Drivers/mssql-jdbc-7.4.1.jre8.jar') // PostgreSQL Default Parameters Template
      // liquibase: 'liquibase-4.0.0/liquibase',
      // changeLogFile: 'change-log-examples/postgreSQL/changelog.postgresql.sql',
      // url: 'jdbc:postgresql://<IP OR HOSTNAME>:5432/MYDATABASE_TEST',
      // username: 'postgres',
      // password: 'password',
      // //liquibaseProLicenseKey: '<paste liquibase-pro-license-key here>',
      // classpath: 'Drivers/postgresql-42.2.8.jar'

    };
    this.params = Object.assign({}, defaultParams, params);
  }
  /**
   * Executes a Liquibase command.
   * @param {*} action a string for the Liquibase command to run. Defaults to `'update'`
   * @param {*} params any parameters for the command
   * @returns {Promise} Promise of a node child process.
   */


  _createClass(Liquibase, [{
    key: "run",
    value: function run() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'update';
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return this._exec("".concat(this._command, " ").concat(action, " ").concat(params));
    }
    /**
     * Internal Getter that returns a node child process compatible command string.
     * @returns {string}
     * @private
     */

  }, {
    key: "_exec",

    /**
     *
     * Internal method for executing a child process.
     * @param {*} command Liquibase command
     * @param {*} options any options
     * @private
     * @returns {Promise} Promise of a node child process.
     */
    value: function _exec(command) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      console.warn(command);
      var child;
      var promise = new Promise(function (resolve, reject) {
        child = childProcess.exec(command, options, function (error, stdout, stderr) {
          console.log('\n', stdout);
          console.error('\n', stderr);

          if (error) {
            error.stderr = stderr;
            return reject(error);
          }

          resolve({
            stdout: stdout
          });
        });
      });
      promise.child = child;
      return promise;
    }
  }, {
    key: "_command",
    get: function get() {
      var _this = this;

      var cmd = "".concat(this.params.liquibase);
      Object.keys(this.params).forEach(function (key) {
        if (key === 'liquibase') {
          return;
        }

        var value = _this.params[key];
        cmd = "".concat(cmd, " --").concat(key, "=").concat(value);
      });
      return cmd;
    }
  }]);

  return Liquibase;
}();

module.exports = function (params) {
  return new Liquibase(params);
};