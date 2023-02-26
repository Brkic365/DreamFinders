import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Gallery.module.scss";

const images = [
    "https://images.unsplash.com/photo-1593714604578-d9e41b00c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1626249893774-dc11ed24adbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1576493169316-0745093ae312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    "https://images.unsplash.com/photo-1613977257421-010b50211cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
]

export default function Property() {

    const router = useRouter();

    const [id, setId] = useState(null);
    const [imageOrder, setImageOrder] = useState(null);

    // Get random number between min and max
    const getRandomInt = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    // Generate a random image order in which images will be displayed
    const generateImageOrder = () => {

        // Create a temporary order object, which will used in the process of
        // generating the order
        let imageOrderTemp = [];

        // Create an array which will store remaining images
        let remainingImages = [...images];
        
        // Amount will be used to determine how many images will be in a row
        let amount = 0;

        // Keep generating the orders while there are remaining images
        while(remainingImages.length > 0) {

            // If there is only 1 image remaining, only possible order is a single image row
            if(remainingImages.length === 1) {
                imageOrderTemp.push(remainingImages);
                remainingImages.shift(); // Remove the first (and only) element 
            }

            // Get random amount, from 1 to 2
            amount = getRandomInt(1, 2);

            // Push to temporary image order first {amount} elements from remaining images
            imageOrderTemp.push(remainingImages.slice(0, amount));

            // Remove first {amount} elements from remaining images
            remainingImages.splice(0, amount);
        }

        // Update the image order state to the final value we got in the temporary array
        setImageOrder([...imageOrderTemp]);
    }

    // Whenever router updates, check if there is 'id' variable
    // in the query, and if it is, update the id state
    useEffect(() => {
        if(router.query.id) {
            setId(router.query.id);
        }
    }, [router])

    // On the first render, call the generateImageOrder function
    useEffect(() => {
        generateImageOrder();
    }, [])

    return (
    <div className={styles.container}>
      <Head>
        <title>Site Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Site Description." />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className={styles.main}>
        {/* Hero section */}
        <section className={styles.hero}>
            <h1>Malibu Villa Gallery</h1>
        </section>

        {/* Images section */}
        <section className={styles.images}>
            { imageOrder && 
                // Map through the image order array and render an image row
                imageOrder.map((imageRow, i) => {
                    return <section className={styles.imageRow} key={i}>
                    {
                        // Map through the image row and render every image
                        imageRow.map((image, j) => {
                            return <section className={styles.imgContainer} key={j} style={{
                                backgroundImage: `url(${image})`,
                              }} />
                        })
                    }
                    </section>
                })
            }
        </section>
      </main>
    </div>
  );
}
