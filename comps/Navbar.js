import Link from 'next/link'
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
           <div className="logo">
              <Image src="/logo.png" width={77} height={77} />
              <h4>Users Listing</h4>
           </div>
           <Link href="/"><a> Home </a></Link>
           <Link href="/about"><a> About </a></Link>
           <Link href="/users"><a> Users-Listing </a></Link>
        </nav>
     );
}
 
export default Navbar;