import "./globals.css";

export const metadata = {
  title: "泡泡爪印宠物洗护店",
  description: "为猫咪和狗狗提供温和洗护、美容造型、除结护理和皮毛养护。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
