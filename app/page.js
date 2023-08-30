// import Image from 'next/image'
import Footer from './(components)/footer/page';
import Header from './(components)/header/page';
import Card from './(components)/card/page';
import Part2 from './(components)/part2/page';
import Part3 from './(components)/part3/page';
import Card2 from './(components)/card5/page';
import Part4 from './(components)/part4/page';
import Pricing from './(components)/pricing/page';
import Last from './(components)/lastpart/page';


export default function Home() {
  return (
    <div>
      <Header title="Home Page"/>
      <h4 className='our'>OUR SERVICES<br/><span className='col'><h2> We Are Providing Digital Services</h2></span></h4>
      <br/>
      <Card title='Web Development' source='/55.png'text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih"/>
      <Card title='Graphic Designing' source='/55.png'text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih"/>
      <Card title='Digital Markeeting'source='/55.png' text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih"/>
      <Part2/>
      <Part3/>
      <Card2 title="Web Designing" source="/55.png"/>
      <Card2 title="Hosting" source="/1.jpg"/>
      <Card2 title="E Commerce" source="/55.png"/>
      <Card2 title="E loan" source="/1.jpg"/>
      <Card2 title="Portfolio" source="/55.png"/>
      <Card2 title="Calculater" source="/1.jpg"/>
      <Part4/>
      <Pricing text="Basic Plan" rate="$50"/>
      <Pricing text="Standerd Plan" rate="$99"/>
      <Pricing text="Premium Plan" rate="$150"/>
      <Last/>
      <Footer />
    </div>
  );
}
