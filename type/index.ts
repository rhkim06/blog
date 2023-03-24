export type Post = {
  id: number
  userId: number
  title: string
  contents: string
}

export type Device = 'mobile' | 'pc' | undefined

export type Movement = 'toRight' | 'toLeft' | 'toTransparent' | 'storm'

export type DeviceInfo = {
  type: Device
  width: number
}

export interface CheckDevice {
  (): DeviceInfo
}
