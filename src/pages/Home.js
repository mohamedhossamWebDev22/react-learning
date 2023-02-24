import { Helmet } from 'react-helmet-async';

import Header from "../components/header";
import Footer from "../components/footer";
import HomeComp from "../components/mainCo";

const Home= () => {
  return(
    <>
        <Helmet>
          <title>Home</title>
          <meta name="description" content='css page'/>
        </Helmet>

        <Header/>

        <HomeComp txt="Home page" funW="مرة واحد جيه يقعد على قهوة قعد على شاي"/>
        <Footer />
    </>
  );
}

export default Home;