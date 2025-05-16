import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Learn TypeScript Basics",
    description: (
      <>
        Start your journey with TypeScript by learning the fundamental concepts
        and syntax to build strong foundations.
      </>
    ),
  },
  {
    title: "Intermediate Concepts",
    description: (
      <>
        Dive deeper into TypeScript with topics like union types, type guards,
        and advanced type manipulation.
      </>
    ),
  },
  {
    title: "Advanced TypeScript",
    description: (
      <>
        Master TypeScript by exploring generics, conditional types, and
        declaration merging to write highly scalable code.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
