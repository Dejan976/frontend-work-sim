import type {Product} from '../types/product.ts'
import { ProductCard} from './ProductCard'
export function ProductGrid({products} : {products:Product[]}){
    return(
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {products.map((product)=>(
                <li key={product.id}><ProductCard product={product}/></li>
            ))}
        </ul>
    )
}