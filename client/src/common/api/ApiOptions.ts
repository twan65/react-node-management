export interface ApiOptions {
  method: string;
  url: string;
};

export class GetUsers implements ApiOptions {
  method = "GET";
  url = "/api/v1/users";
};

export class GetUser implements ApiOptions {
  method = "GET";
  url = "/api/v1/users/";
  setId = (id: any) => {
    this.url = this.url + id;
    return this;
  }
};

export class CreateUser implements ApiOptions {
  method = "POST";
  url = "/api/v1/users";
};


