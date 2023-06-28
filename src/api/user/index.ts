import request from '@/utils/request'
import { type responseData, type LoginForm } from './type'
enum API {
  login = '/login',
  logout = '/logout',
  getUserInfo = '/getUserInfo',
}
const login = (data: LoginForm) => {
  request.post<any, responseData>(API.login, data)
}
