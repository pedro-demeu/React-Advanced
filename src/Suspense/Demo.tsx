import { Suspense } from "react";
import { fetchData } from "./fetchData";
import { Link } from "react-router-dom";

export default function SuspenseUseCase({
  artist,
}: {
  artist: { name: string; id: string };
}) {
  return (
    <div className="bg-gray-950 text-white h-screen w-screen text-center">
      <h1 className="text-4xl py-8">{artist.name}</h1>
      <Suspense fallback={<Loading />}>
        <Albums artistId={artist.id} />
        <Link to="/">
            <button className="btn bg-blue-950 py-3 my-4 px-10 rounded-lg">Go back</button>
        </Link>
      </Suspense>
    </div>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
function Albums({ artistId }: { artistId: string }) {
  const albums = use(fetchData(`/${artistId}/albums`));
  return (
    <ul>
      {albums.map((album: { id: string; title: string; year: string }) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function use(promise: any) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}
