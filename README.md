# Restaurant Reviews App—Stage 1
Marian Schiavo
Udacity-Grow with Google Front End Developer Nanodegree 
Project 5

## Overview
This code covers Stage 1 of the Restaurant Reviews web application

* I created: 
* A responsive grid-based layout using CSS.
* Responsive images
* A restaurant listings page
* A restaurant info page
* Accessibility updates
* A service worker file to cache responses to requests for site assets.  Visited pages are rendered when there is no network access.
* All other rubric requirements


## How to View

1. Clone the project from Github
2. In the terminal, navigate to this project folder.
3. Run server via terminal with "python3 -m http.server 8081"
4. Visit the site in your browser: `http://localhost:8081` to explore the app.
5. In Chrome you can open the Console, go to Application / Service Workers, and then check the Offline option to see offline behavior.

* Special thanks to Rodrick Bloomfield for your mentoring and to Doug Brown for the initial walk-through.
* Thanks also to Google and Udacity for the scholarship and my cohort for your support.


### Detailed Project Instructions:
Convert the provided site to use a responsive design .
Bootstrap and other CSS frameworks should not be used; all responsiveness should be done with CSS.
Use appropriate document type declaration and viewport tags
Create a responsive grid-based layout using CSS
Use media queries that provide fluid breakpoints across different screen sizes
Use responsive images that adjust for the dimensions and resolution of any mobile device
Implement accessibility features in the site HTML (most of this HTML is generated by JavaScript functions).
Add a ServiceWorker script to cache requests to all of the site’s assets so that any page that has been visited by a user will be accessible when the user is offline. Only caching needs to be implemented, no other ServiceWorker features.
