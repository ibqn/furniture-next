import { footer } from 'data'
import Logo from 'assets/logo.svg'
import Link from 'next/link'

const Footer = () => {
  const { social, categories } = footer

  return (
    <footer className="section pb-0 bg-primary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-300 pb-7 lg:pb-14 mb-14">
          <Link href="/">
            <a className="mb-6 lg:mb-0">
              <Logo className="h-9" />
            </a>
          </Link>

          <div className="flex gap-x-4">
            {social.map(({ icon }, index) => (
              <div
                key={index}
                className="h-12 w-12 text-2xl bg-gray-700 hover:bg-accent transition rounded-full flex justify-center items-center"
              >
                <Link href="#">
                  <a>{icon}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-5 grid-cols-5 mb-10">
          {categories.map((category, index) => {
            const { name, links } = category

            return (
              <div key={index}>
                <h2 className="text-lg font-semibold mb-6">{name}</h2>

                <div className="flex flex-col">
                  {links.map((link, index) => {
                    const { href, name } = link
                    return (
                      <Link key={index} href={href}>
                        <a className="mb-6">{name}</a>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center p-5">
          &copy; FurniShop {new Date().getFullYear()} - All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
