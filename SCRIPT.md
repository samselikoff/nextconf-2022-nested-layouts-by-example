# Talk

Hello world of Next 13!

# Step

Let's add tailwind:

```js
// layout.js
import "tailwindcss/tailwind.css";
```

No more \_app or \_document!

---

Start with app/layout.js, app/page.js. Explain.

List movies. Do it in layout.js.

Select a movie, want it to show up on right. Make a dynamic route. Highlight the active one.

Make it load data. Note it runs on server. Console.log() not what you expect... but look, we can use an async function! So cool. Fewer states to deal with on the client.

Also check it out. I click Movie 1, while it's taking a while to load, if I click Movie 2, we will only see that. We canceled the navigation to Movie 1. Pretty neat! This router + react is a state machine. But now if I go back to Movie 1, it's instant! The route finished loading and was cached since we had already kicked off the request. Pretty cool.

Speaking of loading, it's pretty weird how the app doesn't do anything when we click these movies. Let's add some loading states to this UI. Create movies/[id]/loading.js. Pretty awesome. Renders a loader in the detail part of this UI. And what's triggering this is the fact that our page is suspending. This is how Suspense is coordinating all this. And what's cool is if we refresh this page on this route, we'll see the Loading render right away. And if we look at View Source, we'll see that Loading is part of the initial HTML. So when Next renders this page at build-time, we're getting this loading template – which is the suspense boudnary – as an instant initial render. And then our async function kicks off _on the server_, again since this is a RSC. Pretty cool stuff!

Ok, now let's paste in some HTML for our movie Detail page.

```jsx
<div className="mt-12 border-b flex w-full space-x-8 mx-4">
  <div className="-mb-px text-sm font-medium pb-4 border-b-2 border-rose-500">
    Overview
  </div>
  <div className="-mb-px text-sm font-medium pb-4">Cast</div>
</div>

<div className="p-4">
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius commodi
    harum omnis accusamus saepe aperiam perspiciatis suscipit cupiditate
    non, ipsum, maxime nemo minus obcaecati neque et. Voluptatum quaerat
    molestiae sed?
  </p>
</div>
```

Want a subroute here, for /cast. Move the shared parts into a layout. This is a nested layout. Move all the page's code into layout. Use `children` to render the current page. Now move overview to page.js. Then lets make a /cast page: cast/page.js. Put this here. And now turn these into links. Awesome its working!
