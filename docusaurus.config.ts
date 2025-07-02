import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "TypeScript from Zero",
  tagline: "Learn advanced TypeScript starting from solid foundations.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://jeffsieu.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/typescript-from-zero/",

  organizationName: "jeffsieu",
  projectName: "typescript-from-zero",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-6WPELFYCC1",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.png",
    navbar: {
      title: "TypeScript from Zero",
      logo: {
        alt: "TypeScript from Zero",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Guide",
        },
        {
          href: "https://github.com/jeffsieu/typescript-from-zero",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "TypeScript from Zero",
              to: "/docs/basics/introduction-to-typescript/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "About Jeff Sieu",
              to: "https://jeffsieu.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/jeffsieu/typescript-from-zero",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jeff Sieu. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
