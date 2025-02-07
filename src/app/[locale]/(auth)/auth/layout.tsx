import type { Metadata } from "next";
import "../../globals.css";
import AuthHeader from "@/components/auth/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Patient Portal",
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
      <div className="fixed z-10 top-2 md:top-6 left-4 md:left-6 right-4 md:right-6">
        <AuthHeader />
      </div>
      <div className="min-h-[calc(80vh-10px)] w-full bg-gradient-to-br from-teal-100 to-teal-800">{children}</div>
    </NextIntlClientProvider>
  );
}
