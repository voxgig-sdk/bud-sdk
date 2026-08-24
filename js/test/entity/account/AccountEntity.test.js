
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { BudSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('AccountEntity', async () => {

  test('instance', async () => {
    const testsdk = BudSDK.test()
    const ent = testsdk.Account()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let account_ref01_data = Object.values(setup.data.existing.account)[0]

    // LIST
    const account_ref01_ent = client.Account()
    const account_ref01_match = {}

    const account_ref01_list = (await account_ref01_ent.list(account_ref01_match)).map((e) => e.data())


    // LOAD
    const account_ref01_match_dt0 = {}
    account_ref01_match_dt0.id = account_ref01_data.id
    const account_ref01_data_dt0 = (await account_ref01_ent.load(account_ref01_match_dt0)).data()
    assert(account_ref01_data_dt0.id === account_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/account/AccountTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BudSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BUD_TEST_ACCOUNT_ENTID': idmap,
    'BUD_TEST_LIVE': 'FALSE',
    'BUD_TEST_EXPLAIN': 'FALSE',
    'BUD_APIKEY': 'NONE',
  })

  idmap = env['BUD_TEST_ACCOUNT_ENTID']

  if ('TRUE' === env.BUD_TEST_LIVE) {
    client = new BudSDK(merge([
      {
        apikey: env.BUD_APIKEY,
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BUD_TEST_EXPLAIN,
    now: Date.now(),
  }

  return setup
}
  
