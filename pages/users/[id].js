// This file is named with brackets because it needs to be changeable (in Next.js's eyes)... if we used our normal syntax (id.js) then this would *only* match the literal route "/users/id" - but we want Next.js to auto-generate pages for any specific user dynamically (so that user/1 or user/23 all return specific users)

const Details = () => {
    return ( 
        <div>
            <h1>Details Page</h1>
        </div>
     );
}
 
export default Details;
