import { NextResponse } from "next/server";

import MockDataNavigation from "./mock-data";

export async function GET() {
  return NextResponse.json(MockDataNavigation, { status: 200 });
}
