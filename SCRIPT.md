# Talk

Hello world of Next 13!

# Step

Let's add tailwind:

```js
// layout.js
import "tailwindcss/tailwind.css";
```

No more \_app or \_document! Add classes right to html.

```
<html className="antialiased bg-gray-900 text-gray-100">
```

# Step

Right now we've got one page. Let's go ahead and add a page for the `/movies` URL.

```jsx
// movies/page.js
export default function Page() {
  return <p>Movies page</p>;
}
```

# Step

Now let's add a header with some links. And the root layout is the perfect place for persisent UI like our header.

```jsx
<header className="border-b border-gray-700 p-4 space-x-4">
  <a href="/">Home</a>
  <a href="/movies">Movies</a>
</header>

<main className="p-4">{children}</main>
```

Links work and the header is persistent!

Let's turn these into next/links. Now we have clientside transitions.

# Step

Ok, it'd be nice to see which link is active. Let's come to our root layout and drop a console.log here whenever this component renders.

```jsx
console.log("rendering");
```

We don't see this running whenever we navigate the page. But we actually also don't see it when we refresh the page. But if we pop over to our terminal, we actually see it running here!

This is because components in Next 13 are Server Components by default! This is different from Next 12, which pre-rendered React components at build time but then shipped them to the browser to be executed on the client. Server Components actually execute at the time of the request on the server, and ship zero javascript to the client, which is great for making our apps smaller and faster, in addition to some other benefits we'll cover soon.

But for these links, since we want them to be interactive and change their style as we navigate, we want some good ol' React components right here in the browser.

So let's create a new component called NavLink. And we can colocate it right here next to our root layout, which is another great feature of Next 13.

```jsx
export default function NavLink() {
  //
}
```

We'll paste in our link, and lets go ahead and take in our href and children as props.

```jsx
import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link className="underline" href={href}>
      {children}
    </Link>
  );
}
```

And replace them in the layout. So now if we save this, we'll see everything works.

Now let's come to our NavLink. Right now this is still a server component: if we add a log we don't see it in the browser:

```jsx
console.log(href);
```

But we can turn it into a client comopnent with `use client`. Check that out. We see our log in the browser!

Now that this is a client component, we have some useful new hooks we can use here. The one we want is useSelectedLayoutSegment.

```jsx
let selectedSegment = useSelectedLayoutSegment();
console.log({ href, selectedSegment });
```

We see as we navigate this shows us which segment the current layout is rendering – basically, what's being rendered into `children` right here in our layout. And we can see when we're on `/movies` the segment is `movies` and when we're on `/` the segment is the empty string. So we should be able to see if a link is active if its href is equal to slash the segment:

```jsx
let active = href === `/${selectedSegment}`;
```

And now we can use this in our Link:

```jsx
<Link className={active ? "underline" : ""} href={href}>
```

Boom! Active class right here.

I really love how easy this is, to interleave client components and server components with each other. It's a big part of how Next 13 lets us use the full power of React whenever we need it, while keeping the static parts of our app slim and fast by rendering them on the server.

## Step

Ok, it's time to fetch some data! I have an API running - if we pull it up we can see a list of movies at `http://localhost:3001/movies`.

So if we come to our /movies page, how might we fetch this data? getServerSideProps? useEffect?

How about an async function called getMovies?

```js
async function getMovies() {
  let res = await fetch("http://localhost:3001/movies");

  return res.json();
}
```

```jsx
export default function Page() {
  let movies = use(getMovies());

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

This is still running on the server! Benefits: fewer client states to deal with - take advantage of request/reseponse cycle. Direct access to server resources.

> Maybe? Enable slow 3g. Click movies. No response - pretty bad. If we don't want the load-then-render of a traditional server rendered site we can add a loading page. Cool! Instant navigation.

# Step

Ok - it's time to make that list-detail view we saw from the beginning. We want this list of movies to be in a sidebar, and the current movie to show up here, something like this:

```
<div className="flex">
  <ul className="pr-10 text-sm text-gray-400 space-y-1">
    {movies.map((movie) => (
      <li key={movie.id}>{movie.title}</li>
    ))}
  </ul>

  <div>
    <p className="text-2xl">Lord of the Rings</p>
  </div>
</div>
```

Looks like another layout! Movies in layout, and selected movie renders right here as `children`.

So let's do that. Let's make this whole thing a layout. And layouts get children. And if we save and reload we see a 404 since we don't have a page here. So let's make one

```jsx
export default function Page() {
  return <p>Hi</p>;
}
```

and now `/movies` is visible again.

So this page is whats rendered when we're just at /movies - its sort of the index for /movies. And you might use this to have a message, something like "Select a movie!"

## Step

Ok so now we want to make these links go to specific movies using their id – something like `/movies/1` and `/movies/2`.

So let's make these links go to `/movies/id`.

```jsx
<li key={movie.id}>
  <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
</li>
```

and now when we click lotr, we go to /movies/1 and we get a 404.

So let's make this page by using a dynamic segment. The way we do that is by making the folder name with brackets (just like in Next 12, but its called page.js)

```jsx
// movies/[id]/page.js

export default function Page() {
  return <p>This is a movie</p>;
}
```

And now we're rendering this both at /movies/1 and /movies/2.

Ok so we want this page to be different for each movie – how do we get which id we're at?

Dynamic pages get a `params` object as an arg so if we log that out

```jsx
export default function Page({ params }) {
  console.log(params);

  return <p>Movie {params.id}</p>;
}
```

now we can see which id we're on.

## Step

To show the movie details we need to actually fetch this movie from the server. We know how to fetch data - copy from layout.

```jsx
import { experimental_use as use } from "react";

async function getMovie(id) {
  let res = await fetch(`http://localhost:3001/movies/${id}`);

  return res.json();
}

export default function Page({ params }) {
  let movie = use(getMovie(params.id));

  return <p className="text-2xl">{movie.title}</p>;
}
```

and all this is still running on the server!

## Step

Let's update our links in our template here to show which movie is selected. We'll create a `movie-link` right here and copy over our nav link. Change to MovieLink, and let's take a look at `selectedSegment` on this one.

```jsx
console.log(selectedSegment);
let active = href === `/movies/${selectedSegment}`;
```

And now can customize the active state:

```
className={active ? "text-gray-100" : "hover:text-gray-300"}
```

And it works!

## Step

Ok – let's add some more details from our movie!

```
return (
  <div>
    <p className="text-3xl">{movie.title}</p>
    <p className="mt-2">Year: {movie.year}</p>
    <p className="mt-2">{movie.description}</p>
  </div>
);
```

##

previously data loaded at top flows through. here you get to load the data within each section that needs it.
