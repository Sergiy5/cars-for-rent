import { Route, Routes } from 'react-router-dom';

import { Wrapper } from './styles/Wrapper.styled';
import Favorite from 'pages/Favorite';
import Home from 'pages/Home';
import Layout from './layout/Layout';
import NotFound from 'pages/NotFound';
import CatalogPage from 'pages/Catalog';

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorite" element={<Favorite />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Wrapper>
  );
};
