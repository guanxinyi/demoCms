<!--
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2021-02-20 17:08:26
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-22 09:22:37
 * @FilePath: /ams_pc/src/components/GlobalFooter/index.vue
-->
<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <!-- <a href="https://www.github.com/vueComponent/pro-layout" target="_blank">Pro Layout</a>
      <a href="https://www.github.com/vueComponent/ant-design-vue-pro" target="_blank">Github</a>
      <a href="https://www.github.com/sendya/" target="_blank">@Sendya</a> -->
      <a href="#" target="_blank">@这里是底部内容</a>
    </template>
    <template v-slot:copyright>
      <!-- <a href="#" target="_blank">vueComponent</a> -->
      <!-- <a href="https://github.com/vueComponent" target="_blank">vueComponent</a> -->
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from "@ant-design-vue/pro-layout";

export default {
  name: "ProGlobalFooter",
  components: {
    GlobalFooter,
  },
};
</script>
