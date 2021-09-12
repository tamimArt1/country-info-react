import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("all");
  useEffect(() => {
    async function getAll() {
      const res = await axios.get(`https://restcountries.eu/rest/v2/${search}`);
      const countries = res.data;
      setCountries(countries);
    }
    getAll();
  }, [search]);

  function handleChange(e) {
    setSearch(`name/${e.target.value}`);
  }

  return (
    <>
      <div className="container bg-purple-300 p-4 flex justify-center">
        <input
          className="w-1/4 p-4 rounded-xl bg-purple-200 focus:outline-none text-2xl"
          type="text"
          placeholder="Search country name"
          onChange={handleChange}
        />
      </div>
      <section className="container p-8 grid grid-cols-5 gap-4 bg-green-300">
        {countries.map((country) => (
          <CountryCard key={country.name} countryObj={country} />
        ))}
      </section>
    </>
  );
}

export default Home;
