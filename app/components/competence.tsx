"use client";

import React, { JSX } from "react";
import CircularDeterminate from "../components/CircularDeterminate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faPhp,
  faJs,
  faReact,
  faSass,
  faGithub,
  faJava,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const PrismaSvg = (
  <svg
    viewBox="-10 0 48 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-auto fill-current"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.209637 19.0073C-0.0659575 18.5726 -0.070121 18.0189 0.198904 17.58L10.3282 1.05707C10.8916 0.138071 12.252 0.218426 12.7033 1.19735L21.9569 21.2706C22.3002 22.0154 21.905 22.8917 21.1194 23.1274L6.72474 27.4458C6.14558 27.6195 5.52155 27.3867 5.19781 26.876L0.209637 19.0073ZM11.4969 5.88824C11.5945 5.40217 12.2605 5.33208 12.4572 5.78717L18.8402 20.5571C18.9603 20.8352 18.8108 21.1559 18.5205 21.2425L8.57492 24.2114C8.20935 24.3205 7.85916 24.0011 7.93428 23.627L11.4969 5.88824Z"
    />
  </svg>
);

const TailwindSvg = (
  <svg
    viewBox="-5 0 48 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-auto fill-current"
  >
    <path d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z" />
  </svg>
);

const GoImg = (
  <img
    src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Black.svg"
    alt="Go"
    className="w-12 h-auto"
  />
);

const PhaserImg = (
  <img
    src="https://cdn.phaser.io/images/img.png"
    alt="Phaser"
    className="w-12 h-auto"
    loading="lazy"
    decoding="async"
  />
);

type SkillFA = {
  type: "fa";
  icon: IconDefinition;
  colorClass?: string;
  value: number;
  label: string;
};

type SkillSVG = {
  type: "svg";
  svg: JSX.Element;
  colorClass?: string;
  value: number;
  label: string;
};

type SkillIMG = {
  type: "img";
  img: JSX.Element;
  value: number;
  label: string;
};

type Skill = SkillFA | SkillSVG | SkillIMG;

const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => {
  if (skill.type === "fa") {
    return (
      <div className="flex items-center justify-center h-12 w-12">
        <FontAwesomeIcon
          icon={skill.icon}
          className={`text-4xl ${skill.colorClass ?? ""}`}
          aria-label={skill.label}
        />
      </div>
    );
  }
  if (skill.type === "svg") {
    return (
      <div className="flex items-center justify-center h-12 w-12">
        <span className={skill.colorClass ?? ""} aria-label={skill.label}>
          {skill.svg}
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-12 w-12">
      <span aria-label={skill.label}>{skill.img}</span>
    </div>
  );
};

const skills: Skill[] = [
  {
    type: "fa",
    icon: faHtml5,
    colorClass: "text-[#E34F26]",
    value: 90,
    label: "HTML5",
  },
  {
    type: "fa",
    icon: faJs,
    colorClass: "text-[#F7DF1E]",
    value: 90,
    label: "JavaScript",
  },
  {
    type: "fa",
    icon: faReact,
    colorClass: "text-[#61DAFB]",
    value: 90,
    label: "React",
  },
  {
    type: "fa",
    icon: faDatabase,
    colorClass: "text-gray-700",
    value: 90,
    label: "SQL/DB",
  },
  {
    type: "svg",
    svg: PrismaSvg,
    colorClass: "text-[#2D3748]",
    value: 90,
    label: "Prisma",
  },
  {
    type: "svg",
    svg: TailwindSvg,
    colorClass: "text-[#06B6D4]",
    value: 90,
    label: "Tailwind CSS",
  },
  {
    type: "fa",
    icon: faGithub,
    colorClass: "text-black",
    value: 90,
    label: "GitHub",
  },
  {
    type: "fa",
    icon: faCss3Alt,
    colorClass: "text-[#2965f1]",
    value: 85,
    label: "CSS3",
  },
  {
    type: "fa",
    icon: faPhp,
    colorClass: "text-[#1a5fb4]",
    value: 80,
    label: "PHP",
  },
  {
    type: "fa",
    icon: faPython,
    colorClass: "text-[#3776AB]",
    value: 60,
    label: "Python",
  },
  { type: "img", img: GoImg, value: 50, label: "Go" },
  { type: "img", img: PhaserImg, value: 50, label: "Phaser" },
  {
    type: "fa",
    icon: faJava,
    colorClass: "text-[#007396]",
    value: 50,
    label: "Java",
  },
  {
    type: "fa",
    icon: faSass,
    colorClass: "text-[#CD6799]",
    value: 40,
    label: "Sass",
  },
];

const Competences: React.FC = () => (
  <section
    id="competences"
    className="py-16 text-gray-800 scroll-mt-17 bg-gray-50"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-gray-700 to-gray-500 uppercase tracking-wide font-semibold mb-2">
        Ce que je sais faire
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">MES COMPÉTENCES</h1>
      <p className="text-lg mb-10">
        Mes nombreux projets m&apos;ont permis d&apos;être aujourd&apos;hui
        autonome, polyvalent et de disposer des compétences techniques dont
        voici un aperçu :
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-16">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2">
            <SkillIcon skill={skill} />
            <CircularDeterminate value={skill.value} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Competences;
