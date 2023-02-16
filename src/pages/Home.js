import Header from "../components/header";
import Footer from "../components/footer";
import HomeComp from "../components/mainCo";

const Home= () => {
  return(
    <>
        <Header/>

        <HomeComp txt="Home page" funW="مرة واحد جيه يقعد على قهوة قعد على شاي"/>
        <Footer />
    </>
  );
}

export default Home;