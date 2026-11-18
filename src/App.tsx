// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import {products} from "./data/products";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {ProductSection} from "./components/ProductSection";
import{StatsBar} from "./components/StatsBar";
function App() {
  const deals = products.filter((product)=> product.price < 20);
  const topRated = products.filter((product)=>{
    return product.stock > 0 && product.rating >= 4.5;
  });
   const furniture = products.filter((product)=> product.category === "furniture");
   const luxury = products.filter((product)=>product.price > 5000);
  return (
   
    <>
   <Navbar />
    <main className="min-h-screen bg-gray-50 p-8">
      <StatsBar products={products}/>
     <ProductSection title="Deals under $20" products={deals}/>
     <ProductSection  title="Top rated" products={topRated}/>
     <ProductSection title="Furniture" products={furniture}/>
    <ProductSection title="Luxury(over  $5,000)" products={luxury}/>
    

   </main>
    
    <Footer companyName="SummitGear Market"/>
   </>
  );
}

export default App;
  