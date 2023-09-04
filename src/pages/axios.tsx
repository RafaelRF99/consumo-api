import { Inter } from 'next/font/google'
import GithubApi from './api/githubApi'

const inter = Inter({ subsets: ['latin'] })

interface GithubApiProps {
  full_name: string
  description: string
}

export default function Axios() {
  const api = 'RafaelRF99/repos'
  const { repositorio, carregando } = GithubApi<GithubApiProps[]>(api)

  return (
    <div>
      <h1>Consumo API</h1>
      {carregando && <p>Carregando...</p>}
      {repositorio?.map((rep, i) => {
        return (
          <div key={i}>
              <p>{rep.full_name}</p>
              <p>{rep.description}</p>
          </div>
        )
      })}
    </div>
  )
}
