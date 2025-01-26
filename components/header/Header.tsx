'use client'
import classes from '@/components/header/Header.module.css'

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {href: '/', title: 'home'},
  {href: '/todolist', title: 'ToDo List'},
  {href: '/calendar', title: 'Calendar'}
];
export default function Header() {
  const pathname = usePathname();
  return <header>
    <nav className={classes.nav}>
      <ul>
        {pages.map(({href, title}) => <li key={href} className={pathname === href? 'active' : ''}><Link href={href}>{title}</Link></li>)}
      </ul>
    </nav>
  </header>
}