'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <h1>divyansh</h1>
          <p>programmer, reader, engineer</p>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blogs">Blog</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
