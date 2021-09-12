import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Country = () => {
  const { countryName } = useParams();
  const [allInfo, setAllInfo] = useState({});
  const [currency, setCurrency] = useState("");
  const url = `https://restcountries.eu/rest/v2/name/${countryName}`;

  useEffect(() => {
    async function getInfo() {
      const res = await axios.get(url);
      const info = res.data;
      setAllInfo(info[0]);
      setCurrency(info[0].currencies[0].name);
    }
    getInfo();
  }, [url]);
  return (
    <div className="flex flex-col justify-center items-center rounded-lg p-16 bg-gray-200 w-full h-screen">
      <img src={allInfo.flag} alt="flag" />
      <h1 className="text-5xl text-purple-500 font-bold my-4">
        {allInfo.name}
      </h1>
      <h1 className="text-3xl font-semibold">Region --- {allInfo.region}</h1>
      <h1 className="text-3xl font-semibold my-4">
        Capital --- {allInfo.capital}
      </h1>
      <h1 className="text-3xl font-semibold">
        Population --- {allInfo.population}
      </h1>
      <h1 className="text-3xl font-semibold my-4">Currency --- {currency}</h1>
      <Link to="/">
        <button className="py-2 px-4 bg-red-400 text-gray-600 text-2xl rounded-md font-bold">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Country;
