import React, { useRef, useState } from "react";
import image from "../assets/whatsapp.svg";
import emailjs from "@emailjs/browser";
import { Alert, Spinner } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

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
      <div className={`isolate bg-white`}>
        <div className="max-w-screen-md mb-8 lg:mb-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 ">
            Contact Us |
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            We treat customers, as if we are the customer!
          </p>
        </div>
        {showAlert && (
          <Alert color={alertColor} icon={HiInformationCircle}>
            {alertMessage}
          </Alert>
        )}

        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27225.338882151!2d74.25636269870087!3d31.46458205130698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697553236025!5m2!1sen!2s"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md text-small-z">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">Pakistan, Punjab, Lahore, Johar Town</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:devincicodes.official@gmail.com "
                    style={{ textDecoration: "underline" }}
                  >
                    devincicodes.official@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <a
                    className="leading-relaxed flex gap-2"
                    style={{
                      color: "green",
                      width: "fit-content",
                      textDecoration: "underline",
                    }}
                    href="https://wa.me/+923230018893"
                  >
                    {" "}
                    <img width={"16px"} src={image} alt="" /> +923230018893{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Send us your message
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                We are waiting for you, kindly make it short and precise!
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
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
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
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
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  onChange={(e) => controlForm(e)}
                  value={inputFeilds.message}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                disabled={showSpinner}
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                style={{ background: "darkblue" }}
                onClick={(e) => controlSendEmail(e)}
              >
                {showSpinner ? <Spinner /> : "Let's talk"}
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Expect reply in 1 or 2 buisness days.
              </p>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}
