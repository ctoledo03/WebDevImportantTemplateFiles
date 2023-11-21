function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <p>Hello, {formatName(user)}!</p>
  }
  return <p>Hello, Stranger.</p>
}