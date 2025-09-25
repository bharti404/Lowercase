// import About from "./components/about/About";
// import Artist from "./components/artist/Artist";
// import Collaborations from "./components/collaborations/Collaborations";
// import Homepage from "./components/homepage/Homepage";
// import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Photos from "./components/photos/Photos";
// import Events from "./components/events/Events";
// import React from "react";
// import FatsomaWidget from "./components/LowercaseTicket/Lowercaseticketwidget";
// import AlbumUpload from "./components/admin/Album/Albumupload";
// import AdminLayout from "./components/admin/Adminlayout";
// import Abumlist from "./components/admin/Album/Abumlist";
// import Albumshow from "./components/Pages/Albums/Albumshow";
// import Photobyalbum from "./components/Pages/Photos/Photobyalbum";
// import Artistdetail from "./components/artist/Artistdetail";
// import NewArtist from "./components/NewArtist/NewArtist";
// import Login from "./components/admin/Album/Login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/artist" element={<Artist />} />
//           <Route path="/newartist" element={<NewArtist />} />
//         {/* <Route path="/artist/details" element={<Artistdetail />} /> */}
//          <Route path="/artist/:id" element={<Artistdetail />} />

//         <Route path="/collab" element={<Collaborations />} />
//         <Route path="/photos" element={<Photos />} />
//         <Route path="/events" element={<Events />} />

//         <Route path="/tkt" element={<FatsomaWidget />} />

//         <Route path="/albums" element={<Albumshow />} />

//         <Route path="/photobyalbum/:id" element={<Photobyalbum />} />

//         {/* <Route path="/admin" element={<AlbumUpload />} /> */}

//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<Abumlist />} />
//           <Route path="albumlist" element={<Abumlist />} />
//           <Route path="albumupload" element={<AlbumUpload />} />

//           {/* <Route path="settings" element={<Settings />} /> */}
//         </Route>
//          <Route path="login" element={<Login/>} />

//       </Routes>
//     </BrowserRouter>

//   );
// }

// export default App;

///bharti

import About from "./components/about/About";
import Artist from "./components/artist/Artist";
import Collaborations from "./components/collaborations/Collaborations";
import Homepage from "./components/homepage/Homepage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Photos from "./components/photos/Photos";
import Events from "./components/events/Events";
import React from "react";
import FatsomaWidget from "./components/LowercaseTicket/Lowercaseticketwidget";
import AlbumUpload from "./components/admin/Album/Albumupload";
import AdminLayout from "./components/admin/Adminlayout";
import Abumlist from "./components/admin/Album/Abumlist";
import Albumshow from "./components/Pages/Albums/Albumshow";
import Photobyalbum from "./components/Pages/Photos/Photobyalbum";
import Artistdetail from "./components/artist/Artistdetail";
import NewArtist from "./components/NewArtist/NewArtist";
import Login from "./components/admin/Album/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/newartist" element={<NewArtist />} />
        {/* <Route path="/artist/details" element={<Artistdetail />} /> */}
        <Route path="/artist/:id" element={<Artistdetail />} />

        <Route path="/collab" element={<Collaborations />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/events" element={<Events />} />

        <Route path="/tkt" element={<FatsomaWidget />} />

        <Route path="/albums" element={<Albumshow />} />

        <Route path="/photobyalbum/:id" element={<Photobyalbum />} />

        {/* <Route path="/admin" element={<AlbumUpload />} /> */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>

              <AdminLayout />
            </ProtectedRoute>
           
          
          }
        >
          <Route index element={<Abumlist />} />
          <Route path="albumlist" element={<Abumlist />} />
          <Route path="albumupload" element={<AlbumUpload />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
