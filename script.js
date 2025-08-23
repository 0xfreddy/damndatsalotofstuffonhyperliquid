// Project data
const projects = [
    {
      id: 1,
      name: "felix",
      tags: ["Defi"],
      twitter: "https://x.com/felixprotocol",
      logo: "/images/felix-logo.png",
    },
    {
      id: 2,
      name: "HyperDitto",
      tags: ["Tools"],
      twitter: "https://x.com/hyperditto",
      logo: "/images/hyperditto.png",
    },
    {
      id: 3,
      name: "hyperlend",
      tags: ["Defi"],
      twitter: "https://x.com/hyperlendx",
      logo: "/images/hyperland-logo.png",
    },
    {
      id: 5,
      name: "Katōshi",
      tags: ["Trading", "AI"],
      twitter: "https://x.com/KatoshiAI",
      logo: "/images/katoshi-logo.png",
    },
    {
      id: 6,
      name: "HyperSwap",
      tags: ["Dex"],
      twitter: "https://x.com/HyperSwapX",
      logo: "/images/hyperswap-logo.png",
    },
    {
      id: 7,
      name: "Kinetiq",
      tags: ["LST"],
      twitter: "https://x.com/kinetiq_xyz",
      logo: "/images/kinetiq1-logo.png",
    },
    {
      id: 8,
      name: "HyBridge",
      tags: ["Bridge"],
      twitter: "https://x.com/HyBridgeHL",
      logo: "/images/hybridge-logo.png",
    },
    {
      id: 9,
      name: "HL Names",
      tags: ["Tools", "Social"],
      twitter: "https://x.com/hlnames",
      logo: "/images/hl-names-logo.png",
    },
    {
      id: 10,
      name: "fanfun",
      tags: ["Social", "Meme"],
      twitter: "https://x.com/fan_dot_fun",
      logo: "/images/funfun-logo.png",
    },
    {
      id: 11,
      name: "Kieko Finance",
      tags: ["Defi"],
      twitter: "https://x.com/KeikoFinance",
      logo: "/images/kieko-finance-logo.png",
    },
    {
      id: 12,
      name: "HFun",
      tags: ["Trading", "Social", "Launchpad"],
      twitter: "https://x.com/Hypurrfun",
      logo: "/images/hfun-logo.png",
    },
    {
      id: 13,
      name: "pvp.trade",
      tags: ["Trading", "Social"],
      twitter: "https://x.com/pvp_dot_trade",
      logo: "/images/pvp-trade-logo.png",
    },
    {
      id: 14,
      name: "HyperFun",
      tags: ["GambleFi"],
      twitter: "https://x.com/hyperfunX",
      logo: "/images/hyperfun-logo.png",
    },
    {
      id: 15,
      name: "PurrBurn",
      tags: ["Data"],
      twitter: "https://x.com/janklimo",
      logo: "/images/purrburn-logo.png",
    },
    {
      id: 16,
      name: "Hypurrscan",
      tags: ["Explorer", "Data"],
      twitter: "https://x.com/HypurrScan",
      logo: "/images/hypurrscan-logo.png",
    },
    {
      id: 17,
      name: "Yeeti",
      tags: ["Meme"],
      twitter: "https://x.com/YeetiOnHL",
      logo: "/images/yeeti-logo.png",
    },
    {
      id: 18,
      name: "Catbal",
      tags: ["Meme"],
      twitter: "https://x.com/CatCabal_hl",
      logo: "/images/catcabal-logo.png",
    },
    {
      id: 19,
      name: "Pip",
      tags: ["Meme"],
      twitter: "https://x.com/PipOnHL",
      logo: "/images/pip-logo.png",
    },
    {
      id: 20,
      name: "DeFi LLama",
      tags: ["Analytics", "Data"],
      twitter: "https://x.com/DefiLlama",
      logo: "/images/defillama-logo.png",
    },
    {
      id: 22,
      name: "Hyperbeat",
      tags: ["Defi"],
      twitter: "https://x.com/0xHyperBeat",
      logo: "/images/hyperbeat.png",
    },
    {
        id: 23,
        name: "MaterSwap",
        tags: ["Dex"],
        twitter: "https://x.com/0xHyperBeat",
        logo: "/images/hyperbeat.png",
      },
    {
      id: 25,
      name: "Rage Trade",
      tags: ["Trading"],
      twitter: "https://x.com/rage_trade",
      logo: "/images/rage-trade.png",
    },
    {
      id: 26,
      name: "Hypurr Finance",
      tags: ["Defi"],
      twitter: "https://x.com/hypurrfi",
      logo: "/images/hypurrfinance-logo.png",
    },
    {
      id: 27,
      name: "Hyperstats",
      tags: ["Analytics", "Tools"],
      twitter: "https://x.com/hyperstats_xyz",
      logo: "/images/hyperstats-logo.png",
    },
    {
      id: 28,
      name: "VegasHL",
      tags: ["GambleFi"],
      twitter: "https://x.com/vegas_hl",
      logo: "/images/vegas-logo.png",
    },
    {
      id: 29,
      name: "Hypervisor",
      tags: ["Data", "Analytics"],
      twitter: "https://x.com/Hypervisor_hl",
      logo: "/images/hypervisor-logo.png",
    },
    {
      id: 30,
      name: "Harmonix Finance",
      tags: ["Defi"],
      twitter: "https://x.com/harmonixfi",
      logo: "/images/harmony-logo.png",
    },
    {
      id: 31,
      name: "RNDM",
      tags: ["Defi","AI"],
      twitter: "https://x.com/RNDM_IO",
      logo: "/images/rndm-logo.png",
    },
    {
      id: 32,
      name: "MIM Spell",
      tags: ["Defi"],
      twitter: "https://x.com/mim_spell",
      logo: "/images/mim-logo.png",
    },
    {
      id: 33,
      name: "Nucleus Earn",
      tags: ["Defi"],
      twitter: "https://x.com/nucleusearn",
      logo: "/images/nucleus-logo.png",
    },
    {
      id: 34,
      name: "Thunder Labs",
      tags: ["LST"],
      twitter: "https://x.com/thunderheadxyz",
      logo: "/images/thunderlabs-logo.png",
    },
    {
      id: 35,
      name: "KittenSwap",
      tags: ["Dex"],
      twitter: "https://x.com/kittenswaphype",
      logo: "/images/kittenswap-logo.png",
    },
    {
      id: 36,
      name: "Hyperterminal",
      tags: ["Analytics", "Trading"],
      twitter: "https://x.com/hyterminal",
      logo: "/images/hyperterminal-logo.png",
    },
    {
      id: 37,
      name: "HyperScanner",
      tags: ["Analytics", "Explorer"],
      twitter: "https://x.com/hyper_scanner",
      logo: "/images/hyperscanner-png.png",
    },
    {
      id: 38,
      name: "Pyth",
      tags: ["Oracle", "Infra"],
      twitter: "https://x.com/PythNetwork",
      logo: "/images/pyth-logo.png",
    },
    {
      id: 39,
      name: "StorkOracle",
      tags: ["Oracle", "Infra"],
      twitter: "https://x.com/StorkOracle",
      logo: "/images/storkoracle-logo.png",
    },
    {
      id: 40,
      name: "Insilico Terminal",
      tags: ["Trading", "Analytics"],
      twitter: "https://x.com/InsilicoTrading",
      logo: "/images/insilico-logo.png",
    },
    {
      id: 41,
      name: "Slate",
      tags: ["AI", "Tools", "Trading"],
      twitter: "https://x.com/slate_hl",
      logo: "/images/Slate.png",
    },
    {
      id: 42,
      name: "Chris Ling",
      tags: ["Tools", "Trading"],
      twitter: "https://x.com/chrisling_hl",
      logo: "/images/ChrisLing.png",
    },
    {
      id: 43,
      name: "Schizo",
      tags: ["Meme"],
      twitter: "https://x.com/schizo_on_hl",
      logo: "/images/schizo-logo.png",
    },
    {
      id: 44,
      name: "Peri Pair Bot",
      tags: ["Trading"],
      twitter: "https://x.com/peripairbot",
      logo: "/images/peripairbot-logo.png",
    },
    {
      id: 45,
      name: "Vapor",
      tags: ["Social", "AI"],
      twitter: "https://x.com/vaporwarefun",
      logo: "/images/vapor-logo.png",
    },
    {
      id: 46,
      name: "Hey Jeff",
      tags: ["Tools"],
      twitter: "https://x.com/janklimo",
      logo: "/images/peripairbot-logo.png",
    },
    {
      id: 47,
      name: "Hypurr Collective",
      tags: ["Community"],
      twitter: "https://x.com/hypurr_co",
      logo: "/images/hypurr-logo.png",
    },
    {
      id: 48,
      name: "Panda",
      tags: ["Meme","Community"],
      twitter: "https://x.com/panda_on_hl",
      logo: "/images/panda-logo.png",
    },
    {
      id: 49,
      name: "LadyOnHL",
      tags: ["Meme"],
      twitter: "https://x.com/lady_on_hl",
      logo: "/images/ladyhl-logo.png",
    },
    {
      id: 50,
      name: "HyperDash",
      tags: ["Analytics", "Data"],
      twitter: "https://x.com/hypurrdash",
      logo: "/images/hyperdash-logo.png",
    },
    {
      id: 51,
      name: "WashOnHL",
      tags: ["Trading"],
      twitter: "https://x.com/wash_on_hl",
      logo: "/images/washsniper-logo.png",
    },
    {
      id: 52,
      name: "HyperTracker",
      tags: ["Tools"],
      twitter: "https://x.com/NMTD8/status/1871588493283270733",
      logo: "/images/hypertracker-logo.png",
    },
    {
      id: 53,
      name: "Hyperlend Explorer",
      tags: ["Explorer"],
      twitter: "https://explorer.hyperlend.finance/",
      logo: "/images/hyperland-logo.png",
    },
    {
      id: 54,
      name: "ASXN",
      tags: ["Data"],
      twitter: "https://x.com/asxn_r/status/1873668265450598613",
      logo: "/images/asxn-logo.png",
    },
    {
      id: 55,
      name: "Hypertrack",
      tags: ["Tools"],
      twitter: "https://x.com/hyperlendx/status/1855309389814432163",
      logo: "/images/hypertrack-logo.png",
    },
    {
      id: 56,
      name: "Tholos",
      tags: ["Tools"],
      twitter: "https://x.com/TholosApp",
      logo: "/images/tholos-logo.png",
    },
    {
      id: 57,
      name: "Octis",
      tags: ["Trading"],
      twitter: "https://x.com/octis_808",
      logo: "/images/octis.png",
    },
    {
      id: 58,
      name: "Hypio",
      tags: ["NFT","Community"],
      twitter: "https://x.com/HypioHL",
      logo: "/images/hypio.png",
    },
    {
      id: 59,
      name: "Hyperflip",
      tags: ["GambleFi"],
      twitter: "https://x.com/hypercoinflip",
      logo: "/images/hyperflip.png",
    },
    {
      id: 60,
      name: "USDC Inflows",
      tags: ["Data"],
      twitter: "https://x.com/mogie__/status/1881818562274459701",
      logo: "/images/mogie.png",
    },
    {
      id: 61,
      name: "Hyperdelta",
      tags: ["Options"],
      twitter: "https://x.com/HyperdeltaX",
      logo: "/images/hyperdelta.png",
    },
    {
      id: 62,
      name: "Hypervol",
      tags: ["Trading"],
      twitter: "https://x.com/Hypervol_xyz",
      logo: "/images/hypervol.png",
    },
    {
      id: 63,
      name: "Kibl",
      tags: ["Defi"],
      twitter: "https://x.com/kiblprotocol",
      logo: "/images/kibl.png",
    },
    {
      id: 64,
      name: "Liquidlaunch",
      tags: [ "AI"],
      twitter: "https://x.com/LiquidLaunchHL",
      logo: "/images/liquidlaunch-logo.png",
    },
    {
      id: 65,
      name: "Autist",
      tags: ["Meme"],
      twitter: "https://x.com/autisthyper",
      logo: "/images/autist.png",
    },
    {
      id: 66,
      name: "HCR Bot",
      tags: ["Infra"],
      twitter: "https://x.com/HCR_BOT",
      logo: "/images/hcrbot-logo.png",
    },
    {
      id: 67,
      name: "Liquina",
      tags: ["Infra"],
      twitter: "https://x.com/LiquinaHL",
      logo: "/images/liquina.png",
    },
    {
      id: 68,
      name: "Dexari",
      tags: ["Trading","Mobile"],
      twitter: "https://x.com/DexariDotCom",
      logo: "/images/dexari.png",
    },
    {
      id: 69,
      name: "Hypurr Markets",
      tags: ["Tools"],
      twitter: "https://x.com/HypurrMarkets",
      logo: "/images/hypurrmarkets.png",
    },
    {
      id: 70,
      name: "Hype Terminal",
      tags: ["Trading"],
      twitter: "https://x.com/hype_terminal",
      logo: "/images/hypeterminal.png",
    },
    {
      id: 71,
      name: "HL Fund",
      tags: ["Tools"],
      twitter: "https://x.com/hl_fund",
      logo: "/images/hlfund.png",
    },
    {
      id: 72,
      name: "Hyperrich",
      tags: ["Trading","Tools"],
      twitter: "https://x.com/hyperrichdotfun",
      logo: "/images/Hyperrich.png",
    },
    {
      id: 73,
      name: "Slate",
      tags: ["AI", "Tools", "Trading"],
      twitter: "https://x.com/slate_ceo",
      logo: "/images/Slate.png",
    },
    {
      id: 74,
      name: "Chris Ling",
      tags: ["Tools", "Trading"],
      twitter: "https://x.com/chrisling_dev",
      logo: "/images/ChrisLing.png",
    },
    {
      id: 75,
      name: "Mercury App",
      tags: ["Mobile", "Trading"],
      twitter: "https://x.com/mercuryapphl",
      logo: "/images/MercuryApp.png",
    },
    {
      id: 76,
      name: "Hyperstable",
      tags: ["Stablecoin"],
      twitter: "https://x.com/HyperstableX",
      logo: "/images/Hyperstable.png",
    },
    {
      id: 81,
      name: "Hyperlane",
      tags: ["Infra"],
      twitter: "https://x.com/hyperlane",
      logo: "/images/Hyperlane.png",
    },
    {
      id: 82,
      name: "LiquidLoot",
      tags: ["NFT"],
      twitter: "https://x.com/LootLiquid",
      logo: "/images/Liquidloot.png",
    },
    {
      id: 83,
      name: "Okto",
      tags: ["Infra","Mobile"],
      twitter: "https://x.com/okto_web3",
      logo: "/images/Okto.png",
    },
    {
      id: 84,
      name: "Bridge Hypio",
      tags: ["Bridge", "NFT"],
      twitter: "https://x.com/HypioHL",
      logo: "/images/hypio.png",
    },
    {
      id: 85,
      name: "Eternal AI",
      tags: ["AI"],
      twitter: "https://x.com/CryptoEternalAI",
      logo: "/images/EternalAI.png",
    },
    {
      id: 86,
      name: "deBridge",
      tags: ["Bridge"],
      twitter: "https://x.com/deBridgeFinance",
      logo: "/images/debridge.png",
    },
    {
      id: 87,
      name: "Valantis",
      tags: ["Defi"],
      twitter: "https://x.com/ValantisLabs",
      logo: "/images/valantis.png",
    },
    {
      id: 88,
      name: "Hyperyield",
      tags: ["Defi"],
      twitter: "https://x.com/HyperYieldx",
      logo: "/images/hyperyield.png",
    },
    {
      id: 89,
      name: "Hyperupdates",
      tags: ["News"],
      twitter: "https://x.com/hyper_updates",
      logo: "/images/hyperupdates.png",
    },
    {
      id: 90,
      name: "Hana",
      tags: ["Trading"],
      twitter: "https://x.com/HanaNetwork",
      logo: "/images/hana.png",
    },
    {
      id: 91,
      name: "Hypers",
      tags: ["NFT"],
      twitter: "https://x.com/HypersOnHL",
      logo: "/images/hypers.png",
    },
    {
      id: 92,
      name: "Keiko",
      tags: ["Defi"],
      twitter: "https://x.com/KeikoFinance",
      logo: "/images/keiko.png",
    },
    {
      id: 93,
      name: "Laminar",
      tags: ["Dex"],
      twitter: "https://x.com/laminar_xyz",
      logo: "/images/laminar.png",
    },
    {
      id: 94,
      name: "Mizu",
      tags: ["Defi"],
      twitter: "https://x.com/mizulabs",
      logo: "/images/mizu.png",
    },
    {
      id: 95,
      name: "Hypershot",
      tags: ["Trading", "Tools"],
      twitter: "https://x.com/Hypershot_xyz",
      logo: "/images/hypershot.png",
    },
    {
      id: 96,
      name: "Hyperflash",
      tags: ["LST"],
      twitter: "https://x.com/HyperFlash_hl",
      logo: "/images/hyperflash.png",
    },
    {
      id: 97,
      name: "Fan App",
      tags: ["Tools"],
      twitter: "https://x.com/fanappX",
      logo: "/images/fan.png",
    },
    {
      id: 98,
      name: "Sentiment",
      tags: ["LST"],
      twitter: "https://x.com/sentimentxyz",
      logo: "/images/sentient.png",
    },
    {
      id: 99,
      name: "Hypernews",
      tags: ["News"],
      twitter: "https://x.com/HyperliquidNews",
      logo: "/images/hypernews.png",
    },
    {
      id: 100,
      name: "Unit",
      tags: ["Defi"],
      twitter: "https://x.com/hyperunit",
      logo: "/images/unit.png",
    },
    {
      id: 101,
      name: "HiveFi",
      tags: ["Defi"],
      twitter: "https://x.com/HiveFi_X",
      logo: "/images/hifive.png",
    },
    {
      id: 102,
      name: "Gigabrain",
      tags: ["Tools", "Trading", "AI"],
      twitter: "https://x.com/GigabrainGG",
      logo: "/images/gigabrain.png",
    },
    {
      id: 103,
      name: "Perpflow",
      tags: ["Trading"],
      twitter: "https://x.com/perpflow",
      logo: "/images/perpflow.png",
    },
    {
      id: 104,
      name: "HyperProjects",
      tags: ["News"],
      twitter: "https://x.com/HyperProjectsX",
      logo: "/images/hyperproject.png",
    },
    {
      id: 105,
      name: "Ezpairs",
      tags: ["Trading"],
      twitter: "https://x.com/EzPairs/photo",
      logo: "/images/expairs.png",
    },
    {
      id: 106,
      name: "Altitude",
      tags: ["Infra"],
      twitter: "https://x.com/valtitudexyz",
      logo: "/images/altitude.png",
    },
    {
      id: 107,
      name: "LayerZero",
      tags: ["Infra"],
      twitter: "https://x.com/LayerZero_Core/status/1920848296219996251",
      logo: "/images/layerzero.png",
    },
    {
      id: 108,
      name: "SuperX",
      tags: ["Trading"],
      twitter: "https://x.com/trysuper_",
      logo: "/images/superx.png",
    },
    {
      id: 109,
      name: "Dune",
      tags: ["Infra"],
      twitter: "https://x.com/Dune/status/1920465979857150169",
      logo: "/images/dune.png",
    },
    {
      id: 110,
      name: "Liminal",
      tags: ["Defi"],
      twitter: "https://x.com/liminalmoney",
      logo: "/images/liminal.jpg",
    },
    {
      id: 111,
      name: "Hyperwarpfi",
      tags: ["Tools"],
      twitter: "https://x.com/hyperwarpfi",
      logo: "/images/hyperwarpfi.png",
    },
    {
      id: 112,
      name: "Uncoil Hype",
      tags: ["Research"],
      twitter: "https://x.com/Uncoilhype",
      logo: "/images/UncoilHype.jpg",
    },
    {
      id: 113,
      name: "dothype",
      tags: ["Tools"],
      twitter: "https://x.com/d0tHYPE",
      logo: "/images/dothype.jpg",
    },
    {
      id: 114,
      name: "Hytrade",
      tags: ["Trading"],
      twitter: "https://x.com/hytradedotfun",
      logo: "/images/hytrade.jpg",
    },
    {
      id: 115,
      name: "hyperbloom",
      tags: ["Aggregator"],
      twitter: "https://x.com/hyperbloomxyz",
      logo: "/images/hyperbloom.jpg",
    },
    {
      id: 116,
      name: "aura",
      tags: ["Trading"],
      twitter: "https://x.com/auradotmoney",
      logo: "/images/aura.jpg",
    },
    {
      id: 117,
      name: "hyper_g8",
      tags: ["Trading"],
      twitter: "https://x.com/hyper_g8",
      logo: "/images/hyperG8.jpg",
    },
    {
      id: 118,
      name: "Hyperwave",
      tags: ["Defi"],
      twitter: "https://x.com/Hyperwavefi",
      logo: "/images/Hyperwave.png",
    },
    {
      id: 119,
      name: "Silhouette",
      tags: ["Trading", "Privacy"],
      twitter: "https://x.com/silhouette_ex",
      logo: "/images/silhouette.jpg",
    },
    {
      id: 120,
      name: "Hypurr Hub",
      tags: ["News"],
      twitter: "https://x.com/HypurrHub",
      logo: "/images/HypurrHub.png",
    },
    {
      id: 121,
      name: "Liquid Swap",
      tags: ["Aggregator"],
      twitter: "https://x.com/LiquidLaunchHL",
      logo: "/images/liquidswap.jpg",
    },
    {
      id: 122,
      name: "Hypersig",
      tags: ["Security"],
      twitter: "https://x.com/hypersig_",
      logo: "/images/hypersig.jpg",
    },
    {
      id: 123,
      name: "NunchiTrade",
      tags: ["Defi"],
      twitter: "https://x.com/nunchitrade",
      logo: "/images/Nunchi.png",
    },
    {
      id: 124,
      name: "Shifu Finance",
      tags: ["Mobile"],
      twitter: "https://x.com/Shifu_Fi",
      logo: "/images/ShifuFinance.jpg",
    },
    {
      id: 125,
      name: "Gems Gun",
      tags: ["Trading"],
      twitter: "https://x.com/gems_gun",
      logo: "/images/GemsGun.jpg",
    },
    {
      id: 126,
      name: "Symbiosis",
      tags: ["Dex"],
      twitter: "https://x.com/symbiosis_fi",
      logo: "/images/Symbiosis.jpg",
    },
    {
      id: 127,
      name: "Hybra Finance",
      tags: ["Dex"],
      twitter: "https://x.com/HybraFinance",
      logo: "/images/HybraFinance.jpg",
    },
    {
      id: 128,
      name: "Risk Finance",
      tags: ["Options"],
      twitter: "https://x.com/ryskfinance",
      logo: "/images/rysk.jpg",
    },
    {
      id: 129,
      name: "HypurrFlip",
      tags: ["GambleFi"],
      twitter: "https://x.com/HypurrFlip",
      logo: "/images/hypurrflip.jpg",
    },
    {
      id: 130,
      name: "HyperliquidHub",
      tags: ["News"],
      twitter: "https://x.com/Hyperliquid_Hub",
      logo: "/images/HyperliquidHub.jpg",
    },
    {
      id: 131,
      name: "hyperscreener",
      tags: ["Tools", "Data"],
      twitter: "https://x.com/atareh/status/1927479710470037685",
      logo: "/images/hyperscreener.png",
    },
    {
        id: 133,
        name: "HyperEVM",
        tags: ["Data"],
        twitter: "https://x.com/PixOnChain/status/1932589848566890837",
        logo: "/images/hyperevmtech.jpg",
    },
    {
        id: 134,
        name: "Hyena",
        tags: ["Defi"],
        twitter: "https://x.com/hyenatrade",
        logo: "/images/Hyena.png",
    },
    {
        id: 135,
        name: "HyperTutor",
        tags: ["Research"],
        twitter: "https://x.com/HyperTutor",
        logo: "/images/HyperTutor.png",
    },
    {
        id: 136,
        name: "Allium",
        tags: ["Dashboard","Tools"],
        twitter: "https://x.com/ethanyish/status/1952380476272025912",
        logo: "/images/allium.png",
    },
    {
        id: 137,
        name: "Octav",
        tags: ["Tracking"],
        twitter: "https://x.com/OctavFi",
        logo: "/images/Octav.png",
    },
    {
        id: 138,
        name: "Spectra",
        tags: ["Defi"],
        twitter: "https://x.com/Spectra_Finance",
        logo: "/images/Spectra.png",
    },
    {
        id: 139,
        name: "HyperBrick",
        tags: ["Dex"],
        twitter: "https://x.com/HyperBrickX",
        logo: "/images/HyperBrick.png",
    },
    {
        id: 140,
        name: "Gas.zip",
        tags: ["Bridge"],
        twitter: "https://x.com/gasdotzip",
        logo: "/images/gaszip.png",
    },
    {
        id: 141,
        name: "Relay",
        tags: ["Bridge"],
        twitter: "https://x.com/RelayProtocol",
        logo: "/images/Relay.png",
    },
    {
        id: 142,
        name: "hx_finance",
        tags: ["Dex"],
        twitter: "https://x.com/hx_finance",
        logo: "/images/hx_finance.png",
    },
    {
        id: 143,
        name: "HyperCat",
        tags: ["Dex"],
        twitter: "https://x.com/HyperCatEx",
        logo: "/images/HyperCat.png",
    },
    {
        id: 144,
        name: "Project X",
        tags: ["Dex"],
        twitter: "https://x.com/prjx_hl",
        logo: "/images/Project X.png",
    },
    {
        id: 145,
        name: "Drops",
        tags: ["Dashboard"],
        twitter: "https://www.drops.bot/free-hyperevm-checker",
        logo: "/images/placeholder.svg",
    },
    {
        id: 146,
        name: "Bebop",
        tags: ["Dex"],
        twitter: "https://x.com/bebop_dex",
        logo: "/images/bebop.png",
    },
    {
        id: 147,
        name: "HyperTracker",
        tags: ["Tracking"],
        twitter: "https://x.com/CMMHyperTracker",
        logo: "/images/HyperTracker.png",
    },
    {
        id: 148,
        name: "HyperTracker - Heatmap",
        tags: ["Dashboard"],
        twitter: "https://app.coinmarketman.com/hypertracker/heatmap",
        logo: "/images/HyperTracker.png",
    },
    {
        id: 149,
        name: "Skewga",
        tags: ["Dashboard"],
        twitter: "https://www.skewga.com/crypto",
        logo: "/images/Skewga.png",
    },
    {
        id: 150,
        name: "HyperZap",
        tags: ["Trading"],
        twitter: "https://x.com/hyperzap_io",
        logo: "/images/HyperZap.png",
    },
    {
        id: 151,
        name: "Hypeburn",
        tags: ["Dashboard"],
        twitter: "https://www.hypeburn.fun/builders",
        logo: "/images/janhl.PNG",
    },
    {
        id: 152,
        name: "Hyperpie",
        tags: ["Launchpad", "Dex"],
        twitter: "https://x.com/hyperpiexyz_io",
        logo: "/images/Hyperpie.png",
    },
    {
        id: 153,
        name: "HypurrOTC",
        tags: ["NFT"],
        twitter: "https://x.com/drip__trade/status/1941137769528463597?s=46&t=qym20GtjJYoGwJ9qMSF5Pw",
        logo: "/images/driptrade-logo.png",
    },
    {
        id: 154,
        name: "Hyperliquid UAE Community",
        tags: ["Community"],
        twitter: "https://x.com/Hyperliquidae",
        logo: "/images/HyperliquidUAE.png",
    },
    {
        id: 155,
        name: "HL.eco",
        tags: ["Tracking"],
        twitter: "https://x.com/hl_eco",
        logo: "/images/hleco.png",
    },
    {
        id: 156,
        name: "Delpho",
        tags: ["Stablecoin"],
        twitter: "https://x.com/delpho_labs",
        logo: "/images/Delpho.png",
    },
    {
        id: 157,
        name: "Harmonix Finance",
        tags: ["Defi"],
        twitter: "https://x.com/harmonixfi",
        logo: "/images/Harmonix.png",
    },
    {
        id: 158,
        name: "Scatter",
        tags: ["NFT"],
        twitter: "https://x.com/scatter_art",
        logo: "/images/scatter.png",
    },
    {
        id: 159,
        name: "hyperevm.farm",
        tags: ["Dashboard", "Tools"],
        twitter: "https://x.com/PixOnChain/status/1937949012235325920",
        logo: "/images/pix.png",
    },
    {
        id: 160,
        name: "Flowscan",
        tags: ["Dashboard", "Tools", "Tracking"],
        twitter: "https://www.flowscan.xyz/builders?builder=all",
        logo: "/images/placeholder.svg",
    },
    {
        id: 161,
        name: "BasedApp",
        tags: ["Trading", "Mobile"],
        twitter: "https://x.com/BasedOneX",
        logo: "/images/based.png",
    },
    {
        id: 162,
        name: "Dreamcash",
        tags: ["Trading", "Mobile"],
        twitter: "https://x.com/Dreamcashxyz",
        logo: "/images/dreamcash.png",
    },
    {
        id: 163,
        name: "Supercexy",
        tags: ["Trading", "Mobile"],
        twitter: "https://x.com/try_supercexy",
        logo: "/images/supercexy.png",
    },
    {
        id: 164,
        name: "Ooga Booga",
        tags: ["Aggregator"],
        twitter: "https://x.com/0xoogabooga",
        logo: "/images/OogaBooga.png",
    },
    {
        id: 165,
        name: "Aura Score",
        tags: ["Dashboard"],
        twitter: "https://x.com/Larpseidon/status/1940791686420222373",
        logo: "/images/aura.jpg",
    },
    {
        id: 166,
        name: "Ventuals",
        tags: ["Trading"],
        twitter: "https://x.com/ventuals_",
        logo: "/images/ventuals.png",
    },
    {
        id: 167,
        name: "HypertradeX",
        tags: ["Dex"],
        twitter: "https://x.com/HypertradeX",
        logo: "/images/Hypertrade.png",
    },
    {
        id: 168,
        name: "HypiqFI",
        tags: ["Prediction Market"],
        twitter: "https://x.com/hypiq_fi",
        logo: "/images/Hypiq.png",
    },
    {
        id: 169,
        name: "Hyperliquid Analytics",
        tags: ["Dashboard"],
        twitter: "https://x.com/intern_cc/status/1958143380338118698",
        logo: "/images/placeholder.svg",
    },
    {
        id: 170,
        name: "Deploy Finance",
        tags: ["Defi", "AI"],
        twitter: "https://x.com/DeployFinance",
        logo: "/images/deployFinance.png",
    }
];

