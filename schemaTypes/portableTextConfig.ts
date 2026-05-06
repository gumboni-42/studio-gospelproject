export const portableTextConfig = {
    type: 'block',
    marks: {
        annotations: [
            {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                    {
                        name: 'href',
                        type: 'url',
                        title: 'URL',
                        validation: (rule: any) => rule.uri({
                            allowRelative: true,
                            scheme: ['http', 'https', 'mailto', 'tel'],
                        }),
                    },
                    {
                        title: 'Open in new tab',
                        name: 'blank',
                        type: 'boolean',
                        initialValue: false,
                    },
                ],
            },
        ],
    },
};
