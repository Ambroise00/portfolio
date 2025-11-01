"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "./ui/badge";

import cinema from "../../public/projets/cinema.png";
import meetic from "../../public/projets/meetic.png";
import myh5ai from "../../public/projets/myh5ai.png";
import puissance4 from "../../public/projets/puissance4_2.png";
import responsive from "../../public/projets/responsive.png";
import twitter from "../../public/projets/twitter.png";

type CompetenceId = "FRONT" | "BACK" | "BDD" | "GESTION";

const COMPETENCE_LABELS: Record<CompetenceId, string> = {
  FRONT: "Front",
  BACK: "Back",
  BDD: "BDD",
  GESTION: "Gestion",
};

type Project = {
  title: string;
  slug: string;
  img: StaticImageData;
  description: string;
  techs: string[];
  competencies: CompetenceId[];
};

const projets: Project[] = [
  {
    title: "Clone Cinéma",
    slug: "clone-cinema",
    img: cinema,
    description:
      "Projet PHP/MySQL : comptes, réservations, recherche, avis. Accent sur SQL propre, sécurité et pagination.",
    techs: ["PHP", "MySQL", "HTML", "CSS", "JS"],
    competencies: ["BACK", "BDD", "GESTION"],
  },
  {
    title: "Clone Meetic",
    slug: "clone-meetic",
    img: meetic,
    description:
      "Rencontres (PHP/MySQL/JS) : profils, recherche, messagerie. Focus sécurité/auth & temps réel.",
    techs: ["PHP", "MySQL"],
    competencies: ["BACK", "BDD", "FRONT", "GESTION"],
  },
  {
    title: "myH5AI",
    slug: "myh5ai",
    img: myh5ai,
    description:
      "Explorateur de fichiers serveur en PHP, UI arborescente avec aperçu et recherche (inspiré de h5ai).",
    techs: ["PHP", "JS", "HTML/CSS"],
    competencies: ["BACK", "FRONT", "GESTION"],
  },
  {
    title: "Puissance 4",
    slug: "puissance-4",
    img: puissance4,
    description:
      "Jeu ES6 : classes/modules, placement, détection de victoire, alternance des tours.",
    techs: ["JavaScript ES6", "HTML/CSS"],
    competencies: ["FRONT"],
  },
  {
    title: "Site Responsive",
    slug: "site-responsive",
    img: responsive,
    description:
      "Site vitrine responsive : media queries, Flexbox, CSS Grid. Soins A11y et SEO.",
    techs: ["HTML", "CSS", "Grid/Flex"],
    competencies: ["FRONT"],
  },
  {
    title: "Mini Twitter",
    slug: "mini-twitter",
    img: twitter,
    description:
      "Timeline + publication. Focus sur la structure, l'état et la qualité.",
    techs: ["JS", "HTML/CSS", "PHP"],
    competencies: ["FRONT", "GESTION", "BACK"],
  },
];

type Filter = "ALL" | CompetenceId;
const FILTERS: Array<{ id: Filter; label: string }> = [
  { id: "ALL", label: "Toutes" },
  ...Object.entries(COMPETENCE_LABELS).map(([id, label]) => ({
    id: id as CompetenceId,
    label,
  })),
];

export default function Projets() {
  const [filter, setFilter] = useState<Filter>("ALL");

  const filtered =
    filter === "ALL"
      ? projets
      : projets.filter((p) => p.competencies.includes(filter));

  return (
    <div className="bg-gray-50">
      <section
        id="projets"
        className="max-w-5xl mx-auto py-12 px-4 scroll-mt-17"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">Mes projets</h1>
        </div>

        <div className="flex flex-wrap gap-5 justify-center mb-16">
          {FILTERS.map(({ id, label }) => (
            <Badge
              key={id}
              onClick={() => setFilter(id)}
              className={`cursor-pointer h-10 w-30 ${
                filter === id ? "ring-2 ring-offset-2" : ""
              }`}
              variant={id === "ALL" ? undefined : "outline"}
            >
              {label}
            </Badge>
          ))}
        </div>

        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-xxl mx-auto"
        >
          <CarouselPrevious
            className="cursor-pointer"
            variant="outline"
            size="icon"
          />
          <CarouselContent>
            {filtered.map((proj) => (
              <CarouselItem
                key={proj.slug}
                className="md:basis-1/2 lg:basis-1/3 cursor-pointer"
              >
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="pt-4">
                      <h2 className="text-xl font-semibold">{proj.title}</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {proj.description}
                      </p>
                    </CardContent>

                    <Image
                      src={proj.img}
                      alt={proj.title}
                      width={800}
                      height={480}
                      className="w-full h-48 object-cover"
                      priority={false}
                    />

                    <CardContent className="flex flex-col gap-3 mt-2">
                      <div className="flex flex-wrap gap-2">
                        {proj.techs.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {proj.competencies.map((c) => (
                          <Badge key={c} variant="secondary">
                            {COMPETENCE_LABELS[c]}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext
            className="cursor-pointer"
            variant="outline"
            size="icon"
          />
        </Carousel>
      </section>
    </div>
  );
}
