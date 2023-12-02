<script>
  import { Logo, MainNav } from "$lib/components";

  export let user = undefined;
</script>

<div
  id="bottomNav"
  class="btm-nav sm:hidden dark:bg-base-300 rounded-t-box border-t dark:border-t-0 pt-2"
>
  <div class="navbar mx-auto flex-wrap content-between justify-center px-4">
    <a href="/" class="btn btn-ghost btn-circle normal-case text-lg sm:text-xl"
      ><Logo />
    </a>
    {#if !user}
      <div class="flex gap-2">
        <a
          href="/login"
          class="btn btn-primary text-white outline-1 btn-sm md:btn-md">Вход</a
        >
      </div>
    {:else}
      <MainNav navId={"bottomNavMainNav"} summaryId={"headerMainSummary"}
      ></MainNav>
    {/if}
  </div>
</div>

<style>
  #bottomNav:has(details[open]) {
    border-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
