import Card from '@components/atoms/card'
import * as typePage from '@services/common/typePage'

export default function Page ({ params }: typePage.PageProps) {
  const steps = [
    {
      title: 'user',
      img: '',
      isCompleted: false,
      isCurrent: true,
      inputs: []
    },
    {
      title: 'details',
      img: '',
      isCompleted: false,
      isCurrent: false,
      inputs: []
    },
    {
      title: 'details',
      img: '',
      isCompleted: false,
      isCurrent: false,
      inputs: []
    }
  ]
  return (
    <main className='flex h-144 items-center justify-center'>
      <Card isSmall={false}>
        <div className='mx-4 py-4 flex justify-center items-center'>
          {
          steps.map((step, index) => {
            return (
              <div className='w-full flex items-around ' key={index}>
                <div className='relative flex flex-col items-center text-teal-600'>
                  <div className={
                    `rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 
                    ${step.isCurrent ? 'bg-green-600 text-white font-bold border border-green-600 ' : ''}`
                    }
                  >
                    <span>
                      {step.isCompleted
                        ? (<span className='text-white font-bold text-xl'>&#10003;</span>)
                        : index + 1}
                    </span>
                  </div>

                  <div
                    className={
                      `absolute top-0  text-center mt-16 w-32 text-xs font-medium uppercase 
                      ${step.isCurrent ? 'text-gray-900' : 'text-gray-400'}`
                    }
                  >
                    {step.title}
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>

      </Card>
    </main>
  )
}
