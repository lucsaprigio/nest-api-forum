import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'

// Reune todas as configurações
@Module({
  // Aqui vamos colocar outro modulos que queremos importar
  imports: [ConfigModule.forRoot({
    validate: env => envSchema.parse(env),
    isGlobal: true // Global module, que pode ser acessado em todos os modulos da aplicação
  }),
    AuthModule
  ],
  controllers: [CreateAccountController],
  providers: [PrismaService],
})

export class AppModule { }
