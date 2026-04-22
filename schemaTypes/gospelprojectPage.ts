// schemas/documents/gospelprojectPage.ts
export default {
    name: 'gospelprojectPage',
    title: 'Gospelproject Page',
    type: 'document',
    fields: [
        { name: 'visible', title: 'Visible on website', type: 'boolean', initialValue: true, description: 'Uncheck to hide this page from visitors and the navigation.' },
        { name: 'title', type: 'string' },
        { name: 'heroImage', type: 'cloudinary.asset' },
        { name: 'logo', title: 'Logo', type: 'cloudinary.asset' },
        { name: 'showLogo', title: 'Show Logo', type: 'boolean', initialValue: true, description: 'Toggle to show or hide the logo on the page.' },
        { name: 'subtitle', type: 'string' },
        { name: 'body', type: 'array', of: [{ type: 'block' }], title: 'Content' },
        { name: 'callToAction', type: 'callToAction' },
    ]
}