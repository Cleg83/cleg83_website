import { motion } from 'framer-motion';
import ContactForm from '../../src/pages/components/Contact_Form';

export default function Contact() {
  return (
    <div className="relative min-h-screen text-black">
      <div className="bg-black opacity-50 absolute inset-0 z-1"/>
      <div
        className="absolute inset-0 z-0 bg-[url(/images/pexels-marek-piwnicki-3907296-20066246.jpg)] bg-cover"
      />
        <div className="relative pt-16 z-10 min-h-screen backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay:0.5, duration: 1 }}
          >
            <h1 className="text-4xl font-bold">Any Questions?</h1>
          </motion.div>
          <motion.div
            className="pt-6 pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }} 
          >
            <p className="text-2xl">Get in touch with us!</p>
          </motion.div>
          <div className="pt-8 h-full">
            <ContactForm />
          </div>
        </div>
    </div>
  );
}
