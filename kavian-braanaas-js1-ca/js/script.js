// My personal API Key
const apiKey = "AIzaSyBGL-dnU3hqs_Bqwj5RV1xbPZYDq0iimgg";
// Base URL for Youtube's "Data V3 Api"
const baseApiUrl = "https://www.googleapis.com/youtube/v3/";
// Sets the channel's username as the unique parameter used to identify the channel
const forUsername = "wired";
// "part" is the API's required prefix to retrieve (my desired) parameters: "snippet" and "contentDetails"
const part = "part=snippet%2CcontentDetails";

// API call
async function getChannelByUsername() {
  try {
    const channelRequest = `${baseApiUrl}channels?${part}&forUsername=${forUsername}&key=${apiKey}`;
    const response = await fetch(channelRequest);
    const channel = await response.json();
    displayChannel(channel);
  } catch (error) {
    console.log(error);
  }
}
getChannelByUsername();

// Display the API objects
function displayChannel(channel) {
  // Hide loader
  const loader = document.querySelector(".loader");
  loader.classList.remove("loader");

  const channelsObject = channel.items;
  //HTML container selectors
  const propertyContainer = document.querySelectorAll("p");
  const imageContainer = document.querySelector(".image");
  const headingContainer = document.querySelector("h4");
  const buttonContainer = document.querySelector(".btn");

  // Loops the JSON response
  for (let i = 0; i < channelsObject.length; i++) {
    // JSON objects to be displayed in HTML
    const channelTitle = channelsObject[i].snippet.title;
    const channelDescription = channelsObject[i].snippet.description;
    const channelId = channelsObject[i].id;
    const detailsId = channelsObject[i].contentDetails.relatedPlaylists.uploads;
    const thumbnailUrl = channelsObject[i].snippet.thumbnails.medium.url;

    // Creates HTML containing JSON objects
    buttonContainer.outerHTML = `<a class="btn btn-primary" href="details.html?id=${detailsId}">Details</a>`;
    headingContainer.outerHTML = `<h4 class="name">${channelTitle}</h4>`;
    imageContainer.src = thumbnailUrl;
    propertyContainer[0].outerHTML = `<p><b>Description:</b> ${channelDescription}</p>`;
    propertyContainer[1].outerHTML = `<p><b>Channel ID:</b> ${channelId}</p>`;
  }
}