const tags = [
    "Defi",
    "Dex",
    "Meme",
    "Trading",
    "Infra",
    "Social",
    "Data",
    "Explorer",
    "Analytics",
    "GambleFi",
    "LST",
    "Oracle",
    "Tools",
    "Community", 
    "AI",
    "NFT",
    "Mobile",
    "Stablecoin",
    "News",
    "Research",
    "Aggregator",
    "Privacy",
    "Security",
    "Options",
    "Launchpad",
    "Dashboard",
    "Bridge",
    "Tracking",
    "Prediction Market"
];

// Define gradients for each category
const categoryGradients = {
    Defi: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    Dex: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    Meme: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    Trading: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    Infra: 'linear-gradient(135deg, #667eea 0%, #48dbfb 100%)',
    Social: 'linear-gradient(135deg, #fc6c8f 0%, #ff9a44 100%)',
    Data: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)',
    Explorer: 'linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%)',
    Analytics: 'linear-gradient(135deg, #13547a 0%, #80d0c7 100%)',
    GambleFi: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    LST: 'linear-gradient(135deg, #5f72bd 0%, #9b23ea 100%)',
    Oracle: 'linear-gradient(135deg, #09203f 0%, #537895 100%)',
    Tools: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    Community: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    AI: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
    NFT: 'linear-gradient(135deg, #ee5a6f 0%, #f29263 100%)',
    Mobile: 'linear-gradient(135deg, #3a7bd5 0%, #3a6073 100%)',
    Stablecoin: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    News: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)',
    Research: 'linear-gradient(135deg, #cc2b5e 0%, #753a88 100%)',
    Aggregator: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
    Privacy: 'linear-gradient(135deg, #000046 0%, #1cb5e0 100%)',
    Security: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
    Options: 'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)',
    Launchpad: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    Bridge: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    Tracking: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    Dashboard: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
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
    Lending: '#27ae60',
    Research: '#27ae60',
    Aggregator: '#27ae60',
    Privacy: '#27ae60',
    Utility: '#27ae60',
    Security: '#27ae60',
    Options: '#27ae60',
    Launchpad: '#27ae60',
    "Prediction Market": '#27ae60',
    Stablecoins: '#27ae60'
};

