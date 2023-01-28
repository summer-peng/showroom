import SSRProvider from 'react-bootstrap/SSRProvider'
import { withTranslation } from 'react-i18next'

import Layout from '@/components/Layout'

import '../i18n.config.js'

import 'bootstrap/scss/bootstrap.scss'
import 'self-maintenance-lib/fontawesome-free-6.2.1-web/scss/fontawesome.scss'
import 'self-maintenance-lib/fontawesome-free-6.2.1-web/scss/regular.scss'
import 'self-maintenance-lib/fontawesome-free-6.2.1-web/scss/solid.scss'
import 'react-virtualized/styles.css'
import '../styles/globals.scss'
import '../styles/showroom-datatable.scss'

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default withTranslation()(MyApp)
