const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "kem48gg2dhxe",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "ktN5R1APDGeURs_aGtNSuYQctMbHTfS9sg-OBsKzqso",
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

var container = document.getElementsByClassName("slideshow-container")[0];

function getData(value) {
  var i = 0;
  const objectLenght = Object.keys(value).length;

  for (; i < objectLenght; i++) {
    var newDiv = document.createElement("div");
    newDiv.className = "mySlides fade";

    /* ********* */

    var imagetag = document.createElement("img");
    let image = "https:" + value[i].fields.image.fields.file.url;
    imagetag.src = image;
    newDiv.appendChild(imagetag);
    /* ********* */

    var captiontag = document.createElement("div");
    captiontag.className = "text";
    let caption = value[i].fields.caption;
    var caption_content = document.createTextNode(caption);
    captiontag.appendChild(caption_content);
    newDiv.appendChild(captiontag);

    /* ********* */
    container.appendChild(newDiv);
  }
}

client
  .getEntries({
    content_type: "rollingPhotos",
  })
  .then((response) => getData(response.items))
  .catch(console.error);
