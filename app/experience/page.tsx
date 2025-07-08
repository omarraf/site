import Link from 'next/link';
import { experiences } from '../data/experiences';
import { ArrowLeft, Building2, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ExperiencePage() {
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

        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Experience</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Research projects, internships, and professional experiences that have shaped my journey in computer science.
        </p>

        <div className="grid gap-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                {experience.image && (
                  <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className={`flex-1 ${experience.image ? 'lg:w-2/3' : 'w-full'}`}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant={experience.status === 'ongoing' ? 'default' : 'secondary'} 
                        className="text-xs"
                      >
                        {experience.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {experience.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      <Link href={`/experience/${experience.id}`}>
                        {experience.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">{experience.description}</CardDescription>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
                      {experience.organization && (
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {experience.organization}
                        </div>
                      )}
                      {experience.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      )}
                      {experience.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {experience.duration}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardFooter className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 items-center">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/experience/${experience.id}`} className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Details
                        </Link>
                      </Button>
                      {experience.updates.length > 0 && (
                        <Badge variant="outline" className="text-xs">
                          {experience.updates.length} update{experience.updates.length !== 1 ? 's' : ''}
                        </Badge>
                      )}
                      <span className="text-sm text-muted-foreground">
                        Started {new Date(experience.startDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
} 