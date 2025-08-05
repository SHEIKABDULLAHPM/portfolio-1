"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    subItems: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "E-commerce", href: "/services/ecommerce" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "SEO", href: "/services/seo" },
      { name: "Social Media Marketing", href: "/services/smm" },
    ]
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const pathname = usePathname()

  const toggleMobileMenu = () => setIsOpen(!isOpen)
  const closeMobileMenu = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DM</span>
            </div>
            <span className="font-bold text-xl gradient-text">Digital Marketing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                        pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                      )}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 glass-effect rounded-lg shadow-lg p-2"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "block px-3 py-2 text-sm rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",
                                pathname === subItem.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <DarkModeToggle />
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <DarkModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border/50"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <>
                        <button
                          className={cn(
                            "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent",
                            pathname.startsWith(item.href) ? "text-primary bg-accent" : "text-muted-foreground"
                          )}
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={cn(
                            "h-3 w-3 transition-transform",
                            activeDropdown === item.name ? "rotate-180" : ""
                          )} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={cn(
                                    "block px-3 py-2 text-sm rounded-lg transition-colors hover:bg-accent",
                                    pathname === subItem.href ? "text-primary bg-accent" : "text-muted-foreground"
                                  )}
                                  onClick={closeMobileMenu}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent",
                          pathname === item.href ? "text-primary bg-accent" : "text-muted-foreground"
                        )}
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-border/50">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}