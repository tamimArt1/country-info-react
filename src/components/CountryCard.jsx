import { Link } from "react-router-dom";

const CountryCard = ({ countryObj }) => {
  const { name, flag } = countryObj;
  return (
    <Link to={`/${name}`}>
      <div className="flex flex-col justify-center items-center rounded-md p-4 bg-gray-200 h-72">
        <h1 className="text-2xl font-semibold pb-4">{name}</h1>
        <img className="w-3/4 h-3/5" src={flag} alt={`${name} flag`} />
      </div>
    </Link>
  );
};

export default CountryCard;
