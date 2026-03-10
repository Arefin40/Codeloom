import { v } from "convex/values";
import { defineTable } from "convex/server";

export const courses = defineTable({
   id: v.string(),
   tittle: v.string(),
   price: v.number(),
   courseCode: v.string(),
   category: v.string(),
   tags: v.array(v.string()),
   description: v.string(),
   status: v.union(v.literal("draft"), v.literal("pending"), v.literal("published")),
   instructors: v.array(v.id("users")),
   enrolledStudents: v.optional(v.number())
}).index("id", ["id"]);

export const enrollments = defineTable({
   courseId: v.id("courses"),
   studentId: v.id("users"),
   enrollmentDate: v.string(),
   completionDate: v.string()
}).index("studentId_courseId", ["studentId", "courseId"]);
