import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [

  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
    rules: {
      "no-undef": "error" // 启用未定义变量检查
    },
    "vue/no-setup-props-destructure": ['off'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    "vue/multi-word-component-names": ["error", {
      "ignores": ['index']
    }]
  },
  

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
]
