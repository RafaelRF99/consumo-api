import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
    baseURL: 'https://api.github.com/users/'
})

export default function GithubApi<T = unknown>(url: string) {
    const [repositorio, setRepositorio] = useState<T | null>(null)
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        api.get(url)
    .then(res => setRepositorio(res.data))
    .finally(() => {
        setCarregando(false)
    })
    },[])

    return { repositorio, carregando }
}