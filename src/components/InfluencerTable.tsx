
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, TrendingUp, TrendingDown } from "lucide-react";

export const InfluencerTable = () => {
  const influencers = [
    {
      name: "Emma Foodie",
      handle: "@emmafoodie",
      avatar: "/placeholder.svg",
      channel: "Instagram",
      posted: "live",
      conversions: 1247,
      trend: "up",
      cac: 11.24,
      cacVariance: -8.2,
      postsBooked: 3,
      postsTotal: 4,
      postsLive: 2,
      activations: 85,
      reactivations: 32,
      tier: "Top"
    },
    {
      name: "Nordic Chef", 
      handle: "@nordicchef",
      avatar: "/placeholder.svg",
      channel: "TikTok",
      posted: "pending",
      conversions: 892,
      trend: "up",
      cac: 13.87,
      cacVariance: 5.1,
      postsBooked: 2,
      postsTotal: 3,
      postsLive: 1,
      activations: 67,
      reactivations: 28,
      tier: "Average"
    },
    {
      name: "Kitchen Stories",
      handle: "@kitchenstories_uk",
      avatar: "/placeholder.svg", 
      channel: "YouTube",
      posted: "live",
      conversions: 2134,
      trend: "up",
      cac: 9.82,
      cacVariance: -12.4,
      postsBooked: 4,
      postsTotal: 4,
      postsLive: 3,
      activations: 94,
      reactivations: 45,
      tier: "Top"
    },
    {
      name: "French Cuisine",
      handle: "@frenchcuisine",
      avatar: "/placeholder.svg",
      channel: "Instagram", 
      posted: "delayed",
      conversions: 423,
      trend: "down",
      cac: 18.95,
      cacVariance: 23.1,
      postsBooked: 1,
      postsTotal: 2,
      postsLive: 0,
      activations: 34,
      reactivations: 12,
      tier: "Poor"
    },
    {
      name: "Healthy Eats",
      handle: "@healthyeats_de",
      avatar: "/placeholder.svg",
      channel: "Instagram",
      posted: "live",
      conversions: 1567,
      trend: "up",
      cac: 10.45,
      cacVariance: -5.8,
      postsBooked: 2,
      postsTotal: 3,
      postsLive: 2,
      activations: 78,
      reactivations: 25,
      tier: "Top"
    }
  ];

  const getChannelIcon = (channel: string) => {
    const icons = {
      Instagram: "📷",
      TikTok: "🎵", 
      YouTube: "📺",
      Snapchat: "👻"
    };
    return icons[channel as keyof typeof icons] || "📱";
  };

  const getTierBadge = (tier: string) => {
    const styles = {
      Top: "bg-green-900 text-green-300",
      Average: "bg-yellow-900 text-yellow-300", 
      Poor: "bg-red-900 text-red-300"
    };
    return styles[tier as keyof typeof styles];
  };

  return (
    <Card className="bg-[#1A1A1A] border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">Influencer Performance</CardTitle>
          <div className="flex gap-2">
            <Select defaultValue="recent">
              <SelectTrigger className="w-40 bg-[#2A2A2A] border-gray-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2A2A2A] border-gray-700">
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="top">Top Performers</SelectItem>
                <SelectItem value="poor">Poor Performers</SelectItem>
                <SelectItem value="pending">Pending Posts</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-[#FFD700] text-black hover:bg-[#FFA500] border-[#FFD700]">
              Export Data
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Influencer</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Channel</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Conversions</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">CAC</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Posts Booked</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Posts Live</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Activations</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Tier</th>
                </tr>
              </thead>
              <tbody>
                {influencers.map((influencer, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-[#2A2A2A] transition-colors">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={influencer.avatar} />
                          <AvatarFallback className="bg-[#FFD700] text-black text-xs">
                            {influencer.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-white">{influencer.name}</p>
                          <p className="text-xs text-gray-400">{influencer.handle}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getChannelIcon(influencer.channel)}</span>
                        <span className="text-sm text-white">{influencer.channel}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <Badge className={`text-xs ${
                        influencer.posted === 'live' ? 'bg-green-900 text-green-300' :
                        influencer.posted === 'pending' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {influencer.posted === 'live' ? '✅ Live' :
                         influencer.posted === 'pending' ? '⏳ Pending' : '❌ Delayed'}
                      </Badge>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">
                          {influencer.conversions.toLocaleString()}
                        </span>
                        {influencer.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div>
                        <span className="text-sm font-medium text-white">
                          €{influencer.cac.toFixed(2)}
                        </span>
                        <p className={`text-xs ${
                          influencer.cacVariance < 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {influencer.cacVariance > 0 ? '+' : ''}{influencer.cacVariance}%
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="w-20">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>{influencer.postsBooked}</span>
                          <span>{influencer.postsTotal}</span>
                        </div>
                        <Progress 
                          value={(influencer.postsBooked / influencer.postsTotal) * 100} 
                          className="h-2"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="w-20">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>{influencer.postsLive}</span>
                          <span>{influencer.postsTotal}</span>
                        </div>
                        <Progress 
                          value={(influencer.postsLive / influencer.postsTotal) * 100} 
                          className="h-2"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="w-16">
                        <span className="text-sm text-white">{influencer.activations}%</span>
                        <Progress value={influencer.activations} className="h-2 mt-1" />
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <Badge className={getTierBadge(influencer.tier)}>
                        {influencer.tier}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollArea>
        
        {/* Projected Performance Panel */}
        <div className="mt-6 bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
          <h4 className="text-sm font-medium text-white mb-3">Projected Performance - November 2024</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-lg font-bold text-[#FFD700]">47</p>
              <p className="text-xs text-gray-400">Posts Scheduled</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-[#FFD700]">€1.2M</p>
              <p className="text-xs text-gray-400">Projected Sales</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-[#FFD700]">89K</p>
              <p className="text-xs text-gray-400">Expected Conversions</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-[#FFD700]">23%</p>
              <p className="text-xs text-gray-400">Available Capacity</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
