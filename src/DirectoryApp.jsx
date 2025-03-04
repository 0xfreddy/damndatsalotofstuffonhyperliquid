import React, { useState, useEffect, useRef } from "react";
import { Twitter, Scroll, LayoutGrid, Network } from "lucide-react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Select from 'react-select';

const DirectoryApp = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const nodesRef = useRef({});
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const projectImages = useRef({});
  const [cryptoPrice, setCryptoPrice] = useState(null);
  const [activeView, setActiveView] = useState("canvas");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const [selectedProject, setSelectedProject] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [viewMode, setViewMode] = useState('graph'); // 'graph' or 'directory'
  const [hoverTooltip, setHoverTooltip] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const items = [
    {
      id: 1,
      name: "felix",
      tags: ["Defi"],
      twitter: "https://x.com/felixprotocol",
      logo: "/images/logos/felix-logo.png",
    },
    {
      id: 2,
      name: "HyperDitto",
      tags: ["Tools"],
      twitter: "https://x.com/hyperditto",
      logo: "/images/logos/hyperditto.png",
    },
    {
      id: 3,
      name: "hyperland",
      tags: ["Defi", "Staking"],
      twitter: "https://x.com/hyperlendx",
      logo: "/images/logos/hyperland-logo.png",
    },
    {
      id: 4,
      name: "stHYPE",
      tags: ["Staking", "Defi"],
      twitter: "https://x.com/stakedhype",
      logo: "/images/logos/sthype-logo.png",
    },
    {
      id: 5,
      name: "Katōshi",
      tags: ["Trading", "Data"],
      twitter: "https://x.com/KatoshiAI",
      logo: "/images/logos/katoshi-logo.png",
    },
    {
      id: 6,
      name: "HyperSwap",
      tags: ["Dex", "Tools"],
      twitter: "https://x.com/HyperSwapX",
      logo: "/images/logos/hyperswap-logo.png",
    },
    {
      id: 7,
      name: "Kinetiq",
      tags: ["LST"],
      twitter: "https://x.com/kinetiq_xyz",
      logo: "/images/logos/kinetiq-logo.png",
    },
    {
      id: 8,
      name: "HyBridge",
      tags: ["Infra"],
      twitter: "https://x.com/HyBridgeHL",
      logo: "/images/logos/hybridge-logo.png",
    },
    {
      id: 9,
      name: "HL Names",
      tags: ["Tools", "Social"],
      twitter: "https://x.com/hlnames",
      logo: "/images/logos/hl-names-logo.png",
    },
    {
      id: 10,
      name: "fanfun",
      tags: ["Social", "Meme"],
      twitter: "https://x.com/fan_dot_fun",
      logo: "/images/logos/funfun-logo.png",
    },
    {
      id: 11,
      name: "Kieko Finance",
      tags: ["Defi"],
      twitter: "https://x.com/KeikoFinance",
      logo: "/images/logos/kieko-finance-logo.png",
    },
    {
      id: 12,
      name: "HFun",
      tags: ["Trading", "Social"],
      twitter: "https://x.com/Hypurrfun",
      logo: "/images/logos/hfun-logo.png",
    },
    {
      id: 13,
      name: "pvp.trade",
      tags: ["Trading", "Social"],
      twitter: "https://x.com/pvp_dot_trade",
      logo: "/images/logos/pvp-trade-logo.png",
    },
    {
      id: 14,
      name: "HyperFun",
      tags: ["GambleFi"],
      twitter: "https://x.com/hyperfunX",
      logo: "/images/logos/hyperfun-logo.png",
    },
    {
      id: 15,
      name: "PurrBurn",
      tags: ["Data"],
      twitter: "https://x.com/janklimo",
      logo: "/images/logos/purrburn-logo.png",
    },
    {
      id: 16,
      name: "Hypurrscan",
      tags: ["Explorer", "Data"],
      twitter: "https://x.com/HypurrScan",
      logo: "/images/logos/hypurrscan-logo.png",
    },
    {
      id: 17,
      name: "Yeeti",
      tags: ["Meme"],
      twitter: "https://x.com/YeetiOnHL",
      logo: "/images/logos/yeeti-logo.png",
    },
    {
      id: 18,
      name: "Catbal",
      tags: ["Meme"],
      twitter: "https://x.com/CatCabal_hl",
      logo: "/images/logos/catcabal-logo.png",
    },
    {
      id: 19,
      name: "Pip",
      tags: ["Meme"],
      twitter: "https://x.com/PipOnHL",
      logo: "/images/logos/pip-logo.png",
    },
    {
      id: 20,
      name: "DeFi LLama",
      tags: ["Analytics", "Data"],
      twitter: "https://x.com/DefiLlama",
      logo: "/images/logos/defillama-logo.png",
    },
    {
      id: 22,
      name: "Hyperbeat",
      tags: ["Infra","Staking"],
      twitter: "https://x.com/0xHyperBeat",
      logo: "/images/logos/hyperbeat-logo.png",
    },
    {
      id: 23,
      name: "Liquid Start",
      tags: ["Defi"],
      twitter: "https://x.com/Liquid_Start",
      logo: "/images/logos/liquidstart-logo.png",
    },
    {
      id: 24,
      name: "Rage Trade",
      tags: ["Trading"],
      twitter: "https://x.com/rage_trade",
      logo: "/images/logos/rage-trade.png",
    },
    {
      id: 25,
      name: "Hypurr Finance",
      tags: ["Defi"],
      twitter: "https://x.com/hypurrfi",
      logo: "/images/logos/hypurrfinance-logo.png",
    },
    {
      id: 26,
      name: "Hyperstats",
      tags: ["Analytics", "Tools"],
      twitter: "https://x.com/hyperstats_xyz",
      logo: "/images/logos/hyperstats-logo.png",
    },
    {
      id: 27,
      name: "VegasHL",
      tags: ["GambleFi"],
      twitter: "https://x.com/vegas_hl",
      logo: "/images/logos/vegas-logo.png",
    },
    {
      id: 28,
      name: "Hypervisor",
      tags: ["Data", "Analytics"],
      twitter: "https://x.com/Hypervisor_hl",
      logo: "/images/logos/hypervisor-logo.png",
    },
    {
      id: 29,
      name: "Harmonix Finance",
      tags: ["Yield", "Defi"],
      twitter: "https://x.com/harmonixfi",
      logo: "/images/logos/harmony-logo.png",
    },
    {
      id: 30,
      name: "RNDM",
      tags: ["Defi"],
      twitter: "https://x.com/RNDM_IO",
      logo: "/images/logos/rndm-logo.png",
    },
    {
      id: 31,
      name: "MIM Spell",
      tags: ["Yield", "Defi"],
      twitter: "https://x.com/mim_spell",
      logo: "/images/logos/mim-logo.png",
    },
    {
      id: 32,
      name: "Nucleus Earn",
      tags: ["Defi"],
      twitter: "https://x.com/nucleusearn",
      logo: "/images/logos/nucleus-logo.png",
    },
    {
      id: 33,
      name: "Thunder Labs",
      tags: ["LST"],
      twitter: "https://x.com/ThunderheadLabs",
      logo: "/images/logos/thunderlabs-logo.png",
    },
    {
      id: 34,
      name: "KittenSwap",
      tags: ["Dex"],
      twitter: "https://x.com/kittenswaphype",
      logo: "/images/logos/kittenswap-logo.png",
    },
    {
      id: 35,
      name: "Hyperterminal",
      tags: ["Analytics", "Trading"],
      twitter: "https://x.com/hyterminal",
      logo: "/images/logos/hyperterminal-logo.png",
    },
    {
      id: 36,
      name: "HyperScanner",
      tags: ["Analytics", "Explorer"],
      twitter: "https://x.com/hyper_scanner",
      logo: "/images/logos/hyperscanner-png.png",
    },
    {
      id: 37,
      name: "Pyth",
      tags: ["Oracle", "Infra"],
      twitter: "https://x.com/PythNetwork",
      logo: "/images/logos/pyth-logo.png",
    },
    {
      id: 38,
      name: "StorkOracle",
      tags: ["Oracle", "Infra"],
      twitter: "https://x.com/StorkOracle",
      logo: "/images/logos/storkoracle-logo.png",
    },
    {
      id: 39,
      name: "Mypurrfolio",
      tags: ["Analytics", "Data"],
      twitter: "https://x.com/mypurrfolio",
      logo: "/images/logos/mypurrfolio-logo.png",
    },
    {
      id: 40,
      name: "Insilico Terminal",
      tags: ["Trading", "Analytics"],
      twitter: "https://x.com/InsilicoTrading",
      logo: "/images/logos/insilico-logo.png",
    },
    {
      id: 41,
      name: "memedata",
      tags: ["Analytics"],
      twitter: "https://x.com/shinji2048",
      logo: "/images/logos/shinji2048.png",
    },
    {
      id: 42,
      name: "Slate",
      tags: ["AI", "Tools", "Trading"],
      twitter: "https://x.com/slate_hl",
      logo: "/images/logos/slate-logo.png",
    },
    {
      id: 43,
      name: "HPS Protocol",
      tags: ["Defi", "NFT", "Mobile"],
      twitter: "https://x.com/HPSProtocol",
      logo: "/images/logos/HPSProtocol.png",
    },
    {
      id: 44,
      name: "Chris Ling",
      tags: ["Tools", "Trading"],
      twitter: "https://x.com/chrisling_hl",
      logo: "/images/logos/chrisling-logo.png",
    },
    {
      id: 45,
      name: "Schizo",
      tags: ["Meme"],
      twitter: "https://x.com/schizo_on_hl",
      logo: "/images/logos/schizo-logo.png",
    },
    {
      id: 46,
      name: "Peri Pair Bot",
      tags: ["Trading"],
      twitter: "https://x.com/peripairbot",
      logo: "/images/logos/peripairbot-logo.png",
    },
    {
      id: 47,
      name: "Vapor",
      tags: ["Social", "AI"],
      twitter: "https://x.com/vaporwarefun",
      logo: "/images/logos/vapor-logo.png",
    },
    {
      id: 48,
      name: "Hey Jeff",
      tags: ["Tools"],
      twitter: "https://x.com/janklimo",
      logo: "/images/logos/peripairbot-logo.png",
    },
    {
      id: 49,
      name: "Hypurr Collective",
      tags: ["Community"],
      twitter: "https://x.com/hypurr_co",
      logo: "/images/logos/hypurr-logo.png",
    },
    {
      id: 50,
      name: "Panda",
      tags: ["Meme","Community"],
      twitter: "https://x.com/panda_on_hl",
      logo: "/images/logos/panda-logo.png",
    },
    {
      id: 51,
      name: "LadyOnHL",
      tags: ["Meme"],
      twitter: "https://x.com/lady_on_hl",
      logo: "/images/logos/ladyhl-logo.png",
    },
    {
      id: 52,
      name: "HypurrDash",
      tags: ["Analytics", "Data"],
      twitter: "https://x.com/hypurrdash",
      logo: "/images/logos/hyperdash-logo.png",
    },
    {
      id: 53,
      name: "WashOnHL",
      tags: ["Trading"],
      twitter: "https://x.com/wash_on_hl",
      logo: "/images/logos/washsniper-logo.png",
    },
    {
      id: 54,
      name: "HyperTracker",
      tags: ["Tools"],
      twitter: "https://x.com/NMTD8/status/1871588493283270733",
      logo: "/images/logos/hypertracker-logo.png",
    },
    {
      id: 55,
      name: "Hyperlend Explorer",
      tags: ["Explorer"],
      twitter: "https://explorer.hyperlend.finance/",
      logo: "/images/logos/hyperland-logo.png",
    },
    {
      id: 56,
      name: "ASXN",
      tags: ["Data"],
      twitter: "https://x.com/asxn_r/status/1873668265450598613",
      logo: "/images/logos/asxn-logo.png",
    },
    {
      id: 57,
      name: "Hypertrack",
      tags: ["Tools"],
      twitter: "https://x.com/hyperlendx/status/1855309389814432163",
      logo: "/images/logos/hypertrack-logo.png",
    },
    {
      id: 58,
      name: "Tholos",
      tags: ["Tools"],
      twitter: "https://x.com/TholosApp",
      logo: "/images/logos/tholos-logo.png",
    },
    {
      id: 59,
      name: "Octis",
      tags: ["Trading"],
      twitter: "https://x.com/octis_808",
      logo: "/images/logos/octis.png",
    },
    {
      id: 60,
      name: "Hypio",
      tags: ["NFT","Community"],
      twitter: "https://x.com/HypioHL",
      logo: "/images/logos/hypio.png",
    },
    {
      id: 61,
      name: "Hyperflip",
      tags: ["GambleFi"],
      twitter: "https://x.com/hypercoinflip",
      logo: "/images/logos/hyperflip.png",
    },
    {
      id: 62,
      name: "USDC Inflows",
      tags: ["Data"],
      twitter: "https://x.com/mogie__/status/1881818562274459701",
      logo: "/images/logos/mogie.png",
    },
    {
      id: 63,
      name: "Hyperdelta",
      tags: ["Trading"],
      twitter: "https://x.com/HyperdeltaX",
      logo: "/images/logos/hyperdelta.png",
    },
    {
      id: 64,
      name: "Hypervol",
      tags: ["Trading"],
      twitter: "https://x.com/Hypervol_xyz",
      logo: "/images/logos/hypervol.png",
    },
    {
      id: 65,
      name: "Kibl",
      tags: ["Defi"],
      twitter: "https://x.com/kiblprotocol",
      logo: "/images/logos/kibl.png",
    },
    {
      id: 66,
      name: "Marbles",
      tags: ["RWA"],
      twitter: "https://x.com/marblesrwa",
      logo: "/images/logos/marbles-logo.png",
    },
    {
      id: 68,
      name: "Liquidlaunch",
      tags: [ "AI"],
      twitter: "https://x.com/LiquidLaunchHL",
      logo: "/images/logos/liquidlaunch-logo.png",
    },
    {
      id: 69,
      name: "Autist",
      tags: ["Meme"],
      twitter: "https://x.com/autisthyper",
      logo: "/images/logos/autist.png",
    },
    {
      id: 70,
      name: "HCR Bot",
      tags: ["Infra"],
      twitter: "https://x.com/HCR_BOT",
      logo: "/images/logos/hcrbot-logo.png",
    },
    {
      id: 71,
      name: "Liquina",
      tags: ["Infra"],
      twitter: "https://x.com/LiquinaHL",
      logo: "/images/logos/liquina.png",
    },
    {
      id: 72,
      name: "Dexari",
      tags: ["Trading","Mobile"],
      twitter: "https://x.com/DexariDotCom",
      logo: "/images/logos/dexari.png",
    },
    {
      id: 73,
      name: "Hypurr Markets",
      tags: ["Tools"],
      twitter: "https://x.com/HypurrMarkets",
      logo: "/images/logos/hypurrmarkets.png",
    },
    {
      id: 74,
      name: "Hype Terminal",
      tags: ["Trading"],
      twitter: "https://x.com/hype_terminal",
      logo: "/images/logos/hypeterminal.png",
    },
    {
      id: 74,
      name: "HL Fund",
      tags: ["Investment"],
      twitter: "https://x.com/hl_fund",
      logo: "/images/logos/hlfund.png",
    },
    {
      id: 74,
      name: "Hyperrich",
      tags: ["Trading","Tools"],
      twitter: "https://x.com/hyperrichdotfun",
      logo: "/images/logos/Hyperrich.png",
    }
  ];

  const tags = [
    "Defi",
    "Dex",
    "Meme",
    "Staking",
    "Trading",
    "Infra",
    "Social",
    "Data",
    "Explorer",
    "Analytics",
    "GambleFi",
    "Yield",
    "LST",
    "Oracle",
    "Tools",
    "Community", 
    "AI",
    "NFT",
    "RWA",
    "Mobile",
    "Investment",
  ];

  const articles = [
    {
      "title": "Jeff Post-TGE: If you're reading this now, you're still early.",
      "month": "December",
      "year": "2024",
      "link": "https://x.com/chameleon_jeff/status/1862885996846805222"
    },
    {
      "title": "The Entire Financial Stack",
      "month": "November",
      "year": "2024",
      "link": "https://x.com/chameleon_jeff/status/1853439016957554873"
    },
    {
      "title": "The AWS of Liquidity",
      "month": "October",
      "year": "2024",
      "link": "https://x.com/chameleon_jeff/status/1841392573199585291"
    },
    {
      "title": "Builder Codes",
      "month": "October",
      "year": "2024",
      "link": "https://x.com/HyperliquidX/status/1840955444191473712"
    },
    {
      "title": "L1 Season 2",
      "month": "May",
      "year": "2024",
      "link": "https://x.com/HyperliquidX/status/1795683649960206488"
    },
    {
      "title": "When You See a 100x",
      "month": "May",
      "year": "2024",
      "link": "https://x.com/chameleon_jeff/status/1795859763034731002"
    },
    {
      "title": "To House All of Finance",
      "month": "April",
      "year": "2024",
      "link": "https://x.com/chameleon_jeff/status/1784592436792275221"
    },
    {
      "title": "Native Spot Trading",
      "month": "March",
      "year": "2024",
      "link": "https://x.com/HyperliquidX/status/1773531180815507473"
    },
    {
      "title": "The Not-So-Definitive guide to Hyperliquid Precompiles",
      "month": "December",
      "year": "2024",
      "link": "https://medium.com/@ambitlabs/the-not-so-definitive-guide-to-hyperliquid-precompiles-f0b6025bb4a3"
    },
    {
      "title": "Delphi Digital: Hyperliquid Pre-TGE",
      "month": "November",
      "year": "2024",
      "link": "https://members.delphidigital.io/feed/hyperliquid-readies-for-tge?a=1&utm_source=twitter&utm_medium=social&utm_campaign=HL-TGE-AF"
    },
    {
      "title": "The Potential of Smart Contracts on Binance",
      "month": "December",
      "year": "2024",
      "link": "https://x.com/reachingarete/status/1857461572014096575"
    },
    {
      "title": "Jeff Pod",
      "month": "November",
      "year": "2024",
      "link": "https://www.youtube.com/watch?v=WeRh589I76o"
    },
    {
      "title": "Hyperliquid: The Hyperoptimized Order Book L1",
      "month": "September",
      "year": "2024",
      "link": "https://newsletter.asxn.xyz/p/hyperliquid-the-hyperoptimized-order"
    },
    {
      "title": "HL from a Quant/Trader's Perspective",
      "month": "August",
      "year": "2024",
      "link": "https://x.com/DThomasStealth/status/1825383978552938808"
    },
    {
      "title": "Hyperliquid: The High Performance Era",
      "month": "July",
      "year": "2024",
      "link": "https://protecc.xyz/research/hyperliquid-the-high-performance-era"
    },
    {
      "title": "Jeff Pod",
      "month": "June",
      "year": "2024",
      "link": "https://www.youtube.com/watch?v=cxyUtPoC1-E&t=1s"
    },
    {
      "title": "Nansen: Hyperliquid Perp Dex",
      "month": "January",
      "year": "2024",
      "link": "https://x.com/0xomok/status/1745060597425906008"
    },
    {
      "title": "Latency and transaction ordering on Hyperliquid",
      "month": "January",
      "year": "2024",
      "link": "https://medium.com/@hyperliquid/latency-and-transaction-ordering-on-hyperliquid-cf28df3648eb"
    },
    {
      "title": "Why an Onchain Order Book Matters",
      "month": "April",
      "year": "2024",
      "link": "https://medium.com/@hyperliquid/why-an-onchain-order-book-matters-d74cdf7e6fc"
    }
  ];

  // Convert tags array to options for react-select
  const tagOptions = tags.map(tag => ({
    value: tag,
    label: tag
  }));

  const initThreeJS = () => {
    const canvas = canvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Scene setup with new background color
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0C2926); // Updated background color

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.z = 500;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Controls setup with restricted movement
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false; // Disable panning
    controls.minDistance = 200; // Set minimum zoom
    controls.maxDistance = 800; // Set maximum zoom
    controls.enableRotate = true;
    controls.rotateSpeed = 0.5;
  };

  const createProjectNode = (item, position) => {
    const geometry = new THREE.CircleGeometry(15, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(item.logo, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.encoding = THREE.sRGBEncoding;
    });

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide
    });

    const node = new THREE.Mesh(geometry, material);
    node.position.copy(position);
    node.userData.type = 'project';
    node.userData.id = item.id;
    
    return node;
  };

  const createCategoryNode = (category, position) => {
    // Create category node
    const geometry = new THREE.CircleGeometry(10, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x97FCE4,
      transparent: true,
      opacity: 0.8
    });

    const node = new THREE.Mesh(geometry, material);
    node.position.copy(position);
    node.userData.type = 'category';
    node.userData.category = category;

    // Add category label
    const labelGeometry = new THREE.PlaneGeometry(40, 10);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;
    context.fillStyle = 'white';
    context.font = 'bold 24px Arial';
    context.textAlign = 'center';
    context.fillText(category, 128, 32);
    
    const labelTexture = new THREE.CanvasTexture(canvas);
    const labelMaterial = new THREE.MeshBasicMaterial({
      map: labelTexture,
      transparent: true,
      side: THREE.DoubleSide
    });
    
    const label = new THREE.Mesh(labelGeometry, labelMaterial);
    label.position.y = -20;
    node.add(label);

    return node;
  };

  const createConnection = (startPos, endPos, opacity = 0.3) => {
    const points = [startPos, endPos];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ 
      color: 0x97FCE4,
      transparent: true,
      opacity: opacity
    });
    return new THREE.Line(geometry, material);
  };

  const handleCanvasMouseMove = (event) => {
    if (viewMode !== 'graph') return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObjects(sceneRef.current.children, true);

    if (intersects.length > 0) {
      const categoryNode = intersects.find(intersect => 
        intersect.object.userData && intersect.object.userData.type === 'category'
      )?.object;

      const projectNode = intersects.find(intersect => 
        intersect.object.userData && intersect.object.userData.type === 'project'
      )?.object;

      if (categoryNode) {
        setHoverTooltip({
          type: 'category',
          name: categoryNode.userData.category
        });
      } else if (projectNode) {
        const project = items.find(item => item.id === projectNode.userData.id);
        setHoverTooltip({
          type: 'project',
          name: project.name,
          logo: project.logo
        });
      } else {
        setHoverTooltip(null);
      }
      
      setTooltipPosition({
        x: event.clientX,
        y: event.clientY
      });
    } else {
      setHoverTooltip(null);
    }
  };

  const handleCanvasMouseLeave = () => {
    setHoverTooltip(null);
  };

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObjects(sceneRef.current.children, true);

    if (intersects.length > 0) {
      const categoryNode = intersects.find(intersect => 
        intersect.object.userData && intersect.object.userData.type === 'category'
      )?.object;

      const projectNode = intersects.find(intersect => 
        intersect.object.userData && intersect.object.userData.type === 'project'
      )?.object;

      if (categoryNode) {
        const category = categoryNode.userData.category;
        setSelectedCategory(prev => prev === category ? null : category);
        setSelectedProject(null);
      } else if (projectNode) {
        const project = items.find(item => item.id === projectNode.userData.id);
        setSelectedProject(project);
        setPopupPosition({ 
          x: event.clientX, 
          y: event.clientY 
        });
      } else {
        setSelectedProject(null);
      }
    }
  };

  const updateGraph = () => {
    const scene = sceneRef.current;
    
    // Clear existing nodes
    while(scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }

    // Add lights
    const light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(0, 200, 0);
    scene.add(light);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Filter items based on selected category and tags
    const filteredItems = items.filter(item => {
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => item.tags.includes(tag.value));
      const matchesCategory = !selectedCategory || 
        item.tags.includes(selectedCategory);
      return matchesTags && matchesCategory;
    });

    // Create category nodes in a sphere
    const categoryNodes = new Map();
    const uniqueCategories = [...new Set(filteredItems.flatMap(item => item.tags))];
    
    uniqueCategories.forEach((category, index) => {
      const y = 1 - (index / (uniqueCategories.length - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = index * Math.PI * (3 - Math.sqrt(5));

      const position = new THREE.Vector3(
        radius * Math.cos(theta) * 400,
        y * 400,
        radius * Math.sin(theta) * 400
      );
      
      const categoryNode = createCategoryNode(category, position);
      // Highlight selected category
      if (category === selectedCategory) {
        categoryNode.material.color.setHex(0xFF9900);
        categoryNode.material.opacity = 1;
      }
      scene.add(categoryNode);
      categoryNodes.set(category, categoryNode);
    });

    // Create project nodes in an inner sphere
    filteredItems.forEach((item, index) => {
      const y = 1 - (index / (filteredItems.length - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = index * Math.PI * (3 - Math.sqrt(5));

      const position = new THREE.Vector3(
        radius * Math.cos(theta) * 200,
        y * 200,
        radius * Math.sin(theta) * 200
      );

      const projectNode = createProjectNode(item, position);
      scene.add(projectNode);
      nodesRef.current[item.id] = projectNode;

      // Create connections to categories
      item.tags.forEach(tag => {
        const categoryNode = categoryNodes.get(tag);
        if (categoryNode) {
          const connection = createConnection(
            projectNode.position, 
            categoryNode.position,
            tag === selectedCategory ? 0.8 : 0.3 // Highlight connections to selected category
          );
          scene.add(connection);
        }
      });
    });
  };

  const animate = () => {
    if (!rendererRef.current) return;

    requestAnimationFrame(animate);
    
    // Make all nodes face the camera
    Object.values(nodesRef.current).forEach(node => {
      node.quaternion.copy(cameraRef.current.quaternion);
    });

    // Update category nodes to face camera
    sceneRef.current.children.forEach(child => {
      if (child.userData && child.userData.type === 'category') {
        child.quaternion.copy(cameraRef.current.quaternion);
      }
    });

    controlsRef.current.update();
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  useEffect(() => {
    initThreeJS();
    updateGraph();
    animate();

    const handleResize = () => {
      if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return;

      const canvas = canvasRef.current;
      const parent = canvas.parentElement;
      const width = parent.clientWidth;
      const height = parent.clientHeight;

      // Update canvas size
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Update canvas resolution
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;

      // Update camera and renderer
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height, false);
      rendererRef.current.setPixelRatio(dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    updateGraph();
  }, [selectedCategory, selectedTags]);

  useEffect(() => {
    const loadImages = async () => {
      const imageCache = {};
      const loadPromises = items.map((item) => {
        return new Promise((resolve) => {
          if (imageCache[item.logo]) {
            projectImages.current[item.id] = imageCache[item.logo];
            resolve();
            return;
          }

          const img = new Image();
          img.onload = () => {
            imageCache[item.logo] = img;
            projectImages.current[item.id] = img;
            resolve();
          };
          img.onerror = () => {
            console.warn(
              `Failed to load image for ${item.name} (${item.logo})`
            );
            resolve();
          };
          img.src = item.logo;
        });
      });

      await Promise.all(loadPromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=hyperliquid&vs_currencies=usd"
        );
        const data = await response.json();
        setCryptoPrice(data.hyperliquid.usd);
      } catch (error) {
        console.error("Error fetching crypto price:", error);
        setCryptoPrice("N/A");
      }
    };

    fetchCryptoPrice();
    const interval = setInterval(fetchCryptoPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  // Add click handler to canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('click', handleCanvasClick);
      return () => canvas.removeEventListener('click', handleCanvasClick);
    }
  }, []);

  // Add event listeners
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousemove', handleCanvasMouseMove);
      canvas.addEventListener('mouseleave', handleCanvasMouseLeave);
      return () => {
        canvas.removeEventListener('mousemove', handleCanvasMouseMove);
        canvas.removeEventListener('mouseleave', handleCanvasMouseLeave);
      };
    }
  }, [viewMode]);

  // Update the DirectoryView component
  const DirectoryView = () => (
    <div className="overflow-y-auto h-full pt-16 pb-4"> {/* Add padding-top for filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {items.filter(item => {
          const matchesTags = selectedTags.length === 0 || 
            selectedTags.some(tag => item.tags.includes(tag.value));
          const matchesCategory = !selectedCategory || 
            item.tags.includes(selectedCategory);
          return matchesTags && matchesCategory;
        }).map(item => (
          <div key={item.id} className="bg-dark-green border border-mint rounded-lg p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="w-10 h-10 rounded-full"
              />
              <h3 className="text-lg font-bold text-mint">{item.name}</h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-mint bg-opacity-20 text-mint rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={item.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-mint text-dark-green rounded-full hover:bg-opacity-80 transition-colors"
                title="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-dark-green text-white">
      {/* Header - fixed height */}
      <header className="bg-mint p-2 shadow-lg flex justify-between items-center">
        <div className="ml-10">
          <span className="text-gray-900 font-bold text-xl md:text-xl text-sm">
            damndatsalotofstuffonhyperliquid
          </span>
        </div>
        {cryptoPrice && (
          <div className="mr-10 text-gray-900 font-medium flex items-center gap-x-2">
            Hype:{" "}
            <span>
              ${cryptoPrice === "N/A" ? cryptoPrice : cryptoPrice.toFixed(2)}
            </span>
          </div>
        )}
      </header>

      {/* Main content */}
      <div className="flex-grow relative overflow-hidden"> {/* Add overflow-hidden */}
        <div className="absolute inset-0">
          <div className="h-full relative">
            {/* Controls bar - make it fixed */}
            <div className="absolute top-4 left-4 right-4 z-10 flex gap-4 items-center bg-dark-green p-2 rounded-lg">
              <div className="flex-grow">
                <Select
                  isMulti
                  options={tagOptions}
                  value={selectedTags}
                  onChange={setSelectedTags}
                  className="text-dark-green"
                  placeholder="Categories"
                />
              </div>

              {/* View toggle button */}
              <button
                onClick={() => setViewMode(viewMode === 'graph' ? 'directory' : 'graph')}
                className="px-4 py-2 bg-mint text-dark-green rounded-lg hover:bg-opacity-80 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                {viewMode === 'graph' ? (
                  <>
                    <LayoutGrid size={16} />
                    Directory View
                  </>
                ) : (
                  <>
                    <Network size={16} />
                    Graph View
                  </>
                )}
              </button>

              {/* Reset button */}
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-4 py-2 bg-mint text-dark-green rounded-lg hover:bg-opacity-80 transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  Reset View
                </button>
              )}
            </div>

            {/* View content */}
            {viewMode === 'graph' ? (
              <canvas
                ref={canvasRef}
                className="w-full h-full rounded-xl bg-transparent"
                style={{ 
                  height: window.innerWidth < 768 ? 'calc(85vh - 180px)' : '100%' // Reduce height on mobile
                }}
              />
            ) : (
              <DirectoryView />
            )}
          </div>
        </div>

        {/* Project Popup - only show in graph view */}
        {viewMode === 'graph' && selectedProject && (
          <div 
            className="fixed z-50 bg-dark-green border border-mint rounded-lg shadow-xl p-4"
            style={{
              left: popupPosition.x + 10,
              top: popupPosition.y + 10,
              transform: 'translate(-50%, -50%)',
              width: '300px'
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img 
                  src={selectedProject.logo} 
                  alt={selectedProject.name} 
                  className="w-8 h-8 rounded-full"
                />
                <h3 className="text-lg font-bold text-mint">
                  {selectedProject.name}
                </h3>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2 flex-grow">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-mint bg-opacity-20 text-mint rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={selectedProject.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 p-2 bg-mint text-dark-green rounded-full hover:bg-opacity-80 transition-colors"
                  title="Twitter"
                >
                  <Twitter size={16} />
                </a>
              </div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-mint hover:text-white transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Hover Tooltip */}
        {viewMode === 'graph' && hoverTooltip && (
          <div 
            className="fixed z-50 bg-dark-green border border-mint rounded-lg shadow-xl p-2"
            style={{
              left: tooltipPosition.x + 10,
              top: tooltipPosition.y + 10,
              pointerEvents: 'none' // Prevent tooltip from interfering with interactions
            }}
          >
            <div className="flex items-center gap-2">
              {hoverTooltip.type === 'project' && (
                <img 
                  src={hoverTooltip.logo} 
                  alt={hoverTooltip.name}
                  className="w-6 h-6 rounded-full"
                />
              )}
              <span className="text-mint font-medium">
                {hoverTooltip.name}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer - fixed height */}
      <footer className="bg-[#97FCE4] p-4 shadow-lg">
        <div className="flex row md:w-auto w-full items-center justify-center md:gap-4 gap-1 mt-4">
          <a
            href="https://x.com/freddy_0x"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors"
          >
            <img
              src="https://i.ibb.co/640F1X0/0xfreddy-1.png"
              alt="Twitter"
              className="md:w-5 md:h-5 w-3 h-3"
            />
            <span className="md:text-base text-xs">@0xfreddy</span>
          </a>
          <a
            href="https://x.com/Macr0Mark"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors"
          >
            <img
              src="https://i.ibb.co/6WB6Rfy/macro-1.png"
              alt="Twitter"
              className="md:w-5 md:h-5 w-3 h-3"
            />
            <span className="md:text-base text-xs">@Macr0Mark</span>
          </a>
          <a
            href="https://x.com/Tonkavan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors"
          >
            <img
              src="https://i.ibb.co/sqYr1qG/tonka-1.png"
              alt="Twitter"
              className="md:w-5 md:h-5 w-3 h-3"
            />
            <span className="md:text-base text-xs">@Tonkavan</span>
          </a>
          <a
            href="https://x.com/hyperditto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors"
          >
            <img
              src="/images/logos/hyperditto.png"
              alt="Twitter"
              className="md:w-5 md:h-5 w-3 h-3"
            />
            <span className="md:text-base text-xs">@hyperditto</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default DirectoryApp;
