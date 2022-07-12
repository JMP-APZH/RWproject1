import {
  contact2S,
  contact2,
  createContact2,
  updateContact2,
  deleteContact2,
} from './contact2S'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contact2S', () => {
  scenario('returns all contact2S', async (scenario) => {
    const result = await contact2S()

    expect(result.length).toEqual(Object.keys(scenario.contact2).length)
  })

  scenario('returns a single contact2', async (scenario) => {
    const result = await contact2({ id: scenario.contact2.one.id })

    expect(result).toEqual(scenario.contact2.one)
  })

  scenario('creates a contact2', async () => {
    const result = await createContact2({
      input: { name: 'String', email: 'String', message: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.message).toEqual('String')
  })

  scenario('updates a contact2', async (scenario) => {
    const original = await contact2({ id: scenario.contact2.one.id })
    const result = await updateContact2({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a contact2', async (scenario) => {
    const original = await deleteContact2({ id: scenario.contact2.one.id })
    const result = await contact2({ id: original.id })

    expect(result).toEqual(null)
  })
})
