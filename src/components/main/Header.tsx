"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import React, { useState } from "react";
import { Button } from '@/components/ui/button'
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-screen flex flex-wrap justify-between items-start p-4 md:p-6 shadow-md">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            SharedPen
          </h1>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <NavigationMenu className={`${isMenuOpen ? "block" : "hidden"} md:flex transition-[display] md:items-center md:space-x-4`}>
          <NavigationMenuList className="flex flex-col md:flex-row gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 sm:w-[300px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          SharedPen
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A collaborative code editor for individuals and teams.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/features" title="Introduction">
                    An overview of the platform and its features.
                  </ListItem>
                  <ListItem href="/get-started" title="Installation">
                    How to get started with SharedPen.
                  </ListItem>
                  <ListItem href="/teams" title="Typography">
                    Learn about team collaboration.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/home"
                className={navigationMenuTriggerStyle()}
              >
                home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/community"
                className={navigationMenuTriggerStyle()}
              >
                community
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/login"
                className={navigationMenuTriggerStyle()}
              >
                Login
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/signup"
                className={navigationMenuTriggerStyle()}
              >
                Register
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/dashboard"
                className={navigationMenuTriggerStyle()}
              >
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <Button onClick={()=>{
            setIsMenuOpen(val=>!val)
          }} className="md:hidden">
            <svg
              className="w-6 h-6 fill-current text-muted-foreground"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            > </svg>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
