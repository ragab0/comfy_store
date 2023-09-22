import Image from "next/image";
import about from "@/assets/imgs/hero/hero-bcg2.jpeg";


export default function AboutUs() {
  return (
    <section className="container grid md:grid-cols-2 gap-8 mb-20">
      <Image alt="img" src={about} className="w-full h-full rounded-md"  />
      <div>
        <h2 className="ml-0 after:translate-x-0 after:left-0">Our Story</h2>
        <p className="text-lg mb-16">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
        </p>
      </div>
    </section>
  )
}
