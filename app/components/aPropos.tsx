"use client";

import Image from "next/image";
import React from "react";
import pp from "@/public/profilPortfolio.jpg";

function getAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function Propos() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center py-12 sm:py-16 md:py-0">
      <header
        id="about"
        className="scroll-mt-50 mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 py-8 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 text-slate-800"
      >
        <Image
          src={pp}
          alt="Photo de profil d'Ambroise Bosch"
          className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full object-cover shadow-2xl flex-shrink-0"
          priority
        />

        <section className="w-full max-w-2xl text-center md:text-left">
          <h2 className="mb-4 sm:mb-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
            Bonjour
          </h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-slate-700">
            Je m&rsquo;appelle <strong>Ambroise Bosch</strong> et je suis un
            développeur web &amp; mobile passionné par l&rsquo;innovation
            technologique. J&rsquo;adore mettre la tech au service de la
            productivité des entreprises.
          </p>

          <div
            id="renseignement"
            className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 md:justify-start text-sm sm:text-base md:text-lg"
          >
            <div className="space-y-1">
              <p>
                <strong>Nom&nbsp;:</strong> Ambroise Bosch
              </p>
              <p>
                <strong>Job&nbsp;:</strong>{" "}
                Développeur&nbsp;Web&nbsp;Full&nbsp;Stack
              </p>
            </div>

            <div className="space-y-1">
              <p>
                <strong>Âge&nbsp;:</strong> {getAge("2000-06-08")} ans
              </p>
              <p>
                <strong>Ville&nbsp;:</strong> Gournay-sur-Marne, Île-de-France
              </p>
            </div>
          </div>

          <a
            href="/cv/Ambroise_Bosch_CV.pdf"
            download
            className="inline-block rounded-xl bg-gradient-to-r from-blue-900 via-gray-700 to-gray-500 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg md:text-xl font-semibold text-white shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 "
          >
            Télécharger&nbsp;mon&nbsp;CV
          </a>
        </section>
      </header>
    </div>
  );
}

export default Propos;
