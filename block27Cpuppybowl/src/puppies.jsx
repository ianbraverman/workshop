import { useGetPuppiesQuery } from "./puppiesSlice";

export default function Puppies() {
  const { data: puppies, isLoading } = useGetPuppiesQuery();

  return (
    <article>
      <h1>Welcome to the Puppy Bowl Event!</h1>
      <p> Come and join us for a fun-filled day of adorable puppy football!</p>
      <p>
        Get ready to meet the talented pups competing in this year's Puppy
        Bowl... and here they are:
      </p>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          puppies.data.players.map((puppy) => (
            <li key={puppy.id}>
              <img src={puppy.imageUrl} />
              <h2>{puppy.name}</h2>
              <h3>{puppy.breed}</h3>
              <h3>{puppy.status}</h3>
            </li>
          ))
        )}
      </ul>
    </article>
  );
}
