Howdy other developer person! I've included comments across the sites' files to show you which section is what, along with direct links to specific facets of each site as you see them. This should take the guesswork out with determining what code does what and which plugins are being used. I've added some tips below that I ended up learning along the way of putting this site together, so's to try and help you go through trial & error to see how things work.


Plugins:
========
http://isotope.metafizzy.co/


ISOTOPE FILTER SNIPPET
======================
```
  <div class="filter-resources filters">
    <h1>Filter Resources</h1>
    <p>Use the following controls to filter resources by audience, resource type, and/or STAR practice.</p>
    <div class="audience button-group filters-button-group">
      <h2>Audience</h2>
      <ul>
        <button class="button" data-selected="0" data-filter=".students">Students</button>
        <button class="button" data-selected="0" data-filter=".veterans">Veterans</button>
        <button class="button" data-selected="0" data-filter=".educators">Educators</button>
        <button class="button" data-selected="0" data-filter=".serviceProviders">Service Providers</button>
        <button class="button" data-selected="0" data-filter=".employers">Employers</button>
      </ul>
    </div>
```

1. You need to keep "filter-resources" in that parent class or Isotope wont know where to fetch the categories for each filter
2. Each button group is preceded by its category, so in this instance, "audience button-group filters-button-group" is establishing a button group for the audience category.
3. I know it seems redundant, but you NEED to have each filter category be a button, and each button needs a class name of "button". That's just isotope conventions.
4. data-selectioned="0" is part of some js I wrote to allow users to disable filters by clicking on it a second time, while also having multiple selections per category. Leave that one alone and make sure it's included in any extra categories you add.
5. data-filter is isotope conventions as well. Gonna need to include that as I've laid it out for you if you intend to add filters.



ISOTOPE CARD SNIPPET
====================
```
  <section class="card element-item apps accomodations veterans podcasts">
    <div class="card_inner">
      <p class="card_resource">Apps</p>
      <h1 class="card_title"><a href="#" target="blank"> Michael Caine </a></h3>
      <p class="card_excerpt">Jasper: your baby is the miracle the whole world has been waiting for. You know, your bobby dangler, giggle stick, your general-two-colonels, master of ceremonies... yeah, don't be shy, let's have a look. My lord! you're a tripod!</p>
      <p class="card_audience">Audience: Veterans, podcasts</p>
      <div class="card_tag">
        <span class="fa fa-star"></span><p>Accomodations</p>
      </div>
    </div>
  </section>
```
  1) Most of these class names are semantic tags that made it easier for me to code
  2) Each section parent gets class names relative to the tags they're responsible for. So if a parent has an audience for Students and Employers, while also having a tag of Technology and a resource tag of Apps, then you must include all those tags in the section class names for it to be filtered as such. Really, all the work is done within that section class setting. After that, you just let isotope do it's thing.



Grid / Mobile Responsiveness:
=============================
* http://susy.oddbird.net/

* http://breakpoint-sass.com/

This was my first time using both of these as light-weight solutions for static sites ( I usually just use the 1% CSS Grid or make my own and then hand-code media queries ) and I gotta say, both of these tools are excellent! Definitely look into these if you need to build static sites in the future, especially breakpoint.

* https://www.youtube.com/watch?v=KYpqPZCzbwA&list=PLLnpHn493BHF-TxB5PqpKfJ_XjTwP5utB


How the Footer Works
====================
* http://www.lwis.net/journal/2008/02/08/pure-css-sticky-footer/

Note that with Suzy, the outer container is calculated on the fly depending on your viewport. This is pretty damn nice, other than when you want to set up a full-width sticky footer. You can use the Susy mixin "bleed", which will add a set number of pixels on the bottom as an overflow-y trick, but the end result is pretty flimsy. Cards will fall over the footer and content itself is hard to style as it relies on your background color for the footer color and is really difficult to directly style. I feel the current footer is sufficient for the site itself and looks good on mobile res's.



Notes
=====

There is a config.rb file to make note of, specifically line 13-- its current state automatically minifies everything for production deployment. Change the value to ":expanded" to un-minify everything.


Google Analytics code is in there, just needs your API key to start collecting data. It's commented on the index file where to insert this key, at the very bottom of the file.

Hope this helps!

If you have any questions or are confused by anything, feel free to reach out-- pmiller@jbsinternational.com
