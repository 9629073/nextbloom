"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingBag, Menu, Heart, User } from "lucide-react"

export function Header() {
  const [cartCount] = useState(3)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <span className="text-xl font-bold text-foreground">Luxe Jewelry</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/collections"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/rings"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Rings
            </Link>
            <Link
              href="/necklaces"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Necklaces
            </Link>
            <Link
              href="/earrings"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Earrings
            </Link>
            <Link
              href="/bracelets"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Bracelets
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs bg-primary text-primary-foreground">
                  {cartCount}
                </Badge>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link href="/collections" className="text-lg font-medium">
                    Collections
                  </Link>
                  <Link href="/rings" className="text-lg font-medium">
                    Rings
                  </Link>
                  <Link href="/necklaces" className="text-lg font-medium">
                    Necklaces
                  </Link>
                  <Link href="/earrings" className="text-lg font-medium">
                    Earrings
                  </Link>
                  <Link href="/bracelets" className="text-lg font-medium">
                    Bracelets
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
