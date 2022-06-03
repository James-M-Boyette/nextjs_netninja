// This file is named with brackets because it needs to be changeable (in Next.js's eyes)... if we used our normal syntax (id.js) then this would *only* match the literal route "/users/id" - but we want Next.js to auto-generate pages for any specific user dynamically (so that user/1 or user/23 all return specific users)

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();


    const paths = data.map(ninja => {
        
        return {
            params: { id:  ninja.id.toString()}
        }
    })

    return {
        paths, // same as paths: paths
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    return {
        props: { ninja: data }
    }
}

const Details = ({ ninja }) => {
    return ( 
        <div>
            <h1>Name: { ninja.name }</h1>
            <p>Email: { ninja.email }</p>
            <p>City: { ninja.address.city }</p>
            <p>Website: { ninja.website }</p>

        </div>
     );
}
 
export default Details;
