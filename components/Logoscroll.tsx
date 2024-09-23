import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "oliva.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/oasis.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/ingram.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/redington.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/savex.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/puma.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl ",
        // light styles
        " ",
        // dark styles
        ""
      )}
      style={{
        backgroundColor: "#faefe0",
      }}
    >
      <div className="flex justify-center items-center ">
        <img className="" width={150} height={60} alt="" src={img} />
        {/* <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div> */}
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <>
      {/* <h1
        className="heading mt-20 mb-20 text-center text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl"
        style={{
          backgroundColor: "#faefe0",
        }}
      >
        Recognized{" "}
        <span
          className="text-blue-700"
          style={{
            backgroundColor: "#faefe0",
          }}
        >
          {" "}
          among the best ,{" "}
        </span>{" "}
        by the best 
      </h1> */}
      <div
        className="relative flex mt-20  mb-20 w-full flex-col items-center justify-center  rounded-lg bg-gradient-to-br from-white dark:from-background"
        style={{
          backgroundColor: "#faefe0",
        }}
      >
        <Marquee pauseOnHover className="[--duration:10s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div> */}
        {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
      </div>
    </>
  );
}
