import { http } from '@/utils/http'
import type { AddressParams, AddressItem } from '@/types/address'
export const PostMemberAddressAPI = (data: AddressParams) =>
  http({
    method: 'POST',
    url: '/member/address',
    data,
  })

export const getMemberAddressAPI = () =>
  http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })

export const getMemberAddressDetailAPI = (id: string) =>
  http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })

export const putMemberAddressAPI = (id: string, data: AddressParams) =>
  http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })

export const DeleteMemberAddressAPI = (id: string) =>
  http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
