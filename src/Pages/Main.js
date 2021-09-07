import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { deleteHero } from "../redux/actions/heroesActions";
import NavBar from './components/navbar';
import {Button} from 'react-bootstrap';

const Main = (props) => {
  const { members } = props.teamMembers;
  
  const allHeights = members
    .map((hero) => {
      return hero.data.appearance.height[1];
    })
    .map((elem) => parseInt(elem, 10));
  
  const allWeight = members
    .map((hero) => {
      return hero.data.appearance.weight[1];
    })
    .map((elem) => parseInt(elem, 10));

  let numOr0 = (n) => (isNaN(n) ? 0 : n);
 
  const averageHeight =
    allHeights.reduce((a, b) => numOr0(a) + numOr0(b), 0) /
    (allHeights.length - 1);
 
  const averageWeight =
    allWeight.reduce((a, b) => numOr0(a) + numOr0(b), 0) /
    (allWeight.length - 1);
 
  const organizedTeam = members
    .map((hero) => {
      const { name, image, powerstats, id } = hero.data;
      const totalPower = Object.values(powerstats)
        .map((elem) => parseInt(elem, 10))
        .reduce((a, b) => a + b);
      return { name, image, powerstats, totalPower , id};
    })
    .sort((a, b) => b.totalPower - a.totalPower);


const deleteHero = (id, members) => {
  props.deleteHero(id, members);
  
  Swal.fire(
       'Congratulations!',
    'You deleted a member',
    'success'
    
  )
  window.location.reload();
}


  return (
   
      <div>
        <NavBar/>  

      <h1 className="text-white"> Average Height: {(averageHeight / 100).toFixed(2)} m </h1>
      <h1 className="text-white"> Average Weight: {averageWeight.toFixed(2)} kg </h1>

 <div className="container-fluid mb-2 cardSize d-flex flex-column  align-items-center">
      {organizedTeam.map(hero => {
      const {name, image, totalPower, id} = hero;
      return(
      <div className=" d-flex justify-content-between align-items-center border border-dark border border-2 rounded mb-4"> 
          <div>
          <h1 className="text-white">{name}</h1>
          <h1 className="text-white">{totalPower}</h1>
          <Button 
    onClick={() => deleteHero(id, members ) }
     variant="danger">DELETE</Button>
          </div>
        
          <img className="imageSize rounded float-end" src={image.url} alt="alt image"/>
      </div>
   )})}
  </div>

</div>

  );
};

const mapStateToProps = (state) => ({
  teamMembers: state.teamMembers,
});
const mapDispatchToProps = (dispatch) => {
  return {
    
    deleteHero: (id, members) => {
      dispatch(deleteHero(id, members));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
