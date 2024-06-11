import React from 'react'

type User = {
    firstName: string
    lastName: string
}
const user = {
    firstName: 'Nguyễn Văn',
    lastName: 'A'
};

function formatName(user: User) {
    return user.firstName + ' ' + user.lastName
}

export default function B6() {
  return (
    <div>{formatName(user)}</div>
  )
}
