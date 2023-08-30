import Footer from "../(components)/footer/page";
import Header from "../(components)/header/page";
import Card from "../(components)/card/page";
import Button from "../(components)/button/page";


function About() {
  return (
    <>
      <Header  title="About"/> 
      <div className="aboutus">
      <div className="part2">
         <Card source='/1.jpg' title="Web desiginging is a New Technology And Logic Building & Web And Mobile Application "/>
         <div className="data">
               <h4>About Us:</h4>
               <br/>
               <h1>
                    We design build brand <br/>
                    & digital projects.
               </h1>
               <br/>
               <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
               soluta labore.<br/>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis.
               </p>

               
               <div className="ok5"><Button text="Read More" /></div>
               </div>
               </div>
      </div>




      

      <div className="Footer1"> <Footer/></div>

      
    </>
  );
}

export default About;