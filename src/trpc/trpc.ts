import { ExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<ExpressContext>().create()

export const router = t.router

//anyone can call this public endpoint
export const publicProcdeure = t.procedure