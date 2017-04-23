const childProcess = require('child_process');

class Liquibase {
	constructor(params = {}) {
		this.liquibase = params.liquibase || process.env.NODE_LIQUIBASE || 'lib/liquibase-core-3.5.3.jar';
		this.driver = params.driver || process.env.NODE_LIQUIBASE_DRIVER || 'org.postgresql.Driver';
		this.classpath = params.classpath || process.env.NODE_LIQUIBASE_CLASSPATH || 'lib/postgresql-9.4-1201.jdbc4.jar';

		this.changeLogFile = params.changeLogFile || process.env.NODE_LIQUIBASE_CHANGE_LOG_FILE;
		this.url = params.url || process.env.NODE_LIQUIBASE_URL;
		this.username = params.username || process.env.NODE_LIQUIBASE_USERNAME;
		this.password = params.password || process.env.NODE_LIQUIBASE_PASSWORD;

		this.defaultsFile = params.defaultsFile || process.env.NODE_LIQUIBASE_DEFAULTS_FILE;

		if (!this.defaultsFile) {
			if (!this.changeLogFile) {
				throw new Error('changeLogFile is undefined');
			}
			if (!this.url) {
				throw new Error('url is undefined');
			}
			if (!this.username) {
				throw new Error('username is undefined');
			}
		}
	}

	get command() {
		const cmd = `java -jar ${this.liquibase}`;

		if (this.defaultsFile) {
			return `${cmd} --defaultsFile=${this.defaultsFile}`;
		}

		return `${cmd}\
			--driver=${this.driver}\
			--classpath=${this.classpath}\
			--changeLogFile=${this.changeLogFile}\
			--url="${this.url}"\
			--username=${this.username}\
			--password=${this.password}\
		`;
	}

	exec(command, options = {}) {
		let child;
		let promise = new Promise((resolve, reject) => {
			child = childProcess
				.exec(command, options, (error, stdout, stderr) => {
					if (error) {
						error.stderr = stderr;
						return reject(error);
					}
					resolve({stdout: stdout});
				});
		});
		promise.child = child;
		return promise;
	}

	update() {
		return this.exec(`${this.command} update`);
	}
}

module.exports = (params = {}) => new Liquibase(params);
