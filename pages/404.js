import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        // Redirect after 3 seconds to homepage
        setTimeout(() => {
            // router.go(-1) // Redirect to previous page
            router.push('/');
        }, 3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>Ooooops ...</h1>
            <h2>Page not found</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link> </p>
        </div>
     );
}
 
export default NotFound;