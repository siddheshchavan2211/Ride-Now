import { Button } from "@/components/ui/button";
import Image from "next/image";
import { featuredCars, bodyTypes } from "../lib/data";

import { BookOpen, ChevronRight, Share2, Shield, Users } from "lucide-react";
import Link from "next/link";
import CarCard from "@/components/Car-card";
import { Input } from "@/components/ui/input";
import SearchCar from "@/components/SearchCar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-center bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Book a Test Drive with Ease
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Experience your dream car before you buy it. Hassle-free
                bookings, flexible slots, and a smooth ride.
              </p>
              <div className="relative  gap-2  justify-center ">
                <SearchCar />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features car */}
      <div className="container mx-auto py-12 px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Cars</h2>
          <Link
            href="/cars"
            className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Us?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need for a smooth, reliable, and exciting test
                drive experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Quick Booking</h3>
              <p className="text-center text-muted-foreground">
                Schedule your test drive in just a few clicks. Choose your time,
                location, and car model effortlessly.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Multiple Locations</h3>
              <p className="text-center text-muted-foreground">
                Choose from a wide network of test drive locations near you.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Safe & Sanitized</h3>
              <p className="text-center text-muted-foreground">
                All vehicles are thoroughly sanitized to ensure a safe
                experience.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Expert Guidance</h3>
              <p className="text-center text-muted-foreground">
                Get help from professional advisors during your test drive to
                understand all the car features.
              </p>
            </div>
            <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="m9 15 3 3 3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Instant Confirmation</h3>
              <p className="text-center text-muted-foreground">
                Get instant confirmation and reminders directly on your phone or
                email.
              </p>
            </div>
            <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="m9 15 3 3 3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Instant Confirmation</h3>
              <p className="text-center text-muted-foreground">
                Get instant confirmation and reminders directly on your phone or
                email.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* car type Section */}
      <div className="container mx-auto py-12 px-8 ">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Pick Your Ride Style
          </h2>
          <Link
            href="/cars"
            className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
          {bodyTypes.map((type) => (
            <Link href={`/cars?bodyType=${type.name}`} key={type.name}>
              <div className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-md transition w-full">
                <div className="w-20 h-30 relative mb-2">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-medium">{type.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hear from Our Happy Drivers
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how we’re making car buying easier and more enjoyable.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
            {[
              {
                quote:
                  "Test driving my dream car was so easy with this platform. Booked in seconds and the process was seamless!",
                author: "Ravi P.",
                role: "First-time Car Buyer",
              },
              {
                quote:
                  "I tried out three different models in a week. Great flexibility and amazing support from the staff!",
                author: "Neha S.",
                role: "Auto Enthusiast",
              },
              {
                quote:
                  "The entire process from booking to driving was top-notch. Highly recommended!",
                author: "Amit R.",
                role: "Working Professional",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-lg border p-6 shadow-sm"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    {testimonial.quote}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Book Your Test Drive Today
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied drivers and experience your next car
                before buying.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" className="gap-1">
                <Link href="/signup">Sign Up Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
