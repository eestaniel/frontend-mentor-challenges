import {string, object} from 'zod';

export const formSchema = object({
    email: string()
      .min(1, 'Email is required')
      .email('Valid email required')
})
