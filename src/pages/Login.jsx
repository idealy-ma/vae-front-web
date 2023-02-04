import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export default function Login() {
    const [login, setLogin] = useState('Anjara.Joston@gmail.com');
    const [password, setPassword] = useState('anjara');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    function log() {
        fetch(("https://vae-client-backend-production.up.railway.app/login"),{
                method:'POST',
                headers:{
                    "Content-Type":'application/json'
                },
                body:JSON.stringify({
                    "email" : login,
                    "mdp" : password
                })
            }).then((result)=>{
                return result.json();
            }).then((res)=>{
//                 alert(JSON.stringify(res));
                if(res.error !== undefined){
                    setError("Login incorrect");
                } else {
                    const data = res.data;
                    localStorage.setItem("userId",data.userId);
                    localStorage.setItem("hash",data.hash);
                    navigate("/");
                    // alert(localStorage.getItem("hash"))
                }
            },(err)=>{
                alert("Server Error")
            })
    }

    return(
        <>
            <NavBar page={"Login"}/>
            <div class="container body">
                <div class="p-5">
                    <div class="text-center">
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
                        <button class="btn btn-primary d-block btn-user w-100" onClick={(e)=>{log()}} type="button">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}
