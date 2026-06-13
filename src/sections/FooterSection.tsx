import { ArrowUp } from '../components/icons';

export function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <a className="footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            HM
          </span>
          Havee Makedon
        </a>

        <p className="footer-meta">
          © {new Date().getFullYear()} · Built with React &amp; Vite
        </p>

        <a className="footer-top" href="#home">
          Back to top
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
}
