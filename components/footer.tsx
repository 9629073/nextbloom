import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold text-card-foreground">Luxe Jewelry</span>
            </div>
            <p className="text-muted-foreground text-pretty">
              Crafting exceptional jewelry pieces that celebrate life's most precious moments with timeless elegance and
              modern sophistication.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-card-foreground">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/collections"
                  className="text-muted-foreground hover:text-card-foreground transition-colors"
                >
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/rings" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/necklaces" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/earrings" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/bracelets" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-card-foreground">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/sizing" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Jewelry Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-card-foreground">Stay Connected</h3>
            <p className="text-muted-foreground text-pretty">
              Subscribe to receive exclusive offers and updates on our latest collections.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 Luxe Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-card-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-card-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
