import test from 'ava';
import fn from '.';

test('constructor fail - no changeLogFile param or env variable', t => {
	const error = t.throws(fn);

	t.is(error.message, 'changeLogFile is undefined');
});

test('constructor fail - no url param or env variable', t => {
	const error = t.throws(() => {
		fn({
			changeLogFile: 'resources/liquibase/db.changelog.xml'
		});
	});

	t.is(error.message, 'url is undefined');
});

test('constructor fail - no username param or env variable', t => {
	const error = t.throws(() => {
		fn({
			changeLogFile: 'resources/liquibase/db.changelog.xml',
			url: 'jdbc:postgresql://localhost:5432/postgres'
		});
	});

	t.is(error.message, 'username is undefined');
});

test('update success - params', async t => {
	await fn({
		changeLogFile: 'resources/liquibase/db.changelog.xml',
		url: 'jdbc:postgresql://localhost:5432/postgres',
		username: 'postgres',
		password: 'admin'
	})
	.update()
	.then(data => t.is(data.stdout, ''))
	.catch(() => t.fail());
});

test('update success - defaults file', async t => {
	await fn({
		defaultsFile: 'resources/liquibase/liquibase.properties'
	})
	.update()
	.then(data => t.is(data.stdout, ''))
	.catch(() => t.fail());
});

test('update fail - params with wrong credentials', async t => {
	await fn({
		changeLogFile: 'resources/liquibase/db.changelog.xml',
		url: 'jdbc:postgresql://localhost:5432/postgres',
		username: 'postgres!123',
		password: 'admin!123'
	})
	.update()
	.then(() => t.fail())
	.catch(() => t.pass());
});
