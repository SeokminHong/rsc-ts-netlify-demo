import React from 'react';

export default () => (
  <div className='main'>
    Build Date:{' '}
    <time dateTime={Date.now().toString()}>
      {Intl.DateTimeFormat('ko-KR', {
        hourCycle: 'h23',
        year: 'numeric',
        ...['month', 'day', 'hour', 'minute', 'second'].reduce(
          (acc, p) => ({ ...acc, [p]: '2-digit' }),
          {}
        ),
      }).format(Date.now())}
    </time>
  </div>
);
