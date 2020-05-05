require('dotenv').config();
import test from 'ava';
import liquibase from './index';
import * as path from 'path';

test('Update Success', async (t) => {
	await t.notThrowsAsync(async () => {
		const config = {
			changeLogFile: path.join(__dirname, 'change-log-examples/postgreSQL/changelog.xml'),
			url: '"jdbc:postgresql://localhost:5432/postgres"',
			username: process.env.LOCAL_PG_USER || 'postgres',
			password: process.env.LOCAL_PG_PASS || 'admin',
			classpath: path.join(__dirname, './Drivers/postgresql-42.2.8.jar')
		};
		return await liquibase(config).run('update')
	});
});

test('Update Fail', async (t) => {
	await t.throwsAsync(async () => {
		const config = {
			changeLogFile: 'resources/liquibase/db.changelog.xml',
			url: '"jdbc:postgresql://localhost:5432/postgres"',
			username: process.env.LOCAL_MSSQL_USER || 'postgres!123',
			password: process.env.LOCAL_MSSQL_PASS || 'admin!123'
		};
		return await liquibase(config).run('update')
	});
});
