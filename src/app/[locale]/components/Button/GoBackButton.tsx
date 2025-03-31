"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();

  const handleNavigateBack = () => {
    router.back();
  };
  return (
    <div className="my-5">
      <Link
        href="#"
        onClick={() => handleNavigateBack()}
        className="underline text-xs uppercase"
      >
        Go Back
      </Link>
    </div>
  );
}
