// Project data
const projects = [
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
      tags: ["Trading", "Social","Launchpad"],
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
      logo: "/images/logos/hyperbeat.png",
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
      name: "HyperDash",
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
      id: 75,
      name: "HL Fund",
      tags: ["Investment"],
      twitter: "https://x.com/hl_fund",
      logo: "/images/logos/hlfund.png",
    },
    {
      id: 76,
      name: "Hyperrich",
      tags: ["Trading","Tools"],
      twitter: "https://x.com/hyperrichdotfun",
      logo: "/images/logos/Hyperrich.png",
    },
    {
      id: 77,
      name: "Slate",
      tags: ["AI", "Tools", "Trading"],
      twitter: "https://x.com/slate_ceo",
      logo: "/images/logos/Slate.png",
    },
    {
      id: 78,
      name: "Chris Ling",
      tags: ["Tools", "Trading"],
      twitter: "https://x.com/chrisling_dev",
      logo: "/images/logos/ChrisLing.png",
    },
    {
      id: 79,
      name: "Mercury App",
      tags: ["Mobile", "Trading"],
      twitter: "https://x.com/mercuryapphl",
      logo: "/images/logos/MercuryApp.png",
    },
    {
      id: 80,
      name: "Hyperstable",
      tags: ["Stablecoin", "Yield"],
      twitter: "https://x.com/HyperstableX",
      logo: "/images/logos/Hyperstable.png",
    },
    {
      id: 81,
      name: "Hyperlane",
      tags: ["Infra"],
      twitter: "https://x.com/hyperlane",
      logo: "/images/logos/Hyperlane.png",
    },
    {
      id: 82,
      name: "LiquidLoot",
      tags: ["NFT"],
      twitter: "https://x.com/LootLiquid",
      logo: "/images/logos/Liquidloot.png",
    },
    {
      id: 83,
      name: "Okto",
      tags: ["Infra","Mobile"],
      twitter: "https://x.com/okto_web3",
      logo: "/images/logos/Okto.png",
    },
    {
      id: 84,
      name: "Bridge Hypio",
      tags: ["Infra", "NFT"],
      twitter: "https://x.com/HypioHL",
      logo: "/images/logos/hypio.png",
    },
    {
      id: 85,
      name: "Eternal AI",
      tags: ["AI"],
      twitter: "https://x.com/CryptoEternalAI",
      logo: "/images/logos/EternalAI.png",
    },
    {
      id: 86,
      name: "deBridge",
      tags: ["Infra"],
      twitter: "https://x.com/deBridgeFinance",
      logo: "/images/logos/debridge.png",
    },
    {
      id: 87,
      name: "Valantis",
      tags: ["Defi","Yield"],
      twitter: "https://x.com/ValantisLabs",
      logo: "/images/logos/valantis.png",
    },
    {
      id: 88,
      name: "Hyperyield",
      tags: ["Yield", "Defi"],
      twitter: "https://x.com/HyperYieldx",
      logo: "/images/logos/hyperyield.png",
    },
    {
      id: 89,
      name: "Hyperupdates",
      tags: ["News"],
      twitter: "https://x.com/hyper_updates",
      logo: "/images/logos/hyperupdates.png",
    },
    {
      id: 90,
      name: "Hana",
      tags: ["Trading"],
      twitter: "https://x.com/HanaNetwork",
      logo: "/images/logos/hana.png",
    },
    {
      id: 91,
      name: "Hypers",
      tags: ["NFT"],
      twitter: "https://x.com/HypersOnHL",
      logo: "/images/logos/hypers.png",
    },
    {
      id: 92,
      name: "Keiko",
      tags: ["Landing"],
      twitter: "https://x.com/KeikoFinance",
      logo: "/images/logos/keiko.png",
    },
    {
      id: 93,
      name: "Laminar",
      tags: ["Dex"],
      twitter: "https://x.com/laminar_xyz",
      logo: "/images/logos/laminar.png",
    },
    {
      id: 94,
      name: "Mizu",
      tags: ["Yield"],
      twitter: "https://x.com/mizulabs",
      logo: "/images/logos/mizu.png",
    },
    {
      id: 95,
      name: "Hypershot",
      tags: ["Trading", "Tools"],
      twitter: "https://x.com/Hypershot_xyz",
      logo: "/images/logos/hypershot.png",
    },
    {
      id: 96,
      name: "Hyperflash",
      tags: ["LST"],
      twitter: "https://x.com/HyperFlash_hl",
      logo: "/images/logos/hyperflash.png",
    },
    {
      id: 97,
      name: "Fan App",
      tags: ["Tools"],
      twitter: "https://x.com/fanappX",
      logo: "/images/logos/fan.png",
    },
    {
      id: 98,
      name: "Sentiment",
      tags: ["LST"],
      twitter: "https://x.com/sentimentxyz",
      logo: "/images/logos/sentient.png",
    },
    {
      id: 99,
      name: "Hypernews",
      tags: ["News"],
      twitter: "https://x.com/HyperliquidNews",
      logo: "/images/logos/hypernews.png",
    },
    {
      id: 100,
      name: "Unit",
      tags: ["Yield", "Defi"],
      twitter: "https://x.com/hyperunit",
      logo: "/images/logos/unit.png",
    },
    {
      id: 101,
      name: "HiveFi",
      tags: ["Defi"],
      twitter: "https://x.com/HiveFi_X",
      logo: "/images/logos/hivefi.png",
    },
    {
      id: 102,
      name: "Gigabrain",
      tags: ["Tools", "Trading", "AI"],
      twitter: "https://x.com/GigabrainGG",
      logo: "/images/logos/gigabrain.png",
    },
    {
      id: 103,
      name: "Perpflow",
      tags: ["Trading"],
      twitter: "https://x.com/perpflow",
      logo: "/images/logos/perpflow.png",
    },
    {
      id: 104,
      name: "HyperProjects",
      tags: ["News"],
      twitter: "https://x.com/HyperProjectsX",
      logo: "/images/logos/hyperproject.png",
    },
    {
      id: 105,
      name: "Ezpairs",
      tags: ["Trading"],
      twitter: "https://x.com/EzPairs/photo",
      logo: "/images/logos/expairs.png",
    },
    {
      id: 106,
      name: "Altitude",
      tags: ["Infra"],
      twitter: "https://x.com/valtitudexyz",
      logo: "/images/logos/altitude.png",
    },
    {
      id: 107,
      name: "LayerZero",
      tags: ["Infra"],
      twitter: "https://x.com/LayerZero_Core/status/1920848296219996251",
      logo: "/images/logos/layerzero.png",
    },
    {
      id: 108,
      name: "SuperX",
      tags: ["Trading"],
      twitter: "https://x.com/trysuper_",
      logo: "/images/logos/superx.png",
    },
    {
      id: 109,
      name: "Dune",
      tags: ["Infra"],
      twitter: "https://x.com/Dune/status/1920465979857150169",
      logo: "/images/logos/dune.png",
    },
    {
      id: 110,
      name: "Liminal",
      tags: ["Yield"],
      twitter: "https://x.com/liminalmoney",
      logo: "/images/logos/liminal.jpg",
    },
    {
      id: 111,
      name: "Hyperwarpfi",
      tags: ["Tools"],
      twitter: "https://x.com/hyperwarpfi",
      logo: "/images/logos/hyperwarpfi.png",
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
    "Stablecoin",
    "News",
    "Landing",
    "Prediction Market"
];

