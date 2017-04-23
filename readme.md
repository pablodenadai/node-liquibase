# Node Liquibase [![Build Status](https://travis-ci.org/pablodenadai/node-liquibase.svg?branch=master)](https://travis-ci.org/pablodenadai/node-liquibase) [![Coverage Status](https://coveralls.io/repos/github/pablodenadai/node-liquibase/badge.svg?branch=master&cache-buster=1)](https://coveralls.io/github/pablodenadai/node-liquibase?branch=master)

> Node.js wrap for Liquibase


## Install

```
$ npm install --save liquibase
```


## Usage

```js
const liquibase = require('liquibase');

liquibase({
  defaultsFile: 'resources/liquibase/liquibase.properties'

  // liquibase: 'lib/liquibase-core-3.5.3.jar',
  // driver: 'org.postgresql.Driver',
  // classpath: 'lib/postgresql-9.4-1201.jdbc4.jar',
  // changeLogFile: 'resources/liquibase/db.changelog.xml',
  // url: 'jdbc:postgresql://localhost:5432/postgres',
  // username: 'postgres',
  // password: 'admin'
})
.update()
.then(() => console.log('success'))
.catch((err) => console.log('fail', err));
```


## API

### liquibase(params)

#### params

##### liquibase

Type: `string`

Path to core Liquibase JAR file. Defaults to `process.env.NODE_LIQUIBASE` or `'lib/liquibase-core-3.5.3.jar'`.

##### driver

Type: `string`

JDBC driver's name. Defaults to `process.env.NODE_LIQUIBASE_DRIVER` or `'org.postgresql.Driver'`.

##### classpath

Type: `string`

Path to JDBC driver JAR file. Defaults to `process.env.NODE_LIQUIBASE_CLASSPATH` or `'lib/postgresql-9.4-1201.jdbc4.jar'`.

##### changeLogFile

Type: `string`

Path to Liquibase changelog entry file. Defaults to `process.env.NODE_LIQUIBASE_CHANGE_LOG_FILE`.

##### url

Type: `string`

Database URL. Defaults to `process.env.NODE_LIQUIBASE_URL`.

##### username

Type: `string`

Database username. Defaults to `process.env.NODE_LIQUIBASE_USERNAME`.

##### password

Type: `string`

Database password. Defaults to `process.env.NODE_LIQUIBASE_PASSWORD`.

##### defaultsFile

Type: `string`

Path to Liquibase properties file. If provided, it will take priority over other properties. Defaults to `process.env.NODE_LIQUIBASE_DEFAULTS_FILE`.

## Todo
- Implement other [Liquibase commands](http://www.liquibase.org/documentation/command_line.html).

## License

MIT © [Pablo De Nadai](https://github.com/pablodenadai/node-liquibase)
