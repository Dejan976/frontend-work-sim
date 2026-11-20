
import type { Product } from "../types/product";
import {ProductGrid} from "./ProductGrid";

export function ProductSection({title,products}:{title:string, products:Product[]}){
return(
    <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 capitalize">{title}</h2>
    <ProductGrid products={products}/>
    </section>
)


}