'use client';

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

export default function ModalContact({ isOpen, onClose }) {
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Too short').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().min(10, 'Minimum 10 characters').required('Required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Mock sending...', values);

    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      resetForm();

      setTimeout(() => {
        setSent(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-[#233142] p-6 shadow-2xl md:max-w-lg md:p-8 lg:max-w-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-400 transition hover:text-white"
        >
          ✕
        </button>
        <h2 className="mb-6 text-center text-2xl font-semibold text-white md:text-3xl">
          Start Your Project
        </h2>
        {sent ? (
          <div className="flex flex-col items-center justify-center py-10 text-lg font-medium text-green-400">
            🚀 Message sent successfully!
          </div>
        ) : (
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                <div>
                  <Field
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-transparent bg-[#1a2433] p-3 text-white transition outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <ErrorMessage name="name" component="div" className="mt-1 text-sm text-red-400" />
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-lg border border-transparent bg-[#1a2433] p-3 text-white transition outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-1 text-sm text-red-400"
                  />
                </div>
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows="5"
                    className="w-full resize-none rounded-lg border border-transparent bg-[#1a2433] p-3 text-white transition outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="mt-1 text-sm text-red-400"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ rotateX: 360, scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="perspective-1000 mx-auto mt-4 w-full max-w-[60%] cursor-pointer rounded-lg bg-blue-600 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-blue-700 active:scale-95"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </Form>
            )}
          </Formik>
        )}
      </motion.div>
    </motion.div>
  );
}
