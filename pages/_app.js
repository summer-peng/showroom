import SSRProvider from 'react-bootstrap/SSRProvider'
import { withTranslation } from 'react-i18next'
import useToggle from 'hooks/useToggle.js'
import { SessionProvider } from 'next-auth/react'

import Auth from '@/components/Auth'
import BlockUI from '@/components/commons/BlockUI'
import BlockUIContext from '@/components/commons/BlockUI/context'
import Layout from '@/components/Layout'

import '../i18n.config.js'

import 'bootstrap/scss/bootstrap.scss'
import 'draft-js/dist/Draft.css'
import 'styles/RichEditor.css'
import 'self-maintenance-lib/fontawesome-free-6.2.1-web/css/all.min.css'
import 'react-virtualized/styles.css'
import '../styles/globals.scss'
import '../styles/showroom-datatable.scss'

function MyApp({ Component, session, pageProps }) {
  const { toggle, open, close } = useToggle()

  if (Component.customizedPage) {
    return (
      <BlockUIContext.Provider
        value={{ show: toggle, blockUI: open, unBlockUI: close }}
      >
        <Component {...pageProps} />
        <BlockUI />
      </BlockUIContext.Provider>
    )
  }

  return (
    <SessionProvider session={session}>
      <SSRProvider>
        <Layout {...pageProps}>
          <BlockUIContext.Provider
            value={{ show: toggle, blockUI: open, unBlockUI: close }}
          >
            {Component.auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
            <BlockUI />
          </BlockUIContext.Provider>
        </Layout>
      </SSRProvider>
    </SessionProvider>
  )
}

export default withTranslation()(MyApp)
