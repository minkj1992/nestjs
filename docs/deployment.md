# `NestJS` deployment

```
process.env.NODE_ENV 관리하는 방법
Heroku cli 적용 시키는 방법
tsc / dist / package.json 관리하는 방법
```

## what is `process.env`
> http://afrobambacar.github.io/2017/03/proccess-env-of-nodejs.html



## cli

```
nest build
# == tsc == compile an application 

nest start
# compiles and run an application
# == npm run build && npm run start
```

- scripts

```json
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
```

