<template>
  <div class="card user-input">
    <form @submit.prevent="submit">
      <div class="card-header">
        <div class="card-header-user card-header-user-input">
          <div class="card-header-user-avatar">
            <img :src="form.photo" alt="user" v-if="form.photo" />
            <span v-else>
              <img src="~/assets/images/Add-Line.svg" alt=""
            /></span>
            <input
              type="file"
              @change="uploadPhoto"
              accept="image/png, image/jpeg, image/jpg"
              class="input-file"
            />
          </div>

          <div class="card-header-user-info-input">
            <div class="form-action">
              <label for="firstname">Имя</label>
              <input
                id="firstname"
                value="Steave"
                placeholder="Введите имя"
                v-model.trim="form.firstName"
              />
            </div>
            <div class="form-action">
              <label for="lastname">Фамилия</label>
              <input
                id="lastname"
                value="Jobs"
                placeholder="Введите фамилию"
                v-model.trim="form.lastName"
              />
            </div>
            <div class="form-action">
              <label for="mail">E-mail</label>
              <input
                id="mail"
                placeholder="Введите email"
                v-model.trim="form.email"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="form-action">
          <label for="description">Ваша биография</label>
          <input
            id="description"
            placeholder="Введите текст"
            v-model.trim="form.description"
          />
        </div>
        <div class="form-action">
          <label for="age">Дата рождения</label>
          <input
            id="age"
            type="date"
            placeholder="Введите дату рождения"
            v-model.trim="form.birthday"
          />
        </div>
        <div class="form-action">
          <label for="lang">Страна</label>
          <select id="lang" value="en" v-model.trim="form.language">
            <option :value="item" v-for="(item, index) of country" :key="index">
              {{ item }}
            </option>
          </select>
        </div>
        <div class="form-action">
          <label for="lang">Язык</label>
          <select id="lang" value="en" v-model.trim="form.country">
            <option
              :value="item"
              v-for="(item, index) of languages"
              :key="index"
            >
              {{ item.title }}
            </option>
          </select>
        </div>
        <div class="form-action">
          <label for="number">Номер телефона</label>
          <input
            id="number"
            value="Jobs"
            placeholder="Введите номер телефона"
            v-model.trim="form.phoneNumber"
          />
        </div>
      </div>
      <div class="card-buttons">
        <a href="#">Сменить пароль</a>
        <button class="buttons-red buttons-blue" type="submit">
          <span>Сохранить</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
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
        photo: null,
      },
      country: [],
      languages: [
        {
          title: "Русский",
          code: "RU",
        },
        {
          title: "Polski",
          code: "PL",
        },
        {
          title: "English",
          code: "EN",
        },
      ],
    };
  },
  computed: {
    ...mapState("user", ["userData"]),
  },
  async created() {
    try {
      const { data } = await this.$api("/country?type=json");
      this.form = this.country = data;
      this.form = { ...this.userData };
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    ...mapMutations("user", ["SAVE_USER_DATA"]),
    submit() {
      this.SAVE_USER_DATA(this.form);
      this.$emit("close", "formModal");
    },
    uploadPhoto(event) {
      if (!event.target.files[0]) {
        return;
      }
      const url = URL.createObjectURL(event.target.files[0]);
      this.form.photo = url;
    },
  },
};
</script>

<style>
.input-file {
  opacity: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 99;
}
</style>