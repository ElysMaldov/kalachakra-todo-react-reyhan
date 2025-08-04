import z from "zod";

export const Todo = z.object({
  id: z.number(),
  title: z.string().min(1),
  completed: z.boolean()
});

export type TodoType = z.infer<typeof Todo>;
