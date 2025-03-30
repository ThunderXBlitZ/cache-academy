"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Database, Server, CheckCircle, XCircle } from "lucide-react"

export default function ComparisonPage() {
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
            <Link href="/cache-mechanics" className="font-medium text-muted-foreground hover:text-primary">
              Cache Mechanics
            </Link>
            <Link href="/comparison" className="font-medium text-primary">
              Comparison
            </Link>
            <Link href="/advanced-concepts" className="font-medium text-muted-foreground hover:text-primary">
              Advanced Concepts
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
              Comparing Caching Strategies
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Side-by-side comparison of the four main caching mechanisms
            </p>
          </div>
        </section>
        <section className="py-8 mx-auto max-w-[980px] flex flex-row items-center">
          <div className="mx-auto w-full">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Overview Comparison</CardTitle>
                    <CardDescription>Compare the key characteristics of each caching strategy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th className="py-4 px-4 text-left font-medium bg-primary/10 text-primary">Strategy</th>
                            <th className="py-4 px-4 text-left font-medium bg-primary/10 text-primary">Description</th>
                            <th className="py-4 px-4 text-left font-medium bg-primary/10 text-primary">
                              Data Consistency
                            </th>
                            <th className="py-4 px-4 text-left font-medium bg-primary/10 text-primary">Write Speed</th>
                            <th className="py-4 px-4 text-left font-medium bg-primary/10 text-primary">Read Speed</th>
                            <th className="py-4 px-4 text-left font-medium bg-primary/10 text-primary">Complexity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-4 px-4 font-medium">Write-Through</td>
                            <td className="py-4 px-4">Write to both cache and database simultaneously</td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>High</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <XCircle className="h-5 w-5 text-red-500 mr-2" />
                                <span>Slow</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>Fast</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">Low</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-4 px-4 font-medium">Write-Back</td>
                            <td className="py-4 px-4">Write to cache first, update database later</td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <XCircle className="h-5 w-5 text-red-500 mr-2" />
                                <span>Medium</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>Fast</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>Fast</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">High</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-4 px-4 font-medium">Write-Around</td>
                            <td className="py-4 px-4">Write directly to database, bypass cache</td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>High</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>Medium</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <span>Slow after writes</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">Medium</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4 font-medium">Read-Through</td>
                            <td className="py-4 px-4">Cache automatically fetches from database on miss</td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>High</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <span>Depends on write strategy</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <span>Fast after first access</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">Low</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-16 grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4 text-primary">Pros & Cons Summary</h3>
                        <div className="space-y-4">
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Through</h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-green-600 mb-2">Pros</h5>
                                <ul className="space-y-1 text-xs">
                                  <li className="flex items-start gap-1">
                                    <span className="text-green-600">✓</span> Data consistency
                                  </li>
                                  <li className="flex items-start gap-1">
                                    <span className="text-green-600">✓</span> Simple implementation
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-red-600 mb-2">Cons</h5>
                                <ul className="space-y-1 text-xs">
                                  <li className="flex items-start gap-1">
                                    <span className="text-red-600">✗</span> Slower writes
                                  </li>
                                  <li className="flex items-start gap-1">
                                    <span className="text-red-600">✗</span> Higher database load
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Back</h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-green-600 mb-2">Pros</h5>
                                <ul className="space-y-1 text-xs">
                                  <li className="flex items-start gap-1">
                                    <span className="text-green-600">✓</span> Fast writes
                                  </li>
                                  <li className="flex items-start gap-1">
                                    <span className="text-green-600">✓</span> Reduced database load
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-red-600 mb-2">Cons</h5>
                                <ul className="space-y-1 text-xs">
                                  <li className="flex items-start gap-1">
                                    <span className="text-red-600">✗</span> Risk of data loss
                                  </li>
                                  <li className="flex items-start gap-1">
                                    <span className="text-red-600">✗</span> Complex implementation
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">&nbsp;</h3>
                        <div className="space-y-4">
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Around</h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-green-600 mb-2">Pros</h5>
                                <ul className="space-y-1 text-xs">
                                  <li className="flex items-start gap-1">
                                    <span className="text-green-600">✓</span> Prevents cache pollution
                                  </li>
                                  <li className="flex items-start gap-1">
                                    <span className="text-green-600">✓</span> Good for write-once data
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-red-600 mb-2">Cons</h5>
                                <ul className="space-y-1 text-xs">
                                  <li className="flex items-start gap-1">
                                    <span className="text-red-600">✗</span> Cache misses after writes
                                  </li>
                                  <li className="flex items-start gap-1">
                                    <span className="text-red-600">✗</span> Higher read latency
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Read-Through</h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-green-600 mb-2">Pros</h5>
                                <ul className="space-y-1 text-xs">
                                  <li className="flex items-start gap-1">
                                    <span className="text-green-600">✓</span> Automatic cache population
                                  </li>
                                  <li className="flex items-start gap-1">
                                    <span className="text-green-600">✓</span> Simple application logic
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-red-600 mb-2">Cons</h5>
                                <ul className="space-y-1 text-xs">
                                  <li className="flex items-start gap-1">
                                    <span className="text-red-600">✗</span> Initial read latency
                                  </li>
                                  <li className="flex items-start gap-1">
                                    <span className="text-red-600">✗</span> Potential cache pollution
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performance" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Comparison</CardTitle>
                    <CardDescription>How each caching strategy performs under different conditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Write Performance</h3>
                        <div className="grid md:grid-cols-4 gap-4">
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Through</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-red-500 h-4 rounded-full" style={{ width: "40%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Slowest write performance due to waiting for both cache and database
                            </p>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Back</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-green-500 h-4 rounded-full" style={{ width: "90%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Fastest write performance as it only updates cache initially
                            </p>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Around</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-amber-500 h-4 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Medium write performance as it only updates database
                            </p>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Read-Through</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-gray-500 h-4 rounded-full" style={{ width: "50%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Depends on which write strategy it's paired with
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Read Performance</h3>
                        <div className="grid md:grid-cols-4 gap-4">
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Through</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-green-500 h-4 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Fast reads as data is always in cache after writes
                            </p>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Back</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-green-500 h-4 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Fast reads as data is always in cache after writes
                            </p>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Around</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-amber-500 h-4 rounded-full" style={{ width: "50%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">Slow reads after writes due to cache misses</p>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Read-Through</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-amber-500 h-4 rounded-full" style={{ width: "70%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              First read is slow, subsequent reads are fast
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Database Load</h3>
                        <div className="grid md:grid-cols-4 gap-4">
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Through</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-red-500 h-4 rounded-full" style={{ width: "80%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              High database load as every write hits the database
                            </p>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Back</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-green-500 h-4 rounded-full" style={{ width: "30%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Low database load as writes are batched and optimized
                            </p>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Write-Around</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-amber-500 h-4 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Medium database load from writes and cache misses
                            </p>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium mb-2">Read-Through</h4>
                            <div className="w-full bg-muted rounded-full h-4 mb-2">
                              <div className="bg-amber-500 h-4 rounded-full" style={{ width: "50%" }}></div>
                            </div>
                            <p className="text-xs text-muted-foreground">Medium database load from cache misses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="use-cases" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Use Cases</CardTitle>
                    <CardDescription>When to use each caching strategy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col rounded-lg border p-6">
                        <div className="flex flex-col items-center gap-3 mb-4">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Server className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-medium">Write-Through Cache</h3>
                        </div>
                        <h4 className="font-medium mb-2">Best For:</h4>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Applications where data consistency is critical</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Financial systems and payment processing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Systems where data loss is unacceptable</span>
                          </li>
                        </ul>
                        <div className="mt-auto">
                          <h4 className="font-medium mb-2">Example:</h4>
                          <div className="rounded-lg bg-muted p-3 text-sm">
                            <p>E-commerce platforms where inventory and order data must be accurate across all systems</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-6">
                        <div className="flex flex-col items-center gap-3 mb-4">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Server className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-medium">Write-Back Cache</h3>
                        </div>
                        <h4 className="font-medium mb-2">Best For:</h4>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Applications with high write volume</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Systems where write performance is critical</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Applications that can tolerate brief periods of data inconsistency</span>
                          </li>
                        </ul>
                        <div className="mt-auto">
                          <h4 className="font-medium mb-2">Example:</h4>
                          <div className="rounded-lg bg-muted p-3 text-sm">
                            <p>Analytics systems, logging platforms, and real-time data collection services</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-6">
                        <div className="flex flex-col items-center gap-3 mb-4">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Server className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-medium">Write-Around Cache</h3>
                        </div>
                        <h4 className="font-medium mb-2">Best For:</h4>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Applications with data that is written once but rarely read</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Systems where cache space is limited and valuable</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Applications where preventing cache pollution is important</span>
                          </li>
                        </ul>
                        <div className="mt-auto">
                          <h4 className="font-medium mb-2">Example:</h4>
                          <div className="rounded-lg bg-muted p-3 text-sm">
                            <p>
                              Media storage systems, archival data, and logging systems where old data is rarely accessed
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col rounded-lg border p-6">
                        <div className="flex  flex-col items-center gap-3 mb-4">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Server className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-medium">Read-Through Cache</h3>
                        </div>
                        <h4 className="font-medium mb-2">Best For:</h4>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Applications with read-heavy workloads</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Systems where simplifying application code is important</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Applications where automatic cache population is desired</span>
                          </li>
                        </ul>
                        <div className="mt-auto">
                          <h4 className="font-medium mb-2">Example:</h4>
                          <div className="rounded-lg bg-muted p-3 text-sm">
                            <p>Content delivery systems, product catalogs, and user profile services</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-16">
                      <h3 className="text-lg font-medium mb-4">Common Combinations</h3>
                      <div className="rounded-lg border p-4">
                        <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                        <h4 className="font-medium mb-2">Read-Through + Write-Through</h4>
                            <p className="text-sm mb-3">
                              The most consistent combination, ensuring data is always synchronized.
                            </p>
                            <div className="rounded-lg bg-muted p-3 text-sm mt-auto">
                              <p>
                                <strong>Best for:</strong> Financial applications, e-commerce platforms
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-medium mb-2">Read-Through + Write-Back</h4>
                            <p className="text-sm mb-3">Balances performance and consistency for most applications.</p>
                            <div className="rounded-lg bg-muted p-3 text-sm mt-auto">
                              <p>
                                <strong>Best for:</strong> Social media, content management systems
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-16 flex justify-between">
              <Link href="/cache-mechanics">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Cache Mechanics
                </Button>
              </Link>
              <Link href="/advanced-concepts">
                <Button className="gap-2">
                  Advanced Concepts <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
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

