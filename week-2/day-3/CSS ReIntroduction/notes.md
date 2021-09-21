##CSS Positioning

https://developer.mozilla.org/en-US/docs/Web/CSS/position_value

## Z - index

https://developer.mozilla.org/en-US/docs/Web/CSS/z-index


##Using the transform property

By using CSS transform property, you can make elements change their appearance. It works with most of the HTML elements, except elements that are not controlled by the box model. Additionally, transform cannot work with non-replaced inline, table-column-group, and table-column boxes.

The transform property accepts only two values: one of the specific transform functions or none (indicates that transform does not apply).

###Transform: translate
The CSS transform: translate() property is for moving elements to the left or right side, or up and down. It accepts two values:

One value means that element will be moved up and down or side-to-side. Remember that negative values move elements to the left, positive ones to the right.
The second value pushes the element down. Negative values move elements up, while positive ones move them down.
The following example moves an HTML element to the right and down with the two values:

```css
div {
  width: 80px;
  height: 80px;
  background-color: green;
}

.example1 {
  background-color: purple;
  color: white;
  border-radius: 5px;
  transform: translate(20px, 50px);
}
```

It is also possible to move elements along the horizontal or vertical axis. The translateY moves elements vertically, while translateY pushes them horizontally.

```css
div {
  width: 80px;
  height: 80px;
  background-color: green;
}

.example1 {
  transform: translateY(130px); 
  background-color: purple;
}
```

Transform: scale
The CSS transform: scale() property is for scaling elements.

If one value is specified, the element scales the specified number of times its original size. When you set two values, the element stretches horizontally according to the first value, and vertically by the second one.

The following example resizes an element six times its normal size:

```css
.example1 {
  background-color: purple;
  height: 100px;
  width: 100px;
  transform: scale(6);
}
```

###Preview To Animation
Transform: rotate
The CSS transform: rotate() is for making elements move around a fixed point. By default, it rotates around the center of the element.

The following example creates an animation of rotation:

```css
div {
  display: inline-block;
  background-color: purple;
  height: 200px;
  width: 150px;
  padding: 1px;
  margin: 5px;
  border-radius: 100%;
  animation: roll 5s infinite;
  transform: rotate(30deg);
}

@keyframes roll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

rotateX() is for making elements rotate around the horizontal axis. The function does not deform the element. It works the same as rotate3d(1,0,0,a).

The rotateX() works with angle values. If they are positive, the element moves clockwise. Negative values make the element move in the opposite direction.

```css
div {
  width: 100px;
  height: 100px;
  background-color: green;
}

.example1 {
  transform: rotateX(45deg);
  background-color: purple;
}
```

Credit: https://www.bitdegree.org/learn/css-transform


### Visibility vs Display

####Definition and Usage

The visibility property specifies whether or not an element is visible.

Tip: Hidden elements take up space on the page. Use the display property to both hide and remove an element from the document layout!

Credit: https://www.w3schools.com/cssref/pr_class_visibility.asp

### Hover and Focus

https://www.w3schools.com/cssref/sel_hover.asp

https://www.w3schools.com/cssref/sel_focus.asp


