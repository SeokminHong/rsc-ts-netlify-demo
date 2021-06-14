declare module 'react-client' {
  type PendingChunk = {
    _status: 0;
    _value: null | Array<() => mixed>;
    _response: Response;
    then(resolve: () => mixed): void;
  };
  type ResolvedModelChunk = {
    _status: 1;
    _value: UninitializedModel;
    _response: Response;
    then(resolve: () => mixed): void;
  };
  type ResolvedModuleChunk<T> = {
    _status: 2;
    _value: ModuleReference<T>;
    _response: Response;
    then(resolve: () => mixed): void;
  };
  type InitializedChunk<T> = {
    _status: 3;
    _value: T;
    _response: Response;
    then(resolve: () => mixed): void;
  };
  type ErroredChunk = {
    _status: 4;
    _value: Error;
    _response: Response;
    then(resolve: () => mixed): void;
  };
  type SomeChunk<T> =
    | PendingChunk
    | ResolvedModelChunk
    | ResolvedModuleChunk<T>
    | InitializedChunk<T>
    | ErroredChunk;

  export type JSONValue =
    | string
    | number
    | boolean
    | null
    | { [key: string]: JSONValue }
    | Array<JSONValue>;

  type StringDecoder = TextDecoder;

  type FlightResponse = {
    _chunks: Map<number, SomeChunk<any>>;
    readRoot<T>(): T;
    _partialRow: string;
    _fromJSON: (key: string, value: JSONValue) => any;
    _stringDecoder: StringDecoder;
  };
}
