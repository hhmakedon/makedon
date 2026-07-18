import { useEffect, useState } from 'react';
import type { NavItem } from '../types';
import { ThemeToggle } from './ThemeToggle';
import { Close, Menu } from './icons';
import type { Theme } from '../hooks/useTheme';

type NavbarProps = {
  items: NavItem[];
  activeSection: string;
  theme: Theme;
  scrolled: boolean;
  onToggleTheme: () => void;
};

export function Navbar({ items, activeSection, theme, scrolled, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape, and lock body scroll while it is open.
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-shell">
        <a className="brand" href="#home" aria-label="Havee Makedon — home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            HM
          </span>
          <span className="brand-name">Havee Makedon</span>
        </a>

        <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <ul className="nav-list">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  className={activeSection === item.id ? 'nav-active' : ''}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <button
        type="button"
        className="nav-scrim"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
