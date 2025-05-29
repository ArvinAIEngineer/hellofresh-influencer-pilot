
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
      subtitle: "71.6% of budget",
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

  const categories = [
    { name: "BAU 1", amount: "€3.2M", percentage: 35.8, color: "bg-[#FFD700]" },
    { name: "BAU 2", amount: "€2.8M", percentage: 31.3, color: "bg-[#FFD700]" },
    { name: "New Talent", amount: "€2.1M", percentage: 23.5, color: "bg-[#FFD700]" },
    { name: "Agency Fees", amount: "€0.8M", percentage: 9.4, color: "bg-[#FFD700]" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Budget Overview & Management</h2>
        
        {/* Budget Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {budgetCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  <span className="text-sm font-medium text-green-400">
                    {card.progress ? `${card.progress}%` : '+15.7%'}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">{card.value}</p>
                  <p className="text-sm text-gray-400">{card.title}</p>
                  <p className="text-xs text-gray-500">{card.subtitle}</p>
                </div>
                {card.progress && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-[#FFD700]"
                        style={{ width: `${card.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Category Spend Analysis */}
        <div className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
          <h3 className="text-sm font-medium text-white mb-4">Category Spend Analysis</h3>
          <div className="space-y-3">
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
      </div>
    </div>
  );
};
