import Script from "next/script";
import "./site.css";

export const metadata = {
  title: "KAS Immigration Services | Canadian Immigration Consulting",
  description:
    "Personalized Canadian immigration guidance for permanent residence, study, work, family sponsorship, visitors, and business immigration.",
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
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="chatgrow-config" strategy="beforeInteractive">
          {`
            window.Chatgrow = window.Chatgrow || function() {
              (window.Chatgrow.q = window.Chatgrow.q || []).push(arguments);
            };

            window.chatgrowConfig = {
              agentId: "cmpv4lxbu004tnz11x6yaa4fq",
            };
          `}
        </Script>
        <Script
          src="https://staging.widget.chatgrow.co/chatgrow-widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
