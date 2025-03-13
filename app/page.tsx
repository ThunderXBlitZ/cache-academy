"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Database, Server } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6" />
            <h1 className="text-xl font-bold">Cache Academy</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/" className="font-medium text-primary">
              Cache Mechanics
            </Link>
            <Link href="/advanced-concepts" className="font-medium text-muted-foreground hover:text-primary">
              Advanced Concepts
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-4">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
              Understanding Cache Mechanics
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Learn how different caching strategies work through interactive visualizations
            </p>
          </div>
        </section>
        <section className="container py-8">
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
            <Link href="/advanced-concepts" className="text-sm text-muted-foreground hover:text-primary">
              Advanced Concepts
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CacheMechanicsDemo() {
  const [activeTab, setActiveTab] = useState("write-through")
  const [currentStep, setCurrentStep] = useState(0)

  const cacheMechanics = {
    "write-through": {
      title: "Write-Through Cache",
      description: "Data is written to both the cache and the database simultaneously.",
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
          appState: "Writing to cache and database",
          highlight: "both",
        },
        {
          title: "Write Complete",
          description: "The write operation is complete, and both systems are in sync",
          cacheState: { key1: "new-value1", key2: "value2" },
          dbState: { key1: "new-value1", key2: "value2" },
          appState: "Write operation completed successfully",
        },
      ],
      pros: ["Data consistency between cache and database", "Simple to implement", "No stale data"],
      cons: ["Higher write latency", "More write operations to the database", "Higher system load during writes"],
    },
    "write-back": {
      title: "Write-Back Cache",
      description: "Data is written to the cache first, then asynchronously to the database.",
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
          appState: "Writing to cache only",
          highlight: "cache",
        },
        {
          title: "Async Database Update",
          description: "The database is updated asynchronously after some time",
          cacheState: { key1: "new-value1", key2: "value2" },
          dbState: { key1: "new-value1", key2: "value2" },
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
    },
    "write-around": {
      title: "Write-Around Cache",
      description: "Data is written directly to the database, bypassing the cache.",
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
          appState: "Writing directly to database",
          highlight: "db",
        },
        {
          title: "Cache Invalidation",
          description: "The cache entry for key1 is invalidated (optional step)",
          cacheState: { key2: "value2" },
          dbState: { key1: "new-value1", key2: "value2" },
          appState: "Invalidating cache entry for key1",
          highlight: "cache",
        },
        {
          title: "Read Request",
          description: "On the next read, the updated value is fetched from the database",
          cacheState: { key1: "new-value1", key2: "value2" },
          dbState: { key1: "new-value1", key2: "value2" },
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
    },
    "read-through": {
      title: "Read-Through Cache",
      description: "On cache miss, the cache automatically loads data from the database.",
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
        },
        {
          title: "Read Complete",
          description: "The read operation is complete, and the value is returned to the application",
          cacheState: { key1: "value1", key2: "value2" },
          dbState: { key1: "value1", key2: "value2", key3: "value3" },
          appState: "Read operation completed successfully",
        },
      ],
      pros: [
        "Automatic cache population",
        "Simplified application logic",
        "Cache always has requested data after first access",
      ],
      cons: ["Initial read latency on cache miss", "Potential for cache pollution", "May fetch unnecessary data"],
    },
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

  const handleTabChange = (value) => {
    setActiveTab(value)
    setCurrentStep(0)
  }

  return (
    <div className="mx-auto max-w-5xl">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="write-through">Write-Through</TabsTrigger>
          <TabsTrigger value="write-back">Write-Back</TabsTrigger>
          <TabsTrigger value="write-around">Write-Around</TabsTrigger>
          <TabsTrigger value="read-through">Read-Through</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{currentMechanic.title}</CardTitle>
              <CardDescription>{currentMechanic.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{currentStepData.title}</h3>
                  <div className="text-sm text-muted-foreground">
                    Step {currentStep + 1} of {currentMechanic.steps.length}
                  </div>
                </div>
                <p className="mb-6 text-muted-foreground">{currentStepData.description}</p>

                <div className="grid gap-6 md:grid-cols-3">
                  <div
                    className={`rounded-lg border p-4 ${currentStepData.highlight === "app" || currentStepData.highlight === "both" ? "border-primary bg-primary/5" : ""}`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-muted-foreground" />
                      <h4 className="font-medium">Application</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{currentStepData.appState}</p>
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
                          <span className="font-mono">
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
                          <span className="font-mono">
                            {key}: "{value}"
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-3 text-lg font-medium">Pros & Cons</h3>
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
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 0}>
                Previous Step
              </Button>
              <Button onClick={handleNextStep} disabled={currentStep === currentMechanic.steps.length - 1}>
                Next Step
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-end">
        <Link href="/advanced-concepts">
          <Button className="gap-2">
            Advanced Concepts <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