// Define gradients for each category
const categoryGradients = {
    Defi: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    Dex: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    Meme: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    Staking: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    Trading: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    Infra: 'linear-gradient(135deg, #667eea 0%, #48dbfb 100%)',
    Social: 'linear-gradient(135deg, #fc6c8f 0%, #ff9a44 100%)',
    Data: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)',
    Explorer: 'linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%)',
    Analytics: 'linear-gradient(135deg, #13547a 0%, #80d0c7 100%)',
    GambleFi: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    Yield: 'linear-gradient(135deg, #b224ef 0%, #7579ff 100%)',
    LST: 'linear-gradient(135deg, #5f72bd 0%, #9b23ea 100%)',
    Oracle: 'linear-gradient(135deg, #09203f 0%, #537895 100%)',
    Tools: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    Community: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    AI: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
    NFT: 'linear-gradient(135deg, #ee5a6f 0%, #f29263 100%)',
    RWA: 'linear-gradient(135deg, #16a085 0%, #f4d03f 100%)',
    Mobile: 'linear-gradient(135deg, #3a7bd5 0%, #3a6073 100%)',
    Investment: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
    Stablecoin: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    News: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)',
    Landing: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    "Prediction Market": 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
    default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
};

// Category colors for nodes
const categoryColors = {
    Defi: '#27ae60',
    Dex: '#27ae60',
    Meme: '#27ae60',
    Trading: '#27ae60',
    Infra: '#27ae60',
    Social: '#27ae60',
    Data: '#27ae60',
    Explorer: '#27ae60',
    Analytics: '#27ae60',
    GambleFi: '#27ae60',
    Yield: '#27ae60',
    LST: '#27ae60',
    Oracle: '#27ae60',
    Tools: '#27ae60',
    Community: '#27ae60',
    AI: '#27ae60',
    NFT: '#27ae60',
    RWA: '#27ae60',
    Mobile: '#27ae60',
    Investment: '#27ae60',
    Stablecoin: '#27ae60',
    News: '#27ae60',
    Landing: '#27ae60',
    "Prediction Market": '#27ae60'
};

// Create nodes
const nodes = new vis.DataSet([
    // Central node - increased size
    { id: 'hyperEVM', label: '', shape: 'circularImage', image: 'images/hyperliquid.png', size: 120, color: { background: 'rgba(0,0,0,0)', border: 'rgba(0,0,0,0)', highlight: 'rgba(0,0,0,0)', hover: 'rgba(0,0,0,0)' }, borderWidth: 2, font: { color: 'rgba(0,0,0,0)', size: 1 } }
]);

// Add category nodes - increased size and font
tags.forEach(tag => {
    nodes.add({
        id: tag,
        label: tag,
        color: {
            background: 'rgba(0,0,0,0)',
            border: '#000',
            highlight: { background: 'rgba(0,0,0,0)', border: '#000' },
            hover: { background: 'rgba(0,0,0,0)', border: '#000' }
        },
        shape: 'box',
        font: { color: '#fff', size: 50 },
        size: 90,
        group: 'category'
    });
});

// Add project nodes - increased size
projects.forEach(project => {
    let logoPath = project.logo ? project.logo.replace('/images/logos/', '/images/') : '/images/placeholder.svg';
    nodes.add({
        id: `project-${project.id}`,
        color: undefined,
        shape: 'circularImage',
        image: logoPath,
        brokenImage: '/images/placeholder.svg',
        size: 80,
        project: project
    });
});

// Create edges
const edges = new vis.DataSet([]);

// Connect categories to hyperEVM
tags.forEach(tag => {
    edges.add({
        from: 'hyperEVM',
        to: tag,
        width: 3,
        color: { color: 'rgba(20, 216, 121, 0.5)' },
        dashes: true
    });
});

// Connect projects to their tags
projects.forEach(project => {
    project.tags.forEach(tag => {
        edges.add({
            from: tag,
            to: `project-${project.id}`,
            width: 2,
            color: { color: 'rgba(255,255,255,0.2)' }
        });
    });
});

// Collection box state
let collectedProjects = [];
let isCollectionBoxVisible = false;
let draggedNode = null;
let isDraggingToCollection = false;

// Node removal state
let isNodeRemovalMode = false;
let removedNodeIds = [];
let originalFilteredProjects = [];

// Category filtering state
let selectedCategories = [];

// Initialize the network
let network = null;

