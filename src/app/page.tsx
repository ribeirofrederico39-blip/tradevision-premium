'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  TrendingUp, 
  TrendingDown, 
  Bell, 
  BarChart3, 
  History, 
  Users, 
  User, 
  Home,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Target,
  Activity,
  MessageCircle,
  Settings,
  ChevronRight,
  Zap,
  Eye,
  DollarSign,
  Brain,
  Shield,
  Sparkles,
  Layers,
  Globe,
  Wifi,
  Star,
  Award,
  Flame,
  Bolt,
  Radar,
  Cpu,
  Database,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart,
  PieChart,
  LineChart,
  Briefcase,
  Wallet,
  CreditCard,
  Smartphone,
  Monitor,
  Headphones,
  Search,
  Filter,
  Calendar,
  Download,
  Share,
  Bookmark,
  Heart,
  ThumbsUp,
  Send,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RefreshCw,
  Loader,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Move,
  Resize,
  MoreHorizontal,
  MoreVertical,
  Menu,
  Grid,
  List,
  Map,
  Image,
  Video,
  Music,
  File,
  Folder,
  FolderOpen,
  Archive,
  Inbox,
  Mail,
  Phone,
  MessageSquare,
  Mic,
  Camera,
  Paperclip,
  Link as LinkIcon,
  Hash,
  AtSign,
  Percent,
  Slash,
  Backslash,
  Pipe,
  Ampersand,
  Asterisk,
  Equal,
  NotEqual,
  LessThan,
  GreaterThan,
  LessEqual,
  GreaterEqual,
  PlusCircle,
  MinusCircle,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  BankNote,
  Coins,
  Receipt,
  Calculator,
  Scale,
  Ruler,
  Compass,
  MapPin,
  Navigation,
  Locate,
  Route,
  Car,
  Truck,
  Bus,
  Train,
  Plane,
  Ship,
  Bike,
  Walk,
  Run,
  Battery,
  BatteryLow,
  Plug,
  Power,
  PowerOff,
  WifiOff,
  Bluetooth,
  Radio,
  Signal,
  Antenna,
  Satellite,
  Router,
  Server,
  HardDrive,
  SdCard,
  Usb,
  Cable,
  Ethernet,
  Rss,
  Podcast,
  Tv,
  Gamepad2,
  Joystick,
  Dices,
  Puzzle,
  Trophy,
  Medal,
  Crown,
  Gift,
  PartyPopper,
  Cake,
  Coffee
} from 'lucide-react'
import { useCountUp, useRealTimeData, useInView } from '@/hooks'

// Tipos avançados
interface MarketData {
  asset: string
  price: number
  change: number
  trend: 'up' | 'down'
  volume: number
  high24h: number
  low24h: number
  marketCap: number
  sentiment: 'bullish' | 'bearish' | 'neutral'
  volatility: 'low' | 'medium' | 'high'
}

interface AdvancedSignal {
  id: string
  asset: string
  type: 'buy' | 'sell'
  price: number
  time: string
  status: 'ativo' | 'expirada' | 'executado'
  confidence: number
  target: number
  stopLoss: number
  riskReward: number
  timeframe: '1m' | '5m' | '15m' | '1h' | '4h' | '1d'
  strategy: string
  aiScore: number
}

interface TechnicalIndicator {
  name: string
  value: number | string
  signal: 'bullish' | 'bearish' | 'neutral'
  strength: number
}

interface NewsItem {
  id: string
  title: string
  summary: string
  impact: 'high' | 'medium' | 'low'
  sentiment: 'positive' | 'negative' | 'neutral'
  time: string
  source: string
}

interface Portfolio {
  totalValue: number
  totalPnL: number
  totalPnLPercent: number
  positions: Position[]
}

interface Position {
  asset: string
  quantity: number
  avgPrice: number
  currentPrice: number
  pnl: number
  pnlPercent: number
  allocation: number
}

