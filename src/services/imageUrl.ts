import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = function (url: string) {
  if (!url) return noImage;
  const target = "media/";
  const headerIndex = url.indexOf(target) + target.length;
  return url.slice(0, headerIndex) + "crop/600/400/" + url.slice(headerIndex);
};
export default getCroppedImageUrl;
