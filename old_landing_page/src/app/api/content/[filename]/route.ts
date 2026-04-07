import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content", "data");

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    
    const safeFilename = filename.replace(/[^a-zA-Z0-9-_.]/g, "");
    
    if (!safeFilename.endsWith(".json")) {
      return NextResponse.json(
        { error: "Invalid file type" },
        { status: 400 }
      );
    }
    
    const filePath = path.join(contentDir, safeFilename);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Content not found" },
        { status: 404 }
      );
    }
    
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const content = JSON.parse(fileContent);
    
    return NextResponse.json(content, {
      headers: {
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (error) {
    console.error("Error loading content:", error);
    return NextResponse.json(
      { error: "Failed to load content" },
      { status: 500 }
    );
  }
}