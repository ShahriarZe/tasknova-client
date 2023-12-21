import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Usage from "../Usage/Usage";
import NavBar from "../NavBar/NavBar"

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