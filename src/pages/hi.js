import { Helmet } from 'react-helmet-async';

import Footer from "../components/footer"
import Header from "../components/header"
import HomeComp from "../components/mainCo"


const FunPg = () => {
  return(
    <>
      <Helmet>
          <title>Hi</title>
          <meta name="description" content='css page'/>
      </Helmet>
      
      <Header />

      <HomeComp txt="حلو الموقع؟؟"/>

      <Footer />
    </>
  )
}

export default FunPg