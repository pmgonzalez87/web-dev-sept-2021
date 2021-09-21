CSS Tutorial
=================

## CSS Time. Let's Go.

Open up your **1 - Basics** folder and open css1.html in your Browser.  

### Inline Styles

```html
<h1>Inline Styles</h1>

<p style="color: blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, alias dignissimos distinctio eligendi illo inventore maiores, perferendis qui, quis quod quos sed sunt unde veniam veritatis vitae voluptate. Delectus, molestiae!</p>

<h3 style="font-size: 50px">Hello, World!</h3>

</body>
</html>
```

So, what are we looking at here?

To write inline styles you use the style attribute with ab equal sign and double quotes.
The first word after first quote, is called a ```property``` what comes after the colon (:) is the ```value```

### CSS Must Know Properties and Values (1 - Basics/css1.html)

- Font-size
- font-weight
- Text-align
- Display
- Border
- border-radius
- Color
- Background
- Height
- Width
- text align
- Box Model

Uncomment the code in the css1.html file one by one in correspondence to the bulleted list above so that you can see how 
the most frequently used property values pairs work.

The first thing we'll look at is the style attribute. You can style all kind of things in that, from colors to widths to heights to borders to weights. But for now, let's just talk color.

So, you might wonder, "what the heck how does that work can I just type any color in that space where red is?" And the answer is no. You can type a ton of colors there, like blue and yellow and cyan and magenta, but you can't just say oasisorange or electricwhite and hope that that'll work.

How do you get a specific color of your liking? Well that's when you use RGB or HEX colors. This is kind of a pain to grasp, it took me a little bit, so I'll explain it as simply as I can: RGB stands for Red, Green, and Blue. You can have the values 0 to 255 in each to form pretty much any color in existance. Whoa. The way to form an RGB code similarly to the one above is simple: style="color: rgb(255,0,0)". In this example, there's 255 reds, 0 greens, and 0 blues. So, it's all red. Boom, simple enough.

Now HEX colors is very similar. It consists of the hashtag sign #, and then 6 hexadecimal digits, which are 0123456789ABCDEF, with F being the highest digit. Like RGB, the first two digits of HEX are reds, the second two digits are blues, and the third couple of digits are greens. So, to write the same color code above, you'd do style="color: #FF0000" to get red, because you have FF for reds, 00 for blues, and 00 for greens. Simple? Simple.

Don't worry, you won't have to come up with RGB and HEX colors yourself. There's plenty of websites and programs and color pickers out there to help you with that. Here's a few:

Color Picker
HTML color codes and names
HTML Color Codes
HTML Color Picker
Try adding colors to various tags on the page! You can make your <h1> the color #005DFC, your <h3> tag rgb(242,127,56), and your <p> tag lightblue. Keep playing til you're happy.

Now, you might see the syntax in your HTML journey where you actually have the color attribute, like <p color="red">wut</p>. Though this is technically allowed, please don't do this. Please. You'll be so much happier in the long run, I promise.

Let's take a deeper look into Chrome Dev tools. Don't work Firefox and most other up to date browsers
have this feature. Right click on the page in your browser and select inspect. We can take a look at the
the default and specific settings that were applied to the content on the page.



Whoa ho ho, slow down there.  What the heck is with these multiple values for one property  `border: 1px solid` signs??  Well, one property can have multiple specifications to make it how you like it.
You can specify the thickness of the border and if you want it solid or dashed or dotted. Its all in the documentation.

OK OK Ok, but what about the `%` signs? what this means is that if, for example, a tag's `width` is `75%`, then it's width on the page will be 75% of it's *containing element.*
So when you see that the `.menu` class has a `width: 15%;`, it takes up 15% of its containing element's width, which is the `<body>` tag.

Typically, the `height` property defaults to `0%` of its container and the `width` property defaults to `100%`.  
This is why we had to style the `height` properties of both `<html>` and `<body>`.

Why does height at 20% do nothing and height at 200px make the height larger?

Remember that the percentage is based on it's container. If the container does not have a specified height or it's defaulted to 0% itself
then were left with just the amount of space the content takes up.


## CSS is magical, and you're gonna learn it.

So far, we've been making things pretty the wrong way. 

Right now, I'm going to show you how to write CSS just straight in your HTML documents.  That's still kind of wrong, but it'll give you the basics.  After that, we'll move into the big leagues and have separate files for everything.  Pumped.  

Let's take out the barebones part and just make it pretty.

We're going to be working in the `<head>` tag again.  Underneath the `<title>` tag, stick in the following:

