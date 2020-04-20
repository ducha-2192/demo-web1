/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from 'components/LaunchItem';
import {withRouter, RouteComponentProps} from "react-router";
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

function LaunchDetail(props: LaunchDetailProps) {
  let flightNumber = props.match.params.flight_number;

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {variables: {flight_number: parseInt(flightNumber)}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {
    mission_name,
    flight_number,
    launch_year,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type }
  } = data.launch
  return (
    <article>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission:</span> {mission_name}
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">
          Flight Number: {flight_number}
        </li>
        <li className="list-group-item">
          Launch Year: {launch_year}
        </li>
        <li className="list-group-item">
          Launch Successful:{' '}
          <span
            className={launch_success ? 'text-success' : 'text-danger'}
          >
            {launch_success ? 'Yes' : 'No'}
          </span>
        </li>
      </ul>

      <h4 className="my-3">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Rocket ID: {rocket_id}</li>
        <li className="list-group-item">
          Rocket Name: {rocket_name}
        </li>
        <li className="list-group-item">
          Rocket Type: {rocket_type}
        </li>
      </ul>
      <hr />
      <Link to="/" className="btn btn-secondary">
        Back
      </Link>
    </article>
  );
}

interface LaunchDetailProps extends RouteComponentProps {
  flight_number: string;
}

export default withRouter(LaunchDetail);
