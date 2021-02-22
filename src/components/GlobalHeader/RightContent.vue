<!--
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2021-02-20 17:08:26
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-21 22:39:24
 * @FilePath: /ams_pc/src/components/GlobalHeader/RightContent.vue
-->
<template>
  <div :class="wrpCls">
    <avatar-dropdown
      :menu="showMenu"
      :current-user="currentUser"
      :class="prefixCls"
    />
    <!-- <select-lang :class="prefixCls" /> -->
  </div>
</template>

<script>
import AvatarDropdown from "./AvatarDropdown";
// import SelectLang from "@/components/SelectLang";

export default {
  name: "RightContent",
  components: {
    AvatarDropdown,
    // SelectLang,
  },
  props: {
    prefixCls: {
      type: String,
      default: "ant-pro-global-header-index-action",
    },
    isMobile: {
      type: Boolean,
      default: () => false,
    },
    topMenu: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showMenu: true,
      currentUser: {},
    };
  },
  computed: {
    wrpCls() {
      return {
        "ant-pro-global-header-index-right": true,
        [`ant-pro-global-header-index-${
          this.isMobile || !this.topMenu ? "light" : this.theme
        }`]: true,
      };
    },
  },
  mounted() {
    setTimeout(() => {
      this.currentUser = {
        name: "Guan",
      };
    }, 1500);
  },
};
</script>
