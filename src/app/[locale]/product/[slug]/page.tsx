import { useTranslations } from "next-intl";
import GoBackButton from "../../components/Button/GoBackButton";

export default function Product() {
  const t = useTranslations("ProductPage");
  return (
    <div>
      <div>
        <GoBackButton />
        product page
      </div>
      <div>
        <p>{t("description")}</p>
      </div>
    </div>
  );
}
