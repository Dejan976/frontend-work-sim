// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import {products} from "./data/products";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {ProductSection} from "./components/ProductSection";
import{StatsBar} from "./components/StatsBar";
import { groupByCategory } from "./utils/groupByCategory";
function App() {

   const groups = groupByCategory(products);
  return (
   
    <>
   <Navbar />
   
    <main className="min-h-screen bg-gray-50 p-8">
     <StatsBar products={products}/>
    <h2 className="text-2xl font-bold mb-8 ">Shop by category</h2>
      {Object.entries(groups).map(([category,items])=>(
      <ProductSection
      key = {category}
      title = {`${category} (${items.length})`}
      products = {items}
    />
      ))}
   </main>
    
    <Footer companyName="SummitGear Market"/>
   </>
  );
}

export default App;
  