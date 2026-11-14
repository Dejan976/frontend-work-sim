import type {Product} from '../types/product.ts'
import { ProductCard} from './ProductCard'
export function ProductGrid({products} : {products:Product[]}){
    return(
        <ul>
            {products.map((product)=>(
                <li key={product.id}><ProductCard product={product}/></li>
            ))}
        </ul>
    )
}