import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Walter White",
      designation: "Product Manager at TechFlow",
      src: "https://th.bing.com/th/id/R.c37ec7b017b3ee60ca54cf3ed6d5bfd2?rik=4wFwAVhd9Se5fg&riu=http%3a%2f%2fbaltimorepostexaminer.com%2fwp-content%2fuploads%2fWalter-White_FB.jpg&ehk=8%2fCI5P6ZyQ1Zj0J1%2bGgH4zUu5H2oQztI6ixTMJ0mppg%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Jesse Pinkman",
      designation: "CTO at InnovateSphere",
      src: "https://th.bing.com/th/id/R.672c0210aa42dc16050c3a175e304e82?rik=j%2fJJ9VYJML%2b6YQ&riu=http%3a%2f%2fimages.amcnetworks.com%2famc.com%2fwp-content%2fuploads%2f2015%2f04%2fcast_bb_800x600_jesse-pinkman.jpg&ehk=0taCKlDvXloPAYyHGWYuFcGjZMwV6U1%2bpGzGRyP%2ftlQ%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Thomas Shelby",
      designation: "Operations Director at CloudScale",
      src: "https://i.pinimg.com/originals/04/3c/73/043c7317336bc807d9d2bf4137819475.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Tyler Durden",
      designation: "Engineering Lead at DataPro",
      src: "https://imgix.bustle.com/rehost/2016/9/13/1fc6cd08-6bab-421b-908b-3253c18bd893.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Louis Bloom",
      designation: "VP of Technology at FutureNet",
      src: "https://th.bing.com/th/id/OIP.pgw1a5F4iPxD2LcL8hFRJAAAAA?rs=1&pid=ImgDetMain",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
