import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { usePlaceAutocomplete } from "./hooks/usePlaceAutocomplete";

export default function Home() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1500);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const results = usePlaceAutocomplete({ query: debouncedValue });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <label for="location" style={{ fontWeight: "600" }}>
          Home address:
        </label>
        <input
          className="form-control"
          list="locations"
          name="location"
          onChange={handleChange}
          value={value}
        />
        <datalist id="locations">
          {results?.map((result, idx) => {
            return (
              <option key={idx} value={result}>
                {result}
              </option>
            );
          })}
        </datalist>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}
