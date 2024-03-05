import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from 'sonner'
import { Providers } from '@/components/providers/provider'
import { Navbar } from '@/components/Navbar'

import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { db } from '@/lib/db'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const revalidate = 0

export const dynamic = 'force-dynamic'

async function getData(userId: string) {
  if (userId) {
    const data = await db.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        colorScheme: true,
      },
    })
    return data
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  const user = session?.user
  const data = await getData(user?.id as string)

  return (
    <Providers>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={`${inter.className} ${data?.colorScheme ?? 'theme-orange'}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  )
}
