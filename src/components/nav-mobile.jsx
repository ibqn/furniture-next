import clsx from 'clsx'
import { navigation } from 'data'
import Link from 'next/link'

const NavMobile = (props) => {
  return (
    <div
      className={clsx(
        { 'left-0': props.open },
        { '-left-full': !props.open },
        'md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all'
      )}
    >
      <nav className="bg-white shadow-2xl w-full h-full">
        <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
          {navigation.map((item, index) => {
            const { href, name } = item
            return (
              <li key={index}>
                <Link href={href}>
                  <a
                    onClick={() => props.setMobileNav(false)}
                    className="hover:border-b hover:border-primary transition-all text-xl font-medium capitalize"
                  >
                    {name}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default NavMobile
