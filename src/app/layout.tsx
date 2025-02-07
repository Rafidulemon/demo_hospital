import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { FaPhoneVolume } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Hospital",
  description: "Patiya Hospital",
  icons: {
    icon: "/logo/icon.png",
  },
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
      <body className="antialiased bg-white flex flex-col gap-0">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-[calc(80vh-10px)]">{children}</div>
          <a
            href="tel:+1234567890"
            className="fixed bottom-4 right-4 bg-gray-300 text-primary pr-2 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <div className="z-10 -ml-2 shadow-md bg-primary text-white p-2 rounded-full">
              <FaPhoneVolume className="text-xl" />
            </div>

            <span className="px-2">+1234567890</span>
          </a>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
