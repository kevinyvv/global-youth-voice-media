import Navbar from "../components/navbar";

export default function Directory() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar pageNumber={3}/>
        <span></span>
        <p> Directory </p>
      </main>
    );
  }