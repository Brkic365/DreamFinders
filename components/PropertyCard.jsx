import React, { useState, useEffect } from "react";
import styles from "@/styles/PropertyCard.module.scss";
import properties from "@/public/data/properties.json";

function PropertyCard({ id }) {

  const [property, setProperty] = useState(null);

  // Shortens text to fit the box, which will be used for the description
  const shortenText = (text, n) => {
    // If the length of the text is less than or equal to n, just return the original text
    if (text.length <= n) {
      return text;
    }

    // Create a substring of the first n characters of the text
    const trimmed = text.substr(0, n);

    // Find the last space character in the substring, if there is one
    const lastSpaceIndex = trimmed.lastIndexOf(' ');

    // If there is a space character in the substring, create a new substring
    // from the beginning of the original text to the index of the last space character.
    // This gives us the final shortened text that ends on a full word.
    if (lastSpaceIndex !== -1) {
      const shortened = trimmed.substr(0, lastSpaceIndex);
      return shortened + '...';
    } else {
      // If there is no space character in the substring, just use the original substring.
      return trimmed + '...';
    }
  }

  // On first render, set property to the one that matches the id sent through the props
  useEffect(() => {
    setProperty(properties.find(val => val.id === id));
  }, [])

  
  if(!property) return null;

  return (
    <section className={styles.propertyCard}>
      <section className={styles.imgContainer} style={{backgroundImage: `url(${property.image})`}} />
      <h3><span>$</span>{property.price.toLocaleString("en-US")}</h3>
      <h4>{property.title}</h4>
      <p>{shortenText(property.description, 150)}</p>
    </section>
  );
}

export default PropertyCard;
