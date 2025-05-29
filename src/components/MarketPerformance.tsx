
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export const MarketPerformance = () => {
  const [expandedMarket, setExpandedMarket] = useState<string | null>(null);
  const [timeView, setTimeView] = useState("monthly");

  const marketData = [
    {
      market: "UK",
      totalBudget: 4200000,
      spent: 3150000,
      remaining: 1050000,
      currentCAC: 11.24,
      budgetUsed: 75,
      percentBooked: 82,
      subMarkets: []
    },
    {
      market: "France", 
      totalBudget: 3100000,
      spent: 2170000,
      remaining: 930000,
      currentCAC: 13.87,
      budgetUsed: 70,
      percentBooked: 67,
      subMarkets: []
    },
    {
      market: "Nordic",
      totalBudget: 2800000,
      spent: 1890000,
      remaining: 910000,
      currentCAC: 12.45,
      budgetUsed: 67.5,
      percentBooked: 74,
      subMarkets: [
        { name: "Sweden", budget: 1200000, spent: 850000, cac: 11.90, booked: 78 },
        { name: "Norway", budget: 900000, spent: 620000, cac: 12.80, booked: 71 },
        { name: "Denmark", budget: 700000, spent: 420000, cac: 13.20, booked: 69 }
      ]
    }
  ];

  const formatCurrency = (amount: number) => {
    return `€${(amount / 1000).toFixed(0)}K`;
  };

  const getBudgetHealthColor = (percentage: number) => {
    if (percentage > 85) return "bg-red-500";
    if (percentage > 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getCACColor = (cac: number) => {
    if (cac < 12) return "text-green-400";
    if (cac < 15) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <Card className="bg-[#1A1A1A] border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">Market Performance Breakdown</CardTitle>
          <Select value={timeView} onValueChange={setTimeView}>
            <SelectTrigger className="w-32 bg-[#2A2A2A] border-gray-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2A2A2A] border-gray-700">
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="ytd">YTD</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Market</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">Total Budget</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">Spent</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">Remaining</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">Current CAC</th>
                <th className="text-center py-3 px-2 text-sm font-medium text-gray-400">% Budget Used</th>
                <th className="text-center py-3 px-2 text-sm font-medium text-gray-400">% Booked</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((market, index) => (
                <>
                  <tr 
                    key={index} 
                    className="border-b border-gray-800 hover:bg-[#2A2A2A] transition-colors cursor-pointer"
                    onClick={() => setExpandedMarket(expandedMarket === market.market ? null : market.market)}
                  >
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        {market.subMarkets.length > 0 && (
                          expandedMarket === market.market ? 
                            <ChevronDown className="w-4 h-4 text-gray-400" /> :
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                        <span className="text-sm font-medium text-white">{market.market}</span>
                        {market.subMarkets.length > 0 && (
                          <Badge className="bg-[#FFD700] text-black text-xs">Group</Badge>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <span className="text-sm text-white">{formatCurrency(market.totalBudget)}</span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <span className="text-sm text-white">{formatCurrency(market.spent)}</span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <span className="text-sm text-white">{formatCurrency(market.remaining)}</span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <span className={`text-sm font-medium ${getCACColor(market.currentCAC)}`}>
                        €{market.currentCAC.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-white">{market.budgetUsed}%</span>
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getBudgetHealthColor(market.budgetUsed)}`}
                            style={{ width: `${market.budgetUsed}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-white">{market.percentBooked}%</span>
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-[#FFD700]"
                            style={{ width: `${market.percentBooked}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Nordic Sub-markets */}
                  {expandedMarket === market.market && market.subMarkets.length > 0 && (
                    market.subMarkets.map((subMarket, subIndex) => (
                      <tr key={`${index}-${subIndex}`} className="bg-[#2A2A2A] border-b border-gray-800">
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-2 ml-6">
                            <span className="text-sm text-gray-300">{subMarket.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-right">
                          <span className="text-sm text-gray-300">{formatCurrency(subMarket.budget)}</span>
                        </td>
                        <td className="py-3 px-2 text-right">
                          <span className="text-sm text-gray-300">{formatCurrency(subMarket.spent)}</span>
                        </td>
                        <td className="py-3 px-2 text-right">
                          <span className="text-sm text-gray-300">{formatCurrency(subMarket.budget - subMarket.spent)}</span>
                        </td>
                        <td className="py-3 px-2 text-right">
                          <span className={`text-sm ${getCACColor(subMarket.cac)}`}>
                            €{subMarket.cac.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm text-gray-300">{Math.round((subMarket.spent / subMarket.budget) * 100)}%</span>
                            <div className="w-12 bg-gray-700 rounded-full h-1.5">
                              <div 
                                className="h-1.5 rounded-full bg-gray-500"
                                style={{ width: `${(subMarket.spent / subMarket.budget) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm text-gray-300">{subMarket.booked}%</span>
                            <div className="w-12 bg-gray-700 rounded-full h-1.5">
                              <div 
                                className="h-1.5 rounded-full bg-[#FFA500]"
                                style={{ width: `${subMarket.booked}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Performance Summary */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Best Performing Market</h4>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">UK</span>
              <Badge className="bg-green-900 text-green-300">€11.24 CAC</Badge>
            </div>
            <p className="text-xs text-gray-500 mt-1">75% budget utilized, 82% booked</p>
          </div>
          
          <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Optimization Opportunity</h4>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">France</span>
              <Badge className="bg-yellow-900 text-yellow-300">€13.87 CAC</Badge>
            </div>
            <p className="text-xs text-gray-500 mt-1">67% booked - capacity available</p>
          </div>
          
          <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Regional Performance</h4>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">Nordic</span>
              <Badge className="bg-blue-900 text-blue-300">Expanding</Badge>
            </div>
            <p className="text-xs text-gray-500 mt-1">3 markets, 74% avg booking rate</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
