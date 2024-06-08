<script setup lang="ts"></script>

<template>
    <div class="block">
        <h2 class="block__title">
            <slot name="title"></slot>
        </h2>
        <p class="block__info">
            <slot name="info"></slot>
        </p>
        <div class="block__image">
            <slot name="image"></slot>
        </div>
        <p class="block__text">
            <slot name="text"></slot>
        </p>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.block {
    position: relative;

    &__title {
        margin: 0 0 16px 0;
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        text-align: left;
        color: $black;
    }

    &__info {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: $black;
        margin: 0 0 12px 0;
    }

    &__image {
        margin: 0 0 16px 0;
        border-radius: 8px;
        text-align: center;
        overflow: hidden;

        img {
            max-width: 100%;
            width: 100%;
        }
    }

    &__text {
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        color: $black;
    }
}
</style>