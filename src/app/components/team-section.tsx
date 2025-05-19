"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Sarah Johnson",
    role: "Managing Partner",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah specializes in corporate law with over 15 years of experience representing Fortune 500 companies.",
  },
  {
    name: "Michael Chen",
    role: "Senior Partner",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael is an expert in intellectual property law and has successfully litigated numerous high-profile patent cases.",
  },
  {
    name: "Jessica Rodriguez",
    role: "Partner",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Jessica focuses on employment law and has extensive experience in workplace discrimination and harassment cases.",
  },
  {
    name: "David Wilson",
    role: "Partner",
    image: "/placeholder.svg?height=400&width=400",
    bio: "David specializes in mergers and acquisitions, having facilitated deals worth over $2 billion throughout his career.",
  },
  {
    name: "Emily Taylor",
    role: "Associate",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emily practices in the areas of real estate law and has helped clients navigate complex property transactions.",
  },
  {
    name: "James Washington",
    role: "Associate",
    image: "/placeholder.svg?height=400&width=400",
    bio: "James specializes in litigation and has represented clients in state and federal courts across the country.",
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  console.log('width', width)

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= team.length - (itemsPerView() - 1) ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? team.length - itemsPerView() : prev - 1
    );
  };

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600">
            Meet our team of experienced attorneys dedicated to providing
            exceptional legal services.
          </p>
        </div>

        <div className="relative">
          <motion.div ref={carouselRef} className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView())}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className={`flex-none w-full sm:w-1/2 lg:w-1/3 p-4`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full">
                    <div className="relative h-64 w-full">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
