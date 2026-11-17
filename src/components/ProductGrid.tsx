import type {Product} from '../types/product.ts'
import { ProductCard} from './ProductCard'
import { EmptyState } from './EmptyState.tsx'
export function ProductGrid({products} : {products:Product[]}){
    if(products.length === 0 ){
        return <EmptyState message="Nothing matches this section. Check back soon!"/>
        }
    
    return(
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {products.map((product)=>(
                <li key={product.id}><ProductCard product={product}/></li>
            ))}
        </ul>
    )
}