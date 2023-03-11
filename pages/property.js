import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Property.module.scss";
import properties from "@/public/data/properties.json";

import { HiArrowLongRight } from "react-icons/hi2";

export default function Property() {
  const router = useRouter();

  const [property, setProperty] = useState(null);

  // Adds spaces after every few dots so text isn't cramped
  const spaceOut = (text) => {

     // Final result
    let finalText = "";

    // Blocks of sentences
    let sentenceBlock = "";

    // Split the text in sentences
    const textArray = text.split(".");

    // Used to check how many letters have been since last break
    let letterCounter = 0;

    textArray.forEach(sentence => {
      letterCounter += sentence.length;
      sentenceBlock += sentence + ".";

      // If letter counter is big enough, add the sentence and then a break, and reset
      // both the counter and the sentence block

      console.log(sentenceBlock, letterCounter);

      if(letterCounter > 200) {
        letterCounter = 0;
        finalText += sentenceBlock + "<br /><br />";
        sentenceBlock = "";
      }
    });

    // Add the final block
    if(sentenceBlock !== ".") {
      finalText += sentenceBlock;
    }

    return finalText;
  }
 
  // Whenever router updates, check if there is 'id' variable
  // in the query, and if it is, set property to the one that matches the id
  useEffect(() => {
    if (router.query.id) {
      setProperty(properties.find((val) => val.id == router.query.id));
    }
  }, [router]);

  if (!property) return null;

  return (
    <div className={styles.container}>
      <Head>
        <title>{property.title} | DreamFinders Realty</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Explore our diverse range of listings and find your dream 
property that perfectly fits your unique lifestyle and preferences."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className={styles.main}>
        {/* Hero section */}
        <section className={styles.hero}>
          <h1>{property.title}</h1>
        </section>

        {/* About section */}
        <section className={styles.about}>
          <section className={styles.content}>
            <h2>About the Property</h2>
            <h3>${property.price.toLocaleString("en-US")}</h3>
            <p dangerouslySetInnerHTML={{__html: spaceOut(property.description)}} />
            <section className={styles.buttons}>
              <button>Call now</button>
              <button className={styles.transparentBtn}>Message now</button>
            </section>
          </section>
          <section className={styles.images}>
            <section className={styles.backImgContainer} />
            <section className={styles.frontImgContainer} />
            <Link href={`/gallery?id=${property.id}`}>
              <section className={styles.cta}>
                <p>Open gallery</p>
                <HiArrowLongRight />
              </section>
            </Link>
          </section>
        </section>

        {/* Graphic section */}
        <section className={styles.graphic}>
          <section className={styles.imagePrice}>
            <h1>${property.price.toLocaleString("en-US")}</h1>
            <section className={styles.backImgContainer} />
            <section className={styles.frontLeftImgContainer} />
            <section className={styles.frontRightImgContainer} />
          </section>
          <section className={styles.map}>
            <iframe
              width="100%"
              height="562"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=malibu%20california&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </section>
        </section>
      </main>
    </div>
  );
}
