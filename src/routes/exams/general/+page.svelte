<script lang='ts'>
    //@ts-ignore
    import { goto } from '$app/navigation'
    //@ts-ignore
    import { browser } from '$app/environment';

    import { onMount } from 'svelte';
    import { fade, slide } from 'svelte/transition';

    import { ethers } from 'ethers'
    import { accountProvider } from '$lib/eth/stores/provider'
    
    import { results } from '$lib/state/stores'
    import questions from './questions'


    var validSubmit
    var resultStorage

    let visible = true
    let ifNewInstance = false
    let lastInstance = false

    onMount(() => {
        //@ts-ignore
		resultStorage = JSON.parse(localStorage.getItem('results')) // Checks if user has completed the test already, via localStorage (results stored in localStorage)
    });
    
</script>