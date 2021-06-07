declare module 'react-server-dom-webpack/writer.node.server' {
  type BundlerConfig = {
    [filepath: string]: {
      [name: string]: ModuleMetaData;
    };
  };
  type ModuleMetaData = {
    id: string;
    chunks: Array<string>;
    name: string;
  };
  type Options = {
    onError?: (error: any) => void;
  };
  export type ReactModel =
    | import('react').ReactElement<any>
    | string
    | boolean
    | number
    | null
    | Iterable<ReactModel>
    | ReactModelObject;
  type ReactModelObject = { [key: string]: ReactModel };

  function pipeToNodeWritable(
    model: ReactModel,
    destination: import('stream').Writable,
    webpackMap: BundlerConfig,
    options?: Options
  ): void;
}
