import React, { useState } from 'react';
import { 
  BarChart, 
  Handshake, 
  Settings,   
  TrendingUp, 
  Award, 
  Users,
  X,
  Check 
} from 'lucide-react';

const TransformationSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCategory, setActiveCategory] = useState(0);
  
  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };
  
  const categories = [
    {
      id: 0,
      title: "Financial Transparency",
      icon: BarChart,
      phase: "mvp", // MVP Feature
      before: {
        title: "Fragmented & Opaque",
        description: "Money moves through disconnected systems with limited visibility",
        points: [
          "Financial data trapped in separate systems",
          "No connection between donations and programs",
          "Audit preparation requires weeks of work",
          "No real-time tracking of allocation"
        ]
      },
      after: {
        title: "Connected & Clear",
        description: "Every dollar tracked from donation to impact in a unified system",
        points: [
          { text: "All transactions linked, tagged and timestamped", status: "mvp" },
          { text: "Verifiable map of philanthropy across programs", status: "mvp" },
          { text: "Audit-ready by default, documentation attached", status: "mvp" },
          { text: "Real-time visibility without added work", status: "mvp" }
        ]
      }
    },
    {
      id: 1,
      title: "Demand-Side Funding Alignment",
      icon: Handshake,
      phase: "coming-soon", // Coming Soon
      before: {
        title: "Marketing-Driven",
        description: "Donors make decisions based on limited, curated information",
        points: [
          "Marketing effectiveness trumps true impact visibility",
          "Small organizations struggle for discovery and funding",
          "Donor intent often mismatched with actual needs",
          "Underserved communities lack direct donor access"
        ]
      },
      after: {
        title: "Need-Driven",
        description: "Donors and communities find each other through verified data",
        points: [
          { text: "Funding decisions based on verified financial data", status: "coming-soon" },
          { text: "All organizations visible regardless of size", status: "coming-soon" },
          { text: "Donor intent signals guide resource flow", status: "future" },
          { text: "Communities directly signal needs to funders", status: "future" }
        ]
      }
    },
    {
      id: 2,
      title: "Operational Efficiency",
      icon: Settings,
      phase: "mvp", // MVP Feature
      before: {
        title: "Reactive & Burdensome",
        description: "Staff spend excessive time on documentation and reporting",
        points: [
          "Documentation assembled after the fact",
          "Reporting requires manual data compilation",
          "Board oversight limited by information gaps",
          "High administrative burden for compliance"
        ]
      },
      after: {
        title: "Proactive & Streamlined",
        description: "Systems automatically create audit trails without added effort",
        points: [
          { text: "Documentation attached at point of transaction", status: "mvp" },
          { text: "One-click reporting from verified data", status: "coming-soon" },
          { text: "Board gets complete financial picture instantly", status: "coming-soon" },
          { text: "Compliance built into everyday operations", status: "mvp" }
        ]
      }
    },
    {
      id: 3,
      title: "Strategic Planning",
      icon: TrendingUp,
      phase: "future", // Future Vision
      before: {
        title: "Rearview Mirror",
        description: "Organizations operate on historical data and intuition",
        points: [
          "Funding gaps discovered when it's too late",
          "Limited ability to detect potential issues",
          "Reactive approach to resource allocation",
          "Limited cross-organization insights"
        ]
      },
      after: {
        title: "Forward-Looking",
        description: "AI-powered forecasting enables proactive management",
        points: [
          { text: "Early warning system for potential gaps", status: "future" },
          { text: "Anomaly detection prevents problems", status: "future" },
          { text: "Data-informed strategic planning", status: "coming-soon" },
          { text: "Sector-wide patterns inform strategy", status: "future" }
        ]
      }
    },
    {
      id: 4,
      title: "Sector Credibility",
      icon: Award,
      phase: "coming-soon", // Coming Soon
      before: {
        title: "Defensive Posture",
        description: "Sector constantly defending against negative headlines",
        points: [
          "Public skepticism about overhead costs",
          "Media focus on outlier scandals",
          "Difficulty proving collective impact",
          "Limited evidence for funding approach"
        ]
      },
      after: {
        title: "Confidence & Proof",
        description: "Verifiable data builds credibility and changes perceptions",
        points: [
          { text: "Transparent allocation ratios build trust", status: "mvp" },
          { text: "Aggregate data counters harmful myths", status: "coming-soon" },
          { text: "Collective impact clearly demonstrated", status: "future" },
          { text: "Evidence-based case for flexible funding", status: "future" }
        ]
      }
    },
    {
      id: 5,
      title: "Community Connection",
      icon: Users,
      phase: "future", // Future Vision
      before: {
        title: "Top-Down Reporting",
        description: "Impact reported from organizational perspective only",
        points: [
          "Limited beneficiary validation of claims",
          "Community voice often missing",
          "Self-reported outcomes create skepticism",
          "Disconnect between funders and recipients"
        ]
      },
      after: {
        title: "Multi-Directional Validation",
        description: "Communities actively participate in verification",
        points: [
          { text: "Beneficiary feedback integrated into platform", status: "future" },
          { text: "Community validation closes trust loop", status: "future" },
          { text: "Decentralized verification proves impact", status: "future" },
          { text: "Direct connection from donor to community", status: "future" }
        ]
      }
    }
  ];
  
  const getOverlayOpacity = (side) => {
    if (side === 'left') {
      return (100 - sliderPosition) / 100;
    } else {
      return sliderPosition / 100;
    }
  };
  
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-[#F2F6F7] to-[#C9E5E9] min-h-screen" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl font-bold text-center mb-2 text-[#16243E]">The Traceport Transformation</h1>
        <h2 className="text-xl text-center mb-8 text-[#019AA8]">From Fragmented to Unified, Without Adding Burden</h2>
        
        {/* Legend */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#019AA8] rounded-sm mr-2"></div>
            <span className="text-sm font-medium text-[#16243E]">MVP Feature</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#C9E5E9] rounded-sm mr-2"></div>
            <span className="text-sm font-medium text-[#16243E]">Coming Soon</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-300 rounded-sm mr-2"></div>
            <span className="text-sm font-medium text-[#16243E]">Future Vision</span>
          </div>
        </div>
        
        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                className={`flex items-center p-2 rounded-lg border-2 transition ${
                  activeCategory === index 
                    ? 'bg-[#16243E] text-white border-[#019AA8]' 
                    : 'bg-white text-[#16243E] border-[#C9E5E9] hover:border-[#019AA8]'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <div className={`w-2 h-full rounded-full mr-2 ${
                  category.phase === "mvp" ? "bg-[#019AA8]" : 
                  category.phase === "coming-soon" ? "bg-[#C9E5E9]" : 
                  "bg-gray-300"
                }`}></div>
                <IconComponent 
                  size={24} 
                  className="mr-2" 
                  color={activeCategory === index ? "white" : "#16243E"}
                />
                <div className="flex flex-col">
                  <span className="font-bold">{category.title}</span>
                  <span className="text-xs">
                    {category.phase === "mvp" ? "MVP Feature" : 
                     category.phase === "coming-soon" ? "Coming Soon" : 
                     "Future Vision"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Comparison Slider */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-8 h-96">
          {/* Left Side (Before) */}
          <div 
            className="absolute inset-0 bg-gray-100 overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <div className="absolute inset-0 p-6">
              <div className="flex items-center mb-4">
                {(() => {
                  const IconComponent = categories[activeCategory].icon;
                  return (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                      <IconComponent size={24} color="#16243E" />
                    </div>
                  );
                })()}
                <h3 className="text-xl font-bold text-gray-700">BEFORE: {categories[activeCategory].before.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{categories[activeCategory].before.description}</p>
              
              <div className="bg-white rounded-lg p-4 shadow">
                <ul className="space-y-3 text-[#16243E]">
                  {categories[activeCategory].before.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-2">
                        <X size={16} color="#F43F5E" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Overlay */}
              <div 
                className="absolute inset-0 bg-gray-200 transition-opacity"
                style={{ opacity: getOverlayOpacity('left') }}
              ></div>
            </div>
          </div>
          
          {/* Right Side (After) */}
          <div 
            className="absolute inset-0 bg-[#F2F6F7] overflow-hidden"
            style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
          >
            <div className="absolute inset-0 p-6">
              <div className="flex items-center mb-4">
                {(() => {
                  const IconComponent = categories[activeCategory].icon;
                  return (
                    <div className="w-10 h-10 rounded-full bg-[#019AA8] flex items-center justify-center mr-3">
                      <IconComponent size={24} color="white" />
                    </div>
                  );
                })()}
                <h3 className="text-xl font-bold text-[#16243E]">AFTER: {categories[activeCategory].after.title}</h3>
              </div>
              
              <p className="text-[#16243E] mb-6">{categories[activeCategory].after.description}</p>
              
              <div className="bg-white rounded-lg p-4 shadow">
                <ul className="space-y-3 text-[#16243E]">
                  {categories[activeCategory].after.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <Check size={16} color="#10B981" />
                      </div>
                      <div className="flex items-center">
                        <span>{point.text}</span>
                        {point.status === "mvp" && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-[#019AA8] text-white rounded-full">MVP</span>
                        )}
                        {point.status === "coming-soon" && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-[#C9E5E9] text-[#16243E] rounded-full">Coming Soon</span>
                        )}
                        {point.status === "future" && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-gray-300 text-gray-700 rounded-full">Future</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Overlay */}
              <div 
                className="absolute inset-0 bg-[#F2F6F7] transition-opacity"
                style={{ opacity: getOverlayOpacity('right') }}
              ></div>
            </div>
          </div>
          
          {/* Slider Control */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#16243E] z-10 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            ></div>
            
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#16243E] border-2 border-white z-20 shadow-lg flex items-center justify-center text-white pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-1 h-4 bg-white mx-px"></div>
            </div>
          </div>
          
          {/* Actual Slider Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="absolute bottom-0 left-0 w-full opacity-0 h-full cursor-ew-resize"
          />
        </div>
        
        {/* Key Insight */}
        <div className="bg-[#16243E] text-white p-6 rounded-lg shadow-lg text-center mb-8">
          <h3 className="text-xl font-bold mb-3">What Traceport Unlocks:</h3>
          <p className="text-lg mb-4">{categories[activeCategory].after.title} Without Extra Burden</p>
          <div className={`inline-block mb-4 px-4 py-2 rounded-full text-sm font-bold 
            ${categories[activeCategory].phase === 'mvp' ? 'bg-[#019AA8]' : 
              categories[activeCategory].phase === 'coming-soon' ? 'bg-[#C9E5E9] text-[#16243E]' : 
              'bg-gray-300 text-gray-800'}`}
          >
            {categories[activeCategory].phase === "mvp" ? "Available in MVP Launch" : 
             categories[activeCategory].phase === "coming-soon" ? "Coming in Next Release" : 
             "Future Vision Feature"}
          </div>
          <p className="text-white">
            {(() => {
              const IconComponent = categories[activeCategory].icon;
              return (
                <>
                  <IconComponent size={16} className="inline mr-2" />
                  {categories[activeCategory].title} is 
                  {categories[activeCategory].phase === "mvp" ? " ready now and" : 
                   categories[activeCategory].phase === "coming-soon" ? " coming soon and" : 
                   " part of our future vision and"} 
                  just one of the transformative changes that Traceport enables for the nonprofit sector.
                </>
              );
            })()}
          </p>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-[#019AA8] text-white py-3 px-6 rounded-lg font-bold shadow-lg cursor-pointer hover:bg-[#018a98] transition">
            Experience the Transformation
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationSlider;