const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "kem48gg2dhxe",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "ktN5R1APDGeURs_aGtNSuYQctMbHTfS9sg-OBsKzqso",
});

// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

var container = document.getElementsByClassName("container-blog")[0];

function getData(value) {
  var i = 0;
  const objectLenght = Object.keys(value).length;
  console.log(objectLenght);
  for (; i < objectLenght; i++) {
    var newDiv = document.createElement("div");

    /* ********* */

    var imagetag = document.createElement("img");
    let image = "https:" + value[i].fields.image.fields.file.url;
    imagetag.src = image;
    newDiv.appendChild(imagetag);

    /* ********* */

    var titletag = document.createElement("h2");
    let title = value[i].fields.title;
    var title_content = document.createTextNode(title);
    titletag.appendChild(title_content);
    newDiv.appendChild(titletag);

    /* ********* */

    var contentDiv = document.createElement("div");
    contentDiv.className = "content";

    /* ********* */

    var captiontag = document.createElement("p");
    let caption = value[i].fields.caption;
    var caption_content = document.createTextNode(caption);
    captiontag.appendChild(caption_content);
    contentDiv.appendChild(captiontag);

    /* ********* */

    var datetag = document.createElement("p");
    let date = value[i].fields.publishingDate;
    var n = date.indexOf("T");
    date = date.substring(0, n) + " | Harsh Vashi";
    var date_content = document.createTextNode(date);
    datetag.appendChild(date_content);
    contentDiv.appendChild(datetag);

    /* ********* */

    newDiv.appendChild(contentDiv);
    var button = document.createElement("a");
    button.href = image;
    button.target = "_blank";
    var button_content = document.createTextNode("View Project");
    button.appendChild(button_content);
    newDiv.appendChild(button);

    /* ********* */

    container.appendChild(newDiv);
  }
}

client
  .getEntries({
    content_type: "project_5",
  })
  .then((response) => getData(response.items))
  .catch(console.error);
