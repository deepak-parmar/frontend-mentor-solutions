<script>
  export let finalRating, totalRating;
</script>

<section class="wrapper" style="align-items: center">
  <img
    src="images/illustration-thank-you.svg"
    width="162"
    height="108"
    alt=""
  />
  <div class="rating">You selected {finalRating} out of {totalRating}</div>
  <h1>Thank you!</h1>
  <p>
    We appreciate you taking the time to give a rating.<br />
    If you ever need more support, don't hesitate to<br />
    get in touch!
  </p>
</section>

<style>
  p {
    text-align: center;
    margin-top: -2rem;
  }

  .rating {
    line-height: 0;
    background-color: var(--darkBlue);
    padding: 0.9rem 1rem;
    border-radius: 1rem;
    color: var(--orange);
  }
</style>
