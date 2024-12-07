import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable() // Permite que esse serviço seja injetado em outros módulos
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        // Quando uso o super, estou chamando o constructor da classe do PrismaClient, pois estamos estendendo ela, então consigo passar as configurações do prisma
        super({
            log: ['warn', 'error']
        })
    }

    onModuleInit() { // Método que será chamado quando o módulo for inicializado
        return this.$connect()
    }

    onModuleDestroy() { // Método que será chamado quando o módulo for destruído
        return this.$disconnect()
    }
}
