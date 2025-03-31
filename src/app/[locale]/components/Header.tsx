import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Navigation");
  return (
    <header className="pt-2 pb-2">
      <nav className="flex justify-between items-center">
        <Link href="/">{t("home")}</Link>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
