import { list } from "@keystone-6/core";
import { text, timestamp, image } from "@keystone-6/core/fields";

export const TeamMember = list({
  access: {
    operation: {
      query: ({ session }) => !!session,
      create: ({ session }) => !!session.data.isAdmin,
      update: ({ session }) => !!session.data.isAdmin,
      delete: ({ session }) => !!session.data.isAdmin,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    position: text({ validation: { isRequired: true } }),
    bio: text(),
    image: image({ storage: "s3_image_storage" }),
    createdAt: timestamp({ defaultValue: { kind: "now" } }),
  },
});
