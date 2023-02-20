import types from '../helpers/types';
import tech from '../helpers/tech';

const education = [
  {
    type: [types[0]],
    title: 'Alchemy University Ethereum Bootcamp',
    description: (
      <div>
        Cours de sept semaines sur la blockchain Ethereum et le développement de
        smart contracts, basé sur l&apos;apprentissage par la pratique et des
        défis: fondamentaux de cryptographie, structures de données, modèles
        UTXO / Accound-based, smart contracts, Solidity, Hardhat, librairies,
        multi-sigs, ERC20, proxies & upgradability, gouvernance...
        <br />
        Le répertoire Github contient tout ce qui est lié à mon avancée dans le
        cours (défis, notes, etc.), et un lien vers le projet final (Echoes).
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
          Cours
        </a>{' '}
        |{' '}
        <a
          href='https://github.com/0xpolarzero/echoes'
          target='_blank'
          rel='noreferrer'>
          Projet final (Github)
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
    date: '02/2023',
  },
  {
    type: [types[1]],
    title: 'Three.js Journey',
    description: (
      <div>
        Cours complet sur la 3D avec WebGL, en utilisant Three.js et React Three
        Fiber: physique, modélisation, interactions, shaders, post-processing,
        optimisation, R3F et Drei...
        <br />
        Le répertoire Github contient tout ce qui est lié à mon avancée dans le
        cours (projets associés à chaque leçon, notes, etc.).
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
          Cours
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
    date: '12/2022',
  },
  {
    type: [types[0]],
    title:
      'Full Blockchain, Solidity & Full-Stack Web3 development with JavaScript',
    description: (
      <div>
        Introduction exhaustive à tous les concepts clés liés à la blockchain:
        smart contracts, Solidity, ERC20s, dapps Web3 full-stack, finance
        décentralisée (DeFi), JavaScript, TypeScript, Chainlink, Ethereum, smart
        contracts upgradables, DAOs, The Graph, Moralis, Aave, IPFS... <br />
        Le répertoire Github contient tout ce qui est lié à mon avancée dans le
        cours (projets, notes, etc.).
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
          Cours
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
    date: '10/2022',
  },
];

export default education;
