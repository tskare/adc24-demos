const config = {
  stories: ['../out-tsc/stories/**/*.stories.{js,md,mdx}'],

  framework: {
    name: '@web/storybook-framework-web-components',
  },

  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds'
  ]
};

export default config;