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

### UI Design.



![ ](/src/images/home.png)

>A redesign of the home page with new colours and new heading

![ ](/src/images/moviedetails.png)

>Cast and Crew added to movie details.

![ ](/src/images/moviesfullreview.png)

>Shows the full review for a movie.

![ ](/src/images/upcomingmovies.png)

>Shows the Upcoming Movies which has a details page like a normal movie and all the other things too.

![ ](/src/images/popularmovies.png)

>Shows the Popular Movies which has a details page like a normal movie and all the other things too.

![ ](/src/images/popularactors.png)

>Shows the Popular actors each actor card has a button to favourite an actor or to see more info on the actor and also a filter card to find a specific actor

![ ](/src/images/favouriteactors.png)

>Shows the favourite actors that you favourited from the popular actors page with options to remove favourited actor and to see more info and a filter card to filter out specific actors

![ ](/src/images/actordetails.png)

>Shows the full details for an actor like birthplace and bio.

![ ](/src/images/tvshows.png)

>Shows Tv Shows, each tv show card has a button to favourite a tv show or to see more info on the tv show and also a filter card to find a specific tv show

![ ](/src/images/tvshowdetails.png)

>Shows the full details for a tv show like genre and production places. There is also a button on bottom right to see the reviews of a movie

![ ](/src/images/tvshowreviewpanel.png)

>Shows the reviews on a panel on the tv show details page when review button is pressed this panel contains an option to see the full review on a new page.

![ ](/src/images/tvshowfullreview.png)

>Shows the full review for a tv show.

![ ](/src/images/favouritetvshows.png)

>Shows the favourite tv shows that you favourited from the tv shows page with options to remove favourited tv shows and to see more info and a filter card to filter out specific tv shows and also a button to write a review for the tv show

![ ](/src/images/reviewform.png)

>A review form page for a tv show when filled out by user the review is submitted.



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




