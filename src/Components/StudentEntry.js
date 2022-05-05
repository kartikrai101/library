import React from 'react';
import classes from './StudentEntry.module.css';

import Card from '../Cards/Card';

const StudentEntryForm = (props) => {
    return(
        <div className={classes.form}>
            <Card>
                <form className={classes.name}>
                    <div className={classes.input}>
                        <lable htmlFor="username">Username: </lable>
                        <input id="username" type="text" name="usename" placeholder="Username"></input>
                    </div>
                    
                    <div className={classes.input}>
                        <lable htmlFor="username">Password: </lable>
                        <input id="username" type="password" name="usename" placeholder="Password"></input>
                    </div>

                    <div>
                        <button className={classes.btn}>
                            Enter
                        </button>
                    </div>
                    

                </form>
            </Card>
        </div>
        
        
    );
}

export default StudentEntryForm;