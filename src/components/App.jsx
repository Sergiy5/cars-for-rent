import { Route, Routes } from 'react-router-dom';
import styles from './styles/Wrapper.module.css';
import Favorite from 'pages/Favorite';
import Home from 'pages/Home';
import Catalog from './catalog/Catalog';
import Layout from './layout/Layout';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <div
      className={styles.wrapper}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorite />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
