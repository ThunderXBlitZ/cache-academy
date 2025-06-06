"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Database, Server, Layers, BarChart, ChevronDown} from "lucide-react"
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
            <Link href="/" className="font-medium text-primary">
              Home
            </Link>
            <Link href="/access-speeds" className="font-medium text-muted-foreground hover:text-primary">
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
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Welcome to Cache Academy</h1>
              <p className="text-xl text-muted-foreground">Learn how caching works in system design</p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">What is Caching?</CardTitle>
                <CardDescription>A beginner's guide to understanding caching in system design</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 mt-8">
                  <div className="mb-16 flex flex-col gap-6 items-center">
                    <p className="text-lg mb-4">
                      <strong>Caching</strong> is like having a small notepad where you write down information you use
                      often, so you don't have to look it up in a big encyclopedia every time.
                    </p>
                    <p className="text-lg">
                      In computing, a cache stores frequently accessed data in a faster storage layer so it can be
                      retrieved more quickly than accessing the original source.
                    </p>
                      <Image
                        src="/cache-academy/images/cache-how-it-works.svg"
                        alt="How Caching Works"
                        width={720}
                        height={360}
                        className="rounded-lg border shadow-sm"
                      />
                  </div>

                  <hr></hr>
                  
                  <div className="rounded-lg bg-muted p-6 mt-16">
                    <h3 className="text-xl font-medium mb-4">Why Do We Need Caching?</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                          <BarChart className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="font-medium mb-2">Speed</h4>
                        <p className="text-muted-foreground">
                          Accessing data from a cache is much faster than from a database or remote API
                        </p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                          <Server className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="font-medium mb-2">Reduced Load</h4>
                        <p className="text-muted-foreground">
                          Fewer requests to your database means it can handle more important work
                        </p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                          <Layers className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="font-medium mb-2">Scalability</h4>
                        <p className="text-muted-foreground">
                          Systems can handle more users and traffic with effective caching
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 mt-12 gap-6">
                    <div className="rounded-lg border p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Server className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-medium">The Cache</h3>
                      </div>
                      <p className="text-muted-foreground">
                        A temporary storage that keeps frequently accessed data ready for quick retrieval. It's
                        typically smaller but much faster than the main storage.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Fast access (memory, SSD)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Limited capacity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Temporary storage</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Database className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-medium">The Database</h3>
                      </div>
                      <p className="text-muted-foreground">
                        The main storage system that holds all your data permanently. It's comprehensive but typically
                        slower to access than a cache.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Slower access (disk, network)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Large capacity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Persistent storage</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg border-2 border-primary/20 bg-primary/1 mt-12 p-6">
                    <h3 className="text-xl font-medium mb-4">Example of Caching Systems</h3>
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <a href="https://redis.io/lp/get-started2/" target="_new">Redis</a>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <a href="https://memcached.org/" target="_new">Memcached</a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex-1">
                          <ul>
                            <li className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <a href="https://hazelcast.com/use-cases/caching/" target="_new">Hazelcast</a>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <a href="https://aws.amazon.com/elasticache" target="_new">Amazon ElastiCache</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                  </div>

                  <div className="rounded-lg border-2 border-primary/20 bg-primary/5 mt-12 p-6">
                    <h3 className="text-xl font-medium mb-4">The Caching Challenge</h3>
                    <p className="mb-4">
                      The key challenge in caching is deciding <strong>when and how</strong> to move data between the
                      cache and the database. This is where different caching strategies come in.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <h4 className="font-medium mb-2">Questions to Answer:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">?</span>
                            <span>When should data be added to the cache?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">?</span>
                            <span>How long should data stay in the cache?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">?</span>
                            <span>When should the database be updated?</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-2">Caching Strategies:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Write-Through Cache</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Write-Back Cache</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Write-Around Cache</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Read-Through Cache</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium mb-4">Simple Caching Example</h3>
                      <Button variant="ghost" size="sm" onClick={toggleCode} className={"flex items-center gap-1 " + (codeVisible ? "" : "text-blue-500")}>
                        {codeVisible ? "Hide Code" : "Show Code"}
                        <ChevronDown className={`h-4 w-4 transition-transform ${codeVisible ? "rotate-180" : ""}`} />
                      </Button>
                    </div>
                    {codeVisible && (<div className="rounded-lg bg-muted p-4">
                      <pre className="text-sm overflow-auto">
                      <code>{`// Simple caching example in pseudocode

function getData(key) {
  // First, check if the data is in the cache
  if (cache.has(key)) {
    return cache.get(key);  // Cache hit!
  }
  
  // If not in cache, get from database
  const data = database.get(key);  // Cache miss
  
  // Store in cache for next time
  cache.set(key, data);
  
  return data;
}`}</code>
                      </pre>
                    </div>
  )}</div>
                </div>
              </CardContent>
              <CardFooter className="mt-4 flex justify-end">
                <Link href="/access-speeds">
                  <Button className="gap-2">
                    Explore Access Speeds <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t px-4 py-6">
        <div className="w-full flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Cache Academy. All rights reserved.
          </p>
          <div className="flex self-end items-center gap-4">
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

