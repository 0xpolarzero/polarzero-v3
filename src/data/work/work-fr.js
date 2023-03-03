import types from '../helpers/types';
import tech from '../helpers/tech';

const work = [
  {
    type: [types[0]],
    title: 'Cross-chain token-gated smart contract',
    description: (
      <div>
        <b>Restriction d&apos;accès</b> à un smart contract en fonction de la
        balance d&apos;un utilisateur pour un{' '}
        <b>token ERC20 sur de multiples blockchains</b>.
      </div>
    ),
    context: (
      <div>
        Ce projet utilise les{' '}
        <a href='https://chain.link/functions' target='_blank' rel='noreferrer'>
          Chainlink Functions
        </a>{' '}
        pour obtenir la balance totale d&apos;un utilisateur pour un token ERC20
        sur de multiples chaînes. La balance est ensuite reportée sur la
        blockchain d&apos;origine pour restreindre l&apos;accès à certaines
        fonctions du smart contract.
      </div>
    ),
    links: (
      <>
        <a
          href='https://cross-chain-erc-20-balance-verification.vercel.app/'
          target='_blank'
          rel='noreferrer'>
          Site
        </a>{' '}
        |{' '}
        <a href='' target='_blank' rel='noreferrer'>
          Other links
        </a>{' '}
        |{' '}
        <a
          href='https://github.com/0xpolarzero/cross-chain-ERC20-balance-verification'
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
      tech.wagmi,
      tech.ethers,
      tech.nextjs,
      tech.antd,
      tech.zustand,
    ],
    image: {
      url: '/img/screenshots/cross-chain-erc20-balance-verification.png',
      link: 'https://cross-chain-erc-20-balance-verification.vercel.app/',
      bgType: 'light',
      x: 4112,
      y: 2400,
    },
    date: '02/2023',
  },
  {
    type: [types[0], types[1], types[3]],
    title: 'Echoes',
    description: (
      <div>
        <b>Un collectible digital contemplatif et interactif</b>. <br />
        Chaque collectible est une combinaison d&apos;attributs audiovisuels,
        qui donne naissance à une entité faite de particules. L&apos;objectif du
        projet est de proposer une expérience audiovisuelle immersive et
        interactive.
        <br />
        Il s&apos;agit d&apos;une implémentation du standard ERC721, avec une
        modification du tokenURI pour permettre de{' '}
        <b>construire dynamiquement les métadonnées</b>, et ainsi faciliter des
        améliorations basées sur les interactions et le temps.
      </div>
    ),
    context: (
      <div>
        Développé à l&apos;occasion du projet final du cours{' '}
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
          Site
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
    date: '02/2023',
  },
  {
    type: [types[1], types[2]],
    title: 'Poligraph',
    description: (
      <div>
        Une représentation visuelle 3D du{' '}
        <b>paysage politique français à l&apos;Assemblée Nationale</b> basée sur
        les <b>interactions entre les députés et leurs affinités</b>.
        <br />
        Les données de vote sont quotidiennement transformées en un graphe 3D,
        mettant en évidence la proximité, la loyauté et la participation des
        députés et des groupes d&apos;une manière plus intuitive.
      </div>
    ),
    context: (
      <div>
        Pensé comme un outil de visualisation de données, pour mettre en
        évidence à quel point les graphiques 3D (immersifs) peuvent aider à
        comprendre des données et des relations complexes et sensibles, de
        manière plus intuitive et plus engageante.
      </div>
    ),
    links: (
      <>
        <a
          href='https://poligraph.polarzero.xyz'
          target='_blank'
          rel='noreferrer'>
          Site
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
    date: '01/2023',
  },
  {
    type: [types[1], types[3]],
    title: 'Immersive Audio',
    description: (
      <div>
        Un exemple <b>d&apos;intégration de son 3D dans un monde virtuel</b> sur
        le navigateur, pour mettre en évidence l&apos;intérêt considérable de
        l&apos;audio immersif dans de tels environnements.
      </div>
    ),
    context: (
      <div>
        Construit avec le moteur audio 3D d&apos;
        <a href='https://atmoky.com/' target='_blank' rel='noreferrer'>
          Atmoky
        </a>
        .
      </div>
    ),
    links: (
      <>
        <a
          href='https://immersiveaudio.polarzero.xyz'
          target='_blank'
          rel='noreferrer'>
          Site
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
    date: '12/2022',
  },
  {
    type: [types[0]],
    title: 'Promise',
    description: (
      <div>
        Une plateforme qui utilise la blockchain pour garantir{' '}
        <b>
          plus de transparence et de responsabilité dans les relations
          numériques
        </b>
        , permettant aux utilisateurs de suivre la fiabilité d&apos;une personne
        ou d&apos;une équipe. Il s&apos;agit d&apos;un moyen de s&apos;assurer
        que les fondateurs peuvent être{' '}
        <b>tenus responsables de leurs promesses</b>, en les incitant à
        s&apos;engager <b>d&apos;une manière qui ne peut pas être altérée</b>.
      </div>
    ),
    context: (
      <div>
        Développé pendant le Hackathon Chainlink Fall 2022. 1er prix QuickNode &
        Chainlink Top 40 Quality Projects.
      </div>
    ),
    links: (
      <>
        <a href='https://usepromise.xyz' target='_blank' rel='noreferrer'>
          Site
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
    date: '11/2022',
  },
];

export default work;
