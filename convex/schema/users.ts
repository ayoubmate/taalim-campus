import {  defineTable } from 'convex/server';
import { v } from 'convex/values';

export const users = defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    externalId: v.string(),
}).index("by_external_id", ["externalId"])
  .index("by_email", ["email"])
  .index("by_first_name_and_last_name", ["firstName", "lastName"]);