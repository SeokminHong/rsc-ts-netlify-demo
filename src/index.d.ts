import 'react-dom';

declare module 'react-dom' {
  function unstable_createRoot(container: Element | Document | DocumentFragment | Comment, options?: RootOptions): Root;
}
