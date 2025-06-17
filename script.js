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
    "Landing"
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
    default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
};

// Category colors for nodes
const categoryColors = {
    Defi: '#667eea',
    Dex: '#f093fb',
    Meme: '#fa709a',
    Staking: '#4facfe',
    Trading: '#43e97b',
    Infra: '#667eea',
    Social: '#fc6c8f',
    Data: '#2af598',
    Explorer: '#7028e4',
    Analytics: '#13547a',
    GambleFi: '#ff0844',
    Yield: '#b224ef',
    LST: '#5f72bd',
    Oracle: '#09203f',
    Tools: '#764ba2',
    Community: '#ffecd2',
    AI: '#8E2DE2',
    NFT: '#ee5a6f',
    RWA: '#16a085',
    Mobile: '#3a7bd5',
    Investment: '#134e5e',
    Stablecoin: '#1e3c72',
    News: '#ff4e50',
    Landing: '#11998e'
};

// Create nodes
const nodes = new vis.DataSet([
    // Central node
    { id: 'hyperEVM', label: 'hyperEVM', color: '#1e272e', shape: 'star', font: { color: '#fff', size: 20 }, size: 40 }
]);

// Add category nodes
tags.forEach(tag => {
    nodes.add({
        id: tag,
        label: tag,
        color: categoryColors[tag],
        shape: 'box',
        font: { color: '#fff', size: 16 },
        size: 30,
        group: 'category'
    });
});

// Add project nodes
projects.forEach(project => {
    nodes.add({
        id: `project-${project.id}`,
        label: project.name,
        color: categoryColors[project.tags[0]] || '#888888',
        shape: 'circle',
        font: { color: '#fff', size: 12 },
        size: 20,
        project: project,
        image: project.logo,
        brokenImage: undefined
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
        color: { color: 'rgba(255,255,255,0.3)' }
    });
});

// Connect projects to their tags
projects.forEach(project => {
    project.tags.forEach(tag => {
        edges.add({
            from: tag,
            to: `project-${project.id}`,
            width: 1,
            color: { color: 'rgba(255,255,255,0.2)' }
        });
    });
});

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
                gravitationalConstant: -80,
                centralGravity: 0.005,
                springLength: 250,
                springConstant: 0.05,
                damping: 0.4,
                avoidOverlap: 0.8
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
            borderWidth: 2,
            borderWidthSelected: 3,
            font: {
                size: 12,
                strokeWidth: 3,
                strokeColor: 'rgba(0,0,0,0.5)'
            },
            shadow: true,
            scaling: {
                min: 10,
                max: 40
            }
        },
        edges: {
            width: 1,
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
            hoverWidth: 2
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
                    size: 16,
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
            
            // Change background gradient if it's a category node
            if (node.group === 'category') {
                document.body.style.background = categoryGradients[nodeId];
            } else if (nodeId === 'hyperEVM') {
                document.body.style.background = categoryGradients.default;
            }
            
            displayNodeInfo(nodeId, node);
        }
    });
    
    // Handle hover effects
    network.on("hoverNode", function(params) {
        document.body.style.cursor = 'pointer';
    });
    
    network.on("blurNode", function(params) {
        document.body.style.cursor = 'default';
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
}

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
        `;
        
        document.querySelector('.node-indicator').style.background = node.color;
        document.querySelector('.node-indicator').style.boxShadow = `0 0 10px ${node.color}`;
        
        // Clear sections for projects
        updateSection('initiatives', []);
        updateSection('research', []);
        updateSection('artifacts', []);
        updateSection('paths', []);
        
        return;
    }
    
    // For category nodes
    if (tags.includes(nodeId)) {
        const projectsInCategory = projects.filter(p => p.tags.includes(nodeId));
        document.getElementById('node-title').textContent = nodeId;
        
        const infoContent = document.getElementById('info-content');
        infoContent.innerHTML = `
            <p><strong>${projectsInCategory.length} projects</strong> in this category.</p>
            <div style="margin-top: 15px; max-height: 300px; overflow-y: auto;">
                ${projectsInCategory.map(p => `
                    <div style="padding: 5px 0; color: rgba(255,255,255,0.8);">
                        • ${p.name}
                    </div>
                `).join('')}
            </div>
        `;
        
        document.querySelector('.node-indicator').style.background = node.color;
        document.querySelector('.node-indicator').style.boxShadow = `0 0 10px ${node.color}`;
        
        // Update sections with category info
        updateSection('initiatives', [`${projectsInCategory.length} active projects`]);
        updateSection('research', ['Category analysis', 'Market trends']);
        updateSection('artifacts', ['Project listings', 'Category metrics']);
        updateSection('paths', ['Ecosystem growth', 'Innovation tracking']);
        
        return;
    }
    
    // For hyperEVM node
    if (nodeId === 'hyperEVM') {
        document.getElementById('node-title').textContent = 'hyperEVM';
        
        const infoContent = document.getElementById('info-content');
        infoContent.innerHTML = `
            <p>The central hub connecting ${projects.length} projects across ${tags.length} categories in the HyperEVM ecosystem.</p>
            <p style="margin-top: 15px;"><strong>Total Projects:</strong> ${projects.length}</p>
            <p><strong>Categories:</strong> ${tags.length}</p>
        `;
        
        document.querySelector('.node-indicator').style.background = node.color;
        document.querySelector('.node-indicator').style.boxShadow = `0 0 10px ${node.color}`;
        
        updateSection('initiatives', ['Ecosystem Growth', 'Project Incubation', 'Community Building']);
        updateSection('research', ['DeFi Innovation', 'Cross-chain Technology', 'Scalability Solutions']);
        updateSection('artifacts', ['Smart Contracts', 'Developer Tools', 'Documentation']);
        updateSection('paths', ['Web3 Adoption', 'DeFi Evolution', 'Ecosystem Expansion']);
    }
}

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