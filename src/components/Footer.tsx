export function Footer({companyName}: {companyName:string}){
    const year = new Date().getFullYear();
    return(
<footer>
    <p className="text-gray-400 p-8"> © {year} {companyName}</p>
</footer>
    )
}