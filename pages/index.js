import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import logo from '../public/yemaLogo.svg'

import Cards from '../components/cards.component'

import Menu from '../components/menu/menu.component';

import TheApolloClient from '../components/apolloClient.component';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import { offsetLimitPagination } from "@apollo/client/utilities";



// import { withApollo } from '../libs/apollo';


export default function Home() {

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
        <title>spaceXfor YEMA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <Menu />

        <ApolloProvider client={client}>
          <Cards />
        </ApolloProvider>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>


    </div>
    
  )
}
