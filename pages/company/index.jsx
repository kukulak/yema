import Head from 'next/head'
import styles from '../../styles/Company.module.css'
// import logo from '../public/yemaLogo.svg'

import InfoCompany from '../../components/acerca.component'

import Menu from '../../components/menu/menu.component';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import { offsetLimitPagination } from "@apollo/client/utilities";


export default function Company() {

  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache({
    typePolicies: {
        Query: {
        fields: {
            feed: offsetLimitPagination() 
            },
        },
        },
    })
  });

  return (
  
    <div className={styles.container}>
    
        

      <Head>
        <title>COMPANY</title>
        <link rel="icon" href="/favicon.ico" />   
      </Head>

      <main className={styles.main}>

        <Menu />

      
        
        <ApolloProvider client={client}>


           <InfoCompany />


        </ApolloProvider>

      </main>




      <footer className={styles.footerB}>
        <a
          href="https://valderrama.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          valderrama.dev{' '}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>


      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>

    </div>
    
  )
}
