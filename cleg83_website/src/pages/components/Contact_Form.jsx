function ContactForm () {
  return (
    <div className="w-full max-w-xs mx-auto mt-8">
      <form className="font-[Open_Sans] bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" for="name">
            Name:
          </label>
          <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-xl" id="name" type="text" placeholder="Name"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" for="email">
            Email:
          </label>
          <input className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-xl" id="email" type="email" placeholder="Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" for="message">
          Message: 
          </label>
          <textarea  className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-xl" id="message" type="message" placeholder="Message"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 hover:shadow-xl active:bg-amber-950 transition">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;