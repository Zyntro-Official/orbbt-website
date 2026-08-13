/*
Home Page
*/

"use client"

// Imports
import SectionsPage from "@/app/(sections)/page"
import SectionsLayout from "@/app/(sections)/layout"

export default function Home() {
  return (
    <SectionsLayout>
      <SectionsPage />
    </SectionsLayout>
  )
}
