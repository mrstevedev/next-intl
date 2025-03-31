"use client";
import React, { useTransition } from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import classnames from "classnames";
import { useParams, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function LocaleSwitcher() {
  const localeActive = useLocale();
  const slug = useParams().slug;

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSetLanguage = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}/product/${slug}`);
    });
  };
  return (
    <Select.Root
      onValueChange={(locale) => handleSetLanguage(locale)}
      disabled={isPending}
      value={localeActive}
    >
      <Select.Trigger
        className="SelectTrigger"
        aria-label="Locale"
        style={{ gap: 0 }}
      >
        <Select.Value />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <SelectItem className="SelectItem" value="en">
                <span className="fi fi-um"></span> English
              </SelectItem>
              <SelectItem className="SelectItem" value="es">
                <span className="fi fi-mx"></span> Español
              </SelectItem>
              <SelectItem className="SelectItem" value="se">
                <span className="fi fi-se"></span> Sweden
              </SelectItem>
              <SelectItem className="SelectItem" value="fr">
                <span className="fi fi-nl"></span> Français
              </SelectItem>
              <SelectItem className="SelectItem" value="de">
                <span className="fi fi-de"></span> Deutsch
              </SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

// const SelectItem = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => {
//     return (
//       <Select.Item
//         className={classnames("SelectItem", className)}
//         {...props}
//         ref={forwardedRef}
//       >
//         <Select.ItemText>{children}</Select.ItemText>
//         <Select.ItemIndicator className="SelectItemIndicator">
//           <CheckIcon />
//         </Select.ItemIndicator>
//       </Select.Item>
//     );
//   }
// );

const SelectItem = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <Select.Item
      value="en"
      className={classnames("SelectItem", className)}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
};
