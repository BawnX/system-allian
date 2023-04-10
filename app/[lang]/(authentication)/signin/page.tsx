import Card from '@components/atoms/card'
import LoginForm from '@components/molecules/loginForm'

export default function Page () {
  return (
    <>
      <main className='flex h-144 items-center justify-center'>
        <Card isSmall>
          <LoginForm />
        </Card>
      </main>
    </>
  )
}
