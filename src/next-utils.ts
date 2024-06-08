import next from "next"

const PORT = Number(process.env.PORT) || 3000

export const nextApp = next({
    dev: process.env.NODE_ENV !== "production",
    port: PORT 
}) 

// Self hosting using Next.js is done ussing this utility
export const nextHandler = nextApp.getRequestHandler()