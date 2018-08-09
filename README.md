# Optimizing the Marketplace page

![Final version](http://drive.google.com/uc?export=view&id=1_80C0WJcjN7gWknnuREwBXbEnsJjX49b)


&nbsp;
&nbsp;
## The Current Design

I’m going to be working on the design of the **marketplace** itself.

Layout and structure-wise it’s a good start but I think there is room for improvement



&nbsp;
&nbsp;
## Reducing the Header Area

![Original Site Screenshot](http://drive.google.com/uc?export=view&id=16F1gadAmxC5PJu8EJYKws4bN6vQ2VtPC)

&nbsp;

The first and most important thing I’m going to look at on this page is the giant teaser section under the main nav.

If you visit the page from a 15 inch laptop you can’t see any of the main content without scrolling. It’s even worse on mobile devices - you have to scroll almost twice as much as the screen height (on a 4.7” display) to reveal the first listing. The removal of the teaser section brings more attention to the listings where it belongs.

Finally let’s add a title to clearly labelling the page.

&nbsp;

![Screenshot without teaser](http://drive.google.com/uc?export=view&id=1GMtOsPt20JB8qSXrf_0BcN9HBmR-q3T3)

&nbsp;
&nbsp;
## Relocate Newsletter Signup Form

Considering content priority it has to be lower in visual hierarchy. Let’s move the form below the listings table.


![Relocated Signup Form](http://drive.google.com/uc?export=view&id=1SqGDl8VEJjoMA3WocFXg3p2lMcjgsyt-)


&nbsp;
&nbsp;
## Fine-Tuning the Navigation

![Original Navigation](http://drive.google.com/uc?export=view&id=1C3FFVOmcLoe9lxv4wKFZpAuDK8N-i-y4)

&nbsp;

The navigation looks pretty clean and functional, but it would be nice to give it a little more information.

If we would add accent border and a slightly darker background color to the active menu item, it would be more meaningful, more defined. It’s always a good experience if you can see where you are within a site.

[IMAGE - new design darker active item background and border]

Also it would be nice if there was some difference between active and inactive items. So I'm de-emphasizing the inactive text by using a lighter font color.

&nbsp;

![Updated Navigation](http://drive.google.com/uc?export=view&id=1Rkmglx2_Jxy_AvZrfnKz3T7briox_W02)


&nbsp;
&nbsp;
## The Listing Filter

![The Original Tabbar](http://drive.google.com/uc?export=view&id=1LThS-HBwkF4zlisrBZPUJpiaXlbg0VrU)

&nbsp;

The first things to stand out here is probably good idea to convert the top tabs into filters. This way we give the users the chance to easily list multiple listing types at the same time.

Let’s try to move the listing status tab to the top of the section.

What if we remove the search field? Due to the fact that mobile screen estate is limited reducing the filter size is definitly an improvement.

&nbsp;


![Modified Tabbar](http://drive.google.com/uc?export=view&id=1g_pYuFd1PM9MT2TpOARKkkrQu_Jnipp2)


&nbsp;
&nbsp;
## The Listing Item

The listing table is well structured, clean, easy to understand what’s going on. The only thing I would change is the category button. It’s stealing a lot of overall attention.


![Modified category button](http://drive.google.com/uc?export=view&id=1COH0tkYjSonrzo7fCpvpcFiFP0HQBIAd)


&nbsp;
&nbsp;
## Relocating the Search Field

We just removed the search input below the Listing type selector. Let’s move it to the header area. It’s a more conventional location and making a bit easier for users to discover.

To make it even more obvious that it’s a search field i’ve also added a magnifying glass icon to help visitors recognise that its’s a search field without having to read the placeholder text.

![Relocaetd Search Field](http://drive.google.com/uc?export=view&id=1VjJgVhvXhe3UfTr_ylc6jpVIn5TF1ZKw)


&nbsp;
&nbsp;
## The Testimonials Slider

![Original Testimonial Slider](http://drive.google.com/uc?export=view&id=1uA9VHvVCJZ71b7RYq096rq1GhTpx1eIs)

&nbsp;

Right now the quotation has the smallest font size even though it’s the most important content in this section. Let’s increase the font size a little bit and the same time move the cite just below it.

To separate them a little more let’s switch the cite font weight to bold, capitalise it and also add a little bit of letter spacing to make sure it’s easy to read.

&nbsp;

![Updated Testimonial Slider](http://drive.google.com/uc?export=view&id=1ibvuWwAhC8SgP50eqg84FqI73p_aoY6o)


&nbsp;
&nbsp;
## The Footer Area

![Original Footer](http://drive.google.com/uc?export=view&id=1BDETPpnc9-SF1rzD91TGs_MJi_u_i4w8)

&nbsp;

Right now the footer is a little crowded. What if we separate the navigation, the copyright text and the logos. Also let’s try to change the background color to separate more from the above content.

&nbsp;

![Updated Footer](http://drive.google.com/uc?export=view&id=1xDfmwzRI8Xn_fj-0HkethfcN07DQyVEF)
&nbsp;
&nbsp;
&nbsp;
&nbsp;
# The Code
I rebuilt the 'Marketplace' page using React, Redux, Styled Component and Bootstrap. There is a room for improvement (e.g. the table layout on mobile devices or the filter function ) but I think it will gives you an idea what can i offer to you.

## Quick Start
1. Download or clone this repo using
2. Run npm i && npm start

