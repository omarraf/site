'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock } from "lucide-react";
import { Experience } from "../data/experiences";

interface ResearchTimelineProps {
  experience: Experience;
}

export function ResearchTimeline({ experience }: ResearchTimelineProps) {
  // Calculate progress based on updates and total duration
  const totalWeeks = parseInt(experience.duration?.split(' ')[0] || '10');
  const completedWeeks = experience.updates.length;
  const progressPercentage = Math.min((completedWeeks / totalWeeks) * 100, 100);

  const sortedUpdates = [...experience.updates].sort((a, b) => 
    (a.week || 0) - (b.week || 0)
  );

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Research Progress</CardTitle>
            <Badge variant="outline">
              Week {completedWeeks} of {totalWeeks}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Started {new Date(experience.startDate).toLocaleDateString()}
              </div>
              {experience.status === 'ongoing' && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {totalWeeks - completedWeeks} weeks remaining
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="space-y-4">
        {Array.from({ length: totalWeeks }, (_, index) => {
          const weekNumber = index + 1;
          const update = sortedUpdates.find(u => u.week === weekNumber);
          const isCompleted = !!update;
          const isCurrent = weekNumber === completedWeeks + 1 && experience.status === 'ongoing';
          
          return (
            <div key={weekNumber} className="relative">
              {/* Timeline connector */}
              {index < totalWeeks - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px bg-border"></div>
              )}
              
              <Card className={`transition-all ${isCompleted ? 'border-primary/50 bg-primary/5' : isCurrent ? 'border-orange-500/50 bg-orange-50 dark:bg-orange-950/20' : 'opacity-60'}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-sm flex-shrink-0 ${
                      isCompleted 
                        ? 'bg-primary text-primary-foreground' 
                        : isCurrent 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      W{weekNumber}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        {update ? update.title : `Week ${weekNumber}`}
                      </CardTitle>
                      {update && (
                        <time className="text-sm text-muted-foreground">
                          {new Date(update.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      )}
                      {!update && isCurrent && (
                        <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">
                          Current week
                        </p>
                      )}
                      {!update && !isCurrent && weekNumber > completedWeeks && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Upcoming
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                {update && (
                  <CardContent className="pt-0">
                    <div className="ml-16">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {update.content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.trim()}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
} 