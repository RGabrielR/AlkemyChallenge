import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory} from 'react-router-dom';

const NavBar = () => {
const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/login');
  }
    return ( 

          <div className="navBar">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img className="logoSize" src="./logo page.png" alt="image" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item px-10">
        
          <a class="nav-link active text-white h2 " aria-current="page" href="/heroes">
            heroes
          </a>
        </li>
        <li class="nav-item  rounded mr-10 pointer">
          <a class="nav-link text-white h2 " onClick={()=> logOut()}>log out</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>

     );
}
 
export default NavBar;