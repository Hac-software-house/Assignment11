import Image from 'next/image';
import Link from 'next/link'; // Import Link component
import Button from '../button/page';
import Search from '../search/page';
function Header(props) {
    return (
        <div className="header-container">
            <Image
                className="headerbg"
                src="/1.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <h2 className='name'>LOGO.</h2>
        
            <ul className="nav-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/pages">Pages</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                
            </ul>
        
            <h1 className='ok'>{props.title}</h1>
            <p className='ok2'>Filler text is text that shares some characteristics of a real</p>
            <Button text="Learn More"/>
            <Search/>
            
        </div>
       
    );
}

export default Header;