```html
<style>
	body { }

	h1 { }

	p { }

	ol { }
</style>
```

Congratulations.  You have some empty CSS.  Now, what the heck is CSS anyway?  Well, CSS stands for *Cascading Style Sheets*.  Gee whiz, that word *style* is everywhere.  And it's true.  The `style` attribute is for styling *inline* HTML (just that line of code), the `<style>` tag is for holding CSS, and CSS *defines* the styles!  Let that sink in.  Nice.  Stylish.  Just like you.

Now, you'll notice some familiar keywords in there, in particular, `body`, `h1`, `p`, and `ol`.  That's right, they're the tags we know and love!  But, in CSS, these are called *selectors*.  The selector tells us what tag you're about to style.  So, whatever code you put in between the curly braces `{}` after the `body` selector will affect everything in the `<body>` tags.  Whatever you put in the braces after the `p` selector will affect what's in the `<p>` tags.
Whatever code you have in those curly braces will only affect that tag, so if you try editing the font colors for the `h1` selector, it won't affect whatever is in the `p` selector's tags.  Each portion of code `selector { code }` in CSS is called a *declaration*.  Make sense?  Good.  If not, keep reading and hopefully it will become more clear as we go on.

The code that we're going to be putting in each declaration is the same syntax as the code that we normally put in the `style` attribute.  How convenient.  So, change your code above to the following:

```html
<style>
	body {
		font-family: Arial;
	}

	h1 {
		color: red;
		text-align: center;
	}

	p {
		font-weight: bolder;
	}

	img {
		width: 400px;
		border: 5px solid #333333;
	}

	ol {
		color: #333333;
	}
</style>
```

Recognize that?  It's exactly the same!  For each selector, there is a *property* of that selector, and each property has a *value*, just like how we wrote it in the `style` attributes!

You will always have your CSS in the syntax, `selector { property: value; property: value; }`.  I've only shown you some properties so far, but don't worry.  There are plenty more to come.

Try playing around with the CSS we have right now.  Edit the colors, add some borders, change the font styles.  Don't forget your semicolons!



Whoa ho ho, slow down there.  What the heck is with these `%` signs??  Well, what this means is that if, for example, a tag's `width` is `75%`, then it's width on the page will be 75% of it's *containing element.*
So when you see that the `.menu` class has a `width: 15%;`, it takes up 15% of its containing element's width, which is the `<body>` tag. 

###### Background color

One property that you will learn to know and love is `background-color`.  
It does exactly what you would expect it to: it sets the background color of the element it is styling!  
You can fill it in with HEX colors or RGB colors, just like we learned earlier, and the default color is white.

Let's add some backgrounds.

```css
html {
	height: 100%;
}
body {
	height: 100%;
    background-color: #99B5DD;
}

div {
    background-color: firebrick;
}
```

Save in your editor and now refresh in that browser! WOW. COLOR. 

############# Display

Display actually changes the structure of the element. You can change most elements to either a block, inline-block or inline.


## Box Model

Everything in CSS has a box around it, and understanding these boxes is key to being able to create layouts with CSS, or to align items with other items. In this lesson, we will take a proper look at the CSS Box Model so that you can build more complex layout tasks with an understanding of how it works and the terminology that relates to i

The full CSS box model applies to block boxes, inline boxes only use some of the behavior defined in the box model. The model defines how the different parts of a box — margin, border, padding, and content — work together to create a box that you can see on the page. To add some additional complexity, there is a standard and an alternate box model.

Parts of a box
Making up a block box in CSS we have the:

Content box: The area where your content is displayed, which can be sized using properties like width and height.
Padding box: The padding sits around the content as white space; its size can be controlled using padding and related properties.
Border box: The border box wraps the content and any padding. Its size and style can be controlled using border and related properties.
Margin box: The margin is the outermost layer, wrapping the content, padding and border as whitespace between this box and other elements. Its size can be controlled using margin and related properties.

The below diagram shows these layers:

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png

The standard CSS box model
In the standard box model, if you give a box a width and a height attribute, this defines the width and height of the content box. Any padding and border is then added to that width and height to get the total size taken up by the box. This is shown in the image below.

If we assume that the box has the following CSS defining width, height, margin, border, and padding:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

The space taken up by our box using the standard box model will actually be 410px (350 + 25 + 25 + 5 + 5), and the height 210px (150 + 25 + 25 + 5 + 5), as the padding and border are added to the width used for the content box.


Browser DevTools view of the box model

