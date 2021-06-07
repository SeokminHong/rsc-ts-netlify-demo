import 'react';
import 'react-dom';

declare module 'react' {
  function unstable_getCacheForType<T>(resourceType: () => T): T;
  function unstable_useCacheRefresh<T>(): (
    resourceType?: () => T,
    value?: T
  ) => void;
}
declare module 'react-dom' {
  function unstable_createRoot(
    container: Element | Document | DocumentFragment | Comment,
    options?: RootOptions
  ): Root;
}
