# Mongoose

> https://docs.nestjs.com/techniques/mongodb

## 스키마

NoSQL 다큐먼트에 아무거나 넣어도 에러가 생기지 않습니다. 이러한 문제를 막기 위해 몽구스는 Schema(스키마)를 도입했습니다. 몽구스는 사용자가 작성한 스키마를 기준으로 데이터를 DB에 넣기 전에 먼저 검사합니다.

```ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
```

## Module

- `imports: [MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),]`
  - 현재 모듈의 스코프에 어떤 레포지토리들이 등록되었는지 지정
  - 내부 scope의 레포지토리를 등록할때 사용


## LINKS

- https://www.zerocho.com/category/MongoDB/post/59a1870210b942001853e250
-
