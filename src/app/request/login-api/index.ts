import { request, IDataResType } from '../base-request';

export interface IFUserInfo {
  accountNonExpired?: boolean; //未知
  accountNonLocked?: boolean; //未知
  authorities?: any[]; //权限？
  created: string; //创建日期
  credentialsNonExpired?: boolean; //未知
  department?: number; //未知
  enabled?: boolean; //未知
  endtime?: string; //未知
  expired?: any; //未知
  ipLimit?: any; //未知
  ipv4?: string; //ipv4地址
  ipv6?: string; //ipv6地址
  isLogin?: boolean; //是否在线
  lastLoginTime?: string; //上次登录时间
  loginCount: number; //登录次数
  loginLimit?: any; //未知
  name?: string; //未知
  phone?: string; //未知
  roleId: number; //用户类型
  roles?: any[]; //未知
  starttime?: string; //未知
  uid: number; //用户id
  updated: string; //更新时间
  username: string; //用户名
  authority: any[]; //权限信息
}

export interface IFLoginUserInfo extends IFUserInfo {
  password: string;
}
export interface ILoginPayload {
  username: string;
  password: string;
}

class LoginApiClass {
  login = (payload: ILoginPayload) => {
    return request
      .post<IDataResType<IFLoginUserInfo>>('/login', payload)
      .then(res => res.data);
  };
  //TODO
  authority = (payload: ILoginPayload) => {
    return request
      .post<IDataResType<IFLoginUserInfo>>('/login', payload)
      .then(res => res.data);
  };
}

export const LoginApi = new LoginApiClass();
