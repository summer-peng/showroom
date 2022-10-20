import { withTranslation } from 'react-i18next'

import Layout from '@/components/Layout'

import '../i18n.config.js'

import 'bootstrap/scss/bootstrap.scss'
import 'react-virtualized/styles.css'
import '/styles/globals.scss'
import '/styles/showroom-datatable.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default withTranslation()(MyApp)
