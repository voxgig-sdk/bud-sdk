
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { BudSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BudSDK.test()
    equal(null !== testsdk, true)
  })

})