function initializeGraph() {
    const container = document.getElementById('graph-container');
    
    const data = {
        nodes: nodes,
        edges: edges
    };
    
    const options = {
        physics: {
            enabled: true,
            solver: 'forceAtlas2Based',
            forceAtlas2Based: {
                gravitationalConstant: -150,
                centralGravity: 0.005,
                springLength: 420,
                springConstant: 0.05,
                damping: 0.4,
                avoidOverlap: 1.2
            },
            stabilization: {
                enabled: true,
                iterations: 2000,
                updateInterval: 100
            }
        },
        layout: {
            improvedLayout: true,
            clusterThreshold: 150,
            hierarchical: false
        },
        nodes: {
            borderWidth: 0,
            borderWidthSelected: 0,
            font: {
                size: 20,
                strokeWidth: 3,
                strokeColor: 'rgba(19, 75, 0, 0.44)'
            },
            shadow: true,
            scaling: {
                min: 30,
                max: 120
            }
        },
        edges: {
            width: 2,
            color: {
                color: 'rgba(255,255,255,0.3)',
                highlight: 'rgba(255,255,255,0.8)',
                hover: 'rgba(255,255,255,0.6)'
            },
            smooth: {
                type: 'continuous',
                roundness: 0.5
            },
            shadow: false,
            hoverWidth: 3
        },
        interaction: {
            hover: true,
            tooltipDelay: 200,
            navigationButtons: true,
            keyboard: true,
            zoomView: true,
            dragView: true
        },
        groups: {
            category: {
                shape: 'box',
                font: {
                    size: 20,
                    color: '#ffffff'
                }
            }
        }
    };
    
    network = new vis.Network(container, data, options);
    
    // Handle node selection
    network.on("click", function(params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = nodes.get(nodeId);
            
            // Handle node removal mode
            if (isNodeRemovalMode && node.project) {
                removeNodeFromGraph(nodeId);
                return;
            }
            
            displayNodeInfo(nodeId, node);
        }
    });
    
    // Handle drag start
    network.on("dragStart", function(params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = nodes.get(nodeId);
            if (node.project && !isNodeRemovalMode) {
                draggedNode = node;
                showCollectionBox();
            }
        }
    });
    
    // Handle drag end and detect drop on collection box
    network.on("dragEnd", function(params) {
        if (draggedNode && isCollectionBoxVisible && !isNodeRemovalMode) {
            const pointer = params.pointer.DOM;
            const collectionBox = document.getElementById('project-collection-box');
            const boxRect = collectionBox.getBoundingClientRect();
            
            // Check if dropped on collection box
            if (pointer.x >= boxRect.left && pointer.x <= boxRect.right &&
                pointer.y >= boxRect.top && pointer.y <= boxRect.bottom &&
                collectedProjects.length < 4) {
                
                // Check if project is not already collected
                if (!collectedProjects.find(p => p.id === draggedNode.project.id)) {
                    addProjectToCollection(draggedNode.project);
                }
            }
        }
        draggedNode = null;
    });
    
    // Handle hover effects
    network.on("hoverNode", function(params) {
        document.body.style.cursor = 'pointer';
        
        // In node removal mode, replace project node image with red cross
        if (isNodeRemovalMode) {
            const nodeId = params.node;
            const node = nodes.get(nodeId);
            
            if (node && node.project) {
                // Store original image if not already stored
                if (!node.originalImage) {
                    node.originalImage = node.image;
                }
                
                // Create red cross data URL
                const redCrossDataUrl = createRedCrossDataUrl();
                
                // Update node with red cross image
                nodes.update({
                    id: nodeId,
                    image: redCrossDataUrl
                });
            }
        }
    });
    
    network.on("blurNode", function(params) {
        document.body.style.cursor = 'default';
        
        // In node removal mode, restore original image when not hovering
        if (isNodeRemovalMode) {
            const nodeId = params.node;
            const node = nodes.get(nodeId);
            
            if (node && node.project && node.originalImage) {
                // Restore original image
                nodes.update({
                    id: nodeId,
                    image: node.originalImage
                });
            }
        }
    });
    
    // Handle mouse movement for overlay positioning
    network.on("hoverNode", function(params) {
        if (isNodeRemovalMode) {
            const nodeId = params.node;
            const node = nodes.get(nodeId);
            
            if (node && node.project) {
                updateRedCrossPosition(params.pointer.DOM);
            }
        }
    });
    
    // Center the hyperEVM node
    network.on("stabilizationIterationsDone", function() {
        network.fit({
            nodes: ['hyperEVM'],
            animation: {
                duration: 1000,
                easingFunction: 'easeInOutQuad'
            }
        });
    });
    
    // Initialize collection box and BIRU BIRU functionality
    initializeCollectionBox();
    initializeBiruBiru();
}

// Apply glow effect to HyperEVM node
function applyHyperEVMGlow() {
    // Simple approach - just log that CSS is handling the glow
    console.log('Canvas glow effect applied via CSS');
}

