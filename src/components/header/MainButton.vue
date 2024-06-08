<script setup lang="ts">
const emit = defineEmits(['choose']);

const selectCountry = () => {
    emit('choose');
};
</script>

<template>
    <button 
        type="button"
        id="main-button"
        class="main-button"
        @click="selectCountry"
    >
        <div class="main-button__icon">
            <slot name="icon"></slot>
        </div>
        <p class="main-button__text">
            <slot name="text"></slot>
        </p>
    </button>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.main-button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 12px;
    width: 120px;
    background: rgba($white, 0.25);
    border-radius: 2px;
    border: none;
    user-select: none;
    cursor: pointer;

    &__icon {
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

    &__text {
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        text-align: left;
        color: $white;
    }
}
</style>