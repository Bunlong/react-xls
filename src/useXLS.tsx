import React from 'react';

export function useXLS(): any {
  const Component = React.useMemo(
    () =>
      () => {
        return (
          <p>React hooks</p>
        );
      },
    []
  );

  return {
    Component,
  };
}
