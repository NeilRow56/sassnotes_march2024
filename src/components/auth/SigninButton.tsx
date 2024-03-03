'use client'

import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

const SigninButton = () => {
  const { data: session } = useSession()

  return (
    <div className="flex items-center gap-1">
      {session && session.user ? (
        <>
          <p className="text-xl text-primary">
            Logged in -
            <Link href={'/profile'}>{`${session.user.firstName} `}</Link>
          </p>

          <Link
            className="pl-12 text-xl text-sky-500 transition-colors hover:text-sky-600"
            href={'/api/auth/signout'}
          >
            Sign Out
          </Link>
        </>
      ) : (
        <div className="flex items-center gap-4">
          <Button onClick={() => signIn()}>Sign In</Button>
          <Button asChild variant="outline">
            <Link href={'/auth/sign-up'}>Sign Up</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export default SigninButton
