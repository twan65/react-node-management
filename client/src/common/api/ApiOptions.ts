import { idText } from "typescript";

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


