import request from '@/utils/request'
import { type LoginForm } from './type'
enum API {
  login = '/login',
  logout = '/logout',
  getUserInfo = '/getUserInfo',
}
export const login = (data: LoginForm) => request.post(API.login, data)
export const logout = () => request.post(API.logout)

export const getUserInfo = () => {}
