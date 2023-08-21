import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Nav from '../Nav';
import UpdateNoteForm from '../UpdateNote';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/update-note/:id" element={<UpdateNoteForm />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}


function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {<Nav />}

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className='container' >
        <Outlet />
      </div>
    </div>
  );
}
