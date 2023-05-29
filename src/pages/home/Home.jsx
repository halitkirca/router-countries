import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  // const url = ("https://restcountries.com/v3.1/all");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setCountries(data))
  }, []);


  // ! 1- ) yukarıdaki url den (api den),  fetch ile DATA  çekilip bir diziye atılmalı (useEffect unutmayın) ve  dizide dönerek card lara bastırılmalı.
  //! 2-)sonra jsx alanındaki button a onclick yapıldığında tıklanan ülkenin name.common u alınarak navigate ile details sayfasına yol verilmeli, o yol App.js de, buradan gelen name ile Details sayfasına gitmeli

  return (
    <main>
      {countries.map(({flags,name},id) => {
        return (
          <div key={id} onClick={() => navigate(`/details/${name.common}`)}>
          <img  src={flags.png} alt="" />
        </div>
        );
      })}
    </main>
  );
};

export default Home;
