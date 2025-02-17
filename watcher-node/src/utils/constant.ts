export const example = `
query {
    transactions(
        recipients: ["5WzR7rJCuqCKEq02WUPhTjwnzllLjGu6SA7qhYpcKRs"],
        tags: [
        { name: "Data-Protocol", values: ["ao"] },
        { name: "Variant", values: ["ao.TN.1"] },

    ]) {
    edges {
      node {
                id
        tags {
                    name
                    value
                }
        owner {
                    address
                }
            }
        }
    }
}
`
export const example2 = `
query{
  transactions(recipients:["Ra4v8HF0injoBO7rjbujkRJ3HzVmXfynrrOs_QN62t4"],
    tags:[
    {name: "Data-Protocol", values:["ao"]},
      {name: "Variant", values:["ao.TN.1"]},


  ],first:100,
    sort:HEIGHT_DESC) {
    edges {
      node {
        id
        bundledIn{
          id
        }
        block {
          timestamp
        }
        tags {
          name
          value
        }
        owner {
          address
        }
      }
    }
  }
}`

export const getPrice = `
query{
  transactions(recipients:["DIf3hBBaJEaDlmljqgKue5JfXnySwr2vq0CdPnmMuIU"],
    tags:[
    {name: "Data-Protocol", values:["ao"]},
      {name: "Variant", values:["ao.TN.1"]},
      {name: "Action", values: ["Get-Price"]},


  ],first:100,
    sort:HEIGHT_DESC) {
    edges {
      node {
        id
        block {
          timestamp
        }
        tags {
          name
          value
        }
      }
    }
  }
}`

export const getData = `
query{
  transactions(recipients:["DIf3hBBaJEaDlmljqgKue5JfXnySwr2vq0CdPnmMuIU"],
    tags:[
    {name: "Data-Protocol", values:["ao"]},
      {name: "Variant", values:["ao.TN.1"]},
      {name: "Action", values: ["Get-Data"]},
  ],first:100,
    sort:HEIGHT_DESC) {
    edges {
      node {
        id
        block {
          timestamp
        }
        tags {
          name
          value
        }
      }
    }
  }
}`

export const COINIDS: any = {
  btc: "bitcoin",
  eth: "ethereum",
  usdt: "tether",
  bnb: "binancecoin",
  sol: "solana",
  xrp: "ripple",
  usdc: "usd-coin",
  steth: "staked-ether",
  ada: "cardano",
  avax: "avalanche-2",
  doge: "dogecoin",
  trx: "tron",
  dot: "polkadot",
  matic: "matic-network",
  link: "chainlink",
  ton: "the-open-network",
  wbtc: "wrapped-bitcoin",
  shib: "shiba-inu",
  icp: "internet-computer",
  ltc: "litecoin",
  dai: "dai",
  uni: "uniswap",
  bch: "bitcoin-cash",
  etc: "ethereum-classic",
  atom: "cosmos",
  leo: "leo-token",
  op: "optimism",
  near: "near",
  xlm: "stellar",
  apt: "aptos",
  okb: "okb",
  inj: "injective-protocol",
  ldo: "lido-dao",
  fil: "filecoin",
  tia: "celestia",
  xmr: "monero",
  imx: "immutable-x",
  arb: "arbitrum",
  hbar: "hedera-hashgraph",
  kas: "kaspa",
  mnt: "mantle",
  stx: "blockstack",
  cro: "crypto-com-chain",
  vet: "vechain",
  tusd: "true-usd",
  fdusd: "first-digital-usd",
  mkr: "maker",
  qnt: "quant-network",
  bsv: "bitcoin-cash-sv",
  sei: "sei-network",
  grt: "the-graph",
  ordi: "ordinals",
  reth: "rocket-pool-eth",
  aave: "aave",
  algo: "algorand",
  rndr: "render-token",
  sui: "sui",
  egld: "elrond-erd-2",
  rune: "thorchain",
  sats: "sats-ordinals",
  tao: "bittensor",
  mina: "mina-protocol",
  flow: "flow",
  snx: "havven",
  osmo: "osmosis",
  ftm: "fantom",
  axs: "axie-infinity",
  sand: "the-sandbox",
  tkx: "tokenize-xchange",
  theta: "theta-token",
  hnt: "helium",
  btt: "bittorrent",
  kcs: "kucoin-shares",
  xtz: "tezos",
  beam: "beam-2",
  wemix: "wemix-token",
  bonk: "bonk",
  wbt: "whitebit",
  neo: "neo",
  cheel: "cheelee",
  last_updated: "2024-01-13T21:44:18.191Z",
  eos: "eos",
  mana: "decentraland",
  gala: "gala",
  kava: "kava",
  bgb: "bitget-token",
  astr: "astar",
  woo: "woo-network",
  frxeth: "frax-ether",
  iota: "iota",
  rose: "oasis-network",
  ethdydx: "dydx",
  chz: "chiliz",
  lunc: "terra-luna",
  blur: "blur",
  cake: "pancakeswap-token",
  usdd: "usdd",
  ens: "ethereum-name-service",
  fet: "fetch-ai",
  rpl: "rocket-pool",
  fxs: "frax-share"
}