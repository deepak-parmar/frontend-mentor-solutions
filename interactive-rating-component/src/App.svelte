<script>
	import RatingComponent from "./components/RatingComponent.svelte";
	import ThankYouComponent from "./components/ThankYouComponent.svelte";

	let totalRating = 5;
	$: finalRating = null;
</script>

<main>
	{#if finalRating != null}
		<ThankYouComponent {totalRating} {finalRating} />
	{:else}
		<RatingComponent
			{totalRating}
			on:submit={(event) => {
				finalRating = event.detail;
			}}
		/>
	{/if}
</main>
