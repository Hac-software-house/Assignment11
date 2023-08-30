import Card from "../card/page"
import Button from "../button/page"

function Part2() {
    return (
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

               
               <div className="ok5"><Button text="Read More" /></div><br/>
               <div className="card22">
                    <Card source='/55.png' title="Smart Planing"text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih"/> 
                    <Card source='/55.png' title="Our Partnership"text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih"/>
                    <Card source='/55.png' title="Super Ideas"text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih"/>
               </div>
               
         </div>
         
        
    </div>
    
    )}

    export  default Part2