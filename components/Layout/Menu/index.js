import { useEffect, useState } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { menuService } from './api'

import styles from './styles.module.scss'

export default function Menu() {
  const [menu, setMenu] = useState([])

  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    menuService().then((data) => {
      setMenu(data)
    })
  }, [])

  return (
    <nav className={styles['menu']}>
      <ul>
        {menu.map(({ name, link, children = [] }, index) => {
          const childNode = children.find(({ link }) => {
            return link === pathname
          })
          return (
            <li
              className={classnames(
                pathname === link || childNode ? styles['nav-active'] : null,
              )}
              key={index}
            >
              <Link href={link}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
