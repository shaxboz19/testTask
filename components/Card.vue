<template>
  <div class="main-wrapper">
    <div class="card user-detail" v-if="!formModal">
      <div class="card-header">
        <div class="card-header-user">
          <div class="card-header-user-avatar">
            <img :src="form.photo" v-if="form.photo" alt="user" />
            <span v-else></span>
          </div>
          <div class="card-header-user-info">
            <a-row :gutter="[16, 16]" type="flex">
              <a-col span="24">
                <div class="card-body-item">
                  <span class="card-body-item-label">Имя</span>
                  <span class="card-body-item-value">{{ form.firstName }}</span>
                </div>
              </a-col>
              <a-col span="24">
                <div class="card-body-item">
                  <span class="card-body-item-label">Фамилия</span>
                  <span class="card-body-item-value">{{ form.lastName }}</span>
                </div>
              </a-col>
              <a-col span="24">
                <div class="card-body-item">
                  <span class="card-body-item-label">E-mail</span>
                  <span class="card-body-item-value">{{ form.email }}</span>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-head">
          <a-row :gutter="[16, 16]" type="flex">
            <a-col span="24">
              <div class="card-body-item">
                <span class="card-body-item-label">Ваша биография</span>
                <span class="card-body-item-value">{{ form.description }}</span>
              </div>
            </a-col>
            <a-col span="24">
              <div class="card-body-item">
                <span class="card-body-item-label">Дата рождения</span>
                <span class="card-body-item-value">{{ form.birthday }}</span>
              </div>
            </a-col>
            <a-col span="24">
              <div class="card-body-item">
                <span class="card-body-item-label">Язык</span>
                <span class="card-body-item-value">{{ form.language }}</span>
              </div>
            </a-col>
            <a-col span="24">
              <div class="card-body-item">
                <span class="card-body-item-label">Номер телефона</span>
                <span class="card-body-item-value">{{ form.phoneNumber }}</span>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="card-buttons">
        <a>Сменить пароль</a>
        <button class="buttons-blue" @click="open('formModal')">
          <span>Редактировать</span>
        </button>
      </div>
    </div>
    <CardInput v-if="formModal" @open="open" @close="close" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        birthday: null,
        description: "",
        email: "",
        country: "",
        phoneNumber: "",
        language: "",
      },
      formModal: false,
    };
  },
  computed: {
    ...mapState("user", ["userData"]),
  },
  mounted() {
    this.form = { ...this.userData };
  },

  methods: {
    open(name) {
      this[name] = true;
    },
    close(name) {
      this.form = { ...this.userData };
      this[name] = false;
    },
  },
};
</script>

<style>
</style>