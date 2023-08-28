export default function Features() {
  return (
    <section class="py-20 my-24 bg-clr">
      <div class="container">
          <h2>featured products</h2>
          <div class="articles my-16 flex justify-between gap-8">
            <figure>
              <img alt="img" src="../assets/imgs/logo.svg" width="340" height="210" />
              <figcaption class="flex justify-between items-center gap-5 py-5">
                <h5>A good room</h5>
                <span class="text-clrOrangeDark">$599.99</span>
              </figcaption>
            </figure>
            <figure>
              <img alt="img" src="../assets/imgs/logo.svg" width="340" height="210" />
              <figcaption class="flex justify-between items-center gap-5 py-5">
                <h5>A good room</h5>
                <span class="text-clrOrangeDark">$599.99</span>
              </figcaption>
            </figure>
            <figure>
              <img alt="img" src="../assets/imgs/logo.svg" width="340" height="210" />
              <figcaption class="flex justify-between items-center gap-5 py-5">
                <h5>A good room</h5>
                <span class="text-clrOrangeDark">$599.99</span>
              </figcaption>
            </figure>
          </div>
          <button class="btn-primary mx-auto block">all products</button>
      </div>
    </section>

  )
}
