<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Modal from '@/components/Modal.vue';

const isOpened = ref(false);
const id = ref(1);

const toggleModal = () => {
  isOpened.value = !isOpened.value;
};

const selectCountry = (val: number) => {
  isOpened.value = false;
  id.value = val;
};
</script>

<template>
  <div id="mobile-app" class="mobile-app">
    <Header 
      :id="id"
      @choose="toggleModal"
    />

    <Main :id="id"/>

    <Modal 
      v-if="isOpened"
      :id="id"
      @close="toggleModal"
      @select="selectCountry"
    />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.mobile-app {
  position: relative;
  min-height: 100vh;
  max-width: 100%;
  width: 100%;
  background: $white;
}
</style>
