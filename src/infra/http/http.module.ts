import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/create-account.controller'
import { DataBaseModule } from '../database/database.module'
import { NestRegisterUserUseCase } from '../representations/nest-register-user-use-case'
import { CryptographyModule } from '../cryptography/cryptography.module'

@Module({
  imports: [DataBaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
  ],
  providers: [
    NestRegisterUserUseCase,
  ],
})
export class HttpModule {}
