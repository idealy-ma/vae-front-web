import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [login, setLogin] = useState('idealy@gmail.com');
    const [password, setPassword] = useState('idealy');
    const [error, setError] = useState('');

    function log() {
    }

    return(
        <div class="container">
            <div class="p-5">
                <div class="text-center">
                    <h4 class="text-dark mb-4">Login</h4>
                    <p>Veuillez vous connecter</p>
                    <p className="text-center" >{error}</p>
                </div>
                <form class="user" method="post">
                    <div class="mb-3">
                        <input class="form-control form-control-user" onChange={(e)=>{setLogin(e.target.value)}} type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." value={login} name="email" required/>
                    </div>
                    <div class="mb-3">
                        <input class="form-control form-control-user" onChange={(e)=>{setPassword(e.target.value)}} type="password" id="exampleInputPassword" value={password} placeholder="Password" name="password" required/>
                    </div>
                    <button class="btn btn-primary d-block btn-user w-100" onClick={(e)=>{login()}} type="button">Login</button>
                </form>
            </div>
        </div>
    );
}