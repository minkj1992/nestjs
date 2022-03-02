# `guard`

- @Injectable()데코레이터로 주석이 달린 클래스 입니다.
- `guard`는 `CanActivate` 인터페이스를 구현해야합니다 .
- `Guards` are executed after each `middleware`, but before any `interceptor` or `pipe`.
- 역할
  - `token validation`
  - attaching `properties` to the `request` object are not strongly connected with a particular `route context` (and its metadata)
  - **`authorization`** (`AuthGuard`)
    - specific routes should be available only when the caller (usually a specific authenticated user) has sufficient permissions
- **They're designed, much like exception filters, pipes, and interceptors, to let you interpose processing logic at exactly the right point in the request/response cycle, and to do so declaratively. This helps keep your code DRY and declarative.**
