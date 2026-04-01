// General Assets
import logo from './logo.svg';
import hero2 from './hero2.avif';
import hero from './hero.png';
import aboutUs from './about -us.jpg';
import contactUs from './contact-us.jpg';
import whatsappLogo from './whatsapp-logo.avif';

// Product Cover Images
import batteryPack from './products/battery pack.avif';
import residentialEnergyStorage from './products/residential energy storage.avif';
import gridTieThreePhaseInverter from './products/Grid-Tie Three-Phase Inverter.avif';

// Batteries Category - Battery Pack Series
import batteryPack1 from './products/Batteries/Battery pack series/WechatIMG2827.avif';
import batteryPack2 from './products/Batteries/Battery pack series/WechatIMG2828.avif';
import batteryPack3 from './products/Batteries/Battery pack series/WechatIMG2829.avif';
import batteryPack4 from './products/Batteries/Battery pack series/WechatIMG2830.avif';

// Single Phase Products - All in One Solution
import singlePhaseAllInOne1 from './products/Single-phase products/Single-phase All in one solution/Single-phase All in one solution 1.avif';
import singlePhaseAllInOne2 from './products/Single-phase products/Single-phase All in one solution/Single-phase All in one solution 2.avif';

// Single Phase Products - Hybrid Series
import singlePhaseHybrid from './products/Single-phase products/Single-phase hybrid series/Single-phase hybrid series.avif';

// Three Phase Products - All-in-One Solution (Indoor)
import threePhaseAllInOneIndoor from './products/Three-phase products/Three-Phase All-in-one Solution(Indoor and Outdoor)/Three-Phase All-in-one Solution (indoor)/Three-Phase All-in-one Solution (indoor).avif';

// Three Phase Products - All-in-One Solution (Outdoor)
import threePhaseAllInOneOutdoor from './products/Three-phase products/Three-Phase All-in-one Solution(Indoor and Outdoor)/Three-Phase All-in-one Solution (outdoor)/Three-Phase All-in-one Solution (outdoor).avif';

// Three Phase Products - Grid-on Series
import threePhaseGridOn from './products/Three-phase products/Three-Phase Grid-on Series/Three-Phase Grid-on Series.avif';

// Three Phase Products - Hybrid Series
import threePhaseHybrid from './products/Three-phase products/Three-Phase Hybrid Series/Three-Phase Hybrid Series.avif';
import batteriesCover from './products/Batteries/Batteries.avif';

// Single Phase Products Category
import singlePhaseProductsCover from './products/Single-phase products/Single-phase products.avif';

// Three Phase Products Category  
import threePhaseProductsCover from './products/Three-phase products/Three-phase products.avif';

// Export all assets
export const assets = {
    // General
    logo,
    hero2,
    hero,
    aboutUs,
    contactUs,
    whatsappLogo,
    
    // Products
    batteryPack,
    residentialEnergyStorage,
    gridTieThreePhaseInverter,
    
    // Battery Pack Series
    batteryPack1,
    batteryPack2,
    batteryPack3,
    batteryPack4,
    
    // Single Phase Products
    singlePhaseAllInOne1,
    singlePhaseAllInOne2,
    singlePhaseHybrid,
    
    // Three Phase Products
    threePhaseAllInOneIndoor,
    threePhaseAllInOneOutdoor,
    threePhaseGridOn,
    threePhaseHybrid,
    
    // Category Covers
    batteriesCover,
    singlePhaseProductsCover,
    threePhaseProductsCover,
};

// Product Categories Structure
export const productCategories = {
    batteries: {
        id: 'batteries',
        name: 'Batteries',
        coverImage: batteriesCover,
        description: 'High-performance battery solutions for energy storage',
        subcategories: [
            {
                id: 'battery-pack-series',
                name: 'Battery Pack Series',
                path: 'products/Batteries/Battery pack series/'
            }
        ]
    },
    singlePhase: {
        id: 'single-phase',
        name: 'Single-Phase Products',
        coverImage: singlePhaseProductsCover,
        description: 'Single-phase solar inverter solutions for residential use',
        subcategories: [
            {
                id: 'single-phase-all-in-one',
                name: 'Single-Phase All in One Solution',
                path: 'products/Single-phase products/Single-phase All in one solution/'
            },
            {
                id: 'single-phase-hybrid',
                name: 'Single-Phase Hybrid Series',
                path: 'products/Single-phase products/Single-phase hybrid series/'
            }
        ]
    },
    threePhase: {
        id: 'three-phase',
        name: 'Three-Phase Products',
        coverImage: threePhaseProductsCover,
        description: 'Three-phase solar inverter solutions for commercial and industrial use',
        subcategories: [
            {
                id: 'three-phase-all-in-one',
                name: 'Three-Phase All-in-One Solution',
                path: 'products/Three-phase products/Three-Phase All-in-one Solution(Indoor and Outdoor)/'
            },
            {
                id: 'three-phase-grid-on',
                name: 'Three-Phase Grid-on Series',
                path: 'products/Three-phase products/Three-Phase Grid-on Series/'
            },
            {
                id: 'three-phase-hybrid',
                name: 'Three-Phase Hybrid Series',
                path: 'products/Three-phase products/Three-Phase Hybrid Series/'
            }
        ]
    }
};

// Individual Products
export const products = [
    {
        _id: 'battery-pack',
        name: 'Battery Pack',
        image: [batteryPack],
        category: 'batteries',
        subcategory: 'battery-pack-series',
        description: 'High-capacity battery pack for energy storage systems',
        features: ['Long lifespan', 'High efficiency', 'Safe and reliable']
    },
    {
        _id: 'residential-energy-storage',
        name: 'Residential Energy Storage',
        image: [residentialEnergyStorage],
        category: 'batteries',
        subcategory: null,
        description: 'Complete residential energy storage solution',
        features: ['Home backup power', 'Solar integration', 'Smart monitoring']
    },
    {
        _id: 'grid-tie-three-phase-inverter',
        name: 'Grid-Tie Three-Phase Inverter',
        image: [gridTieThreePhaseInverter],
        category: 'three-phase',
        subcategory: null,
        description: 'Three-phase grid-tie inverter for commercial installations',
        features: ['High efficiency', 'Grid synchronization', 'Remote monitoring']
    }
];

export default assets;
