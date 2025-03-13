"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, BookOpen, Database, Server, Shield, Zap } from "lucide-react"

export default function AdvancedConceptsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6" />
            <h1 className="text-xl font-bold">Cache Academy</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/" className="font-medium text-muted-foreground hover:text-primary">
              Cache Mechanics
            </Link>
            <Link href="/advanced-concepts" className="font-medium text-primary">
              Advanced Concepts
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-4">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
              Advanced Caching Concepts
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Explore complex caching challenges and their solutions
            </p>
          </div>
        </section>
        <section className="container py-8">
          <AdvancedCachingConcepts />
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Cache Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              Home
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

function AdvancedCachingConcepts() {
  const [activeTab, setActiveTab] = useState("concurrency")

  const advancedConcepts = {
    concurrency: {
      title: "Cache Concurrency Control",
      description: "Managing concurrent access to cached data to prevent race conditions and ensure data consistency.",
      content: (
        <div className="space-y-6">
          <p>
            Cache concurrency control is essential in multi-threaded or distributed systems where multiple processes
            might read or write to the same cached data simultaneously.
          </p>

          <div className="rounded-lg border p-4">
            <h3 className="mb-4 text-lg font-medium">Common Concurrency Issues</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-500">●</span>
                <div>
                  <strong>Read-Write Conflicts:</strong> One process reads while another writes, potentially reading
                  stale or partially updated data.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-500">●</span>
                <div>
                  <strong>Write-Write Conflicts:</strong> Multiple processes attempt to update the same cache entry
                  simultaneously, leading to lost updates.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-500">●</span>
                <div>
                  <strong>Phantom Reads:</strong> A process reads data that is later modified or deleted by another
                  process before the first process completes its operation.
                </div>
              </li>
            </ul>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="locks">
              <AccordionTrigger>Locking Mechanisms</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>Locks prevent multiple processes from accessing or modifying the same data simultaneously.</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Pessimistic Locking</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <strong>Approach:</strong> Locks the data before access
                          </li>
                          <li>
                            <strong>Pros:</strong> Prevents conflicts entirely
                          </li>
                          <li>
                            <strong>Cons:</strong> Can lead to deadlocks, reduced concurrency
                          </li>
                          <li>
                            <strong>Use when:</strong> Data consistency is critical and conflicts are frequent
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Optimistic Locking</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <strong>Approach:</strong> Detects conflicts at commit time using versioning
                          </li>
                          <li>
                            <strong>Pros:</strong> Higher concurrency, no deadlocks
                          </li>
                          <li>
                            <strong>Cons:</strong> Requires conflict resolution, potential for wasted work
                          </li>
                          <li>
                            <strong>Use when:</strong> Conflicts are rare and performance is important
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="versioning">
              <AccordionTrigger>Cache Entry Versioning</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Versioning assigns a version number to each cache entry, allowing detection of concurrent
                    modifications.
                  </p>
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 font-medium">Implementation Approaches</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Timestamps:</strong> Use timestamps to track when entries were last modified
                      </li>
                      <li>
                        <strong>Version counters:</strong> Increment a counter each time an entry is modified
                      </li>
                      <li>
                        <strong>ETags:</strong> Use hash-based entity tags to detect changes (common in HTTP caching)
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 font-medium">Conflict Resolution Strategies</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Last-writer-wins:</strong> The most recent update is preserved
                      </li>
                      <li>
                        <strong>First-writer-wins:</strong> Later conflicting updates are rejected
                      </li>
                      <li>
                        <strong>Merge:</strong> Attempt to combine changes from conflicting updates
                      </li>
                      <li>
                        <strong>Custom resolution:</strong> Application-specific logic to resolve conflicts
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="distributed">
              <AccordionTrigger>Distributed Cache Consistency</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    In distributed caching systems, maintaining consistency across multiple cache nodes adds complexity.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Strong Consistency</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <strong>Approach:</strong> All reads reflect the most recent write
                          </li>
                          <li>
                            <strong>Pros:</strong> Simpler application logic, predictable behavior
                          </li>
                          <li>
                            <strong>Cons:</strong> Higher latency, reduced availability
                          </li>
                          <li>
                            <strong>Examples:</strong> Redis with synchronous replication, single-master systems
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Eventual Consistency</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <strong>Approach:</strong> Updates propagate asynchronously, temporary inconsistencies
                            allowed
                          </li>
                          <li>
                            <strong>Pros:</strong> Lower latency, higher availability
                          </li>
                          <li>
                            <strong>Cons:</strong> Complex application logic to handle inconsistencies
                          </li>
                          <li>
                            <strong>Examples:</strong> Memcached clusters, multi-region caches
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="rounded-lg bg-muted p-4">
            <h3 className="mb-2 text-lg font-medium">Best Practices</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                <div>
                  <strong>Use atomic operations</strong> when available in your caching system
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                <div>
                  <strong>Implement idempotent operations</strong> that can be safely retried without side effects
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                <div>
                  <strong>Choose appropriate isolation levels</strong> based on your consistency requirements
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                <div>
                  <strong>Consider using distributed locks</strong> for critical operations in distributed systems
                </div>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    thundering: {
      title: "Thundering Herd Problem",
      description:
        "When multiple clients simultaneously request data that isn't in the cache, causing a sudden surge in database load.",
      content: (
        <div className="space-y-6">
          <p>
            The thundering herd problem occurs when a cache entry expires or is invalidated, and multiple clients
            simultaneously attempt to regenerate the cached data, causing a sudden spike in database or backend load.
          </p>

          <div className="rounded-lg border p-4">
            <h3 className="mb-4 text-lg font-medium">The Problem Visualized</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border p-4">
                <h4 className="mb-2 text-sm font-medium">1. Cache Miss</h4>
                <div className="flex justify-center">
                  <Server className="h-16 w-16 text-muted-foreground" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">A popular cache entry expires or is invalidated</p>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="mb-2 text-sm font-medium">2. Multiple Requests</h4>
                <div className="flex justify-center">
                  <Zap className="h-16 w-16 text-amber-500" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Many clients request the same data simultaneously</p>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="mb-2 text-sm font-medium">3. Database Overload</h4>
                <div className="flex justify-center">
                  <Database className="h-16 w-16 text-red-500" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  The database is hit with many identical queries at once
                </p>
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="cache-lock">
              <AccordionTrigger>Cache Locks & Semaphores</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>Cache locks prevent multiple processes from regenerating the same cache entry simultaneously.</p>
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 font-medium">Implementation</h4>
                    <ol className="space-y-2 text-sm">
                      <li>
                        <strong>1.</strong> First request for missing data acquires a lock
                      </li>
                      <li>
                        <strong>2.</strong> Subsequent requests wait for the lock or receive a stale version
                      </li>
                      <li>
                        <strong>3.</strong> First request regenerates the data and updates the cache
                      </li>
                      <li>
                        <strong>4.</strong> Lock is released, waiting requests can now access fresh data
                      </li>
                    </ol>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 text-sm font-medium text-green-600">Pros</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Effectively prevents database overload
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Ensures data is generated only once
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 text-sm font-medium text-red-600">Cons</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Increased latency for waiting requests
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Potential for deadlocks if not implemented carefully
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="stale-cache">
              <AccordionTrigger>Stale-While-Revalidate Pattern</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    This pattern serves stale content while asynchronously revalidating the cache in the background.
                  </p>
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 font-medium">How It Works</h4>
                    <ol className="space-y-2 text-sm">
                      <li>
                        <strong>1.</strong> Cache entries store both the data and an expiration time
                      </li>
                      <li>
                        <strong>2.</strong> When a request arrives for expired data, the stale data is returned
                        immediately
                      </li>
                      <li>
                        <strong>3.</strong> Simultaneously, a background process refreshes the cache
                      </li>
                      <li>
                        <strong>4.</strong> Subsequent requests get fresh data once the refresh completes
                      </li>
                    </ol>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 text-sm font-medium text-green-600">Pros</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Low latency for all requests
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> No thundering herd effect
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Simple to implement
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 text-sm font-medium text-red-600">Cons</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Clients may receive stale data
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Not suitable for data that must always be fresh
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="probabilistic">
              <AccordionTrigger>Probabilistic Early Recomputation</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>This approach refreshes cache entries before they expire based on probability.</p>
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 font-medium">Implementation</h4>
                    <ol className="space-y-2 text-sm">
                      <li>
                        <strong>1.</strong> Define a window before expiration (e.g., last 10% of TTL)
                      </li>
                      <li>
                        <strong>2.</strong> When a request hits a cache entry in this window, there's a probability it
                        will trigger a refresh
                      </li>
                      <li>
                        <strong>3.</strong> The probability increases as the entry gets closer to expiration
                      </li>
                      <li>
                        <strong>4.</strong> The current request still gets the cached data immediately
                      </li>
                    </ol>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 text-sm font-medium text-green-600">Pros</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Spreads recomputation load over time
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> No coordination needed between clients
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Works well for frequently accessed entries
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 text-sm font-medium text-red-600">Cons</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> May not prevent all thundering herds
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Less effective for infrequently accessed entries
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Requires tuning probability parameters
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="rounded-lg bg-muted p-4">
            <h3 className="mb-2 text-lg font-medium">Real-World Examples</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <BookOpen className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <strong>Varnish Cache</strong> implements a technique called "grace mode" that serves stale content
                  while a fresh version is being fetched.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <strong>Redis</strong> can implement cache locks using its atomic operations like SETNX for
                  distributed lock management.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <strong>Memcached</strong> users often implement their own cache-aside pattern with locks to prevent
                  thundering herds.
                </div>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    eviction: {
      title: "Cache Eviction Policies",
      description: "Strategies for removing items from a cache when it reaches capacity.",
      content: (
        <div className="space-y-6">
          <p>
            Cache eviction policies determine which items to remove when a cache reaches its capacity limit. The ideal
            policy maximizes the cache hit rate by keeping the most valuable items in the cache.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>LRU (Least Recently Used)</CardTitle>
                <CardDescription>Evicts the items that haven't been accessed for the longest time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 text-sm font-medium">How It Works</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintains items in order of access time, removing the least recently accessed item when space is
                      needed.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-green-600">Pros</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Good general-purpose policy
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Works well for temporal locality
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Simple to implement
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-red-600">Cons</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Doesn't consider frequency
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Can evict frequently used items
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>LFU (Least Frequently Used)</CardTitle>
                <CardDescription>Evicts the items that are accessed least frequently</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 text-sm font-medium">How It Works</h4>
                    <p className="text-sm text-muted-foreground">
                      Tracks how many times each item has been accessed, removing the least frequently accessed item.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-green-600">Pros</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Keeps popular items in cache
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Good for stable access patterns
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-red-600">Cons</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> New items easily evicted
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Doesn't adapt to changing patterns
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> More complex to implement
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FIFO (First In, First Out)</CardTitle>
                <CardDescription>Evicts items in the order they were added to the cache</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 text-sm font-medium">How It Works</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintains a queue of items, removing the oldest item (first added) when space is needed.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-green-600">Pros</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Very simple to implement
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Low overhead
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-red-600">Cons</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Ignores access patterns
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Poor hit rates for most workloads
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ARC (Adaptive Replacement Cache)</CardTitle>
                <CardDescription>Balances recency and frequency for better performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 text-sm font-medium">How It Works</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintains two LRU lists: one for recently accessed items and one for frequently accessed items,
                      dynamically adjusting the space allocated to each.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-green-600">Pros</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Combines benefits of LRU and LFU
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Self-tuning
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-green-600">✓</span> Better hit rates
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-red-600">Cons</h4>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Complex implementation
                        </li>
                        <li className="flex items-start gap-1">
                          <span className="text-red-600">✗</span> Higher memory overhead
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <h3 className="mb-2 text-lg font-medium">Choosing the Right Policy</h3>
            <div className="space-y-3">
              <p className="text-sm">Consider these factors when selecting a cache eviction policy:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Shield className="mt-1 h-4 w-4 text-primary" />
                  <div>
                    <strong>Access patterns:</strong> Are items accessed repeatedly or just once? Do patterns change
                    over time?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="mt-1 h-4 w-4 text-primary" />
                  <div>
                    <strong>Cost of misses:</strong> How expensive is it to regenerate or fetch the data on a cache
                    miss?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="mt-1 h-4 w-4 text-primary" />
                  <div>
                    <strong>Resource constraints:</strong> How much memory and CPU can be dedicated to cache management?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="mt-1 h-4 w-4 text-primary" />
                  <div>
                    <strong>Item sizes:</strong> Are all items the same size, or do they vary significantly?
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  }

  return (
    <div className="mx-auto max-w-5xl">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="concurrency">Concurrency Control</TabsTrigger>
          <TabsTrigger value="thundering">Thundering Herd</TabsTrigger>
          <TabsTrigger value="eviction">Eviction Policies</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{advancedConcepts[activeTab].title}</CardTitle>
              <CardDescription>{advancedConcepts[activeTab].description}</CardDescription>
            </CardHeader>
            <CardContent>{advancedConcepts[activeTab].content}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-start">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Cache Mechanics
          </Button>
        </Link>
      </div>
    </div>
  )
}

