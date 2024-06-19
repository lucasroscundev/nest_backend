import { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'
import { UsersRepository } from '@/domain/forum/application/repositories/users-repository'
import { RegisterUserUseCase } from '@/domain/forum/application/use-cases/register-user'

import { Injectable } from '@nestjs/common'

@Injectable()
export class NestRegisterUserUseCase extends RegisterUserUseCase {
  constructor(
    usersRepository: UsersRepository,
    /*hashGenerator: HashGenerator,*/
  ) {
    super(usersRepository, /*hashGenerator*/)
  }
}
