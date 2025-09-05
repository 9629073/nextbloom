import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const collections = [
  {
    id: 1,
    name: "Diamond Elegance",
    description: "Timeless diamond pieces for special occasions",
    image: "/elegant-diamond-jewelry-collection-with-rings-and-.jpg",
    itemCount: 24,
  },
  {
    id: 2,
    name: "Gold Classics",
    description: "Classic gold jewelry for everyday luxury",
    image: "/classic-gold-jewelry-collection-with-bracelets-and.jpg",
    itemCount: 18,
  },
  {
    id: 3,
    name: "Pearl Sophistication",
    description: "Sophisticated pearl jewelry with modern flair",
    image: "/sophisticated-pearl-jewelry-collection-with-neckla.jpg",
    itemCount: 15,
  },
]

export function FeaturedCollections() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Featured Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our carefully curated collections, each piece designed to capture the essence of luxury and
            elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6 bg-card">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{collection.name}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{collection.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{collection.itemCount} pieces</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/collections/${collection.id}`}>View Collection</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
