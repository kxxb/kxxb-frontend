<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

import AdminLayout from "@/layouts/AdminLayout";
import LoginLayout from "@/layouts/LoginLayout";
import SiteLayout from "@/layouts/SiteLayout";

export default {
  name: 'App',
  computed:{
    layout()
    {
      console.log('aaa'+ this.$route.meta);

      return (this.$route.meta.layout || 'site') + '-layout';
    }
  },

  components: {
    AdminLayout, LoginLayout, SiteLayout
  }
}
</script>

<style>

   @import "assets/css/heroic-features.css";
   @import "assets/css/sb-admin-2.min.css";


</style>
