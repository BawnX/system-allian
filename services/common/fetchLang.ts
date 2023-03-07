import {} from 'next/'

export default async function FetchLang ({ lang, category }:{lang: string, category: string}) {
  const res = await fetch('/api/lang/auth')

  console.log(await res.json())
}
