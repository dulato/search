<script setup lang="ts">
import { computed } from 'vue';
import { list } from '@/config/countries';
import Block from '@/components/common/Block.vue';
import City from '@/components/common/City.vue';
import { CityTheme, ItemTheme } from '@/types/City';

const props = defineProps<{
    id: number,
    city: CityTheme[],
    absence: boolean
}>();

const item = computed(() => list.find((elem: ItemTheme) => elem.id === props.id));
const notEmpty = computed(() => props.city.length > 0);
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="main__content">
                <div v-if="notEmpty" class="main__content-cities">
                    <City 
                        v-for="item in city" 
                        :key="item?.place_id"
                    >
                        <template #title>
                            {{ item?.name }}
                        </template>

                        <template #text>
                            {{ item?.lat }}, {{ item?.lon }}
                        </template>
                    </City>
                </div>

                <h3 v-if="absence" class="main__content-notfound">
                    No cities found
                </h3>

                <div class="main__content-about">
                    <Block>
                        <template #title>
                            {{ item?.title }}
                        </template>

                        <template #info>
                            {{ item?.info }}
                        </template>

                        <template #image>
                            <img :src="item?.photo" alt="photo">
                        </template>

                        <template #text>
                            {{ item?.text }}
                        </template>
                    </Block>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.main {
    position: relative;
    padding: 154px 0 40px 0;

    &__content-cities {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        gap: 16px;
        margin: 0 0 30px 0;
    }

    &__content-notfound {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        text-align: center;
        color: $black;
        margin: 0 0 30px 0;
    }

    &__content-about {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }
}
</style>