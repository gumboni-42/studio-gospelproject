import { defineField, defineType } from 'sanity'
import { MailchimpTagsInput } from '../components/MailchimpTagsInput'
export const gospelprojectAnmeldungPage = defineType({
    name: 'gospelprojectAnmeldungPage',
    title: 'Gospelproject Anmeldung Page',
    type: 'document',
    fields: [
        defineField({
            name: 'visible',
            title: 'Visible on website',
            type: 'boolean',
            initialValue: true,
            description: 'Uncheck to hide this page from visitors and the navigation.',
        }),
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'cloudinary.asset',
            options: { hotspot: true },
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'cloudinary.asset',
        }),
        defineField({
            name: 'showLogo',
            title: 'Show Logo',
            type: 'boolean',
            initialValue: true,
            description: 'Toggle to show or hide the logo on the page.',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Main content with formatting support.',
        }),
        defineField({
            name: 'submissionMethod',
            title: 'Submission Method',
            type: 'string',
            options: {
                list: [
                    { title: 'Only Mailchimp', value: 'mailchimp' },
                    { title: 'Only Google Sheets', value: 'googleSheets' },
                    { title: 'Both', value: 'both' }
                ],
                layout: 'radio'
            },
            initialValue: 'googleSheets',
            description: 'Where should the form submissions be sent?',
        }),
        defineField({
            name: 'mailchimpAudienceId',
            title: 'Mailchimp Audience ID',
            type: 'string',
            description: 'Optional. Override the default audience ID from environment variables.',
        }),
        defineField({
            name: 'mailchimpTags',
            title: 'Mailchimp Tags',
            type: 'array',
            of: [{
                type: 'string',
                components: {
                    input: MailchimpTagsInput
                }
            }],
            description: 'Tags to apply to the subscriber in Mailchimp.',
        }),
        defineField({
            name: 'signupLimit',
            title: 'Signup Limit',
            type: 'number',
            description: 'Maximum number of signups allowed. Leave blank for no limit.',
        }),
        defineField({
            name: 'signupCount',
            title: 'Signup Count',
            type: 'number',
            readOnly: true,
            initialValue: 0,
            description: 'Current number of signups (System managed)',
        }),
        defineField({
            name: 'ausgebuchtTitle',
            title: 'Ausgebucht Title',
            type: 'string',
            initialValue: 'Ausgebucht',
        }),
        defineField({
            name: 'ausgebuchtText',
            title: 'Ausgebucht Text',
            type: 'text',
            initialValue: 'Leider sind für dieses Projekt bereits alle Plätze belegt. Wir freuen uns, wenn du beim nächsten Mal dabei bist!',
        }),
        defineField({
            name: 'signupFormText',
            title: 'Signup Form Instruction Text',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Instruction text shown above the signup form. Supports links and formatting.',
        }),
        defineField({
            name: 'callToAction',
            title: 'Call to Action',
            type: 'callToAction',
        }),
    ],
})
