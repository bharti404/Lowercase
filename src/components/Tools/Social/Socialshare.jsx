import React from "react";
import {

  FacebookShareButton,

  FacebookIcon
} from "react-share";
const Socialshare = (props) => {
    console.log("i am the props coming here", props)
    const Url = props.url;
  return (
    <div>
      <div className="Demo__some-network">
        <FacebookShareButton
          url={Url}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <div>
        </div>
      </div>

    </div>
  );
};

export default Socialshare;
