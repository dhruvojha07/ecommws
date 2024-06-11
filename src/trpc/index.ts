import { authRouter } from "./auth-router";
import  { publicProcdeure, router } from "./trpc";

export const appRouter = router({
    auth: authRouter
})

export type AppRouter = typeof appRouter