import type{Product} from '../types/product'

export function groupByCategory(products:Product[]):Record <string,Product[]>{
    return (
    products.reduce((groups,product)=>{
      const category = product.category;
if(!groups[category]){
    groups[category] = [];
    }
    groups[category].push(product);
    return groups;


    },{} as Record<string,Product[]>)

)}