import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [login, setLogin] = useState('Anjara.Joston@gmail.com');
    const [password, setPassword] = useState('anjara');
    const [wait, setWait] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();



    function log() {
        setWait(true);
        fetch("https://venteauxenchere-backoffice-production.up.railway.app/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                    "email":login,
                    "mdp":password
            })
        }).then((result)=>{
            return result.json();
        }).then((e)=>{
            if(e.error !== undefined){
                setError("Login ou mot de passe incorrect");
            } else {
                let data = e.data;
                localStorage.setItem("userId", data.userId);
                localStorage.setItem("hash", data.hash);
                navigate("Acceuil");
            }
        },(e)=>{
            setError("No connection");
        });
    }
    if(wait){
        return(
            <div class="container">
                <div class="card shadow-lg o-hidden border-0 my-5">
                    <div class="card-body p-0">
                        <div class="row justify-content-center">
                            <div className="text-center">Login ...</div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h4 class="text-dark mb-4">Login</h4>
                                        <p>Veuillez vous connecter</p>
                                        <p className="text-center" >{error}</p>
                                    </div>
                                    <br />
                                    <form class="user" method="post">
                                        <div class="mb-3"><input class="form-control form-control-user" onChange={(e)=>{setLogin(e.target.value)}} type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." value={login} name="email" required/></div>
                                        <div class="mb-3"><input class="form-control form-control-user" onChange={(e)=>{setPassword(e.target.value)}} type="password" id="exampleInputPassword" value={password} placeholder="Password" name="password" required/></div>
                                        <div class="mb-3">
                                        </div><button class="btn btn-primary d-block btn-user w-100" onClick={(e)=>{log()}} type="button">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div class="container">
                <div class="card shadow-lg o-hidden border-0 my-5">
                    <div class="card-body p-0">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h4 class="text-dark mb-4">Login</h4>
                                        <p>Veuillez vous connecter</p>
                                        <p className="text-center" >{error}</p>
                                    </div>
                                    <br />
                                    <form class="user" method="post">
                                        <div class="mb-3"><input class="form-control form-control-user" onChange={(e)=>{setLogin(e.target.value)}} type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." value={login} name="email" required/></div>
                                        <div class="mb-3"><input class="form-control form-control-user" onChange={(e)=>{setPassword(e.target.value)}} type="password" id="exampleInputPassword" value={password} placeholder="Password" name="password" required/></div>
                                        <div class="mb-3">
                                        </div><button class="btn btn-primary d-block btn-user w-100" onClick={(e)=>{log()}} type="button">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}