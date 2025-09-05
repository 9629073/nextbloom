import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 2499,
    originalPrice: null,
    image: "/elegant-diamond-solitaire-engagement-ring-on-white.jpg",
    isNew: true,
    isSale: false,
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    price: 899,
    originalPrice: 1199,
    image: "/elegant-pearl-drop-earrings-with-gold-setting.jpg",
    isNew: false,
    isSale: true,
  },
  {
    id: 3,
    name: "Gold Tennis Bracelet",
    price: 1799,
    originalPrice: null,
    image: "/luxury-gold-tennis-bracelet-with-diamonds.jpg",
    isNew: false,
    isSale: false,
  },
  {
    id: 4,
    name: "Emerald Pendant Necklace",
    price: 3299,
    originalPrice: null,
    image: "/elegant-emerald-pendant-necklace-with-gold-chain.jpg",
    isNew: true,
    isSale: false,
  },
]

export function ProductShowcase() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Bestselling Pieces</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our most loved jewelry pieces, handpicked by our customers for their exceptional beauty and
            craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && <Badge className="bg-secondary text-secondary-foreground">New</Badge>}
                  {product.isSale && <Badge className="bg-primary text-primary-foreground">Sale</Badge>}
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="icon" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                </div>
              </div>
              <CardContent className="p-4 bg-card">
                <h3 className="font-semibold text-card-foreground mb-2 text-pretty">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-primary">${product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
