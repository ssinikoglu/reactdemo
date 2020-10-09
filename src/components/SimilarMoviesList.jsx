import React from "react";

import { Link } from "react-router";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import SimilarMovie from "./SimilarMovie";

export default function SimilarMoviesList({data}) {
 const StyledLink = styled(Link)`
   &:hover {
     text-decoration: none;
   }
 `;
 let similarMovies = data.map(function (similarMovie) {
   if (similarMovie.length != null) {
     return (
       <Col xs={4} sm={3} md={2} key={movie.id}>
       <Link to={'/movie/'+movie.id} ></Link>
           <SimilarMovie similarmovie={similarMovie} />
       </Col>
     );
   }

   return null;
 });

 return (
   <div>
     <h3>Similar Movies</h3>
     <Row>
     {similarMovies}
     </Row>
   </div>
 );
}
