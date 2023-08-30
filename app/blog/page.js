import Footer from "../(components)/footer/page";
import Header from "../(components)/header/page";
import Card from "../(components)/card/page";


function Blog() {
  return (
    <>
      <Header title="Blog" />
      <div className="Blog">
        <Card source='/55.png' title="Smart Planing" text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih" />
        <Card source='/55.png' title="Our Partnership" text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih" />
        <Card source='/55.png' title="Super Ideas" text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih" />
        <Card source='/55.png' title="Smart Planing" text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih" />
        <Card source='/55.png' title="Our Partnership" text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih" />
        <Card source='/55.png' title="Super Ideas" text="Lorem ipsum do adipisicing elit. Similique dolor corporis, commodi nih" />
      </div>
      <div className="Footer1"> <Footer /></div>

    </>
  );
}

export default Blog;