import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { UsersRepository } from '@/domain/forum/application/repositories/users-repository'
import { PrismaUsersRepository } from './prisma/respositories/prisma-users-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    }, 
  ],
  exports: [
    PrismaService,
    UsersRepository,
  ],
})
export class DataBaseModule {}
