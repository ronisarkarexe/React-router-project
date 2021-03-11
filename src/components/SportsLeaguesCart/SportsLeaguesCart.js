import React from 'react';
import { Card , Button} from 'react-bootstrap';
import './SportsLeaguesCart.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


const SportsLeaguesCart = (props) => {
   const{strLeague,strSport,idLeague} = props.sport;


   const [logo, setLogo] = useState([])
   useEffect(() => {
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
      fetch(url)
      .then(res => res.json())
      .then(data => setLogo(data.leagues[0]))
   },[idLeague])

   const {strBadge} = logo;

   return (
      <div className="col-md-4">
         <div className="sportsCart">
         <Card>
            <div className="col-ml-4 card-img">
               <Card.Img className="cart-image" variant="top" src={strBadge} />
            </div>
            <Card.Body>
               <div className="col-ml-8 card-text">
                  <Card.Title>{strLeague}</Card.Title>
                  <Card.Text>
                     sports type: {strSport} 
                  </Card.Text>
                  <Button as={Link} to={`/Leagues/${idLeague}`} variant="info">Explore <FontAwesomeIcon icon={faArrowAltCircleRight}/></Button>
               </div>
            </Card.Body>
         </Card>
         </div>
      </div>
   );
};

export default SportsLeaguesCart;