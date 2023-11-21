function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

export default function Hello() {
  const user = {
    firstName: 'Carlo',
    lastName: 'Toledo',
  };

  return (
    <p>
      Hello, {formatName(user)}!
    </p>
  );
}