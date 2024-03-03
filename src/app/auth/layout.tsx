import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex h-screen  flex-col items-center justify-center bg-slate-100 
          
          text-center  dark:bg-slate-800"
    >
      <div className="m-10 flex max-w-sm  justify-center">
        <Button
          size="sm"
          variant="outline"
          asChild
          className="text-muted-foreground"
        >
          <Link href="/">Home page</Link>
        </Button>
      </div>
      {children}
    </div>
  )
}

export default AuthLayout
