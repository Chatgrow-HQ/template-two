import "./site.css";
import { urbanist } from "@/lib/font";

export const metadata = {
  title: "Northstar Immigration | Clear pathways forward",
  description: "A contemporary immigration consultancy website template.",
};

export default function RootLayout({ children }) {
  return <html lang="en" className={urbanist.variable}><body>{children}</body></html>;
}
