'use client'

import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { UserNav } from '../dashboard/UserNav'

const SigninButton = () => {
  const { data: session } = useSession()

  return (
    <div className="flex items-center gap-1">
      {session && session.user ? (
        <>
          <UserNav
            name={session.user.firstName}
            email={session.user.email}
            imageUrl={session.user.imageUrl}
          />
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
