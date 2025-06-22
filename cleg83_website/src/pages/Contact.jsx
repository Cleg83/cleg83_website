import ContactForm from '../../src/pages/components/Contact_Form';

export default function Contact() {
  return (
    <div className="relative min-h-screen text-black pt-16">
      <div
        className="absolute inset-0 z-0 bg-[url(/images/pexels-marek-piwnicki-3907296-20066246.jpg)] bg-cover"
      />
        <div className="relative z-10">
          <div>
            <h1 className="text-3xl font-bold">Any Questions?</h1>
            <p className="mt-2">Get in touch with us!</p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
    </div>
  );
}
