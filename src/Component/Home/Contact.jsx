import React from "react";

function Contact() {
  return (
    <section className="bg-[#101010] pt-16 pb-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-6">
              Let’s start a project together.
            </h1>
            <p className="text-lg text-[#b4b4b4] leading-7 mb-6">
              We’d love to hear from you! Share your ideas, ask questions,
              or simply say hello. Let’s connect and explore how we can make
              your vision a reality.
            </p>

            <ul className="text-white text-lg space-y-3">
              <li>
                <a href="tel:+919910741417" className="hover:underline">
                  +91 99107 41417
                </a>
              </li>
              <li>
                <a href="mailto:info@mstyenterprises.com" className="hover:underline">
                  info@mstyenterprises.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
          <form className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 bg-[#242424] border border-[#323232] text-white p-4 rounded-lg placeholder:text-[#dddcd0] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 bg-[#242424] border border-[#323232] text-white p-4 rounded-lg placeholder:text-[#dddcd0] focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email ID"
                className="flex-1 bg-[#242424] border border-[#323232] text-white p-4 rounded-lg placeholder:text-[#dddcd0] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="tel"
                placeholder="Phone No"
                className="flex-1 bg-[#242424] border border-[#323232] text-white p-4 rounded-lg placeholder:text-[#dddcd0] focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Enter Your Message"
              className="w-full bg-[#242424] border border-[#323232] text-white p-4 rounded-lg placeholder:text-[#dddcd0] focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              type="submit"
              className="bg-white text-black font-semibold text-lg py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-200"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
