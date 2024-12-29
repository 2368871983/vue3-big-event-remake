import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    
    rules: {
      "no-undef": "off" ,
      "vue/multi-word-component-names": ["error", {
        "ignores": ['index']
      }]
    }
  },
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  
  

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
]
