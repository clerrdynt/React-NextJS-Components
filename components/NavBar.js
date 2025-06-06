"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.css';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
      {[
        { href: '/', label: 'Home' },
        { href: '/counter', label: 'Counter' },
        { href: '/student-info', label: 'Student Info' },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? styles.active : ''}
        >
          {label}
        </Link>
      ))}
    </nav>
    </header>
  );
};

export default NavBar;