export default function TradeVision() {
  // Dados mock avançados com simulação em tempo real
  const { data: marketData } = useRealTimeData<MarketData[]>([
    { 
      asset: 'BTC/USD', 
      price: 43250.80, 
      change: 2.45, 
      trend: 'up',
      volume: 28500000000,
      high24h: 44100,
      low24h: 42800,
      marketCap: 847000000000,
      sentiment: 'bullish',
      volatility: 'high'
    },
    { 
      asset: 'ETH/USD', 
      price: 2680.50, 
      change: -1.23, 
      trend: 'down',
      volume: 15200000000,
      high24h: 2720,
      low24h: 2650,
      marketCap: 322000000000,
      sentiment: 'bearish',
      volatility: 'medium'
    },
    { 
      asset: 'EUR/USD', 
      price: 1.0845, 
      change: 0.67, 
      trend: 'up',
      volume: 1200000000,
      high24h: 1.0867,
      low24h: 1.0823,
      marketCap: 0,
      sentiment: 'neutral',
      volatility: 'low'
    },
    { 
      asset: 'GBP/USD', 
      price: 1.2634, 
      change: -0.34, 
      trend: 'down',
      volume: 890000000,
      high24h: 1.2678,
      low24h: 1.2612,
      marketCap: 0,
      sentiment: 'bearish',
      volatility: 'medium'
    }
  ], 3000, (data) => 
    data.map(item => ({
      ...item,
      price: item.price * (1 + (Math.random() - 0.5) * 0.002),
      change: item.change + (Math.random() - 0.5) * 0.1,
      trend: Math.random() > 0.5 ? 'up' : 'down'
    }))
  )

  const advancedSignals: AdvancedSignal[] = [
    { 
      id: '1', 
      asset: 'BTC/USD', 
      type: 'buy', 
      price: 43100, 
      time: '14:30', 
      status: 'ativo', 
      confidence: 85,
      target: 44500,
      stopLoss: 42600,
      riskReward: 2.8,
      timeframe: '4h',
      strategy: 'Breakout + RSI Divergence',
      aiScore: 92
    },
    { 
      id: '2', 
      asset: 'ETH/USD', 
      type: 'sell', 
      price: 2690, 
      time: '14:15', 
      status: 'ativo', 
      confidence: 78,
      target: 2580,
      stopLoss: 2720,
      riskReward: 3.7,
      timeframe: '1h',
      strategy: 'Support Break + Volume',
      aiScore: 87
    },
    { 
      id: '3', 
      asset: 'EUR/USD', 
      type: 'buy', 
      price: 1.0840, 
      time: '13:45', 
      status: 'executado', 
      confidence: 92,
      target: 1.0890,
      stopLoss: 1.0820,
      riskReward: 2.5,
      timeframe: '1d',
      strategy: 'Trend Following + MA Cross',
      aiScore: 95
    }
  ]

  const technicalIndicators: TechnicalIndicator[] = [
    { name: 'RSI (14)', value: 68.5, signal: 'neutral', strength: 65 },
    { name: 'MACD', value: '+125.8', signal: 'bullish', strength: 78 },
    { name: 'MA (20)', value: 42890, signal: 'bullish', strength: 82 },
    { name: 'Bollinger Bands', value: 'Upper', signal: 'bearish', strength: 45 },
    { name: 'Stochastic', value: 72.3, signal: 'neutral', strength: 58 },
    { name: 'Williams %R', value: -28.7, signal: 'bullish', strength: 71 }
  ]

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Bitcoin ETF Approval Drives Institutional Interest',
      summary: 'Major financial institutions are increasing their Bitcoin allocations following recent regulatory clarity.',
      impact: 'high',
      sentiment: 'positive',
      time: '2h',
      source: 'CryptoNews'
    },
    {
      id: '2',
      title: 'Federal Reserve Hints at Rate Cuts',
      summary: 'Fed officials suggest potential monetary policy easing could benefit risk assets.',
      impact: 'high',
      sentiment: 'positive',
      time: '4h',
      source: 'Financial Times'
    },
    {
      id: '3',
      title: 'Ethereum Network Upgrade Shows Promise',
      summary: 'Latest network improvements demonstrate significant scalability gains.',
      impact: 'medium',
      sentiment: 'positive',
      time: '6h',
      source: 'TechCrunch'
    }
  ]

  const portfolio: Portfolio = {
    totalValue: 125430.50,
    totalPnL: 8750.25,
    totalPnLPercent: 7.5,
    positions: [
      { asset: 'BTC', quantity: 1.25, avgPrice: 41200, currentPrice: 43250, pnl: 2562.50, pnlPercent: 4.97, allocation: 45.2 },
      { asset: 'ETH', quantity: 15.8, avgPrice: 2580, currentPrice: 2680, pnl: 1580.00, pnlPercent: 3.88, allocation: 35.1 },
      { asset: 'EUR/USD', quantity: 50000, avgPrice: 1.0820, currentPrice: 1.0845, pnl: 1250.00, pnlPercent: 2.31, allocation: 19.7 }
    ]
  }

  // Componente de Dashboard Premium
  const DashboardScreen = () => {
    const [setRef, inView] = useInView()
    const totalValue = useCountUp(portfolio.totalValue, 2000)
    const totalPnL = useCountUp(portfolio.totalPnL, 2000)

    return (
      <div className="space-y-4 sm:space-y-6 lg:space-y-8" ref={setRef}>
        {/* Header com efeito glassmorphism */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#00FF88]/10 via-transparent to-[#0066FF]/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/5 to-[#0066FF]/5 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-[#B3B3B3] bg-clip-text text-transparent">
                  TradeVision AI
                </h1>
                <p className="text-[#B3B3B3] mt-1 text-sm sm:text-base">Powered by Advanced Machine Learning</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="flex items-center space-x-2 bg-[#00FF88]/20 rounded-xl px-3 sm:px-4 py-2 border border-[#00FF88]/30">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF88]" />
                  <span className="text-[#00FF88] font-medium text-sm">AI Active</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 rounded-xl px-2 sm:px-3 py-2">
                  <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse"></div>
                  <span className="text-[#00FF88] text-xs sm:text-sm font-medium">Live</span>
                </div>
              </div>
            </div>

            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00FF88] to-[#00CC6A] rounded-xl flex items-center justify-center">
                      <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-[#B3B3B3] text-xs sm:text-sm">Portfolio Total</p>
                      <p className="text-lg sm:text-2xl font-bold text-white" suppressHydrationWarning>${inView ? totalValue.toLocaleString() : '0'}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#00FF88]" />
                  <span className="text-[#00FF88] font-medium text-sm">+{portfolio.totalPnLPercent}%</span>
                  <span className="text-[#B3B3B3] text-xs sm:text-sm">24h</span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#0066FF] to-[#0052CC] rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[#B3B3B3] text-xs sm:text-sm">Total P&L</p>
                      <p className="text-lg sm:text-2xl font-bold text-[#00FF88]" suppressHydrationWarning>+${inView ? totalPnL.toLocaleString() : '0'}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#00FF88]" />
                  <span className="text-[#00FF88] font-medium text-sm">Profitable</span>
                  <span className="text-[#B3B3B3] text-xs sm:text-sm">All time</span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#FF6B6B] to-[#FF5252] rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[#B3B3B3] text-xs sm:text-sm">Win Rate</p>
                      <p className="text-lg sm:text-2xl font-bold text-white">78.5%</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD700]" />
                  <span className="text-[#FFD700] font-medium text-sm">Excellent</span>
                  <span className="text-[#B3B3B3] text-xs sm:text-sm">Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Overview com gráficos avançados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#00FF88]" />
                Market Pulse
              </h2>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse"></div>
                <span className="text-[#00FF88] text-xs sm:text-sm">Real-time</span>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {Array.isArray(marketData) && marketData.map((item, index) => (
                <div key={index} className="group bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:border-[#00FF88]/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                        item.trend === 'up' ? 'bg-[#00FF88]/20' : 'bg-[#FF4D4D]/20'
                      }`}>
                        {item.trend === 'up' ? (
                          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#00FF88]" />
                        ) : (
                          <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D4D]" />
                        )}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm sm:text-base">{item.asset}</div>
                        <div className="text-[#B3B3B3] text-xs sm:text-sm" suppressHydrationWarning>Vol: ${(item.volume / 1000000000).toFixed(1)}B</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-sm sm:text-lg" suppressHydrationWarning>
                        ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
                      </div>
                      <div className={`text-xs sm:text-sm font-medium ${
                        item.trend === 'up' ? 'text-[#00FF88]' : 'text-[#FF4D4D]'
                      }`} suppressHydrationWarning>
                        {item.trend === 'up' ? '+' : ''}{item.change.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Mini chart simulation */}
                  <div className="mt-3 sm:mt-4 h-8 sm:h-12 flex items-end space-x-1">
                    {Array.from({length: 20}).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1 rounded-sm transition-all duration-300 ${
                          item.trend === 'up' ? 'bg-[#00FF88]' : 'bg-[#FF4D4D]'
                        }`}
                        style={{
                          height: `${((i * 7 + index * 3) % 30) + 10}px`,
                          opacity: 0.3 + (i / 20) * 0.7
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights Panel */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#0066FF]" />
                AI Insights
              </h2>
              <div className="flex items-center space-x-2 bg-[#0066FF]/20 rounded-lg px-2 sm:px-3 py-1">
                <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-[#0066FF]" />
                <span className="text-[#0066FF] text-xs sm:text-sm font-medium">GPT-4</span>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gradient-to-r from-[#00FF88]/10 to-transparent rounded-xl p-3 sm:p-4 border border-[#00FF88]/20">
                <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#00FF88]/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#00FF88]" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm sm:text-base">Market Sentiment</div>
                    <div className="text-[#00FF88] text-xs sm:text-sm">Bullish Momentum</div>
                  </div>
                </div>
                <p className="text-[#B3B3B3] text-xs sm:text-sm">
                  AI detects strong buying pressure across major assets. Institutional flow suggests continued upward movement.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#0066FF]/10 to-transparent rounded-xl p-3 sm:p-4 border border-[#0066FF]/20">
                <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#0066FF]/20 rounded-lg flex items-center justify-center">
                    <Radar className="w-3 h-3 sm:w-4 sm:h-4 text-[#0066FF]" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm sm:text-base">Risk Assessment</div>
                    <div className="text-[#0066FF] text-xs sm:text-sm">Moderate Risk</div>
                  </div>
                </div>
                <p className="text-[#B3B3B3] text-xs sm:text-sm">
                  Volatility levels are within acceptable ranges. Recommended position sizing: 2-3% per trade.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FFD700]/10 to-transparent rounded-xl p-3 sm:p-4 border border-[#FFD700]/20">
                <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <Bolt className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFD700]" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm sm:text-base">Opportunity Alert</div>
                    <div className="text-[#FFD700] text-xs sm:text-sm">High Probability</div>
                  </div>
                </div>
                <p className="text-[#B3B3B3] text-xs sm:text-sm">
                  BTC showing breakout pattern with 85% historical success rate. Consider long position.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Signals */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#FFD700]" />
              Premium Signals
            </h2>
            <div className="flex items-center space-x-2">
              <div className="text-[#00FF88] text-xs sm:text-sm font-medium">{advancedSignals.filter(s => s.status === 'ativo').length} Active</div>
              <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {advancedSignals.slice(0, 2).map((signal) => (
              <div key={signal.id} className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:border-[#00FF88]/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${
                      signal.type === 'buy' ? 'bg-[#00FF88]/20' : 'bg-[#FF4D4D]/20'
                    }`}>
                      {signal.type === 'buy' ? (
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF88]" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4D4D]" />
                      )}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">{signal.asset}</div>
                      <div className="text-[#B3B3B3] text-xs sm:text-sm">{signal.strategy}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-[#0066FF]" />
                      <span className="text-[#0066FF] text-xs sm:text-sm font-medium">{signal.aiScore}</span>
                    </div>
                    <div className="text-[#B3B3B3] text-xs">{signal.timeframe}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <div className="text-[#B3B3B3] text-xs">Entry</div>
                    <div className="text-white font-medium text-sm">${signal.price}</div>
                  </div>
                  <div>
                    <div className="text-[#B3B3B3] text-xs">Target</div>
                    <div className="text-[#00FF88] font-medium text-sm">${signal.target}</div>
                  </div>
                  <div>
                    <div className="text-[#B3B3B3] text-xs">R:R</div>
                    <div className="text-[#FFD700] font-medium text-sm">{signal.riskReward}:1</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#B3B3B3] text-xs sm:text-sm">Confidence:</span>
                    <span className="text-white font-medium text-xs sm:text-sm">{signal.confidence}%</span>
                  </div>
                  <div className="w-16 sm:w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00FF88] to-[#00CC6A] transition-all duration-500"
                      style={{ width: `${signal.confidence}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Navegação Premium
  const Navigation = () => (
    <nav className="bg-white/5 backdrop-blur-xl border-t border-white/10 px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-around max-w-2xl mx-auto">
        {[
          { id: 'dashboard', icon: Home, label: 'Dashboard', href: '/' },
          { id: 'signals', icon: Zap, label: 'Signals', href: '/signals' },
          { id: 'charts', icon: BarChart3, label: 'Charts', href: '/charts' },
          { id: 'portfolio', icon: Briefcase, label: 'Portfolio', href: '/portfolio' },
          { id: 'news', icon: Globe, label: 'News', href: '/news' },
          { id: 'history', icon: History, label: 'History', href: '/history' },
          { id: 'community', icon: Users, label: 'Community', href: '/community' },
          { id: 'profile', icon: User, label: 'Profile', href: '/profile' }
        ].map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center space-y-1 p-2 sm:p-3 rounded-xl transition-all duration-300 group text-[#B3B3B3] hover:text-white hover:scale-105 min-w-0`}
          >
            <div className="p-1 sm:p-2 rounded-lg transition-all duration-300 group-hover:bg-white/10">
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xs font-medium truncate hidden sm:block">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 via-transparent to-[#0066FF]/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF88]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <main className="flex-1 p-3 sm:p-4 lg:p-6 pb-20 sm:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <DashboardScreen />
        </div>
      </main>
      <Navigation />
    </div>
  )
}
