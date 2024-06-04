import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const surveyPartEnum = pgEnum("surveyPartEnum", [
  "Extroversion and Experience",
  "Direction",
  "Emotion",
  "Honesty and Trust",
  "Self and Security",
]);

export type QuestionType = typeof questions.$inferSelect;

export const questions = pgTable("questions", {
  id: uuid("id").defaultRandom().primaryKey(),
  question: varchar("question", { length: 255 }).notNull(),
  partTitle: surveyPartEnum("partTitle").notNull(),
  part: integer("part").notNull(),
});

export const personalities = pgTable("personalities", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  dateAdded: timestamp("date").defaultNow(),
});

export type PersonType = typeof personalities.$inferSelect;

export const answers = pgTable("answers", {
  id: uuid("id").defaultRandom().primaryKey(),
  personId: uuid("person_id").references(() => personalities.id),
  questionId: uuid("question_id").references(() => questions.id),
  responseValue: integer("response").notNull(),
  responseDate: timestamp("response_date").defaultNow(),
});

export type AnswerType = typeof answers.$inferSelect;

