import { z } from 'zod';

// Schema de validação do Zod
export const envSchema = z.object({
    // Aqui estamos definindo o schema de validação para as variáveis de ambiente
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string(),
    PORT: z.coerce.number().optional().default(3333),
})

export type Env = z.infer<typeof envSchema>; // Aqui estamos inferindo o tipo do schema de validação