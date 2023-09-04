import { Inter } from 'next/font/google'
import githubApi from './api/githubApi'
import { useQuery } from 'react-query'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

interface GithubApiProps {
  full_name: string
  description: string
}

export default function ReactQuery() {
  const api = 'RafaelRF99/repos'

  const { data, isFetching, status, isError } = useQuery<GithubApiProps[]>('GitHub', async () => {
    const res = await axios.get('https://api.github.com/users/RafaelRF99/repos')

    return res.data
  })

  return (
    <div>
      <h1>Consumo API - React Query</h1>
      <div style={{ border: '1px solid #FFF', margin: '10px', padding: '5px' }}>
        <p>{`Ir no "_app", e colocar o "QueryClientProvider"`}</p>
        <p>Criar um service queryClient</p>
      </div>
      <div>
        <p>Status: {status}</p>
        {isFetching && <p>Carregando...</p>}
        {data?.map((rep, i) => {
            return (
                <div key={i}>
                    <p>{rep.full_name}</p>
                    <p>{rep.description}</p>
                </div>
            )
        })}
        {isError && <p>Tente novamente mais tarde!!!</p>}
      </div>
    </div>
  )
}
