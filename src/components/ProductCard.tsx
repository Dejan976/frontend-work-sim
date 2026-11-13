import  type {Product} from '../types/product'

export function ProductCard({product} : {product:Product}){
    return(
          <div className='border-2 rounded-2xl  border-gray-200 pb-8 w-85 overflow-hidden'>
            <div className='bg-gray-200'>
<img src={product.thumbnail} alt={product.title}/>
            </div>
          <div className='bg-white p-4'>
            {product.brand && <h3 className='text-sm text-gray-500 font-bold uppercase tracking-wide'>{product.brand}</h3>}
            <h2 className='font-bold'>{product.title}</h2>
            <div className='flex justify-between'>
            <span className='text-green-700 font-bold text-lg'>${product.price.toFixed(2)}</span>
            <span className='text-sm text-gray-400'>★{product.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
    )
}