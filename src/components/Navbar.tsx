import type { NavItem } from '../types';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../hooks/useTheme';

type NavbarProps = {
  items: NavItem[];
  activeSection: string;
  theme: Theme;
  scrolled: boolean;
  onToggleTheme: () => void;
};

export function Navbar({ items, activeSection, theme, scrolled, onToggleTheme }: NavbarProps) {
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-shell">
        <a className="brand" href="#home" aria-label="Havee Makedon — home">
          <span className="brand-mark" aria-hidden="true">
            HM
          </span>
          <span className="brand-name">Havee Makedon</span>
        </a>

        <nav aria-label="Primary">
          <ul className="nav-list">
            {items.map((item) => (
              <li key={item.id}>
                <a className={activeSection === item.id ? 'nav-active' : ''} href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
