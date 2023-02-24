import { Helmet } from 'react-helmet-async';

import Header from "../components/header";
import Footer from "../components/footer";
import HomeComp from "../components/mainCo";


const HtmlPage= () => {
  return(
    <>     
        <Helmet>
          <title>HTML</title>
          <meta name="description" content='HTML page'/>
        </Helmet>

        <Header/>

        <HomeComp txt="HTML page" funW="هتمل"/>
        <Footer />
    </>
  );
}

export default HtmlPage;