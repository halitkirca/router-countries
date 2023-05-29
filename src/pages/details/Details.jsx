import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { AiOutlineLeft } from "react-icons/ai";
import "./Details.css";

const Details = () => {
  const [country, setCountry] = useState([]);
  const {countryName} = useParams();
  const navigate = useNavigate();

//! buraya App.js deki path ile geldiğimizde, home dan gelen yoldaki name sayesinde (useParam İLE name i yakalayıp), alttaki adresten, buraya name ile gelen  ülkenin verileri çekilecek, onunla ilgili birkaç özellik ekrana bastırılacak


  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`).then((res)=>res.json()).then((data)=> setCountry(data));
  }, [countryName]);  
 console.log(country);
  
  return (<div>
  <AiOutlineLeft className='back' onClick={() => navigate(-1)}/>

  <section>
  {country.map(({flags,name,region,population},id) => 
    countryName === name.common && ( 
    <div key={id}>
    <img src={flags.png} alt="" />
    <p>Name: {name.common}</p> 
    <p>Region: {region}</p> 
    <p>Population: {population}</p> 
    </div> 
    )
  )}
  
  </section>
  </div>
  
  );
}

export default Details