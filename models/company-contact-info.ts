import { list } from "@keystone-6/core";
import { checkbox, text, timestamp, select } from "@keystone-6/core/fields";

export const CompanyContactInfo = list({
  access: {
    operation: {
      query: ({ session }) => !!session,
      create: ({ session }) => !!session.data.isAdmin,
      update: ({ session }) => !!session.data.isAdmin,
      delete: ({ session }) => !!session.data.isAdmin,
    },
  },
  fields: {
    companyName: text({ validation: { isRequired: true } }),
    contactName: text({ validation: { isRequired: true } }),
    contactEmail: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),
    contactPhone: text({ validation: { isRequired: true } }),
    isPrimaryContact: checkbox({ defaultValue: true }),
    country: text({ validation: { isRequired: true } }),
    city: text({ validation: { isRequired: true } }),
    address: text({ validation: { isRequired: true } }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
      db: { updatedAt: true },
    }),
    status: select({
      options: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
      defaultValue: "active",
    }),
  },
});
