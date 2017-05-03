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
.run('update')
.then(() => console.log('success'))
.catch((err) => console.log('fail', err));
```

```js
const liquibase = require('liquibase');

liquibase({
  changeLogFile: 'resources/liquibase/db.changelog.xml',
  url: 'jdbc:postgresql://localhost:5432/postgres',
  username: 'postgres',
  password: 'admin'
})
.run('<action>', '<action-params>')
.then(() => console.log('success'))
.catch((err) => console.log('fail', err));
```


## License

MIT © [Pablo De Nadai](https://github.com/pablodenadai/node-liquibase)
