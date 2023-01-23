export class UserTokens {
  'token_id': string
  'refresh_token': string
  'expires_date': Date
  'created_at': Date
  'user_id': string

  constructor ( token_id: string, refresh_token: string, expires_date: Date, created_at: Date, user_id: string ) {
    token_id: token_id;
    refresh_token: refresh_token;
    expires_date: expires_date;
    created_at: created_at;
    user_id: user_id;
  }
}