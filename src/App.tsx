import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Backtests from './pages/Backtests';
import LiveVsBacktest from './pages/LiveVsBacktest';
import MonthlyPerformance from './pages/MonthlyPerformance';
import AnnualPerformance from './pages/AnnualPerformance';
import BusinessPlan from './pages/BusinessPlan';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/backtests" element={<Backtests />} />
            <Route path="/live-vs-backtest" element={<LiveVsBacktest />} />
            <Route path="/monthly-performance" element={<MonthlyPerformance />} />
            <Route path="/annual-performance" element={<AnnualPerformance />} />
            <Route path="/business-plan" element={<BusinessPlan />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;