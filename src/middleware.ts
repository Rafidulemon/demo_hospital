import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "bn"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/","/((?!api|_next|favicon.ico|public|gif|images|logo|slider).*)", "/(en|bn)/:path*"],
};
