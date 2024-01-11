export const getCroppedImageUrl = (
  url: string,
  width: number,
  height: number
) => {
  const originalUrl = url.replace('media/', `media/crop/${width}/${height}/`)
//   console.log("url with media etc inserted in image-url ***********",originalUrl)
  return originalUrl;
}
