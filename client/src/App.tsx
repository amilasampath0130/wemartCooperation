import ScrollToTop from "./components/ScrollToTop"
import ContactUs from "./pages/ContactUs"
import BannerCategories from "./ui/BannerCategories"

import Categories from "./ui/Categories"

import DiscountedBanner from "./ui/DiscountedBanner"
import Highlights from "./ui/Highlights"
import HomeBanner from "./ui/HomeBanner"

import ProductList from "./ui/ProductList"


function App() {


  return (
    <main>
      <ScrollToTop />
      <BannerCategories />
      <HomeBanner />
      <Highlights />
      <Categories />
      <ProductList />
      <DiscountedBanner />
      <ContactUs />


    </main>
  )
}

export default App
