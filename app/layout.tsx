import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Expense Tracker",
    template: "%s | Expense Tracker",
  },
  description:
    "An expense tracking application designed to manage income and expenses, provide monthly financial summaries, and visualize spending patterns using interactive charts. Built with Next.js, TypeScript, Tailwind CSS, and modern state management.",

  verification: {
    google: "N_RRRw2MotI1UYegfbmG6DZUaJX8gHchMS-tr9v0sZ0",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${
          lato.variable
        } antialiased  font-lato ~text-xs/sm ${
          theme ? theme.value : " dark "
        } dark:text-white dark:bg-dark-bg`}
      >
        {children}
      </body>
    </html>
  );
}
