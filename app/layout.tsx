// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'ADmyBRAND AI Suite',
  description: 'Next-gen AI marketing SaaS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
