import React, { useState, useEffect } from 'react';

const AIAutomationCalculator = () => {
  const [hoursSpent, setHoursSpent] = useState(4);
  const [numStaff, setNumStaff] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [hourlyRate, setHourlyRate] = useState(0);

  const [perStaffDaily, setPerStaffDaily] = useState(0);
  const [perStaffMonthly, setPerStaffMonthly] = useState(0);
  const [perStaffYearly, setPerStaffYearly] = useState(0);

  const [totalDaily, setTotalDaily] = useState(0);
  const [totalMonthly, setTotalMonthly] = useState(0);
  const [totalYearly, setTotalYearly] = useState(0);

  const currencySymbols = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'CAD': 'C$',
    'AUD': 'A$',
    'INR': '₹',
  };

  useEffect(() => {
    // Calculate lost productivity costs
    const dailyLossPerStaff = hoursSpent * hourlyRate;
    const monthlyLossPerStaff = dailyLossPerStaff * 22; // Working days per month
    const yearlyLossPerStaff = dailyLossPerStaff * 260; // Working days per year

    setPerStaffDaily(dailyLossPerStaff);
    setPerStaffMonthly(monthlyLossPerStaff);
    setPerStaffYearly(yearlyLossPerStaff);

    // Calculate total for all staff
    setTotalDaily(dailyLossPerStaff * numStaff);
    setTotalMonthly(monthlyLossPerStaff * numStaff);
    setTotalYearly(yearlyLossPerStaff * numStaff);
  }, [hoursSpent, numStaff, hourlyRate]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(amount));
  };

  const handleHoursSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setHoursSpent(value);
    const percentage = ((value - 0) / (12 - 0)) * 100;
    e.target.style.background = `linear-gradient(to right, #2563eb 0%, #2563eb ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
  };

  const handleStaffSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setNumStaff(value);
    const percentage = ((value - 0) / (20 - 0)) * 100;
    e.target.style.background = `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
  };

  return (
    <div className="calculator-container">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Automation</h2>
        <p className="text-sm text-gray-600">Calculate wasted time and money on manual admin tasks</p>
      </div>

      {/* Hours Spent Slider - Professional Design */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-semibold text-gray-700">
            Hours spent on admin per day
          </label>
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1.5 rounded-full shadow-lg">
            <span className="text-lg font-bold">{hoursSpent}h</span>
          </div>
        </div>

        <div className="relative pt-2 pb-4">
          {/* Track Background */}
          <div className="absolute top-2 left-0 right-0 h-3 bg-gray-200 rounded-full overflow-hidden">
            {/* Filled Progress */}
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-blue-600 rounded-full transition-all duration-300 shadow-md"
              style={{ width: `${((hoursSpent - 0) / (12 - 0)) * 100}%` }}
            ></div>
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min="0"
            max="12"
            value={hoursSpent}
            onChange={(e) => setHoursSpent(parseInt(e.target.value))}
            className="professional-slider w-full relative z-10"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-500 px-1">
          <span className="font-medium">0 hours</span>
          <span className="font-medium">6 hours</span>
          <span className="font-medium">12+ hours</span>
        </div>
      </div>

      {/* Number of Staff Slider - Professional Design */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-semibold text-gray-700">
            Number of staff members
          </label>
          <div className="bg-gradient-to-r from-secondary to-red-600 text-white px-4 py-1.5 rounded-full shadow-lg">
            <span className="text-lg font-bold">{numStaff}</span>
          </div>
        </div>

        <div className="relative pt-2 pb-4">
          {/* Track Background */}
          <div className="absolute top-2 left-0 right-0 h-3 bg-gray-200 rounded-full overflow-hidden">
            {/* Filled Progress */}
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-red-600 rounded-full transition-all duration-300 shadow-md"
              style={{ width: `${((numStaff - 0) / (20 - 0)) * 100}%` }}
            ></div>
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min="0"
            max="20"
            value={numStaff}
            onChange={(e) => setNumStaff(parseInt(e.target.value))}
            className="professional-slider w-full relative z-10"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-500 px-1">
          <span className="font-medium">0 staff</span>
          <span className="font-medium">10 staff</span>
          <span className="font-medium">20+ staff</span>
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

      {/* Hourly Rate */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          Hourly Rate ({currencySymbols[currency]}) - Per Staff Member
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base font-semibold">
            {currencySymbols[currency]}
          </span>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Math.max(0, parseInt(e.target.value) || 0))}
            placeholder="0"
            className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base font-semibold"
          />
        </div>
      </div>

      {/* Per Staff Results */}
      <div className="mb-5">
        <h3 className="text-base font-bold text-gray-800 mb-2">Per Staff Member</h3>
        <div className="space-y-2">
          <div className="result-card">
            <div className="text-xs font-semibold text-gray-600 mb-1">Lost revenue per day</div>
            <div className="result-amount">
              {currencySymbols[currency]}{formatCurrency(perStaffDaily)}
            </div>
          </div>

          <div className="result-card">
            <div className="text-xs font-semibold text-gray-600 mb-1">Lost revenue per month</div>
            <div className="result-amount">
              {currencySymbols[currency]}{formatCurrency(perStaffMonthly)}
            </div>
          </div>

          <div className="result-card">
            <div className="text-xs font-semibold text-gray-600 mb-1">Lost revenue per year</div>
            <div className="result-amount">
              {currencySymbols[currency]}{formatCurrency(perStaffYearly)}
            </div>
          </div>
        </div>
      </div>

      {/* Total Results */}
      <div className="mb-4">
        <h3 className="text-base font-bold text-gray-800 mb-2">Total ({numStaff} staff)</h3>
        <div className="space-y-2">
          <div className="result-card" style={{ background: 'linear-gradient(135deg, #cffafe 0%, #ddd6fe 100%)' }}>
            <div className="text-xs font-semibold text-gray-600 mb-1">Lost revenue per day</div>
            <div className="result-amount">
              {currencySymbols[currency]}{formatCurrency(totalDaily)}
            </div>
          </div>

          <div className="result-card" style={{ background: 'linear-gradient(135deg, #cffafe 0%, #ddd6fe 100%)' }}>
            <div className="text-xs font-semibold text-gray-600 mb-1">Lost revenue per month</div>
            <div className="result-amount">
              {currencySymbols[currency]}{formatCurrency(totalMonthly)}
            </div>
          </div>

          <div className="result-card" style={{ background: 'linear-gradient(135deg, #cffafe 0%, #ddd6fe 100%)' }}>
            <div className="text-xs font-semibold text-gray-600 mb-1">Lost revenue per year</div>
            <div className="result-amount">
              {currencySymbols[currency]}{formatCurrency(totalYearly)}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="btn-primary w-full mt-6 text-base font-bold py-3">
        Automate Your Business - Book Demo
      </button>
    </div>
  );
};

export default AIAutomationCalculator;
