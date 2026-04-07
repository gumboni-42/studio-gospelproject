/**
 * Migration script: Copy content from old "gallery" document to new "impressionenPage" singleton.
 * 
 * Usage: node migrate-gallery.mjs
 */

import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'jynb9blr',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN,
});

async function migrate() {
    // 1. Fetch the old gallery document
    const oldDoc = await client.fetch(`*[_type == "gallery"][0]`);

    if (!oldDoc) {
        console.error('❌ No gallery document found. Nothing to migrate.');
        process.exit(1);
    }

    console.log(`✅ Found old gallery document: ${oldDoc._id}`);
    console.log(`   Title: ${oldDoc.title}`);
    console.log(`   Years: ${oldDoc.years?.length ?? 0}`);
    console.log(`   Videos: ${oldDoc.videos?.length ?? 0}`);

    // 2. Check if the new singleton already exists
    const existing = await client.fetch(`*[_id == "impressionenPage"][0]`);

    // 3. Build the new document from old data
    const { _id, _rev, _createdAt, _updatedAt, _type, ...content } = oldDoc;

    const newDoc = {
        _id: 'impressionenPage',
        _type: 'impressionenPage',
        ...content,
    };

    if (existing) {
        console.log('\n⚠️  impressionenPage singleton already exists. Overwriting...');
    }

    // 4. Create or replace the singleton
    await client.createOrReplace(newDoc);
    console.log('\n✅ Successfully migrated content to impressionenPage singleton!');

    // 5. Optionally delete old document
    console.log(`\nℹ️  Old gallery document (${oldDoc._id}) still exists.`);
    console.log(`   To delete it, run:`);
    console.log(`   npx sanity documents delete ${oldDoc._id} --dataset production`);
}

migrate().catch((err) => {
    console.error('Migration failed:', err);
    process.exit(1);
});
