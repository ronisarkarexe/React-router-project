import React, { useEffect, useState } from 'react';
import HeaderBackgdImg from '../HeaderBackgdImg/HeaderBackgdImg';
import SportsLeaguesCart from '../SportsLeaguesCart/SportsLeaguesCart';
import './SportsLeaguesList.css'

const SportsLeaguesList = () => {

   const[sports, setSports] = useState([])
   useEffect(() => {
      const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"
      fetch(url)
      .then(res => res.json())
      .then(data => setSports(data.leagues.slice(0, 15)))
   },[])
   

   return (
      <div>
         <HeaderBackgdImg></HeaderBackgdImg>
         <div className="background">
         <div className="container">
            <div className="row">
               {
                  sports.map(sport => <SportsLeaguesCart key={sport.idLeague} sport={sport}></SportsLeaguesCart>)
               }
            </div>
         </div>
         </div>
      </div>
     
   );
};

export default SportsLeaguesList;