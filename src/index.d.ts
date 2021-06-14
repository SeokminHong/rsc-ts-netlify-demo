import 'react';

declare module 'react' {
  function unstable_getCacheForType<T>(resourceType: () => T): T;
  function unstable_useCacheRefresh<T>(): (
    resourceType?: () => T,
    value?: T
  ) => void;
}
