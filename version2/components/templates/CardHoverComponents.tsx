import Image from "next/image";
import { HoverEffect } from "../layouts/CardHoverEffect";

export function CardHoverComponents() {
  return (
    <div className="max-w-full mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    content: (
      <div>
        <Image
          src={"/images/html-logo.png"}
          alt="html"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image src={"/images/css-logo.png"} alt="html" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image src={"/images/js-logo.jpeg"} alt="html" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image src={"/images/ts-logo.jpeg"} alt="html" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/react-logo.png"}
          alt="html"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/nextjs-logo.jpeg"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/redux-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/tailwind-logo.jpeg"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/node-logo.jpeg"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/express-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/sequelize-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/ruby-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/postgresql-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/mongodb-logo.jpg"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/firebase-logo.png"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    content: (
      <div>
        <Image
          src={"/images/aws-logo.jpeg"}
          alt="nextjs"
          width={50}
          height={50}
        />
      </div>
    ),
  }
];
