import { type ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import Home from './Pages/Home';
import Layout from './layout/Layout';

const Router = (): ReactNode => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hotel" element={<Home />} />
          <Route path="/motel" element={<Home />} />
          <Route path="/guest" element={<Home />} />
          <Route path="/leisure" element={<Home />} />
          <Route path="/activity" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
