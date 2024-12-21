import './globals.css'
import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import {ReactNode} from "react";
import metadatalogo from "@/assets/chuyentinorz.png";
import { url } from 'inspector';

const lexendDeca = Lexend_Deca({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChuyenTinORZ',
  description: 'ChuyenTinORZ - Learn, Inspire & Grow',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://chuyentinorz.is-a.dev',
    siteName: 'ChuyenTinORZ',
    images: [
      {
        url: metadatalogo.src,
        width: 256,
        height: 256,
        alt: 'ChuyenTinORZ Logo',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexendDeca.className}>{children}</body>
    </html>
  )
}
