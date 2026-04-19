import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Placeholder for a Layout component (e.g., with global ambient sounds or darkness filters)
import Layout from './components/Layout';
import Board from './components/Board';

// Room Components (You'd create these as separate files)
const Foyer = () => <div><h1>The Grand Foyer</h1><p>The stairs loom above you...</p></div>;
const Kitchen = () => <div><h1>Kitchen & Pantry</h1><p>The knives seem to be missing...</p></div>;
const Bedroom = () => <div><h1>Master Bedroom & Nursery</h1><p>You hear a faint lullaby.</p></div>;
const Library = () => <div><h1>The Library</h1><p>Dusty books line the walls.</p></div>;
const DiningRoom = () => <div><h1>The Dining Room</h1><p>The table is set for twelve.</p></div>;
const Basement = () => <div><h1>The Basement</h1><p>It's pitch black down here.</p></div>;
const Attic = () => <div><h1>The Attic</h1><p>Eyes watch you from the doll crates.</p>    <Board width={30} height={40} /></div>;
const HallOfMirrors = () => <div><h1>Hall of Mirrors</h1><p>Which reflection is the real you?</p></div>;
const Solarium = () => <div><h1>The Solarium</h1><p>The vines are twitching.</p></div>;
const PortraitGallery = () => <div><h1>Portrait Gallery</h1><p>The eyes are definitely following you.</p></div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Foyer /> }, // The starting point
      { path: "kitchen", element: <Kitchen /> },
      { path: "bedroom", element: <Bedroom /> },
      { path: "library", element: <Library /> },
      { path: "dining-room", element: <DiningRoom /> },
      { path: "basement", element: <Basement /> },
      { path: "attic", element: <Attic /> },
      { path: "mirrors", element: <HallOfMirrors /> },
      { path: "solarium", element: <Solarium /> },
      { path: "gallery", element: <PortraitGallery /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