// Add CSS animation for pulsing glow
const style = document.createElement('style');
style.textContent = `
    @keyframes hyperEVMPulse {
        0%, 100% {
            filter: 
                drop-shadow(0 0 20px rgba(39, 174, 96, 1.0))
                drop-shadow(0 0 40px rgba(39, 174, 96, 0.8))
                drop-shadow(0 0 60px rgba(39, 174, 96, 0.6))
                drop-shadow(0 0 80px rgba(39, 174, 96, 0.4))
                drop-shadow(0 0 100px rgba(39, 174, 96, 0.2));
            transform: scale(1);
        }
        50% {
            filter: 
                drop-shadow(0 0 30px rgba(39, 174, 96, 1.0))
                drop-shadow(0 0 60px rgba(39, 174, 96, 0.9))
                drop-shadow(0 0 90px rgba(39, 174, 96, 0.7))
                drop-shadow(0 0 120px rgba(39, 174, 96, 0.5))
                drop-shadow(0 0 150px rgba(39, 174, 96, 0.3));
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);

// BIRU BIRU functionality
function initializeBiruBiru() {
    const biruBiruBtn = document.getElementById('biru-biru-btn');
    const resetCategoriesBtn = document.getElementById('reset-categories-btn');
    const shareBtn = document.getElementById('share-btn');
    
    biruBiruBtn.addEventListener('click', toggleNodeRemovalMode);
    resetCategoriesBtn.addEventListener('click', resetRemovedNodes);
    shareBtn.addEventListener('click', handleShare);
}

function showBiruBiruButton() {
    const container = document.getElementById('biru-biru-container');
    container.style.display = 'flex';
}

function hideBiruBiruButton() {
    const container = document.getElementById('biru-biru-container');
    const actionButtons = document.getElementById('action-buttons');
    container.style.display = 'none';
    actionButtons.style.display = 'none';
    
    // Exit node removal mode if active
    if (isNodeRemovalMode) {
        exitNodeRemovalMode();
    }
}

function toggleNodeRemovalMode() {
    if (!isNodeRemovalMode) {
        enterNodeRemovalMode();
    } else {
        exitNodeRemovalMode();
    }
}

function enterNodeRemovalMode() {
    isNodeRemovalMode = true;
    const graphContainer = document.getElementById('graph-container');
    const biruContainer = document.querySelector('.biru-biru-container');
    
    // Add removal mode class
    graphContainer.classList.add('node-removal-mode');
    biruContainer.classList.add('node-removal-mode');
    
    // Show action buttons
    const actionButtons = document.getElementById('action-buttons');
    actionButtons.style.display = 'flex';
    
    // Update button text and style
    const biruBiruBtn = document.getElementById('biru-biru-btn');
    biruBiruBtn.textContent = 'EXIT MODE';
    biruBiruBtn.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
    
    // Fit all visible nodes in the canvas
    network.fit({
        animation: {
            duration: 1000,
            easingFunction: 'easeInOutQuad'
        }
    });
    
    console.log('Entered node removal mode');
    console.log('Graph container classes:', graphContainer.classList.toString());
    console.log('Container has removal class:', graphContainer.classList.contains('node-removal-mode'));
}

function exitNodeRemovalMode() {
    isNodeRemovalMode = false;
    const graphContainer = document.getElementById('graph-container');
    const biruContainer = document.querySelector('.biru-biru-container');
    
    // Remove removal mode class
    graphContainer.classList.remove('node-removal-mode');
    biruContainer.classList.remove('node-removal-mode');
    
    // Hide action buttons
    const actionButtons = document.getElementById('action-buttons');
    actionButtons.style.display = 'none';
    
    // Reset button text and style
    const biruBiruBtn = document.getElementById('biru-biru-btn');
    biruBiruBtn.textContent = 'BIRU BIRU';
    biruBiruBtn.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    
    // Remove visual feedback
    graphContainer.style.border = 'none';
    graphContainer.style.borderRadius = '10px';
    
    // Restore all original node images
    restoreAllOriginalImages();
    
    console.log('Exited node removal mode');
}

// Restore original images for all project nodes
function restoreAllOriginalImages() {
    projects.forEach(project => {
        const nodeId = `project-${project.id}`;
        const node = nodes.get(nodeId);
        
        if (node && node.originalImage) {
            nodes.update({
                id: nodeId,
                image: node.originalImage
            });
            // Clear the stored original image
            delete node.originalImage;
        }
    });
}

function removeNodeFromGraph(nodeId) {
    console.log('Removing node:', nodeId);
    
    // Add to removed list
    if (!removedNodeIds.includes(nodeId)) {
        removedNodeIds.push(nodeId);
    }
    
    // Hide the node and its edges
    nodes.update({id: nodeId, hidden: true});
    
    // Hide edges connected to this node
    const connectedEdges = edges.get({
        filter: edge => edge.from === nodeId || edge.to === nodeId
    });
    
    connectedEdges.forEach(edge => {
        edges.update({id: edge.id, hidden: true});
    });
    
    console.log('Total removed nodes:', removedNodeIds.length);
}

function resetRemovedNodes() {
    console.log('Resetting removed nodes');
    
    // Show all previously removed nodes
    removedNodeIds.forEach(nodeId => {
        nodes.update({id: nodeId, hidden: false});
    });
    
    // Show all edges for current filter
    const currentCategories = window.selectedCategories || [];
    filterGraphByCategories(currentCategories);
    
    // Clear removed list
    removedNodeIds = [];
    
    console.log('All nodes restored');
}

function handleShare() {
    console.log('Opening share popup...');
    captureGraphImage();
}

// Share popup functions
function captureGraphImage() {
    try {
        console.log('Starting graph capture...');
        
        // Check if network is initialized
        if (!network) {
            console.error('Network not initialized');
            alert('Graph not ready. Please wait for the graph to load completely.');
            return;
        }
        
        // Directly capture without fitting (to avoid potential issues)
        performGraphCapture();
        
    } catch (error) {
        console.error('Error preparing graph for capture:', error);
        alert('Unable to prepare graph for capture: ' + error.message);
    }
}

function performGraphCapture() {
    try {
        console.log('Performing graph capture...');
        
        // Multiple methods to find the canvas
        let networkCanvas = null;
        
        // Method 1: Direct query selector
        networkCanvas = document.querySelector('#graph-container canvas');
        console.log('Method 1 - Direct selector:', networkCanvas);
        
        if (!networkCanvas) {
            // Method 2: Vis.js specific selector
            networkCanvas = document.querySelector('#graph-container .vis-network canvas');
            console.log('Method 2 - Vis selector:', networkCanvas);
        }
        
        if (!networkCanvas) {
            // Method 3: Find all canvases and use the first one
            const allCanvases = document.querySelectorAll('#graph-container canvas');
            console.log('Method 3 - All canvases:', allCanvases);
            if (allCanvases.length > 0) {
                networkCanvas = allCanvases[0];
            }
        }
        
        if (!networkCanvas) {
            // Method 4: Try to access canvas from network object
            try {
                if (network && network.canvas && network.canvas.frame && network.canvas.frame.canvas) {
                    networkCanvas = network.canvas.frame.canvas;
                    console.log('Method 4 - Network object:', networkCanvas);
                }
            } catch (e) {
                console.log('Method 4 failed:', e);
            }
        }
        
        if (!networkCanvas) {
            console.error('No canvas found with any method');
            alert('Unable to find graph canvas. Please make sure the graph is fully loaded.');
            return;
        }
        
        console.log('Found canvas:', networkCanvas);
        console.log('Canvas dimensions:', networkCanvas.width, 'x', networkCanvas.height);
        
        // Validate canvas has proper dimensions
        if (!networkCanvas.width || !networkCanvas.height) {
            console.error('Canvas has invalid dimensions');
            alert('Graph canvas not properly initialized. Please wait for the graph to load completely.');
            return;
        }
        
        // Get the share canvas
        const shareCanvas = document.getElementById('share-canvas');
        if (!shareCanvas) {
            console.error('Share canvas not found');
            alert('Share popup not properly initialized.');
            return;
        }
        
        const ctx = shareCanvas.getContext('2d');
        
        // Instead of trying to get bounding box, just capture the entire canvas
        // at very high resolution for crisp quality
        const sourceWidth = networkCanvas.width;
        const sourceHeight = networkCanvas.height;
        
        console.log('Source dimensions:', sourceWidth, 'x', sourceHeight);
        
        // Set ultra-high resolution dimensions for crisp quality
        const scalingFactor = 4; // 4x scaling for ultra-high resolution
        const targetWidth = Math.min(4000, sourceWidth * scalingFactor);  // Max 4000px width, 4x scale
        const targetHeight = Math.min(3200, sourceHeight * scalingFactor); // Max 3200px height, 4x scale
        
        // Calculate scale to maintain aspect ratio
        const scale = Math.min(targetWidth / sourceWidth, targetHeight / sourceHeight);
        const canvasWidth = Math.floor(sourceWidth * scale);
        const canvasHeight = Math.floor(sourceHeight * scale);
        
        // For display in popup, scale down to reasonable size
        const maxDisplayWidth = 800;
        const maxDisplayHeight = 640;
        const displayScale = Math.min(maxDisplayWidth / canvasWidth, maxDisplayHeight / canvasHeight);
        const displayWidth = Math.floor(canvasWidth * displayScale);
        const displayHeight = Math.floor(canvasHeight * displayScale);
        
        console.log('Canvas dimensions:', canvasWidth, 'x', canvasHeight);
        console.log('Display dimensions:', displayWidth, 'x', displayHeight);
        console.log('Scale factor:', scale);
        
        // Set canvas to ultra-high resolution for capture
        shareCanvas.width = canvasWidth;
        shareCanvas.height = canvasHeight;
        
        // Set CSS size for display (much smaller for popup viewing)
        shareCanvas.style.width = displayWidth + 'px';
        shareCanvas.style.height = displayHeight + 'px';
        
        // Enable ultra-high-quality rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // Scale the context for high-DPI rendering
        const devicePixelRatio = window.devicePixelRatio || 1;
        if (devicePixelRatio > 1) {
            // Further enhance for high-DPI displays
            ctx.scale(1, 1); // Keep 1:1 ratio but ensure crisp rendering
        }
        
        // Fill with dark background
        ctx.fillStyle = '#0C2926';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        // Draw the entire network canvas at high resolution
        try {
            ctx.drawImage(
                networkCanvas,
                0, 0, sourceWidth, sourceHeight,    // Source: entire canvas
                0, 0, canvasWidth, canvasHeight     // Destination: high resolution
            );
            
            console.log('High-resolution image drawn successfully');
            
            // Add watermarks (scaled for high resolution)
            addWatermarkToCanvas(ctx, canvasWidth, canvasHeight);
            
            // Show the popup
            showSharePopup();
            
        } catch (drawError) {
            console.error('Error drawing image:', drawError);
            alert('Error capturing graph image: ' + drawError.message);
        }
        
    } catch (error) {
        console.error('Error in performGraphCapture:', error);
        alert('Unable to capture graph image: ' + error.message);
    }
}

function addWatermarkToCanvas(ctx, width, height) {
    // Calculate scale factor for text based on image size (ultra-high resolution scaling)
    const baseWidth = 1000; // Higher reference width for ultra-high resolution
    const scaleFactor = Math.max(1.5, width / baseWidth); // Minimum scale of 1.5 for crisp text
    
    // Add title at the top (scaled text)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = `bold ${Math.floor(48 * scaleFactor)}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('HyperEVM Ecosystem - My Custom Graph', width / 2, 80 * scaleFactor);
    
    // Add subtitle (scaled text)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = `${Math.floor(28 * scaleFactor)}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    const selectedCount = selectedCategories.length;
    const removedCount = removedNodeIds.length;
    ctx.fillText(`${selectedCount} categories selected • ${removedCount} projects removed`, width / 2, 130 * scaleFactor);
    
    // Add small watermark at bottom right (scaled text)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = `${Math.floor(22 * scaleFactor)}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    ctx.textAlign = 'right';
    ctx.fillText('hyperevm.org', width - 50 * scaleFactor, height - 50 * scaleFactor);
}

