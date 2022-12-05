# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Gedvydas Jucius

## Overview.

### New Pages.

+ (Modified) Movie Details page - Shows Movie Cast and Crew
+ list of popular actors.
+ details about a particular actor page.
+ A favourite Actors page that lists favourited Actors
+ list of popular movies
+ list of popular tv shows.
+ a review for a particular tv show page
+ The favourite tv shows page that lists favourited tv shows
+ a review form page for user to fill out to submit a review for a tv show
+ details about a particular tv show page.
+ list of the upcoming movies

### New Features.

+ Most Popular movies view which displays the most popular movies in a new page
+ Movie Crew and Cast added to movie details showing the cast and crew that worked on the movie.
+ Popular actors view which displays the most popular actors in a new page
+ Detailed actors view which displays more info about an actor like birthday and birthplace and etc.
+ Actors and tv shows can now be favourited and added to popular actors and popular tv shows page respectively.
+ You can write reviews for any favourited tv show
+ Detailed tv shows view which displays more info about a tv show like Genre , episode length , first episode release date and etc.
+ Upcoming movies view which displays the upcoming movies in a new page

## Setup requirements.

Make sure that Node.js is installed using 'npm install' after that run the program using 'npm start'

## TMDB endpoints.

+ /tv/{tv_id} - TV Details
+ /person/{person_id} - Actor details
+ /person/popular - A list of popular actors.
+ /movie/${id}/credits - Credits (Cast and Crew) 
+ /movie/upcoming - Upcoming Movies
+ /movie/popular - Popular movies
+ /person/${id}/images - Actor images
+ /tv/popular - popular tv shows. 
+ /tv/${id}/images - gets the images for the tv shows
+ /tv/${id}/reviews - tv show reviews
+ /genre/tv/list - Genres for a tv show.

## App Design.

### Component catalogue.

There is no new storybook support in the app.

e.g.

![](./images/stories.png)

### UI Design.

[ Insert screenshots of the __new app pages__ you developed (including modified existing pages), Have an appropriate caption for each one (see example below).

![ ](./images/detail.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![ ](./images/review.png)

>Shows the full review for a movie.

### Routing.

+ /actors - displays a list of popular actors.
+ /actors/:id - shows details about a particular actor.
+ /actors/favourites - The favourite Actors page that lists favourited Actors
+ /movies/popular - Displays the list of popular movies
+ /tvshows - displays a list of popular tv shows.
+ /tvShowReviews/:id - displays a review for a particular tv show
+ /tvshows/favourites - The favourite tv shows page that lists favourited tv shows
+ /reviews/tvform -  displays a review form for user to fill out to submit a review for a tv show
+ /tvshows/:id - shows details about a particular tv show.
+ /movies/upcoming - shows a list of the upcoming movies

[If relevant, state what aspects of your app are protected/private (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Mention the source code filenames that illustrate these  (code excerpts are not required) and provide references to the online resources that helped you (articles/blogs).
