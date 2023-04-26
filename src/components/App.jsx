import { Routes, Route, Navigate } from 'react-router-dom';

import AboutMePage from './AboutMe';
import BirdsPage from './BirdsPage';
import Nav from './Nav';
import '../styles/styles.css';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/birding" element={<BirdsPage />} />
      <Route path="*" element={<Navigate to="/about" replace />} />
    </Routes>
  </>
);

export default App;
