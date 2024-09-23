// // "use client";
// // import { useEffect, useRef } from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // gsap.registerPlugin(ScrollTrigger);

// // const ServicesPage = () => {
// //   const servicesRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     if (servicesRef.current) {
// //       const sections = servicesRef.current.querySelectorAll(".service-section");
      
// //       sections.forEach((section, index) => {
// //         const tl = gsap.timeline({
// //           scrollTrigger: {
// //             trigger: section,
// //             start: "20% top",
// //             end: " 20%",
// //             toggleActions: "play reverse play reverse",
// //             scrub: 1,
// //             markers: true,
// //           },
// //         });

// //         const content = section.querySelector(".service-content");
// //         const image = section.querySelector(".service-image");

// //         tl.fromTo(
// //           content,
// //           { y: 50, opacity: 20 },
// //           { y: 0, opacity: 1, duration: 0.5 }
// //         ).fromTo(
// //           image,
// //           { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
// //           { x: 0, opacity: 1, duration: 0.5 },
// //           "-=0.3"
// //         );
// //       });
// //     }
// //   }, []);

// //   const services = [
// //     {
// //       title: "Cloud Solutions",
// //       description:
// //         "Scalable and secure cloud infrastructure for your business.",
// //       image: "/image.png",
// //     },
// //     {
// //       title: "Cybersecurity",
// //       description:
// //         "Protect your digital assets with our advanced security measures.",
// //       image: "/image.png",
// //     },
// //     {
// //       title: "Data Analytics",
// //       description:
// //         "Turn your data into actionable insights with our analytics solutions.",
// //       image: "/image.png",
// //     },
// //   ];

// //   return (
// //     <div ref={servicesRef} className="bg-gray-100 min-h-screen">
// //       {services.map((service, index) => (
// //         <section
// //           key={service.title}
// //           className={`service-section flex flex-col md:flex-row items-center justify-between py-20 px-4 md:px-20 ${
// //             index % 2 === 0 ? "md:flex-row-reverse" : ""
// //           }`}
// //         >
// //           <div className="service-content w-full md:w-1/2 mb-8 md:mb-0">
// //             <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
// //             <p className="text-lg text-gray-600">{service.description}</p>
// //           </div>
// //           <motion.div
// //             className="service-image w-full md:w-1/2"
// //             whileHover={{ scale: 1.05, rotate: 2 }}
// //             transition={{ type: "spring", stiffness: 300 }}
// //           >
// //             <Image
// //               src={service.image}
// //               alt={service.title}
// //               width={500}
// //               height={300}
// //               layout="responsive"
// //               className="rounded-lg shadow-lg"
// //               loading="lazy"
// //             />
// //           </motion.div>
// //         </section>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ServicesPage;


// "use client"; // Ensuring this is a client-side component

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const ServicesPage = () => {
//   const servicesRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (servicesRef.current) {
//       const sections = servicesRef.current.querySelectorAll(".service-section");

//       sections.forEach((section, index) => {
//         const content = section.querySelector(".service-content");
//         const image = section.querySelector(".service-image");

//         gsap
//           .timeline({
//             scrollTrigger: {
//               trigger: section, // Ensure the trigger is the section
//               start: "10% bottom", // Adjust the scroll start position so the animation starts when 80% of the section is in view
//               end: " 40%", // End when the bottom is 20% from the viewport
//               toggleActions: "play reverse play reverse", // Play and reverse on scroll
//               scrub: 1,

//               markers: true,
//             },
//           })
//           .fromTo(
//             content,
//             { y: 50, opacity: 0 },
//             { y: 0, opacity: 1, duration: 0.5 }
//           )
//           .fromTo(
//             image,
//             { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
//             { x: 0, opacity: 1, duration: 0.5 },
//             "-=0.3"
//           );
//       });
//     }
//   }, []);

//   const services = [
//     {
//       title: "Cloud Solutions",
//       description:
//         "Scalable and secure cloud infrastructure for your business.",
//       image: "/image.png",
//     },
//     {
//       title: "Cybersecurity",
//       description:
//         "Protect your digital assets with our advanced security measures.",
//       image: "/image.png",
//     },
//     {
//       title: "Data Analytics",
//       description:
//         "Turn your data into actionable insights with our analytics solutions.",
//       image: "/image.png",
//     },
//   ];

//   return (
//     <div ref={servicesRef} className="bg-gray-100 min-h-screen">
//       {services.map((service, index) => (
//         <section
//           key={service.title}
//           className={`service-section flex flex-col   md:flex-row items-center justify-between py-20 px-8 md:px-20 ${
//             index % 2 === 0 ? "md:flex-row-reverse" : ""
//           }`}
//         >
//           <div className="service-content  ml-5  w-full md:w-1/2 mb-4  md:mb-0">
//             <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
//             <p className="text-lg text-gray-600">{service.description}</p>
//           </div>

//           <motion.div
//             className="service-image w-full md:w-1/2"
//             whileHover={{ scale: 1.05, rotate: 2 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Image
//               src={service.image}
//               alt={service.title}
//               width={500}
//               height={300}
//               layout="responsive"
//               className="rounded-lg shadow-lg"
//               loading="lazy"
//             />
//           </motion.div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default ServicesPage;


