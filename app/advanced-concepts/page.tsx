"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  BookOpen,
  Database,
  Server,
  Shield,
  Zap,
  Lock,
  Clock,
  Trash,
  BarChart,
  ChevronDown,
} from "lucide-react"
import { ArrowRight } from "lucide-react"

export default function AdvancedConceptsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between py-4">
          <div className="flex items-center pl-4 gap-2">
            <Database className="h-6 w-6" />
            <h1><a className="text-xl font-bold" href='/'>Cache Academy</a></h1>
          </div>
          <nav className="flex items-center pr-4 gap-4">
            <Link href="/" className="font-medium text-muted-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/cache-mechanics" className="font-medium text-muted-foreground hover:text-primary">
              Cache Mechanics
            </Link>
            <Link href="/comparison" className="font-medium text-muted-foreground hover:text-primary">
              Comparison
            </Link>
            <Link href="/advanced-concepts" className="font-medium text-primary">
              Advanced Concepts
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
      <section className="py-8 md:py-12">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
              Advanced Caching Concepts
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
            Building on the basics to create more robust caching systems
            </p>
          </div>
        </section>
        <section className="max-w-[980px] mx-auto py-8">
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

// Define types for the advanced concepts content
type AdvancedConceptContent = {
  title: string;
  description: string;
  content: React.ReactNode;
};

type AdvancedConcepts = {
  [key: string]: AdvancedConceptContent;
};

