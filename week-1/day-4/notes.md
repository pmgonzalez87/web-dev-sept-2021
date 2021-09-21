# Flexbox

Flexbox is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.

##Why Flexbox?
For a long time, the only reliable cross browser-compatible tools available for creating CSS layouts were things like floats and positioning. These are fine, and they work, but in some ways they are also rather limiting and frustrating.

The following simple layout requirements are either difficult or impossible to achieve with such tools, in any kind of convenient, flexible way:


Vertically centering a block of content inside its parent.
Making all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
Making all columns in a multiple-column layout adopt the same height even if they contain a different amount of content.

#### Specifying what elements to lay out as flexible boxes
To start with, we need to select which elements are to be laid out as flexible boxes. To do this, we set a special value of display on the parent element of the elements you want to affect. In this case we want to lay out the <article> elements, so we set this on the <section>:

```
section {
  display: flex;
}
```
Copy to Clipboard
This causes the <section> element to become a flex container, and its children to become flex items. The result of this should be something like so:



So, this single declaration gives us everything we need — incredible, right? We have our multiple column layout with equal-sized columns, and the columns are all the same height. This is because the default values given to flex items (the children of the flex container) are set up to solve common problems such as this.

To be clear, let's reiterate what is happening here. The element we've given a   display value of flex to is acting like a block-level element in terms of how it interacts with the rest of the page, but its children are being laid out as flex items. The next section will explain in more detail what this means. Note also that you can use a display value of inline-flex if you wish to lay out an element's children as flex items, but have that element behave like an inline element.

##The flex model
When elements are laid out as flex items, they are laid out along two axes:

**[The Flex Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox/flex_terms.png)** <br>

The main axis is the axis running in the direction the flex items are being laid out in (e.g. as rows across the page, or columns down the page.) The start and end of this axis are called the main start and main end.
The cross axis is the axis running perpendicular to the direction the flex items are being laid out in. The start and end of this axis are called the cross start and cross end.
The parent element that has display: flex set on it (the <section> in our example) is called the flex container.
The items being laid out as flexible boxes inside the flex container are called flex items (the <article> elements in our example).
Bear this terminology in mind as you go through subsequent sections. You can always refer back to it if you get confused about any of the terms being used.

## Columns or rows?
Flexbox provides a property called flex-direction that specifies what direction the main axis runs in (what direction the flexbox children are laid out in) — by default this is set to row, which causes them to be laid out in a row in the direction your browser's default language works in (left to right, in the case of an English browser).

Try adding the following declaration to your <section> rule:

flex-direction: column;
Copy to Clipboard
You'll see that this puts the items back in a column layout, much like they were before we added any CSS. Before you move on, delete this declaration from your example.

Note: You can also lay out flex items in a reverse direction using the row-reverse and column-reverse values. Experiment with these values too!

## Wrapping
One issue that arises when you have a fixed amount of width or height in your layout is that eventually your flexbox children will overflow their container, breaking the layout. Have a look at our flexbox-wrap0.html example, and try viewing it live (take a local copy of this file now if you want to follow along with this example):



Here we see that the children are indeed breaking out of their container. One way in which you can fix this is to add the following declaration to your <section> rule:

flex-wrap: wrap;
Copy to Clipboard
Also, add the following declaration to your <article> rule:

flex: 200px;
Copy to Clipboard
Try this now; you'll see that the layout looks much better with this included:

We now have multiple rows — as many flexbox children are fitted onto each row as makes sense, and any overflow is moved down to the next line. The flex: 200px declaration set on the articles means that each will be at least 200px wide. We'll discuss this property in more detail later on. You might also notice that the last few children on the last row are each made wider so that the entire row is still filled.

But there's more we can do here. First of all, try changing your flex-direction property value to row-reverse — now you'll see that you still have your multiple row layout, but it starts from the opposite corner of the browser window and flows in reverse.
