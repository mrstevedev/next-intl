"use client";
import { Flex, Text } from "@radix-ui/themes";
import "./globals.css";

export default function NotFound() {
  return (
    <html>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Flex direction="column" gap="2">
            <Text className="mt-10 uppercase text-sm">404 Page Not Found</Text>
          </Flex>
        </main>
      </body>
    </html>
  );
}
