import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [],
}
import { defineField, defineType } from "sanity";
import { UserIcon } from "lucide-react";

export const user = defineType({
  name: "user",
  title: "User",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "userId",
      type: "string",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "url",
    })
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});