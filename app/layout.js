import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "QuickCart - GreatStack",
  description: "E-Commerce with Next.js ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider   appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: "#284cadff", // основной цвет
          colorBackground: "#ffffff",
          colorText: "#111",
          colorInputText: "#111",
        },
        elements: {
          card: "shadow-lg rounded-2xl border border-gray-200",
          userButtonPopoverCard: "bg-white shadow-xl rounded-xl border border-gray-100",
          userButtonPopoverFooter: "hidden", // скрыть Development mode
        },
      }}>
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          <Toaster />
          <AppContextProvider>{children}</AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
