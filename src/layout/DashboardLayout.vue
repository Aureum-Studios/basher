<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/bash-prompt" :name="$t('sidebar.bashPrompt')" icon="tim-icons icon-tv-2"/>
        <sidebar-link to="/aliases" :name="$t('sidebar.aliases')" icon="tim-icons icon-vector"/>
        <sidebar-link to="/custom-functions" :name="$t('sidebar.functions')" icon="tim-icons icon-puzzle-10"/>
        <sidebar-link to="/more-config" :name="$t('sidebar.misc')" icon="tim-icons icon-settings"/>
        <sidebar-link to="/profile" :name="$t('sidebar.userProfile')" icon="tim-icons icon-single-02"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
  import TopNavbar from "./TopNavbar.vue";
  import ContentFooter from "./ContentFooter.vue";
  import DashboardContent from "./Content.vue";
  import MobileMenu from "./MobileMenu";

  export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
