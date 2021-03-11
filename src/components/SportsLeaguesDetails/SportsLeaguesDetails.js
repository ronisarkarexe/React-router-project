import React from 'react';
import './SportsLeaguesDetails.css';
import female from '../../Photo/female.png';
import male from '../../Photo/male.png';
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youTube from '../../Icon/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFlag, faMars, faFutbol, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const SportsLeaguesDetails = (props) => {
   
   console.log(props.leaguesInfo)
   const{strBadge,strCountry,strLeague,intFormedYear,strSport,strGender,strFacebook,strTwitter,strWebsite} = props.leaguesInfo;
   const twitterNew = `https://${strTwitter}` || "https://twitter.com";
   const facebookNew = `https://${strFacebook}` || "https://twitter.com";
   const websiteNew = `https://${strWebsite}` || "https://twitter.com";

   let gender;
   if(strGender === "Male"){
      gender = <img className="image-size" src={male}/>;
   }
   else {
      gender = <img className="image-size" src={female}/>;
   }


   return (
      <div>
         <div className="icon-image">
            <img src={strBadge}/>
         </div>
         <div className="container">
         <div className="row">
            <div className="leaguesDetails">
               <div className="col-md-6 text-details">
                  <h4>{strLeague}</h4>
                  <h6><FontAwesomeIcon icon={faMapMarkerAlt}/><small>  Founder: {intFormedYear}</small></h6>
                  <h6><FontAwesomeIcon icon={faFlag}/><small>  Country: {strCountry}</small></h6>
                  <h6><FontAwesomeIcon icon={faFutbol}/><small>  Sports Type: {strSport}</small></h6>
                  <h6><FontAwesomeIcon icon={faMars}/><small>  Gender: {strGender}</small></h6>
               </div>
               <div className="col-md-6 picture-container">
                 {gender}
               </div>
            </div>
         </div>
         <div className="lorem">
            <p>E la i dea niuno vita e di divina maesta, nostra divina procuratori santo oportune che. E oportune fermi suo ma novella. Maravigliose di piaceri una prieghi cosí, alla esperienza che niuna trapassare che dell'occhio esso. Delle d'esse esser cose sé pieno il cosí divina, sua mentre convenevole che coloro manifesta essaudisce. Sí fuor propria cosa pietosa. E e dovendo essilio novellare bene della occulta ciascheduna. Manifestamente seguitando ci cominciamento quale, quali ma di fosse noi nome eterni e. Che divina di in i tutte che tal, siamo ripararci sí i delle, da giudicio quella allo sono per quale. Come. Est sit clita invidunt labore justo lorem est, est et rebum sanctus lorem invidunt. Rebum dolore est kasd rebum diam lorem takimata sea.</p>
         </div>
         <div className="lorem">
            <p>Est sit clita invidunt labore justo lorem est, est et rebum sanctus lorem invidunt. Rebum dolore est kasd rebum diam lorem takimata sea. Et et diam aliquyam erat elitr justo est, gubergren et ut est sed lorem sit dolore nonumy, labore et dolores amet duo est. Et et dolor tempor aliquyam ipsum eirmod duo amet invidunt. Eos sit voluptua diam accusam gubergren. Elitr elitr magna sed eirmod eirmod accusam gubergren eirmod. Eirmod aliquyam dolor invidunt dolores erat gubergren justo invidunt, erat sit dolor sit duo sanctus amet sadipscing labore, labore sed justo tempor takimata sanctus. Clita dolor sanctus lorem sadipscing sed invidunt est sit dolor, sit no dolor accusam duo eos sea lorem, dolor no dolor nonumy stet diam duo dolor. Eirmod amet ea labore amet diam et sanctus amet. Ipsum at gubergren rebum invidunt, dolores sanctus clita ipsum stet no magna kasd sea gubergren. Voluptua takimata sit eirmod diam.</p>
         </div>
         <div className="row icon-row">
            <div className="col-md-12 icon-bar">
               <a href = {twitterNew}><img  src={twitter}/></a>
               <a href = {facebookNew}><img src={facebook}/></a>
               <a href= {websiteNew}><img src={youTube}/></a>
            </div>
         </div>
      </div>
      </div>
   );
};

export default SportsLeaguesDetails;