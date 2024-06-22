import React from 'react'
import { Inter } from "next/font/google";
import Header from './_components/Header';

const inter = Inter({ subsets: ["latin"] });
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Header/>
        <div className='mx-5 md:mx-20 lg:mx-36'>
        {children}
        </div>
       
    </div>
  
    
  );
}

