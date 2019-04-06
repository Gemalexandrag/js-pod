let paintColor = "white";

$("td").click((e) => {
 console.log(paintColor);
 $(e.target).attr("style", "background-color:" + paintColor);
});

$("#color-palette div").click((e) => {
  paintColor = $(e.target).attr("class");
  console.log(paintColor);
});
