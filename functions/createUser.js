const axios = require("axios")
const fetch = require("node-fetch")

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
    console.log(payload)
  } catch (error) {
    return {
      statusCode: 400,
      body: "",
    }
  }

  const token = Buffer.from(
    `${process.env.CAREACADEMY_USERNAME}:${process.env.CAREACADEMY_PASSWORD}`,
    "utf8"
  ).toString("base64")

  axios({
    method: "post",
    url: "https://go.careacademy.com/api/v1/practitioners",
    data: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${token}`,
    },
  })
    .then(res => {
      console.log(res)
      console.log("hits response")
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      }
    })
    .catch(err => {
      console.log(err.response.status)
      console.log(err.response.statusText)
      console.log(err.response.headers)
      console.log("hits error")
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false }),
      }
    })

  // try {
  //   const review = await fetch(
  //     `https://go.careacademy.com/api/v1/practitioners`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     }
  //   )
  //
  //   const body = await review.json()
  //
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(body),
  //   }
  // } catch (error) {
  //   console.log(error)
  //
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({
  //       message: "Successful",
  //     }),
  //   }
  // }
}
