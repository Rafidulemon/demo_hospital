import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/navigation/header/Header";
import Footer from "@/components/navigation/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Hospital",
  description: "Patiya Hospital",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <div className="min-h-[calc(80vh-10px)] w-full">{children}</div>
      <Footer />
    </NextIntlClientProvider>
  );
}
