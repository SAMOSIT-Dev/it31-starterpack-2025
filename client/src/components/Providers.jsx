import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";

import { router } from "@/libs/router";

export const queryClient = new QueryClient();

/**
 *
 * @param {import("react").PropsWithChildren} params
 * @returns
 */
export default function Providers({ children }) {
  return (
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RouterProvider>
  );
}
