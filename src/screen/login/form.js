import React, {useState} from "react";
import {Redirect} from 'react-router'
import Button from "@material-ui/core/Button";

export default function () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginComplete, setLoginComplete] = useState(false);

    const handleInputUsername = e => setUsername(e.target.value);
    const handleInputPassword = e => setPassword(e.target.value);

    const onSubmit = async () => {
        if (username !== '' && password !== '') {
            await fetch("https://candidate.neversitup.com/todo/users/auth ", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.token) {
                        setLoginComplete(true);
                        localStorage.setItem('token', data.token);
                    }else {
                        alert("Invalid Username or Password")
                    }
                });
            setUsername('');
            setPassword('');
        } else {
            alert("Please input Username and Password.")
        }
    };

    return (
        <React.Fragment>
            {
                loginComplete &&
                    <Redirect to="/to-do-list"/>
            }
            <div className="container" id="login">
                <div className="row mt-5 text-center">
                    <div className="col">
                        <h2>Login</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="form-group">
                            <h4>Username</h4>
                            <input type="text" className="form-control"
                                   placeholder="Username"
                                   onChange={handleInputUsername}
                                   value={username}/>
                        </div>

                        <div className="form-group">
                            <h4>Password</h4>
                            <input type="password" className="form-control"
                                   placeholder="Password"
                                   onChange={handleInputPassword}
                                   value={password}/>
                        </div>
                        <Button variant="contained" color="primary"
                                onClick={onSubmit}>Login
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
