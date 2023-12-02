<script>
  import { Logo, MainNav } from "$lib/components";

  export let user = undefined;
</script>

<header class="sticky top-0 z-10 shadow-md hidden sm:block">
  <div
    class="navbar mx-auto flex-wrap justify-between max-[362px]:justify-center bg-base-100"
  >
    <div class="">
      <a href="/" class="btn btn-ghost normal-case text-lg pl-2.5 sm:text-xl"
        ><Logo /> Share Travel</a
      >
    </div>

    <div class="gap-2 mr-0 sm:mr-2">
      {#if !user}
        <a
          href="/login"
          class="btn btn-primary text-white outline-1 btn-sm md:btn-md">Вход</a
        >
      {:else}
        <MainNav navId={"headerMainNav"} summaryId={"headerMainSummary"} />
      {/if}
    </div>
  </div>
</header>
