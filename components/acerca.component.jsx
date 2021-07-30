import React, { useState } from 'react';

import Acerca from './acerca/acercaallInfo.component'
import styles from './acerca/acerca.module.scss';
import Link from "next/link"; 
import Btns from './acerca/acercaBtns';
import BigInfo from './acerca/acercaBigInfo.component';


import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  


export default function InfoCompany() {


   
    const INFO_COMPANY = gql`
        {
            company {
                ceo
                coo
                cto_propulsion
                cto
                employees
                founded
                founder
                name
                summary
                links {
                  elon_twitter
                  flickr
                  twitter
                  website
                }
                headquarters {
                  address
                  city
                  state
                }
            }
        }`;


    
    
    const CompanyInfo = () => {
      
        const { loading, error, data } = useQuery(INFO_COMPANY);

        
        if (loading) return <p>Cargando Company...</p>;
        if (error) return <p>Oh no, an error :0</p>;
        
        
        return (
            <div className={styles.gridContent}>
            <div className={styles.contenedorInfos}>
         
                <Acerca text="CEO, CTO & Founder" summary={ data.company.ceo } />
                <Acerca text="COO" summary={ data.company.coo } />
                {/* <Acerca text="CTO Propulsion" summary={ data.company.cto_propulsion } /> */}
               
                <Acerca text="Founded" summary={ data.company.founded } />
        
                
            {/* {data.launchesPast.map((launch) => (
                <li key={launch.id}>{launch.mission_name}</li>
                ))} */}
            </div>

            <div className={styles.links}>
                    <Btns imgLogo='/008-twitter.png' text="Elon's Twitter" source={ data.company.links.elon_twitter } />
                    <Btns imgLogo='/web.png' text="spaceX" source={ data.company.links.website } />
            </div>


            <div className={styles.contenedorBigText}>
                <BigInfo summary={ data.company.summary } />
                 
            </div>
        </div>
        );

   
      
      }

    return (

        <div className={styles.infoContenedor}>
                  
                 <CompanyInfo/>
        

        </div>
    )
  }