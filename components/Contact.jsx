import React, { useRef, useState } from "react";
import image from "../assets/whatsapp.svg";
import emailjs from "@emailjs/browser";
import { Alert, Spinner } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { FuturisticIcon, FuturisticIcons } from "./FuturisticIcon";

export default function Contact({ inView }) {
  const form = useRef();
  const [inputFeilds, setInputFeilds] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [alertColor, setAlertColor] = useState("failure");
  const [showSpinner, setShowSpinner] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  
  function controlForm(event) {
    setShowAlert(false);
    setInputFeilds((curr) => {
      return { ...curr, [event.target.name]: event.target.value };
    });
  }
  
  function controlSendEmail(event) {
    setShowSpinner(true);
    event.preventDefault();
    inputFeilds.user_email.trim();
    inputFeilds.user_name.trim();
    inputFeilds.message.trim();
    let empty = [];
    if (!inputFeilds.user_name) empty.push("Name");
    if (!inputFeilds.user_email) empty.push("Email");
    if (!inputFeilds.message) empty.push("Message");
    let reqString =
      empty.length == 2
        ? empty.join(" & ")
        : empty.length == 1
        ? empty[0]
        : empty.slice(0, 2).join(", ") + " & " + empty[2];

    reqString = "Please Enter your " + reqString;
    if (empty.length) {
      setAlertMessage(reqString);
      setShowAlert(true);
      setShowSpinner(false);
    } else {
      emailjs
        .sendForm(
          "service_7xa8rli",
          "template_2y58hde",
          form.current,
          "4tepw0xOoeXo1ij2k"
        )
        .then(
          (result) => {
            setInputFeilds({
              user_name: "",
              user_email: "",
              message: "",
            });
            setAlertMessage(
              "We have recieved your message, Thanks for contacting us!"
            );
            setAlertColor("info");
            setShowAlert(true);
            setShowSpinner(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }
  
  return (
    <form ref={form} className={`contact ${inView && "contact-in-view"} bg-pure-black`}>
      <div className="isolate min-h-screen py-16 relative">
        {/* Futuristic Grid Background */}
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20" />
        
        {/* Geometric corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyber-cyan opacity-30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyber-cyan opacity-30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyber-cyan opacity-30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyber-cyan opacity-30" />
        
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-6 text-5xl tracking-tight font-extrabold text-cyber-white font-mono">
              Contact Us
            </h2>
            <p className="text-cyber-white text-xl max-w-2xl leading-relaxed font-inter">
              We treat customers as if we are the customer! Let's discuss your next big project.
            </p>
            
            {/* Futuristic accent elements */}
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="w-12 h-0.5 bg-cyber-cyan" />
              <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse" />
              <div className="w-12 h-0.5 bg-cyber-cyan" />
            </div>
          </div>
          
          {showAlert && (
            <div className={`mb-8 p-4 rounded-lg border backdrop-blur-cyber ${
              alertColor === 'info' 
                ? 'bg-glass-black border-cyber-cyan text-cyber-cyan' 
                : 'bg-glass-black border-cyber-white text-cyber-white'
            }`}>
              <div className="flex items-center space-x-2">
                <HiInformationCircle className="text-lg" />
                <span className="font-inter">{alertMessage}</span>
              </div>
            </div>
          )}

          <section className="text-cyber-white body-font relative">
            <div className="container mx-auto flex sm:flex-nowrap flex-wrap gap-8">
              {/* Map Section */}
              <div className="lg:w-2/3 md:w-1/2 bg-glass-black backdrop-blur-cyber border border-glass-white rounded-lg overflow-hidden p-6 shadow-2xl">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  {/* Clean map container */}
                  <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0 rounded-lg"
                    title="DeVinci Codes Location - Johar Town, Lahore"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.176234567891!2d74.25636269870087!3d31.46458205130698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735948800001!5m2!1sen!2s"
                    style={{ 
                      filter: "brightness(0.3) contrast(1.2) hue-rotate(180deg)",
                      border: 0
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    onLoad={() => console.log('Google Maps loaded successfully')}
                    onError={(e) => {
                      console.error('Google Maps failed to load:', e);
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  ></iframe>
                  
                  {/* Fallback Map */}
                  <div 
                    className="absolute inset-0 rounded-lg bg-glass-black backdrop-blur-cyber border border-cyber-cyan flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center p-8">
                      <div className="mb-6">
                        <svg className="w-16 h-16 mx-auto text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-cyber-white mb-2 font-inter">Our Location</h3>
                      <p className="text-cyber-white mb-4 font-inter">Johar Town, Lahore, Punjab, Pakistan</p>
                      <p className="text-cyber-white text-sm mb-6 font-inter">Map temporarily unavailable. Use the button below to view our location.</p>
                      
                      <div className="space-y-3">
                        <a
                          href="https://maps.google.com/?q=Johar+Town,+Lahore,+Punjab,+Pakistan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-cyber-cyan hover:bg-cyber-white text-pure-black px-6 py-3 rounded-lg transition-colors font-inter font-medium"
                        >
                          <span>View on Google Maps</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        
                        <button
                          onClick={() => {
                            window.location.reload();
                          }}
                          className="block mx-auto text-cyber-cyan hover:text-cyber-white text-sm underline transition-colors font-inter"
                        >
                          Refresh page to retry loading map
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Info Cards */}
                <div className="mt-6 space-y-4">
                  <div className="bg-glass-black backdrop-blur-cyber rounded-lg p-4 border border-glass-white">
                    <h3 className="font-semibold text-cyber-cyan tracking-wide text-sm uppercase mb-2 font-inter">
                      Address
                    </h3>
                    <p className="text-cyber-white font-inter">Pakistan, Punjab, Lahore, Johar Town</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-glass-black backdrop-blur-cyber rounded-lg p-4 border border-glass-white">
                      <h3 className="font-semibold text-cyber-cyan tracking-wide text-sm uppercase mb-2 font-inter">
                        Email
                      </h3>
                      <a
                        href="mailto:devincicodes.official@gmail.com"
                        className="text-cyber-cyan hover:text-cyber-white transition-colors underline font-inter"
                      >
                        devincicodes.official@gmail.com
                      </a>
                    </div>
                    
                    <div className="bg-glass-black backdrop-blur-cyber rounded-lg p-4 border border-glass-white">
                      <h3 className="font-semibold text-cyber-cyan tracking-wide text-sm uppercase mb-2 font-inter">
                        Phone
                      </h3>
                      <p className="text-cyber-white font-inter">+92 321 0555929</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-1/3 md:w-1/2 bg-glass-black backdrop-blur-cyber border border-glass-white rounded-lg p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-cyber-white mb-6 font-inter">Send Message</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-cyber-cyan text-sm font-medium mb-2 font-inter">
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={inputFeilds.user_name}
                      onChange={controlForm}
                      className="w-full px-4 py-3 bg-glass-black border border-glass-white rounded-lg text-cyber-white placeholder-cyber-white/50 focus:border-cyber-cyan focus:outline-none transition-colors font-inter"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyber-cyan text-sm font-medium mb-2 font-inter">
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      value={inputFeilds.user_email}
                      onChange={controlForm}
                      className="w-full px-4 py-3 bg-glass-black border border-glass-white rounded-lg text-cyber-white placeholder-cyber-white/50 focus:border-cyber-cyan focus:outline-none transition-colors font-inter"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyber-cyan text-sm font-medium mb-2 font-inter">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={inputFeilds.message}
                      onChange={controlForm}
                      rows={6}
                      className="w-full px-4 py-3 bg-glass-black border border-glass-white rounded-lg text-cyber-white placeholder-cyber-white/50 focus:border-cyber-cyan focus:outline-none transition-colors resize-none font-inter"
                      placeholder="Enter your message"
                    />
                  </div>
                  
                  <button
                    onClick={controlSendEmail}
                    disabled={showSpinner}
                    className="w-full px-6 py-3 bg-cyber-cyan hover:bg-cyber-white text-pure-black font-semibold rounded-lg transition-all duration-300 font-inter disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {showSpinner ? (
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </form>
  );
}
