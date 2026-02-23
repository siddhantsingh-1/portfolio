"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, FileText, Briefcase, GraduationCap, Code, TrendingUp, Wrench, Circle, FolderOpen, ChevronDown, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import 'katex/dist/katex.min.css';
import Image from "next/image";
import BrownianMotionBackground from "@/components/BrownianMotionBackground";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen relative overflow-hidden">
        <BrownianMotionBackground />
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
                  Siddhant Singh
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl">
                  MS in Financial Engineering @ NYU Tandon | Quantitative Researcher & Developer
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-700 text-slate-50 hover:bg-slate-800 hover:text-slate-50"
                  asChild
                >
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-700 text-slate-50 hover:bg-slate-800 hover:text-slate-50"
                  asChild
                >
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  className="bg-slate-50 text-slate-950 hover:bg-slate-200"
                  asChild
                >
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    View Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <Image
                  src="/profile.jpeg"
                  alt="Siddhant Singh"
                  width={300}
                  height={300}
                  className="rounded-2xl border-2 border-zinc-800 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Professional Experience Timeline */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-slate-400" />
              <h2 className="text-3xl font-bold text-slate-50">Professional Experience</h2>
            </div>
            
            <div className="relative border-l-2 border-zinc-800 ml-4">
              {/* Macquarie Senior Associate */}
              <div className="relative mb-12 ml-8">
                <div className="absolute -left-10 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-900"></div>
                <Card className="border-zinc-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-slate-50">
                      <a 
                        href="https://www.macquarie.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-zinc-300 transition-colors underline decoration-zinc-600 underline-offset-2"
                      >
                        Macquarie Group
                      </a>
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Senior Associate, Model Risk Management
                    </CardDescription>
                    <CardDescription className="text-slate-500 text-sm">
                      April 2024 - June 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-300">
                      Performed quantitative validation and analytical reviews of pricing and valuation models (C++/Python) used across FICC and Equity businesses, ensuring accuracy of curve construction, derivative pricing and calibration logic.
                    </p>
                    <p className="text-slate-300">
                      Conducted detailed model code reviews; developed targeted Python test frameworks, model stress scenarios and backtesting routines to assess numerical stability, boundary behaviour and pricing consistency.
                    </p>
                    <p className="text-slate-300">
                      Discovered and reported model issues with exposures up to $150M, leading to rectification by relevant teams.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* WorldQuant Consultant */}
              <div className="relative mb-12 ml-8">
                <div className="absolute -left-10 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-900"></div>
                <Card className="border-zinc-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-slate-50">
                      <a 
                        href="https://www.worldquant.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-zinc-300 transition-colors underline decoration-zinc-600 underline-offset-2"
                      >
                        WorldQuant
                      </a>
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Consultant, Alpha Research
                    </CardDescription>
                    <CardDescription className="text-slate-500 text-sm">
                      December 2023 - March 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-300">
                      Designed and backtested 25+ systematic alpha signals on global equities using Python and WorldQuant BRAIN platform; applied feature engineering, factor modelling, and time-series transformations.
                    </p>
                    <p className="text-slate-300">
                      Constructed predictive signals leveraging z-scores, residualization, and rolling-statistics across price, volume and fundamental data; evaluated performance via IC, turnover, and Sharpe metrics.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Macquarie Summer Intern */}
              <div className="relative mb-12 ml-8">
                <div className="absolute -left-10 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-900"></div>
                <Card className="border-zinc-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-slate-50">
                      <a 
                        href="https://www.macquarie.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-zinc-300 transition-colors underline decoration-zinc-600 underline-offset-2"
                      >
                        Macquarie Group
                      </a>
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Summer Intern, Model Risk Management
                    </CardDescription>
                    <CardDescription className="text-slate-500 text-sm">
                      May 2023 - July 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-300">
                      Developed Python automation pipelines to analyze and validate pricing model outputs, reducing manual review effort by 30% and accelerating model testing turnaround by 50%.
                    </p>
                    <p className="text-slate-300">
                      Integrated Python analytics with legacy C++ model libraries to extract and map 350+ rate-transformation classes; applied regex and graph-based traversal (BFS) to document dependency structures.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-slate-400" />
              <h2 className="text-3xl font-bold text-slate-50">Education</h2>
            </div>
            
            <div className="relative border-l-2 border-zinc-800 ml-4">
              {/* NYU Tandon */}
              <div className="relative mb-12 ml-8">
                <div className="absolute -left-10 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-900"></div>
                <Card className="border-zinc-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-slate-50">
                      <a 
                        href="https://engineering.nyu.edu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-zinc-300 transition-colors underline decoration-zinc-600 underline-offset-2"
                      >
                        New York University, Tandon School of Engineering
                      </a>
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Master of Science in Financial Engineering
                    </CardDescription>
                    <CardDescription className="text-slate-500 text-sm">
                      GPA: 3.8/4.0 | Expected May 2027
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Specializing in quantitative finance, risk management, and computational methods with coursework in Probability Theory, Stochastic Processes, and Machine Learning.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* NSUT */}
              <div className="relative mb-12 ml-8">
                <div className="absolute -left-10 w-4 h-4 bg-slate-50 rounded-full border-2 border-slate-900"></div>
                <Card className="border-zinc-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-slate-50">
                      <a 
                        href="https://nsut.ac.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-zinc-300 transition-colors underline decoration-zinc-600 underline-offset-2"
                      >
                        Netaji Subhas University of Technology
                      </a>
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Bachelor of Technology in Mathematics and Computing
                    </CardDescription>
                    <CardDescription className="text-slate-500 text-sm">
                      GPA: 3.4/4.0 | August 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Combined mathematics and computer science education with focus on algorithms, data structures, and big data analytics.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FolderOpen className="w-6 h-6 text-slate-400" />
            <h2 className="text-3xl font-bold text-slate-50">Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* SABR Model Calibration */}
            <Card className="border-zinc-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardHeader>
                <CardTitle className="text-slate-50">SABR Model Calibration</CardTitle>
                <CardDescription className="text-slate-400">
                  Fixed Income & Volatility Modeling
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Implemented the Stochastic Alpha Beta Rho (SABR) model for volatility surface modeling and calibration to market data.
                </p>
                
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-slate-400 text-sm mb-2">Mathematical Foundation:</p>
                  <div className="text-slate-200 text-sm">
                    <ReactMarkdown 
                      remarkPlugins={[remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                    >
                      {`The forward rate follows SDE: $d\\hat{f}_t = \\hat{\\alpha}_t \\hat{f}_t^\\beta dW_{1,t}$`}
                    </ReactMarkdown>
                  </div>
                </div>
                
                {/* Volatility Smile Chart */}
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-slate-400 text-sm mb-4">Volatility Smile Visualization:</p>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={[
                          { strike: 80, volatility: 0.35 },
                          { strike: 85, volatility: 0.32 },
                          { strike: 90, volatility: 0.28 },
                          { strike: 95, volatility: 0.25 },
                          { strike: 100, volatility: 0.23 },
                          { strike: 105, volatility: 0.24 },
                          { strike: 110, volatility: 0.26 },
                          { strike: 115, volatility: 0.29 },
                          { strike: 120, volatility: 0.33 }
                        ]}
                        margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                      >
                        <XAxis 
                          dataKey="strike" 
                          stroke="#64748b" 
                          fontSize={10}
                          tick={{ fill: '#64748b' }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis 
                          stroke="#64748b" 
                          fontSize={10}
                          tick={{ fill: '#64748b' }}
                          axisLine={false}
                          tickLine={false}
                          domain={[0.2, 0.4]}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1e293b', 
                            border: '1px solid #334155',
                            borderRadius: '6px',
                            fontSize: '12px'
                          }}
                          labelStyle={{ color: '#e2e8f0' }}
                          itemStyle={{ color: '#60a5fa' }}
                          formatter={(value: any) => [`${(value as number).toFixed(3)}`, 'Implied Vol']}
                          labelFormatter={(label) => [`Strike: ${label}`, '']}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="volatility" 
                          stroke="#60a5fa" 
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ 
                            r: 4, 
                            fill: '#60a5fa',
                            stroke: '#1e40af',
                            strokeWidth: 2
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">Python</Badge>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">Quantitative Finance</Badge>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">Stochastic Calculus</Badge>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                    asChild
                  >
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                    asChild
                  >
                    <a 
                      href="https://demo.example.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stevens HFT Competition */}
            <Card className="border-zinc-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
              <CardHeader>
                <CardTitle className="text-slate-50">Stevens HFT Competition 2026</CardTitle>
                <CardDescription className="text-slate-400">
                  Team: Sub Zero Latency
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Developed a low-latency market-making strategy in C++ with focus on limit order book dynamics and high-frequency trading execution.
                </p>
                
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-slate-400 text-sm mb-2">Key Optimizations:</p>
                  <div className="text-slate-200 text-sm space-y-1">
                    <p>• Optimized Sharpe ratio through dynamic position sizing</p>
                    <p>• Implemented bid-ask spread heuristics for market impact minimization</p>
                    <p>• Real-time limit order book analysis with microsecond latency</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">C++</Badge>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">HFT</Badge>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">Algorithmic Trading</Badge>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                    asChild
                  >
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                    asChild
                  >
                    <a 
                      href="https://demo.example.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">Tech Stack</h2>
            <p className="text-slate-400">Technologies and tools I work with</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-slate-400" />
                <h3 className="text-xl font-semibold text-slate-50">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">C++</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Python</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">SQL</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">R</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">SAS</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Excel VBA</Badge>
              </div>
            </div>

            {/* Finance */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-slate-400" />
                <h3 className="text-xl font-semibold text-slate-50">Finance</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Black-Scholes</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Monte Carlo</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">VaR</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Statistical Modeling</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Model Calibration</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Derivatives Pricing</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">PD/LGD/EAD</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">CECL</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Backtesting</Badge>
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Wrench className="w-5 h-5 text-slate-400" />
                <h3 className="text-xl font-semibold text-slate-50">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Git</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">NumPy</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Pandas</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">SciPy</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">scikit-learn</Badge>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700">Bloomberg</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
