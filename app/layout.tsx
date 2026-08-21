import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "Ruiqi Zhang Art",
      template: "%s — Ruiqi Zhang Art",
    },
    description:
      "The portfolio of London-based visual artist Ruiqi Zhang, working across moving image, staged photography and installation.",
    openGraph: {
      title: "Ruiqi Zhang Art",
      description: "Moving image, staged photography and installation by Ruiqi Zhang.",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Ruiqi Zhang Art portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ruiqi Zhang Art",
      description: "Moving image, staged photography and installation by Ruiqi Zhang.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
