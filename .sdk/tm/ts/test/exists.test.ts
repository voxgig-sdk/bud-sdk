
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BudSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BudSDK.test()
    equal(null !== testsdk, true)
  })

})
