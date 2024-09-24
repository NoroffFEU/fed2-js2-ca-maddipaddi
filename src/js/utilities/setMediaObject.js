export function setMediaObject(stringURL, stringAlt) {
    const media = {
       url: stringURL,
       alt: stringAlt
     }

     if (stringURL === "") {
      return null;
     } else {
       return media;
      }
   }