import React from 'react';
import { Route, Routes } from 'react-router';

function Router(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<div>main</div>}></Route>
    </Routes>
  );
}

export default Router;
