// schemas/documents/gospelprojectPage.ts
export default {
    name: 'gospelprojectPage',
    title: 'Gospelproject Page',
    type: 'document',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'heroImage', type: 'cloudinary.asset' },
        { name: 'logo', title: 'Logo', type: 'cloudinary.asset' },
        { name: 'subtitle', type: 'string' },
        { name: 'body', type: 'array', of: [{ type: 'block' }], title: 'Content' },
        { name: 'callToAction', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'url', type: 'url' }] },
    ]
}