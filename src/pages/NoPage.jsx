import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

function NoPage(){
    return (
        <div>
            {/* <SideBar/> */}
            <NavBar/>
            <div class="container-fluid">
                <div class="text-center mt-5">
                    <div class="error mx-auto" data-text="404">
                        <p class="m-0">404</p>
                    </div>
                    <p class="text-dark mb-5 lead">Page Not Found</p>
                    <p class="text-black-50 mb-0">It looks like you found a glitch in the matrix...</p><a href="/">← Back to Dashboard</a>
                </div>
            </div>
        </div>
    );
}

export default NoPage;