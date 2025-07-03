import {
  faCode,
  faLaptopCode,
  faMobile,
  faRobot,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Badge } from "flowbite-react";

export const skills = [
  {
    icon: faLaptopCode,
    title: "Website Development",
    description: `Unlock the full potential of the digital realm with DeVinci
                  Codes Software House. Our web development prowess spans across
                  a spectrum of cutting-edge web frameworks. We're the
                  architects behind your online vision, crafting bespoke web
                  solutions that redefine excellence. Elevate your digital
                  presence and user experiences with our expertise, where
                  innovation meets versatility.`,
    badges: [
      <Badge key="mern" color="info">MERN</Badge>,
      <Badge key="mean" color="gray">MEAN</Badge>,
      <Badge key="aspnet" color="failure">ASP.net</Badge>,
      <Badge key="java" color="success">JAVA</Badge>,
      <Badge key="wordpress" color="warning">Wordpress</Badge>,
      <Badge key="react" color="indigo">React</Badge>,
      <Badge key="sql" color="purple">SQL</Badge>,
      <Badge key="angular" color="pink">Angular.js</Badge>,
      <Badge key="express" color="info">Express.js</Badge>,
      <Badge key="node" color="gray">Node.js</Badge>,
      <Badge key="html" color="failure">HTML & CSS</Badge>,
      <Badge key="js" color="success">JavaScript</Badge>,
    ],
  },
  {
    icon: faMobile,
    title: "App Development",
    description: `Your Gateway to Infinite App Possibilities. We're masters in app
                development, skilled across all frameworks. From native to
                cross-platform, we craft mobile solutions that inspire and
                perform. Let us turn your app idea into a digital masterpiece,
                where innovation meets endless potential.`,
    badges: [
      <Badge key="flutter" color="info">Flutter</Badge>,
      <Badge key="reactnative" color="gray">React-Native</Badge>,
      <Badge key="android" color="failure">Android Studio</Badge>,
      <Badge key="firebase" color="success">Firebase</Badge>,
      <Badge key="swift" color="warning">Swift</Badge>,
      <Badge key="javakotlin" color="indigo">Java & Kotlin</Badge>,
    ],
  },
  {
    icon: faCode,
    title: "Python Development",
    description: `  Python Pioneers. Our Python developers are coding maestros,
                weaving elegant solutions for your every need. From web
                applications to data science, we harness the power of Python to
                bring your visions to life. Unleash the potential of this
                versatile language with our expert team at your side.`,
    badges: [
      <Badge key="scraping" color="info">Data Scraping</Badge>,
      <Badge key="automation" color="gray">Automation</Badge>,
      <Badge key="django" color="failure">Django</Badge>,
      <Badge key="flask" color="success">Flask</Badge>,
    ],
  },
  {
    icon: faRobot,
    title: "Machine Learning",
    description: `Your Machine Learning Visionaries. We're at the forefront of
                machine learning, turning data into actionable insights. Our
                team harnesses the latest algorithms and technologies to drive
                innovation and automation. Let us transform your data into
                knowledge and supercharge your decision-making. Explore the
                future with our machine learning expertise.`,
    badges: [
      <Badge key="tensorflow" color="info">TensorFlow</Badge>,
      <Badge key="pytorch" color="gray">PyTorch</Badge>,
      <Badge key="pandas" color="failure">Pandas</Badge>,
      <Badge key="numpy" color="success">NumPy</Badge>,
      <Badge key="sklearn" color="indigo">Sklearn</Badge>,
      <Badge key="matplotlib" color="purple">Matplotlib</Badge>,
    ],
  },
  {
    icon: faPen,
    title: "UI/UX Design",
    description: `UI/UX design is the practice of creating digital products that
                are visually appealing, user-friendly, and efficient. It
                involves designing the user interface (UI) and user experience
                (UX) of websites, apps, and other digital products.`,
    badges: [
      <Badge key="figma" color="info">Figma Design</Badge>,
      <Badge key="xd" color="gray">AdobeXD</Badge>,
      <Badge key="canva" color="failure">Canva</Badge>,
    ],
  },
  {
    icon: faCode,
    title: "Masters of C and C++ Development",
    description: `Our developers are fluent in the languages of low-level power
                and high-performance efficiency. Whether it's system
                programming, embedded systems, or complex applications, we're
                your trusted experts. Dive into the world of C and C++ with us,
                where precision meets performance.`,
    badges: [
      <Badge key="gamedev" color="info">Game Devlopement</Badge>,
      <Badge key="algorithms" color="gray">Analysis and Design of Algorithms</Badge>,
      <Badge key="os" color="failure">Operating System</Badge>,
      <Badge key="oop" color="success">Object Oriented Programming</Badge>,
      <Badge key="sfml" color="indigo">SFML</Badge>,
    ],
  },
];
