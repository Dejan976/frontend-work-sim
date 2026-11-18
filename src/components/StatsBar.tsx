
import type{Product} from "../types/product";
export function StatsBar({products} :{products:Product[]}){
const totalUnits = products.reduce((acc,product)=> 
   acc + product.stock ,0).toLocaleString("en-US");
const totalInventory = products.reduce((acc,product)=>
acc + product.price * product.stock,0).toLocaleString("en-US", {style: "currency", currency: "USD"});
const averageRating = (products.reduce((acc,product)=>
acc + product.rating,0) / products.length).toFixed(1);
const lowStock = products.filter((product)=> product.stock < 10).length
return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className= "border-2  border-gray-200 rounded-2xl p-8 bg-white ">
<p className="text-small text-gray-500 font-bold">UNITS IN STOCK</p>
<p className="text-2xl text-black font-bold">{totalUnits}</p>
</div>
<div className="border-2  border-gray-200 rounded-2xl not-first:p-8 bg-white">
    <p className="text-small text-gray-500 font-bold">INVENTORY VALUE</p>
    <p  className="text-2xl text-black font-bold">{totalInventory}</p>
    </div>
<div className="border-2  border-gray-200 rounded-2xl p-8 bg-white">
    <p  className="text-small text-gray-500 font-bold">AVERAGE RATING</p>
    <p  className="text-2xl text-black font-bold">★ {averageRating}</p> 
    </div>
<div className="border-2  border-gray-200 rounded-2xl  p-8 bg-white">
    <p  className="text-small text-gray-500 font-bold">LOW STOCK</p>
    <p  className="text-2xl text-orange-700 font-bold">{lowStock} products</p></div>
</div>
)
}