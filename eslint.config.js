import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    // 全局配置部分
    rules: {
      // 找到对应规则，注释掉或者修改其值
      "vue/multi-word-component-names": ["error", {
        "ignores": ['index']
      }], // 将规则设为'off'禁用它,
       "no-undef": "off" 
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
