import type { NavItem } from '../types';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../hooks/useTheme';

type NavbarProps = {
  items: NavItem[];
  activeSection: string;
  theme: Theme;
  onToggleTheme: () => void;
};

export function Navbar({ items, activeSection, theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="wordmark" href="#home">
          Havee Makedon
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
            <li>
              <a href="https://github.com/hhmakedon" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
