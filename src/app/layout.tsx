import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Hospital",
  description: "Patiya Hospital",
  icons: {
    icon: "/logo/icon.png",
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/icon.png" type="image/png" />
      </head>
      <body className={`antialiased bg-white flex flex-col gap-0`}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-[calc(80vh-10px)]">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
