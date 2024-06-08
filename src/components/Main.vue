<script setup lang="ts">
import { computed } from 'vue';
import { list } from '@/config/countries';
import Block from '@/components/common/Block.vue';

const props = defineProps<{
    id: number,
}>();

const item = computed(() => list.find((elem) => elem.id === props.id));
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="main__content">
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
.main {
    position: relative;
    padding: 144px 0 40px 0;

    &__content-about {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }
}
</style>