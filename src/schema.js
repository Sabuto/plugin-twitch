// http://json-schema.org/learn/getting-started-step-by-step.html

const schema = {
  "type": "object",
  "properties": {
    "clientId": {
      "description": "Client ID",
      "type": "string"
    },
    "accessToken": {
      "description": "Token",
      "type": "string"
    },
  },
  "required": [ "clientId", "token" ]
}

module.exports = schema
