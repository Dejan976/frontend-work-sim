// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import {products} from "./data/products";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {ProductGrid} from "./components/ProductGrid";
import {ProductSection} from "./components/ProductSection"

function App() {
  const deals = products.filter((product)=> product.price < 20);
  return (
    <>
   <Navbar />
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold ">SummitGear Market</h1>
      <p className="text-gray-600">Open the tickets folder to get started.</p>
     <ProductSection title="Deals" products={deals}/>
      <ProductGrid products={products}/>

   </main>
    
    <Footer companyName="SummitGear Market"/>
   </>
  );
}

export default App;
  