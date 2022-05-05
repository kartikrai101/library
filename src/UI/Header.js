import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return(
        <nav class="navbar navbar-expand-lg" style={{backgroundColor: 'rgba(65, 65, 71, 0.3)', color: 'black'}}>
            
                
                <div class="container">
                    <div>
                        <span className={classes.A}>
                            <a style={{color: 'black', marginLeft: '20px', fontWeight: 'bold', fontFamily: 'Water Brush', fontSize: '40px'}} class="navbar-brand" href="#">Librasio</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </span>
                    </div>

                    <div>
                        <span>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                    
                                        <li class="nav-item dropdown">
                                            <button class="btn" className={classes.button}>
                                                <a style={{color: 'white', fontSize: '20px'}} class="btn" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Login
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                    <li><a class="dropdown-item" href="#">Admin Login</a></li>
                                                    <li><a class="dropdown-item" href="#">Student Login</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </button>                                        
                                        </li>
                                    </ul>
                                </div>
                        </span>
                    </div>
                    
                    
                </div>                
            
        </nav>
    );
}

export default Header;