import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portal from './packages/pages/portal';
import Login from './packages/pages/login';
import Workspace from './packages/pages/workspace';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workspace" element={<Workspace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
