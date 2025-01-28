import { type ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import Home from './Pages/Home';
import Layout from './layout/Layout';
import ProductList from './Pages/ProductList';

const Router = (): ReactNode => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hotel" element={<ProductList />}>
            <Route path="hotelId" />
          </Route>
          <Route path="/motel" element={<ProductList />} />
          <Route path="/guest" element={<ProductList />} />
          <Route path="/leisure" element={<ProductList />} />
          <Route path="/activity" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
