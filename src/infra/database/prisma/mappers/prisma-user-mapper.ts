import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { User } from '@/domain/forum/enterprise/entities/user'
import { User as PrismaUser, Prisma } from '@prisma/client'

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create(
      {
        name: raw.name,
        email: raw.email,
        password: raw.password,
        nickname: raw.nickname,
        picture: raw.picture, 
        email_verified: raw.email_verified, 
        given_name: raw.given_name, 
        family_name: raw.family_name, 
        is_auth0_user: raw.is_auth0_user,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      password: user.password,
      nickname: user.nickname,
      picture: user.picture, 
      email_verified: user.email_verified, 
      given_name: user.given_name, 
      family_name: user.family_name, 
      is_auth0_user: user.is_auth0_user,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }
  }
}
