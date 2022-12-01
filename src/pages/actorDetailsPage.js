import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorPage";
import { getActor } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const ActorDetailsPage = (props) => {
    const { id } = useParams();

    const { data: actor, error, isLoading, isError } = useQuery(
        ["actorDetails", { id: id }],
        getActor
      );

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <h1>{error.message}</h1>;
    }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for the actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;