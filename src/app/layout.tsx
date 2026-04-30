import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APEX Fitness | Best Gym in Jamshedpur - Premium Fitness Center",
  description: "Join APEX Fitness - Jamshedpur's leading gym with world-class facilities, expert trainers, and proven transformation results. Start your fitness journey today!",
  keywords: "gym in Jamshedpur, best gym Jamshedpur, fitness center Jamshedpur, personal training Jamshedpur, weight loss Jamshedpur, muscle building, CrossFit Jamshedpur",
  openGraph: {
    title: "APEX Fitness | Best Gym in Jamshedpur",
    description: "Transform your body, transform your life at Jamshedpur's premium fitness destination",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
