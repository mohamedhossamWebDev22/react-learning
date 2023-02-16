import Header from "../components/header";
import Footer from "../components/footer";
import HomeComp from "../components/mainCo";


const HtmlPage= () => {
  return(
    <>     
        <Header/>

        <HomeComp txt="HTML page" funW="هتمل"/>
        <Footer />
    </>
  );
}

export default HtmlPage;