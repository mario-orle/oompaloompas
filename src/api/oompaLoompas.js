import { persistance } from "../services/persistance";

const REFRESH_TIME = 24 * 60 * 60 * 1000;

let page = persistance.get('lastPage') ?? 1;

export const getOompaLoompas = async () => {
  const currentTime = new Date()
  return await fetch(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`)
    .then(response => {
      localStorage.nextCallTime = currentTime.getTime() + REFRESH_TIME
      return response.json()
    })
    .catch(error => console.log(error))
}

export const getNextPage = async() => {
  page++;
  return getOompaLoompas();
}