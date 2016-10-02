koa2-cassandra-boilerplate
==========================

![MIT](https://img.shields.io/npm/l/express.svg) ![node version](https://img.shields.io/badge/node-v6.3.0-green.svg) [![docker build](https://img.shields.io/docker/automated/superalsrk/koa2-boilerplate.svg)](https://hub.docker.com/r/superalsrk/koa2-boilerplate/builds/)

A boilerplate application for building web apps using koa2, cassandra and passport.


### Features

- **Local Authentication** using passport
- **Cassandra** integration
- **Dockerfile** added to deploy the app
- **React and Redux** in the client
- **Webpack** configuration

### Structure
```
├── app
│   ├── actions
│   ├── components
│   ├── constants
│   ├── containers
│   ├── index.js
│   ├── reducers
│   └── store
├── Dockerfile
├── index.js
├── package.json
├── README.md
├── src
│   ├── config
│   ├── index.js
│   ├── lib
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── tmp
│   └── views
├── test
│   └── test.spec.js
├── webpack.config.js
└── webpack.prod.config.js

```

### Usage

```bash
$ npm install 

# Start application
$ npm run dev

# Run test cases
$ npm run test

# Generate test report
$ npm run report
```

### License

MIT


