"use client";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function GoBackButton() {
  const locale = useLocale();

  return (
    <div className="my-5">
      <Link href={`/${locale}`} className="underline text-xs uppercase">
        Go Back
      </Link>
    </div>
  );
}
