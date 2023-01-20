export class userTokens {
  'token_id': string
  'refresh_token': string
  'user_id': string
  'expires_date': Date
  'created_at': Date

  constructor ( token_id: string, refresh_token: string, user_id: string, expires_date: Date, created_at: Date ) {
    token_id: token_id;
    refresh_token: refresh_token;
    user_id: user_id;
    expires_date: expires_date;
    created_at: created_at;
  }
}