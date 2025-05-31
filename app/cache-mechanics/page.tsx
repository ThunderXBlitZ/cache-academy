"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Database, Server, ArrowLeft, ChevronDown } from "lucide-react"

export default function CacheMechanicsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between py-4">
          <div className="flex items-center pl-4 gap-2">
            <Database className="h-6 w-6" />
            <h1><a className="text-xl font-bold" href='/cache-academy'>Cache Academy</a></h1>
          </div>
          <nav className="flex items-center pr-4 gap-4">
            <Link href="/" className="font-medium text-muted-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/access-speeds" className="font-medium text-muted-foreground hover:text-primary">
              Access Speeds
            </Link>
            <Link href="/cache-mechanics" className="font-medium text-primary">
              Cache Mechanics
            </Link>
            <Link href="/comparison" className="font-medium text-muted-foreground hover:text-primary">
              Comparison
            </Link>
            <Link href="/advanced-concepts" className="font-medium text-muted-foreground hover:text-primary">
              Advanced Concepts
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="pt-12 md:pt-16">
          <div className="mx-auto max-w-[980px]">
            <div className="text-center mb-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Four Ways to Manage Your Cache</h1>
              <p className="text-xl text-muted-foreground">Explore the four main strategies for moving data between your cache and database</p>
            </div>
          </div>
        </section>
        <section className="py-8">
          <CacheMechanicsDemo />
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

// Define types for the cache mechanics data
type CacheState = Record<string, string>;
type Step = {
  title: string;
  description: string;
  cacheState: CacheState;
  dbState: CacheState;
  appState: string;
  highlight?: "app" | "cache" | "db" | "both";
  highlightCacheStateText?: string
  highlightDbStateText?: string
  strikeThroughCacheStateText?: string
};

type CacheMechanic = {
  title: string;
  description: string;
  diagram: string;
  steps: Step[];
  pros: string[];
  cons: string[];
  pseudoCode: string;
  bestFor: string;
  width?: number;
  height?: number;
};

type CacheMechanics = {
  [key: string]: CacheMechanic;
};

