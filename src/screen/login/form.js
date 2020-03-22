import React, {useState, useEffect} from "react";

export default function () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputUsername = e => setUsername(e.target.value);
    const handleInputPassword = e => setPassword(e.target.value);

    const onSubmit = async () => {
        if (username !== '' && password !== '') {
            const inputUsername = {
                username: username,
            };
            const inputPassword = {
                password: password,
            };

            setUsername(inputUsername);
            setPassword(inputPassword);
        } else {
            alert("Please input Username and Password.")
        }

        if (username !== '' && password !== '') {
            await fetch("https://candidate.neversitup.com/todo/users/auth ", {
                method: "POST",
                // mode: "no-cors",
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
                    console.log(data)
                });
        }
    };

    return (
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
                                   onChange={event => setUsername(event.target.value)}
                               value={username}/>
                    </div>

                    <div className="form-group">
                        <h4>Password</h4>
                        <input type="password" className="form-control"
                               placeholder="Password"
                               onChange={event => setPassword(event.target.value)}
                               value={password}/>
                    </div>
                    <button className="btn btn-outline-primary"
                            onClick={onSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
};
