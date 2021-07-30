import React, { useState, useRef } from 'react';

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
  

export default function Cards() {



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
        const [active, setActive] = useState('isActive')
        const [activeN, setActiveN] = useState('isActive')

        const { loading, error, data, fetchMore } = useQuery(PAST_LAUNCHES, {
            variables: {
                offset,
                limit,
              },
              notifyOnNetworkStatusChange: true 
            });
        
       
       

        if (loading) return <p>Loading spaceX pastLaunches...</p>;
        if (error) return <p>Oh no, an error :0</p>;
        
        function redClass(succes){
            if(succes == true) {
                return "black"
            } else {
                return "red"
            }
        }   


        function handleOver(offset, num, set) {
            if (offset === num) {
              set('deActive')
              console.log(active)
          }else{
            set('isActive')
          }
        }
        
    
      
        return (
            <>
            <div onLoad={() => {
              handleOver(offset, 0, setActiveN)
              handleOver(offset, 108, setActive) 
            }} className={styles.cardsContenedor}
            > 


            <div className={styles.bigNumber}>
              {offset/limit + 1}
            </div>

            {data.launchesPast.map(({ launch_date_utc, mission_name, links, launch_success, id }) => (

            links.flickr_images.length > 0 ? (

                
                <div key={id}>
            
                <Card image={links.flickr_images[Math.floor(Math.random() * links.flickr_images.length)]} name={mission_name} link={links.wikipedia} date={launch_date_utc} red={ redClass(launch_success) }/>
                
                </div>
              ) :  (<div key={id}>
            
              <Card image="/available.png" name={mission_name} link={links.wikipedia} date={launch_date_utc} red={ redClass(launch_success) }/>
              
              </div>)


        ))}

          </div>
      <div className={styles.prevNext}>

          <div className={`${styles.less_button} ${activeN}`}>
                
                <button
                  id="buttonLoadMore"
                  onMouseOver={() => {
                    handleOver(offset, 0, setActiveN)
                    console.log("OVER___OFFSET", offset)     
            }}
                  onClick={() => {
      
                          const currentLength = data.launchesPast.length;
                          fetchMore({
                              variables: {
                                  offset: 5,
                                  limit: 5,
                              },
                          }).then(fetchMoreResult => {
                          // siguientes 12 items
                          // setLimit(currentLength );
                          setOffset(offset - fetchMoreResult.data.launchesPast.length );
                          console.log("PREV___OFFSET", offset)
                          console.log("PREV___LIMIT", limit)
                      });
      
                      }
                  }
                >
                Prev
                </button>
                
              </div>
        
              <div className={`${styles.more_button} ${active}`}>
                  
                <button
                  
                  id="buttonLoadMore"
                  onMouseOver={() => {

                          console.log("OVER___OFFSET", offset)
                          handleOver(offset, 108, setActive)
                          // if (offset === 24) {
                          //     this.style.pointerEvents = 'none'
                          // }

                  }}
                  onClick={() => {

                          const currentLength = data.launchesPast.length;

                          console.log("DATA___LENGTH", currentLength)
                          fetchMore({
                              variables: {
                                  offset: 5,
                                  limit: 5,
                              },
                          }).then(fetchMoreResult => {
                          // siguientes 12 items
                          // setLimit(currentLength );
                          setOffset(offset + fetchMoreResult.data.launchesPast.length );

                          console.log("DATA___OFFSET", offset)
                          console.log("DATA___LIMIT", limit)
                      });

                      }
                  }
                >
                Next
                </button>
                
              </div>

  

      </div>


          <style jsx>{`
                .isActive{
                    pointer-events: all;   
                }
          
          
                .deActive{
                    pointer-events: none;  
                    opacity: 0.5; 
          }
            `}</style>

        </>
        )
      }

    return (

        <div className={styles.launchesContenedor}>
                 <CardsInfo/>
        

        </div>
    )
  }