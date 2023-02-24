import { Helmet } from 'react-helmet-async';

import Header from "../components/header";
import Footer from "../components/footer";
import HomeComp from "../components/mainCo";

const JavaScriptPAGE= () => {
  return(
    <>
        <Helmet>
          <title>Js</title>
          <meta name="description" content='js page'/>
        </Helmet>

        <Header />

        <HomeComp txt="JS page" funW="جي اس"/>
        <Footer />
    </>     
  );
}

export default JavaScriptPAGE;