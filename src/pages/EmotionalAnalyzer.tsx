import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";

export interface EmotionResult {
  name: string;
  value: number;
  emoji: string;
  color: string;
}

interface EmotionAnalyzerProps {
  emotionResults: EmotionResult[];
  className?: string;
  currentEmotion?: string | null;
}

const EmotionAnalyzer: React.FC<EmotionAnalyzerProps> = ({ 
  emotionResults, 
  className,
  currentEmotion 
}) => {
  const [sortedResults, setSortedResults] = useState<EmotionResult[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // Sort results by value in descending order
    const sorted = [...emotionResults].sort((a, b) => b.value - a.value);
    setSortedResults(sorted);
    
    // Format data for chart
    const formattedData = sorted.slice(0, 5).map(item => ({
      name: item.name,
      value: Math.round(item.value * 100),
      color: item.color,
      emoji: item.emoji
    }));
    setChartData(formattedData);
  }, [emotionResults]);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Emotion Analysis</h2>
        <p className="text-sm text-muted-foreground">
          Live expression detection based on camera feed
        </p>
      </div>

      {currentEmotion && (
        <div className="p-4 border rounded-lg bg-muted/20">
          <div className="text-sm font-medium mb-1">Current Emotion</div>
          <div className="flex items-center gap-3">
            <div className="text-3xl">
              {sortedResults[0]?.emoji || "😶"}
            </div>
            <div>
              <div className="font-medium">
                {sortedResults[0]?.name || "Analyzing..."}
              </div>
              <div className="text-xs text-muted-foreground">
                {Math.round(sortedResults[0]?.value * 100)}% confidence
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bar Chart for top 5 emotions */}
      <div className="h-[180px] mt-4">
        <ChartContainer
          config={{
            happy: { color: "#FFD700" },
            sad: { color: "#6495ED" },
            angry: { color: "#FF4500" },
            surprised: { color: "#9370DB" },
            fearful: { color: "#7CFC00" },
            disgusted: { color: "#8FBC8F" },
            neutral: { color: "#E0E0E0" },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
              <XAxis type="number" domain={[0, 100]} />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={80}
                tick={props => {
                  const { x, y, payload } = props;
                  const item = chartData.find(d => d.name === payload.value);
                  return (
                    <g transform={`translate(${x},${y})`}>
                      <text x={-10} y={0} dy={4} textAnchor="end" fill="#666" fontSize={12}>
                        {item?.emoji} {payload.value}
                      </text>
                    </g>
                  );
                }}
              />
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-md">
                        <div className="flex gap-1">
                          <span>{payload[0].payload.emoji}</span>
                          <span className="font-medium">{payload[0].payload.name}</span>
                          <span>: {payload[0].value}%</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="value" animationDuration={300}>
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    opacity={currentEmotion === entry.name ? 1 : 0.7}
                    stroke={currentEmotion === entry.name ? "#000" : "none"}
                    strokeWidth={currentEmotion === entry.name ? 1 : 0}
                  />
                ))}
                <LabelList dataKey="value" position="right" formatter={(value: number) => `${value}%`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Traditional progress bars */}
      <div className="space-y-4 mt-6">
        {sortedResults.map((emotion) => (
          <div key={emotion.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <div className="font-medium flex items-center">
                <span className="mr-2">{emotion.emoji}</span>
                {emotion.name}
              </div>
              <div className="text-muted-foreground">
                {Math.round(emotion.value * 100)}%
              </div>
            </div>
            <Progress 
              value={emotion.value * 100} 
              className="h-2"
              style={{
                backgroundColor: `${emotion.color}40`,
                "--progress-foreground": emotion.color
              } as React.CSSProperties}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionAnalyzer;
