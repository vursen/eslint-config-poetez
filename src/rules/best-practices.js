module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    // handled by "no-var" rule
    'block-scoped-var': 'off',
    'class-methods-use-this': 'error',
    complexity: 'error',
    'consistent-return': 'error',
    curly: ['error', 'all'],
    // use "no default" comment to describe that there shouldn't be any default
    'default-case': ['error', {commentPattern: '^no\\sdefault'}],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', {allowPattern: '^[a-zA-Z]+([_-][a-zA-Z]+)+$'}],
    // using non-strict comparison with null could be useful
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    // handled by "eqeqeq" rule
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    // handled by "no-label" rule
    'no-extra-label': 'off',
    // use "no break" comment to describe that there shouldn't be break
    'no-fallthrough': ['error', {commentPattern: '^no\\sbreak'}],
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['error', {allow: ['!!']}],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    // too strict to use
    'no-magic-numbers': 'off',
    'no-multi-spaces': ['error', {exceptions: {Property: false}}],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {props: false}],
    'no-proto': 'error',
    // handled by "no-var" and "no-shadow" rules
    'no-redeclare': 'off',
    // no specific properties to restrict
    'no-restricted-properties': 'off',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', {props: true}],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    // handled by "no-labels" rule
    'no-unused-labels': 'off',
    'no-useless-call': 'error',
    // handled by "prefer-template" rule
    'no-useless-concat': 'off',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    // it is necessary to do warning comments sometimes
    'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    radix: 'error',
    // forbids returning promises which is not useful
    'require-await': 'off',
    // handled by "no-vars" rule
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'inside'],
    yoda: ['error', 'never'],
  },
};
