import { Link } from 'react-router-dom';

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

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="text-center mb-5">
        <h1>3D Universalis — Ad Landing Pages</h1>
        <p className="lead text-muted">Marketing assets from a 3D printing startup (2018–2020)</p>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="card border-0 bg-light p-4">
            <h5 className="mb-3">About this project</h5>
            <p>
              3D Universalis was a 3D printing services startup co-founded in 2018, incubated at{' '}
              <strong>HEC Montréal</strong> and financed by <strong>Futurpreneur</strong>. The company
              offered on-demand 3D printing, scanning, prototyping, and custom mold services to clients
              in the Montréal region.
            </p>
            <p>
              This repository preserves the <strong>bilingual (FR/EN) marketing landing pages</strong>{' '}
              used in Google Adsense and Facebook ad campaigns to generate qualified leads across several
              service verticals. Each page was targeted to a specific audience (architects, industrial
              designers, manufacturers, etc.) and optimized for conversion.
            </p>
            <p>
              The contact forms on each landing page were connected to a serverless backend:{' '}
              <strong>AWS Lambda</strong> processed form submissions and triggered{' '}
              <strong>Amazon Simple Notification Service (SNS)</strong> to deliver lead notifications
              by email and push data into our CRM.
            </p>
            <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
              Stack: React · SCSS · AWS Lambda · Amazon SNS · AWS (EC2, S3) for 3D rendering · Google Tag Manager · GitHub Pages
            </p>
          </div>
        </div>
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
