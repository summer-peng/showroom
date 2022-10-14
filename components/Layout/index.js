import { Container } from 'react-bootstrap'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import PropTypes from 'prop-types'

import Breadcrumb from '@/components/BreadCrumb'
import Navigation from '@/components/Navigation'

const Layout = ({ breadCrumbItems, children }) => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="main-layout">
        <Navigation />
        <Breadcrumb items={breadCrumbItems} />
        <Container className="content-container">{children}</Container>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  breadCrumbItems: PropTypes.array,
  children: PropTypes.node,
}

export default Layout
