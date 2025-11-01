"use client";

import React, { useState } from "react";
import Footer from "./Footer";

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div id="copie">
      <button
        onClick={copyToClipboard}
        className="text-lg font-semibold text-blue-700 hover:text-blue-900 focus:outline-none cursor-pointer transition"
      >
        {copied ? "Adresse copiée !" : "ambroise.bosch@gmail.com"}
      </button>
    </div>
  );
}

function CopyPhoneButton({ phone }: { phone: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div id="copie">
      <button
        onClick={copyToClipboard}
        className="text-lg font-semibold text-gray-800 hover:text-gray-900 focus:outline-none cursor-pointer transition"
      >
        {copied ? "Numéro copié !" : "07 67 23 26 72"}
      </button>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const { name, firstname, email, message } = formData;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstname} ${name}`.trim(),
          email,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        });
        setFormData({ name: "", firstname: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Une erreur est survenue",
        });
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus({
        type: "error",
        message: "Impossible d'envoyer le message. Veuillez réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  const emailCopy = "ambroise.bosch@gmail.com";
  const phoneCopy = "07 67 23 26 72";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <section
        id="contact"
        className="flex-grow flex flex-col justify-center items-center py-20 px-6 md:px-12"
      >
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            CONTACT
          </h2>

          <p className="mb-8 text-lg text-gray-700 text-center md:text-left max-w-2xl">
            N&apos;hésitez pas à me contacter, je suis à votre disposition pour
            toute question, collaboration ou opportunité professionnelle.
          </p>

          <div className="flex justify-center md:justify-start gap-10 mb-6">
            <CopyEmailButton email={emailCopy} />
            <CopyPhoneButton phone={phoneCopy} />
          </div>

          {status.type && (
            <div
              className={`p-4 rounded-lg mb-8 text-base font-medium ${
                status.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm text-base py-2.5 px-3"
                />
              </div>
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-base font-medium text-gray-700"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={onChange}
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm text-base py-2.5 px-3"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm text-base py-2.5 px-3"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-base font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={onChange}
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm text-base py-2.5 px-3"
              />
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg font-semibold rounded-xl shadow-md text-white bg-gradient-to-r from-blue-900 via-gray-700 to-gray-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4"
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
