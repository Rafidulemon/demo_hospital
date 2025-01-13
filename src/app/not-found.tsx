import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const NotFound = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <Image
        src="/gif/404.gif"
        alt="404 Page Not Found"
        width={200}
        height={200}
      />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        Go back to the homepage
      </Link>
    </div>
  );
}

export default NotFound;