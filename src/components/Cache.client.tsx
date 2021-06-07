/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { unstable_getCacheForType, unstable_useCacheRefresh } from 'react';
import { createFromFetch } from 'react-server-dom-webpack';

function createResponseCache() {
  return new Map();
}

export function useRefresh() {
  const refreshCache = unstable_useCacheRefresh();
  return function refresh(key: unknown, seededResponse: unknown) {
    refreshCache(createResponseCache, new Map([[key, seededResponse]]));
  };
}

const DEV_URL = 'http://localhost:8888';
const PROD_URL = '';

export function useServerResponse(...props: any) {
  const key = JSON.stringify(props);
  const cache = unstable_getCacheForType(createResponseCache);
  let response = cache.get(key);
  if (response) {
    return response;
  }
  response = createFromFetch(
    fetch(
      `${
        process.env['NODE_ENV'] === 'development' ? DEV_URL : PROD_URL
      }/.netlify/functions/server?props=` + encodeURIComponent(key)
    )
  );
  cache.set(key, response);
  return response;
}
