# Pipes

> https://docs.nestjs.com/pipes

> A pipe is a class annotated with the @Injectable() decorator. Pipes should implement the PipeTransform interface.

- 파이프는 데코레이터
- @Injectable()을 키워드로 사용한다.
- PipeTransform 인터페이스를 구현해야 한다.
  - 이는 `custompipe`에만 해당한다.

## use case (2)

> for transformation, validation

- use case (2)
  1. transformation: transform input data to the desired form (e.g., from string to integer)
  2. validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception when the data is incorrect

## important notice

- **Nest interposes a pipe just before a method is invoked, and the pipe receives the arguments destined for the method and operates on them**
- Pipes run inside the exceptions zone
  - 즉 exception이 발생하면, controller가 실행되지 않음을 보장한다.
  - This gives you a best-practice technique for validating data coming into the application from external sources at the system boundary
- **Since TypeScript does not store metadata about generics or interfaces, when you use them in your DTOs, ValidationPipe may not be able to properly validate incoming data. For this reason, consider using concrete classes in your DTOs.**

## `ValidationPipe`

- global scope로 적용된다.
- `class-validator`(@nestjs/common) 에서 패키지에서 제공하는 데코레이터를 사용하여 수행합니다 . 이런 방식으로 사용하는 모든 경로는 이러한 유효성 검사 규칙을 자동으로 적용합니다.

- bootstrap() in main.ts

```ts
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app/app.module";

const appPort = 3000;

(async function () {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(appPort);
})();
```

- ValidationPipe페이로드를 DTO 클래스에 따라 유형이 지정된 객체로 자동 변환 할 수 있습니다. 자동 변환을 활성화하려면로 설정 transform하십시오 true. 이것은 메서드 수준에서 수행 할 수 있습니다.

```ts
@Post()
@UsePipes(new ValidationPipe({ transform: true }))
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}

// global scope로 세팅하려면
app.useGlobalPipes(
  new ValidationPipe({
    transform: true,
  }),
);
```
