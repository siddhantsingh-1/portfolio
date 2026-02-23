import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, FileText, Briefcase, GraduationCap, Code, TrendingUp, Wrench } from "lucide-react";

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

      {/* Experience & Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-slate-400" />
                <h2 className="text-3xl font-bold text-slate-50">Professional Experience</h2>
              </div>
              
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
                    Ensured regulatory compliance across all business lines through integrity reviews of pricing models and rates transformation pipelines, aligning with SR 11-7 governance standards.
                  </p>
                  <p className="text-slate-300">
                    Conducted C++/Python model code reviews; created targeted test cases to evaluate edge cases, assumptions & limitations.
                  </p>
                  <p className="text-slate-300">
                    Discovered and reported model issues with exposures up to $150M, leading to rectification by relevant teams.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
                <CardHeader>
                  <CardTitle className="text-slate-50">WorldQuant BRAIN</CardTitle>
                  <CardDescription className="text-slate-400">
                    Consultant, Alpha Research
                  </CardDescription>
                  <CardDescription className="text-slate-500 text-sm">
                    December 2023 - March 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Designed and backtested 25+ alpha signals on the BRAIN platform employing statistical transformations of price, volume, and fundamental features.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Education Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-slate-400" />
                <h2 className="text-3xl font-bold text-slate-50">Education</h2>
              </div>
              
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
                    Specializing in quantitative finance, risk management, and computational methods with coursework in Quantitative Methods, Applied Linear Algebra, and Optimization.
                  </p>
                </CardContent>
              </Card>

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
