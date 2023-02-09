import { Container } from 'react-bootstrap'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import PropTypes from 'prop-types'

import Breadcrumb from '@/components/Layout/BreadCrumb'
import Navigation from '@/components/Layout/Navigation'

import Menu from './Menu'

import styles from './styles.module.scss'

const Layout = ({ breadCrumbItems, children }) => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="main-layout">
        <Navigation />
        <div className={styles['content-container']}>
          <div className={styles['left-section']}>
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
