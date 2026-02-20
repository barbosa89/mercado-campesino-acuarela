<template>
    <div>
        <HeroSection />

        <ExperienciesSection />

        <TourSection />
    </div>
</template>

<script setup lang="ts">
const tourTitle = 'Tour Virtual 360°'
const tourDescription = 'Explora el lugar desde donde estés'

useHead({
    title: tourTitle,
    meta: [
        { name: 'description', content: tourDescription },
        { property: 'og:title', content: tourTitle },
        { property: 'og:description', content: tourDescription },
    ],
})
</script>
