<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let totalRating;
  let currentRating = null;
  let totalRadios = Array();

  for (let i = 1; i <= totalRating; i++) totalRadios.push(i);
</script>


<section class="wrapper">
  <div>
    <img src="images/icon-star.svg" width="17" height="16" alt="" />
  </div>

  <div>
    <h1>How did we do?</h1>
    <p>
      Please let us know how we did with your support<br />
      request. All feedback is appreciated to help us<br />
      improve our offering!
    </p>
  </div>

  <form
    on:submit|preventDefault={() => {
      if (currentRating != null) dispatch("submit", currentRating);
    }}
  >
    <div class="radio-group">
      {#each totalRadios as index}
        <div class="radio">
          <input
            class="hidden"
            type="radio"
            name="rating"
            id={index.toString()}
            value={index}
            on:change={() => {
              currentRating = index;
            }}
          />
          <label for={index.toString()}>{index}</label>
        </div>
      {/each}
    </div>

    <button type="submit">SUBMIT</button>
  </form>
</section>


<style>
  h1 {
    margin: 2.7rem 0 1.7rem 0;
  }

  img {
    width: 17px;
    height: 16px;
    background-color: var(--darkBlue);
    padding: 0.85rem;
    border-radius: 50%;
  }

  .radio-group {
    display: flex;
    justify-content: space-between;
    margin: 1.8rem 0;
  }

  .hidden {
    display: none;
  }

  .radio label {
    line-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--mediumGrey);
    font-weight: 700;
    background-color: var(--darkBlue);
    height: 0rem;
    width: 0rem;
    border-radius: 50%;
    padding: 1.5rem;
  }

  .radio input[type="radio"]:hover + label {
    color: white;
    background-color: var(--lightGrey);
  }

  .radio input[type="radio"]:checked + label {
    color: white;
    background-color: var(--orange);
  }

  button[type="submit"] {
    width: 100%;
    padding: 1.4rem;
    color: white;
    letter-spacing: 2px;
    border: none;
    font-size: 0.9rem;
    border-radius: 5rem;
    background-color: var(--orange);
    line-height: 0;
  }

  button[type="submit"]:hover {
    color: var(--orange);
    background-color: white;
  }
</style>
