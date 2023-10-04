import { useState } from 'react'
import { Container } from 'react-bootstrap'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import classnames from 'classnames'
import Head from 'next/head'
import PropTypes from 'prop-types'

import Breadcrumb from '@/components/Layout/BreadCrumb'
import Navigation from '@/components/Layout/Navigation'

import Menu from './Menu'

import styles from './styles.module.scss'

const Layout = ({ breadCrumbItems, children }) => {
  const [toggle, setToggle] = useState(true)

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Head>
        <meta charSet="utf-8" />
      </Head>

      <div className="main-layout">
        <Navigation setToggle={() => setToggle(!toggle)} />
        <div className={styles['content-container']}>
          <div
            className={classnames(
              styles[`left-section-${toggle ? 'active' : 'none'}`],
            )}
          >
            <Menu />
          </div>
          <div className={styles['right-section']}>
            <Breadcrumb items={breadCrumbItems} />
            <Container className="content-container">{children}</Container>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  breadCrumbItems: PropTypes.array,
  children: PropTypes.node,
}

export default Layout
