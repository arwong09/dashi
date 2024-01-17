export interface User {
  uid: string
  name: string
  email: string
}

export interface ContactMethod {
  type: 'text' | 'call' | 'email'
  value: string
}

export interface Tag {
  id: string
  ownerId: string
  itemName: string
  contactMethod: ContactMethod
  photoUrl: string | null
}
