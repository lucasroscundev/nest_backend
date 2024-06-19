import { Either, left, right } from '@/core/either'
import { User } from '../../enterprise/entities/user'
import { HashGenerator } from '../cryptography/hash-generator'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { UsersRepository } from '../repositories/users-repository'

interface RegisterUserUseCaseRequest {
  name: string
  email: string
  password: string
  nickname: string
  picture?: string | null 
  email_verified: boolean
  given_name: string
  family_name: string 
  is_auth0_user: boolean
  createdAt: Date
  updatedAt?: Date | null
}

type RegisterUserUseCaseResponse = Either<
  UserAlreadyExistsError,
  {
    user: User
  }
>

export class RegisterUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    /*private hashGenerator: HashGenerator,*/
  ) {}

  async execute({
    name,
    email,
    password,
    nickname,
    picture, 
    email_verified,
    given_name, 
    family_name, 
    is_auth0_user,
    createdAt,
  }: RegisterUserUseCaseRequest): Promise<RegisterUserUseCaseResponse> {
    const userWithSameEmail =
      await this.usersRepository.findByEmail(email)

   

    /*const hashedPassword = await this.hashGenerator.hash(password)*/

    const user = User.create({
      name,
      email,
      password, /*: hashedPassword,*/
      nickname,
      picture, 
      email_verified: true, 
      given_name, 
      family_name, 
      is_auth0_user: true,
      createdAt,      
    })
     
    if (userWithSameEmail) {
      this.usersRepository.save(user)
    }

    await this.usersRepository.create(user)

    return right({
      user,
    })
  }
}
