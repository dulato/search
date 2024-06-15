<script setup lang="ts"></script>

<template>
    <div class="city">
        <h3 class="city__name">
            <slot name="title"></slot>
        </h3>
        <p class="city__text">
            <slot name="text"></slot>
        </p>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.city {
    display: block;
    background: $light;
    box-shadow: 0px 10px 20px rgba($black, 0.3);
    border-radius: 10px;
    padding: 8px 12px;

    &__name {
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        color: $black;
        margin: 0 0 8px 0;
    }

    &__text {
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        text-align: left;
        color: $gray;
    }
}
</style>