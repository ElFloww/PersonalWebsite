<script setup lang="ts">
// SectionDivider component
</script>

<template>
    <div class="section-divider" aria-hidden="true">
        <div class="line left-line"></div>
        <div class="icon-wrapper">
            <div class="diamond"></div>
        </div>
        <div class="line right-line"></div>
    </div>
</template>

<style scoped>
.section-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.8;
}

.line {
    flex-grow: 1;
    height: 2px;
    border-radius: 4px;
}

.left-line {
    background: linear-gradient(to right, transparent, rgba(129, 199, 132, 0.6));
}

.right-line {
    background: linear-gradient(to left, transparent, rgba(129, 199, 132, 0.6));
}

.icon-wrapper {
    padding: 0 1.5rem;
}

.diamond {
    width: 12px;
    height: 12px;
    background-color: #81c784;
    transform: rotate(45deg);
    box-shadow: 0 0 10px rgba(129, 199, 132, 0.8);
    transition: transform 0.3s ease;
}
</style>
