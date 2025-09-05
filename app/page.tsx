import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedCollections } from "@/components/featured-collections"
import { ProductShowcase } from "@/components/product-showcase"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedCollections />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  )
}
