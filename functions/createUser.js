const axios = require("axios")
const {
  CAREACADEMY_PASSWORD,
  CAREACADEMY_USERNAME,
  CAREACADEMY_ENDPOINT,
} = process.env

exports.handler = async function (event, context, callback) {
  if (event.httpMethod !== "POST" || !event.body) {
    return {
      statusCode: 400,
      body: "",
    }
  }

  let payload

  try {
    payload = JSON.parse(event.body)
  } catch (error) {
    return {
      statusCode: 400,
      body: "",
    }
  }

  const token = Buffer.from(
    `${CAREACADEMY_USERNAME}:${CAREACADEMY_PASSWORD}`,
    "utf8"
  ).toString("base64")

  const request = await axios({
    method: "post",
    url: `${CAREACADEMY_ENDPOINT}/v1/practitioners`,
    data: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${token}`,
    },
  })
    .then(res => {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Success" }),
      }
    })
    .catch(err => {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: err.response.statusText }),
      }
    })

  return request
}