function CacheMechanicsDemo() {
  const [activeTab, setActiveTab] = useState<string>("read-through")
  const [currentStep, setCurrentStep] = useState<number>(0)

  // Add state to track collapsible sections
  const [codeVisible, setCodeVisible] = useState<boolean>(false)
  const toggleCode = () => setCodeVisible(!codeVisible)

  const cacheMechanics: CacheMechanics = {
    "read-through": {
      title: "Read-Through Cache",
      description: "When data isn't in the cache, it's automatically fetched from the database.",
      diagram: "/cache-academy/images/cache-read-through.svg",
      steps: [
        {
          title: "Initial State",
          description: "The system starts with some data in the cache and all data in the database.",
          cacheState: { key1: "value1" },
          dbState: { key1: "value1", key2: "value2", key3: "value3" },
          appState: "Application ready to process read operations",
        },
        {
          title: "Read Request (Cache Hit)",
          description: "Application requests key1, which is found in the cache",
          cacheState: { key1: "value1" },
          dbState: { key1: "value1", key2: "value2", key3: "value3" },
          appState: "Reading key1 from cache",
          highlight: "cache",
        },
        {
          title: "Read Request (Cache Miss)",
          description: "Application requests key2, which is not in the cache",
          cacheState: { key1: "value1" },
          dbState: { key1: "value1", key2: "value2", key3: "value3" },
          appState: "Cache miss for key2, fetching from database",
          highlight: "app",
        },
        {
          title: "Database Read",
          description: "The cache automatically fetches key2 from the database",
          cacheState: { key1: "value1" },
          dbState: { key1: "value1", key2: "value2", key3: "value3" },
          appState: "Reading key2 from database",
          highlight: "db",
        },
        {
          title: "Cache Update",
          description: "The cache is updated with the value of key2",
          cacheState: { key1: "value1", key2: "value2" },
          dbState: { key1: "value1", key2: "value2", key3: "value3" },
          appState: "Updating cache with key2 value",
          highlight: "cache",
          highlightCacheStateText: "key2"
        },
        {
          title: "Read Complete",
          description: "The read operation is complete, and the value is returned to the application",
          cacheState: { key1: "value1", key2: "value2" },
          dbState: { key1: "value1", key2: "value2", key3: "value3" },
          appState: "Read operation completed successfully"
        },
      ],
      pros: [
        "Automatic cache population",
        "Simplified application logic",
        "Cache always has requested data after first access",
      ],
      cons: ["Initial read latency on cache miss", "Potential for cache pollution", "May fetch unnecessary data"],
      pseudoCode: `// Read-Through Cache implementation
function readData(key) {
  // Check if data exists in cache
  if (cache.has(key)) {
    return cache.get(key);  // Return from cache (cache hit)
  }
  
  // If not in cache, cache automatically gets from database
  const data = database.get(key);  // Cache miss
  
  // Store in cache for future reads
  cache.set(key, data);
  
  return data;
}

function writeData(key, value) {
  // This depends on which write strategy you pair with read-through
  // For example, with write-through:
  cache.set(key, value);
  database.set(key, value);
  
  return true;
}`,
      bestFor: "Applications that need simple caching with minimal code complexity",
    },
    "write-through": {
      title: "Write-Through Cache",
      description: "Write data to both the cache and database at the same time.",
      diagram: "/cache-academy/images/cache-write-through.svg",
      steps: [
        {
          title: "Initial State",
          description: "The system starts with synchronized data in both cache and database.",
          cacheState: { key1: "value1", key2: "value2" },
          dbState: { key1: "value1", key2: "value2" },
          appState: "Application ready to process write operations",
        },
        {
          title: "Write Request",
          description: "Application receives a write request to update key1 to 'new-value1'",
          cacheState: { key1: "value1", key2: "value2" },
          dbState: { key1: "value1", key2: "value2" },
          appState: "Processing write request for key1='new-value1'",
          highlight: "app",
        },
        {
          title: "Simultaneous Write",
          description: "The cache and database are updated simultaneously",
          cacheState: { key1: "new-value1", key2: "value2" },
          dbState: { key1: "new-value1", key2: "value2" },
          highlightCacheStateText: "key1",
          highlightDbStateText: "key1",
          appState: "Writing to cache and database",
          highlight: "both",
        },
        {
          title: "Write Complete",
          description: "The write operation is complete, and both systems are in sync",
          cacheState: { key1: "new-value1", key2: "value2" },
          dbState: { key1: "new-value1", key2: "value2" },
          appState: "Write operation completed successfully"
        },
      ],
      pros: ["Data consistency between cache and database", "Simple to implement", "No stale data"],
      cons: ["Higher write latency", "More write operations to the database", "Higher system load during writes"],
      pseudoCode: `// Write-Through Cache implementation
function writeData(key, value) {
  // Write to both cache and database at the same time
  cache.set(key, value);
  database.set(key, value);
  
  // Return success only when both operations complete
  return true;
}

function readData(key) {
  // Check if data exists in cache
  if (cache.has(key)) {
    return cache.get(key);  // Return from cache
  }
  
  // If not in cache, get from database
  const data = database.get(key);
  
  // Store in cache for future reads
  cache.set(key, data);
  
  return data;
}`,
      bestFor: "Applications where data consistency is the top priority",
    },
    "write-back": {
      title: "Write-Back Cache",
      description: "Write data to the cache first, then update the database later.",
      diagram: "/cache-academy/images/cache-write-back.svg",
      steps: [
        {
          title: "Initial State",
          description: "The system starts with synchronized data in both cache and database.",
          cacheState: { key1: "value1", key2: "value2" },
          dbState: { key1: "value1", key2: "value2" },
          appState: "Application ready to process write operations",
        },
        {
          title: "Write Request",
          description: "Application receives a write request to update key1 to 'new-value1'",
          cacheState: { key1: "value1", key2: "value2" },
          dbState: { key1: "value1", key2: "value2" },
          appState: "Processing write request for key1='new-value1'",
          highlight: "app",
        },
        {
          title: "Cache Update",
          description: "The cache is updated immediately",
          cacheState: { key1: "new-value1", key2: "value2" },
          dbState: { key1: "value1", key2: "value2" },
          highlightCacheStateText: "key1",
          appState: "Writing to cache only",
          highlight: "cache",
        },
        {
          title: "Async Database Update",
          description: "The database is updated asynchronously after some time",
          cacheState: { key1: "new-value1", key2: "value2" },
          dbState: { key1: "new-value1", key2: "value2" },
          highlightDbStateText: "key1",
          appState: "Asynchronously writing to database",
          highlight: "db",
        },
        {
          title: "Write Complete",
          description: "The write operation is complete, and both systems are in sync",
          cacheState: { key1: "new-value1", key2: "value2" },
          dbState: { key1: "new-value1", key2: "value2" },
          appState: "Write operation completed successfully",
        },
      ],
      pros: ["Lower write latency", "Reduced database load", "Better performance for write-heavy workloads"],
      cons: [
        "Risk of data loss if cache fails before database update",
        "Potential data inconsistency",
        "More complex implementation",
      ],
      pseudoCode: `// Write-Back Cache implementation
// Track dirty (modified) entries that need to be written to database
let dirtyEntries = new Set();

function writeData(key, value) {
  // Write to cache immediately
  cache.set(key, value);
  
  // Mark this entry as "dirty" (needs to be written to database)
  dirtyEntries.add(key);
  
  // Schedule background flush to database
  scheduleFlush();
  
  // Return success immediately after cache write
  return true;
}

function flushToDatabaseAsync() {
  // Process all dirty entries
  for (const key of dirtyEntries) {
    const value = cache.get(key);
    database.set(key, value);
    dirtyEntries.delete(key);
  }
}

function readData(key) {
  // Check if data exists in cache
  if (cache.has(key)) {
    return cache.get(key);  // Return from cache
  }
  
  // If not in cache, get from database
  const data = database.get(key);
  
  // Store in cache for future reads
  cache.set(key, data);
  
  return data;
}`,
      bestFor: "Applications that need fast write performance",
    },
    "write-around": {
      title: "Write-Around Cache",
      description: "Write data directly to the database, skipping the cache.",
      diagram: "/cache-academy/images/cache-write-around.svg",
      width:480,
      height:640,
      steps: [
        {
          title: "Initial State",
          description: "The system starts with synchronized data in both cache and database.",
          cacheState: { key1: "value1", key2: "value2" },
          dbState: { key1: "value1", key2: "value2" },
          appState: "Application ready to process write operations",
        },
        {
          title: "Write Request",
          description: "Application receives a write request to update key1 to 'new-value1'",
          cacheState: { key1: "value1", key2: "value2" },
          dbState: { key1: "value1", key2: "value2" },
          appState: "Processing write request for key1='new-value1'",
          highlight: "app",
        },
        {
          title: "Database Update",
          description: "The database is updated directly, bypassing the cache",
          cacheState: { key1: "value1", key2: "value2" },
          dbState: { key1: "new-value1", key2: "value2" },
          highlightDbStateText: "key1",
          appState: "Writing directly to database",
          highlight: "db",
        },
        {
          title: "Cache Invalidation",
          description: "The cache entry for key1 is invalidated (optional step)",
          cacheState: { key1: "value1", key2: "value2" },
          strikeThroughCacheStateText: "key1",
          dbState: { key1: "new-value1", key2: "value2" },
          appState: "Invalidating cache entry for key1",
          highlight: "cache",
        },
        {
          title: "Read Request",
          description: "On the next read, the updated value is fetched from the database",
          cacheState: { key1: "new-value1", key2: "value2" },
          dbState: { key1: "new-value1", key2: "value2" },
          highlightCacheStateText: "key1",
          appState: "Reading key1 from database and updating cache",
          highlight: "both",
        },
      ],
      pros: [
        "Prevents cache pollution for write-once data",
        "Good for read-heavy workloads with infrequent writes",
        "Simpler than write-back",
      ],
      cons: [
        "Cache misses on recently written data",
        "Higher read latency after writes",
        "Potential for stale data if invalidation is missed",
      ],
      pseudoCode: `// Write-Around Cache implementation
function writeData(key, value) {
  // Write directly to database, bypassing cache
  database.set(key, value);
  
  // Optionally invalidate cache entry if it exists
  if (cache.has(key)) {
    cache.delete(key);  // Remove from cache
  }
  
  return true;
}

function readData(key) {
  // Check if data exists in cache
  if (cache.has(key)) {
    return cache.get(key);  // Return from cache
  }
  
  // If not in cache, get from database
  const data = database.get(key);
  
  // Store in cache for future reads
  cache.set(key, data);
  
  return data;
}`,
      bestFor: "Applications with data that is written once but rarely read",
    }
  }
  
  const currentMechanic = cacheMechanics[activeTab]
  const currentStepData = currentMechanic.steps[currentStep]

  const handleNextStep = () => {
    if (currentStep < currentMechanic.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setCurrentStep(0)
  }

  return (
    <div className="mx-auto max-w-5xl">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="read-through">Read-Through</TabsTrigger>
          <TabsTrigger value="write-through">Write-Through</TabsTrigger>
          <TabsTrigger value="write-back">Write-Back</TabsTrigger>
          <TabsTrigger value="write-around">Write-Around</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{currentMechanic.title}</CardTitle>
              <CardDescription>{currentMechanic.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col mb-6">
                     <Image
                        src={currentMechanic.diagram}
                        alt={currentMechanic.title}
                        width={currentMechanic.width || 720}
                        height={currentMechanic.height || 720}
                        className="rounded-lg border shadow-sm self-center"
                      />
                      <br></br>
                <hr></hr>
                <div className="mt-16 mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{currentStepData.title}</h3>
                  <div className="text-sm text-muted-foreground">
                    Step {currentStep + 1} of {currentMechanic.steps.length}
                  </div>
                </div>
                <p className="mb-6 text-muted-foreground">{currentStepData.description}</p>

                <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4 mb-8">
                  <h3 className="text-md font-medium mb-4">Current State</h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div
                      className={`rounded-lg border p-4 ${currentStepData.highlight === "app" || currentStepData.highlight === "both" ? "border-primary bg-primary/5" : ""}`}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Code className="h-5 w-5 text-muted-foreground" />
                        <h4 className="font-medium">Application</h4>
                      </div>
                      <p className={`text-sm ${currentStep === currentMechanic.steps.length - 1 ? "text-green-700": "text-muted-foreground"}`}>
                        {currentStepData.appState}
                      </p>
                    </div>

                    <div
                      className={`rounded-lg border p-4 ${currentStepData.highlight === "cache" || currentStepData.highlight === "both" ? "border-primary bg-primary/5" : ""}`}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Server className="h-5 w-5 text-muted-foreground" />
                        <h4 className="font-medium">Cache</h4>
                      </div>
                      <div className="space-y-1">
                        {Object.entries(currentStepData.cacheState).map(([key, value]) => (
                          <div key={key} className="rounded bg-muted px-2 py-1 text-xs">
                            <span className={`font-mono ${currentStepData.highlightCacheStateText === key? "text-green-700" : ""} ${currentStepData.strikeThroughCacheStateText === key? "line-through" : ""}`}>
                              {key}: "{value}"
                            </span>
                          </div>
                        ))}
                        {Object.keys(currentStepData.cacheState).length === 0 && (
                          <div className="rounded bg-muted px-2 py-1 text-xs">
                            <span className="font-mono">Empty cache</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`rounded-lg border p-4 ${currentStepData.highlight === "db" || currentStepData.highlight === "both" ? "border-primary bg-primary/5" : ""}`}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Database className="h-5 w-5 text-muted-foreground" />
                        <h4 className="font-medium">Database</h4>
                      </div>
                      <div className="space-y-1">
                        {Object.entries(currentStepData.dbState).map(([key, value]) => (
                          <div key={key} className="rounded bg-muted px-2 py-1 text-xs">
                            <span className={`font-mono ${currentStepData.highlightDbStateText === key? "text-green-700" : ""}`}>
                              {key}: "{value}"
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 0}>
                    Previous Step
                  </Button>
                  <Button onClick={handleNextStep} disabled={currentStep === currentMechanic.steps.length - 1}>
                    Next Step
                  </Button>
                </div>
              </div>
              
              <br></br>
              
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Implementation</h3>
                  <Button variant="ghost" size="sm" onClick={toggleCode} className={"flex items-center gap-1 " + (codeVisible ? "" : "text-blue-500")}>
                    {codeVisible ? "Hide Code" : "Show Code"}
                    <ChevronDown className={`h-4 w-4 transition-transform ${codeVisible ? "rotate-180" : ""}`} />
                  </Button>
                </div>
                {codeVisible && (
                  <div className="rounded-lg bg-muted p-4 overflow-auto mt-2">
                    <pre className="text-sm">
                      <code>{currentMechanic.pseudoCode}</code>
                    </pre>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          

          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle>Pros & Cons of {currentMechanic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 font-medium text-green-600">Pros</h4>
                    <ul className="space-y-1 text-sm">
                      {currentMechanic.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-2 font-medium text-red-600">Cons</h4>
                    <ul className="space-y-1 text-sm">
                      {currentMechanic.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-600">✗</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                  <h4 className="mb-2 font-medium">Best For</h4>
                  <p>{currentMechanic.bestFor}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 flex justify-between">
        <Link href="/access-speeds">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Access Speeds
          </Button>
        </Link>
        <Link href="/comparison">
          <Button className="gap-2">
            Compare All Mechanisms <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}