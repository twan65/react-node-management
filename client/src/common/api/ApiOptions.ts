export interface ApiOptions {
  method: string;
  url: string;
};

export class GetUsers implements ApiOptions {
  method = "GET";
  url = "/api/v1/users";
};


