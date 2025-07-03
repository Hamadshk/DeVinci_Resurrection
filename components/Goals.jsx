const features = [
  {
    name: "Innovation",
    description:
      "We aim to be at the forefront of technological advancements, bringing innovative ideas to life.",
  },
  {
    name: "User-Centric Solutions",
    description:
      "Our focus is on creating software that serves the needs of users, enhancing their experiences.",
  },
  {
    name: "Cutting-Edge Technologies",
    description:
      "We are committed to staying current with the latest technologies to provide state-of-the-art solutions.",
  },
  {
    name: "Exceptional Results",
    description:
      "Our goal is to deliver outstanding results, ensuring client satisfaction and success.",
  },
  {
    name: "Digital Transformation",
    description:
      "We help businesses thrive in the digital age, driving their digital transformation journeys.",
  },
  {
    name: "Client Dedication",
    description:
      "Our clients success is our success, and we are dedicated to helping them achieve their goals.",
  },
];

export default function Goals({ inView }) {
  return (
    <div className={`bg-white goals ${inView && "goals-in-view"}`}>
      <div className="max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 ">
          Our Vision |
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-blue-900">
            DeVinci Codes{" "}
          </span>
          is devoted to provide
        </p>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlubm92YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            alt="https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGlubm92YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            className="rounded-lg bg-gray-100"
          />
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGlubm92YXRpb24lMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGlubm92YXRpb24lMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            className="rounded-lg bg-gray-100"
          />
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdlYnNpdGUlMjBkZXNpZ25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdlYnNpdGUlMjBkZXNpZ25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            className="rounded-lg bg-gray-100"
          />
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            alt="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
