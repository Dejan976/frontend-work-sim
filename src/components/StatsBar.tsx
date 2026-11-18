
import type{Product} from "../types/product";
export function StatsBar({products} :{products:Product[]}){
const totalUnits = products.reduce((acc,product)=> 
   acc + product.stock ,0)


return(
<div>{totalUnits}</div>
)
}