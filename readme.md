> Node.js wrapper for Liquibase


## Install

```
$ npm install --save liquibase
```


## Usage
From the index.js file adjust "<>" fields accordingly:
```js
//******** MSSQL default parameters template *********
liquibase: 'liquibase-4.0.0/liquibase',
changeLogFile: 'change-log-examples/mssql/changelog.mssql.sql',
url: '"jdbc:sqlserver://<IP OR HOSTNAME>:<port number>;database=<database name>;"',
username: '<username>',
password: '<password>',
liquibaseProLicenseKey: '<paste liquibase-pro-license-key here>',
classpath: 'Drivers/mssql-jdbc-7.4.1.jre8.jar
```

```js
//******** postgreSQL default parameters template *********
// liquibase: 'liquibase-4.0.0/liquibase',
// changeLogFile: 'change-log-examples/postgreSQL/changelog.postgresql.sql',
// url: 'jdbc:postgresql://<host>:5432/MYDATABASE_TEST',
// username: 'postgres',
// password: 'password',
// liquibaseProLicenseKey: '<paste liquibase-pro-license-key here>',
// classpath: 'Drivers/postgresql-42.2.8.jar'
```

```js
.run('<action>', '<action-params>')
.then(() => console.log('success'))
.catch((err) => console.error('fail', err));
```
run `node liquibase_mssql.js` or `node liquibase_postgresql.js` sample files

## Development
## Build
If you need to build local code changes, you may do so with:
```bash
npm run build
```

### Tests
Run tests with:
```shell
npm run test
```

To substitute your own user/pass for a given environment, make a copy of `.env.example` in root directory as `.env` and update accordingly.

