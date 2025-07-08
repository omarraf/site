'use client';

import { notFound } from 'next/navigation';
import { experiences } from '../../data/experiences';
import Link from 'next/link';
import { ArrowLeft, Building2, MapPin, Clock, Github, ExternalLink, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResearchTimeline } from "../../components/ResearchTimeline";

interface ExperiencePageProps {
  params: {
    id: string;
  };
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function ExperienceDetailPage({ params }: ExperiencePageProps) {
  const experience = experiences.find((exp) => exp.id === params.id);

  if (!experience) {
    notFound();
  }

  const sortedUpdates = [...experience.updates].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 sm:mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Experience Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge 
              variant={experience.status === 'ongoing' ? 'default' : 'secondary'} 
              className="text-sm"
            >
              {experience.status}
            </Badge>
            <Badge variant="outline" className="text-sm">
              {experience.type}
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{experience.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{experience.description}</p>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
            {experience.organization && (
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <span>{experience.organization}</span>
              </div>
            )}
            {experience.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{experience.location}</span>
              </div>
            )}
            {experience.duration && (
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{experience.duration}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {experience.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Links */}
          {experience.links && (
            <div className="flex gap-3 mb-8">
              {experience.links.github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={experience.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Repository
                  </a>
                </Button>
              )}
              {experience.links.demo && (
                <Button variant="outline" size="sm" asChild>
                  <a href={experience.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {experience.links.paper && (
                <Button variant="outline" size="sm" asChild>
                  <a href={experience.links.paper} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Research Paper
                  </a>
                </Button>
              )}
              {experience.links.website && (
                <Button variant="outline" size="sm" asChild>
                  <a href={experience.links.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Website
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ node, ...props }) => <p className="text-lg leading-relaxed mb-4 text-foreground" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-foreground mt-6 mb-3" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside text-foreground mb-4 space-y-2" {...props} />,
                li: ({ node, ...props }) => <li className="text-foreground" {...props} />,
              }}
            >
              {experience.overview}
            </ReactMarkdown>
          </div>
        </section>

        {/* Research Timeline for research type experiences */}
        {experience.type === 'research' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Research Timeline</h2>
            <ResearchTimeline experience={experience} />
          </section>
        )}

        {/* Progress Updates for non-research or detailed view */}
        {(experience.type !== 'research' || experience.updates.length > 0) && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">
                {experience.type === 'research' ? 'Detailed Updates' : 'Progress Updates'}
              </h2>
              <Badge variant="outline" className="text-sm">
                {experience.updates.length} update{experience.updates.length !== 1 ? 's' : ''}
              </Badge>
            </div>

            <div className="space-y-8">
              {sortedUpdates.map((update, index) => (
                <Card key={update.id} className="relative">
                  {/* Timeline connector */}
                  {index < sortedUpdates.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-border"></div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
                        {update.week ? `W${update.week}` : <Calendar className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{update.title}</CardTitle>
                        <time className="text-sm text-muted-foreground">
                          {new Date(update.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardFooter className="pt-0">
                    <div className="ml-16 w-full">
                      {update.images && update.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {update.images.map((image, imgIndex) => (
                            <div key={imgIndex} className="relative h-48 rounded-lg overflow-hidden">
                              <Image
                                src={image}
                                alt={`${update.title} - Image ${imgIndex + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <article className="prose dark:prose-invert max-w-none">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            h1: ({ node, ...props }) => <h1 className="text-2xl font-bold text-foreground mt-6 mb-4" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-xl font-bold text-foreground mt-6 mb-3" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-lg font-bold text-foreground mt-4 mb-2" {...props} />,
                            p: ({ node, ...props }) => <p className="text-foreground mb-4 leading-relaxed" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc list-inside text-foreground mb-4 space-y-1" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal list-inside text-foreground mb-4 space-y-1" {...props} />,
                            li: ({ node, ...props }) => <li className="text-foreground" {...props} />,
                            a: ({ node, ...props }) => <a className="text-primary hover:underline" {...props} />,
                            code: ({ inline, className, children, ...props }: CodeProps) => {
                              if (inline) {
                                return (
                                  <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props}>
                                    {children}
                                  </code>
                                );
                              }
                              return (
                                <code className="text-sm font-mono text-foreground" {...props}>
                                  {children}
                                </code>
                              );
                            },
                            pre: ({ node, ...props }) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
                            blockquote: ({ node, ...props }) => (
                              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />
                            ),
                          }}
                        >
                          {update.content}
                        </ReactMarkdown>
                      </article>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
} 