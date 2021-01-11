/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable require-await */
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  }
}
