import { User } from "@/domain/forum/enterprise/entities/user";

export class UserPresenter {
    static toHTTP(user: User) {
      return {
        id: user.id.toString(),
        name: user.name,
        email: user.email.toString(),
        nickname: user.nickname.toString(),
        picture: user.picture?.toString(),
        email_verified: user.email_verified.toString(),
        given_name: user.given_name.toString(),
        family_name: user.family_name.toString(),
        is_auth0_user: user.is_auth0_user.toString(),
        createdAt: user.createdAt.toDateString(),
        updatedAt: user.updatedAt?.toDateString(),      
      }
    }
  }