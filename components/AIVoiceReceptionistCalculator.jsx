import React, { useState, useEffect } from 'react';

const AIVoiceReceptionistCalculator = () => {
  const [missedCalls, setMissedCalls] = useState(16);
  const [currency, setCurrency] = useState('USD');
  const [avgClientValue, setAvgClientValue] = useState(0);

  const [lostRevenuePerDay, setLostRevenuePerDay] = useState(0);
  const [lostRevenuePerMonth, setLostRevenuePerMonth] = useState(0);
  const [lostRevenuePerYear, setLostRevenuePerYear] = useState(0);

  const currencySymbols = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'CAD': 'C$',
    'AUD': 'A$',
    'INR': '₹',
  };

  useEffect(() => {
    // Calculate lost revenue assuming 20% conversion rate from missed calls
    const conversionRate = 0.20;
    const dailyLoss = missedCalls * avgClientValue * conversionRate;
    const monthlyLoss = dailyLoss * 30;
    const yearlyLoss = dailyLoss * 365;

    setLostRevenuePerDay(dailyLoss);
    setLostRevenuePerMonth(monthlyLoss);
    setLostRevenuePerYear(yearlyLoss);
  }, [missedCalls, avgClientValue]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(amount));
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setMissedCalls(value);
    // Update slider background
    const percentage = ((value - 0) / (50 - 0)) * 100;
    e.target.style.background = `linear-gradient(to right, #2563eb 0%, #2563eb ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
  };

  return (
    <div className="calculator-container">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Voice Receptionist</h2>
        <p className="text-sm text-gray-600">Calculate potential revenue loss from missed calls</p>
      </div>

      {/* Missed Calls Slider - Professional Design */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-semibold text-gray-700">
            Missed calls per day
          </label>
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1.5 rounded-full shadow-lg">
            <span className="text-lg font-bold">{missedCalls}</span>
          </div>
        </div>

        <div className="relative pt-2 pb-4">
          {/* Track Background */}
          <div className="absolute top-2 left-0 right-0 h-3 bg-gray-200 rounded-full overflow-hidden">
            {/* Filled Progress */}
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-blue-600 rounded-full transition-all duration-300 shadow-md"
              style={{ width: `${((missedCalls - 0) / (50 - 0)) * 100}%` }}
            ></div>
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min="0"
            max="50"
            value={missedCalls}
            onChange={(e) => setMissedCalls(parseInt(e.target.value))}
            className="professional-slider w-full relative z-10"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-500 px-1">
          <span className="font-medium">0 calls</span>
          <span className="font-medium">25 calls</span>
          <span className="font-medium">50+ calls</span>
        </div>
      </div>

      {/* Currency Selection */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          Currency
        </label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="INR">INR - Indian Rupee</option>
        </select>
      </div>

      {/* Average Client Value */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          Average client value ({currencySymbols[currency]})
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base font-semibold">
            {currencySymbols[currency]}
          </span>
          <input
            type="number"
            value={avgClientValue}
            onChange={(e) => setAvgClientValue(Math.max(0, parseInt(e.target.value) || 0))}
            placeholder="0"
            className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base font-semibold"
          />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        <div className="result-card">
          <div className="text-xs font-semibold text-gray-600 mb-1">Lost revenue per day</div>
          <div className="result-amount">
            {currencySymbols[currency]}{formatCurrency(lostRevenuePerDay)}
          </div>
        </div>

        <div className="result-card">
          <div className="text-xs font-semibold text-gray-600 mb-1">Lost revenue per month</div>
          <div className="result-amount">
            {currencySymbols[currency]}{formatCurrency(lostRevenuePerMonth)}
          </div>
        </div>

        <div className="result-card">
          <div className="text-xs font-semibold text-gray-600 mb-1">Lost revenue per year</div>
          <div className="result-amount">
            {currencySymbols[currency]}{formatCurrency(lostRevenuePerYear)}
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4 italic">
        *Based on potential revenue from missed call opportunities (20% conversion rate)
      </p>

      {/* CTA Button */}
      <button className="btn-primary w-full mt-6 text-base font-bold py-3">
        Stop Losing Money - Book Demo
      </button>
    </div>
  );
};

export default AIVoiceReceptionistCalculator;
