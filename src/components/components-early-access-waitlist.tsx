"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export function EarlyAccessWaitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);
    setIsSubmitted(true);
  };

  return (
    <div className={`h-screen w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased ${ubuntu.className}`}>
      <div className="max-w-2xl mx-auto p-4">
        <motion.h1 
          className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#FC2D7C] to-[#FC2D7C] text-center font-sans font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Early Access to Adler
        </motion.h1>
        <motion.p 
          className="text-neutral-300 max-w-lg mx-auto my-4 text-sm md:text-base text-center relative z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Be among the first to experience the future of 3D digital spaces. Join our waitlist for exclusive early access to Adler's revolutionary platform.
        </motion.p>
        {!isSubmitted ? (
          <motion.form 
            onSubmit={handleSubmit}
            className="relative z-10 mt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-[#FC2D7C] bg-neutral-950 placeholder:text-neutral-500"
                required
              />
              <Button 
                type="submit" 
                className="bg-[#FC2D7C] hover:bg-[#FF69B4] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Join Waitlist
              </Button>
            </div>
          </motion.form>
        ) : (
          <motion.div 
            className="text-[#FC2D7C] text-center mt-6 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for joining our waitlist! We'll be in touch soon.
          </motion.div>
        )}
      </div>
      <BackgroundBeams />
    </div>
  );
}