module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  {{#if_eq eslintConfig 'standard'}}
  extends: [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  {{/if_eq}}
  {{#if_eq eslintConfig 'airbnb'}}
  extends: 'airbnb-base',
  {{/if_eq}}
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  {{#if_eq eslintConfig 'standard'}}
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  {{/if_eq}}
  {{#if_eq eslintConfig 'airbnb'}}
  parserOptions: {
    ecmaVersion: 2018
  },
  {{/if_eq}}
  plugins: [
      "html", "vue"
  ],
  rules: {
    {{#if_eq eslintConfig 'standard'}}
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    {{/if_eq}}
    {{#if_eq eslintConfig 'airbnb'}}
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/newline-after-import': 0,
    'no-multi-assign': 0,
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
