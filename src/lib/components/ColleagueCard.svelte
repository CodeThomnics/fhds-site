<script>
    let { firstname, roles, url } = $props();
</script>
<div class="w-64 my-6 flex flex-col rounded-lg border border-slate-200 bg-white shadow-xs intersect-once intersect:motion-safe:motion-preset-slide-up">
    <div class="m-2.5 flex h-80 items-center justify-center overflow-hidden rounded-md">
        <img
            class="h-full w-full object-cover"
            src={url}
            alt={firstname}
        />
    </div>
    <div class="p-6 text-center">
        <h1 class="mb-1 text-2xl font-semibold text-schakel-black">
            {firstname}
        </h1>
        {#each roles as role}
            <p class="text-md font-semibold text-slate-600">{role}</p>
        {/each}
    </div>
</div>