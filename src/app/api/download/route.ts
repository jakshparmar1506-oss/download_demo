import { NextResponse } from "next/server";

export async function GET() {
  const content = "Hello from backend text file";

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="file.txt"',
    },
  });
}