export const GOOGLE_API_KEY = "<GOOGLE_API_KEY>";
export const EULERIO_KEY = "<EULERIO_ACCESS_KEY>";
export const EULERIO_ENDPOINT = "https://eulerio.com//api/myapi/landmark/";

export  const MAP_OPTIONS = (maps: any) => {
return {
  disableDefaultUI: true,
  mapTypeControl: true,
  streetViewControl: false
};
};

export const START_LAT = 40.68923968;
export const START_LONG = -74.04458703;
export const ZOOM = 8;

export const CATEGORY_OPTIONS = [
  { value: 'unknown', label: 'UnKown' },
  { value: 'historical', label: 'Historical' },
  { value: 'religious', label: 'Religious' },
  { value: 'food', label: 'Food' },
  { value: 'sport', label: 'Sport'}
]

export const NUMBER_OF_STARS=5
