import { z } from 'zod';

export const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'タイトルを入力してください' })
    .max(100, { message: '100文字以内で入力してください' }),
  description: z
    .string()
    .max(1000, { message: '1000文字以内で入力してください' }),
});

export type FormSchema = z.infer<typeof formSchema>;
