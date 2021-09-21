HTML Tutorial
=================

## HTML Time again. Let's Go!

### Video and Audio Tags (index.html)

The `<video>` tag is used to embed video content in a document (website). All you need to provide the location of video file in the src attribute on a `source` tag. Each `source` tag needs to be nested inside of the `video` tag.

Example

```
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

Review: Which element is the parent tag, video or source?

Review: Which element is the child tag, video or source?

You can adjust the width and height of the video by changing the values for the width and height attributes on the video tag.

Let's check out how to read the documentation and try out some features. Click the video tag documentation below/

The `<audio>` tag is used to embed audio content in the document (the website). Again, all you need to provide is the location fo the audio file in the src attribute in `<source>` tag which is nested in the `<audio>` tag.


example

```
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

if you copy and paste the code above into the index.html file what happens?

Why does it not work?

We need to update the src attribute with the location of the audio files that exist/we want to use.

Delete the source tag that has the ogg format. The audio tag allows us to use multiple source files just in case one does not load. Since we do not have any ogg format video files we will just remove it.

Update the src attribute value to be `./music/song1.mp3`

The `.` stands for current directory(folder)? The folder that this index.html file is in is the `web-dev-spring-2021/week-1/day-2` folder.

Add another audio tag for song2.mp3

### Forms

Let's check out the documentation

example to play with:

```
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

Review: What type element is label, inline or block?

Review: What type of element is input, inline or block?

Critical Thinking: Why does it matter????

The `<form>` tag is a parent tag that has children for label and input tags. You do not always need to use the parent tag form if you want to use input fields. The `<form>` tag is primarily just a container element and is more vebose/semantic for html readers.

The `<label>` tag is for the end user's sake so they know which field will store what data. It is a good practice to use the `for` attribute when using the `label` tag. The value of the `for` attribute will be the `id` name that is an attribute on the corresponding input field.

The `<input>` tag can take on many forms depending on what value you specify for the `type` attribute.
e.g. type can be:

* radio
* text
* checkbox
* submit
* button


each type will give you a different type of element

Create 5 different input fields with each type above to see the difference.

Uncomment the form in the index.html

Ugh. Why don't the input fields line up vertically?

Critical Thinking: How can we fix this issue? Why does that work?

Challenge: Implement the alignedForm mockup using table.
- Slack an instructor when you have finished or if you're stuck

Challenge: Implement the musicPlayer.png
- Slack an instructor when you have finished or if you're stuck


Here's some lists Resources:
 **[Quality Video Downloads](https://www.pexels.com/search/videos/nature/)** <br>
**[Video Tag Documentation](https://www.w3schools.com/tags/tag_video.asp)** <br>
**[Audio Tag Documentation](https://www.w3schools.com/tags/tag_audio.asp)** <br>
**[Form Tag Documentation](https://www.w3schools.com/html/html_forms.asp)** <br>



