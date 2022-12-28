<template>
  <div class="modal-wrapper">
    <div class="tabs-wrapper">
      <b-tabs justified>
        <b-tab title="Общее" active><Card /></b-tab>
        <b-tab title="Мои покупки"><p>I'm the second tab</p></b-tab>
        <b-tab title="Бизнес аккаунт"
          ><p>I'm the tab with the very, very long title</p></b-tab
        >
      </b-tabs>
    </div>
    <a href="#" class="modal-close" @click.prevent="$emit('close', 'settings')"
      >X</a
    >
  </div>
</template>


<style>
</style>