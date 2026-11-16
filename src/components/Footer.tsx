export function Footer({companyName}: {companyName:string}){
    const year = new Date().getFullYear();
    return(
<footer>
    <p className="text-gray-400 p-4"> ©{year} {companyName}</p>
</footer>
    )
}