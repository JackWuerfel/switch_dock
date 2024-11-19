
import { NextRequest } from 'next/server';
import { handleRequest } from './yoga';

type ContextType = any;

export const GET = (req: NextRequest, context: ContextType) =>
  handleRequest(req, context);

export const POST = (req: NextRequest, context: ContextType) =>
  handleRequest(req, context);