import "./site.css";

export const metadata = {
  title: "KAS Immigration Services | Canadian Immigration Consulting",
  description: "Personalized Canadian immigration guidance for permanent residence, study, work, family sponsorship, visitors, and business immigration.",
  icons: {
    icon: "/kas-logo.jpg",
    shortcut: "/kas-logo.jpg",
    apple: "/kas-logo.jpg",
  },
  openGraph: {
    title: "KAS Immigration Services",
    description: "Your Canadian journey starts here.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAS Immigration Services",
    description: "Your Canadian journey starts here.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
