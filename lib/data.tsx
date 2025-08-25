import iPEK from "@/assets/products/iPEK/Ipek.webp"
import crawler from "@/assets/products/iPEK/mainline crawler.png"
import lateral from "@/assets/products/iPEK/lateral.png"
import pushcam from "@/assets/products/iPEK/pushcam.png"
import zoomcamera from "@/assets/products/iPEK/zoomcamera.png"
import manholecamera from "@/assets/products/iPEK/manholecamera.png"
import videonozzle from "@/assets/products/iPEK/videonozzles.png"
import wincan from "@/assets/products/wincan/wincan.png"
import enz from "@/assets/products/enz/Enz.jpg"
import bulldog37hd from "@/assets/products/enz/Bulldog-37HD.png"
import bulldog60hd from "@/assets/products/enz/Bulldog-60HD-130HD.png"
import rgs from "@/assets/products/enz/rgs-hrh-kbr-kbrv.png"
import ub360 from "@/assets/products/enz/Rohre-ueber-30-mm.png"
import dietmarkaiser from "@/assets/products/dietmarkaiser/dietmarkaiser.jpg"
import dynacombi from "@/assets/products/dietmarkaiser/dyna-combi.jpg"
import envirobot from "@/assets/products/envirobot/envirobot.jpg"
import viperlong from "@/assets/products/envirobot/viper-long.png"
import vipercomapct from "@/assets/products/envirobot/viper-compact.jpg"
import viperlight from "@/assets/products/envirobot/viper-light.jpg"
import sr5 from "@/assets/products/sortimo/sr5.jpg"
import globelst4 from "@/assets/products/sortimo/globelst4.jpg"
import fr5 from "@/assets/products/sortimo/fr5.jpg"
import ims from "@/assets/products/ims/ims Robotics.png"
import imsicon from "@/assets/products/ims/ims.jpg"
import sortimo from '@/assets/products/sortimo/sortimo.jpg'
import falch from '@/assets/products/flach/falch.jpg'
import g349 from '@/assets/products/flach/g349.jpg'
import g624 from '@/assets/products/flach/g624.jpg'
import analyst from "@/assets/products/wincan/Analyst.png"
import map from "@/assets/products/wincan/Map.png"
import manhole from "@/assets/products/wincan/VXManhole.png"
import office from "@/assets/products/wincan/VXOffice.png"
import laserscan from "@/assets/products/wincan/LaserScan.png"
import protouch from "@/assets/products/wincan/ProTouch.png"
import vx3d from "@/assets/products/wincan/WinCan 3D.png"
import web from "@/assets/products/wincan/Web.png"


