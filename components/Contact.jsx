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
    <form ref={form} className={`contact ${inView && "contact-in-view"}`}>
      <div className={`isolate min-h-screen py-16`}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-6 text-5xl tracking-tight font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
              We treat customers as if we are the customer! Let's discuss your next big project.
            </p>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
          </div>
          
          {showAlert && (
            <div className={`mb-8 p-4 rounded-lg border ${
              alertColor === 'info' 
                ? 'bg-cyan-900/30 border-cyan-500/30 text-cyan-200' 
                : 'bg-red-900/30 border-red-500/30 text-red-200'
            }`}>
              <div className="flex items-center space-x-2">
                <HiInformationCircle className="text-lg" />
                <span>{alertMessage}</span>
              </div>
            </div>
          )}

          <section className="text-slate-300 body-font relative">
            <div className="container mx-auto flex sm:flex-nowrap flex-wrap gap-8">
              {/* Map Section */}
              <div className="lg:w-2/3 md:w-1/2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden p-6 shadow-2xl">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  {/* Enhanced Google Maps Iframe */}
                  <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0 rounded-lg"
                    title="DeVinci Codes Location - Johar Town, Lahore"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.176234567891!2d74.25636269870087!3d31.46458205130698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735948800001!5m2!1sen!2s"
                    style={{ 
                      filter: "brightness(0.8) contrast(1.2)",
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
                  
                  {/* Enhanced Fallback Map */}
                  <div 
                    className="absolute inset-0 rounded-lg bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/50 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center p-8">
                      <div className="mb-6">
                        <svg className="w-16 h-16 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                      <p className="text-slate-300 mb-4">Johar Town, Lahore, Punjab, Pakistan</p>
                      <p className="text-slate-400 text-sm mb-6">Map temporarily unavailable. Use the button below to view our location.</p>
                      
                      <div className="space-y-3">
                        <a
                          href="https://maps.google.com/?q=Johar+Town,+Lahore,+Punjab,+Pakistan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
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
                          className="block mx-auto text-cyan-400 hover:text-cyan-300 text-sm underline transition-colors"
                        >
                          Refresh page to retry loading map
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Info Cards */}
                <div className="mt-6 space-y-4">
                  <div className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-4 border border-slate-600/30">
                    <h3 className="font-semibold text-cyan-400 tracking-wide text-sm uppercase mb-2">
                      Address
                    </h3>
                    <p className="text-slate-300">Pakistan, Punjab, Lahore, Johar Town</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-4 border border-slate-600/30">
                      <h3 className="font-semibold text-cyan-400 tracking-wide text-sm uppercase mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:devincicodes.official@gmail.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-500/50"
                      >
                        devincicodes.official@gmail.com
                      </a>
                    </div>
                    
                    <div className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-4 border border-slate-600/30">
                      <h3 className="font-semibold text-cyan-400 tracking-wide text-sm uppercase mb-2">
                        WhatsApp
                      </h3>
                      <a
                        className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors underline decoration-green-500/50"
                        href="https://wa.me/+923230018893"
                      >
                        <img width={"16px"} src={image} alt="" />
                        <span>+923230018893</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:w-1/3 md:w-1/2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Send us your message
                  </h3>
                  <p className="text-slate-400">
                    We are waiting for you, kindly make it short and precise!
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      onChange={(e) => controlForm(e)}
                      value={inputFeilds.user_name}
                      name="user_name"
                      className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      onChange={(e) => controlForm(e)}
                      value={inputFeilds.user_email}
                      name="user_email"
                      className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      onChange={(e) => controlForm(e)}
                      value={inputFeilds.message}
                      rows={5}
                      className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 outline-none resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    disabled={showSpinner}
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    onClick={(e) => controlSendEmail(e)}
                  >
                    {showSpinner ? (
                      <>
                        <Spinner size="sm" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span className="flex items-center">
                        Let's Talk 
                        <FuturisticIcon 
                          icon={FuturisticIcons.rocket} 
                          glowColor="cyan" 
                          animated 
                          className="ml-2" 
                        />
                      </span>
                    )}
                  </button>
                  
                  <p className="text-xs text-slate-500 text-center">
                    Expect reply in 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </form>
  );
}
