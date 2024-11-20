
import { NextRequest } from 'next/server';
import { handleRequest } from './yoga';

export const dynamic = "force-dynamic";

type ContextType = any;

export const GET = (req: NextRequest, context: ContextType) =>
  handleRequest(req, context);

export const POST = (req: NextRequest, context: ContextType) =>
  handleRequest(req, context);