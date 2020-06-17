import React from "react";

import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";
import API from "../utils/API";


const MemberCard = (props) => {
  const { loading, user} = useAuth0();

  if (loading || !user) {
    return <Loading />
  }
  return (
    <h2>MemberCard</h2>
  )











}

export default MemberCard;