function showSharePopup() {
    const popup = document.getElementById('share-popup');
    popup.style.display = 'flex';
    
    // Initialize button event listeners
    initializeShareButtons();
}

function closeSharePopup() {
    const popup = document.getElementById('share-popup');
    popup.style.display = 'none';
}

function initializeShareButtons() {
    const copyBtn = document.getElementById('copy-image-btn');
    const downloadBtn = document.getElementById('download-image-btn');
    
    // Remove existing event listeners to prevent duplicates
    copyBtn.replaceWith(copyBtn.cloneNode(true));
    downloadBtn.replaceWith(downloadBtn.cloneNode(true));
    
    // Get fresh references
    const newCopyBtn = document.getElementById('copy-image-btn');
    const newDownloadBtn = document.getElementById('download-image-btn');
    
    newCopyBtn.addEventListener('click', copyImageToClipboard);
    newDownloadBtn.addEventListener('click', downloadImage);
}

async function copyImageToClipboard() {
    try {
        const canvas = document.getElementById('share-canvas');
        
        // Convert canvas to blob
        canvas.toBlob(async (blob) => {
            try {
                // Use the Clipboard API to copy the image
                await navigator.clipboard.write([
                    new ClipboardItem({
                        'image/png': blob
                    })
                ]);
                
                // Show success feedback
                showCopySuccess();
                
            } catch (error) {
                console.error('Failed to copy image:', error);
                // Fallback: create a download link
                fallbackCopyMethod(canvas);
            }
        }, 'image/png', 1.0);
        
    } catch (error) {
        console.error('Error copying image:', error);
        alert('Unable to copy image to clipboard');
    }
}

function fallbackCopyMethod(canvas) {
    // Create a temporary download link as fallback
    const link = document.createElement('a');
    link.download = 'hyperevm-graph.png';
    link.href = canvas.toDataURL('image/png', 1.0);
    
    // Show message to user
    alert('Clipboard not supported. Image will be downloaded instead.');
    link.click();
}

