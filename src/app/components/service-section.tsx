"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building,
  FileText,
  Users,
  Scale,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Corporate Law",
    description:
      "Comprehensive legal services for businesses of all sizes, from startups to multinational corporations.",
    icon: Building,
  },
  {
    title: "Litigation",
    description:
      "Strategic representation in complex disputes, with a focus on efficient and effective resolution.",
    icon: Scale,
  },
  {
    title: "Intellectual Property",
    description:
      "Protection and enforcement of patents, trademarks, copyrights, and trade secrets.",
    icon: Shield,
  },
  {
    title: "Employment Law",
    description:
      "Guidance on employment contracts, workplace policies, and dispute resolution.",
    icon: Users,
  },
  {
    title: "Contract Law",
    description:
      "Drafting, reviewing, and negotiating contracts to protect your interests and minimize risk.",
    icon: FileText,
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Strategic advice and representation in complex business transactions and restructurings.",
    icon: Briefcase,
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of legal services to meet the diverse needs of
            our clients, from individuals to large corporations.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
