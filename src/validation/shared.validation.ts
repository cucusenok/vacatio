import { z } from 'zod';

export const StringArraySchema = z.array(z.string());
