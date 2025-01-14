import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "bn"];

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale to get the locale
  const locale = await requestLocale || "en"; // Default to "en" if no locale is found

  // Validate that the incoming `locale` is valid
  if (!locales.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return {
    locale, // Explicitly return the locale
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
