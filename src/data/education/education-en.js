import types from '../helpers/types';
import tech from '../helpers/tech';

const education = [
  {
    type: [types[0]],
    title: 'Alchemy University Ethereum Bootcamp',
    description: (
      <div>
        Seven-week course on Ethereum and smart contracts development, based on
        learning-by-doing and coding challenges: cryptography fundamentals, data
        structures, UTXO / Accound-based models, smart contracts, Solidity,
        Hardhat, libraries, multi-sigs, ERC20, proxies & upgradability,
        governance...
        <br />
        The repository contains everything related to my progress through the
        course (challenges, notes, etc.), and a link to the final project
        (Echoes).
      </div>
    ),
    context: <div>Alchemy University, ChainShot, Ethereum Bootcamp</div>,
    links: (
      <>
        <a
          href='https://github.com/0xpolarzero/AU-ethereum-bootcamp'
          target='_blank'
          rel='noreferrer'>
          Github
        </a>{' '}
        |{' '}
        <a
          href='https://university.alchemy.com/overview/ethereum'
          target='_blank'
          rel='noreferrer'>
          Course
        </a>{' '}
        |{' '}
        <a
          href='https://github.com/0xpolarzero/echoes'
          target='_blank'
          rel='noreferrer'>
          Final project (Github)
        </a>
      </>
    ),
    tech: [
      tech.solidity,
      tech.javascript,
      tech.hardhat,
      tech.chainlink,
      tech.wagmi,
      tech.ethers,
      tech.nextjs,
      tech.antd,
      tech.zustand,
    ],
    date: '2023-02',
  },
  {
    type: [types[1]],
    title: 'Three.js Journey',
    description: (
      <div>
        Extensive introduction to Web-based 3D with WebGL, using Three.js and
        React Three Fiber: physics, modeling, interactions, shaders,
        post-processing, optimization, R3F and Drei...
        <br />
        The repository contains everything related to my progress through the
        course (projects associated with each lesson, notes, etc.).
      </div>
    ),
    context: <div>Bruno Simon</div>,
    links: (
      <>
        <a
          href='https://github.com/0xpolarzero/three-js-journey'
          target='_blank'
          rel='noreferrer'>
          Github
        </a>{' '}
        |{' '}
        <a href='https://threejs-journey.xyz/' target='_blank' rel='noreferrer'>
          Course
        </a>
      </>
    ),
    tech: [
      tech.javascript,
      tech.threejs,
      tech.reactThreeFiber,
      tech.react,
      tech.vite,
      tech.zustand,
    ],
    date: '2022-12',
  },
  {
    type: [types[0]],
    title:
      'Full Blockchain, Solidity & Full-Stack Web3 development with JavaScript',
    description: (
      <div>
        Full introduction into all the core concepts related to blockchain:
        smart contracts, Solidity, ERC20s, full-stack Web3 dapps, decentralized
        finance (DeFi), JavaScript, TypeScript, Chainlink, Ethereum, upgradable
        smart contracts, DAOs, The Graph, Moralis, Aave, IPFS... <br />
        The repository contains everything related to my progress through the
        course (projects, notes, etc.).
      </div>
    ),
    context: <div>freeCodeCamp, Patrick Collins</div>,
    links: (
      <>
        <a
          href='https://github.com/0xpolarzero/full-blockchain-solidity-course-js'
          target='_blank'
          rel='noreferrer'>
          Github
        </a>{' '}
        |{' '}
        <a
          href='https://github.com/smartcontractkit/full-blockchain-solidity-course-js'
          target='_blank'
          rel='noreferrer'>
          Course
        </a>
      </>
    ),
    tech: [
      tech.solidity,
      tech.javascript,
      tech.hardhat,
      tech.ethers,
      tech.wagmi,
      tech.theGraph,
      tech.chainlink,
      tech.alchemy,
      tech.ipfs,
      tech.apollographql,
      tech.react,
      tech.nextjs,
      tech.nodejs,
      tech.antd,
    ],
    date: '2022-10',
  },
];

export default education;
