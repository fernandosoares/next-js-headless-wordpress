export default async (req, res) => {

  const { query: { slug } } = req

  const GET_PAGE_BY_SLUG = `
    query GET_PAGE_BY_SLUG($id: ID!) {
        page(id: $id, idType: URI) {
          id
          title
          content
        }
      } 
    `

  const data = await fetch(process.env.BACKEND_API_URL, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      query: GET_PAGE_BY_SLUG,
      variables: {
        id: slug
      }
    })
  })

  const jsonResponse = await data.json()

  console.log(jsonResponse)

  res.json(jsonResponse.data)
}