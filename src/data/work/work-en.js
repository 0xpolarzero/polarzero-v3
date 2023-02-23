import types from '../helpers/types';
import tech from '../helpers/tech';

const work = [
  // {
  //   type: [types[0]],
  //   title: 'Cross-chain token-gated smart contract',
  //   description: (
  //     <div>
  //       Restrict access to a smart contract based on the{' '}
  //       <b>ERC20 balance of a user accross multiple chains</b>.
  //     </div>
  //   ),
  //   context: (
  //     <div>
  //       This uses{' '}
  //       <a href='https://chain.link/functions' target='_blank' rel='noreferrer'>
  //         Chainlink Functions
  //       </a>{' '}
  //       to retrieve the balance of an Ethereum address for an ERC20 token
  //       accross multiple blockchains. The aggregated balance is then brought
  //       back to the original chain to gate access to specific functions in the
  //       smart contract.
  //     </div>
  //   ),
  //   links: (
  //     <>
  //       <a
  //         href='https://cross-chain-erc-20-balance-verification.vercel.app/'
  //         target='_blank'
  //         rel='noreferrer'>
  //         Website
  //       </a>{' '}
  //       |{' '}
  //       <a href='' target='_blank' rel='noreferrer'>
  //         Other links
  //       </a>{' '}
  //       |{' '}
  //       <a
  //         href='https://github.com/0xpolarzero/cross-chain-ERC20-balance-verification'
  //         target='_blank'
  //         rel='noreferrer'>
  //         Github
  //       </a>
  //     </>
  //   ),
  //   tech: [
  //     tech.solidity,
  //     tech.javascript,
  //     tech.hardhat,
  //     tech.chainlink,
  //     tech.wagmi,
  //     tech.ethers,
  //     tech.nextjs,
  //     tech.antd,
  //     tech.zustand,
  //   ],
  //   image: {
  //     url: '/img/screenshots/cross-chain-erc20-balance-verification.png',
  //     link: 'https://cross-chain-erc-20-balance-verification.vercel.app/',
  //     bgType: 'light',
  //     x: 4112,
  //     y: 2400,
  //   },
  //   date: '2023-02',
  // },
  {
    type: [types[0], types[1], types[3]],
    title: 'Echoes',
    description: (
      <div>
        <b>A contemplative yet interactive digital collectible</b>. <br />
        Each is a combination of visual and audio attributes, which gives birth
        to an entity made of particles. The project is intended as a way to{' '}
        <b>experience an immersive and interactive audiovisual experiment</b>.
        <br />
        It is an ERC721 implementation, with a modified tokenURI method to allow
        for <b>dynamically building the metadata</b>, therefore enabling
        interaction and time-based enhancements.
      </div>
    ),
    context: (
      <div>
        Built as a final project for the{' '}
        <a
          href='https://university.alchemy.com/'
          target='_blank'
          rel='noreferrer'>
          Alchemy University
        </a>{' '}
        Ethereum Bootcamp.
      </div>
    ),
    links: (
      <>
        <a href='https://echoes.polarzero.xyz' target='_blank' rel='noreferrer'>
          Website
        </a>{' '}
        |{' '}
        <a
          href='https://github.com/0xpolarzero/echoes'
          target='_blank'
          rel='noreferrer'>
          Github
        </a>
      </>
    ),
    tech: [
      tech.solidity,
      tech.javascript,
      tech.hardhat,
      tech.theGraph,
      tech.apollographql,
      tech.wagmi,
      tech.ethers,
      tech.reactThreeFiber,
      tech.threejs,
      tech.nextjs,
      tech.antd,
      tech.zustand,
    ],
    image: {
      url: {
        dark: '/img/screenshots/echoes-dark.png',
        light: '/img/screenshots/echoes-light.png',
      },
      link: 'https://echoes.polarzero.xyz',
      bgType: null,
      x: 4112,
      y: 2398,
    },
    date: '2023-02',
  },
  {
    type: [types[1], types[2]],
    title: 'Poligraph',
    description: (
      <div>
        A visual 3D representation of the{' '}
        <b>French political landscape in the Assemblée Nationale</b> based on
        the <b>political party affiliation and interactions of the deputies</b>.
        <br />
        It turns daily updated voting data into a 3D graph, highlighting the
        proximity, loyalty and participation of deputies and groups in a more
        intuitive way.
      </div>
    ),
    context: (
      <div>
        Buit as a data visualization tool, to emphasize how much (immersive) 3D
        graphics can help understand complex data and relationships, more
        intuitively and in a more engaging way.
      </div>
    ),
    links: (
      <>
        <a
          href='https://poligraph.polarzero.xyz'
          target='_blank'
          rel='noreferrer'>
          Website
        </a>{' '}
        |{' '}
        <a
          href='https://github.com/0xpolarzero/french-political-acquaintances-graph-3D'
          target='_blank'
          rel='noreferrer'>
          Github
        </a>
      </>
    ),
    tech: [
      tech.javascript,
      tech.react,
      tech.reactThreeFiber,
      tech.threejs,
      tech.antd,
      tech.zustand,
    ],
    image: {
      url: '/img/screenshots/poligraph.png',
      link: 'https://poligraph.polarzero.xyz',
      bgType: 'dark',
      x: 4112,
      y: 2398,
    },
    date: '2023-01',
  },
  {
    type: [types[1], types[3]],
    title: 'Immersive Audio',
    description: (
      <div>
        An example of <b>3D audio integration in a virtual world on the Web</b>,
        to showcase the major benefits of immersive audio in such environments.
      </div>
    ),
    context: (
      <div>
        Built using the{' '}
        <a href='https://atmoky.com/' target='_blank' rel='noreferrer'>
          Atmoky
        </a>{' '}
        Web audio engine.
      </div>
    ),
    links: (
      <>
        <a
          href='https://immersiveaudio.polarzero.xyz'
          target='_blank'
          rel='noreferrer'>
          Website
        </a>{' '}
        |{' '}
        <a
          href='https://blog.polarzero.xyz/immersive-audio-in-the-metaverse'
          target='_blank'
          rel='noreferrer'>
          Article
        </a>{' '}
        |{' '}
        <a
          href='https://github.com/0xpolarzero/metaverse'
          target='_blank'
          rel='noreferrer'>
          Github
        </a>
      </>
    ),
    tech: [
      tech.javascript,
      tech.react,
      tech.atmoky,
      tech.reactThreeFiber,
      tech.threejs,
      tech.zustand,
    ],
    image: {
      url: '/img/screenshots/immersiveaudio.png',
      link: 'https://immersiveaudio.polarzero.xyz',
      bgType: 'dark',
      x: 4112,
      y: 2412,
    },
    date: '2022-12',
  },
  {
    type: [types[0]],
    title: 'Promise',
    description: (
      <div>
        A blockchain-based platform that provides{' '}
        <b>transparency and accountability in digital relationships</b>,
        allowing users to keep track of the reliability of a person or a team.
        Essentially, it&apos;s a way to ensure that founders can be{' '}
        <b>held accountable for their promises</b>, by allowing them to make a
        genuine commitment <b>that cannot be altered</b>.
      </div>
    ),
    context: (
      <div>
        Built during the Chainlink Fall 2022 Hackathon. QuickNode 1st Prize &
        Chainlink Top 40 Quality Projects.
      </div>
    ),
    links: (
      <>
        <a href='https://usepromise.xyz' target='_blank' rel='noreferrer'>
          Website
        </a>{' '}
        |{' '}
        <a href='https://docs.usepromise.xyz' target='_blank' rel='noreferrer'>
          Documentation
        </a>{' '}
        |{' '}
        <a
          href='https://github.com/0xpolarzero/chainlink-fall-2022-hackathon'
          target='_blank'
          rel='noreferrer'>
          Github
        </a>
      </>
    ),
    tech: [
      tech.solidity,
      tech.javascript,
      tech.hardhat,
      tech.chainlink,
      tech.ipfs,
      tech.arweave,
      tech.bundlr,
      tech.theGraph,
      tech.apollographql,
      tech.nodejs,
      tech.wagmi,
      tech.ethers,
      tech.nextjs,
      tech.antd,
    ],
    image: {
      url: '/img/screenshots/promise.png',
      link: 'https://usepromise.xyz',
      bgType: 'dark',
      x: 4112,
      y: 2400,
    },
    date: '2022-11',
  },
];

export default work;