// Create nodes and edges datasets (will be populated when vis.js loads)
let nodes = null;
let edges = null;

// Simple function to create graph data
function createGraphData() {
    if (typeof vis === 'undefined') {
        console.error('vis.js not loaded');
        return false;
    }
    
    if (nodes && edges) {
        console.log('Graph data already created');
        return true;
    }
    
    // Create nodes
    nodes = new vis.DataSet([
        // Central node
        { 
            id: 'hyperEVM', 
            label: '', 
            shape: 'circularImage', 
            image: 'images/hyperliquid.png', 
            size: 120, 
            color: { 
                background: 'rgba(0,0,0,0)', 
                border: 'rgba(0,0,0,0)', 
                highlight: 'rgba(0,0,0,0)', 
                hover: 'rgba(0,0,0,0)' 
            }, 
            borderWidth: 2, 
            font: { color: 'rgba(0,0,0,0)', size: 1 } 
        }
    ]);

    // Add category nodes
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

    // Add project nodes
    projects.forEach(project => {
        let logoPath = project.logo || '/images/placeholder.svg';
        nodes.add({
            id: `project-${project.id}`,
            color: undefined,
            shape: 'circularImage',
            image: logoPath,
            brokenImage: '/images/hyperevmtech.jpg',
            size: 80,
            project: project,
            imagePadding: 0,
            useImageSize: false,
            imageSize: {
                width: 200,
                height: 200
            },
            chosen: {
                node: function(values, id, selected, hovering) {
                    values.size = selected || hovering ? 85 : 80;
                }
            }
        });
    });

    // Create edges
    edges = new vis.DataSet([]);

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
    
    console.log('Created', nodes.length, 'nodes and', edges.length, 'edges');
    return true;
}

