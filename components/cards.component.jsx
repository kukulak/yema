import React, { useState } from 'react';

import Card from './card/card.component'
import styles from './card/card.module.scss';
import Link from "next/link"; 

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  
import { offsetLimitPagination } from "@apollo/client/utilities";



export default function Cards() {


    // const client = new ApolloClient({
    //     uri: 'https://api.spacex.land/graphql/',
    //     cache: new InMemoryCache()
    //   });
    
    // const cache = new InMemoryCache({
    // typePolicies: {
    //     Query: {
    //     fields: {
    //         feed: offsetLimitPagination() 
    //         },
    //     },
    //     },
    // });  

     
    // client
    // .query({
    //     query: gql`
    //         query GetPastLaunches {
    //             launchesPast(limit: 12) {
    //             mission_name
    //             launch_success
    //             id
    //             links {
    //                 wikipedia
    //                 flickr_images
    //               }
    //             }
    //         }
          
    //     `
    // })
    // .then(result => console.log(result));

    // const limit = params.count;
    // const offset = params.after;  
    // ($count: Int!, $after: String)



    const PAST_LAUNCHES = gql`
        query GetPastLaunches($offset: Int = 12) {
            launchesPast(offset: $offset, limit:12) {
            mission_name
            launch_success
            id
            links {
                wikipedia
                flickr_images
              }
              launch_date_utc
            }
        }
    
    `;


    
    
    const CardsInfo = () => {
        const [offset, setOffset] = useState(0);
        const [limit, setLimit] = useState(12);

        const { loading, error, data, fetchMore } = useQuery(PAST_LAUNCHES, {
            variables: {
                offset,
                limit,
              },
              notifyOnNetworkStatusChange: true 
            });
        
       
       

        if (loading) return <p>Cargando Información...</p>;
        if (error) return <p>Oh no, an error :0</p>;
        
        function redClass(succes){
            if(succes == true) {
                return "black"
            } else {
                return "red"
            }
        }   
    
      
        return (
            <>
            {data.launchesPast.map(({ launch_date_utc, mission_name, links, launch_success, id }) => (

            links.flickr_images.length > 0 ? (

                
                <div key={id}>
            
                <Card image={links.flickr_images[Math.floor(Math.random() * links.flickr_images.length)]} name={mission_name} link={links.wikipedia} date={launch_date_utc} red={ redClass(launch_success) }/>
                
                </div>
              ) :  (<div key={id}>
            
              <Card image="/available.png" name={mission_name} link={links.wikipedia} date={launch_date_utc} red={ redClass(launch_success) }/>
              
              </div>)


        ))}



          {/* {hasNextPage && ( */}
        <div className={styles.more_button}>
            
          <button
            id="buttonLoadMore"
            onClick={() => {


                  const currentLength = data.launchesPast.length;

                    console.log("DATA___LENGTH", currentLength)
                    fetchMore({
                        variables: {
                            offset: 5,
                            limit: 5,
                        },
                    }).then(fetchMoreResult => {
                    // Update variables.limit for the original query to include
                    // the newly added feed items.
                    setLimit(currentLength );
                    setOffset(offset + fetchMoreResult.data.launchesPast.length );
                    console.log("DATA___OFFSET", offset)
                    console.log("DATA___LIMIT", limit)
                });

                }
            }
          >
          load more
          </button>
        </div>
      {/* )} */}

        </>
        )
      }

    return (

        <div className={styles.cardsContenedor}>
                 <CardsInfo/>
        

        </div>
    )
  }