/**In this example, the UserProfile component receives a user object as a prop and displays its properties. The App component creates a user object and passes it to PropsExample2. */

// function UserProfile(props) {
//   console.log(props);
//   //we can access the properties of the user object using props.user.name, props.user.email, and props.user.age

//   //we could also destructure the user object and access its properties directly: const { name, email, age } = props.user;
//   return (
//     <div>
//       <h2>{props.user.name}</h2>
//       <p>Email: {props.user.email}</p>
//       <p>Age: {props.user.age}</p>
//     </div>
//   );
// }

// function UserProfile(props) {
//   const { name, email, age } = props.user;
//   //we can access the properties of the user object using props.user.name, props.user.email, and props.user.age

//   //we could also destructure the user object and access its properties directly: const { name, email, age } = props.user;
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Email: {email}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

function UserProfile({ user }) {
  const { name, email, age } = user;
  //we can access the properties of the user object using props.user.name, props.user.email, and props.user.age

  //we could also destructure the user object and access its properties directly: const { name, email, age } = props.user;
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserProfile;
