import axios from "axios";
import React, { useEffect, useState } from "react";
import GetInfo from "./GetInfo";


const Country = () => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState("location");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/alpha/pe").then((res) => {
      setCountry(res.data[0]);
      setIsLoading(false);
    });
  }, []);

  const getInfo = () => {
    switch (info) {
      case "demography":
        return (
          <div>
            <h2>Demography</h2>
            <p>
              <b>population: </b> {country.population}
            </p>
            <p>
              <b>area: </b>
              {country.area}
            </p>
          </div>
        );

      case "location":
        return (
          <div>
            <h2>Location</h2>
            <p>
              <b>continent: </b>
              {country.continents?.[0]}
            </p>
            <p>
              <b>region: </b>
              {country.region}
            </p>
            <p>
              <b>sub region: </b>
              {country.subregion}
            </p>
          </div>
        );

      default:
        return (
          <div>
            <h2>Capital</h2>
            <p>
              <b>Capital: </b>
              {country.capital?.[0]}
            </p>
          </div>
        );
    }

    if (info === "demography") {
      return (
        <div>
          <h2>Demography</h2>
          <p>
            <b>population: </b> {country.population}
          </p>
          <p>
            <b>area: </b>
            {country.area}
          </p>
        </div>
      );
    } else if (info === "location") {
      return (
        <div>
          <h2>Location</h2>
          <p>
            <b>continent: </b>
            {country.continents?.[0]}
          </p>
          <p>
            <b>region: </b>
            {country.region}
          </p>
          <p>
            <b>sub region: </b>
            {country.subregion}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Capital</h2>
          <p>
            <b>Capital: </b>
            {country.capital?.[0]}
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      {isLoading ? (
        <h1>Esta cargando...</h1>
      ) : (
        <>
          <h1>{country.name?.common}</h1>
          <img src={country.flags?.svg} alt="" style={{ width: "330px" }} />

          <div className="buttons">
            <button onClick={() => setInfo("demography")}>Demography</button>
            <button onClick={() => setInfo("location")}>Location</button>
            <button onClick={() => setInfo("capital")}>Capital</button>
          </div>

          <GetInfo country={country} info={info} />
{/* 
          { getInfo() } */}

          {/* {
                            info === "demography" ? (
                                <div>
                                    <h2>Demography</h2>
                                    <p><b>population: </b> {country.population}</p>
                                    <p><b>area: </b>{country.area}</p>
                                </div>
                            ) : (
                                info === "location" ? (
                                
                                    <div>
                                        <h2>Location</h2>
                                        <p><b>continent: </b>{country.continents?.[0]}</p>
                                        <p><b>region: </b>{country.region}</p>
                                        <p><b>sub region: </b>{country.subregion}</p>
                                    </div>
                                ) : (
                                    <div>
                                        <h2>Capital</h2>
                                        <p><b>Capital: </b>{country.capital?.[0]}</p>
                                    </div>
                                )
                            )
                        }         */}
        </>
      )}
    </div>
  );
};

export default Country;
