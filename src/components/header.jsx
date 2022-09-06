import Logo from 'assets/logo.svg'

import { CgMenuRight, CgClose } from 'react-icons/cg'

import { navigation } from 'data'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import NavMobile from 'components/nav-mobile'

const fullConfig = resolveConfig(tailwindConfig)
const md = parseInt(fullConfig.theme.screens.md, 10)

const Header = () => {
  const [bg, setBg] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const showBg = window.scrollY > 50
      setBg(showBg)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })

  useEffect(() => {
    const onResize = () => {
      const isNotMobileView = window.innerWidth > md

      if (isNotMobileView) {
        setMobileNav(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  })

  return (
    <header
      className={clsx(
        { 'bg-primary py-4 lg:py-6': bg, 'bg-none': !bg },
        'fixed left-0 w-full py-8 z-10 transition-all duration-200'
      )}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <Logo className="h-6 lg:h-8" />
            </a>
          </Link>

          <button
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </button>

          <nav className="md:flex hidden">
            <ul className="flex gap-x-12">
              {navigation.map((item, index) => {
                const { href, name } = item
                return (
                  <li key={index}>
                    <Link href={href}>
                      <a className="capitalize text-white hover:border-b transition-all">
                        {name}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <NavMobile setMobileNav={setMobileNav} open={mobileNav} />
        </div>
      </div>
    </header>
  )
}

export default Header
