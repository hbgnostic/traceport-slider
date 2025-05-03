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
          "Financial records scattered across multiple systems",
          "Donations not clearly linked to specific programs",
          "Audit preparation requires weeks of manual work",
          "No easy way to track how donations are used"
        ]
      },
      after: {
        title: "Connected & Clear",
        description: "Every dollar tracked from receipt to program use in one system",
        points: [
          { text: "All transactions linked, tagged and documented", status: "mvp" },
          { text: "Clear view of how donations support each program", status: "mvp" },
          { text: "Audit-ready documentation automatically attached", status: "mvp" },
          { text: "Real-time visibility without extra work", status: "mvp" }
        ]
      }
    },
    {
      id: 1,
      title: "Donation & Grant Alignment",
      icon: Handshake,
      phase: "coming-soon", // Coming Soon
      before: {
        title: "Marketing-Based",
        description: "Donors decide based on limited, curated information",
        points: [
          "Marketing effectiveness trumps actual program results",
          "Smaller organizations struggle for visibility",
          "Donation purposes often get lost in the system",
          "Limited transparency into how funds are used"
        ]
      },
      after: {
        title: "Evidence-Based",
        description: "Transparent records help donors find organizations aligned with their values",
        points: [
          { text: "Nonprofits share verified donation purposes and uses", status: "mvp" },
          { text: "All organizations visible regardless of size", status: "coming-soon" },
          { text: "Transparency improves donor-nonprofit matching", status: "future" },
          { text: "Program results become trackable and comparable", status: "future" }
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
        description: "Staff spend excessive time on paperwork and reporting",
        points: [
          "Documentation gathered after the fact",
          "Creating reports requires manual data gathering",
          "Board members lack clear financial insights",
          "Compliance work creates administrative burden"
        ]
      },
      after: {
        title: "Proactive & Streamlined",
        description: "Systems automatically create documentation without added effort",
        points: [
          { text: "Documentation attached when money is received", status: "mvp" },
          { text: "One-click reporting from verified records", status: "coming-soon" },
          { text: "Board members see how donations support each program", status: "coming-soon" },
          { text: "Compliance happens as part of everyday work", status: "mvp" }
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
        description: "Organizations make decisions based on outdated information",
        points: [
          "Funding shortages discovered too late",
          "Problems spotted only after they occur",
          "Reactive approach to managing resources",
          "Limited insights across different organizations"
        ]
      },
      after: {
        title: "Forward-Looking",
        description: "Data-driven predictions help organizations plan ahead",
        points: [
          { text: "Early warnings about potential funding gaps", status: "future" },
          { text: "Unusual patterns flagged before becoming problems", status: "future" },
          { text: "Better planning through organized data", status: "coming-soon" },
          { text: "Learning from trends across similar organizations", status: "future" }
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
        description: "Nonprofits constantly defending against criticism",
        points: [
          "Public doubts about administrative costs",
          "News focuses on rare nonprofit scandals",
          "Difficulty showing collective good work",
          "Limited proof of effective funding use"
        ]
      },
      after: {
        title: "Confidence & Proof",
        description: "Verified records build trust and improve public perception",
        points: [
          { text: "Clear breakdown of how donations are used", status: "mvp" },
          { text: "Industry-wide data challenges misperceptions", status: "coming-soon" },
          { text: "Combined impact of nonprofits clearly shown", status: "future" },
          { text: "Data proves the value of unrestricted donations", status: "future" }
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
        description: "Results reported only from the organization's view",
        points: [
          "Limited input from people receiving services",
          "Community perspectives rarely included",
          "Self-reported results create skepticism",
          "Gap between funders and communities served"
        ]
      },
      after: {
        title: "Community-Inclusive Verification",
        description: "People served by nonprofits help confirm actual results",
        points: [
          { text: "Feedback from service recipients included", status: "future" },
          { text: "Community voices confirm organization claims", status: "future" },
          { text: "Multiple sources verify actual results", status: "future" },
          { text: "Direct connection between donors and communities", status: "future" }
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