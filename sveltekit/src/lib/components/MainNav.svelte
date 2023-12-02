<script>
  import { page } from "$app/stores";
  import { getImageURL } from "$lib/utils";
  import { onMount } from "svelte";

  export let navId;
  export let summaryId;

  onMount(() => {
    document.addEventListener("click", function (evt) {
      let navBar = document.getElementById(navId) ?? undefined;
      if (!navBar) return;
      let summary = document.getElementById(summaryId);

      let targetEl = evt.target; // clicked element

      if (summary.contains(targetEl)) {
        return;
      }

      navBar.removeAttribute("open");
    });
  });
</script>

<details id={navId}>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <summary
    tabindex="0"
    id={summaryId}
    class="btn btn-ghost btn-circle avatar relative"
  >
    <div class="w-10 rounded-full">
      <img
        width="84px"
        height="84px"
        src={$page.data.user?.avatar
          ? getImageURL(
              $page.data.user?.collectionId,
              $page.data.user?.id,
              $page.data.user?.avatar,
              "40x40",
            )
          : `https://ui-avatars.com/api/?name=${
              $page.data.user.firstName + " " + $page.data.user.lastName
            }&size=84`}
        alt="Профилна снимка"
      />
    </div>
  </summary>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <ul
    tabindex="0"
    class="absolute bottom-[4.2rem] sm:bottom-[unset] border-b-0 rounded-b-none sm:top-16 sm:border-b
             sm:rounded-b-box sm:left-auto left-0 right-0 sm:right-2 mt-3 z-[1] max-h-[500px] overflow-y-auto
             px-4 py-4 sm:py-2 gap-1 sm:gap-0 sm:shadow border dark:border-gray-700 menu menu-sm dropdown-content
             bg-base-100 rounded-box min-w-max sm:w-56"
  >
    <li>
      <a href="/my/posts" class="justify-between"> Моите обяви </a>
    </li>
    <li>
      <a href="/my/applications" class="justify-between"> Заявки </a>
    </li>
    <li>
      <a href="/my/chats"> Чатове </a>
    </li>
    <li>
      <a href="/my/rate"> За оценяване </a>
    </li>
    <li>
      <a href="/my/cars" class="justify-between"> Моите автомобили </a>
    </li>
    <li>
      <a href="/my/profile" class="justify-between"> Профил </a>
    </li>
    <li><a href="/my/settings/account">Настройки</a></li>
    <li class="devider" />
    <li class="hover:bg-inherit mt-1">
      <form action="/logout" method="POST" class="block p-0">
        <button class="btn btn-sm btn-outline w-full" type="submit"
          >Изход</button
        >
      </form>
    </li>
  </ul>
</details>

<style>
  details > summary {
    list-style: none !important;
  }
  details > summary::-webkit-details-marker {
    display: none !important;
  }
</style>
