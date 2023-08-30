import Footer from "../(components)/footer/page";
import Header from "../(components)/header/page";
import Pricing from "../(components)/pricing/page";


function Services() {
  return (
    <>
      <Header title="Services"/>
      
    <div className="servic">
    <h4>OUR PRICING</h4>
        <h1>Choose A Plan That's Right For You.</h1>
      
    <Pricing text="Basic Plan" rate="$50"/>
      <Pricing text="Standerd Plan" rate="$99"/>
      <Pricing text="Premium Plan" rate="$150"/>
    </div>

      <div className="Footer1"> <Footer/></div>

     
      
    </>
  );
}

export default Services;