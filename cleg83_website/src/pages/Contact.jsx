import ContactForm from '../../src/pages/components/Contact_Form';

export default function Contact() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="pt-6">
        <h1 className="text-3xl font-bold">Any Questions?</h1>
        <p className="mt-2">Get in touch with us!</p>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
