export const getOompaLoompaById = async id => {
  return await fetch(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`)
    .then(response => response.json())
    .catch(error => console.log(error))
}
