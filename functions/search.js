const contentful = require("contentful")
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

const response = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body),
})

exports.handler = async function (event) {
  const { query } = event.queryStringParameters
  if (event.httpMethod !== "GET") {
    return response(405, {
      message: "Method not allowed.",
    })
  }

  if (!query) {
    return response(400, {
      message: "Search Query not specified.",
    })
  }

  const allowedTypes = ["blogPost", "interview", "faq"]
  const results = await client
    .getEntries({
      query: query,
    })
    .then(entries => {
      const items = entries.items
        .filter(item => allowedTypes.includes(item.sys.contentType.sys.id))
        .map(item => ({
          heroImage: {
            url: item.fields.heroImage
              ? item.fields.heroImage.fields.file.url
              : null,
            alt: item.fields.heroImage
              ? item.fields.heroImage.fields.description
              : null,
          },
          description: item.fields.description,
          title: item.fields.title,
          slug: item.fields.slug,
          type: item.sys.contentType.sys.id,
          description: item.fields.description,
          tags: item.fields.tags,
        }))

      return response(200, {
        query: query,
        total: items.length,
        items: items,
      })
    })
    .catch(error => {
      console.log(error)
      return response(400, {
        query: query,
        items: [],
        total: 0,
      })
    })

  return results
}
