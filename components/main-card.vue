<template>
  <div id="modal-1" class="user-card">
    <div>
      <span @click="$emit('close', 'profile')">x</span>
      <div class="card-header">
        <div class="card-header-user">
          <div class="card-header-user-avatar">
            <img v-if="userData.photo" :src="userData.photo" alt="user" />
            <span v-else> </span>
          </div>
          <div class="card-header-user-info">
            <h4>{{ getFullName || "Steve Jobs" }}</h4>
            <p>{{ (userData && userData.email) || "jobs@gmail.com" }}</p>
          </div>
        </div>
      </div>
      <div class="card-inner">
        <a class="card-inner-profile-btn card-inner-btn" @click.prevent="open">
          <img src="../assets/images/profile.svg" alt="" />Настройки профиля
        </a>
        <a class="card-inner-copy-btn card-inner-btn">
          <img src="../assets/images/copy.svg" alt="" />Сменить компанию
        </a>
        <a class="card-inner-exit-btn card-inner-btn">
          <img src="../assets/images/exit.svg" alt="" />Выйти из аккаунта
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["userData"]),
    ...mapGetters("user", ["getFullName"]),
  },
  methods: {
    open() {
      this.$emit("close", "profile");
      this.$emit("open", "settings");
    },
  },
};
</script>