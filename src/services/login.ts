import { http } from '@/utils/http'
import type { LoginResult } from '@/types/member'
type LoginData = {
  code: string
  encryptedData: string
  iv: string
}

export const postLoginWxMinAPI = (data: LoginData) =>
  http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })

export const postLoginWxMinSimplefAPI = (phoneNumber: string) =>
  http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
