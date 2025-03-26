import { motion } from "framer-motion";
import ContactForm from "../components/contact-form";
import ContactInfo from "../components/contact-info";
import { useEffect } from 'react';

export default function ContactPage() {

  useEffect(() => {
    const initAndSend = async () => {
      try {
        const res = await fetch('https://to-do-list-backend-hazel.vercel.app/auth/init', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          // No need to send email manually!
          body: JSON.stringify({})
        });
        const data = await res.json();
        console.log('🔑 Init:', data);
      } catch (error) {
        console.error('❌ Auth init failed:', error);
      }
    };
  
    initAndSend();
    }, []);

  return (
    <div className="min-h-screen py-16 bg-[#add8e6]">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-5xl font-extrabold text-left text-slate mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
