import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Usage from "../Usage/Usage";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Usage></Usage>
            <Footer></Footer>
        </div>
    );
};

export default Home;