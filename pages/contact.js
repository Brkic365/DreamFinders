import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Contact.module.scss";

import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

import ContactCard from "@/components/ContactCard";

const contactTypes = [
  {
    title: "Chat to us",
    description: "Speak to our team.",
    link: "info@polyminds.tech",
    icon: <HiOutlineEnvelope />,
  },
  {
    title: "Visit us",
    description: "Visit our team in-person.",
    link: "Malibu random address 124, 12000",
    icon: <HiOutlineMapPin />,
  },
  {
    title: "Call us",
    description: "Mon-Fri from 8am to 5pm.",
    link: "+1 (555) 000 0000",
    icon: <HiOutlinePhone />,
  },
];

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DreamFinders Realty</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Explore our diverse range of listings and find your dream 
property that perfectly fits your unique lifestyle and preferences." />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Contact Us</h1>
        </section>

        {/* Contact Section */}
        <section className={styles.contact}>
          <section className={styles.contactGrid}>
            {
              // Map through all contact types and render them

              contactTypes.map((contactType, i) => {
                return <ContactCard type={contactType} key={i} />;
              })
            }
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
