import { type SchemaTypeDefinition } from 'sanity'
import { user } from './user'
import { projects } from './projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, projects],
}
