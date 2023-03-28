import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/PrivacyPolicy.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy | DreamFinders Realty</title>
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
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Privacy Policy</h1>
        </section>

        {/* Policy Section */}
        <section className={styles.policy}>
          <section className={styles.content}>
            <p>
              At DreamFinders, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy outlines
              the types of information we may collect from you, how we use that
              information, and the measures we take to keep it secure.
            </p>
            <span>What information do we collect?</span>
            <p>
              We may collect personal information from you such as your name,
              email address, phone number, and mailing address when you fill out
              a form on our website, sign up for our newsletter, or request
              information from us. We may also collect non-personal information
              such as your IP address, browser type, and operating system when
              you visit our website.
            </p>
            <span>How do we use your information?</span>
            <p>We may use the information we collect from you to:</p>
            <ul>
              <li>
                Respond to your inquiries and provide you with information about
                our services
              </li>
              <li>Improve our website and customer service</li>
              <li>Personalize your experience on our website</li>
              <li>
                Send you marketing communications, including newsletters and
                promotional offers
              </li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
            <p>
              We will never sell or share your personal information with third
              parties for marketing purposes.
            </p>
            <span>How do we protect your information?</span>
            <p>
              We take the security of your personal information seriously and
              have implemented appropriate measures to safeguard it. Our website
              is encrypted using industry-standard SSL technology, and we use
              secure servers to store your information. We also limit access to
              your personal information to authorized personnel who need it to
              perform their duties.
            </p>
            <span>Your Rights</span>
            <p>
              You have the right to access and control your personal
              information. You can request that we update, correct, or delete
              your personal information by contacting us at{" "}
              <Link href="mailto:info@polyminds.tech">info@polyminds.tech</Link>
              .
            </p>
            <span>Changes to this Privacy Policy</span>
            <p>
              We reserve the right to make changes to this Privacy Policy at any
              time. Any changes will be posted on this page, and the date at the
              top of the page will be updated to reflect the latest revision.
            </p>
            <span>Contact Us</span>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <Link href="mailto:info@polyminds.tech">info@polyminds.tech</Link>
              .
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
