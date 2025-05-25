import Navbar from "../Navbar";
import Investment from "./Investment";
import DematAccount from "./DematAccount";
import Hero from "./Hero";
import Signup from "./Signup";
import Footer from "../Footer";


function SignupPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Signup/>
        <Investment/>
        <DematAccount/>
        <Footer/>
        </>
     );
}

export default SignupPage;