# Instapost

## Copyright

&copy; 2022 Hack Reactor. This material is copyrighted by Hack Reactor and may not be distributed to the public

## Prompt

_For best experience, please view this file in the browser_.

You will create a full-stack application that implements several features for a social media platform. Your app will eventually leverage the following feature sets:

1. a **Feed** of all the social posts
2. a **Content View Toggle** to hide and show larger post content
3. an **Update** feature for users to _like_ a post increasing it's like count
4. a **Create** form for users to create new posts

### Your Tech Stack

- Client: [React](https://facebook.github.io/react)
- Server: [NodeJS](https://nodejs.org), with the [Express](https://express.js.com) framework
- Database: [MongoDB](https://mongodb.com) with the [Mongoose](https://mongoosejs.com) ODM.
- Additional libraries and tools:
  - Client-side AJAX libraries (if and only if you're using React for your client)
    - [jQuery](https://jquery.com/), for _client-side AJAX requests only_.
    - [Axios](https://github.com/axios/axios), as an optional, promise-based alternative to jQuery's `$.ajax`
    - [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) as an optional native promise based alternative
  - [Moment.js](https://momentjs.com/) for reader-friendly date formatting
  - [Place Corgi](http://placecorgi.com/) or [Unsplash Source](https://source.unsplash.com/) for placeholder images

HOW TO START THIS APP
- Navigate in to the instapost directory via your terminal
- Run NPM install to acquire all dependencies
- From a split terminal run 'npm run dev:react' to start the transpiler and 'npm run start' to boot the server
- Open localhost:3000 from your browser to access the webapp
- Happy coding

**Commit frequently** with informative messages. While there are instructions to commit at the end of each step, these should not be your only commits.

---

### Before You Begin

**Complete these setup tasks**

- [ ] In your terminal, navigate to this assessment's `instapost` directory.
- [ ] Run `npm install` inside the `instapost` directory to install dependencies.
- [ ] Ensure that the MongoDB process is running on your computer (`mongod`).
- [ ] Create the database by running `npm run db:setup`
- [ ] In `server/index.js`, uncomment the lines of code corresponding to your choice of client-side framework.
- [ ] Start your application with two commands, `npm run dev:react` and `npm start`, in two separate terminal tabs. Our `dev:react` script makes use of Webpack. For more information about Webpack, take a look at [the Webpack Docs](https://webpack.js.org/concepts/).
- [ ] Study the given codebase before beginning the steps below. Consider what's been provided to you, what you'll need to refactor, and what you'll need to create as you work through the steps below.

**WHEN THESE TASKS ARE COMPLETE:** proceed to Step One.

---

### Step One: The Social Feed Feature

**Implement the following user story:**

> As a user, when I load the app, I expect to see a feed (or, list) of all the social media posts.

**Implement this user story by doing the following:**

- [ ] In the Express server `server/index.js`, complete the request handler that will respond to `GET` requests to `/api/posts` with JSON of the posts stored in the database. You should use the Mongoose model exported by `Post.js` to fetch all of the posts from the database.
- [ ] Make an AJAX request from your client to the `/api/posts` route of your server when the App (or Feed) component gets loaded. Replace the sample data in your client with data obtained from your server.
- [ ] Refactor the **Feed** component to dynamically render the data from your api.
  - Leverage the existing **Post** component with the data you requested.
- [ ] Use the [Moment.js](https://momentjs.com) library to display the post dates using relative time - for example, "21 hours ago" or "10 minutes ago."
- [ ] Ensure that the posts in your feed appear in reverse-chronological order (with the most recent post appearing first in the feed.)

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step one"

---

### Step Two: The Content View Toggle Feature

**Implement the following user stories:**

> As a user I want all posts content to be shorten and when I click on the post content it will expand to show all content.

**Implement this user story by doing the following:**

- [ ] Truncate the length of all posts to a _max of 144 characters_
  - [ ] If a post is more than 144 characters provide a **Show More** button that will toggle the display of the content
  - [ ] If a post is less than 144 characters do not add a show more button and display all content
- [ ] Ensure that your `Post` properly displays the post as a series of paragraphs.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step two"

---

### Step Three: The Like Feature

**Implement the following user stories:**

> As a user I want to be able to show my appreciation of posts by hitting the like button and adding to the like count of said post.

**Implement these user stories by doing the following:**

- [ ] In your Express server, create a request handler that will respond to a `PATCH` request to the route `/api/posts/:postId`. Your request handler should find the post in the database with the corresponding `_id`, then increment that post's `like` counter.
  - Use Express' `route parameters` to get the `postId` out of your request URL.
- [ ] Refactor your `Post` component to include a _click_ event listener on the like button.
- [ ] Within the event handler you created send a `PATCH` request to the route `/api/posts/:postId`.
  - on success of the request, increment the post's count for immediate feedback to the user.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step three"

---

### Step Four: The Create Feature

**Implement the following user story:**

> As a use I want to be able to add posts for others to see and interact with.

**Implement this user story by doing the following:**

- [ ] In your Express server, create a request handler that will respond to a `POST` request to the route `/api/posts/`. Your request handler should take the data sent in the body of the request, and use that data to create and save a new post to your database.
- [ ] Build a new `Create` component, which will display a form with several inputs: one input each for the _username, and imageUrl_ of the post, a `textarea` for the _body_ of the post, and a `button` that will submit the post.
  - To aid you in crafting the structure, styling, and layout of the HTML elements in this component, we've provided an HTML "skeleton" for this component. You can find it at `mockups/Create.html`.
- [ ] In the `Feed` component for your client, refactor so the `Create` component is displayed above all the posts.
- [ ] In the `Create` Component you should handle the response from the `POST` request to tell the user it was successful.
  - Reset all inputs back to empty values.
  - Show the new post at the top of the list of posts.
- **NOTE** - You may use the [Place Corgi](http://placecorgi.com/) or [Unsplash Source](https://source.unsplash.com/) services to provide filler images as you implement this component. Don't waste time trying to find images.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step four"

---

## Available Resources

- [Postman](https://www.getpostman.com/)
- [AngularJS Docs](https://angularjs.org/)
- [ReactJS Docs](https://facebook.github.io/react/)
- [Webpack Docs](https://webpack.js.org/concepts/)
- [Babel Docs](https://babeljs.io/docs/setup/)
- [jQuery Docs](https://jquery.com/)
- [axios Docs](https://github.com/axios/axios)
- [Underscore Docs](http://underscorejs.org/)
- [BluebirdJS Docs](http://bluebirdjs.com/)
- [NodeJS Docs](https://nodejs.org/)
- [ExpressJS Docs](https://expressjs.com/)
- [Body Parser Middleware Docs](https://github.com/expressjs/body-parser)
- [MongoDB docs](https://docs.mongodb.com/)
- [Mongoose docs](http://mongoosejs.com/)
- Docs for any npm packages you might use
- [MDN](https://developer.mozilla.org/)
- [Stack Overflow](http://stackoverflow.com/)
- [Google Search](https://google.com) to search for the correct page on any of the documentation above
