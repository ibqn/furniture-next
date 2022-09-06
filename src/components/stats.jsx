import clsx from 'clsx'
import { stats } from 'data'

const Stats = () => {
  return (
    <div className="bg-accent rounded-[20px] p-12">
      <div className="flex flex-wrap gap-y-8">
        {stats.map(({ value, text }, index) => (
          <div
            className={clsx(
              'min-h-[70px] w-3/6',
              'flex flex-col justify-center odd:border-r',
              'lg:flex-1 lg:border-r lg:last:border-none'
            )}
            key={index}
          >
            <div className="text-2xl font-semibold lg:text-4xl">{value}</div>
            <div className="text-base font-light max-w-[110px] mx-auto lg:text-xl">
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
