module.exports = {
    plugins: ['prettier'],
    parserOptions: {
        parser: '@typescript-eslint/parser' // 解析 .ts 文件
    },
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'prettier',
        'prettier/vue',
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'prettier/prettier': ['warn'],
    },
}
