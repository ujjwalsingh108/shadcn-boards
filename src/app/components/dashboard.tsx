"use client";

import * as React from "react";
import useSWR from "swr";
import Link from "next/link";
import { getBcfBoards } from "@/lib/query/query";
import { Gem, ChevronRight, ChevronUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BcfBoard, Bcf, Board as Boards } from "./interface/interface";
import Board from "./board";
import Empty from "./empty";

export default function Dashboard() {
  const [isCase, setIsCase] = React.useState(false);
  const [isSubCase, setSubIsCase] = React.useState(false);
  const [isSuperSubCase, setSuperSubIsCase] = React.useState(false);

  const { data } = useSWR("bcfboards", getBcfBoards);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Gem className="h-6 w-6" />
              <span className="">Industry</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <ul className="space-y-1 list-none">
                {data?.boards?.map((board: Boards, index: number) => (
                  <li className="group" key={index}>
                    <Link
                      href="#"
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                      onClick={() => setIsCase(!isCase)}
                    >
                      {board?.name}
                      {isCase ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Link>
                    {isCase ? (
                      <ul className="ml-3 space-y-2 list-none">
                        {board?.bcfs?.map((bcfs: Bcf, subindex: number) => (
                          <li className="group" key={subindex}>
                            <Link
                              href="#"
                              className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                              onClick={() => setSubIsCase(!isSubCase)}
                            >
                              {bcfs?.name}
                              {isSubCase ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </Link>
                            {isSubCase ? (
                              <ul className="ml-3 space-y-2 list-none">
                                {bcfs?.bcfBoards?.map(
                                  (
                                    bcfboards: BcfBoard,
                                    supersubindex: number
                                  ) => (
                                    <li className="group" key={supersubindex}>
                                      <Link
                                        href="#"
                                        className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                        onClick={() =>
                                          setSuperSubIsCase(!isSuperSubCase)
                                        }
                                      >
                                        {bcfboards?.name}
                                        {isSuperSubCase ? (
                                          <ChevronUp className="h-4 w-4" />
                                        ) : (
                                          <ChevronRight className="h-4 w-4" />
                                        )}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-full"
                />
              </div>
            </form>
          </div>
        </header>
        {isCase && isSubCase && isSuperSubCase ? (
          <Board props="bcfBoards" />
        ) : isCase && isSubCase ? (
          <Board props="bcfs" />
        ) : isCase ? (
          <Board props="boards" />
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
