import Navbar from "../components/navbar";

export default function ApplyNow() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar pageNumber={3}/>
        <span></span>
        <p> Apply Now!</p>
      </main>
    );
  }