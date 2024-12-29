<script>
    import { onMount, onDestroy } from 'svelte';

    let { items = [], duration = 8000, autoplay = true } = $props();

    let currentIndex = $state(0);
    let container;
    let timer;
    let isHovered = $state(false);

    function next() {
        currentIndex = (currentIndex + 1) % items.length;
    }

    function previous() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    }

    function goToSilde(index) {
        currentIndex = index;
    }

    function startAutoplay() {
        if (autoplay && !isHovered) {
            timer = setInterval(next, duration);
        }
    }

    function stopAutoplay() {
        if (timer) clearInterval(timer);
    }

    onMount(() => {
        startAutoplay();
    });

    onDestroy(() => {
        stopAutoplay();
    });
</script>

<div
    class="carousel relative h-[180px] w-full overflow-hidden md:h-[300px]"
    onmouseenter={() => {
        isHovered = true;
        stopAutoplay();
    }}
    onmouseleave={() => {
        isHovered = false;
        startAutoplay();
    }}
    role="region"
    aria-label="Gemeente carousel"
>
    <div
        class="flex h-full transition-transform duration-500"
        style="transform:translateX(-{currentIndex * 100}%)"
        bind:this={container}
    >
        {#each items as item, i}
            <div class="flex min-w-full items-center justify-center">
                <enhanced:img
                    src={item.src}
                    alt={item.aria}
                    class="h-[160px] w-full max-w-[500px] object-contain md:h-[300px]"
                    loading="lazy"
                />
            </div>
        {/each}
    </div>

    {#if currentIndex > 0}
    <button
    class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-all hover:bg-white hover:shadow-lg"
    onclick={previous}
    aria-label="Vorige slide"
>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
</button>
    {/if}

    {#if currentIndex < items.length - 1}
    <button
        class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-all hover:bg-white hover:shadow-lg"
        onclick={next}
        aria-label="Volgende slide"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </button>
    {/if}
</div>

<style>
    .carousel {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
    }
</style>