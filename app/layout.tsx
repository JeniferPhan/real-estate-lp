import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://senturiavietnam.com'),
  title: {
    default: "Senturia Residence | Căn Hộ Cao Cấp Thượng Lưu",
    template: "%s | Senturia Residence"
  },
  description: "Senturia Residence - Dự án căn hộ cao cấp tại trung tâm Quận 1. Vị trí đắc địa, tiện ích 5 sao, pháp lý minh bạch. Đăng ký nhận bảng giá và tham quan nhà mẫu ngay!",
  keywords: ["Senturia Residence", "căn hộ Quận 1", "chung cư cao cấp TP.HCM", "mua nhà Quận 1", "đầu tư bất động sản 2026"],
  authors: [{ name: "Senturia Residence Team" }],
  creator: "Senturia Residence",
  publisher: "Senturia Residence",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Senturia Residence | Căn Hộ Cao Cấp Quận 1 - Đẳng Cấp Thượng Lưu",
    description: "Khám phá không gian sống 5 sao tại Senturia Residence. Nhận ưu đãi chiết khấu trực tiếp từ chủ đầu tư.",
    url: 'https://senturiavietnam.com',
    siteName: 'Senturia Residence',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Senturia Residence - Phối cảnh dự án',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senturia Residence | Căn Hộ Cao Cấp Quận 1",
    description: "Cơ hội sở hữu căn hộ mơ ước tại trung tâm thành phố.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-id',
  },
  icons: {
    icon: '../images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
