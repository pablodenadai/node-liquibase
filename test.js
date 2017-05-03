import test from 'ava';
import fn from '.';

test('update success', async t => {
	await fn({
		changeLogFile: 'resources/liquibase/db.changelog.xml',
		url: '"jdbc:postgresql://localhost:5432/postgres"',
		username: 'postgres',
		password: 'admin'
	})
	.run('update')
	.then(data => t.is(data.stdout, ''))
	.catch(err => {
		console.log(err);
		t.fail();
	});
});

test('update fail', async t => {
	await fn({
		changeLogFile: 'resources/liquibase/db.changelog.xml',
		url: '"jdbc:postgresql://localhost:5432/postgres"',
		username: 'postgres!123',
		password: 'admin!123'
	})
	.run('update')
	.then(() => t.fail())
	.catch(() => t.pass());
});
