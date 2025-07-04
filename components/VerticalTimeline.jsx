"use client";

import { Timeline } from "flowbite-react";

export default function VerticalTimeline({ inView }) {
  return (
    <div className={`timeline ${inView && "timeline-in-view"}`}>
      <div className="max-w-screen-md mb-8 lg:mb-8">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 ">
          Projects |
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          Insight of remarkable projects at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-blue-900">
            DeVinci Codes{" "}
          </span>
        </p>
      </div>

      <div className="py-8 px-4 lg:py-8 lg:px-6">
        <Timeline>
          <Timeline.Item>
            <Timeline.Content>
              <Timeline.Time>MERN STACK</Timeline.Time>
              <Timeline.Title>City Swapp (Live Website)</Timeline.Title>
              <Timeline.Body>
                <p>
                  Designed and developed a live MERN (MongoDB, Express, React,
                  Node.js) website known as CitySwap, which represents a
                  full-fledged business project. This website seamlessly
                  integrates payment methods, features marketing campaigns and
                  many more, ensuring it is a comprehensive and fully functional
                  platform for various business needs.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Content>
              <Timeline.Time>WORDPRESS</Timeline.Time>
              <Timeline.Title>Ecommerence Website (LIVE)</Timeline.Title>
              <Timeline.Body>
                <p>
                  Website named as NowBuyTime.com is a dynamic and expert
                  WordPress website development service dedicated to crafting
                  tailored online solutions for clients. Our team of skilled
                  developers and designers specialize in creating user-friendly,
                  responsive, and visually appealing websites on the WordPress
                  platform
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Content>
              <Timeline.Time>CHEN Stack</Timeline.Time>
              <Timeline.Title>
                Talentics Full Stack Freelancing website
              </Timeline.Title>
              <Timeline.Body>
                <p>
                  Talentics is a project based website made at DeVinci Codes
                  using HTML5, CSS3, Javascript, Express and Node The website is
                  a valuable resource for freelancers to grow their businesses,
                  by providing a platform for freelancers to showcase their
                  skills, connect with potential clients, and expand their
                  portfolio.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Content>
              <Timeline.Time>GAME DEVELOPMENT</Timeline.Time>
              <Timeline.Title>Console based Game Development</Timeline.Title>
              <Timeline.Body>
                <p>
                  Created multiple console-based games with the assistance of
                  C++ and C. These comprehensive projects include Bejeweled
                  Blitz, MineSweeper, Space Shooter, Snake and Ladder with
                  advanced graphics, Track Racing, Rat in a Maze, and a
                  customizable text editor
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Content>
              <Timeline.Time>APP DEVELOPMENT</Timeline.Time>
              <Timeline.Title>Digital Freight MarketPlace Apps</Timeline.Title>
              <Timeline.Body>
                <p>
                  Worked with a premium Freight Marketplace company, and these
                  websites play a critical role in operating entire teams. From
                  creating orders to assigning vehicles, confirming drivers and
                  brokers, managing invoices, and tracking orders, these
                  websites are designed to ensure seamless operation.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Content>
              <Timeline.Time>APP DEVELOPMENT</Timeline.Time>
              <Timeline.Title>AsaanRozgar Flutter App</Timeline.Title>
              <Timeline.Body>
                <p>
                  Developed an accounting application targeting small startups
                  which fulfills all their major accounting needs without being
                  overly complicated and overwhelming like most other accounting
                  softwares. It maintains payment records of parties, managing
                  inventory, expenses and assets, and generating reports and
                  forecasts to help business owners run their startups
                  efficiently.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Content>
              <Timeline.Time>APP DEVELOPMENT</Timeline.Time>
              <Timeline.Title>
                Balti Flutter App ( Flutter, Firebase, AWS, MongoDB )
              </Timeline.Title>
              <Timeline.Body>
                <p>
                  Balti is a food panda based model, where various restaurants
                  can setup their presence, adding their food items of their
                  menu, and consumer can place orders and get relevant
                  deliveries. It incorporates push notifications, chats, search
                  in radius functionalities and lot more etc.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Content>
              <Timeline.Time>APP DEVELOPMENT</Timeline.Time>
              <Timeline.Title>
                PetsWala Flutter App ( Flutter, MongoDB, Firebase )
              </Timeline.Title>
              <Timeline.Body>
                <p>
                  Developed all in one platform for pet owners, veterinary
                  doctors, pet shops, rescue centers, where they can communicate
                  and can perform relevant functionalities for instance pet
                  owners have newsfeed system where they can share posts, view
                  and comment, doctors can setup their clinics, and people can
                  place reviews and book them, similarly pet shop owners can
                  setup their products for sale, you can also alert rescue
                  centres for lost animals.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Content>
              <Timeline.Time>Data Analysis And Machine Learning</Timeline.Time>
              <Timeline.Title>
                Expertise in Machine Learning, OpenAI Integration, SAAS
                Websites, Business Data Analysis, and Recommender Systems
              </Timeline.Title>
              <Timeline.Body>
                <p>
                  At DeVinci Codes, we are a dynamic and innovative technology
                  company that brings a diverse skill set to the table,
                  empowering businesses to thrive in today's digital world. Our
                  expertise spans a wide spectrum, including Object Detection,
                  OpenAI Integration, SAAS Websites, Business Data Analysis,
                  Recommender Systems etc
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}
