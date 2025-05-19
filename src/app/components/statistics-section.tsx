"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { value: 25, label: "Years of Experience", suffix: "+" },
  { value: 1500, label: "Cases Won", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
];

export default function StatisticsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <CountUp
                end={stat.value}
                isInView={inView}
                suffix={stat.suffix}
                className="text-5xl md:text-6xl font-bold"
              />
              <p className="text-lg mt-2 opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CountUpProps {
  end: number;
  isInView: boolean;
  suffix?: string;
  className?: string;
}

function CountUp({ end, isInView, suffix = "", className }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {count}
      {suffix}
    </motion.div>
  );
}