function AdvancedCachingConcepts() {
  const [activeTab, setActiveTab] = useState<string>("concurrency")

  // States to manage code visibility
  const [pessimisticCodeVisible, setPessimisticCodeVisible] = useState<boolean>(false)
  const [optimisticCodeVisible, setOptimisticCodeVisible] = useState<boolean>(false)
  const [cacheLockCodeVisible, setCacheLockCodeVisible] = useState<boolean>(false)
  const [staleCacheCodeVisible, setStaleCacheCodeVisible] = useState<boolean>(false)
  const [lruCodeVisible, setLruCodeVisible] = useState<boolean>(false)
  const [lfuCodeVisible, setLfuCodeVisible] = useState<boolean>(false)
  const [fifoCodeVisible, setFifoCodeVisible] = useState<boolean>(false)
  const [randomCodeVisible, setRandomCodeVisible] = useState<boolean>(false)

  
  const advancedConcepts: AdvancedConcepts = {
    concurrency: {
      title: "Cache Concurrency Control",
      description: "Managing multiple users accessing the same cached data at the same time.",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-medium">The Problem</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-red-500 font-bold">→</span>
                  <p className="text-sm">Multiple users try to update the same cached data at once</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-red-500 font-bold">→</span>
                  <p className="text-sm">One user's changes might overwrite another's</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-red-500 font-bold">→</span>
                  <p className="text-sm">Data can become inconsistent or corrupted</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-medium">Solution Approaches</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-green-600 font-bold">→</span>
                  <p className="text-sm">
                    <strong>Locking:</strong> Prevent multiple updates at once
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-green-600 font-bold">→</span>
                  <p className="text-sm">
                    <strong>Versioning:</strong> Track changes with version numbers
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-green-600 font-bold">→</span>
                  <p className="text-sm">
                    <strong>Atomic Operations:</strong> Make updates uninterruptible
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Pessimistic Locking</CardTitle>
                </div>
                <CardDescription>Lock first, then update</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">1.</span>
                    <p className="text-sm">User A locks the data</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <p className="text-sm">User B must wait</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <p className="text-sm">User A updates and releases lock</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">4.</span>
                    <p className="text-sm">User B can now proceed</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> Prevents conflicts
                  </div>
                  <div className="rounded bg-red-50 p-2 text-xs text-red-700">
                    <span className="font-bold">✗</span> Users must wait
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPessimisticCodeVisible(!pessimisticCodeVisible)}
                    className="flex items-center gap-1 mb-2"
                  >
                    {pessimisticCodeVisible ? "Hide Code" : "Show Code Example"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${pessimisticCodeVisible ? "rotate-180" : ""}`}
                    />
                  </Button>
                  {pessimisticCodeVisible && (
                    <div className="rounded-lg bg-muted p-3">
                      <pre className="text-xs overflow-auto">
                        <code>{`// Pessimistic locking pseudocode
function updateData(key, updateFn) {
  // Try to acquire lock
  if (!cache.tryLock(key)) {
    throw "Another user is updating this data";
  }
  
  try {
    // Get current value
    const value = cache.get(key);
    
    // Apply update
    const newValue = updateFn(value);
    
    // Save updated value
    cache.set(key, newValue);
    
    return newValue;
  } finally {
    // Always release lock when done
    cache.unlock(key);
  }
}`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Optimistic Locking</CardTitle>
                </div>
                <CardDescription>Update first, check for conflicts after</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">1.</span>
                    <p className="text-sm">User A and B read data (version 1)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <p className="text-sm">User A saves (version becomes 2)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <p className="text-sm">User B tries to save version 1</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">4.</span>
                    <p className="text-sm">System detects conflict and alerts User B</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> No waiting
                  </div>
                  <div className="rounded bg-red-50 p-2 text-xs text-red-700">
                    <span className="font-bold">✗</span> Conflicts possible
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setOptimisticCodeVisible(!optimisticCodeVisible)}
                    className="flex items-center gap-1 mb-2"
                  >
                    {optimisticCodeVisible ? "Hide Code" : "Show Code Example"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${optimisticCodeVisible ? "rotate-180" : ""}`}
                    />
                  </Button>
                  {optimisticCodeVisible && (
                    <div className="rounded-lg bg-muted p-3">
                      <pre className="text-xs overflow-auto">
                        <code>{`// Optimistic locking pseudocode
function updateData(key, updateFn) {
  // Get current value and version
  const { value, version } = cache.getWithVersion(key);
  
  // Apply update
  const newValue = updateFn(value);
  
  // Try to save with version check
  const success = cache.setIfVersion(key, newValue, version);
  
  if (!success) {
    throw "Data was modified by another user";
    // Application can retry or resolve conflict
  }
    
  return newValue;
}`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-muted p-4 mt-16">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">Quick Tips</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <p className="text-sm">Use atomic operations when possible</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <p className="text-sm">Add timestamps to track when data changes</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <p className="text-sm">For simple apps, last-writer-wins works well</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <p className="text-sm">Consider using a database with built-in concurrency control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    thundering: {
      title: "Thundering Herd Problem",
      description: "What happens when a popular cache entry expires and many users request it at once.",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-lg border p-4 flex flex-col items-center text-center">
              <Server className="h-10 w-10 text-primary mb-2" />
              <h4 className="text-sm font-medium mb-2">1. Cache Miss</h4>
              <p className="text-xs text-muted-foreground">Popular data expires from cache</p>
            </div>
            <div className="rounded-lg border p-4 flex flex-col items-center text-center">
              <Zap className="h-10 w-10 text-amber-500 mb-2" />
              <h4 className="text-sm font-medium mb-2">2. Traffic Spike</h4>
              <p className="text-xs text-muted-foreground">Many users request the same data at once</p>
            </div>
            <div className="rounded-lg border p-4 flex flex-col items-center text-center">
              <Database className="h-10 w-10 text-red-500 mb-2" />
              <h4 className="text-sm font-medium mb-2">3. Database Overload</h4>
              <p className="text-xs text-muted-foreground">Database gets hammered with identical requests</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Solution 1: Cache Lock</CardTitle>
                </div>
                <CardDescription>One request refreshes, others wait</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">1.</span>
                    <p className="text-sm">First request gets a special "lock"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <p className="text-sm">This request fetches data from database</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <p className="text-sm">Other requests wait for the lock</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">4.</span>
                    <p className="text-sm">All requests get data from refreshed cache</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> Only one DB query
                  </div>
                  <div className="rounded bg-red-50 p-2 text-xs text-red-700">
                    <span className="font-bold">✗</span> Users may wait
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCacheLockCodeVisible(!cacheLockCodeVisible)}
                    className="flex items-center gap-1 mb-2"
                  >
                    {cacheLockCodeVisible ? "Hide Code" : "Show Code Example"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${cacheLockCodeVisible ? "rotate-180" : ""}`}
                    />
                  </Button>
                  {cacheLockCodeVisible && (
                    <div className="rounded-lg bg-muted p-3">
                      <pre className="text-xs overflow-auto">
                        <code>{`// Cache lock pseudocode
function getData(key) {
  // Check if data exists in cache
  let data = cache.get(key);
  if (data) {
    return data;  // Cache hit
  }
  
  // Cache miss - try to acquire refresh lock
  if (cache.acquireRefreshLock(key)) {
    try {
      // This thread got the lock, fetch from DB
      data = database.get(key);
      cache.set(key, data);
      return data;
    } finally {
      // Release lock when done
      cache.releaseRefreshLock(key);
    }
  } else {
    // Another thread is refreshing, wait
    while (!cache.has(key)) {
      sleep(50);  // Small delay
    }
    return cache.get(key);
  }
}`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Solution 2: Serve Stale Data</CardTitle>
                </div>
                <CardDescription>Return expired data while refreshing in background</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">1.</span>
                    <p className="text-sm">Keep expired data in cache, marked as "stale"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <p className="text-sm">Return stale data immediately to users</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <p className="text-sm">Refresh cache in background</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">4.</span>
                    <p className="text-sm">Future requests get fresh data</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> No waiting
                  </div>
                  <div className="rounded bg-red-50 p-2 text-xs text-red-700">
                    <span className="font-bold">✗</span> Slightly outdated data
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setStaleCacheCodeVisible(!staleCacheCodeVisible)}
                    className="flex items-center gap-1 mb-2"
                  >
                    {staleCacheCodeVisible ? "Hide Code" : "Show Code Example"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${staleCacheCodeVisible ? "rotate-180" : ""}`}
                    />
                  </Button>
                  {staleCacheCodeVisible && (
                    <div className="rounded-lg bg-muted p-3">
                      <pre className="text-xs overflow-auto">
                        <code>{`// Stale cache pseudocode
function getData(key) {
  // Get data with metadata
  const { data, timestamp, isRefreshing } = 
    cache.getWithMetadata(key);
  
  const isStale = timestamp < (Date.now() - MAX_AGE);
  
  // If data exists but is stale and not being refreshed
  if (data && isStale && !isRefreshing) {
    // Mark as refreshing to prevent duplicate refreshes
    cache.markAsRefreshing(key);
    
    // Refresh in background
    setTimeout(() => {
      const freshData = database.get(key);
      cache.set(key, freshData);
      cache.markAsNotRefreshing(key);
    }, 0);
  }
  
  // Return data even if stale
  if (data) {
    return data;
  }
  
  // No data at all, must fetch
  const freshData = database.get(key);
  cache.set(key, freshData);
  return freshData;
}`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-muted p-4 mt-16">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">Real-World Example</h3>
            </div>
            <p className="mb-4 text-sm">A popular news website during a major event:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="text-sm font-medium mb-2">Problem</h4>
                <p className="text-xs">Millions check for updates simultaneously</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="text-sm font-medium mb-2">Solution</h4>
                <p className="text-xs">Show slightly older news while updating in background</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="text-sm font-medium mb-2">Result</h4>
                <p className="text-xs">Website stays responsive even with huge traffic</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    eviction: {
      title: "Cache Eviction Policies",
      description: "How to decide what to remove when your cache gets full.",
      content: (
        <div className="space-y-6">
          <div className="rounded-lg border p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Trash className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-medium">The Problem</h3>
            </div>
            <p className="text-sm mb-4">
              When your cache is full, you need to remove something to make room for new data. Which items should you
              remove?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">LRU (Least Recently Used)</CardTitle>
                <CardDescription>Remove what you haven't used lately</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <p className="text-sm mb-4 text-center">Like throwing out clothes you haven't worn in years</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> Simple to understand
                  </div>
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> Works well in most cases
                  </div>
                  <div className="rounded bg-red-50 p-2 text-xs text-red-700">
                    <span className="font-bold">✗</span> Doesn't consider frequency
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLruCodeVisible(!lruCodeVisible)}
                    className="flex items-center gap-1 mb-2"
                  >
                    {lruCodeVisible ? "Hide Code" : "Show Code Example"}
                    <ChevronDown className={`h-4 w-4 transition-transform ${lruCodeVisible ? "rotate-180" : ""}`} />
                  </Button>
                  {lruCodeVisible && (
                    <div className="rounded-lg bg-muted p-3">
                      <pre className="text-xs overflow-auto">
                        <code>{`// LRU implementation pseudocode
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();  // Maintains insertion order
  }
  
  get(key) {
    if (!this.cache.has(key)) return null;
    
    // Remove and re-add to make it most recently used
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    
    return value;
  }
  
  set(key, value) {
    // If key exists, remove it first
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    
    // Evict least recently used item if at capacity
    if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    
    // Add new item (becomes most recently used)
    this.cache.set(key, value);
  }
}`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">LFU (Least Frequently Used)</CardTitle>
                <CardDescription>Remove what you use least often</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <BarChart className="h-12 w-12 text-primary" />
                </div>
                <p className="text-sm mb-4 text-center">
                  Like keeping kitchen tools you use daily and removing rarely used ones
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> Keeps popular items
                  </div>
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> Good for repeated access
                  </div>
                  <div className="rounded bg-red-50 p-2 text-xs text-red-700">
                    <span className="font-bold">✗</span> New items easily removed
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLfuCodeVisible(!lfuCodeVisible)}
                    className="flex items-center gap-1 mb-2"
                  >
                    {lfuCodeVisible ? "Hide Code" : "Show Code Example"}
                    <ChevronDown className={`h-4 w-4 transition-transform ${lfuCodeVisible ? "rotate-180" : ""}`} />
                  </Button>
                  {lfuCodeVisible && (
                    <div className="rounded-lg bg-muted p-3">
                      <pre className="text-xs overflow-auto">
                        <code>{`// LFU implementation pseudocode
class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();  // key -> [value, frequency]
    this.freqMap = new Map(); // frequency -> Set of keys
    this.minFreq = 0;
  }
  
  get(key) {
    if (!this.cache.has(key)) return null;
    
    // Get value and increase frequency
    const [value, freq] = this.cache.get(key);
    this.freqMap.get(freq).delete(key);
    
    // Clean up empty frequency set
    if (this.freqMap.get(freq).size === 0) {
      this.freqMap.delete(freq);
      if (this.minFreq === freq) this.minFreq++;
    }
    
    // Add to next frequency level
    const newFreq = freq + 1;
    if (!this.freqMap.has(newFreq)) {
      this.freqMap.set(newFreq, new Set());
    }
    this.freqMap.get(newFreq).add(key);
    this.cache.set(key, [value, newFreq]);
    
    return value;
  }
  
  set(key, value) {
    if (this.capacity === 0) return;
    
    // If key exists, update it
    if (this.cache.has(key)) {
      const [_, freq] = this.cache.get(key);
      this.cache.set(key, [value, freq]);
      this.get(key);  // Update frequency
      return;
    }
    
    // Evict if at capacity
    if (this.cache.size >= this.capacity) {
      // Get key with minimum frequency
      const keysWithMinFreq = this.freqMap.get(this.minFreq);
      const keyToRemove = keysWithMinFreq.values().next().value;
      
      keysWithMinFreq.delete(keyToRemove);
      if (keysWithMinFreq.size === 0) {
        this.freqMap.delete(this.minFreq);
      }
      this.cache.delete(keyToRemove);
    }
    
    // Add new item with frequency 1
    this.cache.set(key, [value, 1]);
    if (!this.freqMap.has(1)) {
      this.freqMap.set(1, new Set());
    }
    this.freqMap.get(1).add(key);
    this.minFreq = 1;
  }
}`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">FIFO (First In, First Out)</CardTitle>
                <CardDescription>Remove the oldest items first</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <ArrowLeft className="h-12 w-12 text-primary" />
                </div>
                <p className="text-sm mb-4 text-center">Like a line at a store - first in, first out</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> Very simple
                  </div>
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> Easy to implement
                  </div>
                  <div className="rounded bg-red-50 p-2 text-xs text-red-700">
                    <span className="font-bold">✗</span> Ignores usage patterns
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setFifoCodeVisible(!fifoCodeVisible)}
                    className="flex items-center gap-1 mb-2"
                  >
                    {fifoCodeVisible ? "Hide Code" : "Show Code Example"}
                    <ChevronDown className={`h-4 w-4 transition-transform ${fifoCodeVisible ? "rotate-180" : ""}`} />
                  </Button>
                  {fifoCodeVisible && (
                    <div className="rounded-lg bg-muted p-3">
                      <pre className="text-xs overflow-auto">
                        <code>{`// FIFO implementation pseudocode
class FIFOCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();  // Maintains insertion order
  }
  
  get(key) {
    // Simply return the value if it exists
    return this.cache.has(key) ? this.cache.get(key) : null;
  }
  
  set(key, value) {
    // If key exists, just update the value
    if (this.cache.has(key)) {
      this.cache.set(key, value);
      return;
    }
    
    // Evict oldest item if at capacity
    if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    
    // Add new item
    this.cache.set(key, value);
  }
}`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Random Replacement</CardTitle>
                <CardDescription>Remove items randomly</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                    ?
                  </div>
                </div>
                <p className="text-sm mb-4 text-center">Like closing your eyes and picking something to remove</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> Extremely simple
                  </div>
                  <div className="rounded bg-green-50 p-2 text-xs text-green-700">
                    <span className="font-bold">✓</span> No tracking needed
                  </div>
                  <div className="rounded bg-red-50 p-2 text-xs text-red-700">
                    <span className="font-bold">✗</span> Might remove important items
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setRandomCodeVisible(!randomCodeVisible)}
                    className="flex items-center gap-1 mb-2"
                  >
                    {randomCodeVisible ? "Hide Code" : "Show Code Example"}
                    <ChevronDown className={`h-4 w-4 transition-transform ${randomCodeVisible ? "rotate-180" : ""}`} />
                  </Button>
                  {randomCodeVisible && (
                    <div className="rounded-lg bg-muted p-3">
                      <pre className="text-xs overflow-auto">
                        <code>{`// Random Replacement implementation pseudocode
class RandomCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.keys = [];  // Keep track of all keys
  }
  
  get(key) {
    return this.cache.has(key) ? this.cache.get(key) : null;
  }
  
  set(key, value) {
    // If key exists, update it
    if (this.cache.has(key)) {
      this.cache.set(key, value);
      return;
    }
    
    // Evict random item if at capacity
    if (this.cache.size >= this.capacity) {
      const randomIndex = Math.floor(Math.random() * this.keys.length);
      const randomKey = this.keys[randomIndex];
      
      this.cache.delete(randomKey);
      this.keys.splice(randomIndex, 1);
    }
    
    // Add new item
    this.cache.set(key, value);
    this.keys.push(key);
  }
}`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-muted p-4 mt-16">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-medium">Which One Should You Choose?</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="text-sm font-medium mb-2">LRU</h4>
                <p className="text-xs">Best general-purpose choice for most applications</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="text-sm font-medium mb-2">LFU</h4>
                <p className="text-xs">Better when some items are accessed very frequently</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="text-sm font-medium mb-2">FIFO</h4>
                <p className="text-xs">When simplicity is more important than efficiency</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="text-sm font-medium mb-2">Random</h4>
                <p className="text-xs">Only for very simple applications or when all items are equally important</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  }

  return (
    <div className="mx-auto max-w-5xl">
      <section className="max-w-[980px] mx-auto">
          <Card>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-lg border p-4 flex flex-col items-center text-center"
                onClick={() => setActiveTab("concurrency")}>
                  <Lock className="h-12 w-12 text-primary mb-2" />
                  <h3 className="font-medium mb-2">Concurrency Control</h3>
                  <p className="text-sm text-muted-foreground">Managing multiple users updating the same cached data</p>
                </div>
                <div className="rounded-lg border p-4 flex flex-col items-center text-center"
                onClick={() => setActiveTab("thundering")}>
                  <Zap className="h-12 w-12 text-primary mb-2" />
                  <h3 className="font-medium mb-2">Thundering Herd</h3>
                  <p className="text-sm text-muted-foreground">Handling traffic spikes when cache entries expire</p>
                </div>
                <div className="rounded-lg border p-4 flex flex-col items-center text-center"
                onClick={() => setActiveTab("eviction")}>
                  <Trash className="h-12 w-12 text-primary mb-2" />
                  <h3 className="font-medium mb-2">Eviction Policies</h3>
                  <p className="text-sm text-muted-foreground">Deciding what to remove when your cache gets full</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
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

      <div className="mt-16 flex justify-between">
        <Link href="/comparison">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Comparison
          </Button>
        </Link>
        <Link href="/">
          <Button className="gap-2">
            Back to Home <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
