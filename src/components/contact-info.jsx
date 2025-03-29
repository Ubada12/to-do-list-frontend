import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-lg text-gray-700">
          <Mail className="h-6 w-6 text-teal-500" />
          <span>info@eng.rizvi.edu.in</span>
        </div>
        <div className="flex items-center space-x-3 text-lg text-gray-700">
          <Phone className="h-6 w-6 text-teal-500" />
          <span>+91 22 69778690</span>
        </div>
        <div className="flex items-center space-x-3 text-lg text-gray-700">
          <MapPin className="h-6 w-6 text-teal-500" />
          <span>New Rizvi Educational Complex, Off. Carter Road, Bandra (W), Mumbai – 400 050.</span>
        </div>
        <div className="flex items-center space-x-3 text-lg text-gray-700">
          <Clock className="h-6 w-6 text-teal-500" />
          <span>Mon-Fri: 9AM-5PM</span>
        </div>
      </div>
    </motion.div>
  );
}
