import { Box, Heading, Text } from "@radix-ui/themes";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <main className="flex min-h-screen flex-col">
      <Box>
        <Heading>{t("title")}</Heading>
        <Text>{t("description")}</Text>
      </Box>
      <Text className="mt-5">
        <Link
          href={`/${locale}/product/1`}
          className="underline text-cyan-700 font-bold"
        >
          Product 1
        </Link>
      </Text>
      <Text className="mt-5">
        <Link
          href={`/${locale}/product/2`}
          className="underline text-cyan-700 font-bold"
        >
          Product 2
        </Link>
      </Text>
    </main>
  );
}
