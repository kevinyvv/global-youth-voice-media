import Navbar from "../components/navbar";

export default function NewestEvent() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar pageNumber={2}/>
        <span></span>
        <p> Newest Event</p>
      </main>
    );
  }