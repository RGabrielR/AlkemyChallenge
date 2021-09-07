import React, { Component, createRef } from "react";
import { Col, Row, Button, Form, Container } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import Swal from 'sweetalert2';
import {addHero, deleteHero} from '../redux/actions/heroesActions';
import NavBar from './components/navbar'
import { createProxyMiddleware } from 'http-proxy-middleware';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
class Heroes extends Component {

  constructor(props) {
    super(props);
    this.heroesRef = createRef()
    this.state = {
      value: "",
      heroes: "",
      isLoaded:false,
      error:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    axios({
      method: "get",
      url: `https://superheroapi.com/api/${process.env.REACT_APP_TOKEN}/search/${this.state.value}`,
      headers: {},
    })
      .then((response) => {
          if(!response) return "cargando..."
        this.setState({
            isLoaded: true,
            heroes: response.data.results}
            );
      })
      .catch((error) => {
        console.log(error)
        this.setState({
            isLoaded:true,
            error});
      });
      console.log(this.state.heroes)
    event.preventDefault();
  }



addHero(id){
  if(this.props.teamMembers.members.length >= 6){
      Swal.fire({
         icon: 'error',
    title: 'Too much heroes',
    text: 'you already had 6 members on your team!'
      })
    
  }
  else {
 this.props.addHero(id);
    Swal.fire(
    'Congratulations!',
    'You added a new member',
    'success'
    
    )
  }
  };

deleteHero(id, members){
  this.props.deleteHero(id, members);
  Swal.fire(
       'Congratulations!',
    'You deleted a member',
    'success'
    
  )
}


  render() {
      const {heroes} = this.state;
    
       console.log(this.props.teamMembers.members.data)
    return (
      <div className="">
      <NavBar/>
      <div className="container"> 
      <h1 className="text-white py-3 pl-4"> Choose your favourite heroes to join your team </h1>
        <Form className="pl-4" onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                size="lg"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Search for your Hero"
              />
            </Col>
            <Col>
              <Button variant="secondary" size="lg" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>


        <Container className="container-fluid">
        <Row>
        {heroes ? (
heroes.map(hero => {
            const{name,image} = hero;    
            return(
                <div class="card shortSize d-block mx-auto bg-dark" >
  <img className="card-img-top" src={image.url} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title text-white">{name}</h5>
    {!(this.props.teamMembers.members.find(i => i.data.id === hero.id )) ? (  <Button 
    onClick={() => this.addHero(hero.id) }
     variant="primary">ADD</Button>) : (<Button 
    onClick={() => this.deleteHero(hero.id, this.props.teamMembers.members ) }
     variant="danger">DELETE</Button>)
     }
  

  </div>
</div>
            )
        })
        ) : ''
}
        </Row>
        </Container>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teamMembers: state.teamMembers,
})
const mapDispatchToProps = (dispatch) => {
  return {
    addHero: (id) => {
      dispatch(addHero(id))
    },
    deleteHero: (id, members) => {
      dispatch(deleteHero(id, members))
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
