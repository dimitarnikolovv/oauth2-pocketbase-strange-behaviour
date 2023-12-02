<script>
  import "../app.postcss";
  import { Header } from "$lib/components";

  export let data;
</script>

<Header user={data.user} />

<main class="sm:my-5 mb-20">
  <slot />
</main>
