import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
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
      </main>
    </div>
  );
}
