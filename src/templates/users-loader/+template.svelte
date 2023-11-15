<script>
    export let state;
    export let data;

    $: loading = state === "loading";
    $: error = state === "error" && data;
    $: user = state === "success" && data;
</script>

<slot {loading} {error} {user} />