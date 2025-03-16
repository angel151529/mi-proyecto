import { Button } from "@/components/ui/button"
import BaseLayout from "@/components/layout/base-layout"

export default function Home() {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Your App</h1>
        <Button>Click me</Button>
      </div>
    </BaseLayout>
  )
}
