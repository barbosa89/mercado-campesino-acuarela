<script setup lang="ts">
const viewerHeight = '60vh';
</script>

<template>
    <section id="tour360" class="py-24 bg-yellow-50/10 dark:bg-zinc-900/40">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-12">
                <p class="text-sm font-medium uppercase tracking-widest text-orange-900 mb-3 dark:text-zinc-100">
                    Recorrido virtual
                </p>
                <h2
                    class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 text-balance">
                    Explora en 360
                </h2>
                <p class="mt-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed text-pretty">
                    Sumérgete en una experiencia inmersiva y recorre el Mercado como si estuvieras ahí. Arrastra para explorar.
                </p>
            </div>

            <ClientOnly>
                <VirtualTour360 :height="viewerHeight" :show-controls="true" :enable-gyroscope="true" />

                <template #fallback>
                    <div
                        class="flex items-center justify-center rounded-2xl bg-amber-100 border border-amber-300 dark:bg-zinc-900/40 dark:border-zinc-700"
                        style="height: 500px">
                        <div class="flex flex-col items-center gap-3">
                            <div
                                class="h-10 w-10 animate-spin rounded-full border-4 border-orange-900 dark:border-zinc-100 border-t-transparent" />
                            <p class="text-orange-700 dark:text-zinc-100 text-sm">
                                Cargando tour 360...
                            </p>
                        </div>
                    </div>
                </template>
            </ClientOnly>

            <div class="mt-6 flex flex-wrap items-center justify-center gap-6 text-orange-700 dark:text-zinc-100">
                <div class="flex items-center gap-2 text-sm">
                    <Icon name="lucide:move" class="h-4 w-4" />
                    <span>Arrastra para girar</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                    <Icon name="lucide:scan" class="h-4 w-4" />
                    <span>Haz clic en pantalla completa para mayor inmersión</span>
                </div>
            </div>
        </div>
    </section>
</template>