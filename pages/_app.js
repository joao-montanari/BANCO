import '../styles/globals.css';
import Layout from '../components/Layout';

import { AuthContext } from '../context/AuthContext';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return(
      <AuthContext.Provider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </AuthContext.Provider>
  )
}

export default MyApp
