import { z } from 'zod';

export const applicationSchema = z.object({
  fullName: z.string().min(2, 'Name is too short').max(50, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  techStack: z.array(z.string()).min(1, 'Select at least one framework'),
  teamSize: z.string().min(1, 'Please select your team size'),
  architectureConcern: z.string().min(10, 'Please provide a bit more detail').max(500, 'Keep it concise'),
  linkedin: z.string().url('Invalid URL').optional().or(z.literal('')),
});

export type ApplicationData = z.infer<typeof applicationSchema>;
