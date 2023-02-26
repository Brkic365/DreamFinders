import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Properties.module.scss";

import properties from "@/public/data/properties.json";

import Searchbar from "@/components/Searchbar";
import PropertyCard from "@/components/PropertyCard";

export default function Property() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Properties | DreamFinders Realty</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Explore our diverse range of listings and find your dream 
property that perfectly fits your unique lifestyle and preferences." />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className={styles.main}>
        {/* Hero section */}
        <section className={styles.hero}>
          <Searchbar />
        </section>

        {/* Properties section */}
        <section className={styles.properties}>
          <section className={styles.propertyGrid}>
            {
              // Map through all properties and render them
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
