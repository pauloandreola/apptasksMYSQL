export class UserToken {
  'token_id': string
  'refresh_token': string
  'created_at': Date
  'expires_date': Date
  'user_token_id': string

  constructor ( token_id: string, refresh_token: string, created_at: Date, expires_date: Date, user_token_id: string ) {
    token_id: token_id;
    refresh_token: refresh_token;
    created_at: created_at;
    expires_date: expires_date;
    user_token_id: user_token_id;
  }
}