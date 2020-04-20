/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from 'components/LaunchItem';

const LAUNCHES_QUERY = gql`
  {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function LaunchesQuery() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <div className="my-3">
        <p>
          <span className="px-3 mr-2 bg-success" /> = Success
        </p>
        <p>
          <span className="px-3 mr-2 bg-danger" /> = Fail
        </p>
      </div>
      {data.launches.map(launch => <LaunchItem key={launch.flight_number} launch={launch} />)}
    </div>
  );
}

export default function Launches() {
  return (
    <article>
      <LaunchesQuery />
    </article>
  );
}
