import client1 from "../assets/images/client-1.png";
import client2 from "../assets/images/client-2.png";
import client3 from "../assets/images/client-3.png";
import client4 from "../assets/images/client-4.png";
import client5 from "../assets/images/client-5.png";
import SectionHeader from "../Components/SectionHeader";
import Card from "../Components/Card";
import { Fragment } from "react";


const testimonials = [
  {
    name: "Rohan Mehta",
    position: "Founder @ NextGen Startups",
    text: "Neeraj crafted a visually stunning and highly responsive landing page for our startup that truly wowed our investors. The performance, design, and attention to detail were spot on. We’ve seen a significant boost in user engagement since the redesign. Absolutely recommended!",
    avatar: client1,
  },
  {
    name: "Jake Wilson",
    position: "CTO @ NovaLaunch (UK)",
    text: "Neeraj’s design skills are world-class. He transformed our landing page into a sleek, high-performing experience across all devices. His responsiveness and technical finesse made the entire process smooth. Truly a top-tier frontend developer.",
    avatar: client2,
  },
  {
    name: "Priya Sharma",
    position: "Marketing Lead @ EduVerse",
    text: "Working with Neeraj was seamless. He delivered a modern, intuitive landing page that not only looked impressive but also converted visitors efficiently. His deep understanding of UX and frontend tech is rare. Will definitely collaborate again!",
    avatar: client3,
  },
  {
    name: "Ankit Desai",
    position: "Product Head @ Finlytics",
    text: "Neeraj delivered a crisp and conversion-focused landing page for our product launch. His grasp on design systems and frontend technologies helped us stand out in a crowded fintech space. Quick, reliable, and deeply skilled!",
    avatar: client4,
  },
  {
    name: "Ritika Malhotra",
    position: "Marketing Lead @ UpScale Digital",
    text: "Working with Neeraj was a fantastic experience. He built a sleek and highly responsive landing page for our campaign that not only looked stunning but also improved user engagement noticeably. His attention to detail and design sensibility truly impressed our entire team.",
    avatar: client5,
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What my Clients Say About Me"
          description=" Don't Just take my word for it. See what my clients have to say about my
        work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] hover:cursor-pointer">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