function showCopySuccess() {
    const copyBtn = document.getElementById('copy-image-btn');
    const originalText = copyBtn.innerHTML;
    
    copyBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
        Copied!
    `;
    
    copyBtn.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    }, 2000);
}

function downloadImage() {
    try {
        const canvas = document.getElementById('share-canvas');
        const link = document.createElement('a');
        
        // Generate filename with timestamp
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        link.download = `hyperevm-graph-${timestamp}.png`;
        
        // Convert canvas to data URL
        link.href = canvas.toDataURL('image/png', 1.0);
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('Graph image downloaded');
        
    } catch (error) {
        console.error('Error downloading image:', error);
        alert('Unable to download image');
    }
}

// Make functions global for HTML onclick handlers
window.closeSharePopup = closeSharePopup;

// Display node information in the panel
function displayNodeInfo(nodeId, node) {
    // For project nodes
    if (node.project) {
        const project = node.project;
        document.getElementById('node-title').textContent = project.name;
        
        const infoContent = document.getElementById('info-content');
        infoContent.innerHTML = `
            <p><strong>Category:</strong> ${project.tags.join(', ')}</p>
            <p><strong>Twitter:</strong> <a href="${project.twitter}" target="_blank" style="color: rgba(255,255,255,0.8); text-decoration: underline;">Visit Twitter</a></p>
            ${project.logo ? `<img src="${project.logo}" alt="${project.name}" style="max-width: 100px; margin-top: 10px; border-radius: 10px;">` : ''}
            <p style="margin-top: 15px; color: rgba(255,255,255,0.7); font-size: 14px;"><em>Drag this project to the collection box to save it.</em></p>
        `;
        
        document.querySelector('.node-indicator').style.background = '#27ae60';
        document.querySelector('.node-indicator').style.boxShadow = '0 0 10px #27ae60';
        
        document.getElementById('category-multiselect-container').style.display = 'none';
        return;
    }
    
    // For category nodes
    if (tags.includes(nodeId)) {
        const projectsInCategory = projects.filter(p => p.tags.includes(nodeId));
        document.getElementById('node-title').textContent = nodeId;
        
        const infoContent = document.getElementById('info-content');
        infoContent.innerHTML = `
            <p><strong>${projectsInCategory.length} projects</strong> in this category.</p>
            <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 10px;">
                ${projectsInCategory.map(p => `
                    <div style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; padding: 6px 10px;">
                        <img src="${p.logo ? p.logo.replace('/images/logos/', '/images/') : '/images/placeholder.svg'}" alt="${p.name}" style="width: 32px; height: 32px; border-radius: 50%; background: #fff; object-fit: cover; border: 1.5px solid #27ae60;">
                        <span style="color: #fff; font-size: 15px;">${p.name}</span>
                        <a href="${p.twitter}" target="_blank" style="margin-left: 8px; display: flex; align-items: center; text-decoration: none;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1da1f2" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.086A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.387 5.976 4.47 4.47 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.114A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.785-6.84 12.785-12.785 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/></svg>
                        </a>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.querySelector('.node-indicator').style.background = '#27ae60';
        document.querySelector('.node-indicator').style.boxShadow = '0 0 10px #27ae60';
        
        document.getElementById('category-multiselect-container').style.display = 'none';
        return;
    }
    
    // For hyperEVM node
    if (nodeId === 'hyperEVM') {
        // Hide collection box when selecting hyperEVM if empty
        if (isCollectionBoxVisible && collectedProjects.length === 0) {
            hideCollectionBox();
        }
        
        document.getElementById('node-title').textContent = 'hyperEVM';
        
        
        document.querySelector('.node-indicator').style.background = '#27ae60';
        document.querySelector('.node-indicator').style.boxShadow = '0 0 10px #27ae60';
        
        // Show and populate category chips
        const multiSelectContainer = document.getElementById('category-multiselect-container');
        const chipsContainer = document.getElementById('category-chips-container');
        multiSelectContainer.style.display = 'block';
        
        // Generate category chips
        chipsContainer.innerHTML = tags.map(tag => `
            <div class="category-chip ${window.selectedCategories && window.selectedCategories.includes(tag) ? 'selected' : ''}" 
                 data-category="${tag}" onclick="toggleCategoryChip('${tag}')">
                ${tag}
            </div>
        `).join('');
        
        // Apply current filter
        filterGraphByCategories(window.selectedCategories || []);
        return;
    }
}

// Function to toggle category chip selection
function toggleCategoryChip(category) {
    const chip = document.querySelector(`[data-category="${category}"]`);
    
    if (chip.classList.contains('selected')) {
        chip.classList.remove('selected');
        selectedCategories = selectedCategories.filter(c => c !== category);
    } else {
        chip.classList.add('selected');
        selectedCategories.push(category);
    }
    
    // Store globally for access by other functions
    window.selectedCategories = selectedCategories;
    
    console.log('Selected categories:', selectedCategories);
    filterGraphByCategories(selectedCategories);
}

// Make the function global
window.toggleCategoryChip = toggleCategoryChip;

// Update section content
function updateSection(sectionName, items) {
    const content = document.getElementById(`${sectionName}-content`);
    if (items && items.length > 0) {
        content.innerHTML = items.map(item => `<div style="padding: 8px 0; color: rgba(255,255,255,0.8);">• ${item}</div>`).join('');
    } else {
        content.innerHTML = '<div style="padding: 8px 0; color: rgba(255,255,255,0.6);">No items available</div>';
    }
}

// Handle collapsible sections
document.addEventListener('DOMContentLoaded', function() {
    // Initialize graph
    initializeGraph();
    
    // Fetch and display HYPE data
    fetchHypeData();
    
    // Fetch and display HYPE price data
    fetchHypePrice();
    
    // Handle section toggles
    const toggleButtons = document.querySelectorAll('.section-toggle');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionItem = this.closest('.section-item');
            sectionItem.classList.toggle('active');
        });
    });
    
    // Select hyperEVM node by default
    setTimeout(() => {
        network.selectNodes(['hyperEVM']);
        displayNodeInfo('hyperEVM', nodes.get('hyperEVM'));
        network.focus('hyperEVM', {
            scale: 0.3,
            animation: {
                duration: 1500,
                easingFunction: 'easeInOutQuad'
            }
        });
    }, 2000);
});

// On page load, clear selection
window.selectedCategories = [];

// Add a test function to manually trigger the central logo
window.testCentralLogo = function() {
    console.log('Manual test of central logo');
    showCentralLogo();
}

// Red cross overlay functions
function showRedCrossOverlay(pointer) {
    const overlay = document.getElementById('node-removal-overlay');
    const graphContainer = document.getElementById('graph-container');
    const containerRect = graphContainer.getBoundingClientRect();
    
    overlay.style.display = 'block';
    overlay.style.left = (pointer.x - 30) + 'px'; // Center the 60px overlay
    overlay.style.top = (pointer.y - 30) + 'px';
}

function hideRedCrossOverlay() {
    const overlay = document.getElementById('node-removal-overlay');
    overlay.style.display = 'none';
}

function updateRedCrossPosition(pointer) {
    const overlay = document.getElementById('node-removal-overlay');
    if (overlay.style.display === 'block') {
        overlay.style.left = (pointer.x - 30) + 'px';
        overlay.style.top = (pointer.y - 30) + 'px';
    }
}

// Update the filtering logic to show BIRU BIRU button
function filterGraphByCategories(selectedCategories) {
    if (!selectedCategories || selectedCategories.length === 0) {
        // Show all nodes and edges
        nodes.forEach(n => nodes.update({id: n.id, hidden: false}));
        edges.forEach(e => edges.update({id: e.id, hidden: false}));
        hideBiruBiruButton();
        return;
    }
    
    // Hide all nodes and edges first
    nodes.forEach(n => nodes.update({id: n.id, hidden: true}));
    edges.forEach(e => edges.update({id: e.id, hidden: true}));
    
    // Always show hyperEVM
    nodes.update({id: 'hyperEVM', hidden: false});
    
    // Show selected categories and their projects
    selectedCategories.forEach(tag => {
        nodes.update({id: tag, hidden: false});
        // Show edge from hyperEVM to category
        const edge = edges.get({filter: e => e.from === 'hyperEVM' && e.to === tag});
        if (edge.length > 0) edges.update({id: edge[0].id, hidden: false});
        
        // Show projects for this category (excluding removed ones)
        projects.forEach(project => {
            if (project.tags.includes(tag)) {
                const projectNodeId = `project-${project.id}`;
                if (!removedNodeIds.includes(projectNodeId)) {
                    nodes.update({id: projectNodeId, hidden: false});
                    // Show edge from category to project
                    const edge2 = edges.get({filter: e => e.from === tag && e.to === projectNodeId});
                    if (edge2.length > 0) edges.update({id: edge2[0].id, hidden: false});
                }
            }
        });
    });
    
    // Show BIRU BIRU button when categories are filtered
    showBiruBiruButton();
    
    // Auto-fit all visible nodes with a slight delay to ensure rendering is complete
    setTimeout(() => {
        if (network) {
            network.fit({
                animation: {
                    duration: 1000,
                    easingFunction: 'easeInOutQuad'
                }
            });
        }
    }, 100);
}

// Collection box functions
function showCollectionBox() {
    const collectionBox = document.getElementById('project-collection-box');
    if (!isCollectionBoxVisible) {
        collectionBox.style.display = 'block';
        collectionBox.classList.remove('hiding');
        isCollectionBoxVisible = true;
    }
}

function hideCollectionBox() {
    const collectionBox = document.getElementById('project-collection-box');
    collectionBox.classList.add('hiding');
    isCollectionBoxVisible = false;
    setTimeout(() => {
        collectionBox.style.display = 'none';
        collectionBox.classList.remove('hiding');
    }, 300);
}

function initializeCollectionBox() {
    const resetBtn = document.getElementById('reset-collection');
    resetBtn.addEventListener('click', resetCollection);
    
    // Add hover effects for collection box
    const collectionBox = document.getElementById('project-collection-box');
    collectionBox.addEventListener('mouseenter', () => {
        if (draggedNode) {
            collectionBox.style.borderColor = 'rgba(39, 174, 96, 0.8)';
            collectionBox.style.background = 'rgba(39, 174, 96, 0.1)';
        }
    });
    
    collectionBox.addEventListener('mouseleave', () => {
        collectionBox.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        collectionBox.style.background = 'rgba(255, 255, 255, 0.1)';
    });
}

function addProjectToCollection(project) {
    if (collectedProjects.length >= 4) return;
    
    const slotIndex = collectedProjects.length;
    collectedProjects.push({...project, slotIndex});
    renderCollectionSlot(slotIndex, project);
    
    console.log('Projects collected:', collectedProjects.length);
    console.log('Collection array:', collectedProjects.map(p => p.name));
    
    // Show central logo if all 4 slots are filled
    if (collectedProjects.length === 4) {
        console.log('All 4 slots filled! Attempting to show central logo...');
        setTimeout(() => {
            showCentralLogo();
        }, 100); // Small delay to ensure DOM is updated
    }
}

function renderCollectionSlot(slotIndex, project) {
    const slot = document.querySelector(`[data-slot="${slotIndex}"]`);
    const logoPath = project.logo ? project.logo.replace('/images/logos/', '/images/') : '/images/placeholder.svg';
    
    slot.classList.add('filled');
    slot.innerHTML = `
        <img src="${logoPath}" alt="${project.name}" class="project-logo" title="${project.name}">
        <div class="remove-project" onclick="removeProjectFromSlot(${slotIndex})">×</div>
    `;
}

function removeProjectFromSlot(slotIndex) {
    const projectIndex = collectedProjects.findIndex(p => p.slotIndex === slotIndex);
    
    if (projectIndex > -1) {
        const slot = document.querySelector(`[data-slot="${slotIndex}"]`);
        
        // Hide central logo if it's visible
        if (collectedProjects.length === 4) {
            hideCentralLogo();
        }
        
        // Add pop animation
        slot.classList.add('popping');
        
        setTimeout(() => {
            // Remove project and reindex remaining projects
            collectedProjects.splice(projectIndex, 1);
            
            // Clear all slots and re-render
            const allSlots = document.querySelectorAll('.collection-slot');
            allSlots.forEach(slot => {
                slot.classList.remove('filled', 'popping');
                slot.innerHTML = '';
            });
            
            // Re-render remaining projects with updated indices
            collectedProjects.forEach((project, index) => {
                project.slotIndex = index;
                renderCollectionSlot(index, project);
            });
            
            // Hide collection box if empty
            if (collectedProjects.length === 0) {
                hideCollectionBox();
            }
        }, 400);
    }
}

function resetCollection() {
    if (collectedProjects.length === 0) return;
    
    // Hide central logo if visible
    if (collectedProjects.length === 4) {
        hideCentralLogo();
    }
    
    const filledSlots = document.querySelectorAll('.collection-slot.filled');
    
    // Add staggered pop animations
    filledSlots.forEach((slot, index) => {
        setTimeout(() => {
            slot.classList.add('popping');
        }, index * 100);
    });
    
    // Clear collection after animations complete
    setTimeout(() => {
        collectedProjects = [];
        const allSlots = document.querySelectorAll('.collection-slot');
        allSlots.forEach(slot => {
            slot.classList.remove('filled', 'popping');
            slot.innerHTML = '';
        });
        hideCollectionBox();
    }, filledSlots.length * 100 + 400);
}

function showCentralLogo() {
    console.log('showCentralLogo called');
    const centerElement = document.getElementById('collection-center');
    console.log('Center element found:', centerElement);
    console.log('Current display style:', centerElement ? centerElement.style.display : 'element not found');
    
    if (centerElement) {
        // Force show with important styles
        centerElement.style.display = 'block';
        centerElement.style.visibility = 'visible';
        centerElement.style.opacity = '1';
        centerElement.classList.remove('hiding');
        
        // Force a reflow
        centerElement.offsetHeight;
        
        console.log('Central logo should now be visible');
        console.log('Final display style:', centerElement.style.display);
        console.log('Final visibility:', centerElement.style.visibility);
        console.log('Final opacity:', centerElement.style.opacity);
    } else {
        console.error('collection-center element not found!');
        // Try to find it with a different method
        const allElements = document.querySelectorAll('#collection-center');
        console.log('Found elements with id collection-center:', allElements.length);
    }
}

function hideCentralLogo() {
    console.log('hideCentralLogo called');
    const centerElement = document.getElementById('collection-center');
    if (centerElement) {
        centerElement.classList.add('hiding');
        setTimeout(() => {
            centerElement.style.display = 'none';
            centerElement.classList.remove('hiding');
        }, 400);
    }
}

// Make remove function global
window.removeProjectFromSlot = removeProjectFromSlot;

// Fetch HYPE data from DeFiLlama API
async function fetchHypeData() {
    try {
        console.log('Fetching HYPE TVL data from DeFiLlama API...');
        
        // DeFiLlama API endpoint for chains TVL
        const response = await fetch('https://api.llama.fi/v2/chains');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const chains = await response.json();
        
        // Find Hyperliquid L1 data
        const hyperliquidData = chains.find(chain => 
            chain.name.toLowerCase().includes('hyperliquid') || 
            chain.gecko_id === 'hyperliquid-l1' ||
            chain.name === 'Hyperliquid'
        );
        
        if (hyperliquidData) {
            console.log('Hyperliquid data found:', hyperliquidData);
            
            // Update TVL display
            const tvlValue = hyperliquidData.tvl || 0;
            
            updateHypeTvlDisplay(tvlValue);
            
            // Try to get additional price data (this might need a different endpoint)
            await fetchHypePrice();
        } else {
            console.warn('Hyperliquid data not found in chains response');
            // Try alternative approach with direct API call
            await fetchHyperliquidDirectly();
        }
        
    } catch (error) {
        console.error('Error fetching HYPE data:', error);
        // Keep placeholder data but show it's not real-time
        document.getElementById('hype-tvl').textContent = '$1.2B (Demo)';
    }
}

// Alternative method to fetch Hyperliquid data directly
async function fetchHyperliquidDirectly() {
    try {
        // Try the historical TVL endpoint for Hyperliquid
        const response = await fetch('https://api.llama.fi/v2/historicalChainTvl/Hyperliquid');
        
        if (response.ok) {
            const data = await response.json();
            if (data.length > 0) {
                const latest = data[data.length - 1];
                
                const tvlValue = latest.tvl;
                
                updateHypeTvlDisplay(tvlValue);
            }
        }
    } catch (error) {
        console.error('Error fetching Hyperliquid data directly:', error);
    }
}

// Fetch HYPE token price (placeholder - would need actual price API)
async function fetchHypePrice() {
    try {
        console.log('Fetching HYPE token price from CoinGecko API...');
        
        // CoinGecko API endpoint for HYPE token price
        // Using the provided API key and hyperliquid slug
        const apiKey = 'CG-cM9WbuxHugAkJkqV72bfNmx6';
        const coinId = 'hyperliquid';
        
        const response = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_change=true&x_cg_demo_api_key=${apiKey}`
        );
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data[coinId]) {
            const priceData = data[coinId];
            console.log('HYPE price data found:', priceData);
            
            const price = priceData.usd || 0;
            const priceChange = priceData.usd_24h_change || 0;
            
            updateHypePriceDisplay(price, priceChange);
        } else {
            console.warn('HYPE price data not found in response');
            // Try alternative method with Pro API if available
            await fetchHypePriceAlternative();
        }
        
    } catch (error) {
        console.error('Error fetching HYPE price:', error);
        // Keep placeholder data but show it's not real-time
        document.getElementById('hype-price').textContent = '$12.34 (Demo)';
        document.getElementById('hype-price-change').textContent = '+2.45% (Demo)';
    }
}

