# React Server Components + TypeScript + Netlify Functions

A demo project to study [React Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html).

## Installation

```shell
npm install -g netlify-cli
yarn install
```

## Run

```shell
yarn develop
```

Then, open [http://localhost:8080/](http://localhost:8080/). (Please ignore Netlify Dev's prompt for localhost:8888)

## TODO

- [ ] Implement production mode.
- [ ] Fix error for embedding client components in server components.
- [ ] Fix `FlightResponse` type.
- [ ] Connect to database.
- [ ] Support hot reloading for server components.

## References

- https://github.com/netlify/react-server-components-demo
- https://github.com/reactjs/server-components-demo
