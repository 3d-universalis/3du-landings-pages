import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';
import Home from './Home';
import ArchitectureEN from './industries/en/Architecture';
import ArchitectureFR from './industries/fr/Architecture';
import ThreeDPrintingFR from './industries/fr/ThreeDPrinting';
import ThreeDPrintingEN from './industries/en/ThreeDPrinting';
import Scan3dFR from './industries/fr/Scan3D';
import Scan3dEN from './industries/en/Scan3D';
import IndustrielFR from './industries/fr/Industriel';
import IndustrielEN from './industries/en/Industriel';
import PrototypingFR from './industries/fr/Prototyping';
import PrototypingEN from './industries/en/Prototyping';
import LogoFR from './industries/fr/Logo';
import LogoEN from './industries/en/Logo';
import MoldFR from './industries/fr/Mold';
import MoldEN from './industries/en/Mold';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en/architecture" element={<ArchitectureEN />} />
        <Route path="/fr/architecture" element={<ArchitectureFR />} />
        <Route path="/fr/maquettes" element={<ArchitectureFR />} />
        <Route path="/fr/impression-3d" element={<ThreeDPrintingFR />} />
        <Route path="/en/3d-printing" element={<ThreeDPrintingEN />} />
        <Route path="/fr/services/scan-3d" element={<Scan3dFR />} />
        <Route path="/en/services/3d-scan" element={<Scan3dEN />} />
        <Route path="/fr/industriel" element={<IndustrielFR />} />
        <Route path="/en/industrial" element={<IndustrielEN />} />
        <Route path="/fr/services/prototypes" element={<PrototypingFR />} />
        <Route path="/en/services/prototyping" element={<PrototypingEN />} />
        <Route path="/fr/services/creation-logo-3d" element={<LogoFR />} />
        <Route path="/en/services/3d-logo-printing" element={<LogoEN />} />
        <Route path="/fr/services/moules-et-matrices" element={<MoldFR />} />
        <Route path="/en/services/custom-molds" element={<MoldEN />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
