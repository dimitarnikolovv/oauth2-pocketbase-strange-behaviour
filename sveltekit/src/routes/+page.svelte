<script>
  export let data;
</script>

<section aria-labelledby="home-title">
  <h1 id="home-title" class="divider w-11/12 mx-auto mb-5">
    Последно публикувани обяви
  </h1>

  <pre>{JSON.stringify(data, null, 2)}</pre>
</section>
