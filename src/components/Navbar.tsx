

const buttons=[
    {label:"Shop",href:"/shop"},
    {label:"Favourites",href:"/favourites"},
    {label:"Cart",href:"/cart"}
];
export function Navbar(){
    return(
        <nav>
            <h1>SummitGear Market</h1>
   { buttons.map((button)=>(
    <a key={button.label} href={button.href} >
        {button.label}
    </a>
   ))}
  </nav>
)
}