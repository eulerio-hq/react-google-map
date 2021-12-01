import {EULERIO_KEY,EULERIO_ENDPOINT} from "../Constants.js";

export const simpleMapService = {
    getLandmarks,
    createLandmarks,
    getLandmarksFiltered,
};

function getRequestHeaders() {
  var requestHeaders = new Headers();
  requestHeaders.append("Authorization", "Bearer "+EULERIO_KEY);
  requestHeaders.append("Content-Type", "application/json");
  return requestHeaders
}

async function getLandmarks() {
  var requestObj = {  method: "GET", headers: getRequestHeaders() }
  return fetch(EULERIO_ENDPOINT,requestObj)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((result) => {
        result.show = false;
        if(result.category == null)
        {
          result.category = "UnKown"
        }
        if(result.starRating == null)
        {
          result.starRating= 0
        }
      });
     return { places: data };
    });
}

async function createLandmarks(addPinDetails){
  let requestObj = {  method: "POST", headers: getRequestHeaders(), body: JSON.stringify(addPinDetails) }
  let pinData  = await fetch(EULERIO_ENDPOINT,requestObj)
        .then((response) => response.json())
        .then((data) => {
          if(data)
          {
            data.show = false;
            return data
          }

        });
   return pinData;
}

async function getLandmarksFiltered(categoryFilterValue,ratingFilterValue) {
  var requestObj = {  method: "GET", headers: getRequestHeaders() }
  let filterUrl = EULERIO_ENDPOINT

  if(ratingFilterValue !== "nofilter"){
      filterUrl = filterUrl+"?starRating[eq]="+ratingFilterValue
  }

  if(categoryFilterValue !== "nofilter"){
    if(ratingFilterValue !== "nofilter"){
      filterUrl = filterUrl+"&"
    }
    else{
      filterUrl = filterUrl+"?"
    }
    filterUrl = filterUrl+"category[eq]="+categoryFilterValue
  }
  return fetch(filterUrl,requestObj)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((result) => {
        result.show = false;
        if(result.category == null)
        {
          result.category = "UnKown"
        }
        if(result.starRating == null)
        {
          result.starRating= 0
        }
      });
     return { places: data };
    });

}
