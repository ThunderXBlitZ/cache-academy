"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Database} from "lucide-react"
import { useState } from "react"

export default function HomePage() {
    // Add state to track collapsible sections
    const [codeVisible, setCodeVisible] = useState<boolean>(false)
    const toggleCode = () => setCodeVisible(!codeVisible)
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between py-4">
          <div className="flex items-center pl-4 gap-2">
            <Database className="h-6 w-6" />
            <h1><a className="text-xl font-bold" href='/cache-academy/'>Cache Academy</a></h1>
          </div>
          <nav className="flex items-center pr-4 gap-4">
            <Link href="/" className="font-medium text-muted-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/access-speeds" className="font-medium text-primary">
              Access Speeds
            </Link>
            <Link href="/cache-mechanics" className="font-medium text-muted-foreground hover:text-primary">
              Cache Mechanics
            </Link>
            <Link href="/comparison" className="font-medium text-muted-foreground hover:text-primary">
              Comparison
            </Link>
            <Link href="/advanced-concepts" className="font-medium text-muted-foreground hover:text-primary">
              Advanced Concepts
            </Link>
            <a href="https://ko-fi.com/B0B014O6OC" target="_blank" rel="noopener noreferrer">
              <img
                height="36"
                style={{ border: '0px', height: '36px' }}
                src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
                alt="Buy Me a Coffee at ko-fi.com"
              />
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-[980px]">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Access Speeds</h1>
              <p className="text-xl text-muted-foreground">Compare latencies across different storage media</p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Pyramid of Access Speeds</CardTitle>
                <CardDescription>A bird's eye view of how latencies across different storage media affect read/write speeds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 mt-8">
                  <div className="mb-16 flex flex-col gap-6 items-center">
                    <p className="text-lg text-left w-full">
                      The <strong>faster</strong> the access speed, the more <strong>expensive</strong> the storage medium.
                    </p>
                    <p className="text-lg">
                      Hence, in computer architecture, we use a mixture of cache tiers depending on how fast or frequent the data is accessed,
                      to achieve high speeds while controlling costs.
                    </p>
                      <Image
                        src="/cache-academy/images/access-speeds.svg"
                        alt="Access speeds"
                        width={720}
                        height={360}
                        className="rounded-lg border shadow-sm"
                      />
                      <p><i>Source:</i><a href="https://cs.brown.edu/courses/csci1310/2020/assign/labs/lab4.html"><i>https://cs.brown.edu/courses/csci1310/2020/assign/labs/lab4.html</i></a> </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-16 flex justify-between">
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Home
                </Button>
              </Link>
              <Link href="/cache-mechanics">
                <Button className="gap-2">
                  Explore Caching Mechanisms <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
      </main>
      <footer className="border-t px-4 py-6">
        <div className="w-full flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Cache Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/access-speeds" className="text-sm text-muted-foreground hover:text-primary">
              Access Speeds
            </Link>
            <Link href="/cache-mechanics" className="text-sm text-muted-foreground hover:text-primary">
              Cache Mechanics
            </Link>
            <Link href="/comparison" className="text-sm text-muted-foreground hover:text-primary">
              Comparison
            </Link>
            <Link href="/advanced-concepts" className="text-sm text-muted-foreground hover:text-primary">
              Advanced Concepts
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

