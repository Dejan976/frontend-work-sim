


export function Navbar(){
    const buttons=[
    {label:"Shop",href:"/shop"},
    {label:"Favourites",href:"/favourites"},
    {label:"Cart",href:"/cart"},
];
    return(
        <nav className="flex justify-between items-center">
            <div>
<h1 className="text-3xl font-bold text-green-800">SummitGear Market</h1>
            </div>
     <div className='flex gap-6 text-gray-400'>   
   { buttons.map((button)=>(
    <a key={button.label} href={button.href} >
        {button.label}
    </a>
    
   ))}
   </div>
  </nav>
)
}