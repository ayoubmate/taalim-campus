import { defineTable } from "convex/server";
import { v } from "convex/values";

export const chapters = defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    startdate: v.number(),
    enddate: v.number(),
    courseId: v.id("courses"),
}).index("by_course_id", ["courseId"])
  .index("by_title", ["title"]);

