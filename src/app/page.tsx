import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, FileText, Briefcase, GraduationCap, Code, TrendingUp, Wrench, Circle, FolderOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-50 tracking-tight">
                Siddhant Singh
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto">
                MS in Financial Engineering @ NYU Tandon | Quantitative Researcher & Developer
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
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
                    <CardTitle className="text-slate-50">Macquarie Group</CardTitle>
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
                    <CardTitle className="text-slate-50">WorldQuant</CardTitle>
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
                    <CardTitle className="text-slate-50">Macquarie Group</CardTitle>
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
                    <CardTitle className="text-slate-50">New York University, Tandon School of Engineering</CardTitle>
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
                    <CardTitle className="text-slate-50">Netaji Subhas University of Technology</CardTitle>
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
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">Python</Badge>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">Quantitative Finance</Badge>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">Stochastic Calculus</Badge>
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
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">C++</Badge>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">HFT</Badge>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 border-zinc-700 hover:bg-slate-700">Algorithmic Trading</Badge>
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
