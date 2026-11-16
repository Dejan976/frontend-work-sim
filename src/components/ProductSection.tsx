
import type { Product } from "../types/product";
import {ProductGrid} from "./ProductGrid";

export function ProductSection({title,products}:{title:string, products:Product[]}){
return(
    <section>
        <h2>{title}</h2>
    <ProductGrid products={products}/>
    </section>
)


}