"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
  {
    city: "New York",
    address: "123 Broadway, New York, NY 10001",
    phone: "+1 (212) 555-1234",
    email: "newyork@legalfirm.com",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    city: "Los Angeles",
    address: "456 Wilshire Blvd, Los Angeles, CA 90036",
    phone: "+1 (310) 555-5678",
    email: "losangeles@legalfirm.com",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    city: "Chicago",
    address: "789 Michigan Ave, Chicago, IL 60611",
    phone: "+1 (312) 555-9012",
    email: "chicago@legalfirm.com",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    city: "Washington DC",
    address: "101 Pennsylvania Ave, Washington, DC 20001",
    phone: "+1 (202) 555-3456",
    email: "dc@legalfirm.com",
    image: "/placeholder.svg?height=300&width=500",
    },
  
];

export default function OfficesSection() {
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
    <section id="offices" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Offices
          </h2>
          <p className="text-lg text-gray-600">
            With offices in major cities across the country, were ready to
            assist you wherever you are.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {offices.map((office, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-48 w-full relative bg-gray-100">
                  <div
                    className="w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${office.image})` }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <CardDescription className="text-base">
                      {office.address}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <CardDescription className="text-base">
                      {office.phone}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <CardDescription className="text-base">
                      {office.email}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}