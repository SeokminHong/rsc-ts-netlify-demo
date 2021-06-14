declare module 'react-server-dom-webpack' {
  type FlightResponse = import('react-client').FlightResponse;
  function createFromFetch(
    promiseForResponse: Promise<Response>
  ): FlightResponse;
  function createFromReadableStream(stream: ReadableStream): FlightResponse;
  function createFromXHR(request: XMLHttpRequest): FlightResponse;
}
