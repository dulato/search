<script setup lang="ts">
import { ref, computed } from 'vue';
import { list } from '@/config/countries';
import { ItemTheme } from '@/types/City';
import MainButton from '@/components/header/MainButton.vue';

const props = defineProps<{
    id: number,
}>();

const emit = defineEmits(['choose', 'search', 'clear']);

const searchValue = ref('');

const item = computed(() => list.find((elem: ItemTheme) => elem.id === props.id));

const selectCountry = () => {
    emit('choose');
};

const searchCity = async () => {
    if(searchValue.value.length > 0) {
        emit('search', searchValue.value);
    } else {
        emit('clear');
    }
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
                <form class="header__search" @submit.prevent="searchCity">
                    <input 
                        type="text" 
                        id="search"
                        v-model.trim="searchValue"
                        class="header__search-input"
                        placeholder="Type a place name"
                        autocomplete="off"
                    >
                    <button 
                        type="submit"
                        class="header__search-btn"
                    >
                        <img src="@/assets/icons/search.png" alt="icon">
                    </button>
                </form>
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
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    z-index: 99;

    &__content {
        padding: 20px 0;
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

    &__search {
        display: flex;
        align-items: center;
        // position: relative;
    }

    &__search-input {
        display: block;
        width: 100%;
        height: 44px;
        padding: 12px;
        background: $light;
        border-radius: 5px 0 0 5px;
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

    &__search-btn {
        display: block;
        border: none;
        width: 100%;
        height: 100%;
        max-width: 44px;
        max-height: 44px;
        background: $light;
        border-radius: 0 5px 5px 0;
        text-align: center;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>