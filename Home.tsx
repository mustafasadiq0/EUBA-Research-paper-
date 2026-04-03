import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Database, Zap } from "lucide-react";

/**
 * EUBA Research Website - Home Page
 * Design: Academic Minimalism with Technical Precision
 * Color Scheme: Deep Navy (#1a2a4a) + Cyan Accents (#00d9ff)
 * Typography: Playfair Display (headings) + Inter (body) + Fira Code (code)
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">EUBA Research</div>
          <div className="flex gap-8">
            <a href="#overview" className="text-sm font-medium hover:text-accent transition-colors">Overview</a>
            <a href="#architecture" className="text-sm font-medium hover:text-accent transition-colors">Architecture</a>
            <a href="#results" className="text-sm font-medium hover:text-accent transition-colors">Results</a>
            <a href="#methodology" className="text-sm font-medium hover:text-accent transition-colors">Methodology</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/112791598/h3FkHJeQNpxXPGq3V62QRH/hero-bg-8gHrWLqPWKkqZqnaaWtek5.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/80" />
        <div className="relative z-10 container text-center max-w-3xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-primary leading-tight">
            Enhancing UEBA with AI-Powered Anomaly Detection
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            A data-driven simulation approach integrating deep learning, graph neural networks, and Transformer-based architectures for intelligent cybersecurity monitoring.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Read Research <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Architecture
            </Button>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section id="overview" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-primary">Research Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">The Challenge</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Traditional SIEM systems rely on predefined rules and signatures, struggling to detect novel threats and insider attacks. Legacy UEBA implementations suffer from high false positive rates and lack adaptability to evolving threat landscapes.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Security analysts face alert fatigue from overwhelming false positives, while sophisticated attacks remain undetected due to rigid detection mechanisms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Solution</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  We propose an AI-enhanced UEBA framework that integrates state-of-the-art deep learning models, graph neural networks, and Transformer architectures to detect behavioral anomalies with unprecedented accuracy.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Our modular pipeline integrates seamlessly with existing SIEM infrastructure via Kafka, Elasticsearch, and a flexible ML inference layer, enabling practical deployment in enterprise environments.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Brain className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-primary">AI Models</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/80">
                  LSTM, Transformer, and Graph Neural Networks for comprehensive anomaly detection across multiple behavioral dimensions.
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Database className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-primary">Real-time Integration</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/80">
                  Apache Kafka for streaming, Elasticsearch for storage, enabling real-time anomaly detection at enterprise scale.
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-primary">Improved Accuracy</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/80">
                  Significant improvements in detection accuracy and contextual awareness compared to traditional rule-based methods.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section id="architecture" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-primary">System Architecture</h2>
            
            <Card className="border-border mb-8 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-primary">AI-Enhanced UEBA Framework</CardTitle>
                <CardDescription>
                  Modular pipeline integrating data ingestion, AI models, and SIEM systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/112791598/h3FkHJeQNpxXPGq3V62QRH/system-architecture-visual-F2sMj6k6udSbyoix5yfwLs.webp" 
                  alt="System Architecture Diagram" 
                  className="w-full rounded-lg border border-border"
                />
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Data Pipeline</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span><strong>Data Sources:</strong> CERT Insider Threat Dataset, UNSW-NB15, TON_IoT</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span><strong>Apache Kafka:</strong> Real-time event streaming and data ingestion</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">→</span>
                    <span><strong>Elasticsearch:</strong> Scalable storage and indexing for log data</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">AI Models</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">◆</span>
                    <span><strong>LSTM Networks:</strong> Sequential pattern recognition in behavioral data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">◆</span>
                    <span><strong>Transformer Models:</strong> Long-range dependency capture in log sequences</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">◆</span>
                    <span><strong>Graph Neural Networks:</strong> Multi-entity relationship detection and lateral movement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Performance */}
      <section id="results" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-primary">Performance Results</h2>
            
            <Card className="border-border mb-8 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-primary">AI Model Performance Comparison</CardTitle>
                <CardDescription>
                  Comparative analysis across Precision, Recall, F1-Score, and Accuracy metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/112791598/h3FkHJeQNpxXPGq3V62QRH/model-comparison-chart-CYK8WHiNDuBp3DMdgXGA6q.webp" 
                  alt="Model Performance Comparison Chart" 
                  className="w-full rounded-lg border border-border"
                />
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Key Findings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-foreground/80">
                  <p>
                    <strong className="text-primary">LSTM Models</strong> demonstrated strong performance in sequence-based anomaly detection, achieving high recall rates for temporal pattern recognition.
                  </p>
                  <p>
                    <strong className="text-primary">Transformer Models</strong> excelled at capturing long-range dependencies in log sequences, outperforming traditional methods in contextual analysis.
                  </p>
                  <p>
                    <strong className="text-primary">Graph Neural Networks</strong> proved effective at detecting coordinated attacks and lateral movement patterns across multi-entity relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Improvements Over Traditional Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-foreground/80">
                  <p>
                    <strong className="text-accent">Reduced False Positives:</strong> AI models significantly reduce alert fatigue by filtering noise and focusing on genuine threats.
                  </p>
                  <p>
                    <strong className="text-accent">Enhanced Detection:</strong> Advanced architectures detect subtle, evolving threats that signature-based systems miss.
                  </p>
                  <p>
                    <strong className="text-accent">Contextual Awareness:</strong> Multi-model ensemble provides comprehensive behavioral analysis and threat correlation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-primary">Methodology</h2>
            
            <div className="space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-primary">Simulation Framework</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/80 space-y-3">
                  <p>
                    We developed a modular pipeline using publicly available cybersecurity datasets to emulate realistic user and entity behavior. The framework supports training and testing of multiple AI models under controlled conditions, enabling fair performance comparison.
                  </p>
                  <p>
                    Datasets include the CERT Insider Threat Dataset for insider threat scenarios, UNSW-NB15 for network intrusion patterns, and TON_IoT for IoT-specific anomalies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-primary">Model Evaluation</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/80 space-y-3">
                  <p>
                    Comparative analysis of multiple AI models was conducted using standardized metrics: Precision, Recall, F1-Score, and Detection Accuracy. Each model was evaluated on its ability to detect behavioral anomalies while minimizing false positives.
                  </p>
                  <p>
                    Models were trained on historical behavioral data and tested on unseen data to ensure generalization capability and real-world applicability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-primary">Integration Architecture</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/80 space-y-3">
                  <p>
                    The proposed architecture integrates AI-powered UEBA into existing SIEM systems using open-source components. Apache Kafka handles real-time data streaming, Elasticsearch provides scalable storage, and a modular ML inference layer enables flexible model deployment.
                  </p>
                  <p>
                    This design ensures compatibility with heterogeneous enterprise environments while maintaining scalability and operational efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Explore the full research paper for detailed methodology, comprehensive results, and implementation guidelines for deploying AI-enhanced UEBA in your organization.
          </p>
          <a href="https://d2xsxph8kpxj0f.cloudfront.net/112791598/h3FkHJeQNpxXPGq3V62QRH/EUBAresearch_22ab30d2.pdf" download>
            <Button size="lg" variant="secondary">
              Download Full Research Paper
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container text-center text-foreground/60 text-sm">
          <p>
            Enhancing User and Entity Behavior Analytics in SIEM Systems Using AI-Powered Anomaly Detection
          </p>
          <p className="mt-2">
            A Data-Driven Simulation Approach | 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
