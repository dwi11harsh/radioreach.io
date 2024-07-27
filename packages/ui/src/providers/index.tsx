"use client";

import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <RecoilRoot>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      </RecoilRoot>
    </>
  );
};
