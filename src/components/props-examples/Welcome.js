/**In this example, the Welcome component receives a name prop and renders it inside an <h1> tag. The App component renders Welcome and provides a value for the name prop. */

const Welcome = ({ name }) => {
  //the props object is passed in as an argument
  return <h1>Hello, {name}!</h1>; //props.name is used to access the name property of the props object
};

export default Welcome;
