## dependencies

```bash
[3:52:31 PM] File change detected. Starting incremental compilation...

[3:52:32 PM] Found 0 errors. Watching for file changes.

[Nest] 7892   - 01/30/2021, 3:52:33 PM   [ExceptionHandler] Nest can't resolve dependencies of the SpotService (SpotModel, ?). Please make sure that the argument SearchService at index [1] is available in the StickerModule context.

Potential solutions:
- If SearchService is a provider, is it part of the current StickerModule?
- If SearchService is exported from a separate @Module, is that module imported within StickerModule?
  @Module({
    imports: [ /* the Module containing SearchService */ ]
  })

Error: Nest can't resolve dependencies of the SpotService (SpotModel, ?). Please make sure that the argument SearchService at index [1] is available in the StickerModule context.

Potential solutions:
- If SearchService is a provider, is it part of the current StickerModule?
- If SearchService is exported from a separate @Module, is that module imported within StickerModule?
  @Module({
    imports: [ /* the Module containing SearchService */ ]
  })

    at Injector.lookupComponentInParentModules (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/@nestjs/core/injector/injector.js:188:19)
    at async Injector.resolveComponentInstance (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/@nestjs/core/injector/injector.js:144:33)
    at async resolveParam (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/@nestjs/core/injector/injector.js:98:38)

```
- service에서 사용하는 dependency들을 모두 module에 imports 해준다.

## DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.

```
(node:7798) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

- mongoose.set('useCreateIndex', true);

## 

```bash
(node:7798) UnhandledPromiseRejectionWarning: Error: Cannot determine a GraphQL input type for the "spotId". Make sure your class is decorated with an appropriate decorator.
    at InputTypeFactory.create (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/@nestjs/graphql/dist/schema-builder/factories/input-type.factory.js:19:23)
    at /Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/@nestjs/graphql/dist/schema-builder/factories/input-type-definition.factory.js:44:52
    at Array.forEach (<anonymous>)
    at /Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/@nestjs/graphql/dist/schema-builder/factories/input-type-definition.factory.js:42:33
    at resolveThunk (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/graphql/type/definition.js:480:40)
    at defineInputFieldMap (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/graphql/type/definition.js:1207:18)
    at GraphQLInputObjectType.getFields (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/graphql/type/definition.js:1155:27)
    at TypeFieldsAccessor.extractFromInputType (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/@nestjs/graphql/dist/schema-builder/services/type-fields.accessor.js:9:35)
    at /Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/@nestjs/graphql/dist/schema-builder/factories/input-type-definition.factory.js:56:66
    at resolveThunk (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/graphql/type/definition.js:480:40)
    at defineInputFieldMap (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/graphql/type/definition.js:1207:18)
    at GraphQLInputObjectType.getFields (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/graphql/type/definition.js:1155:27)
    at collectReferencedTypes (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/graphql/type/schema.js:376:81)
    at collectReferencedTypes (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/graphql/type/schema.js:372:11)
    at new GraphQLSchema (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/graphql/type/schema.js:157:7)
    at GraphQLSchemaFactory.<anonymous> (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/@nestjs/graphql/dist/schema-builder/graphql-schema.factory.js:40:28)
    at Generator.next (<anonymous>)
    at /Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/tslib/tslib.js:114:75
    at Promise._execute (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/cache-manager-mongodb/node_modules/bluebird/js/release/debuggability.js:384:9)
    at Promise._resolveFromExecutor (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/cache-manager-mongodb/node_modules/bluebird/js/release/promise.js:518:18)
    at new Promise (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/cache-manager-mongodb/node_modules/bluebird/js/release/promise.js:103:10)
    at Object.__awaiter (/Users/kakao/code/minkj1992/DaeDongYeoMap-Backend/node_modules/tslib/tslib.js:110:16)
(node:7798) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:7798) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```