// Collection box state - REMOVED (no longer needed)
// Node removal state
let isNodeRemovalMode = false;
let removedNodeIds = [];
let originalFilteredProjects = [];

// Category filtering state
let selectedCategories = [];

// Initialize the network
let network = null;

// Mobile view state
let isListView = true; // Default to list view on mobile
let selectedMobileTags = []; // Track selected tags for mobile filtering

// Initialize mobile tag filters
function initializeMobileTagFilters() {
    const filterContainer = document.getElementById('mobile-tag-filters');
    if (!filterContainer) return;
    
    // Clear existing chips
    filterContainer.innerHTML = '';
    
    // Add "All" chip first
    const allChip = document.createElement('div');
    allChip.className = 'mobile-tag-chip active';
    allChip.textContent = 'All';
    allChip.dataset.tag = 'all';
    allChip.addEventListener('click', () => handleMobileTagClick('all'));
    filterContainer.appendChild(allChip);
    
    // Add chips for each tag
    tags.forEach(tag => {
        const chip = document.createElement('div');
        chip.className = 'mobile-tag-chip';
        chip.textContent = tag;
        chip.dataset.tag = tag;
        chip.addEventListener('click', () => handleMobileTagClick(tag));
        filterContainer.appendChild(chip);
    });
}

// Handle mobile tag chip clicks
function handleMobileTagClick(tag) {
    const chips = document.querySelectorAll('.mobile-tag-chip');
    
    if (tag === 'all') {
        // Clear all selections and select "All"
        selectedMobileTags = [];
        chips.forEach(chip => {
            chip.classList.toggle('active', chip.dataset.tag === 'all');
        });
    } else {
        // Toggle the clicked tag
        const allChip = document.querySelector('.mobile-tag-chip[data-tag="all"]');
        const clickedChip = document.querySelector(`.mobile-tag-chip[data-tag="${tag}"]`);
        
        if (selectedMobileTags.includes(tag)) {
            // Remove tag from selection
            selectedMobileTags = selectedMobileTags.filter(t => t !== tag);
            clickedChip.classList.remove('active');
        } else {
            // Add tag to selection
            selectedMobileTags.push(tag);
            clickedChip.classList.add('active');
        }
        
        // Update "All" chip state
        if (selectedMobileTags.length === 0) {
            allChip.classList.add('active');
        } else {
            allChip.classList.remove('active');
        }
    }
    
    // Update reset button visibility
    updateResetButtonVisibility();
    
    // Refresh the project list with filtering
    populateProjectList(selectedMobileTags);
}

// Initialize mobile view
function initializeMobileView() {
    console.log('Initializing mobile view...');
    
    const graphSection = document.getElementById('graph-section');
    const listView = document.getElementById('mobile-list-view');
    const mobileHeader = document.querySelector('.mobile-header');
    
    if (!graphSection || !listView) {
        console.error('Required elements not found');
        return;
    }
    
    // Show mobile header
    if (mobileHeader) {
        mobileHeader.style.display = 'flex';
        document.body.style.paddingTop = '50px';
    }
    
    // Reset isListView to true for mobile
    isListView = true;
    
    // Show list view by default on mobile (use only inline styles to avoid CSS conflicts)
    graphSection.style.display = 'none';
    listView.style.display = 'block';
    
    // Hide info panels in list view on mobile
    const infoSection = document.querySelector('.info-section');
    if (infoSection) {
        infoSection.style.display = 'none';
    }
    
    // Set toggle state correctly (list view is active)
    const listOption = document.querySelector('.list-option');
    const graphOption = document.querySelector('.graph-option');
    if (listOption && graphOption) {
        listOption.classList.add('active');
        graphOption.classList.remove('active');
    }
    
    // Initialize tag filters for mobile
    initializeMobileTagFilters();
    
    // Populate project list
    console.log('Populating mobile project list...');
    populateProjectList();
    
    // Add toggle event listener (remove existing first to avoid duplicates)
    const toggleBtn = document.getElementById('view-toggle-btn');
    if (toggleBtn) {
        toggleBtn.removeEventListener('click', toggleMobileView);
        toggleBtn.addEventListener('click', toggleMobileView);
    }
    
    // Add filter toggle event listener
    const filterToggleBtn = document.getElementById('filter-toggle-btn');
    if (filterToggleBtn) {
        filterToggleBtn.removeEventListener('click', toggleMobileFilters);
        filterToggleBtn.addEventListener('click', toggleMobileFilters);
    }
    
    // Add mobile reset button event listener
    const mobileResetBtn = document.getElementById('mobile-reset-filters-btn');
    if (mobileResetBtn) {
        mobileResetBtn.removeEventListener('click', resetAllFilters);
        mobileResetBtn.addEventListener('click', resetAllFilters);
    }
}

// Simplified mobile toggle function
function toggleMobileView() {
    console.log('Toggling mobile view');
    
    const graphSection = document.getElementById('graph-section');
    const listView = document.getElementById('mobile-list-view');
    const listOption = document.querySelector('.list-option');
    const graphOption = document.querySelector('.graph-option');
    
    if (!graphSection || !listView) {
        console.error('Cannot toggle: elements not found');
        return;
    }
    
    isListView = !isListView;
    console.log('Switched to:', isListView ? 'List' : 'Graph');
    
    if (isListView) {
        // Show list view
        graphSection.style.display = 'none';
        listView.style.display = 'block';
        
        // Update toggle state
        if (listOption && graphOption) {
            listOption.classList.add('active');
            graphOption.classList.remove('active');
        }
        
        // Don't automatically show tag filters - let user control with filter button
        // Filters will remain in their current state (hidden by default)
        
        // Hide info panels in list view on mobile
        const infoSection = document.querySelector('.info-section');
        if (infoSection) {
            infoSection.style.display = 'none';
        }
        
        // Ensure list is populated with current filters
        populateProjectList(selectedMobileTags);
    } else {
        // Show graph view
        listView.style.display = 'none';
        graphSection.style.display = 'block';
        
        // Update toggle state
        if (listOption && graphOption) {
            listOption.classList.remove('active');
            graphOption.classList.add('active');
        }
        
        // Hide tag filters in graph view
        const tagFilters = document.getElementById('mobile-tag-filters');
        if (tagFilters) {
            tagFilters.style.display = 'none';
        }
        
        // Show info panels in graph view on mobile
        const infoSection = document.querySelector('.info-section');
        if (infoSection) {
            infoSection.style.display = '';
        }
        
        // Initialize graph if needed
        if (!network) {
            // Initialize graph if needed  
            if (typeof vis !== 'undefined') {
                if (!nodes || !edges) {
                    createGraphData();
                }
                if (nodes && edges) {
                    initializeGraph();
                }
            } else {
                console.warn('vis.js not loaded, cannot show graph');
                // Revert to list view
                isListView = true;
                graphSection.style.display = 'none';
                listView.style.display = 'block';
                if (listOption && graphOption) {
                    listOption.classList.add('active');
                    graphOption.classList.remove('active');
                }
            }
        } else {
            // Fit the network if already initialized
            setTimeout(() => {
                ensureMobileCanvasSize();
                network.fit();
            }, 100);
        }
    }
}

// Toggle mobile filters visibility
function toggleMobileFilters() {
    console.log('Toggling mobile filters');
    
    const filterToggleBtn = document.getElementById('filter-toggle-btn');
    const tagFilters = document.getElementById('mobile-tag-filters');
    
    if (!filterToggleBtn || !tagFilters) {
        console.error('Filter elements not found');
        return;
    }
    
    const isVisible = tagFilters.style.display === 'flex' || tagFilters.style.display === '';
    
    if (isVisible) {
        // Hide filters
        tagFilters.style.display = 'none';
        filterToggleBtn.classList.remove('active');
    } else {
        // Show filters
        tagFilters.style.display = 'flex';
        filterToggleBtn.classList.add('active');
    }
}


// Populate the project list for mobile view with optional tag filtering
function populateProjectList(filterTags = []) {
    const projectListContainer = document.getElementById('project-list');
    if (!projectListContainer) {
        console.error('Project list container not found');
        return;
    }
    
    console.log('Populating project list with filters:', filterTags);
    projectListContainer.innerHTML = '';
    
    if (!projects || projects.length === 0) {
        console.error('No projects found');
        projectListContainer.innerHTML = '<div style="padding: 20px; color: rgba(255,255,255,0.6); text-align: center;">No projects available</div>';
        return;
    }
    
    // Filter projects based on selected tags
    let filteredProjects = projects;
    if (filterTags.length > 0) {
        filteredProjects = projects.filter(project => 
            project.tags && project.tags.some(tag => filterTags.includes(tag))
        );
    }
    
    if (filteredProjects.length === 0) {
        projectListContainer.innerHTML = '<div style="padding: 20px; color: rgba(255,255,255,0.6); text-align: center;">No projects match the selected filters</div>';
        return;
    }
    
    // Sort filtered projects by name
    const sortedProjects = [...filteredProjects].sort((a, b) => a.name.localeCompare(b.name));
    
    sortedProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        
        const projectLogo = document.createElement('img');
        projectLogo.className = 'project-logo';
        projectLogo.src = project.logo;
        projectLogo.alt = project.name;
        projectLogo.onerror = function() {
            this.src = '/images/placeholder.svg';
        };
        
        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';
        
        const projectName = document.createElement('div');
        projectName.className = 'project-name';
        projectName.textContent = project.name;
        
        const projectMeta = document.createElement('div');
        projectMeta.className = 'project-meta';
        
        // Add primary tag
        if (project.tags && project.tags.length > 0) {
            const projectTag = document.createElement('span');
            projectTag.className = 'project-tag';
            projectTag.textContent = project.tags[0];
            projectMeta.appendChild(projectTag);
        }
        
        // Add Twitter link
        if (project.twitter) {
            const twitterLink = document.createElement('a');
            twitterLink.className = 'project-twitter';
            twitterLink.href = project.twitter;
            twitterLink.target = '_blank';
            twitterLink.rel = 'noopener noreferrer';
            twitterLink.innerHTML = '𝕏';
            projectMeta.appendChild(twitterLink);
        }
        
        projectInfo.appendChild(projectName);
        projectInfo.appendChild(projectMeta);
        
        projectItem.appendChild(projectLogo);
        projectItem.appendChild(projectInfo);
        
        projectListContainer.appendChild(projectItem);
    });
}

