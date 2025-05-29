
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, Target } from "lucide-react";

export const CampaignOverview = () => {
  const metrics = [
    {
      title: "Total Campaign Performance",
      value: "€2.4M",
      change: "+12.5%",
      trend: "up",
      subtitle: "This Quarter",
      icon: Target
    },
    {
      title: "Current Month Performance", 
      value: "€847K",
      change: "+8.2%",
      trend: "up",
      subtitle: "November 2024",
      icon: TrendingUp
    },
    {
      title: "YTD Performance",
      value: "€8.9M",
      change: "+15.7%",
      trend: "up", 
      subtitle: "vs. Last Year",
      icon: TrendingUp
    },
    {
      title: "Global CAC",
      value: "€12.84",
      change: "-5.2%",
      trend: "down",
      subtitle: "Avg. Cost per Acquisition",
      icon: TrendingDown
    },
    {
      title: "Total Conversions",
      value: "186.4K",
      change: "+22.1%",
      trend: "up",
      subtitle: "This Quarter",
      icon: Users
    }
  ];

  return (
    <Card className="bg-[#1A1A1A] border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">Campaign Overview & Performance</CardTitle>
          <Badge className="bg-[#FFD700] text-black hover:bg-[#FFA500]">
            Live Data
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-5 h-5 text-[#FFD700]" />
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                  <p className="text-xs text-gray-400">{metric.title}</p>
                  <p className="text-xs text-gray-500">{metric.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Performance Indicators */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Top Performing Markets</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white">UK</span>
                <Badge className="bg-green-900 text-green-300">€4.2M</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white">Nordic</span>
                <Badge className="bg-green-900 text-green-300">€2.8M</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white">France</span>
                <Badge className="bg-yellow-900 text-yellow-300">€1.9M</Badge>
              </div>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Channel Performance</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white">Instagram</span>
                <span className="text-sm text-[#FFD700]">€11.2 CAC</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white">TikTok</span>
                <span className="text-sm text-[#FFD700]">€13.8 CAC</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white">YouTube</span>
                <span className="text-sm text-[#FFD700]">€15.1 CAC</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Performance Alerts</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-xs text-white">3 campaigns over CAC target</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-xs text-white">Budget utilization: 78%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-white">12 top performers available</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
