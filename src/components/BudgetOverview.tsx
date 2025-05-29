
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

export const BudgetOverview = () => {
  const budgetData = {
    global: {
      total: 12500000,
      spent: 8947000,
      remaining: 3553000,
      burnRate: 847000
    },
    markets: [
      { name: "UK", budget: 4200000, spent: 3150000, remaining: 1050000, utilization: 75 },
      { name: "France", budget: 3100000, spent: 2170000, remaining: 930000, utilization: 70 },
      { name: "Nordic", budget: 2800000, spent: 1890000, remaining: 910000, utilization: 67.5 }
    ],
    categories: [
      { name: "BAU 1", spent: 3200000, percentage: 35.8 },
      { name: "BAU 2", spent: 2800000, percentage: 31.3 },
      { name: "New Talent", spent: 2100000, percentage: 23.5 },
      { name: "Agency Fees", spent: 847000, percentage: 9.4 }
    ]
  };

  const formatCurrency = (amount: number) => {
    return `€${(amount / 1000000).toFixed(1)}M`;
  };

  const getBudgetHealthColor = (utilization: number) => {
    if (utilization > 85) return "text-red-400";
    if (utilization > 70) return "text-yellow-400"; 
    return "text-green-400";
  };

  return (
    <Card className="bg-[#1A1A1A] border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">Budget Overview & Management</CardTitle>
          <Badge className="bg-[#FFD700] text-black hover:bg-[#FFA500]">
            Updated Daily
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Global Budget Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Total Annual Budget</span>
              <TrendingUp className="w-4 h-4 text-[#FFD700]" />
            </div>
            <p className="text-2xl font-bold text-white">{formatCurrency(budgetData.global.total)}</p>
            <p className="text-xs text-gray-500">2024 Allocation</p>
          </div>
          
          <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">YTD Spend</span>
              <span className="text-sm font-medium text-yellow-400">71.6%</span>
            </div>
            <p className="text-2xl font-bold text-white">{formatCurrency(budgetData.global.spent)}</p>
            <Progress value={71.6} className="mt-2 h-2" />
          </div>
          
          <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Remaining Budget</span>
              <TrendingDown className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-2xl font-bold text-white">{formatCurrency(budgetData.global.remaining)}</p>
            <p className="text-xs text-gray-500">Available for Q4</p>
          </div>
          
          <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Monthly Burn Rate</span>
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
            </div>
            <p className="text-2xl font-bold text-white">{formatCurrency(budgetData.global.burnRate)}</p>
            <p className="text-xs text-yellow-400">Above Target</p>
          </div>
        </div>

        {/* Market Level Breakdown */}
        <div>
          <h4 className="text-sm font-medium text-white mb-3">Market Budget Allocation</h4>
          <div className="space-y-3">
            {budgetData.markets.map((market, index) => (
              <div key={index} className="bg-[#2A2A2A] rounded-lg p-3 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{market.name}</span>
                  <span className={`text-sm font-medium ${getBudgetHealthColor(market.utilization)}`}>
                    {market.utilization}%
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Spent: {formatCurrency(market.spent)}</span>
                  <span>Budget: {formatCurrency(market.budget)}</span>
                </div>
                <Progress value={market.utilization} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Category Spend Analysis */}
        <div>
          <h4 className="text-sm font-medium text-white mb-3">Category Spend Analysis</h4>
          <div className="space-y-2">
            {budgetData.categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
                  <span className="text-sm text-white">{category.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-white">{formatCurrency(category.spent)}</span>
                  <p className="text-xs text-gray-400">{category.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Health Indicators */}
        <div className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700">
          <h4 className="text-sm font-medium text-white mb-3">Budget Health Alerts</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span className="text-xs text-white">UK market 85% utilized - approaching limit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-xs text-white">Monthly burn rate 12% above target</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs text-white">Nordic markets showing strong ROI efficiency</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
