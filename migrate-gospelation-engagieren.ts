
import { defineCliConfig, getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2024-01-01' })

const targetId = 'gospelationEngagierenPage'
const targetType = 'gospelationEngagierenPage'

const migrate = async () => {
    console.log(`Starting migration check for ${targetId}...`)

    // Find the old document
    // We exclude the correct ID to find the "wrong" one (likely a UUID)
    const oldDoc = await client.fetch(`*[_type == "${targetType}" && _id != "${targetId}"][0]`)

    if (!oldDoc) {
        console.log('No old document found to migrate.')
        const newDoc = await client.getDocument(targetId)
        if (newDoc) {
            console.log(`Target document "${targetId}" already exists. No action needed.`)
        } else {
            console.log(`Target document "${targetId}" does not exist yet. It will be created when you edit it in the Studio.`)
        }
        return
    }

    console.log(`Found old document with ID: ${oldDoc._id}`)
    console.log(`Migrating content to ID: "${targetId}"...`)

    // Prepare new document
    // We filter out system fields
    const { _id, _createdAt, _updatedAt, _rev, ...data } = oldDoc

    const newDoc = {
        _id: targetId,
        _type: targetType,
        ...data
    }

    // Create a transaction to safely move the content
    const transaction = client.transaction()
    transaction.createOrReplace(newDoc)
    transaction.delete(oldDoc._id)

    try {
        const res = await transaction.commit()
        console.log('Migration successful!')
        console.log('Old ID deleted:', oldDoc._id)
        // Safer logging to avoid crash if results are unexpected
        if (res.results && res.results.length > 0) {
            console.log('New ID created/updated:', res.results[0].document?._id || targetId)
        } else {
            console.log(`Content migrated to ${targetId}`)
        }
    } catch (err) {
        console.error('Migration failed:', err.message)
    }
}

migrate()
