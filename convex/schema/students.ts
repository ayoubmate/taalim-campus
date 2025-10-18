import {  defineTable } from 'convex/server';
import { v } from 'convex/values';

export const students = defineTable({
    userId: v.id("users"),
}).index("by_user_id", ["userId"])