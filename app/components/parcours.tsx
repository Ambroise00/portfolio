import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

import project1 from "../../public/bac.png";
import project2 from "../../public/violoncelle.png";
import project3 from "../../public/open.png";

const parcours = [
  {
    title: "Baccalauréat",
    description: "J'ai eu mon Bac",
    img: project1,
    link: "https://github.com/tonuser/elearning",
  },
  {
    title: "Portfolio 3D",
    description: "Site portfolio interactif avec Three.js et Tailwind CSS.",
    img: project2,
    link: "https://tonuser.com/portfolio",
  },
  {
    title: "Blog Tech",
    description: "Blog statique généré par MDX et Vercel.",
    img: project3,
    link: "https://blog.tonuser.com",
  },
];

export default function Parcours() {
  return (
    <div id="experiences" className="bg-gray-50 pb-10 scroll-mt-17">
      <div className="max-w-4xl mx-auto py-8 items-center ">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-gray-700 to-gray-500 uppercase tracking-wide font-semibold mb-2 text-center pb-3">
          Les étapes clés de mon chemin professionnel
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center pb-14">
          MON PARCOURS
        </h1>

        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className=" max-w-xxl  mx-auto"
        >
          <CarouselContent className="-mt-1 h-[600px]">
            {parcours.map((item, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-full">
                <div className="p-1">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="h-[600px]">
                      <CardContent className="p-4 h-[300px]">
                        <Image
                          src={item.img}
                          alt={item.title}
                          className="w-full h-110 object-cover rounded-md mb-4"
                          width={item.img.width}
                          height={item.img.height}
                        />
                        <h2 className="text-lg font-semibold mb-1">
                          {item.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
