import "./site.css";

export const metadata = {
  title: "Sky Immigration | Your Path to Canada",
  description: "Clear immigration guidance for studying, working, visiting, reuniting with family, or building a future in Canada.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
