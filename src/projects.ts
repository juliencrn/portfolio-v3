import { Project } from './types';

const projects: Project[] = [
  {
    title: 'anonymous-message-board',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/anonymous-message-board',
    createdAt: '7/1/2020',
    tags: [
      'nodejs',
      'expressjs',
      'jest',
      'mongodb',
      'mongoose',
      'react',
      'typescript',
    ],
    excerpt: 'Last FreeCodeCamp backend exercise using Node Express MongoDB Typescript Jest & React',
    unFinished: true,
  },
  {
    title: 'chat',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/chat',
    createdAt: '10/7/2021',
    tags: [
      'nodejs',
      'nestjs',
      'docker',
      'lerna',
      'mongodb',
      'react-router',
      'reactjs',
      'redux',
      'socket-io',
      'tailwindcss',
      'typescript',
    ],
    excerpt: 'Simple chat application to learn backend dev using JavaScript.',
    unFinished: true,
  },
  {
    title: 'dotfiles',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/dotfiles',
    createdAt: '11/21/2020',
    tags: [
      'linux',
      'ubuntu',
      'shell-script',
      'i3wm',
      'oh-my-zsh',
      'vim',
      'vscode',
      'zsh',
    ],
    excerpt: 'Personal linux config',
  },
  {
    title: 'drum-machine',
    demoUrl: 'https://zz-drum-machine.netlify.com/',
    srcUrl: 'https://github.com/juliencrn/drum-machine',
    createdAt: '10/27/2019',
    tags: [
      'react',
      'javascript',
      'freecodecamp',
    ],
    excerpt: 'Front-end FreeCodeCamp project : Build a drum machine using React',
  },
  {
    title: 'eslint-config-test',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/eslint-config-test',
    createdAt: '11/20/2020',
    tags: [
      'npm',
      'eslint',
    ],
    excerpt: 'PoC of eslint config module',
  },
  {
    title: 'game-of-life',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/game-of-life',
    createdAt: '1/1/2022',
    tags: [
      'rust',
      'canvas',
      'js',
      'wasm',
      'webassembly',
    ],
    excerpt: 'A game-of-life implementation with Rust and WebAssembly.',
  },
  {
    title: 'gatsby-material-typescript-starter',
    demoUrl: 'https://gatsby-material-typescript-starter.netlify.app/',
    srcUrl: 'https://github.com/juliencrn/gatsby-material-typescript-starter',
    createdAt: '4/16/2020',
    tags: [
      'react',
      'typescript',
      'gatsby',
      'material-ui',
      'prettier',
    ],
    excerpt: 'A simple starter using Typescript & Material-ui',
  },
  {
    title: 'gatsby-starter-mdx-themeui',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/gatsby-starter-mdx-themeui',
    createdAt: '8/9/2019',
    tags: [
      'react',
      'gatsby',
      'graphql',
      'mdx',
      'theme-ui',
    ],
    excerpt: 'A simple Gatsby starter powered by MDX and Theme UI',
  },
  {
    title: 'hello_grep',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/hello_grep',
    createdAt: '6/24/2021',
    tags: [
      'rust',
      'command-line',
      'filesystem',
    ],
    excerpt: 'Simplified unix grep clone to how to make a CLI app in Rust.',
  },
  // {
  //   title: 'kitten-challenge',
  //   demoUrl: '',
  //   srcUrl: 'https://github.com/juliencrn/kitten-challenge',
  //   createdAt: '5/14/2021',
  //   tags: [
  //     'react',
  //     'firebase',
  //     'react-native',
  //     'typescript',
  //   ],
  //   excerpt: 'React-native + Firebase app | WIP Project... abandoned',
  // },
  {
    title: 'localhost',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/localhost',
    createdAt: '5/26/2019',
    tags: [
      'php',
      'lamp',
      'localhost',
      'mamp',
      'tachyons',
      'wamp',
    ],
    excerpt: 'Customize your localhost home page',
  },
  {
    title: 'markdown-previewer',
    demoUrl: 'https://zz-markdown-previewer.netlify.app/',
    srcUrl: 'https://github.com/juliencrn/markdown-previewer',
    createdAt: '10/27/2019',
    tags: [
      'react',
      'emotion',
      'freecodecamp',
      'javascript',
      'markdown',
      'rebass',
      'theme-ui',
    ],
    excerpt: 'FreeCodeCamp learning front-end project - Build a markdown previewer using React',
  },
  // {
  //   title: 'mini-redis',
  //   demoUrl: '',
  //   srcUrl: 'https://github.com/juliencrn/mini-redis',
  //   createdAt: '12/26/2021',
  //   tags: [
  //     'rust',
  //     'runtime',
  //     'tokio',
  //   ],
  //   excerpt: 'Little project to learn how to build apps on top on Tokio, a Rust runtime.',
  // },
  {
    title: 'netlify-status-page',
    demoUrl: 'https://netlify-status-page.netlify.app/',
    srcUrl: 'https://github.com/juliencrn/netlify-status-page',
    createdAt: '10/12/2020',
    tags: [
      'react',
      'typescript',
      'netlify',
      'github',
      'css',
    ],
    excerpt: 'Netlify status page',
  },
  {
    title: 'oser-ecrire',
    demoUrl: 'https://oser-ecrire.fr/',
    srcUrl: 'https://github.com/juliencrn/oser-ecrire',
    createdAt: '4/29/2020',
    tags: [
      'react',
      'blog',
      'gatsby',
      'jamstack',
      'lerna',
      'sanity-io',
      'typescript',
    ],
    excerpt: "The \"Oser Ecrire\"'s Blog",
  },
  {
    title: 'pomodoro-timer',
    demoUrl: 'https://fcc-pomodoro-timer.netlify.com',
    srcUrl: 'https://github.com/juliencrn/pomodoro-timer',
    createdAt: '11/8/2019',
    tags: [
      'react',
      'bem',
      'freecodecamp',
      'jest',
      'scss',
      'tdd',
    ],
    excerpt: 'FreeCodeCamp front-end project to learn test-driven development and BEM using react.js',
  },
  {
    title: 'portfolio (v3)',
    demoUrl: 'https://v2.juliencaron.com',
    srcUrl: 'https://github.com/juliencrn/portfolio',
    createdAt: '7/20/2019',
    tags: [
      'react',
      'nextjs',
      'tailwindcss',
      'usehooks-ts',
      'netlify',
      'typescript',
      'open-source',
    ],
    excerpt: 'The latest version of my portfolio where you are now',
    featured: true,
  },
  {
    title: 'portfolio (v2)',
    demoUrl: 'https://v2.juliencaron.com',
    srcUrl: 'https://github.com/juliencrn/portfolio',
    createdAt: '7/20/2019',
    tags: [
      'react',
      'gatsby',
      'emotionjs',
      'graphql',
      'netlify',
      'portfolio',
      'theme-ui',
      'typescript',
    ],
    excerpt: 'My portfolio using Gatsby.js as front-end and Prismic as CMS',
  },
  {
    title: 'Legacy headless portfolio (v1)',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/portfolio-admin',
    createdAt: '9/5/2019',
    tags: [
      'wordpress',
      'headless-cms',
      'php',
    ],
    excerpt: 'WordPress as headless CMS for my personal Portfolio',
  },
  {
    title: 'random-quote-machine',
    demoUrl: 'https://junscuzzy.github.io/random-quote-machine/',
    srcUrl: 'https://github.com/juliencrn/random-quote-machine',
    createdAt: '10/22/2019',
    tags: [
      'react',
      'javascript',
      'bem',
      'freecodecamp',
      'hook',
      'scss',
    ],
    excerpt: 'FreeCodeCamp Front End Libraries Projects - Build a Random Quote Machine',
    unFinished: true,
  },
  {
    title: 'React-calculator',
    demoUrl: 'https://junscuzzy.github.io/React-calculator/',
    srcUrl: 'https://github.com/juliencrn/React-calculator',
    createdAt: '10/21/2018',
    tags: [
      'react',
      'javascript',
    ],
    excerpt: 'Learning project',
    unFinished: true,
  },
  {
    title: 'react-calculator-v2',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/react-calculator-v2',
    createdAt: '1/3/2020',
    tags: [
      'react',
      'typescript',
      'freecodecamp',
      'material-ui',
    ],
    excerpt: 'FreeCodeCamp Frontend challenge - Calculator using react and typescript',
  },
  {
    title: 'react-gallery',
    demoUrl: 'https://react-gallery.juliencaron.com/',
    srcUrl: 'https://github.com/juliencrn/react-gallery',
    createdAt: '6/25/2020',
    tags: [
      'react',
      'redux',
      'typescript',
      'material-ui',
      'pexels-api',
      'tests',
      'ux',
    ],
    excerpt: 'Learning front-end project : Skeleton > Blur Thumbnail > Image lazy-loading.',
  },
  {
    title: 'React-morpion',
    demoUrl: 'https://junscuzzy.github.io/React-morpion/',
    srcUrl: 'https://github.com/juliencrn/React-morpion',
    createdAt: '4/22/2019',
    tags: [
      'react',
      'javascript',
    ],
    excerpt: 'Learning project: Tic Tac Toe game using React.',
    // just miss the demo
    unFinished: true,
  },
  {
    title: 'react-pendu',
    demoUrl: 'https://react-pendu.netlify.com/',
    srcUrl: 'https://github.com/juliencrn/react-pendu',
    createdAt: '1/17/2020',
    tags: [
      'react',
      'typescript',
      'material-ui',
      'game',
      'openclassrooms',
    ],
    excerpt: 'React hanged game (in french) using React.',
    unFinished: true,
  },
  {
    title: 'redux-todo',
    demoUrl: 'https://react-todolist-spring.netlify.app/',
    srcUrl: 'https://github.com/juliencrn/redux-todo',
    createdAt: '7/8/2019',
    tags: [
      'react',
      'react-hook',
      'redux',
      'tachyons',
    ],
    excerpt: 'To-do app to learn Redux',
  },
  {
    title: 'rusty-journal',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/rusty-journal',
    createdAt: '7/19/2021',
    tags: [
      'rust',
      'command-line',
      'diesel',
      'sqlite',
    ],
    excerpt: 'Learning project: A command line to-do app written in Rust.',
  },
  {
    title: 'spacedicks',
    demoUrl: 'http://spacedicks.xyz',
    srcUrl: 'https://github.com/juliencrn/spacedicks-contract',
    createdAt: '12/10/2021',
    tags: [
      'solidity',
      'blockchain',
      'express',
      'ipfs',
      'nft',
      'mocha',
      'svg',
      'typescript',
      'web3',
    ],
    excerpt: '10,000 unique NTFs with proof of ownership living on the Polygon blockchain and following the ERC-721 standard.',
    featured: true,
  },
  {
    title: 'sportigoo',
    demoUrl: 'https://sportigoo.fr/',
    srcUrl: '',
    createdAt: '10/30/2019',
    tags: [
      'wordpress',
      'gulp',
      'scss',
      'woocommerce',
    ],
    excerpt: 'Sportigoo.fr WordPress website',
  },
  {
    title: 'svelte-life-in-weeks',
    demoUrl: 'https://life-in-weeks.juliencaron.com/',
    srcUrl: 'https://github.com/juliencrn/svelte-life-in-weeks',
    createdAt: '7/25/2021',
    tags: [
      'svelte',
      'tailwindcss',
      'typescript',
    ],
    excerpt: 'Little front-end pet project to discover Svelte. Are you curious to see your whole life in weeks?',
  },
  {
    title: 'telegram-rsi-bot',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/telegram-rsi-bot',
    createdAt: '11/20/2021',
    tags: [
      'bot',
      'cryptocurrency',
      'finance',
      'rsi',
      'stocks',
      'telegram-bot',
      'yahoo-finance',
    ],
    excerpt: 'Send me the price and the Relative Strength Index (RSI) for some crypto assets, stocks and indexes',
  },
  {
    title: 'tetris',
    demoUrl: 'https://js-tetris.netlify.app/',
    srcUrl: 'https://github.com/juliencrn/tetris',
    createdAt: '4/4/2020',
    tags: [
      'react',
      'canvas',
      'canvas-game',
      'react-hooks',
      'react-redux',
      'redux-toolkit',
      'theme-ui',
      'typescript',
    ],
    excerpt: 'Build a Tetris Game using HTML5 Canvas & React + Redux ',
  },
  {
    title: 'the-algorithm-challenge',
    demoUrl: 'https://www.freecodecamp.org/learn/',
    srcUrl: 'https://github.com/juliencrn/the-algorithm-challenge',
    createdAt: '1/6/2021',
    tags: [
      'algorithms',
      'data-structures',
      'freecodecamp',
      'project-euler',
      'rosetta-code',
      'rust',
      'tdd',
      'typescript',
    ],
    excerpt: "Let's practice the algorithms and data-structures using TDD and written in Typescript and Rust (The exercises are from FreeCodeCamp)",
  },
  {
    title: 'ts-blockchain-api',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/ts-blockchain-api',
    createdAt: '4/12/2020',
    tags: [
      'nodejs',
      'express',
      'typescript',
      'api-rest',
      'axios',
      'blockchain',
      'eslint',
    ],
    excerpt: 'Learning project: Implement a very simple blockchain, served in a REST API and made with Typescript OOP & Express.js',
  },
  {
    title: 'url-shortener',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/url-shortener',
    createdAt: '11/27/2019',
    tags: [
      'nodejs',
      'freecodecamp',
      'javascript',
      'mongodb',
      'mongoose',
      'rest-api',
    ],
    excerpt: 'FreeCodeCamp Micro-services with NodeJS: Build an url shortener (like Bitly)',

  },
  {
    title: 'usehooks-ts',
    demoUrl: 'https://usehooks-ts.com/',
    srcUrl: 'https://github.com/juliencrn/usehooks-ts',
    createdAt: '4/16/2020',
    tags: [
      'react',
      'gatsby',
      'hooks',
      'material-ui',
      'mdx',
      'react-hooks',
      'reactjs',
      'typescript',
    ],
    excerpt: 'Open-source: React hook library, ready to use, written in Typescript with more than 20k downloads/week.',
    featured: true,
  },
  {
    title: 'voting-dapp',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/voting-dapp',
    createdAt: '8/6/2021',
    tags: [
      'solidity',
      'dapp',
      'react',
      'truffle',
      'web3',
    ],
    excerpt: 'A basic voting dapp (decentralized application) written in Solidity & React.',
  },
  {
    title: 'whiteboard',
    demoUrl: 'https://recoil-whiteboard.netlify.app/',
    srcUrl: 'https://github.com/juliencrn/whiteboard',
    createdAt: '2/19/2021',
    tags: [
      'react',
      'typescript',
      'recoil',
      'react-konva',
      'dracula',
    ],
    excerpt: 'Experimental learning project: Building a web whiteboard to draw mind-maps or mock-ups',
    unFinished: true,
  },
  {
    title: 'wordpress-to-ndjson',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/wordpress-to-ndjson',
    createdAt: '4/30/2020',
    tags: [
      'nodejs',
      'cli',
      'minimist',
      'ndjson',
      'sanity-io',
      'typescript',
      'wordpress',
    ],
    excerpt: 'CLI tool that fetch WordPress data to produce ndjson files for sanity.io importation',
  },
  {
    title: 'wp-search-n-replace',
    demoUrl: 'https://wordpress-db-search-and-replace.netlify.com/',
    srcUrl: 'https://github.com/juliencrn/wp-search-n-replace',
    createdAt: '12/3/2019',
    tags: [
      'react',
      'dracula',
      'formik',
      'material-ui',
      'search-and-replace',
      'sql',
      'wordpress',
    ],
    excerpt: 'SQL query generator to search & replace URLs during website transfert',
  },
  {
    title: 'weeship',
    demoUrl: 'https://www.weeship.fr/',
    srcUrl: '',
    createdAt: '3/1/2020',
    tags: [
      'react',
      'redux',
      'material-ui',
    ],
    excerpt: 'Freelance: Dashboard development using React, Redux for Weeship',
  },
  {
    title: 'find-the-missing-word',
    demoUrl: '',
    srcUrl: '',
    createdAt: '6/1/2019',
    tags: [
      'react',
      'redux',
      'material-ui',
    ],
    excerpt: 'Freelance: Data-visualization for a very small app',
  },
  {
    title: 'sire',
    demoUrl: 'https://eager-dubinsky-80471f.netlify.app/',
    srcUrl: '',
    createdAt: '1/1/2019',
    tags: [
      'react',
      'gatsby',
      'typescript',
      'rebass',
      'styled-components',
      'netlify-cms',
    ],
    excerpt: 'Freelance: JAM-stack website build on top of gatsby.js for the Unscuzzy agency.',
  },
  {
    title: 'grand-prix-rsm',
    demoUrl: 'https://grand-prix-rsm.fr/',
    srcUrl: '',
    createdAt: '6/1/2018',
    tags: [
      'wordpress',
      'php',
      'underscore',
      'acf',
      'jquery',
      'ajax',
      'scss',
    ],
    excerpt: 'website development using WordPress for the Unscuzzy agency.',
  },
  {
    title: 'astoria-finance',
    demoUrl: 'https://www.astoriafinance.com/',
    srcUrl: '',
    createdAt: '6/1/2018',
    tags: [
      'wordpress',
      'php',
      'underscore',
      'acf',
      'jquery',
      'ajax',
      'scss',
      'bem',
      'google-maps',
    ],
    excerpt: 'website development using WordPress for the Unscuzzy agency.',
  },
  {
    title: 'ctmp',
    demoUrl: 'https://ctmp.fr/',
    srcUrl: '',
    createdAt: '3/1/2017',
    tags: [
      'wordpress',
      'php',
      'underscore',
      'acf',
      'jquery',
      'ajax',
      'bootstrap',
    ],
    excerpt: 'website development using WordPress for the Unscuzzy agency.',
  },
  {
    title: 'les-puces-du-design',
    demoUrl: 'https://pucesdudesign.com/fr/',
    srcUrl: '',
    createdAt: '5/1/2017',
    tags: [
      'wordpress',
      'php',
      'underscore',
      'acf',
      'jquery',
      'scss',
    ],
    excerpt: 'website development using WordPress for the Unscuzzy agency.',
  },
  {
    title: 'gaypride.fr',
    demoUrl: 'https://www.gaypride.fr/',
    srcUrl: '',
    createdAt: '5/1/2017',
    tags: [
      'wordpress',
      'php',
      'underscore',
      'acf',
      'jquery',
      'scss',
    ],
    excerpt: 'website development using WordPress for the Unscuzzy agency.',
  },
  {
    title: 'trace.fm',
    demoUrl: 'http://ht.trace.fm/',
    srcUrl: '',
    createdAt: '6/1/2018',
    tags: [
      'wordpress',
      'php',
      'underscore',
      'acf',
      'jquery',
      'gulp',
    ],
    excerpt: 'Freelance: Website integration using WordPress (frontend from scratch)',
  },
  {
    title: 'trace-mobile',
    demoUrl: 'https://www.tracemobile.co.za/',
    srcUrl: '',
    createdAt: '5/1/2018',
    tags: [
      'wordpress',
      'php',
      'underscore',
      'acf',
      'jquery',
      'scss',
    ],
    excerpt: 'website development using WordPress for the Unscuzzy agency.',
  },
  {
    title: 'new-tab',
    demoUrl: '',
    srcUrl: 'https://github.com/juliencrn/new-tab',
    createdAt: '2/7/2022',
    tags: [
      'react',
      'chrome-extension',
      'typescript',
      'aura-theme',
    ],
    excerpt: 'A very small Chrome extension that reminds me my main goal each time I open a new tab in my browser.',
  },
  {
    title: 'lynxee-nft',
    demoUrl: 'https://lynxee.neodium.io/',
    srcUrl: '', // soon open-source https://github.com/juliencrn/lynxee
    createdAt: '1/1/2022',
    tags: [
      'rust',
      'wasm',
      'nft-collection',
      'elrond',
      'react',
      'nextjs',
      'typescript',
      'tailwindcss',
      'dapp',
    ],
    excerpt: 'A Rust-based smart-contract on the Erlond\'s network and a React dapp to mint NFTs, built with the Neodium team.',
  },
  {
    title: 'chefclub.tv',
    demoUrl: 'https://www.chefclub.tv/',
    srcUrl: '', // soon open-source https://github.com/juliencrn/lynxee
    createdAt: '9/1/2021',
    tags: [
      'react',
      'redux',
      'gatsby',
      'scss-modules',
    ],
    excerpt: 'Freelance: I\'ve contributed to build the frontend of Chefclub.tv for months using React and Typescript.',
    featured: true,
  },
  {
    title: 'crossy-road',
    demoUrl: 'https://crossy-road.netlify.app/',
    srcUrl: 'https://github.com/juliencrn/crossy-road',
    createdAt: '9/1/2021',
    tags: [
      'webgl',
      'treejs',
      'snowpack',
      'javascript',
      'esbuild',
      'game',
    ],
    excerpt: 'Personal learning project to play with WebGL building crossy road game.',
    unFinished: true,
  },
];

export default projects;
