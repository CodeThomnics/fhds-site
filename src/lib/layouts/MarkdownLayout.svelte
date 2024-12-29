<script>
    let { children } = $props();
  </script>
  
  <div id="privacy" class="prose prose-lg max-w-none mx-16 mt-8">
    {@render children()}
  </div>
  
  <style lang="postcss" scoped>
    #privacy :global(h1) {
      @apply text-3xl font-bold mb-4;
    }
    
    #privacy :global(h2) {
      @apply text-2xl font-semibold mt-8 mb-4;
    }
    
    #privacy :global(p) {
      @apply my-4;
    }
  
    #privacy :global(ul) {
      @apply list-disc list-inside my-4;
    }
  
    #privacy :global(a) {
      @apply text-blue-600 hover:text-blue-800 underline;
    }
  
    #privacy :global(code) {
      @apply bg-gray-100 px-1 rounded;
    }
  
    #privacy :global(pre) {
      @apply bg-gray-100 p-4 rounded my-4 overflow-x-auto;
    }
  </style>