// Alternative method to fetch HYPE price with Pro API endpoints
async function fetchHypePriceAlternative() {
    try {
        const apiKey = 'CG-cM9WbuxHugAkJkqV72bfNmx6';
        const coinId = 'hyperliquid';
        
        // Try the coin data endpoint for more detailed information
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_demo_api_key=${apiKey}`
        );
        
        if (response.ok) {
            const data = await response.json();
            if (data.market_data) {
                const price = data.market_data.current_price?.usd || 0;
                const priceChange = data.market_data.price_change_percentage_24h || 0;
                
                updateHypePriceDisplay(price, priceChange);
                console.log('HYPE price fetched via alternative method');
            }
        }
    } catch (error) {
        console.error('Error fetching HYPE price via alternative method:', error);
    }
}

// Update the price display in the sidebar
function updateHypePriceDisplay(price, priceChange) {
    const priceElement = document.getElementById('hype-price');
    const priceChangeElement = document.getElementById('hype-price-change');
    
    // Format price value
    const formattedPrice = formatPriceValue(price);
    priceElement.textContent = formattedPrice;
    
    // Format and display change
    const formattedChange = priceChange >= 0 ? `+${priceChange.toFixed(2)}%` : `${priceChange.toFixed(2)}%`;
    priceChangeElement.textContent = formattedChange;
    
    // Update change class based on positive/negative
    priceChangeElement.className = `stat-change ${priceChange >= 0 ? 'positive' : 'negative'}`;
    
    console.log(`Price updated: ${formattedPrice}, Change: ${formattedChange}`);
}

// Format price value for display
function formatPriceValue(value) {
    if (value >= 1000) {
        return `$${value.toFixed(0)}`;
    } else if (value >= 100) {
        return `$${value.toFixed(1)}`;
    } else if (value >= 10) {
        return `$${value.toFixed(2)}`;
    } else if (value >= 1) {
        return `$${value.toFixed(3)}`;
    } else if (value >= 0.1) {
        return `$${value.toFixed(4)}`;
    } else {
        return `$${value.toFixed(6)}`;
    }
}

// Update the TVL display in the sidebar
function updateHypeTvlDisplay(tvlValue) {
    const tvlElement = document.getElementById('hype-tvl');
    
    // Format TVL value
    const formattedTvl = formatTvlValue(tvlValue);
    tvlElement.textContent = formattedTvl;
    
    console.log(`TVL updated: ${formattedTvl}`);
}

// Format TVL value for display
function formatTvlValue(value) {
    if (value >= 1e9) {
        return `$${(value / 1e9).toFixed(2)}B`;
    } else if (value >= 1e6) {
        return `$${(value / 1e6).toFixed(1)}M`;
    } else if (value >= 1e3) {
        return `$${(value / 1e3).toFixed(1)}K`;
    } else {
        return `$${value.toFixed(2)}`;
    }
}

// Create red cross data URL for node removal mode
function createRedCrossDataUrl() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const size = 80; // Same size as project nodes
    
    canvas.width = size;
    canvas.height = size;
    
    // Fill with semi-transparent red background
    ctx.fillStyle = 'rgba(231, 76, 60, 0.9)';
    ctx.fillRect(0, 0, size, size);
    
    // Draw red cross
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    
    // Draw X
    const margin = size * 0.25;
    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(size - margin, size - margin);
    ctx.moveTo(size - margin, margin);
    ctx.lineTo(margin, size - margin);
    ctx.stroke();
    
    return canvas.toDataURL();
}