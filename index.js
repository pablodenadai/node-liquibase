#!/usr/bin/env node
const childProcess = require('child_process');


class Liquibase {
	/**
	 * Returns an instance of a lightweight Liquibase Wrapper.
	 * @param {*} params default parameters for Liquibase
	 * @example
	 * ```javascript
	 * const liquibase = require('liquibase');
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
	constructor(params = {}) {
		const defaultParams = {
			// MSSQL Default Parameters
			liquibase: 'liquibase-4.0.0/liquibase',
			changeLogFile: 'changeLog_examples/mssql/changelog.mssql.sql',
			url: '"jdbc:sqlserver://<IP OR HOSTNAME>:<port number>;database=<database name>;"',
			username: '<username>',
			password: '<password>',
			liquibaseProLicenseKey: '<paste liquibase-pro-license-key here>',
			classpath: 'Drivers/mssql-jdbc-7.4.1.jre8.jar'

			// PostgreSQL Default Parameters Template
			// liquibase: 'liquibase-4.0.0/liquibase',
			// changeLogFile: 'changeLog_examples/postgreSQL/changelog.postgresql.sql',
			// url: 'jdbc:postgresql://<host>:5432/MYDATABASE_TEST',
			// username: 'postgres',
			// password: 'password',
			// liquibaseProLicenseKey: '<paste liquibase-pro-license-key here>',
			// classpath: 'Drivers/postgresql-42.2.8.jar'
		};

		this.params = Object.assign({}, defaultParams, params);
	}

	/**
	 * Internal Getter that returns a node child process compatible command string.
	 * @returns {string}
	 * @private
	 */
	get command() {
		let cmd = `${this.params.liquibase}`;
		Object.keys(this.params).forEach(key => {
			if (key === 'liquibase') {
				return;
			}
			const value = this.params[key];
			cmd = `${cmd} --${key}=${value}`;
		});
		return cmd;
	}

	/**
	 * 
	 * Internal method for executing a child process.
	 * @param {*} command Liquibase command
	 * @param {*} options any options
	 * @private
	 * @returns {Promise} Promise of a node child process.
	 */
	exec(command, options = {}) {
		let child;
		let promise = new Promise((resolve, reject) => {
			child = childProcess
				.exec(command, options, (error, stdout, stderr) => {
					console.log(stdout);
					console.error(stderr);
					if (error) {
						error.stderr = stderr;
						return reject(error);
					}
					resolve({ stdout: stdout });
				});
		});
		promise.child = child;
		return promise;
	}

	/**
	 * Executes a Liquibase command.
	 * @param {*} action a string for the Liquibase command to run. Defaults to `'update'`
	 * @param {*} params any parameters for the command
	 * @returns {Promise} Promise of a node child process.
	 */
	run(action = 'update', params = '') {
		return this.exec(`${this.command} ${action} ${params}`);
	}
}

module.exports = params => new Liquibase(params);
