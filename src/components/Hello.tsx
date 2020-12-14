import * as React from "react";

interface HelloProps { text: string; }

const Hello = (props:HelloProps):React.ReactElement => (
  <h1>Hello this is a {props.text}</h1>
);

export default Hello;
