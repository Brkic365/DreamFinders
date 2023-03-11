import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Properties.module.scss";
import all_properties from "@/public/data/properties.json";

import { HiArrowLongRight } from "react-icons/hi2";

import Searchbar from "@/components/Searchbar";
import PropertyCard from "@/components/PropertyCard";

export default function Property() {
  const router = useRouter();

  const [properties, setProperties] = useState(null);
 
  // Whenever router updates, check if there is 'q' variable
  // in the query, and if it is, set properties to ones that include the 
  // query in their title
  useEffect(() => {
    if (router.query.q) {
      setProperties(all_properties.filter((property) => property.title.toLowerCase().includes(router.query.q)));
    }
  }, [router]);

  if (!properties) return null;

  return (
    <div className={styles.container}>
      <Head>
        <title>{router.query.q || "Search"} | DreamFinders Realty</title>
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
          <Searchbar defaultVal={router.query.q} />
        </section>

        {/* Properties section */}
        <section className={styles.properties}>
          <section className={styles.propertyGrid}>
            {
              // Map through all properties fitting the search query and render them
              properties.map((property) => {
                return <PropertyCard id={property.id} key={property.id} />;
              })
            }
          </section>
        </section>
      </main>
    </div>
  );
}
