import React from 'react';
import { pipeToNodeWritable } from 'react-server-dom-webpack/writer.node.server';
import { Writable } from 'stream';
import { Handler } from '@netlify/functions';
import App from '../src/components/App.server';

class Writer extends Writable {
  buffer: string[];
  handlers: {
    [K in string]: ((s: string) => void)[];
  };
  constructor() {
    super();
    this.buffer = [];
    this.handlers = {};
  }
  write(chunk: any) {
    try {
      this.buffer.push(chunk.toString());
      return true;
    } catch {
      return false;
    }
  }
  end() {
    const handlers = this.handlers.done;
    if (handlers) {
      handlers.forEach((fn) => {
        fn(this.buffer.join());
      });
    }
  }
  on(event: string, listener: (...args: any[]) => void) {
    const chain = (this.handlers[event] = this.handlers[event] || []);
    chain.push(listener);
    return this;
  }
}

export const handler: Handler = async function (event, context) {
  const writer = new Writer();
  const props = JSON.parse(event.queryStringParameters?.props || '');

  return new Promise((resolve, reject) => {
    writer.on('done', (result: string) =>
      resolve({
        statusCode: 200,
        body: result,
        headers: {
          'Content-Type': 'application/text',
          'X-Props': JSON.stringify(props),
          'Access-Control-Allow-Origin':
            process.env.NODE_ENV === 'development' && '*',
        },
      })
    );
    pipeToNodeWritable(React.createElement(App, props), writer, {});
  });
};
