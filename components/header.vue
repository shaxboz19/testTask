<template>
  <div class="header" :class="{ active: isInputOpen }">
    <a href="#" class="menu-btn" @click="openMobileMenu">
      <span class="text-dark" />
    </a>
    <div class="container">
      <div class="header-wrapper">
        <nav class="header-nav">
          <a href="#" class="header-cost">Цены</a>
          <div class="header-question">
            <img src="../assets/images/Mask group.svg" alt="" />
          </div>
          <div class="header-user" v-b-modal.modal-1 @click="open('profile')">
            <div class="header-user-name">
              {{ getFullName || "Steve Jobs" }}
            </div>
            <div class="header-user-ava">{{ getFirstLetters || "SJ" }}</div>
          </div>
        </nav>
      </div>
    </div>
    <MainCard v-if="profile" @open="open" @close="close" />
    <Settings v-if="settings" @close="close" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      profile: false,
      settings: false,
      isInputOpen: false,
    };
  },
  computed: {
    ...mapState("user", ["userData"]),
    ...mapGetters("user", ["getFullName"]),
    getFirstLetters() {
      if (
        !(this.userData && this.userData.firstName && this.userData.lastName)
      ) {
        return;
      }
      return this.userData.firstName[0] + this.userData.lastName[0];
    },
  },
  methods: {
    open(name) {
      this[name] = true;
    },
    close(name) {
      console.log(name);
      this[name] = false;
    },
    openMobileMenu() {
      this.$emit("open-sidebar");
    },
  },
};
</script>
<style>
</style>