import React, { useState } from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { useRouter } from 'next/router';
import styles from "@/styles/Searchbar.module.scss"

function Searchbar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

    // Search the value user inputed if user presses the 'Search' button
  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/search?q=${query}`);
  }

  // Search the value user inputed if user presses the 'Enter' key
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      router.push(`/search?q=${query}`);
    }
  }

  return (
    <form className={styles.searchbar}  onSubmit={handleSubmit}>
      <section className={styles.search}>
        <HiLocationMarker />
        <input 
          placeholder="Search by location..."         
          value={query}
          onKeyDown={handleKeyDown}
          onChange={(event) => setQuery(event.target.value)} 
        />
      </section>

      <button type="submit">Search</button>
    </form>
  )
}

export default Searchbar