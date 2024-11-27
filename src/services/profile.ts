import { http } from '@/utils/http'
import type { ProfileDetail, ProfileParams } from '@/types/member'
export const getMemberProfileAPI = () =>
  http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })

export const putMemberProfileAPI = (data: ProfileParams) =>
  http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
