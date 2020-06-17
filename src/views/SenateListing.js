import React, { useState, useEffect } from "react";
import { Table, Col, Row }   from "reactstrap";

import API from "../utils/API";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";



const SenateListing = () => {
  const { loading, user} = useAuth0();
  const [ membersInfo, setMembersInfo ] = useState({
    members: [],
  });
  const { members } = membersInfo;

  useEffect(() => {
    const chamber = "senate";
    console.log(chamber)
    getMembers(chamber) 
  },[]);

  if (loading || !user) {
    return <Loading />;
  }

  const getMembers = congressChamber => {
    API.getMembers(congressChamber)
    .then(res => {
      // console.log(res.data.results[0].chamber, res.data.results[0].members)
      setMembersInfo({
        chamber: res.data.results[0].chamber,
        members: res.data.results[0].members
      })
    })
    .catch(err => {
      console.log(err)
    });
  }

    return (
        <Row>
          <Col>
            <Table>
              <thead>
                  <tr>
                      <th>Member First Name</th>
                      <th>Member Last Name</th>
                      <th>State</th>
                      <th>Party Affiliation</th>
                      <th>View Details</th>
                      {/* Future Dev... make the entire table row clickable and remove the view details column */}
                  </tr>
              </thead>
              <tbody>
                {members.map(member => (
                    <tr key={`${member.id}-${member.party}`} data={`${member.id}`}>
                          <td>
                          {member.first_name}
                          </td> 
                          <td>
                          {member.last_name}
                          </td> 
                          <td>
                          {member.state}
                          </td> 
                          <td>
                          {member.party //=== "R" ? "Republican" : "Democrat" I wanted the full party name to display but there are more than two parties//
                          } 
                          </td> 
                          <td>
                            <a href={`/memberdetails/${member.id}`}>View Details</a>         
                          </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
    )
}

export default SenateListing;