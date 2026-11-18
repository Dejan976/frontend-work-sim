
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
    <div>
<div>{totalUnits}</div>
<div>{totalInventory}</div>
<div> ★{averageRating}</div>
<div>{lowStock}</div>
</div>
)
}