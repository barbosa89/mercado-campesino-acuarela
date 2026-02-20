<template>
    <section id="inicio" class="relative min-h-screen flex items-end">
        <div class="absolute inset-0">
            <NuxtImg
                src="/images/main.png"
                alt="Vista aérea del Mercado Campesino de Acuarela con techos de teja y montañas al fondo"
                class="w-full h-full object-cover" loading="eager" />
            <div
                class="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/60 to-zinc-950/10" />
        </div>

        <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
            <div class="max-w-3xl">
                <p class="mb-4 text-sm font-medium uppercase tracking-widest text-white/70">
                    Mesa de los Santos, Santander
                </p>
                <h1
                    class="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
                    Mercado Campesino de Acuarela
                </h1>
                <p
                    class="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl text-pretty">
                    Conocí este rincón mágico donde la tradición santandereana se encuentra con la
                    experiencia turística. Sabores auténticos, paisajes impresionantes y
                    la calidez de nuestra gente, y por eso te lo quiero mostrar.
                </p>

                <div class="mt-8 flex flex-wrap gap-3">
                    <div
                        class="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                        <Icon name="lucide:map-pin" class="h-4 w-4 text-white/70" />
                        <span class="text-sm text-white/90">
                            Mesa de los Santos
                        </span>
                    </div>
                    <div
                        class="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                        <Icon name="lucide:thermometer" class="h-4 w-4 text-white/70" />
                        <span class="text-sm text-white/90">
                            12 - 24 °C
                        </span>
                    </div>
                    <div
                        class="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                        <Icon name="lucide:mountain" class="h-4 w-4 text-white/70" />
                        <span class="text-sm text-white/90">
                            Cañón de Chicamocha
                        </span>
                    </div>
                </div>

                <div class="mt-10 flex flex-wrap gap-4">
                    <a
                        href="#tour360"
                        class="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-zinc-900 transition-colors hover:bg-white/90">
                        Explorar Tour 360
                    </a>
                    <a
                        href="#experiencias"
                        class="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10">
                        Descubrir más
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
