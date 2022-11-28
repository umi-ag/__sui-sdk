type URL = string

export type ProtocolProfile = {
  name: string
  logoURI: string
  categories: DappCategory[]
  extensions: {
    description?: string
    discord?: string
    facebook?: string
    github?: string
    instagram?: string
    medium?: string
    reddit?: string
    telegram?: string
    twitter?: string
    website?: string
  }
  staging: Staging
}

export const stagingList = [
  'pre-devnet',
  'devnet',
  'mainnet',
]
export type Staging = typeof stagingList[number]

export const dappCategoryList = [
  'DEX',
  'NFT-Marketplace',
] as const
export type DappCategory = typeof dappCategoryList[number]

export const protocolList = [
  'araya',
  'acova',
  'dragon',
  'kiriya',
  'suidex',
  'suiswap',
  'movex',
  'wisp',
] as const

export type ProtocolName = typeof protocolList[number]

export const protocolBook: Record<ProtocolName, ProtocolProfile> = {
  acova: {
    name: 'Acova',
    logoURI: 'https://pbs.twimg.com/profile_images/1502715353310269441/FLmFRNZl_400x400.jpg',
    extensions: {
      website: 'https://acova.io',
      twitter: 'https://twitter.com/acovamarket',
    },
    categories: [
      'NFT-Marketplace',
    ],
    staging: 'pre-devnet',
  },
  araya: {
    name: 'Araya',
    logoURI: 'https://pbs.twimg.com/profile_images/1581030195842240512/xBOcReg__400x400.jpg',
    extensions: {
      website: 'https://arayafi.org/',
      twitter: 'https://twitter.com/ArayaFinance',
      discord: 'https://twitter.com/acovamarket',
    },
    categories: [
      'DEX',
    ],
    staging: 'devnet',
  },
  dragon: {
    name: 'Dragon',
    logoURI: 'https://pbs.twimg.com/profile_images/1579682510812114946/mrBTHMDd_400x400.jpg',
    extensions: {
      website: 'https://twitter.com/dragonsui_com',
    },
    categories: [
      'NFT-Marketplace',
    ],
    staging: 'pre-devnet',
  },
  kiriya: {
    name: 'Kiriya',
    logoURI: 'https://pbs.twimg.com/profile_images/1575588291763589120/29_0d1ku_400x400.jpg',
    extensions: {
      website: 'https://efficacy.finance/kriya-sui-dex/',
      twitter: 'https://twitter.com/KriyaDEX',
    },
    categories: [
      'DEX',
    ],
    staging: 'devnet',
  },
  suidex: {
    name: 'Suidex',
    logoURI: 'https://pbs.twimg.com/profile_images/1586631638087131136/pQ_TavMy_400x400.jpg',
    extensions: {
      website: 'https://suidex.io/',
      twitter: 'https://twitter.com/Suidex_io',
    },
    categories: [
      'DEX',
    ],
    staging: 'pre-devnet',
  },
  suiswap: {
    name: 'Suiswap',
    logoURI: 'https://pbs.twimg.com/profile_images/1567166511852433410/P-fXc0nn_400x400.jpg',
    extensions: {
      discord: 'https://discord.com/invite/D3M5CpMEch',
      github: 'https://github.com/vividnetwork',
      twitter: 'https://twitter.com/suiswap_app',
      website: 'https://suiswap.io/',
    },
    categories: [
      'DEX',
    ],
    staging: 'devnet',
  },
  movex: {
    name: "Movex",
    logoURI: 'https://pbs.twimg.com/profile_images/1558573586159284224/m53awHZl_400x400.jpg',
    extensions: {
      discord: 'https://discord.com/invite/U5BPsCFCRu',
      twitter: 'https://twitter.com/joinMovEX',
      website: 'https://www.movex.exchange',
    },
    categories: [
      'DEX',
    ],
    staging: 'devnet',
  },
  wisp: {
    name: 'Wisp Swap',
    logoURI: 'https://pbs.twimg.com/profile_images/1591115744242114561/bNATBdQw_400x400.jpg',
    extensions: {
      twitter: 'https://twitter.com/WispSwap',
    },
    categories: [
      'DEX',
    ],
    staging: 'pre-devnet',
  }
}
