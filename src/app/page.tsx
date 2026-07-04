import Hero from "@/components/Hero";
import ShopByBrand from "@/components/ShopByBrand";
import ShopByCategory from "@/components/ShopByCategory";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import BestSellers from "@/components/BestSellers";
import Reviews from "@/components/Reviews";
import InstagramGallery from "@/components/InstagramGallery";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShopByBrand />
      <ShopByCategory />
      <FeaturedProducts />
      <WhyChooseUs />
      <BestSellers />
      <Reviews />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
