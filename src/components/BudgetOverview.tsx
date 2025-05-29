
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";

export const BudgetOverview = () => {
  const budgetCards = [
    {
      title: "Total Annual Budget",
      value: "€12.5M",
      subtitle: "2024 Allocation",
      icon: TrendingUp,
      iconColor: "text-[#FFD700]"
    },
    {
      title: "YTD Spend",
      value: "€8.9M",
      subtitle: "Available for Q4",
      progress: 71.6,
      icon: TrendingUp,
      iconColor: "text-[#FFD700]"
    },
    {
      title: "Remaining Budget",
      value: "€3.6M",
      subtitle: "Available for Q4",
      icon: TrendingDown,
      iconColor: "text-green-400"
    }
  ];

  const budgetAllocation = "500K EUR";
  const budgetSubtitle = "Q3 2024";

  const marketData = [
    { market: "US", amount: 180, color: "bg-gray-600" },
    { market: "UK", amount: 220, color: "bg-gray-500" },
    { market: "CA", amount: 160, color: "bg-gray-700" },
    { market: "AU", amount: 300, color: "bg-gray-400" },
    { market: "DE", amount: 200, color: "bg-gray-600" },
    { market: "Nordic", amount: 340, color: "bg-gray-500" }
  ];

  const maxAmount = Math.max(...marketData.map(m => m.amount));

  const categories = [
    { name: "BAU 1", amount: "€3.2M", percentage: 35.8, color: "bg-[#FFD700]" },
    { name: "BAU 2", amount: "€2.8M", percentage: 31.3, color: "bg-[#FFD700]" },
    { name: "New Talent", amount: "€2.1M", percentage: 23.5, color: "bg-[#FFD700]" },
    { name: "Agency Fees", amount: "€0.8M", percentage: 9.4, color: "bg-[#FFD700]" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Budget Overview & Management</h2>
      
      {/* Budget Cards */}
      <div className="grid grid-cols-3 gap-4">
        {budgetCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">{card.title}</span>
                <Icon className={`w-4 h-4 ${card.iconColor}`} />
              </div>
              <p className="text-xl font-bold text-white">{card.value}</p>
              {card.progress && (
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>{card.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-[#FFD700]"
                      style={{ width: `${card.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
            </div>
          );
        })}
      </div>

      {/* Budget Allocation Chart */}
      <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-white mb-1">Budget Allocation</h3>
          <p className="text-2xl font-bold text-white">{budgetAllocation}</p>
          <p className="text-xs text-gray-500">{budgetSubtitle}</p>
        </div>
        
        <div className="flex items-end justify-between h-32 gap-2">
          {marketData.map((market, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className={`w-full ${market.color} rounded-t`}
                style={{ height: `${(market.amount / maxAmount) * 100}%` }}
              ></div>
              <span className="text-xs text-gray-400 mt-2">{market.market}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Spend Analysis */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-white">Category Spend Analysis</h3>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
              <span className="text-sm text-white">{category.name}</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium text-white">{category.amount}</span>
              <p className="text-xs text-gray-400">{category.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