function initializeGraph() {
    const container = document.getElementById('graph-container');
    
    if (!container) {
        console.error('Graph container not found');
        return;
    }
    
    // Check if nodes and edges are initialized
    if (!nodes || !edges) {
        console.error('Nodes and edges not initialized, cannot create graph');
        return;
    }
    
    // Check if network already exists
    if (network) {
        console.log('Network already initialized');
        return;
    }
    
    console.log('Initializing graph with', nodes.length, 'nodes and', edges.length, 'edges');
    
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
            borderWidth: 2,
            borderWidthSelected: 5,
            color: {
                border: '#27ae60'
            },
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
        },
        // Force high-resolution canvas rendering
        configure: {
            enabled: false
        },
        // Ensure high pixel density rendering
        autoResize: true,
        height: '100%',
        width: '100%',
        // Canvas settings removed - let vis.js handle this internally
    };
    
    // Mobile detection and responsive adjustments
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        console.log('Mobile device detected, applying mobile-specific settings');
        
        // Mobile-specific options - keep minimal changes
        options.interaction.navigationButtons = false; // Disable nav buttons on mobile
        options.interaction.keyboard = false; // Disable keyboard on mobile
        
        // Keep original physics but with faster stabilization
        options.physics.stabilization.iterations = 150;
        options.physics.stabilization.updateInterval = 50;
        
        // Adjust node sizes for mobile visibility - not too small
        options.nodes.scaling = {
            min: 25, // Increased from 20 to ensure visibility
            max: 80  // Reduced from 120 but not too small
        };
        
        // Slightly smaller fonts for mobile
        options.nodes.font.size = 14; // Increased from 12
        options.groups.category.font.size = 16; // Increased from 14
        
        console.log('Mobile options applied:', {
            nodeScaling: options.nodes.scaling,
            fontSize: options.nodes.font.size
        });
    }
    
    console.log('Creating vis.js network with data:', {
        nodes: data.nodes.length,
        edges: data.edges.length,
        isMobile: isMobile
    });
    
    // Check if vis is loaded
    if (typeof vis === 'undefined') {
        console.error('vis.js library not loaded');
        return;
    }
    
    try {
        network = new vis.Network(container, data, options);
        console.log('Network initialized successfully');
    } catch (error) {
        console.error('Error initializing network:', error);
        return;
    }
    
    // Mobile-specific event handlers and debugging
    if (isMobile) {
        console.log('Setting up mobile-specific event handlers');
        
        // Remove verbose debugging for better performance
        // Events kept but logging removed
        
        // Prevent zoom on double tap for mobile
        network.on("doubleClick", function(params) {
            params.event.preventDefault();
        });
        
        // Add mobile stabilization debugging
        network.on("stabilizationProgress", function(params) {
            console.log('Mobile stabilization progress:', Math.round(params.iterations/params.total * 100) + '%');
        });
        
        // Handle resize events for mobile orientation changes
        window.addEventListener('orientationchange', function() {
            console.log('Mobile orientation changed');
            setTimeout(() => {
                network.redraw();
                network.fit();
                ensureMobileCanvasSize();
            }, 200);
        });
        
        // Handle window resize for mobile
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 768) {
                console.log('Mobile window resized');
                setTimeout(() => {
                    network.redraw();
                    network.fit();
                    ensureMobileCanvasSize();
                }, 200);
            }
        });
    }
    
    // High-DPI rendering removed - vis.js handles this internally
    
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
        console.log('Network stabilization completed');
        
        if (isMobile) {
            console.log('Applying mobile-specific post-stabilization fixes');
            
            // For mobile, fit all nodes to show the full graph
            network.fit({
                animation: {
                    duration: 1000,
                    easingFunction: 'easeInOutQuad'
                }
            });
            
            setTimeout(() => {
                // Ensure canvas sizing is correct
                ensureMobileCanvasSize();
                
                // Force a redraw
                network.redraw();
                
                console.log('Mobile initialization completed');
            }, 200);
        } else {
            // Desktop behavior
            network.fit({
                nodes: ['hyperEVM'],
                animation: {
                    duration: 1000,
                    easingFunction: 'easeInOutQuad'
                }
            });
        }
    });
    
    // Initialize BIRU BIRU functionality
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
    
    // Set initial styling based on content
    adjustButtonStyling(biruBiruBtn);
    
    // Hide reset button initially since no nodes are removed
    updateResetButtonVisibility();
}

// Function to adjust button styling based on content length
function adjustButtonStyling(button) {
    const content = button.innerHTML.trim();
    
    if (content.length <= 2) {
        // Short content (icons) - keep circular
        button.style.width = '32px';
        button.style.padding = '6px';
        button.style.borderRadius = '50%';
        button.style.minWidth = '32px';
    } else {
        // Longer content (text) - make rectangular
        button.style.width = 'auto';
        button.style.padding = '6px 12px';
        button.style.borderRadius = '16px';
        button.style.minWidth = 'auto';
    }
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
    
    // Show node removal instructions
    const instructions = document.getElementById('node-removal-instructions');
    if (instructions) {
        instructions.style.display = 'block';
    }
    
    // Update button text and style
    const biruBiruBtn = document.getElementById('biru-biru-btn');
    biruBiruBtn.innerHTML = `×`;
    biruBiruBtn.style.background = 'transparent';
    biruBiruBtn.style.border = '2px solid #888888';
    biruBiruBtn.style.color = '#ffffff';
    
    // Adjust button styling based on content
    adjustButtonStyling(biruBiruBtn);
    
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
    
    // Hide node removal instructions
    const instructions = document.getElementById('node-removal-instructions');
    if (instructions) {
        instructions.style.display = 'none';
    }
    
    // Reset button text and style
    const biruBiruBtn = document.getElementById('biru-biru-btn');
    biruBiruBtn.innerHTML = `⚡`;
    biruBiruBtn.style.background = 'transparent';
    biruBiruBtn.style.border = '2px solid #27ae60';
    biruBiruBtn.style.color = '#ffffff';
    
    // Adjust button styling based on content
    adjustButtonStyling(biruBiruBtn);
    
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
    console.log('Current removedNodeIds before removal:', removedNodeIds);
    
    // Add to removed list
    if (!removedNodeIds.includes(nodeId)) {
        removedNodeIds.push(nodeId);
        console.log('Node added to removed list. New list:', removedNodeIds);
    } else {
        console.log('Node already in removed list');
    }
    
    // Hide the node and its edges
    nodes.update({id: nodeId, hidden: true});
    console.log('Node hidden:', nodeId);
    
    // Hide edges connected to this node
    const connectedEdges = edges.get({
        filter: edge => edge.from === nodeId || edge.to === nodeId
    });
    
    console.log('Connected edges to hide:', connectedEdges.length);
    connectedEdges.forEach(edge => {
        edges.update({id: edge.id, hidden: true});
    });
    
    // Update reset button visibility
    console.log('Calling updateResetButtonVisibility...');
    updateResetButtonVisibility();
    
    console.log('Total removed nodes after removal:', removedNodeIds.length);
}

function resetRemovedNodes() {
    console.log('Resetting removed nodes, total to restore:', removedNodeIds.length);
    console.log('Nodes to restore:', removedNodeIds);
    
    // Store the nodes to restore before clearing the array
    const nodesToRestore = [...removedNodeIds];
    
    // Clear removed list first to avoid any conflicts
    removedNodeIds = [];
    
    // Show all previously removed nodes
    nodesToRestore.forEach(nodeId => {
        console.log('Restoring node:', nodeId);
        nodes.update({id: nodeId, hidden: false});
    });
    
    // Restore edges for the restored nodes
    nodesToRestore.forEach(nodeId => {
        const connectedEdges = edges.get({
            filter: edge => edge.from === nodeId || edge.to === nodeId
        });
        
        connectedEdges.forEach(edge => {
            // Only show the edge if both connected nodes are visible
            const fromNode = nodes.get(edge.from);
            const toNode = nodes.get(edge.to);
            
            if (fromNode && toNode && !fromNode.hidden && !toNode.hidden) {
                edges.update({id: edge.id, hidden: false});
            }
        });
    });
    
    // Update reset button visibility
    updateResetButtonVisibility();
    
    console.log(`All ${nodesToRestore.length} nodes restored successfully`);
    console.log('Removed nodes list cleared, current length:', removedNodeIds.length);
}

function updateResetButtonVisibility() {
    console.log('updateResetButtonVisibility called');
    console.log('Current removedNodeIds length:', removedNodeIds.length);
    console.log('Current removedNodeIds:', removedNodeIds);
    
    const resetBtn = document.getElementById('reset-categories-btn');
    const actionButtons = document.getElementById('action-buttons');
    console.log('Reset button element found:', !!resetBtn);
    console.log('Action buttons container found:', !!actionButtons);
    
    if (resetBtn && actionButtons) {
        if (removedNodeIds.length > 0) {
            console.log('Showing reset button - nodes have been removed');
            // Make sure the action buttons container is visible
            actionButtons.style.display = 'flex';
            // Show the reset button
            resetBtn.style.display = 'flex';
            resetBtn.style.visibility = 'visible';
        } else {
            console.log('Hiding reset button - no nodes removed');
            resetBtn.style.display = 'none';
            // Check if we should hide the entire action buttons container
            const shareBtn = document.getElementById('share-btn');
            if (shareBtn && shareBtn.style.display === 'none') {
                actionButtons.style.display = 'none';
            }
        }
    } else {
        if (!resetBtn) console.error('Reset button element not found! ID: reset-categories-btn');
        if (!actionButtons) console.error('Action buttons container not found! ID: action-buttons');
    }
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
        
        // Force a high-quality redraw before capture
        console.log('Forcing high-quality redraw before capture...');
        
        // Apply quality settings to the canvas
        const canvas = document.querySelector('#graph-container canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
        }
        
        // Force network redraw with quality settings
        if (network.redraw) {
            network.redraw();
        }
        
        // Wait a bit for the redraw to complete, then capture
        setTimeout(() => {
            performGraphCapture();
        }, 500); // Give time for high-quality rendering
        
    } catch (error) {
        console.error('Error preparing graph for capture:', error);
        alert('Unable to prepare graph for capture: ' + error.message);
    }
}

// Function to temporarily enhance network rendering resolution
async function enhanceNetworkResolution() {
    return new Promise((resolve, reject) => {
        try {
            console.log('Attempting to enhance network resolution...');
            
            // Store original canvas size
            const container = document.getElementById('graph-container');
            const originalRect = container.getBoundingClientRect();
            
            // Temporarily increase the container size to force higher resolution rendering
            const scaleFactor = 2;
            const tempWidth = originalRect.width * scaleFactor;
            const tempHeight = originalRect.height * scaleFactor;
            
            // Apply temporary scaling
            container.style.width = tempWidth + 'px';
            container.style.height = tempHeight + 'px';
            container.style.transform = `scale(${1/scaleFactor})`;
            container.style.transformOrigin = 'top left';
            
            // Force network to redraw at new size
            if (network && network.redraw) {
                network.redraw();
                
                // Wait for redraw to complete
                setTimeout(() => {
                    console.log('Network enhanced to higher resolution');
                    resolve();
                }, 200);
            } else {
                reject('Network redraw not available');
            }
            
        } catch (error) {
            reject(error);
        }
    });
}

