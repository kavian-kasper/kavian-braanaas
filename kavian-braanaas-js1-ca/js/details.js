// My personal API Key
const apiKey = "AIzaSyBGL-dnU3hqs_Bqwj5RV1xbPZYDq0iimgg";
// Api base url
const baseApiUrl = "https://www.googleapis.com/youtube/v3/";
// "part" is the API's required prefix to retrieve (my desired) parameters: "snippet" and "contentDetails"
const part = "part=snippet%2CcontentDetails";
// Finds the the channel's "uploads" id in the query string
// and uses it as the unique parameter used to identify the channel's playlist
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// call API
async function getChannelDetails() {
  try {
    // api URL for requesting details
    const detailsApiUrl = `${baseApiUrl}playlistItems?${part}&playlistId=${id}&key=${apiKey}`;
    const response = await fetch(detailsApiUrl);
    const details = await response.json();
    console.log(details);
    displayDetails(details);
  } catch (error) {
    console.log(error);
  }
}
getChannelDetails();

function displayDetails(details) {
  const detailsObject = details.items;

  // HTML container
  const contentContainer = document.querySelector(".container.content");
  // HTML that will be assigned to the innerHTML of the HTML container
  let html = "";

  for (let i = 0; i < detailsObject.length; i++) {
    const descriptions = detailsObject[i].snippet.description;
    const descriptionsTrimmed = descriptions.substr(0, 200) + " .....";
    const images = detailsObject[i].snippet.thumbnails.medium.url;
    const titles = detailsObject[i].snippet.title;
    const videoId = detailsObject[i].contentDetails.videoId;

    const details = `<div class="detail-container">
                        <img class="details-image" src="${images}" alt="${titles}"/>
                        <div class="detail-details">
                        <h1>${titles}</h1>
                        <p><b>Description:</b> <span class="value" id="propertyName">${descriptionsTrimmed}</span></p>
                        <a href="https://www.youtube.com/watch?v=${videoId}">Video Link</a>
                        </div>
                    </div>`;

    html += details;
  }
  contentContainer.innerHTML = html;
}
