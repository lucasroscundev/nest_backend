import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface UserProps {
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

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name
  }

  set name(newName: string) {
    this.props.name = newName
    this.touch()
  }

  get email() {
    return this.props.email
  }

  set email(newEmail: string) {
    this.props.email = newEmail
    this.touch()
  }

  get password() {
    return this.props.password
  }

  set password(newPassword: string) {
    this.props.password = newPassword
    this.touch()
  }

  get nickname() {
    return this.props.nickname
  }

  set nickname(newNickname: string) {
    this.props.nickname = newNickname
    this.touch()
  }

  get picture() {
      return this.props.picture || "There is no picture assigned for this user."
  }

  set picture(newPicture: string) {
    this.props.picture = newPicture
    this.touch()
  }

  get email_verified() {
    return this.props.email_verified
  }

  set email_verified(emailVerification: boolean) {
    this.props.email_verified = emailVerification
    this.touch()
  }

  get given_name() {
    return this.props.given_name
  }

  set given_name(newGivenName: string) {
    this.props.given_name = newGivenName
    this.touch()
  }

  get family_name() {
    return this.props.family_name
  }

  set family_name(newFamilyName: string) {
    this.props.family_name = newFamilyName
    this.touch()
  }

  get is_auth0_user() {
    return this.props.is_auth0_user
  }

  set is_auth0_user(authenticated: boolean) {
    this.props.is_auth0_user = authenticated
    this.touch()
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: UserProps, id?: UniqueEntityID) {
    const user = new User({
      ...props,
      createdAt: props.createdAt ?? new Date(),
      email_verified: true,
      is_auth0_user: true,
    }, id)

    return user
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}
