import  type {Product} from '../types/product'

export function ProductCard({product} : {product:Product}){
    return(
          <div className=' rounded-2xl border-gray-200 p-4 w-80'>
            <div className='bg-gray-300'>
<img src={product.thumbnail} alt={product.title}/>
            </div>
          <div className='bg-white'>
            <h3>{product.brand}</h3>
            <h1>{product.title}</h1>
            <span>${product.price.toFixed(2)}</span>
            <span>★{product.rating.toFixed(2)}</span>
          </div>
        </div>
    )
}