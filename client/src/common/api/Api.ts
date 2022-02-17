import axios from 'axios';
import { ApiOptions } from './ApiOptions';

const Api = {
  /**
   *
   * @param options apiOptions
   * @param params
   * @returns api response
   */
  request: async <T extends ApiOptions>(options: T, params?: any) => {
    const token = localStorage.getItem('token');
    const bearerToken = `Bearer ${  token}`;

    let headers = {
      "Authorization": bearerToken,
    } as any;

    let axiosConfig = axios.create({headers});
    let axiosBody = {
      method: options.method,
      url: options.url,
    } as any;

    switch (options.method) {
      case "GET":
      case "DELETE":
        axiosBody["params"] = params;
        break;
      case "POST":
      case "PUT":
        axiosBody["data"] = params;
        break;
      default:
        console.error("Not Found HTTP Method");
        return { data: null, error: null };
    }

    return await axiosConfig(axiosBody)
      .then((res) => {
        return { data: res.data, error: null };
      })
      .catch((error) => {
        // TODO: 500エラーの場合、エラー画面へ遷移すること
        return { data: null, error: error };
      });
  },
};

export default Api;