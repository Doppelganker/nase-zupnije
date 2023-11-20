'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem
} from '@nextui-org/react'
import { Inter } from 'next/font/google'
import Calendar from 'react-calendar'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='light'>
      <body className={inter.className}>
        <Providers>
          <header className='font-bold text-center m-8 text-4xl'>Naše župnije</header>
          <Navbar>
            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
              <NavbarItem>
                <Link>Domov</Link>
              </NavbarItem>
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className='p-0 bg-transparent data-[hovre=true]:bg-transparent'
                      radius='sm'
                      variant='light'
                    >
                      Sodelovanje v župniji
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu>
                  <DropdownItem key='mladi'>Mladi</DropdownItem>
                  <DropdownItem key='pevci'>Pevci</DropdownItem>
                  <DropdownItem key='bralci'>Bralci</DropdownItem>
                  <DropdownItem key='ministranti'>Ministranti</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavbarItem>
                <Link>Župnije</Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          <div className='flex flex-row'>
            {children}
            <aside className='flex flex-col w-56'>
              <Link>Šmarski zvonček</Link>
              <Link>SG zvonček</Link>
              <Link>KV zvonček</Link>
              <Link>ZI zvonček</Link>
              <Calendar />
            </aside>
          </div>
          <footer>Footer</footer>
        </Providers>
      </body>
    </html>
  )
}
