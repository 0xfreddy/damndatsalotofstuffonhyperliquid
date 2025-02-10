import React, { useState, useEffect, useRef } from "react";
import { Twitter, Scroll, LayoutGrid, Network } from "lucide-react";

const DirectoryApp = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const linksRef = useRef([]);
  const draggedNodeRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scaleRef = useRef(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const projectImages = useRef({});
  const [cryptoPrice, setCryptoPrice] = useState(null);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [activeView, setActiveView] = useState("canvas");

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
  name: "Redstone",
  tags: ["Oracle", "Infra"],
  twitter: "https://x.com/redstone_defi",
  logo: "/images/logos/redstone-logo.png",
},
{
  id: 43,
  name: "Hypers",
  tags: ["NFT"],
  twitter: "https://x.com/HypersOnHL",
  logo: "/images/logos/HypersOnHL-logo.png",
},
{
  id: 44,
  name: "Drip.trade",
  tags: ["NFT"],
  twitter: "https://x.com/drip__trade",
  logo: "/images/logos/driptrade-logo.png",
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

]
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
  
]


  const getTagConnections = () => {
    const connections = {};
    tags.forEach((tag) => (connections[tag] = 0));

    items.forEach((item) => {
      item.tags.forEach((tag) => {
        connections[tag] = (connections[tag] || 0) + 1;
      });
    });

    return connections;
  };

  const initializeNodes = () => {
    const nodes = [];
    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    const tagConnections = getTagConnections();
    const maxConnections = Math.max(...Object.values(tagConnections));

    const isMobile = window.innerWidth < 768;
    const mobileSizeMultiplier = isMobile ? 2 : 1;

    tags.forEach((tag, i) => {
      const angle = (i * 2 * Math.PI) / tags.length;
      const radius = 100;
      const connections = tagConnections[tag];
      const size =
        (16 + (connections / maxConnections) * 20) * mobileSizeMultiplier;

      nodes.push({
        id: `tag-${tag}`,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        mass: (5 + (connections / maxConnections) * 3) * mobileSizeMultiplier,
        radius: size,
        type: "tag",
        label: tag,
        connections: connections,
      });
    });

    items.forEach((item, i) => {
      const angle = (i * 2 * Math.PI) / items.length;
      const radius = 180 * mobileSizeMultiplier;
      nodes.push({
        id: `item-${item.id}`,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        mass: 10 * mobileSizeMultiplier,
        radius: 20 * mobileSizeMultiplier,
        type: "item",
        label: item.name,
        tags: item.tags,
      });
    });

    return nodes;
  };

  const initializeLinks = () => {
    const links = [];
    items.forEach((item) => {
      item.tags.forEach((tag) => {
        const sourceNode = nodesRef.current.find(
          (n) => n.id === `item-${item.id}`
        );
        const targetNode = nodesRef.current.find((n) => n.id === `tag-${tag}`);
        if (sourceNode && targetNode) {
          links.push({
            source: sourceNode,
            target: targetNode,
            strength: 0.5,
          });
        }
      });
    });
    return links;
  };

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

  const applyPhysics = () => {
    const nodes = nodesRef.current;
    const links = linksRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      node.x = Math.max(
        node.radius,
        Math.min(canvasWidth - node.radius, node.x)
      );
      node.y = Math.max(
        node.radius,
        Math.min(canvasHeight - node.radius, node.y)
      );
      for (let j = i + 1; j < nodes.length; j++) {
        const node1 = nodes[i];
        const node2 = nodes[j];

        const dx = node2.x - node1.x;
        const dy = node2.y - node1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = node1.radius + node2.radius;

        if (distance < minDistance) {
          const overlap = minDistance - distance;
          const angle = Math.atan2(dy, dx);

          const separationX = (overlap * Math.cos(angle)) / 2;
          const separationY = (overlap * Math.sin(angle)) / 2;

          node1.x -= separationX;
          node1.y -= separationY;
          node2.x += separationX;
          node2.y += separationY;

          node1.vx -= separationX * 0.1;
          node1.vy -= separationY * 0.1;
          node2.vx += separationX * 0.1;
          node2.vy += separationY * 0.1;
        }
      }
    }
  };

  const isNodeHighlighted = (node) => {
    if (!selectedTag) return false;
    if (node.type === "tag") return node.label === selectedTag;
    return node.tags?.includes(selectedTag);
  };

  const isLinkHighlighted = (link) => {
    if (!selectedTag) return true;
    return (
      link.target.label === selectedTag ||
      link.source.tags?.includes(selectedTag)
    );
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesLoaded) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    
    // Clear with proper scaling
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    linksRef.current.forEach((link) => {
      const isHighlighted = isLinkHighlighted(link);
      ctx.beginPath();
      ctx.moveTo(link.source.x, link.source.y);
      ctx.lineTo(link.target.x, link.target.y);
      ctx.strokeStyle = isHighlighted ? "#97FCE4" : "#4B5563";
      ctx.lineWidth = isHighlighted ? 2 : 1;
      ctx.stroke();
    });

    nodesRef.current.forEach((node) => {
      const isHighlighted = isNodeHighlighted(node);

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

      if (node.type === "tag") {
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius
        );

        if (node.label === selectedTag) {
          gradient.addColorStop(0, "#FFFFFF");
          gradient.addColorStop(1, "#369b8e");
        } else {
          gradient.addColorStop(0, isHighlighted ? "#97FCE4" : "#4B5563");
          gradient.addColorStop(1, isHighlighted ? "#369b8e" : "#1F2937");
        }

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.fillStyle = node.label !== selectedTag ? "#FFFFFF" : "#1F2937";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const fontSize = Math.max(10, node.radius / 3);
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillText(node.label, node.x, node.y, node.radius * 2);
      } else {
        ctx.fillStyle = isHighlighted ? "#97FCE4" : "#4B5563";
        ctx.fill();

        const item = items.find((i) => `item-${i.id}` === node.id);
        if (item && projectImages.current[item.id]) {
          const img = projectImages.current[item.id];
          const imgSize = node.radius * 2.2;

          try {
            ctx.save();
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius - 1, 0, Math.PI * 2);
            ctx.clip();
            ctx.drawImage(
              img,
              node.x - imgSize / 2,
              node.y - imgSize / 2,
              imgSize,
              imgSize
            );
            ctx.restore();
          } catch (error) {
            console.error(`Error drawing image for item ${item.id}:`, error);
          }
        }
      }
    });
  };

  const startSimulation = () => {
    if (isSimulationRunning) return;

    setIsSimulationRunning(true);
    const animate = () => {
      applyPhysics();
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();
  };

  const stopSimulation = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsSimulationRunning(false);
  };

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scale = scaleRef.current;
    const x = (e.clientX - rect.left) * scale;
    const y = (e.clientY - rect.top) * scale;

    nodesRef.current.forEach((node) => {
      const dx = x - node.x;
      const dy = y - node.y;
      if (Math.sqrt(dx * dx + dy * dy) < node.radius) {
        draggedNodeRef.current = node;
        if (node.type === "tag") {
          setSelectedTag(selectedTag === node.label ? null : node.label);
        }
      }
    });
  };

  const handleMouseMove = (e) => {
    if (!draggedNodeRef.current || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const scale = scaleRef.current;
    const node = draggedNodeRef.current;

    let newX = (e.clientX - rect.left) * scale;
    let newY = (e.clientY - rect.top) * scale;

    newX = Math.max(
      node.radius,
      Math.min(canvasRef.current.width - node.radius, newX)
    );
    newY = Math.max(
      node.radius,
      Math.min(canvasRef.current.height - node.radius, newY)
    );

    node.x = newX;
    node.y = newY;

    node.vx = 0;
    node.vy = 0;

    draw();
  };

  const handleMouseUp = () => {
    draggedNodeRef.current = null;
  };

  const handleTouchStart = (event) => {
    event.preventDefault();
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scale = scaleRef.current;

    const touch = event.touches[0];
    const x = (touch.clientX - rect.left) * scale;
    const y = (touch.clientY - rect.top) * scale;

    nodesRef.current.forEach((node) => {
      const dx = x - node.x;
      const dy = y - node.y;
      if (Math.sqrt(dx * dx + dy * dy) < node.radius) {
        draggedNodeRef.current = node;
        if (node.type === "tag") {
          setSelectedTag(selectedTag === node.label ? null : node.label);
        }
      }
    });
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
    if (!draggedNodeRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scale = scaleRef.current;
    const node = draggedNodeRef.current;

    const touch = event.touches[0];
    let newX = (touch.clientX - rect.left) * scale;
    let newY = (touch.clientY - rect.top) * scale;

    newX = Math.max(node.radius, Math.min(canvas.width - node.radius, newX));
    newY = Math.max(node.radius, Math.min(canvas.height - node.radius, newY));

    node.x = newX;
    node.y = newY;

    node.vx = 0;
    node.vy = 0;

    draw();
  };

  const handleTouchEnd = () => {
    draggedNodeRef.current = null;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Adjust for high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set the canvas size to match its display size * device pixel ratio
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Scale the context to ensure correct drawing
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    // Update canvas style dimensions
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    nodesRef.current = initializeNodes();
    linksRef.current = initializeLinks();

    const updateScale = () => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();

      if (canvas) {
        scaleRef.current = canvas.width / rect.width;
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    startSimulation();

    return () => {
      window.removeEventListener("resize", updateScale);
      stopSimulation();
    };
  }, [imagesLoaded]);

  useEffect(() => {
    if (imagesLoaded && canvasRef.current) {
      draw();
    }
  }, [selectedTag, imagesLoaded]);

return (
  <div className="min-h-screen bg-dark-green text-white flex flex-col">
    <header className="bg-mint p-2 shadow-lg flex justify-between items-center">
      <div className="ml-10">
        <span className="text-gray-900 font-bold text-xl">onHL</span>
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
    <div className="md:hidden flex justify-center gap-2 p-4">
      <button
        onClick={() => setActiveView("canvas")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          activeView === "canvas"
            ? "bg-mint text-dark-green"
            : "bg-dark-green text-white border border-mint"
        }`}
      >
        <Network size={16} />
        Graph
      </button>
      <button
        onClick={() => setActiveView("directory")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          activeView === "directory"
            ? "bg-mint text-dark-green"
            : "bg-dark-green text-white border border-mint"
        }`}
      >
        <LayoutGrid size={16} />
        Directory
      </button>
    </div>

    <div className="w-full mx-auto p-6 space-y-8 md:space-y-0 flex-grow flex flex-col md:grid md:grid-cols-2 md:space-x-8">
      <div className={`rounded-lg md:shadow-xl w-full ${activeView !== "canvas" ? "hidden md:block" : ""}`}>
        <canvas
          ref={canvasRef}
          className="w-full cursor-pointer md:bg-hero-pattern md:bg-cover rounded-xl md:bg-center md:bg-no-repeat bg-transparent"
          style={{ 
            touchAction: "none",
            height: window.innerWidth < 768 ? "1000px" : "600px" 
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchStart={handleTouchStart}
        />
        
        <div className="mt-8 p-4 bg-aqua/40 rounded-lg shadow-xl">
          <h2 className="text-xl font-bold mb-4 text-center">Worth a follow</h2>
          <div className="flex flex-wrap justify-center gap-2">
       <a href="https://x.com/NMTD8" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/hF8dTDq/NMTD8.png" alt="NMTD8" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@NMTD8</span>
</a>
            <a href="https://x.com/0xNairolf" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/tBrptV5/0x-Nairolf.png" alt="Nairolf" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@0xNairolf</span>
</a>

<a href="https://x.com/0xPasteke" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/mNyhSQT/0x-Pasteke.png" alt="Pasteke" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@0xPasteke</span>
</a>

<a href="https://x.com/CapitalMonet" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/DLBPYNb/Capital-Monet.png" alt="Capital Monet" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@CapitalMonet</span>
</a>

<a href="https://x.com/CC2Ventures" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/8Kdd2H6/CC2-Ventures.png" alt="CC2 Ventures" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@CC2Ventures</span>
</a>

<a href="https://x.com/chameleon_jeff" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/LpNYZhn/chameleon-jeff.png" alt="Jeff" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@chameleon_jeff</span>
</a>

<a href="https://x.com/comfycapital_" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/2668gbR/comfycapital.png" alt="Comfy Capital" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@comfycapital_</span>
</a>

<a href="https://x.com/crypto_adair" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/zJb10Vs/crypto-adair.png" alt="Crypto Adair" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@crypto_adair</span>
</a>

<a href="https://x.com/derteil00" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/gSmG9DR/derteil00.png" alt="Derteil" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@derteil00</span>
</a>

<a href="https://x.com/esprisi0" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/nDRWdB3/esprisi0.png" alt="Esprisi" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@esprisi0</span>
</a>

<a href="https://x.com/fiege_max" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/5WPhBWF/fiege-max.png" alt="Max" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@fiege_max</span>
</a>

<a href="https://x.com/fmoulin7" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/mytjWB8/fmoulin7.png" alt="FMoulin" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@fmoulin7</span>
</a>

<a href="https://x.com/GuthixHL" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/YjwVMhq/GuthixHL.png" alt="Guthix" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@GuthixHL</span>
</a>

<a href="https://x.com/Henrik_on_HL" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/37vNjcm/Henrik-on-HL.png" alt="Henrik" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@Henrik_on_HL</span>
</a>

<a href="https://x.com/HyperliquidFan" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/596MrDM/Hyperliquid-Fan.png" alt="HyperliquidFan" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@HyperliquidFan</span>
</a>

<a href="https://x.com/hypurr_co" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/THdpNKB/hypurr-co.png" alt="Hypurr" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@hypurr_co</span>
</a>

<a href="https://x.com/JHyperliquid" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/vsBdKdy/JHyperliquid.png" alt="JHyperliquid" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@JHyperliquid</span>
</a>

<a href="https://x.com/KingJulianIAm" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/FhtJBTj/King-Julian-IAm.png" alt="King Julian" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@KingJulianIAm</span>
</a>

<a href="https://x.com/laurentzeimes" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/w7sdxmh/laurentzeimes.png" alt="Laurent" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@laurentzeimes</span>
</a>

<a href="https://x.com/nexushl" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/sjZBCbg/nexushl.png" alt="Nexus" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@nexushl</span>
</a>

<a href="https://x.com/0xAdrianzy" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/PYbPmcx/0x-Adrianzy.png" alt="Adrianzy" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@0xAdrianzy</span>
</a>

<a href="https://x.com/points_hl" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/vLLLKvY/points-hl.png" alt="Points" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@points_hl</span>
</a>

<a href="https://x.com/ellie_nfts" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors">
  <img src="https://i.ibb.co/64nyDMb/ellie.jpg" alt="Points" className="md:w-5 md:h-5 w-3 h-3 rounded-full bg-white" />
  <span className="md:text-base text-xs">@ellie.hl</span>
</a>
      </div>
    </div>
  </div>

<section
        className={`flex flex-col space-y-6 ${
          activeView !== "directory" ? "hidden md:block" : ""
        }`}
      >
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">Directory</h1>
            <div className="bg-mint border-dark-green p-2 rounded-lg">
              <select
                className="border rounded-md text-dark-green bg-mint transition-colors border-mint focus:outline-none"
                onChange={(e) => setSelectedTag(e.target.value || null)}
                value={selectedTag || ""}
              >
                <option value="">All Tags</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag} ({getTagConnections()[tag]})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            {items
              .filter((item) => !selectedTag || item.tags.includes(selectedTag))
              .map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-3 border border-aqua rounded-md hover:bg-mint/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="w-8 h-8 rounded-full bg-white p-0.5 object-contain"
                      style={{ imageRendering: 'high-quality' }}
                      onError={(e) => {
                        e.target.src = "/api/placeholder/32/32";
                      }}
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#97FCE4] text-gray-900 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#97FCE4] transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
          </div>

          <div className="border border-gray-700 rounded-lg p-4 space-y-4 bg-aqua/40 shadow-xl">
            <h2 className="text-xl font-bold">Articles</h2>
            <div className="space-y-2">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-dark-green/70 rounded-md hover:bg-dark-green transition-colors"
                >
                  <div className="flex-grow">
                    <div className="font-medium">{article.title}</div>
                    <div className="text-sm text-gray-400">
                      {article.month} {article.year}
                    </div>
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#97FCE4] transition-colors ml-4"
                  >
                    {article.link.includes("x.com") ||
                    article.link.includes("twitter.com") ? (
                      <Twitter className="w-4 h-4" />
                    ) : (
                      <Scroll className="w-4 h-4" />
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    
  <footer className="bg-[#97FCE4] p-4 mt-auto shadow-lg w-full">
      <div className="max-w-4xl mx-auto flex justify-center items-center">
        <span className="text-gray-900 font-bold text-xl">onHL</span>
      </div>
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
        </div>
      </footer>
    </div>
  );
}

export default DirectoryApp;
