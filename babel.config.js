module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { shippedProposals: true, useBuiltIns: 'usage', corejs: '3' },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-styled-components',
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
    '@babel/plugin-proposal-class-properties',
  ],
};
