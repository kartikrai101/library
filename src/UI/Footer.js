import React from 'react';
import classes from './Footer.module.css';

import Icons from './Icons';

const Footer = (props) => {
    return(
        <div className = {classes.footer}>
            <h4 className={classes.name}>Librasio© 2022 </h4>
            <div>
            <div class="row">
                <div class="col">
                <h5>Beep us here:</h5>
                    <Icons 
                        source={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}
                        alt={"LinkedIn"}
                    />

                    <Icons 
                        source={"https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg"}
                        alt={"Gmail"}
                    />

                    <Icons 
                        source={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"}
                        alt={"Github"}
                    />
                </div>

                <div class="col">
                    <h5>Or follow us on:</h5>
                    
                    <Icons
                        source={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/1200px-Instagram.svg.png"} 
                        alt={"Instagram"}
                    />
                    <Icons
                        source={"https://img.icons8.com/color/240/000000/twitter--v1.png"} 
                        alt={"Twitter"}
                    />

                </div>

            </div>
            </div>

               
            

        </div>
    );
}
//
export default Footer;