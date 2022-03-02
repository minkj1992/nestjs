# mongoose + graphql + nestjs

## 환경 세팅

```bash

nest new <프로젝트 이름> --skip-git
npm i @nestjs/mongoose mongoose
npm i -D @types/mongoose
mkdir app
cd src/app nest g mo person && nest g mo hobby
cd src/app/person && nest g service person --flat
cd src/app/hobby && nest g service hobby --flat

npm i @nestjs/common
```

## 주의사항

- entity안에 persistence, schema 계층이 통합되어 있기 때문에 ddd를 침해한다. 그렇기 때문에 model이라 명칭
- 하지만 중복해서 schema를 생성하는 것 보다 효율적이고 깔끔하다 생각된다.
