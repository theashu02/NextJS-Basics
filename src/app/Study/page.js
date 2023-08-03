// "use client";

// this is how to catch all the segments in routes

export default function page() {
  return (
    <div>
      <h1>This is Study Section</h1>
    </div>
  );
}


export function generateMetadata({ params }) {
  return {
    title: "Study Section",
    discription:
      "This is how to generte meta data (differnt title for different page)",
  };
} 