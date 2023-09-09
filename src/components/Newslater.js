export default function Newslater() {
  return (
    <section className="container py-32 md:py-48">
      <h3 className="max-w-full mb-10">Join our newsletter and get 20% off</h3>
      <div className="grid md:grid-cols-2 items-center gap-8">
        <p className="max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
        <div className="flex gap-y-2 max-lg:flex-wrap">
          <input type="email" placeholder="Enter Email" className="w-full border-[1px] p-2 indent-2 rounded-md lg:rounded-e-none lg:border-e-0" />
          <button className="btn-second lg:!rounded-s-none max-lg:w-full">Subscribe</button>
        </div>
      </div>
    </section>
  )
}
