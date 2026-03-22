import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    const pages = {
      'Francais': [
        { path: '/fr/impression-3d', label: 'Impression 3D' },
        { path: '/fr/architecture', label: 'Architecture' },
        { path: '/fr/maquettes', label: 'Maquettes' },
        { path: '/fr/industriel', label: 'Industriel' },
        { path: '/fr/services/scan-3d', label: 'Scan 3D' },
        { path: '/fr/services/prototypes', label: 'Prototypes' },
        { path: '/fr/services/creation-logo-3d', label: 'Creation Logo 3D' },
        { path: '/fr/services/moules-et-matrices', label: 'Moules et Matrices' },
      ],
      'English': [
        { path: '/en/3d-printing', label: '3D Printing' },
        { path: '/en/architecture', label: 'Architecture' },
        { path: '/en/industrial', label: 'Industrial' },
        { path: '/en/services/3d-scan', label: '3D Scan' },
        { path: '/en/services/prototyping', label: 'Prototyping' },
        { path: '/en/services/3d-logo-printing', label: '3D Logo Printing' },
        { path: '/en/services/custom-molds', label: 'Custom Molds' },
      ],
    };

    return (
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="text-center mb-5">
          <h1>3D Universalis</h1>
          <p className="lead text-muted">Landing Pages</p>
        </div>
        <div className="row">
          {Object.entries(pages).map(([lang, links]) => (
            <div className="col-md-6" key={lang}>
              <h2 className="mb-4">{lang}</h2>
              <ul className="list-group mb-4">
                {links.map(link => (
                  <li className="list-group-item" key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
