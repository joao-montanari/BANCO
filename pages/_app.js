import '../styles/globals.css';
import Layout from '../components/Layout';
import { AuthenticationProvider } from './context/AuthenticationContext';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  return(
    <AuthenticationProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </AuthenticationProvider>
  )
}

export default MyApp
