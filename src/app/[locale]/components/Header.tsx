import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  return (
    <header className="pt-2 pb-2">
      <nav className="flex justify-between items-center">
        <Link href={`/${locale}`}>{t("home")}</Link>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