// Function to restore original network resolution after capture
function restoreNetworkResolution() {
    try {
        const container = document.getElementById('graph-container');
        
        // Remove temporary scaling
        container.style.width = '';
        container.style.height = '';
        container.style.transform = '';
        container.style.transformOrigin = '';
        
        // Force network to redraw at original size
        if (network && network.redraw) {
            network.redraw();
        }
        
        console.log('Network resolution restored to original');
    } catch (error) {
        console.error('Error restoring network resolution:', error);
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
        
        // Get device pixel ratio for high-DPI displays
        const devicePixelRatio = window.devicePixelRatio || 1;
        console.log('Device pixel ratio:', devicePixelRatio);
        
        // Source dimensions (accounting for potential DPI scaling)
        const sourceWidth = networkCanvas.width;
        const sourceHeight = networkCanvas.height;
        const sourceAspectRatio = sourceWidth / sourceHeight;
        
        // Check if the canvas has a different CSS size vs actual size
        const canvasRect = networkCanvas.getBoundingClientRect();
        const cssWidth = canvasRect.width;
        const cssHeight = canvasRect.height;
        
        console.log('Source canvas dimensions:', sourceWidth, 'x', sourceHeight);
        console.log('CSS dimensions:', cssWidth, 'x', cssHeight);
        console.log('Source aspect ratio:', sourceAspectRatio);
        
        // Force high-resolution output with focus on quality over extreme size
        const baseScalingFactor = Math.max(3, devicePixelRatio * 2); // Balanced scaling for quality
        const maxWidth = 4000;  // Reasonable max dimensions focused on quality
        const maxHeight = 3000;
        
        console.log('Device pixel ratio:', devicePixelRatio);
        console.log('Base scaling factor:', baseScalingFactor);
        
        // Calculate target dimensions maintaining aspect ratio
        let targetWidth, targetHeight;
        
        if (sourceAspectRatio > 1) {
            // Landscape - aim for good quality without excessive size
            targetWidth = Math.max(2400, Math.min(maxWidth, sourceWidth * baseScalingFactor));
            targetHeight = targetWidth / sourceAspectRatio;
        } else {
            // Portrait or square - aim for good quality without excessive size
            targetHeight = Math.max(2000, Math.min(maxHeight, sourceHeight * baseScalingFactor));
            targetWidth = targetHeight * sourceAspectRatio;
        }
        
        // Ensure we don't exceed maximum dimensions
        if (targetWidth > maxWidth) {
            targetWidth = maxWidth;
            targetHeight = targetWidth / sourceAspectRatio;
        }
        if (targetHeight > maxHeight) {
            targetHeight = maxHeight;
            targetWidth = targetHeight * sourceAspectRatio;
        }
        
        const canvasWidth = Math.floor(targetWidth);
        const canvasHeight = Math.floor(targetHeight);
        
        console.log('FINAL OUTPUT RESOLUTION:', canvasWidth, 'x', canvasHeight);
        console.log('This should be much higher than 1280x903!');
        
        // For display in popup, maintain aspect ratio but fit within container
        const containerMaxWidth = 600;
        const containerMaxHeight = 400;
        
        let displayWidth, displayHeight;
        const displayScale = Math.min(containerMaxWidth / canvasWidth, containerMaxHeight / canvasHeight);
        displayWidth = Math.floor(canvasWidth * displayScale);
        displayHeight = Math.floor(canvasHeight * displayScale);
        
        console.log('Target canvas dimensions:', canvasWidth, 'x', canvasHeight);
        console.log('Display dimensions:', displayWidth, 'x', displayHeight);
        console.log('Scaling factor used:', baseScalingFactor);
        
        // Set canvas to ultra-high resolution for capture (maintains aspect ratio)
        shareCanvas.width = canvasWidth;
        shareCanvas.height = canvasHeight;
        
        // Set CSS size for display (maintains aspect ratio)
        shareCanvas.style.width = displayWidth + 'px';
        shareCanvas.style.height = displayHeight + 'px';
        
        // Enable maximum quality rendering settings
        ctx.imageSmoothingEnabled = false; // Start with no smoothing for background
        
        // Draw custom gradient background
        drawGradientBackground(ctx, canvasWidth, canvasHeight, currentGradientConfig);
        
        // For the network canvas drawing, use the best quality settings
        try {
            // Use high-quality smoothing for the network content
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            
            // Direct high-quality drawing since source canvas is now high-DPI
            ctx.drawImage(
                networkCanvas,
                0, 0, sourceWidth, sourceHeight,
                0, 0, canvasWidth, canvasHeight
            );
            
            console.log('High-resolution image drawn successfully from high-DPI source');
            
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
    // Check if watermark is enabled
    const watermarkToggle = document.getElementById('watermark-toggle');
    if (!watermarkToggle || !watermarkToggle.checked) {
        return; // Skip watermark if toggle is off
    }
    
    // Add watermark text at the top of the image
    const watermarkText = "damnthatsalotofstuffonhyperliquid.wiki";
    
    // Calculate font size based on image width (responsive sizing) - made bigger
    const baseFontSize = Math.max(36, width * 0.035); // Increased from 0.02 to 0.035
    const fontSize = Math.min(baseFontSize, 72); // Increased cap from 48px to 72px
    
    // Set font properties
    ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.lineWidth = 3; // Increased stroke width for better visibility
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    
    // Add text shadow effect
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 12; // Increased shadow blur
    ctx.shadowOffsetX = 3; // Increased shadow offset
    ctx.shadowOffsetY = 3;
    
    // Position at bottom left with some padding
    const x = Math.max(40, width * 0.03); // Left padding
    const y = height - Math.max(40, height * 0.04); // Bottom padding
    
    // Measure text dimensions for chip background
    const textMetrics = ctx.measureText(watermarkText);
    const textWidth = textMetrics.width;
    const textHeight = fontSize; // Approximate text height
    
    // Chip padding
    const chipPadding = fontSize * 0.3; // Responsive padding based on font size
    const chipRadius = fontSize * 0.3; // Responsive border radius
    
    // Calculate chip dimensions and position
    const chipX = x - chipPadding;
    const chipY = y - textHeight - chipPadding;
    const chipWidth = textWidth + (chipPadding * 2);
    const chipHeight = textHeight + (chipPadding * 2);
    
    // Save current context state
    ctx.save();
    
    // Clear any existing shadow for chip drawing
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    // Draw chip background with rounded corners
    ctx.beginPath();
    ctx.roundRect(chipX, chipY, chipWidth, chipHeight, chipRadius);
    
    // Fill chip with semi-transparent dark background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fill();
    
    // Add white stroke to chip
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Restore context state for text drawing
    ctx.restore();
    
    // Re-apply text shadow for the text
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    
    // Draw text with stroke and fill on top of chip
    ctx.strokeText(watermarkText, x, y);
    ctx.fillText(watermarkText, x, y);
    
    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
}

function showSharePopup() {
    const popup = document.getElementById('share-popup');
    popup.style.display = 'flex';
    
    // Initialize button event listeners
    initializeShareButtons();
    
    // Initialize gradient controls
    initializeGradientControls();
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
window.selectProjectFromBento = selectProjectFromBento;
window.closeProjectPopup = closeProjectPopup;

// Display node information in the panel
// Helper function to reset node indicator to default state
function resetNodeIndicator() {
    // Node indicator is no longer used - function kept for compatibility
    console.log('resetNodeIndicator called - node indicator removed from UI');
}

// Helper function to set project logo as indicator
function setProjectLogoIndicator(logoUrl) {
    // Project logo indicator is no longer used - function kept for compatibility
    console.log('setProjectLogoIndicator called - project logo indicator removed from UI');
}

function displayNodeInfo(nodeId, node) {
    console.log('displayNodeInfo called with:', { nodeId, node: node ? node.project || node : 'no node' });
    
    // Check if required elements exist
    const nodeTitle = document.getElementById('node-title');
    const infoContent = document.getElementById('info-content');
    
    if (!nodeTitle || !infoContent) {
        console.error('Missing required elements:', { nodeTitle: !!nodeTitle, infoContent: !!infoContent });
        return;
    }
    
    // For project nodes
    if (node.project) {
        const project = node.project;
        console.log('Displaying project info for:', project.name);
        
        nodeTitle.textContent = project.name;
        
        infoContent.style.display = 'block'; // Show the content div for projects
        infoContent.innerHTML = `
            <div style="margin-bottom: 15px;">
                <p style="margin-bottom: 8px;"><strong>Categories:</strong></p>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${project.tags.map(tag => `
                        <span class="project-category-chip" onclick="filterByCategory('${tag}')" style="
                            background: rgba(39, 174, 96, 0.15);
                            border: 1px solid rgba(39, 174, 96, 0.3);
                            color: #27ae60;
                            padding: 4px 12px;
                            border-radius: 20px;
                            font-size: 12px;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            display: inline-block;
                            backdrop-filter: blur(10px);
                        " 
                        onmouseover="this.style.background='rgba(39, 174, 96, 0.25)'; this.style.transform='scale(1.05)'"
                        onmouseout="this.style.background='rgba(39, 174, 96, 0.15)'; this.style.transform='scale(1)'"
                        >${tag}</span>
                    `).join('')}
                </div>
            </div>
            <p style="display: flex; align-items: center; gap: 8px;">
                <strong>Twitter:</strong> 
                <a href="${project.twitter}" target="_blank" style="display: flex; align-items: center; text-decoration: none; color: #1da1f2; transition: all 0.3s ease;" 
                   onmouseover="this.style.transform='scale(1.1)'; this.style.color='#0d8bd9';" 
                   onmouseout="this.style.transform='scale(1)'; this.style.color='#1da1f2';">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.086A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.387 5.976 4.47 4.47 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.114A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.785-6.84 12.785-12.785 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/>
                    </svg>
                </a>
            </p>

        `;
        
        // Project logo indicator removed from UI
        
        document.getElementById('category-multiselect-container').style.display = 'none';
        return;
    }
    
    // For category nodes
    if (tags.includes(nodeId)) {
        const projectsInCategory = projects.filter(p => p.tags.includes(nodeId));
        console.log('Displaying category info for:', nodeId, 'with', projectsInCategory.length, 'projects');
        
        nodeTitle.textContent = nodeId;
        
        infoContent.style.display = 'block'; // Show the content div for categories
        infoContent.innerHTML = `
            <p><strong>${projectsInCategory.length} projects</strong> in this category.</p>
            <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 10px;">
                ${projectsInCategory.map(p => `
                    <div style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; padding: 6px 10px;">
                        <img src="${p.logo || '/images/placeholder.svg'}" alt="${p.name}" style="width: 32px; height: 32px; border-radius: 50%; background: #fff; object-fit: cover; border: 1.5px solid #27ae60;">
                        <span style="color: #fff; font-size: 15px;">${p.name}</span>
                        <a href="${p.twitter}" target="_blank" style="margin-left: 8px; display: flex; align-items: center; text-decoration: none;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1da1f2" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.086A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.387 5.976 4.47 4.47 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.114A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.785-6.84 12.785-12.785 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/></svg>
                        </a>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Reset node indicator to default state for categories
        resetNodeIndicator();
        
        document.getElementById('category-multiselect-container').style.display = 'none';
        return;
    }
    
    // For hyperEVM node
    if (nodeId === 'hyperEVM') {
        console.log('Displaying hyperEVM info');
        
        // Clear existing content and create title with project count
        nodeTitle.innerHTML = '';
        
        // Create project count chip
        const projectCountChip = document.createElement('span');
        projectCountChip.className = 'project-count-chip';
        projectCountChip.textContent = `projects: ${projects.length}`;
        
        // Create reset filters button
        const resetFiltersBtn = document.createElement('button');
        resetFiltersBtn.id = 'reset-filters-btn';
        resetFiltersBtn.className = 'reset-filters-btn';
        resetFiltersBtn.style.display = 'none';
        resetFiltersBtn.title = 'Reset filters';
        resetFiltersBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
            </svg>
        `;
        
        // Append elements
        nodeTitle.appendChild(projectCountChip);
        nodeTitle.appendChild(resetFiltersBtn);
        
        infoContent.innerHTML = ``;
        infoContent.style.display = 'none'; // Hide the empty content div
        
        // Reset node indicator to default state for hyperEVM
        resetNodeIndicator();
        
        // Show and populate category chips
        const multiSelectContainer = document.getElementById('category-multiselect-container');
        const chipsContainer = document.getElementById('category-chips-container');
        multiSelectContainer.style.display = 'block';
        multiSelectContainer.style.marginTop = '0'; // Remove top margin for hyperEVM
        
        // Generate category chips
        chipsContainer.innerHTML = tags.map(tag => `
            <div class="category-chip ${window.selectedCategories && window.selectedCategories.includes(tag) ? 'selected' : ''}" 
                 data-category="${tag}" onclick="toggleCategoryChip('${tag}')">
                ${tag}
            </div>
        `).join('');
        
        // Add event listener for reset button
        const resetBtn = document.getElementById('reset-filters-btn');
        if (resetBtn) {
            resetBtn.removeEventListener('click', resetAllFilters);
            resetBtn.addEventListener('click', resetAllFilters);
        }
        
        // Update reset button visibility
        updateResetButtonVisibility();
        
        // Apply current filter
        filterGraphByCategories(window.selectedCategories || []);
        return;
    }
    
    console.log('No matching node type found for:', nodeId);
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
    
    // Show/hide reset button based on selection
    updateResetButtonVisibility();
    
    console.log('Selected categories:', selectedCategories);
    filterGraphByCategories(selectedCategories);
}

// Function to update reset button visibility
function updateResetButtonVisibility() {
    // Update desktop reset button
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
        if (selectedCategories && selectedCategories.length > 0) {
            resetBtn.style.display = 'flex';
        } else {
            resetBtn.style.display = 'none';
        }
    }
    
    // Update mobile reset button
    const mobileResetBtn = document.getElementById('mobile-reset-filters-btn');
    if (mobileResetBtn) {
        if (selectedCategories && selectedCategories.length > 0) {
            mobileResetBtn.style.display = 'flex';
        } else {
            mobileResetBtn.style.display = 'none';
        }
    }
}

// Function to reset all filters
function resetAllFilters() {
    // Clear selected categories
    selectedCategories = [];
    window.selectedCategories = [];
    
    // Remove selected class from all chips
    const selectedChips = document.querySelectorAll('.category-chip.selected');
    selectedChips.forEach(chip => {
        chip.classList.remove('selected');
    });
    
    // Clear mobile tag selections
    selectedMobileTags = [];
    const mobileChips = document.querySelectorAll('.mobile-tag-chip');
    mobileChips.forEach(chip => {
        if (chip.dataset.tag === 'all') {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });
    
    // Hide reset button
    updateResetButtonVisibility();
    
    // Reset graph to show all nodes
    filterGraphByCategories([]);
    
    // Refresh mobile project list
    populateProjectList([]);
    
    console.log('All filters reset');
}

// Make the functions global
window.toggleCategoryChip = toggleCategoryChip;
window.resetAllFilters = resetAllFilters;

// Function to filter graph by a single category (called from project details panel)
function filterByCategory(category) {
    console.log('Filtering by single category:', category);
    
    // Set the selected category (replace any existing selection)
    window.selectedCategories = [category];
    selectedCategories = [category];
    
    // Update reset button visibility
    updateResetButtonVisibility();
    
    // Apply the filter
    filterGraphByCategories([category]);
    
            // Update the hyperEVM panel to show the selected category
        setTimeout(() => {
            network.selectNodes(['hyperEVM']);
            displayNodeInfo('hyperEVM', nodes.get('hyperEVM'));
            
            // Update category chips to show selected state
            const chips = document.querySelectorAll('.category-chip');
            chips.forEach(chip => {
                const chipCategory = chip.getAttribute('data-category');
                if (chipCategory === category) {
                    chip.classList.add('selected');
                } else {
                    chip.classList.remove('selected');
                }
            });
            
            // Ensure the view is centered on all visible nodes - DISABLED to fix zoom loop
            // setTimeout(() => {
            //     if (network) {
            //         const visibleNodeIds = [];
            //         nodes.forEach(node => {
            //             if (!node.hidden) {
            //                 visibleNodeIds.push(node.id);
            //             }
            //         });
            //         
            //         if (visibleNodeIds.length > 0) {
            //             network.fit({
            //                 nodes: visibleNodeIds,
            //                 animation: {
            //                     duration: 800,
            //                     easingFunction: 'easeInOutQuad'
            //                 }
            //             });
            //         }
            //     }
            // }, 300);
        }, 100);
    
    // Optional: Show a notification about the filter
    console.log(`Graph filtered to show only "${category}" projects`);
}

// Make the function global
window.filterByCategory = filterByCategory;

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
    console.log('DOM loaded, initializing app...');
    
    const isMobile = window.innerWidth <= 768;
    console.log('Device type:', isMobile ? 'Mobile' : 'Desktop');
    
    // Initialize mobile or desktop view based on screen size
    if (isMobile) {
        // Mobile: Initialize list view immediately, don't wait for vis.js
        initializeMobileView();
    } else {
        // Desktop: Initialize graph view (requires vis.js)
        initializeDesktopView();
    }
    
    // Fetch HYPE data (works independently)
    fetchHypeData();
    fetchHypePrice();
    
    // Handle section toggles
    const toggleButtons = document.querySelectorAll('.section-toggle');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionItem = this.closest('.section-item');
            sectionItem.classList.toggle('active');
        });
    });
});

// Initialize desktop view with graph
function initializeDesktopView() {
    console.log('Initializing desktop view...');
    
    // Hide mobile elements
    const mobileHeader = document.querySelector('.mobile-header');
    if (mobileHeader) {
        mobileHeader.style.display = 'none';
        document.body.style.paddingTop = '0';
    }
    
    const listView = document.getElementById('mobile-list-view');
    if (listView) {
        listView.style.display = 'none';
    }
    
    // Show graph section
    const graphSection = document.getElementById('graph-section');
    if (graphSection) {
        graphSection.style.display = '';
    }
    
    // Initialize graph (wait for vis.js if needed)
    function tryInitGraph() {
        if (typeof vis === 'undefined') {
            setTimeout(tryInitGraph, 100);
            return;
        }
        
        // vis.js is loaded, create graph
        if (createGraphData()) {
            initializeGraph();
            setupGraphEventHandlers();
        }
    }
    
    tryInitGraph();
}

// Setup graph-specific event handlers
function setupGraphEventHandlers() {
    // Select hyperEVM node by default - DISABLED to fix zoom issue
    if (network && nodes) {
        setTimeout(() => {
            if (network && nodes) {
                network.selectNodes(['hyperEVM']);
                displayNodeInfo('hyperEVM', nodes.get('hyperEVM'));
            }
        }, 2000);
    }
}

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
        
        // Fit the view to show all nodes when no filter is applied - DISABLED to fix zoom loop
        // setTimeout(() => {
        //     if (network) {
        //         console.log('Fitting view to show all nodes (no filter)');
        //         network.fit({
        //             animation: {
        //                 duration: 1000,
        //                 easingFunction: 'easeInOutQuad'
        //             }
        //         });
        //     }
        // }, 200);
        
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
    
    // Auto-fit all visible nodes with a slight delay to ensure rendering is complete - DISABLED to fix zoom loop
    // setTimeout(() => {
    //     if (network) {
    //         // Get all visible node IDs
    //         const visibleNodeIds = [];
    //         nodes.forEach(node => {
    //             if (!node.hidden) {
    //                 visibleNodeIds.push(node.id);
    //             }
    //         });
    //         
    //         console.log('Fitting view to visible nodes:', visibleNodeIds.length, 'nodes');
    //         
    //         // Fit the view to show all visible nodes
    //         if (visibleNodeIds.length > 0) {
    //             network.fit({
    //                 nodes: visibleNodeIds,
    //                 animation: {
    //                     duration: 1000,
    //                     easingFunction: 'easeInOutQuad'
    //                 }
    //             });
    //         }
    //     }
    // }, 200); // Increased delay to ensure all nodes are properly hidden/shown first
}

// Collection box functions REMOVED - no longer needed for this version

// Make remove function global - REMOVED
// window.removeProjectFromSlot = removeProjectFromSlot;

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

// Gradient customization variables
let currentGradientConfig = {
    color1: { hex: '#0B2927', x: 20, y: 20 },
    color2: { hex: '#A5EEDA', x: 80, y: 50 },
    color3: { hex: '#2A5A50', x: 50, y: 80 }
};

// Initialize gradient controls
function initializeGradientControls() {
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const color3Input = document.getElementById('color3');
    const watermarkToggle = document.getElementById('watermark-toggle');
    
    const randomizeBtn = document.getElementById('randomize-gradient-btn');
    
    // Update gradient config when inputs change
    function updateGradientConfig() {
        currentGradientConfig = {
            color1: { hex: color1Input.value, x: 20, y: 20 },      // Fixed top-left position
            color2: { hex: color2Input.value, x: 80, y: 50 },     // Fixed right-center position
            color3: { hex: color3Input.value, x: 50, y: 80 }      // Fixed bottom-center position
        };
        updateCanvasPreview(); // Update the actual canvas image
    }
    
    // Update canvas when watermark toggle changes
    function updateCanvasWithWatermark() {
        updateCanvasPreview(); // This will trigger a redraw with or without watermark
    }
    
    // Add event listeners for real-time updates
    [color1Input, color2Input, color3Input].forEach(input => {
        input.addEventListener('input', updateGradientConfig);
    });
    
    // Add watermark toggle event listener
    if (watermarkToggle) {
        watermarkToggle.addEventListener('change', updateCanvasWithWatermark);
    }
    
    randomizeBtn.addEventListener('click', () => {
        randomizeGradient();
        updateCanvasPreview(); // Update canvas after randomization
    });
}

// Randomize gradient colors and positions
function randomizeGradient() {
    const colors = ['#0B2927', '#A5EEDA', '#2A5A50', '#1a4a3a', '#7dd3c0', '#0f3530', '#b8f2e6', '#2d6e5e'];
    
    currentGradientConfig = {
        color1: { 
            hex: colors[Math.floor(Math.random() * colors.length)], 
            x: 20, y: 20    // Fixed top-left position
        },
        color2: { 
            hex: colors[Math.floor(Math.random() * colors.length)], 
            x: 80, y: 50    // Fixed right-center position
        },
        color3: { 
            hex: colors[Math.floor(Math.random() * colors.length)], 
            x: 50, y: 80    // Fixed bottom-center position
        }
    };
    
    // Update input values
    document.getElementById('color1').value = currentGradientConfig.color1.hex;
    document.getElementById('color2').value = currentGradientConfig.color2.hex;
    document.getElementById('color3').value = currentGradientConfig.color3.hex;
    
    updateCanvasPreview();
}

// Apply gradient to the canvas image
function applyGradientToImage() {
    // Re-generate the image with the new gradient
    captureGraphImage();
}

// Generate canvas gradient
function drawGradientBackground(ctx, width, height, config) {
    // Create multiple radial gradients and composite them
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d');
    
    // Base color
    tempCtx.fillStyle = config.color1.hex;
    tempCtx.fillRect(0, 0, width, height);
    
    // Add each radial gradient with blend modes
    [config.color1, config.color2, config.color3].forEach((colorConfig, index) => {
        const gradient = tempCtx.createRadialGradient(
            (colorConfig.x / 100) * width, (colorConfig.y / 100) * height, 0,
            (colorConfig.x / 100) * width, (colorConfig.y / 100) * height, Math.min(width, height) * 0.6
        );
        
        gradient.addColorStop(0, colorConfig.hex);
        gradient.addColorStop(0.5, hexToRgba(colorConfig.hex, 0.5));
        gradient.addColorStop(1, 'transparent');
        
        tempCtx.globalCompositeOperation = index === 0 ? 'source-over' : 'overlay';
        tempCtx.fillStyle = gradient;
        tempCtx.fillRect(0, 0, width, height);
    });
    
    // Draw the final gradient onto the main canvas
    ctx.drawImage(tempCanvas, 0, 0);
}

// Convert hex color to rgba
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Update the canvas preview with new gradient
function updateCanvasPreview() {
    const shareCanvas = document.getElementById('share-canvas');
    if (!shareCanvas) return;
    
    const ctx = shareCanvas.getContext('2d');
    const width = shareCanvas.width;
    const height = shareCanvas.height;
    
    // Store the current graph content
    const graphImageData = ctx.getImageData(0, 0, width, height);
    
    // Clear and redraw gradient background
    ctx.clearRect(0, 0, width, height);
    drawGradientBackground(ctx, width, height, currentGradientConfig);
    
    // Get the network canvas again and redraw it
    const networkCanvas = document.querySelector('#graph-container canvas');
    if (networkCanvas) {
        const sourceWidth = networkCanvas.width;
        const sourceHeight = networkCanvas.height;
        
        try {
            ctx.drawImage(
                networkCanvas,
                0, 0, sourceWidth, sourceHeight,
                0, 0, width, height
            );
        } catch (error) {
            console.log('Could not redraw network canvas, keeping previous content');
        }
    }
    
    // Add watermark if enabled
    addWatermarkToCanvas(ctx, width, height);
}

// Function to enhance canvas image quality, especially for low-resolution node images
function enhanceCanvasImageQuality(ctx, width, height) {
    try {
        console.log('Applying image quality enhancement...');
        
        // Get the image data
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        
        // Apply sharpening filter to improve clarity of low-res images
        const sharpenKernel = [
            0, -1, 0,
            -1, 5, -1,
            0, -1, 0
        ];
        
        // Apply subtle sharpening to enhance edges
        applySharpeningFilter(data, width, height, sharpenKernel, 0.3);
        
        // Put the enhanced image data back
        ctx.putImageData(imageData, 0, 0);
        
        console.log('Image quality enhancement applied');
        
    } catch (error) {
        console.warn('Could not apply image enhancement:', error);
        // Continue without enhancement if it fails
    }
}

// Apply sharpening filter to image data
function applySharpeningFilter(data, width, height, kernel, intensity) {
    const output = new Uint8ClampedArray(data);
    
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            for (let c = 0; c < 3; c++) { // RGB channels only
                let sum = 0;
                for (let ky = -1; ky <= 1; ky++) {
                    for (let kx = -1; kx <= 1; kx++) {
                        const idx = ((y + ky) * width + (x + kx)) * 4 + c;
                        sum += data[idx] * kernel[(ky + 1) * 3 + (kx + 1)];
                    }
                }
                
                const currentIdx = (y * width + x) * 4 + c;
                const originalValue = data[currentIdx];
                const sharpenedValue = Math.max(0, Math.min(255, sum));
                
                // Blend original and sharpened values based on intensity
                output[currentIdx] = originalValue + (sharpenedValue - originalValue) * intensity;
            }
        }
    }
    
    // Copy the enhanced data back
    for (let i = 0; i < data.length; i++) {
        if (i % 4 !== 3) { // Skip alpha channel
            data[i] = output[i];
        }
    }
}

// Force high-DPI rendering for vis.js canvas
function forceHighDPIRendering() {
    try {
        console.log('Forcing high-DPI rendering...');
        
        const canvas = document.querySelector('#graph-container canvas');
        if (!canvas) {
            console.warn('Canvas not found for high-DPI rendering');
            return;
        }
        
        const ctx = canvas.getContext('2d');
        const devicePixelRatio = window.devicePixelRatio || 1;
        
        console.log('Device pixel ratio:', devicePixelRatio);
        console.log('Canvas size before:', canvas.width, 'x', canvas.height);
        
        // Get the CSS size
        const rect = canvas.getBoundingClientRect();
        const cssWidth = rect.width;
        const cssHeight = rect.height;
        
        console.log('CSS size:', cssWidth, 'x', cssHeight);
        
        // Set the actual canvas size to match device pixel ratio
        canvas.width = cssWidth * devicePixelRatio;
        canvas.height = cssHeight * devicePixelRatio;
        
        // Scale the canvas back down using CSS
        canvas.style.width = cssWidth + 'px';
        canvas.style.height = cssHeight + 'px';
        
        // Apply high-quality rendering settings to the context
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.textRenderingOptimization = 'optimizeQuality';
        
        // Scale the drawing context so everything draws at the higher resolution
        ctx.scale(devicePixelRatio, devicePixelRatio);
        
        console.log('Canvas size after:', canvas.width, 'x', canvas.height);
        console.log('High-DPI rendering applied with quality settings');
        
        // Force network to redraw at new resolution
        if (network && network.redraw) {
            network.redraw();
        }
        
        // Also try to enhance image loading quality for nodes
        enhanceNodeImageQuality();
        
    } catch (error) {
        console.error('Error applying high-DPI rendering:', error);
    }
}

// Function to enhance node image loading quality
function enhanceNodeImageQuality() {
    try {
        console.log('Enhancing node image quality...');
        
        // Force reload all project node images with better quality settings
        projects.forEach(project => {
            const nodeId = `project-${project.id}`;
            const node = nodes.get(nodeId);
            
            if (node && node.image) {
                // Create a high-quality image element
                const img = new Image();
                img.crossOrigin = 'anonymous';
                
                // Set high-quality loading
                img.style.imageRendering = 'high-quality';
                img.style.imageRendering = '-webkit-optimize-contrast';
                img.style.imageRendering = 'crisp-edges';
                
                img.onload = function() {
                    // Update the node with the high-quality loaded image
                    nodes.update({
                        id: nodeId,
                        image: img.src,
                        // Force vis.js to use higher quality rendering
                        imageSize: {
                            width: Math.max(200, img.naturalWidth),
                            height: Math.max(200, img.naturalHeight)
                        }
                    });
                };
                
                img.src = node.image;
            }
        });
        
        console.log('Node image quality enhancement applied');
        
    } catch (error) {
        console.warn('Could not enhance node image quality:', error);
    }
}

// Mobile-specific canvas sizing function - simplified to let vis.js handle it
function ensureMobileCanvasSize() {
    if (window.innerWidth <= 768 && network) {
        // Just let vis.js handle the canvas sizing and fitting
        network.redraw();
        network.fit({
            animation: {
                duration: 500,
                easingFunction: 'easeInOutQuad'
            }
        });
    }
}

// Track last window width for resize detection
let lastWindowWidth = window.innerWidth;

// Add global resize handler for responsive behavior
window.addEventListener('resize', function() {
    const wasMobile = lastWindowWidth <= 768;
    const isMobile = window.innerWidth <= 768;
    
    // Check if we crossed the mobile/desktop threshold
    if (wasMobile !== isMobile) {
        console.log('Device type changed:', isMobile ? 'Mobile' : 'Desktop');
        
        // Reload the appropriate view
        location.reload(); // Simple solution: reload to reinitialize properly
    } else if (network) {
        // Just resize the network if it exists
        setTimeout(() => {
            if (isMobile) {
                ensureMobileCanvasSize();
            }
            network.redraw();
            network.fit();
        }, 100);
    }
    
    lastWindowWidth = window.innerWidth;
});

// Initialize the network

// Bento Grid Functionality
let currentView = 'graph'; // 'graph' or 'bento'

// Initialize bento grid
function initializeBentoGrid() {
    const bentoGrid = document.getElementById('bento-grid');
    if (!bentoGrid) return;
    
    // Group projects by category
    const categories = {};
    projects.forEach(project => {
        project.tags.forEach(tag => {
            if (!categories[tag]) {
                categories[tag] = [];
            }
            categories[tag].push(project);
        });
    });
    
    // Function to determine size class based on project count
    function getSizeClass(count) {
        if (count >= 15) return 'size-large';
        if (count >= 8) return 'size-medium';
        if (count >= 4) return 'size-small';
        return 'size-tiny';
    }
    
    // Create bento grid HTML
    bentoGrid.innerHTML = '';
    Object.keys(categories).forEach(category => {
        const categoryProjects = categories[category];
        const sizeClass = getSizeClass(categoryProjects.length);
        const categoryElement = document.createElement('div');
        categoryElement.className = `bento-category ${sizeClass}`;
        categoryElement.innerHTML = `
            <div class="bento-category-header">
                <h3 class="bento-category-title">${category}</h3>
                <span class="bento-category-count">${categoryProjects.length}</span>
            </div>
            <div class="bento-projects">
                ${categoryProjects.map(project => `
                    <div class="bento-project" data-project-id="${project.id}" onclick="selectProjectFromBento(${project.id})">
                        <img src="${project.logo}" alt="${project.name}" class="bento-project-logo" onerror="this.src='/images/placeholder.svg'">
                        <div class="bento-project-name">${project.name}</div>
                    </div>
                `).join('')}
            </div>
        `;
        bentoGrid.appendChild(categoryElement);
    });
}

// Handle project selection from bento grid
function selectProjectFromBento(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    // Remove previous selection
    document.querySelectorAll('.bento-project.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Add selection to clicked project
    const projectElement = document.querySelector(`[data-project-id="${projectId}"]`);
    if (projectElement) {
        projectElement.classList.add('selected');
    }
    
    // Show project popup
    showProjectPopup(project);
    
    // If in graph view, also select the node
    if (currentView === 'graph' && network) {
        const nodeId = `project-${projectId}`;
        network.selectNodes([nodeId]);
    }
}

// Show project popup
function showProjectPopup(project) {
    const popup = document.getElementById('project-popup');
    const logo = document.getElementById('project-popup-logo');
    const name = document.getElementById('project-popup-name');
    const twitter = document.getElementById('project-popup-twitter');
    const tags = document.getElementById('project-popup-tags');
    
    // Set popup content
    logo.src = project.logo;
    logo.alt = project.name;
    logo.onerror = function() {
        this.src = '/images/placeholder.svg';
    };
    
    name.textContent = project.name;
    twitter.href = project.twitter;
    
    // Populate tags
    tags.innerHTML = project.tags.map(tag => 
        `<span class="project-popup-tag">${tag}</span>`
    ).join('');
    
    // Show popup
    popup.style.display = 'flex';
}

// Close project popup
function closeProjectPopup() {
    const popup = document.getElementById('project-popup');
    popup.style.display = 'none';
}

// View toggle functionality
function initializeViewToggle() {
    const toggleOptions = document.querySelectorAll('.desktop-view-toggle .toggle-option');
    const graphSection = document.getElementById('graph-section');
    const bentoSection = document.getElementById('bento-section');
    const infoSection = document.querySelector('.info-section');
    
    toggleOptions.forEach(option => {
        option.addEventListener('click', () => {
            const view = option.dataset.view;
            if (view === currentView) return;
            
            // Update active state for all toggle options
            document.querySelectorAll('.desktop-view-toggle .toggle-option').forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Set active state for the clicked option and its counterpart
            option.classList.add('active');
            const otherToggle = document.querySelector(`.desktop-view-toggle .toggle-option[data-view="${view}"]:not(.active)`);
            if (otherToggle) {
                otherToggle.classList.add('active');
            }
            
            // Switch views
            if (view === 'bento') {
                graphSection.style.display = 'none';
                bentoSection.style.display = 'block';
                infoSection.style.display = 'none'; // Hide side panel in bento view
                currentView = 'bento';
                initializeBentoGrid();
            } else {
                bentoSection.style.display = 'none';
                graphSection.style.display = 'block';
                infoSection.style.display = 'flex'; // Show side panel in graph view
                currentView = 'graph';
                if (network) {
                    network.redraw();
                }
            }
        });
    });
}

// Initialize view toggle on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeViewToggle();
});