"use client";
import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/trpc/client";
import { httpBatchLink } from "@trpc/client";

//Providers functions will enable us to use tRPC in the frontend
// PropsWithChildren is just a regular interface with the type defined: basically this: {children: ReactNode}
const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`, // URL at which the backend will be called at.
          fetch(url, options) {
            return fetch(url, { ...options, credentials: "include" });
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      {/* Allows us to use tanstack rq completely independently of tRPC*/}
      <QueryClientProvider client={queryClient}>
        {" "}
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};
export default Providers;
