const getCroppedImageUrl = function (url: string) {
  if (url) {
    const target = "media/";
    const headerIndex = url.indexOf(target) + target.length;
    return url.slice(0, headerIndex) + "crop/600/400/" + url.slice(headerIndex);
  }
  return "";
};
export default getCroppedImageUrl;
