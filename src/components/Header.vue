<script setup lang="ts">
import { ref, computed } from 'vue';
import { list } from '@/config/countries';
import MainButton from '@/components/header/MainButton.vue';

const props = defineProps<{
    id: number,
}>();

const emit = defineEmits(['choose']);

const searchValue = ref('');

const item = computed(() => list.find((elem) => elem.id === props.id));

const selectCountry = () => {
    emit('choose');
};
</script>

<template>
    <div id="header" class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__top">
                    <h3 class="header__top-title">
                        Where to?
                    </h3>

                    <MainButton @choose="selectCountry">
                        <template #icon>
                            <img :src="item?.flag" alt="flag">
                        </template>

                        <template #text>
                            {{ item?.name }}
                        </template>
                    </MainButton>
                </div>
                <div class="header__search">
                    <input 
                        type="text" 
                        id="search"
                        v-model="searchValue"
                        class="header__search-input"
                        placeholder="Type a place name"
                        autocomplete="off"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: $green;
    z-index: 99;

    &__content {
        padding: 15px 0;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 8px 0;
    }

    &__top-title {
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        color: $white;
    }

    &__search-input {
        display: block;
        width: 100%;
        padding: 12px;
        background: $light;
        border-radius: 5px;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: $black;

        &::placeholder {
            color: $gray;
        }
    }
}
</style>