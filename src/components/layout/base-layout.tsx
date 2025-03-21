import React from 'react'

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-6">{children}</main>
    </div>
  )
}
