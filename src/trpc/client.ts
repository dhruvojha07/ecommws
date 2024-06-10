import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "./";

//the generic is the type of the entire backend and therefore the front end now knows that, type safety is achieved
export const trpc = createTRPCReact<AppRouter>({})