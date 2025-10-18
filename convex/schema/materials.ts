import { defineTable } from "convex/server";
import { v } from "convex/values";

export const materials = defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    chapterId: v.id("chapters"),
    storageId: v.id("_storage"),
}).index("by_chapter_id", ["chapterId"])