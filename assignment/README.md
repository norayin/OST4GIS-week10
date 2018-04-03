# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.

## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

I have 3 ideas in mind right now. I will talk about them all at this point and decide later.
Option 1: A guide for metro users in NYC - which subway stations are the least congested and how could I get there?
Option 2: A guide and an analysis of museums in the US
Option 3: A guide of Chicago Divvy Bike Share System

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?
(If it is too large for a javascript application, using a backend might
be necessary)

Option 1: MTA subway turnstile data + predictors data in CVS or shapefile form
Option 2: JSON or CSV downloaded from https://www.imls.gov/research-evaluation/data-collection/museum-universe-data-file
Option 3: Bike trips CSV data available on Chicago open data portal, bike stations shapefile data

## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

For all 3 options, I will be likely using R to help clean the raw data. Then I will use online tools to parse data to GeoJSON form.
Leaflet, underscore.js, JQuery, mapbox API, turf.js will be used as well.

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
- What do they gain from your application' use?
- Are there any website/application examples in the wild to which you can compare your final?

Option 1:
- Users: MTA metro users in NYC
- Usage: visualize congestion level at each subway station, get optimized route for them to go from their current
        locations to the subway stations/bike stations of their choices based on congestion level
- Example: Can't find any existing examples
Option 2:
- Users: anyone interested in art and museums
- Usage: show users all information and locations of museums in the US, allow them to filter by locations and other criteria,
        get routes for them to transport from their current locations to the museums they want to visit, maybe include some
        analysis of number of museums by state/region
- Example: http://museumstat.org/#/
Option 3:
- Users: Chicago Divvy bike share system operators + users
- Usage: visualize usage pattern of all bike stations, such as trip counts between a time period according to users choices,
        show the optimized route from users' current location to the stations they want to go
- Example: https://urbica.co/bikes/

#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through modals, through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

I will include a map area, a side bar as well as a header.

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

Other than the example provided (asynchronous behavior), the most difficult part for option 1 is connecting backend and frontend data.

## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).

How to display regression and prediction results from R using JavaScript?
