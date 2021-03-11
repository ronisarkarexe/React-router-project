import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SportsLeaguesDetails from '../SportsLeaguesDetails/SportsLeaguesDetails';
import './SportsLeaguesInfo.css'

const SportsLeaguesInfo = () => {

   const {id} = useParams();

   const [info, setInfo] = useState([])
   useEffect(() => {
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
      fetch(url)
      .then(res => res.json())
      .then(data => setInfo(data.leagues))
   },[id])

   return (
      <div className="background-color-div">
         {
            info.map(information => <SportsLeaguesDetails key={information.idLeague} leaguesInfo ={information }></SportsLeaguesDetails>)
         }
      </div>
   );
};

export default SportsLeaguesInfo;