import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const comment = await prisma.comment.update({
      where: { id },
      data: { approved: true },
    });

    return NextResponse.json({
      success: true,
      message: "Commentaire approuvé",
      comment,
    });
  } catch (error) {
    console.error("Erreur lors de l'approbation du commentaire:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'approbation du commentaire" },
      { status: 500 }
    );
  }
}
