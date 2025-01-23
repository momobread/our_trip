import { type ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

const Router = (): ReactNode => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>hello</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
