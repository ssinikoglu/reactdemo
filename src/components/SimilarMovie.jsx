import React from "react";
import { URL_SIMILAR } from "../const";


export default function SimilarMovie({ similarMovie}) {
  return <p>{similarMovie}</p>;
}

SimilarMovie.propTypes = {
  similarMovie: React.PropTypes.string.isRequired,
};
