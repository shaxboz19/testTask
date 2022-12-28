<template>
  <div class="wrapper" :class="{ active: isSidebarVisible }">
    <div class="wrapper-sidebar">
      <Sidebar />
    </div>
    <div class="wrapper-inner">
      <Header @open-sidebar="openSidebar" />
      <div class="container">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSidebarVisible: false,
    };
  },
  methods: {
    openSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    closeSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
};
</script>
<style>
.wrapper.active .wrapper-sidebar {
  transform: translateX(0);
}
.wrapper.active .wrapper-sidebar .sidebar-mask {
  transform: translateX(0);
}
</style>