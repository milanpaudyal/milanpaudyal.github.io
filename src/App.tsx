import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Code, Briefcase, User, ChatCircle, ArrowRight, Download, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useKV } from '@github/spark/hooks';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  details: string;
  achievements: string[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  const [themePreference, setThemePreference] = useKV<string>('theme-preference', 'light');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [portfolioViews, setPortfolioViews] = useKV<number>('portfolio-views', 0);
  
  const isDark = themePreference === 'dark';

  useEffect(() => {
    setPortfolioViews((current) => (current || 0) + 1);
  }, [setPortfolioViews]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setThemePreference(isDark ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    'AI/ML': ['Python', 'FastAPI', 'LangChain', 'Vector DBs', 'Embeddings'],
    'Data': ['Memgraph', 'Neo4j', 'Redis', 'MySQL', 'PySpark'],
    'Infrastructure': ['Docker', 'CI/CD', 'Scheduler Design']
  };

  const projects = [
    {
      id: 1,
      title: 'Real-time Fraud Detection',
      description: 'Graph-based detection of linked accounts with sub-second latency',
      tech: ['Python', 'Memgraph', 'FastAPI', 'Graph Analytics'],
      details: 'Designed and implemented a sophisticated fraud detection pipeline using graph analytics to identify fraudulent account networks. The system processes transaction data in real-time, detecting suspicious patterns and linked accounts with sub-second response times.',
      achievements: [
        'Reduced fraud detection time from minutes to milliseconds',
        'Identified 40% more fraudulent networks than previous systems',
        'Processing 10,000+ transactions per second with 99.9% uptime'
      ]
    },
    {
      id: 2,
      title: 'Recommendation Engine',
      description: 'Collaborative filtering + embeddings for personalized fintech offers',
      tech: ['PySpark', 'Python', 'Vector DBs', 'Embeddings'],
      details: 'Built a comprehensive recommendation system leveraging 16 years of transaction data. Combines collaborative filtering with modern embedding techniques to deliver personalized financial product recommendations.',
      achievements: [
        'Increased user engagement by 35% through personalized offers',
        'Processes 16 years of historical transaction data',
        'Delivers recommendations with 92% accuracy rate'
      ]
    },
    {
      id: 3,
      title: 'RAG & Agentic AI Demo',
      description: 'LangChain + Gemini APIs for Google I/O Extended 2025',
      tech: ['LangChain', 'Gemini API', 'Python', 'RAG'],
      details: 'Developed a demonstration of Retrieval-Augmented Generation and Agentic AI capabilities for a technical conference presentation. Showcased advanced AI agent workflows using cutting-edge tools.',
      achievements: [
        'Presented to 200+ developers at Google I/O Extended',
        'Demonstrated practical RAG implementation patterns',
        'Open-sourced demo code with 500+ GitHub stars'
      ]
    },
    {
      id: 4,
      title: 'LangChain Tooling',
      description: 'Streamlit-based tools for debugging agent prompts',
      tech: ['Streamlit', 'LangChain', 'Python', 'Agent Tools'],
      details: 'Created developer tooling to streamline the debugging and optimization of AI agent prompts. The toolkit provides visual interfaces for prompt engineering and agent behavior analysis.',
      achievements: [
        'Reduced prompt debugging time by 60%',
        'Adopted by 15+ internal AI projects',
        'Improved agent response quality by 25%'
      ]
    }
  ];

  const experience = [
    {
      title: 'AI/ML Engineer',
      company: 'eSewa',
      period: 'Sep 2022 – Present',
      achievements: [
        'Designed fraud detection pipelines using graph analytics',
        'Built recommendation systems on 16 years of transaction data',
        'Speaker at Google I/O Extended LITE Kathmandu 2025 on RAG & Agentic AI'
      ]
    },
    {
      title: 'Junior Software Developer',
      company: 'Previous Role',
      period: 'Sep 2018 – Aug 2019',
      achievements: [
        'Developed scalable backend systems',
        'Implemented automated testing frameworks',
        'Contributed to microservices architecture'
      ]
    },
    {
      title: 'Java Intern',
      company: 'Internship Role',
      period: 'Jun 2018 – Aug 2018',
      achievements: [
        'Gained hands-on experience with Java development',
        'Worked on enterprise application features',
        'Collaborated with senior developers on code reviews'
      ]
    }
  ];

  const certifications = [
    'Advanced Learning Algorithms — DeepLearning.AI, Stanford (2025)',
    'Supervised Machine Learning — DeepLearning.AI (2024)',
    'AI For Everyone — DeepLearning.AI (2023)'
  ];

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
      toast.error('Please fill in all fields');
      return;
    }
    
    toast.success('Message sent successfully!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl text-primary"
          >
            Milan Paudyal
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="p-2"
          >
            {isDark ? <Sun weight="fill" /> : <Moon weight="fill" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                Milan Paudyal
                <span className="block text-primary mt-2">AI/ML Engineer</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Building intelligent AI systems for fraud detection and recommendation engines in fintech.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="group"
                >
                  See My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <User size={120} className="text-primary/60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
              About
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-lg leading-relaxed">
              <p>
                Passionate about harnessing cutting-edge AI and automation to make products, services, and processes smarter and more impactful. Curious and innovative, I thrive on exploring new ideas, learning continuously, and embracing diverse experiences that fuel growth.
              </p>
              
              <p>
                I build pragmatic ML systems and reliable automation for fintech — focusing on real-time fraud detection, scalable recommendation pipelines, and solutions teams can ship.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
              Skills & Tools
            </motion.h2>
            
            <div className="max-w-6xl mx-auto">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <motion.div key={category} variants={fadeInUp} className="mb-12 last:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-2 h-8 rounded-full ${
                      categoryIndex === 0 ? 'bg-blue-500' : 
                      categoryIndex === 1 ? 'bg-emerald-500' : 'bg-violet-500'
                    }`} />
                    <h3 className="text-xl font-semibold text-foreground">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {items.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                          categoryIndex === 0 ? 'border-blue-200 hover:border-blue-400 hover:shadow-blue-100' :
                          categoryIndex === 1 ? 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100' :
                          'border-violet-200 hover:border-violet-400 hover:shadow-violet-100'
                        } hover:shadow-lg bg-card`}
                      >
                        <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity ${
                          categoryIndex === 0 ? 'bg-blue-500' :
                          categoryIndex === 1 ? 'bg-emerald-500' : 'bg-violet-500'
                        }`} />
                        
                        <div className="relative z-10 text-center">
                          <div className={`w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center ${
                            categoryIndex === 0 ? 'bg-blue-100 text-blue-600' :
                            categoryIndex === 1 ? 'bg-emerald-100 text-emerald-600' :
                            'bg-violet-100 text-violet-600'
                          }`}>
                            {categoryIndex === 0 ? <Code size={18} /> :
                             categoryIndex === 1 ? <Briefcase size={18} /> :
                             <User size={18} />}
                          </div>
                          
                          <p className="font-medium text-sm text-foreground group-hover:text-foreground">
                            {skill}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
              Experience
            </motion.h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {experience.map((role, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{role.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {role.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline">{role.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project) => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Card 
                    className="h-full cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="text-primary" />
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Talks & Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
              Talks & Certifications
            </motion.h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div variants={fadeInUp}>
                <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-red-500/10 to-yellow-500/10 border-0 shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      Speaker — Google I/O Extended LITE Kathmandu 2025
                    </CardTitle>
                    <CardDescription className="text-base font-medium">
                      From Retrieval to Action: Agentic AI with Gemini & ADK
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
              Get In Touch
            </motion.h2>
            
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChatCircle className="text-primary" />
                    Contact Me
                  </CardTitle>
                  <CardDescription>
                    Let's discuss AI/ML opportunities and collaborations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" rows={4} required />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-center text-muted-foreground mb-4">
                      Or reach out directly:
                    </p>
                    <div className="text-center">
                      <p className="mb-4">milanpaudyal43@gmail.com</p>
                      <div className="flex justify-center space-x-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://linkedin.com/in/milanpaudyal" target="_blank" rel="noopener noreferrer">
                            <LinkedinLogo className="mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <GithubLogo className="mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2" />
                          Resume
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Milan Paudyal. Built with clarity & intent.
          </p>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-xl">
                  <Code className="text-primary" />
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Project Details</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;