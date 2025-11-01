import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectSlug, author, email, content } = body;

    if (!projectSlug || !author || !email || !content) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "L'adresse email n'est pas valide" },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        projectSlug,
        author,
        email,
        content,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Commentaire enregistré, en attente d'approbation",
        id: comment.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de la création du commentaire:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du commentaire" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const projectSlug = searchParams.get("projectSlug");

    if (!projectSlug) {
      return NextResponse.json(
        { error: "Le slug du projet est requis" },
        { status: 400 }
      );
    }

    const comments = await prisma.comment.findMany({
      where: {
        projectSlug,
        approved: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        author: true,
        content: true,
        createdAt: true,
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Erreur lors de la récupération des commentaires:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des commentaires" },
      { status: 500 }
    );
  }
}
