<script>
    export let state;
    export let data;
    export let form;

    $: loading = state === "loading";
    $: error = state === "error" && data;
    $: user = state === "success" && data;
</script>

{#if form.ok}
    <p>Deleted :)</p>
{/if}

<svelte:template name="users-loader" let:users let:error let:loading> 
    {#if loading}
        <p>Loading...</p>
    {:else if error}
        <p>Error</p>
    {:else}
        <h1>Users</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {#each users as user}
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <form action="?/delete" method="POST">
                                <button type="submit">
                                    Delete    
                                </button>
                            </form>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}
</svelte:template>