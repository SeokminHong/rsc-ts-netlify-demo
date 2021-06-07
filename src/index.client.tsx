import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { useServerResponse } from './components/Cache.client';
import Counter from './components/Counter.client';

const Root = () => (
  <div>
    <Suspense fallback={null}>
      <ErrorBoundary FallbackComponent={Error}>
        <Content />
      </ErrorBoundary>
    </Suspense>
    <div>
      Client Counter
      <Counter />
    </div>
  </div>
);

const Content = () => {
  const response = useServerResponse();
  return response.readRoot();
};

const Error = () => <div>Error</div>;

ReactDOM.unstable_createRoot(document.getElementById('app')!).render(<Root />);
