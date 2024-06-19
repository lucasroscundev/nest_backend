import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  UsePipes,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { Public } from '@/infra/auth/public'
import { NestRegisterUserUseCase } from '@/infra/representations/nest-register-user-use-case'
import { UsersRepository } from '@/domain/forum/application/repositories/users-repository'

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  nickname: z.string(),
  picture: z.string(), 
  given_name: z.string(), 
  family_name: z.string(),      
})

type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/accounts')
@Public()
export class CreateAccountController {
  constructor(
    private registerUser: NestRegisterUserUseCase,
    private userRepository: UsersRepository,    
  ) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  async handle(@Body() body: CreateAccountBodySchema) {
    const { 
      name, 
      email, 
      password, 
      nickname,
      picture,      
      given_name, 
      family_name,      
      } = body

    const result = await this.registerUser.execute({
      name,
      email,
      password,
      nickname,
      picture,
      email_verified: true,       
      given_name, 
      family_name,
      is_auth0_user: true,
      createdAt: new Date(),       
    })

    /*if (result.isLeft()) {
      aw
      const error = result.value

      switch (error.constructor) {
        case StudentAlreadyExistsError:
          throw new ConflictException(error.message)
        default:
          throw new BadRequestException(error.message)
      }
    }*/
  }
}
