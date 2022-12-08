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
  'testnet',
  'mainnet',
]
export type Staging = typeof stagingList[number]

export const dappCategoryList = [
  'DEX',
  'Saving',
  'NFT-Marketplace',
] as const
export type DappCategory = typeof dappCategoryList[number]

export const protocolList = [
  'umaswap',
  'udoswap',
  'araya',
  'acova',
  'ballast',
  'cetus',
  'dragon',
  'kiriya',
  'mni',
  'owlswap',
  'sea',
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
  ballast: {
    name: 'Ballast',
    logoURI: 'https://pbs.twimg.com/profile_images/1592504827996536832/pQBK9-gi_400x400.jpg',
    extensions: {
      twitter: 'https://twitter.com/BallastFi',
      website: 'https://www.ballast.fi',
    },
    categories: [
      'Saving',
    ],
    staging: 'pre-devnet',

  },
  cetus: {
    name: 'Cetus',
    logoURI: 'https://pbs.twimg.com/profile_images/1575588291763589120/29_0d1ku_400x400.jpg',
    extensions: {
      website: 'https://www.cetus.zone',
      twitter: 'https://twitter.com/CetusProtocol',
    },
    categories: [
      'DEX',
    ],
    staging: 'pre-devnet',
  },
  dragon: {
    name: 'Dragon',
    logoURI: 'https://pbs.twimg.com/profile_images/1579682510812114946/mrBTHMDd_400x400.jpg',
    extensions: {
      twitter: 'https://twitter.com/dragonsui_com',
      website: 'https://dragonsui.com',
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
  mni: {
    name: "Mni Finance",
    logoURI: 'https://pbs.twimg.com/profile_images/1562832228497133568/t2sSh2et_400x400.jpg',
    extensions: {
      twitter: 'https://twitter.com/MniFinance',
      website: 'https://mni.finance',
    },
    categories: [
      'Saving',
    ],
    staging: 'pre-devnet',
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
  owlswap: {
    name: 'Owl Swap',
    logoURI: "https://pbs.twimg.com/profile_images/1579044964092506115/2H_4MYjC_400x400.jpg",
    extensions: {
      twitter: 'https://twitter.com/owlswap_finance',
      website: 'https://owlswap.finance',
    },
    categories: [
      'DEX',
    ],
    staging: 'pre-devnet',
  },
  sea: {
    name: 'Sea Protocol',
    logoURI: 'https://pbs.twimg.com/profile_images/1561193298773295105/r6jHCk8Q_400x400.jpg',
    extensions: {
      discord: 'https://discord.com/invite/fuEkecabwS',
      github: 'https://github.com/seaprotocol',
      medium: 'https://medium.com/@seaprotocol',
      twitter: 'https://twitter.com/sea_protocol',
      website: 'https://www.seadex.org'
    },
    categories: [
      'DEX',
    ],
    staging: 'pre-devnet',
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
      website: 'https://suiswap.app',
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
  },
  udoswap: {
    name: 'Udo',
    logoURI: 'https://pbs.twimg.com/profile_images/1591115744242114561/bNATBdQw_400x400.jpg',
    extensions: {
      twitter: 'https://twitter.com/umi_protocol',
    },
    categories: [
      'DEX',
    ],
    staging: 'devnet',
  },
  umaswap: {
    name: 'Uma',
    logoURI: "https://pbs.twimg.com/profile_images/1579044964092506115/2H_4MYjC_400x400.jpg",
    extensions: {
      twitter: 'https://twitter.com/umi_protocol',
    },
    categories: [
      'DEX',
    ],
    staging: 'devnet',
  },
}
