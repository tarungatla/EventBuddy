import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-26">
                <Image src="/assets/images/logo.svg" width={40} height={1} alt=""/>               
            </Link>

            {/* <SignedIn>
                <nav className="md:flex-between">
                    <NavItems/>
                </nav>
            </SignedIn> */}
            <div className="flex w-32 justify-end gap-3">   
                <SignedIn>
                    <UserButton afterSignOutUrl='/'/>
                    <NavItems/>
                </SignedIn>
                <SignedOut>
                    <Button asChild className='rounded-full' size='lg'>
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header