import React, { useContext, useState } from "react";
// import { UserContext } from "./UserContextProvider";

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
}

export enum Countries {
  Brazil = "Brazil",
  France = "France",
  Philippines = "Philippines",
  UnitedStates = "United States",
  India = "India",
}


export const User = (props: Props) => {
  const [personBio, setPersonBio] = useState<string | null>(null);
  // const [isShowInfo, setShowInfo] = useState<boolean>(false);
  // every time the button is clicked, the value of the state will be toggled
  // const toggeleInfo = () => {
  //   setShowInfo((prev) => !prev);
  // }

  // const { users, updateUser, deleteUser, addUser } = useContext(UserContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person {props.isMarried ? "is married." : "is single."}</p>
      {/* <button onClick={toggeleInfo}>Toggle Info</button> */}
      {" "}
      <p>{props.name} Bio: {!personBio ? "No Bio available" : personBio}</p>
      <p>Country of Origin: {props.country}</p>
      <input onChange={handleChange} />
    </div>
  )
}
