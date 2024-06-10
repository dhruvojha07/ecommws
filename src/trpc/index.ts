import  { publicProcdeure, router } from "./trpc";

export const appRouter = router({
    anyApiRoute: publicProcdeure.query(() => {
        return 'hello'
    }),
})

export type AppRouter = typeof appRouter