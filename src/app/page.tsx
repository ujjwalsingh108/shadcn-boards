"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Boards from "./components/Boards";
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Boards />
    </QueryClientProvider>
  );
}
