
const { BaseFeature } = require('./feature/base/BaseFeature')
const { TestFeature } = require('./feature/test/TestFeature')



const FEATURE_CLASS = {
   test: TestFeature,

}


class Config {

  makeFeature(fn) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(fn) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Bud',
        slug: "bud",
    version: "0.0.1",
    target: "js",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api-sandbox.thisisbud.com/financial/v2",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      account: {
      },

    }
  }


  entity = {
    "account": {
      "fields": [
        {
          "name": "account_type",
          "type": "`$STRING`"
        },
        {
          "name": "balance",
          "type": "`$NUMBER`"
        },
        {
          "name": "currency",
          "type": "`$STRING`"
        },
        {
          "name": "display_name",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "type": "`$STRING`"
        }
      ],
      "name": "account",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/accounts",
              "parts": [
                "accounts"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{id}",
              "parts": [
                "accounts",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

module.exports = {
  config
}

