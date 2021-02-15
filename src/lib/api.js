import axios from "axios"

export function search(query) {
  if (!query) return null
  return axios({
    method: "get",
    url: `/.netlify/functions/search?query=${query}`,
  })
}
