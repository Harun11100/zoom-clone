import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import '@stream-io/video-react-sdk/dist/css/styles.css';
import { Toaster } from "@/components/ui/toaster";

import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JOOM",
  description: "Video calling application",
  icons:{
    icon:'/icons/logo/svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ClerkProvider 
    appearance={{
      layout:{
        logoImageUrl:'/icons/yoom-logo.svg',
        socialButtonsVariant:'iconButton'
      },
      variables:{
        
        colorText:'#ffff',
        colorPrimary:'#0E78f9',
        colorBackground:'#1c1f2e',
        colorInputBackground:'#252a41',
         colorInputText:'#ffff'

      }
    }}>

      
      <body className={`${inter.className} bg-dark-2`}>
        {children}
       <Toaster/>
      </body>
   
    </ClerkProvider>
    </html>
    
  );
}