export const partnerProducts = {
  iPEK: {
    name: "iPEK",
    description: "Leading provider of high-definition camera inspection systems for comprehensive pipe assessment and infrastructure monitoring.",
    logo: iPEK,
    products: [
      {
        id: 1,
        name: "Mainline Inspection Crawlers",
        category: "Push/Pull Camera System",
        image: crawler,
        width: "500",
        height : "2",
        description: "With unmatched power and agility, ROVION is the world’s most trusted CCTV crawler. This compact, 6-wheel-drive system steers through tough underground environments, delivering HD footage and a seamless operating experience. Tool-free wheel and accessory changes, portable build, and modular design limit time wasted at the manhole. Many accessories are also available.",
        keyFeatures: [
          "360° pan/tilt/rotate camera head",
          "HD digital recording capability",
          "Advanced LED lighting system",
          "Mainline crawl distances to 500m",
          " Compatibility in pipe DN100 and up",
          " Optional ATEX rating"
        ],
        specifications: {
          "Pipe Diameter Range": " DN100 and up",
          "Cable Length": "Up to 300m",
          "Camera Resolution": "1920 x 1080 HD",
          "Operating Temperature": "-10°C to +50°C",
          "Power Supply": "240V AC / 24V DC",
          "ATEX rating": " Optional ATEX rating"
        }
      },
      {
        id: 2,
        name: " Lateral Launch Crawlers",
        category: "Mainline Inspection",
        image: lateral,
        width: "500",
        height : "2",
        description: " ROVION SAT II assesses laterals directly from a mainline with unrivaled speed, range, articulation and pushing force. Perform cross bore inspections and locate illicit flows with steerable eight-wheel drive and three on-board cameras. .",
        keyFeatures: [
          "Mainline crawl distances to 300m ",
          " Mainline crawl speeds to 30m/min",
          "Lateral push distances to 45m",
          "Lateral push speeds to 7m/min",
          "Launch from mainlines sized DN150 to DN2000",
          " Launch into laterals sized  DN50 to DN300 ",
          " Optional ATEX rating"
        ],
        specifications: {
          "Pipe Diameter Range": "200mm - 2000mm",
          "Cable Length": "Up to 500m",
          "Camera Resolution": "4K Ultra HD",
          "Operating Temperature": "-20°C to +60°C",
          "Power Supply": "240V AC",
          "Weight": "65kg"
        }
      },
       {
        id: 3,
        name: "Push Cam",
        category: "Push/Pull Camera System",
        image: pushcam,
        width: "500",
        height : "2",
        description: "The AGILIOS system inspects laterals and clean-outs, offering touchscreen recording, defect logging, and up to 90° bend mobility for its pan & tilt camera. The system’s ultralight reel provides maximum stability on rugged job sites, and two battery packs power a full six hours of inspection. Plus, its modular design supports easy maintenance, transport, extensions and upgrades, so you can handle any job, anyhere",
        keyFeatures: [
          "Tablet or pendant control options",
          "Push distances to 100 m",
          "Compatibility in pipe DN50 and up",
          " Optional ATEX rating"
        ],
        specifications: {
          "Pipe Diameter Range": " DN100 and up",
          "Cable Length": "Up to 300m",
          "Camera Resolution": "1920 x 1080 HD",
          "Operating Temperature": "-10°C to +50°C",
          "Power Supply": "240V AC / 24V DC",
          "ATEX rating": " Optional ATEX rating"
        }
      },
       {
        id: 4,
        name: "Zoom Camera",
        category: "Push/Pull Camera System",
        image: zoomcamera,
        width: "400",
        height : "2",
        description: "The wireless, tablet-controlled Quickview airHD rapidly assesses mainlines from the nearest manhole to determine where CCTV, cleaning or rehab is needed. High-powered zoom optics, HD camera and focused Quad-Haloptic illumination maximize sight distance and detail, allowing you to view pipes too damaged for a crawler and avoid confined space entry.",
        keyFeatures: [
          "Mainline sight distances to 120m ",
          "Compatibility in pipe DN150 and up",
          "Portable, cable-free design",
          "Swappable 4-hour batteries for all-day inspection"
        ],
        specifications: {
          "Pipe Diameter Range": " DN100 and up",
          "Cable Length": "Up to 300m",
          "Camera Resolution": "1920 x 1080 HD",
          "Operating Temperature": "-10°C to +50°C",
          "Power Supply": "240V AC / 24V DC",
          "ATEX rating": " Optional ATEX rating"
        }
      },
       {
        id: 5,
        name: "Manhole Camera",
        category: "Push/Pull Camera System",
        image: manholecamera,
        width: "400",
        height : "2",
        description: " With Quickview 360, a single operator can scan up to 80 manholes per day, delivering HD, 360-degree panoramic imaging and 3D pointcloud models ready for export to CAD. Results stream to the cloud  via tablet app, where report generation and AI-powered* observation coding can be automated.",
        keyFeatures: [
          "30’ portable telescopic pole",
          "Pan/tilt controls ",
          "Two cameras and rangefinder for precision measurement ",
        ],
        specifications: {
          "Pipe Diameter Range": " DN100 and up",
          "Cable Length": "Up to 300m",
          "Camera Resolution": "1920 x 1080 HD",
          "Operating Temperature": "-10°C to +50°C",
          "Power Supply": "240V AC / 24V DC",
          "ATEX rating": " Optional ATEX rating"
        }
      },
       {
        id: 6,
        name: "Video Nozzle",
        category: "Push/Pull Camera System",
        image: videonozzle,
        width: "400",
        height : "2",
        description: " Plan cleaning, assess line condition and verify results with the wireless Xpection Lite video nozzle. Captured footage is streamed to a tablet app for rapid understanding of pipe condition. Optimize nozzle choice, check for cross bores and other hazards, and conserve CCTV resources. ",
        keyFeatures: [
          " Crisp, HD video ",
          " Compatibility with any jetter truck hose ",
          "Compatibility with pipe DN200 and up  ",
        ],
        specifications: {
          "Pipe Diameter Range": " DN100 and up",
          "Cable Length": "Up to 300m",
          "Camera Resolution": "1920 x 1080 HD",
          "Operating Temperature": "-10°C to +50°C",
          "Power Supply": "240V AC / 24V DC",
          "ATEX rating": " Optional ATEX rating"
        }
      },
    ]
  },
  wincan: {
    name: "WinCan",
    description: "Industry-leading sewer inspection software trusted by professionals worldwide with comprehensive data management and reporting capabilities.",
    logo: wincan,
    products: [
      {
        id: 1,
        name: "WinCan VX",
        category: "Inspection Software",
        image: wincan,
        width: "500",
        height : "2",
        description: "Complete inspection software solution with advanced analytics and reporting features.",
        keyFeatures: [
          "NASSCO/PACP compliant coding",
          "Automated defect detection",
          "3D visualization capabilities",
          "Comprehensive reporting tools",
          "Multi-language support"
        ],
        specifications: {
          "Database": "SQL Server / PostgreSQL",
          "Video Formats": "AVI, MP4, WMV, MOV",
          "Export Formats": "PDF, Excel, Word, XML",
          "Operating System": "Windows 10/11",
          "RAM Requirements": "8GB minimum, 16GB recommended",
          "Storage": "500GB+ recommended"
        }
      },
           {
        id: 2,
        name: "WinCan VX Manhole",
        category: "Inspection Software",
        image: manhole,
        width: "500",
        height : "2",
        description: "Specialized tools for inspecting manholes, boreholes and deep wells.",
        keyFeatures: [
          "Achieve standards compliance and generate custom reports tailored to the inspection of manholes and deep wells.",
          "Automated defect detection",
          "Comprehensive reporting tools",
          "Multi-language support"
        ],
        specifications: {
          "Database": "SQL Server / PostgreSQL",
          "Video Formats": "AVI, MP4, WMV, MOV",
          "Export Formats": "PDF, Excel, Word, XML",
          "Operating System": "Windows 10/11",
          "RAM Requirements": "8GB minimum, 16GB recommended",
          "Storage": "500GB+ recommended"
        }
      },
        {
        id: 3,
        name: "WinCan VX Office",
        category: "Inspection Software",
        image: office,
        width: "500",
        height : "2",
        description: "Everything you need to analyze and post-process inspections",
        keyFeatures: [
          "Validate, post-process and package inspection data for delivery to the client, as well as generate customized reports.",
          "Comprehensive reporting tools",
          "Multi-language support"
        ],
        specifications: {
          "Database": "SQL Server / PostgreSQL",
          "Video Formats": "AVI, MP4, WMV, MOV",
          "Export Formats": "PDF, Excel, Word, XML",
          "Operating System": "Windows 10/11",
          "RAM Requirements": "8GB minimum, 16GB recommended",
          "Storage": "500GB+ recommended"
        }
      },
        {
        id: 4,
        name: "WinCan Analyst",
        category: "Inspection Software",
        image: analyst,
        width: "500",
        height : "2",
        description: "Allowing municipalities and engineers to analyze and manage collection systems.",
        keyFeatures: [
          "AWinCan Analyst is a software to valuate, manage and analyze Sewer Networks. The software is based on the WinCan VX platform, which secures a direct integration of the inspection data to the analyses of this data, without a need to interchange the data, which could reflect in loss of specific data.",
        ],
        specifications: {
          "Database": "SQL Server / PostgreSQL",
          "Video Formats": "AVI, MP4, WMV, MOV",
          "Export Formats": "PDF, Excel, Word, XML",
          "Operating System": "Windows 10/11",
          "RAM Requirements": "8GB minimum, 16GB recommended",
          "Storage": "500GB+ recommended"
        }
      },
        {
        id: 5,
        name: "WinCan Web",
        category: "Inspection Software",
        image: web,
        width: "500",
        height : "2",
        description: "The cloud solution for secure, browser-based access to WinCan VX inspections",
        keyFeatures: [
          "Browser-based access to inspection data, images and video.",
          "Deliver inspection results immediately and securely",
          "CAllow authorized viewers to generate their own reports from data.",
          "Fast, Easy Sharing"
        ],
        specifications: {
          "Database": "SQL Server / PostgreSQL",
          "Video Formats": "AVI, MP4, WMV, MOV",
          "Export Formats": "PDF, Excel, Word, XML",
          "Operating System": "Windows 10/11",
          "RAM Requirements": "8GB minimum, 16GB recommended",
          "Storage": "500GB+ recommended"
        }
      },
        {
        id: 6,
        name: "WinCan Map",
        category: "Inspection Software",
        image: map,
        width: "500",
        height : "2",
        description: "The geographic information system for sewer networks.",
        keyFeatures: [
          "Navigate and analyze your inspection data using familiar GIS views and tools. WinCan Map VX accepts all major GIS data formats (ESRI, AutoCAD, DXF / DWG, MapInfo, OpenStreetMap, etc.).",
          "Standard Version including all advanced functionalities like GPS connection, transferring Shape Data to WinCan VX, correction of pipe positions, digitizing manholes and pipe assets",
          "Comprehensive reporting tools",
          "Multi-language support"
        ],
        specifications: {
          "Database": "SQL Server / PostgreSQL",
          "Video Formats": "AVI, MP4, WMV, MOV",
          "Export Formats": "PDF, Excel, Word, XML",
          "Operating System": "Windows 10/11",
          "RAM Requirements": "8GB minimum, 16GB recommended",
          "Storage": "500GB+ recommended"
        }
      },
        {
        id: 7,
        name: "WinCan LaserScan",
        category: "Inspection Software",
        image: laserscan,
        width: "500",
        height : "2",
        description: "WRc-certified deformation measurement using laser hardware.",
        keyFeatures: [
          "Generate reports for ovality, capacity and diameter.",
          "View a 3D model of the pipe, and export it to CAD using industry-standard DXF format.",
          "Package your WinCan Laser scans into WinCan's free viewer software.",
          "WinCan Laser is WRc-certified as of July 2014"
        ],
        specifications: {
          "Database": "SQL Server / PostgreSQL",
          "Video Formats": "AVI, MP4, WMV, MOV",
          "Export Formats": "PDF, Excel, Word, XML",
          "Operating System": "Windows 10/11",
          "RAM Requirements": "8GB minimum, 16GB recommended",
          "Storage": "500GB+ recommended"
        }
      },
              {
        id: 8,
        name: "WinCan ProTouch",
        category: "Inspection Software",
        image: protouch,
        width: "500",
        height : "2",
        description: "WRc-certified deformation measurement using laser hardware.",
        keyFeatures: [
          "Touchscreen data entry and a large video display make ProTouch ideal for tablet-based documentation of push camera lateral inspections",
          "Interfaces with WinCan 3D to automatically generate a 3D model of inspected pipes.",
        ],
        specifications: {
          "Database": "SQL Server / PostgreSQL",
          "Video Formats": "AVI, MP4, WMV, MOV",
          "Export Formats": "PDF, Excel, Word, XML",
          "Operating System": "Windows 10/11",
          "RAM Requirements": "8GB minimum, 16GB recommended",
          "Storage": "500GB+ recommended"
        }
      },
              {
        id: 9,
        name: "WinCan 3D",
        category: "Inspection Software",
        image: vx3d,
        width: "500",
        height : "2",
        description: "Visualize collection systems in three dimensions.",
        keyFeatures: [
          "Based on data collected during inspection, WinCan 3D builds a virtual three-dimensional model of pipe infrastructure. Such a model even includes laterals, provided their location, clock position and angle are captured using ProTouch or Photo Assist",
          "3D models can be easily rotated, zoomed and panned, and components of a 3D model can be clicked to highlight the corresponding inspection data",
          "WinCan 3D models can be added to inspection reports, or exported as DXF files for use in CAD."
        ],
        specifications: {
          "Database": "SQL Server / PostgreSQL",
          "Video Formats": "AVI, MP4, WMV, MOV",
          "Export Formats": "PDF, Excel, Word, XML",
          "Operating System": "Windows 10/11",
          "RAM Requirements": "8GB minimum, 16GB recommended",
          "Storage": "500GB+ recommended"
        }
      },
    ]
  },
  enz: {
    name: "enz® technik",
    description: "Innovative solutions for surface, tube, sewer and pipe cleaning with top-quality water jetting technology and equipment.",
    logo: enz,
    products: [
      {
        id: 1,
        name: "Bulldog 37HD",
        category: "Camera Control System",
        image: bulldog37hd,
        width: "300",
        height : "2",
        description: "enz® Bulldog 37HD rotary nozzle is designed for High Performance internal pipe cleaning up to 1000 bar. It can remove even the most stubborn deposits from the pipe walls thanks to its clever combination of tier-3 technology. The ceramic inserts, an excellent water chamber, the constant rotation speed and the no leakage system guaranties the highest water jetting density.",
        keyFeatures: [
          "Best performance for scale removal, surface preparation or cleaning",
          "Cleaning of pipework and heat exchangers – 40mm to 100mm/1.6 to 3.9” Ø - ",
          "Sealed speed control means No Need for daily oiling",
          "All in one nozzle: unplugger, polisher, universal",
          "ealed speed control also means no over-spinning of bearings = LONGER OPERATING LIFE"
        ],
        specifications: {
          "Working Pressure": "Up to 200 bar",
          "Flow Rate": "50-200 L/min",
          "Hose Length": "Up to 150m",
          "Camera Resolution": "Full HD 1080p",
          "Power Supply": "12V/24V DC",
          "Operating Weight": "25kg"
        }
      },
      {
        id: 2,
        name: "Bulldog 60HD-130HD",
        category: "Flexible Shaft System",
        image: bulldog60hd,
        width: "300",
        height : "2",
        description: "The enz® Bulldog 60HD and 130HD rotary nozzle are designed for high performance internal pipe cleaning up to 1000 bar. They can remove even the most stubborn deposits from the pipe walls thanks to their clever combination of tier-3 technology. The ceramic inserts (Bulldog 60HD) and the sapphire inserts with flow straightener (Bulldog 130HD), an excellent water chamber, the constant rotation speed and the no leakage system guaranties the highest water jetting density.",
        keyFeatures: [
          "Cleaning of pipework and heat exchangers – 65 to 150mm/2.6 to 5.9” Ø (Bulldog 60HD) & 140mm to 300mm/5.5 to 11.8” Ø (Bulldog 130HD) -",
          "Best performance for scale removal, surface preparation or cleaning",
        ],
        specifications: {
          "Shaft Diameter": "16mm - 32mm",
          "Maximum Length": "50m",
          "Pipe Diameter Range": "50mm - 300mm",
          "Drive Type": "Pneumatic",
          "Air Pressure": "6-8 bar",
          "Weight": "18kg"
        }
      },
      {
        id: 3,
        name: "RGS, HRH, KBR, KBRV",
        category: "Flexible Shaft System",
        image: rgs,
        width: "300",
        height : "2",
        description: "The maximum power rotating nozzles enz® are most efficient in cleaning the inside wall of pipes with a pressure up to 1000 bar. They are most appropriate to remove harder deposits from the pipe walls and are for tube and pipe cleaning.",
        keyFeatures: [
          "Cleaning of heat exchangers in chemical and nuclear plants",
        ],
        specifications: {
          "Shaft Diameter": "16mm - 32mm",
          "Maximum Length": "50m",
          "Pipe Diameter Range": "50mm - 300mm",
          "Drive Type": "Pneumatic",
          "Air Pressure": "6-8 bar",
          "Weight": "18kg"
        }
      },
      {
        id: 4,
        name: "UB 360",
        category: "Flexible Shaft System",
        image: ub360,
        width: "300",
        height : "2",
        description: "The enz® UB360® is specially designed for internal pipe cleaning up to 1000 bar. Thanks to its clever bearing system, like the Bulldog®,it’s virtually leak-free, resulting in highest cleaning efficiency. It’s intelligent, robust, extending frame is suitable for removing even the most stubbordeposits from pipe walls of 300mm (12”) up to in excess 1200mm (48”) diameter",
        keyFeatures: [
          "Best performance for Large Pipes",
        ],
        specifications: {
          "Shaft Diameter": "16mm - 32mm",
          "Maximum Length": "50m",
          "Pipe Diameter Range": "50mm - 300mm",
          "Drive Type": "Pneumatic",
          "Air Pressure": "6-8 bar",
          "Weight": "18kg"
        }
      },
    ]
  },
  dietmarkaiser: {
    name: "Dietmarkaiser",
    description: "Proven combination of pumps, components and assemblies from our own production making the DYNA Combi unique in the industry.",
    logo: dietmarkaiser,
    products: [
      {
        id: 1,
        name: "DYNA Combi",
        category: "High-Pressure Jetting Unit",
        image: dynacombi,
        width: "500",
        height : "2",
        description: "The proven combination of pumps, components and assemblies from our own production make the DYNA Combi unique.",
        keyFeatures: [
          "Suctioning – jetting – combined operation with water recycling",
          "Enormous tank volumes on a short wheel base",
          "Approved for use in danger areas with ADR-version",
          "Vacuum Pumps from 950 m³/h up to 3100 m³/h – 90 % vacuum",
          "Dead weight: 3-axle approx. 16,4 t; 4-axle approx. 18,0 t"
        ],
        specifications: {
          "Working Pressure": "150 bar",
          "Flow Rate": "75 L/min",
          "Engine Power": "37 kW",
          "Water Tank": "1200 L",
          "Waste Tank": "800 L",
          "Hose Reel": "120m x 19mm"
        }
      },
    ]
  },
  ims: {
    name: "IMS ROBOTICS",
    description: "Modular UV technology solutions designed entirely according to your requirements, whether stand-alone, mobile or permanently installed.",
    logo: imsicon,
    products: [
      {
        id: 1,
        name: "DRIVEpluse",
        category: "UV Disinfection System",
        image: ims,
        width: "500",
        height : "2",
        description: "The DRIVEplus CLEANER enables fast and reliable removal of deposits. concrete other materials using ultra high pressure water up to 2,500 bar. The ultraater pressure adaptation is versatile and suitable for main sewers with diame1rom DN 200 to DN 600. The rotary swivel drive (DSA), which can be rotated.",
        keyFeatures: [
          "Ultra high pressure water cutting up to 2500 bar (36500 psi)",
          "Pneumatic pressure bar for better stability and traction",
          "Manual cable drum with pneumatic and electric rotary feed-through",
          "CLEANER head: rotary swivelling drive (DSA), endlessly rotatable, 45° swivelling, adjustable speed",
          "Colour camera with adjustable LEDs and wiper"
        ],
        specifications: {
          "UV Wavelength": "254nm UV-C",
          "Power Output": "40W",
          "Battery Life": "8 hours continuous",
          "Pipe Diameter": "150mm - 800mm",
          "Speed": "1-10 m/min variable",
          "Weight": "12kg"
        }
      },
    ]
  },
  envirobot: {
    name: "Envirobot",
    description: "VIPER individually to your area of ​​application we offer different variants that fit perfectly to your needs - from the power pack with a particularly large range to the VIPER light, our portable compact solution.",
    logo: envirobot,
    products: [
      {
        id: 1,
        name: "VIPER® long range",
        category: "Steerable Flush Camera",
        image: viperlong,
        width: "300",
        height : "2",
        description: "",
        keyFeatures: [
          "With 265 ft (80 m) hybrid hose (3/8 inch)",
          "Optionally with 230 ft (70 m) hybrid hose (1/2 inch)",
          "W x D x H: 23 x 25 x 28 inch (58 x 64 x 70 cm) (handle retracted)",
          "W x D x H: 23 x 25 x 43 inch (58 x 64 x 110 cm) (handle extended)",
          "Weight 139 lbs (63 Kg) incl. 265 ft (80m) hybrid hose (3/8 inch)"
        ],
        specifications: {
          "Camera Resolution": "1920 x 1080 HD",
          "Pan/Tilt Range": "360° / ±90°",
          "Cable Length": "120m",
          "Pipe Diameter": "75mm - 400mm",
          "Water Pressure": "6-8 bar",
          "Weight": "35kg"
        }
      },
      {
        id: 3,
        name: "VIPER® compact",
        category: "Ultra HD Camera System",
        image: vipercomapct,
        width: "300",
        height : "2",
        description: "",
        keyFeatures: [
          "With 200 ft (60 m) hybrid hose (3/8``)",
          "Optionally with 165 ft (50 m) hybrid hose (1/2``)",
          "W x D x H: 23 x 20 x 28 inch (58 x 52 x 70 cm) (handle retracted)",
          "W x D x H: 23 x 20 x 43 inch (58 x 52 x 110 cm) (handle extended)",
          "Weight 139 lbs (63 Kg) incl. 265 ft (80m) hybrid hose 3/8`` "
        ],
        specifications: {
          "Camera Resolution": "3840 x 2160 4K",
          "Pan/Tilt Range": "360° / ±90°",
          "Cable Length": "200m",
          "Pipe Diameter": "100mm - 600mm",
          "Water Pressure": "8-12 bar",
          "Weight": "45kg"
        }
      },
         {
        id: 4,
        name: "VIPER® Light",
        category: "Ultra HD Camera System",
        image: viperlight,
        width: "300",
        height : "2",
        description: "",
        keyFeatures: [
          "With 100 ft (30 m) hybrid hose (3/8``)",
          "Optionally with 82 ft (25 m) hybrid hose 1/2``",
          "W x D x H: 26 x 9.5 x 29 inch (66 x 24 x 73 cm)",
          "Weight 64 lbs (29 Kg) incl. 100 ft (30 m) hybrid hose 3/8“",
        ],
        specifications: {
          "Camera Resolution": "3840 x 2160 4K",
          "Pan/Tilt Range": "360° / ±90°",
          "Cable Length": "200m",
          "Pipe Diameter": "100mm - 600mm",
          "Water Pressure": "8-12 bar",
          "Weight": "45kg"
        }
      },
    ]
  },
  sortimo: {
    name: "Sortimo",
    description: "Sortimo van rackings Optimise your workflows with the van rackings from Sortimo",
    logo: sortimo,
    products: [
      {
        id: 1,
        name: "SR5 – The next generation",
        category: "Van Racking",
        image: sr5,
        width: "500",
        height : "2",
        description: "Sortimo have developed the fifth generation of van racking - it is an intelligent mobility system which offers the user maximum efficiency in day-to-day working. SR5 embodies more than 50 years of experience, passion and expertise in a single unit. It has been designed so that you can configure it in accordance with your individual requirements and compliant with the sector stipulations in mySortimo configuration. Maximum load area exploitation, perfected workplace organisation and full compatibility with the tried and tested EcoSystem from Sortimo make SR5 the ideal partner in your day-to-day working.",
        keyFeatures: [
          "Tried and tested quality & individuality",
          "Maximum load space utilisation",
          "Can be configured online",
          "Highest productivity",
        ],
        specifications: {
          "Compatiblility": "BOXXes and Cases from Sortimo are the ideal solution for safe and organised transport of tools, machines, small components and consumables",
          "Liner Material": "Polyester felt + resin",
          "Curing Methods": "Hot water, steam, UV",
          "Design Life": "50+ years",
          "Installation Length": "Up to 300m",
          "Pressure Rating": "Up to 6 bar"
        }
      },
      {
        id: 2,
        name: "Globelyst 4 ",
        category: "Van Shelving System",
        image: globelst4,
        width: "500",
        height : "2",
        description: "Globelyst4 van racking – a van shelving system to any challengeGlobelyst4 van racking provides organisation, structure and safety in the transporter. Its intelligent organisation system makes the workflow more targeted and efficient and thus contributes to distinct productivity increase in day-to-day working. Every second that you would otherwise waste on unnecessary searching for tools can be used to earn profit at the customer site thanks to Globelyst4 van racking. The van racking helps tradespeople to structure their tasks in their individual mobile daily routine more professionally, safer and more profitably.",
        keyFeatures: [
          "Increased flexibility on account of a wide variety of individualisation opportunities.",
          "Crash tests and regular quality checks mean that Globelyst4 van racking will withstand extreme situations.",
          "Simple and quick load securing using integrated ProSafe load securing systems in the uprights and cross-beams",
        ],
        specifications: {
          "Repair Length": "0.5m - 3m",
          "Pipe Diameter": "DN100 - DN800",
          "Materials": "Epoxy, polyurethane, silicate",
          "Curing Time": "2-4 hours",
          "Service Life": "25+ years",
          "Working Pressure": "Up to 4 bar"
        }
      },
            {
        id: 3,
        name: "Flex Rack 2.0",
        category: "The flexible racking system ",
        image: fr5,
        width: "500",
        height : "2",
        description: "FR5 – The flexible racking system FR5 is the van racking system specifically designed for courier, express delivery and parcel services. The racking system adapts to individual loading volumes thanks to the shelves’ practical folding function and the adjustable angle of inclination, so that even bulky loads can be stowed easily and transported safely. The integrated ProSafe load securing system makes it easy to secure packages of all sizes, making the day-to-day work of courier drivers much easier. Small parts can be stored in SR-BOXXes, which can be mounted above or below the shelf. This makes FR5 ideal for craftsmen who require maximum flexibility in their van racking system.",
        keyFeatures: [
          "The shelves can be folded up or down with one hand.",
          "FR5 can be individually configured according to personal needs and also adapts to the installation requirements.",
          "for driver and load thanks to ProSafe integration",
          "The ProPartition with door means the loading space can be entered from the driver’s cab.",
          "SR5 on one side, FR5 on the other: this is how maximum customisation works"
        ],
        specifications: {
          "Repair Length": "0.5m - 3m",
          "Pipe Diameter": "DN100 - DN800",
          "Materials": "Epoxy, polyurethane, silicate",
          "Curing Time": "2-4 hours",
          "Service Life": "25+ years",
          "Working Pressure": "Up to 4 bar"
        }
      },

    ]
  },
  falch: {
    name: "Falch",
    description: "Water Jetting MachinesFalch specializes in professional water jetting machines, covering a spectrum from compact mobile units to robust industrial-grade systems. Our portfolio includes:Wheel Jets Base JetsTrail JetsTruck- and Container-Mounted JetsThese systems are designed to handle high-pressure cleaning, removal, and surface restoration tasks.",
    logo: falch,
    products: [
      {
        id: 1,
        name: "wheel jet 2 100-10-0-e",
        category: "Water Jetting Machines",
        image: g349,
        width: "500",
        height : "2",
        description: "Water Jetting MachinesFalch specializes in professional water jetting machines, covering a spectrum from compact mobile units to robust industrial-grade systems. Our portfolio includes:Wheel Jets Base JetsTrail JetsTruck- and Container-Mounted JetsThese systems are designed to handle high-pressure cleaning, removal, and surface restoration tasks.",
        keyFeatures: [
          "Working pressure : 30 – 100 bar (435 – 1450 psi)",
          "Flow rate : 5 – 10 l/min (1,3 – 2,6 US gal/min)",
          "Standard nozzle size : 044",
          "Pump power : 1,8 kW, 2800 rpm, 2800 rpm, 2 – 5 bar, 50 °C",
        ],
        specifications: {
          "Compatiblility": "BOXXes and Cases from Sortimo are the ideal solution for safe and organised transport of tools, machines, small components and consumables",
          "Liner Material": "Polyester felt + resin",
          "Curing Methods": "Hot water, steam, UV",
          "Design Life": "50+ years",
          "Installation Length": "Up to 300m",
          "Pressure Rating": "Up to 6 bar"
        }
      },
      {
        id: 2,
        name: "base jet 125 1500-38-0-d",
        category: "Van Shelving System",
        image: g624,
        width: "500",
        height : "2",
        description: "Water Jetting MachinesFalch specializes in professional water jetting machines, covering a spectrum from compact mobile units to robust industrial-grade systems. Our portfolio includes:Wheel Jets Base JetsTrail JetsTruck- and Container-Mounted JetsThese systems are designed to handle high-pressure cleaning, removal, and surface restoration tasks.",
        keyFeatures: [
          "Working pressure : 300 – 1500 bar (4351 – 21756 psi)",
          "Flow rate : 16 – 38 l/min (4,2 – 10 US gal/min)",
          "Standard nozzle size : 043",
          "Pump power : 110 kW, 221 rpm, 221 – 547 rpm, 2 – 5 bar, 40 °C",
        ],
        specifications: {
          "Repair Length": "0.5m - 3m",
          "Pipe Diameter": "DN100 - DN800",
          "Materials": "Epoxy, polyurethane, silicate",
          "Curing Time": "2-4 hours",
          "Service Life": "25+ years",
          "Working Pressure": "Up to 4 bar"
        }
      },

    ]
  }
};

// Type definitions for better TypeScript support
