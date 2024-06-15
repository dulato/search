<script setup lang="ts">
import { list } from '@/config/countries';

defineProps<{
    id: number,
}>();

const emit = defineEmits(['close', 'select']);

const closeModal = () => {
    emit('close');
};

const changeId = (val: number) => {
    emit('select', val);
};
</script>

<template>
    <div class="modal" @click="closeModal">
        <div class="modal__content">
            <ul class="modal__list" @click.stop>
                <li 
                    v-for="item in list" 
                    :key="item.id"
                    class="modal__item"
                    @click="changeId(item.id)"
                >
                    <div 
                        class="modal__item-circle"
                        :class="{
                            'modal__item-circle--active': item.id === id
                        }"
                    ></div>
                    <div class="modal__item-icon">
                        <img :src="item.flag" alt="icon">
                    </div>
                    <p class="modal__item-name">
                        {{ item.name }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: rgba($black, 0.25);
    z-index: 111;

    &__content {
        position: relative;
        max-width: 768px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }

    &__list {
        position: absolute;
        top: 60px;
        right: 0;
        display: block;
        width: 160px;
        border-radius: 10px;
        background: $white;
        overflow: hidden;
    }

    &__item {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 8px 12px;
        background: $white;
        border-bottom: 1px solid $gray;
        user-select: none;
        cursor: pointer;

        &:last-of-type {
            border: none;
        }
    }

    &__item-circle {
        position: relative;
        display: block;
        width: 16px;
        height: 16px;
        margin: 0 8px 0 0;
        border-radius: 50%;
        border: 1px solid $green;

        &::after {
            display: none;
        }

        &--active {
            &::after {
                position: absolute;
                content: "";
                display: block;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: $green;
            }
        }
    }

    &__item-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        margin: 0 8px 0 0;
        text-align: center;
        overflow: hidden;

        img {
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__item-name {
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        text-align: left;
        color: $black;
    }
}
</style>