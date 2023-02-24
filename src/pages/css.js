import { Helmet } from "react-helmet-async";

import Header from "../components/header";
import Footer from "../components/footer";
import HomeComp from "../components/mainCo";

const CssPage = () => {
  return (
    <>
      <Helmet>
        <title>css</title>
        <meta name="description" content="css page" />

        <script>alert("That's CSS page!!")</script>
      </Helmet>

      <Header />

      <HomeComp txt="CSS page" funW="صي اس اس" />

      <Footer />
    </>
  );
};

export default CssPage;
