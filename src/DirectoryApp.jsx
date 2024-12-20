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
      tags: ["Defi", "Trading"],
      twitter: "https://x.com/felixprotocol",
      logo: "/images/logos/felix-logo.png",
    },
    {
      id: 2,
      name: "hyperland",
      tags: ["Defi", "Staking"],
      twitter: "https://x.com/hyperlendx",
      logo: "/images/logos/hyperland-logo.png",
    },
    {
      id: 3,
      name: "funfun",
      tags: ["meme", "Social"],
      twitter: "https://x.com/fan_dot_fun",
      logo: "/images/logos/funfun-logo.png",
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
      tags: ["Defi", "Trading"],
      twitter: "https://x.com/HyperSwapX",
      logo: "/images/logos/hyperswap-logo.png",
    },
    {
      id: 7,
      name: "Kinetiq",
      tags: ["Staking", "Defi"],
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
      tags: ["Infra", "Social"],
      twitter: "https://x.com/hlnames",
      logo: "/images/logos/hl-names-logo.png",
    },
    {
      id: 10,
      name: "fanfun",
      tags: ["Social", "meme"],
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
      name: "HyperData",
      tags: ["Data", "Explorer"],
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
      tags: ["meme"],
      twitter: "https://x.com/YeetiOnHL",
      logo: "/images/logos/yeeti-logo.png",
    },
    {
      id: 18,
      name: "CatCabal",
      tags: ["meme", "Social"],
      twitter: "https://x.com/CatCabal_hl",
      logo: "/images/logos/catcabal-logo.png",
    },
    {
      id: 19,
      name: "Pip",
      tags: ["meme", "Social"],
      twitter: "https://x.com/HypurrScan",
      logo: "/images/logos/hypurrscan-logo.png",
    },
    {
      id: 20,
      name: "DeFi LLama",
      tags: ["Analytics", "Data"],
      twitter: "https://x.com/DefiLlama",
      logo: "/images/logos/defillama-logo.png",
    },
    {
      id: 21,
      name: "Hyperliquid Staking",
      tags: ["Staking", "Defi"],
      twitter: "https://x.com/HyperliquidX",
      logo: "/images/logos/hyperliquid-logo.png",
    },
    {
      id: 22,
      name: "Hyperbeat",
      tags: ["Infra"],
      twitter: "https://x.com/degennquant",
      logo: "/images/logos/hyperbeat-logo.png",
    },
    {
      id: 23,
      name: "Liquid Start",
      tags: ["Trading"],
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
      twitter: "",
      logo: "/images/logos/hypurrfi-logo.png",
    },
    {
      id: 26,
      name: "Hyperstats",
      tags: ["Analytics", "Data"],
      twitter: "https://x.com/hyperstats_xyz",
      logo: "/images/logos/hyperstats-logo.png",
    },
    {
      id: 27,
      name: "VegasHL",
      tags: ["GambleFi"],
      twitter: "https://x.com/vegas_hl",
      logo: "/images/logos/vegashl-logo.png",
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
      logo: "/images/logos/harmonix-logo.png",
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
      tags: ["Yield", "Defi"],
      twitter: "https://x.com/nucleusearn",
      logo: "/images/logos/nucleus-logo.png",
    },
    {
      id: 33,
      name: "Thunder Labs",
      tags: ["LST", "Staking"],
      twitter: "https://x.com/ThunderheadLabs",
      logo: "/images/logos/thunderlabs-logo.png",
    },
    {
      id: 34,
      name: "KittenSwap",
      tags: ["Defi", "Trading"],
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
      name: "Redstone",
      tags: ["Oracle", "Infra"],
      twitter: "https://x.com/redstone_defi",
      logo: "/images/logos/redstone-logo.png",
    }
]
const tags = [
    "Defi",
    "meme",
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
    "Oracle"
];
  const articles = [
    {
      title:
        "Jeff Post-TGE: \"If you're reading this now, you're still early.\"",
      month: "December",
      year: "2024",
      link: "https://x.com/chameleon_jeff/status/1862885996846805222",
    },
    {
      title: "The Entire Financial Stack",
      month: "November",
      year: "2024",
      link: "https://x.com/chameleon_jeff/status/1853439016957554873",
    },
    {
      title: "The AWS of Liquidity",
      month: "October",
      year: "2024",
      link: "https://x.com/chameleon_jeff/status/1841392573199585291",
    },
    {
      title: "Builder Codes",
      month: "October",
      year: "2024",
      link: "https://x.com/HyperliquidX/status/1840955444191473712",
    },
    {
      title: "L1 Season 2",
      month: "May",
      year: "2024",
      link: "https://x.com/HyperliquidX/status/1795683649960206488",
    },
    {
      title: "When You See a 100x",
      month: "May",
      year: "2024",
      link: "https://x.com/chameleon_jeff/status/1795859763034731002",
    },
    {
      title: "Native EVM",
      month: "May",
      year: "2024",
      link: "https://x.com/HyperliquidX/status/1792393508101439800",
    },
    {
      title: "HyperBFT (Consensus Algorithm)",
      month: "May",
      year: "2024",
      link: "https://www.notion.so/Hyperliquid-All-Tweets-152f1a87c48c804da5f7cc97e1c8047a",
    },
    {
      title: "To House All of Finance",
      month: "April",
      year: "2024",
      link: "https://x.com/chameleon_jeff/status/1784592436792275221",
    },
    {
      title: "Native Spot Trading",
      month: "March",
      year: "2024",
      link: "https://x.com/HyperliquidX/status/1773531180815507473",
    },
  ];

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
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        setCryptoPrice(data.ethereum.usd);
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

    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
        const fontSize = Math.max(10, node.radius / 2);
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillText(node.label, node.x, node.y, node.radius * 2);
      } else {
        ctx.fillStyle = isHighlighted ? "#97FCE4" : "#4B5563";
        ctx.fill();

        const item = items.find((i) => `item-${i.id}` === node.id);
        if (item && projectImages.current[item.id]) {
          const img = projectImages.current[item.id];
          const imgSize = node.radius * 2;

          try {
            ctx.save();
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius - 2, 0, Math.PI * 2);
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
            console.error(`Error drawing image for item ${item.id}:`, error, {
              img,
              imgSize,
              nodeRadius: node.radius,
              nodeX: node.x,
              nodeY: node.y,
            });
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

    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !imagesLoaded) return;

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
      <header className="bg-mint p-4 shadow-lg flex justify-between items-center">
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 bg-dark-green text-white px-5 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          <img
            src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040"
            alt=""
            className="h-8 w-8 bg-white p-1.5 rounded-full"
          />
          <span>Button</span>
        </a>

        <div className="w-full ml-10 mx-auto flex justify-center items-center">
          <span className="text-gray-900 font-bold text-xl">onHL</span>
        </div>

        {cryptoPrice && (
          <div className="text-gray-900 font-medium flex items-center gap-x-2">
            Ethereum:{" "}
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
          Network
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
        <div
          className={`rounded-lg md:shadow-xl w-full ${
            activeView !== "canvas" ? "hidden md:block" : ""
          }`}
        >
          <canvas
            ref={canvasRef}
            width={800}
            height={window.innerWidth < 768 ? 1000 : 600}
            className="w-full cursor-pointer md:bg-hero-pattern md:bg-cover rounded-xl md:bg-center md:bg-no-repeat bg-transparent"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchStart={handleTouchStart}
            style={{ touchAction: "none" }}
          />
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
                      className="w-6 h-6 rounded-full bg-white p-0.5"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/24/24";
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
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors"
          >
            <img
              src="twitter_logo_url_here"
              alt="Twitter"
              className="md:w-5 md:h-5 w-3 h-3"
            />
            <span className="md:text-base text-xs">@loremipsum</span>
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors"
          >
            <img
              src="twitter_logo_url_here"
              alt="Twitter"
              className="md:w-5 md:h-5 w-3 h-3"
            />
            <span className="md:text-base text-xs">@loremipsum</span>
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 gap-x-1 bg-dark-green text-white md:px-4 px-3 md:py-2 py-1 rounded-full hover:bg-gray-600 transition-colors"
          >
            <img
              src="twitter_logo_url_here"
              alt="Twitter"
              className="md:w-5 md:h-5 w-3 h-3"
            />
            <span className="md:text-base text-xs">@loremipsum</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default DirectoryApp;
