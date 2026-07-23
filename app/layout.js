import "./globals.css";

export const metadata = {
  title: "Esti Smit Biokinetics | Move Better, Feel Stronger, Live Well",
  description:
    "Personalised, evidence-based Biokinetics care in Paarl. Move beyond pain, recover from injury, and get back to the life you love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
