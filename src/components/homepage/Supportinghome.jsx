import React, { useEffect, useRef, useState } from "react";

import Webgiviewer from "../WebgiViewer/Webgiviewer";
import Modernphotos from "../photos/Modernphotos";
import Artists from "./Artists";
const Supportinghome = () => {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  return (
    <div>

<div ref={contentRef} id="content">
      <Modernphotos />
      <Artists />

      <Webgiviewer contentRef={contentRef} ref={webgiViewerRef} />
      </div>
    </div>
  );
};

export default Supportinghome;
