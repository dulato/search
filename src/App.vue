<script setup lang="ts">
import { ref, computed } from 'vue';
import { list } from '@/config/countries';
import { CityTheme, ItemTheme } from '@/types/City';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Modal from '@/components/Modal.vue';

const isOpened = ref(false);
const id = ref(1);
const cities = ref([] as CityTheme[]);
const notFound = ref(false);

const item = computed(() => list.find((elem: ItemTheme) => elem.id === id.value));

const toggleModal = () => {
  isOpened.value = !isOpened.value;
};

const selectCountry = (val: number) => {
  isOpened.value = false;
  id.value = val;
};

const clearSearch = () => {
  cities.value = [];
  notFound.value = false;
}

const searchRes = async (val: string) => {
  if(item.value) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(val)}+${encodeURIComponent(item.value.name)}&format=json&addressdetails=1&limit=10`, {
          headers: {
            'Accept-Language': 'en'
          }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        if (data.length > 0) {
            cities.value = [...data];
            notFound.value = false;
        } else {
            cities.value = [];
            notFound.value = true;
        } 
        console.log(data);
    } catch (error) {
        cities.value = [];
        notFound.value = true;
        console.error(error);
    }
  }
}
</script>

<template>
  <div id="mobile-app" class="mobile-app">
    <Header 
      :id="id"
      @choose="toggleModal"
      @search="searchRes"
      @clear="clearSearch"
    />

    <Main 
      :id="id" 
      :city="cities"
      :absence="notFound"
    />

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
