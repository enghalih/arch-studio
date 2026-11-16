"use client";

import { useState } from "react";
import Image from "next/image";
import { IconArrow } from "@/components/icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    });

    if (formData.name && formData.email && formData.message) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="flex flex-col w-full relative pb-32 md:pb-40">
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 lg:px-32 max-w-[1440px] mx-auto w-full pt-4 md:pt-0">
        <div className="flex flex-col lg:flex-row items-start relative">
          {/* Hero Image */}
          <div className="w-full lg:w-[540px] h-[240px] md:h-[350px] lg:h-[720px] relative shrink-0">
            <Image
              src="/contact/desktop/image-hero.webp"
              alt="Vintage telephone representing contact"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content Card overlapping/adjacent */}
          <div className="w-full lg:w-[635px] lg:-ml-28 lg:mt-48 bg-neutral-0 py-12 lg:pl-16 relative z-10 flex flex-col gap-6">
            {/* Large Watermark 'Contact' text behind/above on desktop */}
            <div className="hidden lg:block absolute -top-32 right-0 font-preset-1 text-slate-100 select-none pointer-events-none z-[-1]">
              Contact
            </div>

            <div className="w-16 h-0.5 bg-slate-200"></div>
            <h1 className="font-preset-3-mobile md:font-preset-3 text-zinc-900">
              Tell us about <br /> your project
            </h1>
            <p className="font-preset-6-medium text-slate-500 max-w-[445px]">
              We’d love to hear more about your project. Please, leave a message
              below or give us a call. We have two offices, one in Texas and one
              in Tennessee. If you find yourself nearby, come say hello!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="max-w-[1110px] mx-auto px-6 md:px-12 lg:px-0 w-full mt-28 md:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="w-16 h-0.5 bg-slate-200"></div>
          <h2 className="font-preset-3-mobile md:font-preset-3 text-zinc-900">
            Contact <br /> Details
          </h2>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Office */}
          <div className="flex flex-col gap-4 font-preset-6-medium text-slate-500">
            <h3 className="font-preset-4 text-zinc-900">Main Office</h3>
            <p>Mail : archone@mail.com</p>
            <p>Address : 1892 Chenoweth Drive TN</p>
            <p>Phone : 123-456-3451</p>
            <button className="inline-flex items-center gap-4 text-zinc-900 font-preset-6-bold mt-4 hover:underline">
              <span>View on Map</span>
              <IconArrow className="w-6 h-6" />
            </button>
          </div>

          {/* Office II */}
          <div className="flex flex-col gap-4 font-preset-6-medium text-slate-500">
            <h3 className="font-preset-4 text-zinc-900">Office II</h3>
            <p>Mail : archtwo@mail.com</p>
            <p>Address : 3399 Wines Lane TX</p>
            <p>Phone : 832-123-4321</p>
            <button className="inline-flex items-center gap-4 text-zinc-900 font-preset-6-bold mt-4 hover:underline">
              <span>View on Map</span>
              <IconArrow className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Map Image Section */}
      <section className="max-w-[1110px] mx-auto px-6 md:px-12 lg:px-0 w-full mt-28 md:mt-40">
        <div className="relative w-full h-[360px] md:h-[480px]">
          <Image
            src="/contact/desktop/image-map.webp"
            alt="Map showing office locations in Texas and Tennessee"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Connect with Us Form Section */}
      <section className="max-w-[1110px] mx-auto px-6 md:px-12 lg:px-0 w-full mt-32 md:mt-48 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-[350px] shrink-0">
          <h2 className="font-preset-3-mobile md:font-preset-3 text-zinc-900">
            Connect <br /> with us
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full pb-4 border-b-2 outline-none font-preset-6-medium placeholder:text-slate-500/50 bg-transparent transition-colors ${
                errors.name
                  ? "border-red-500 text-red-500"
                  : "border-zinc-900 text-zinc-900 focus:border-zinc-900"
              }`}
            />
            {errors.name && (
              <span className="absolute right-0 top-0 font-preset-6-bold text-red-500 text-sm">
                Can't be empty
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full pb-4 border-b-2 outline-none font-preset-6-medium placeholder:text-slate-500/50 bg-transparent transition-colors ${
                errors.email
                  ? "border-red-500 text-red-500"
                  : "border-zinc-900 text-zinc-900 focus:border-zinc-900"
              }`}
            />
            {errors.email && (
              <span className="absolute right-0 top-0 font-preset-6-bold text-red-500 text-sm">
                Can't be empty
              </span>
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full pb-4 border-b-2 outline-none font-preset-6-medium placeholder:text-slate-500/50 bg-transparent resize-none transition-colors ${
                errors.message
                  ? "border-red-500 text-red-500"
                  : "border-zinc-900 text-zinc-900 focus:border-zinc-900"
              }`}
            />
            {errors.message && (
              <span className="absolute right-0 top-0 font-preset-6-bold text-red-500 text-sm">
                Can't be empty
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="button-custom hover:bg-slate-500 transition-colors cursor-pointer"
            >
              <IconArrow />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
