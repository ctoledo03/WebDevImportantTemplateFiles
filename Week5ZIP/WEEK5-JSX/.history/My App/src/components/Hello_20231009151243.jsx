function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

export default function Hello() {
  const user = {
    firstName: 'Yin',
    lastName: ‘Chen',
  };

  return (
    <p>
      Hello, {formatName(user)}!
    </p>
  );
}