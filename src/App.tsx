// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import {products} from "./data/products";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {ProductGrid} from "./components/ProductGrid";
import {ProductSection} from "./components/ProductSection"

function App() {
  const deals = products.filter((product)=> product.price < 20);
  const topRated = products.filter((product)=>{
    return product.stock > 0 && product.rating >= 4.5;
  });
   const furniture = products.filter((product)=> product.category === "furniture");
  return (
   
    <>
   <Navbar />
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold ">SummitGear Market</h1>
      <p className="text-gray-600">Open the tickets folder to get started.</p>
     <ProductSection title="Deals" products={deals}/>
     <ProductSection  title="Top Rated" products={topRated}/>
     <ProductSection title="Furniture" products={furniture}/>
      <ProductGrid products={products}/>

   </main>
    
    <Footer companyName="SummitGear Market"/>
   </>
  );
}

export default App;
  