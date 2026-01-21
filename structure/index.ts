import type { StructureBuilder } from 'sanity/structure'

// Defult structure to list all document types
export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Content')
        .items(S.documentTypeListItems())
