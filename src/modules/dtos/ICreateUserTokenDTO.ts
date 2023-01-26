export interface ICreateUserTokenDTO {
  refresh_token: string,
  expires_date: Date,
  user_token_id: string,
}