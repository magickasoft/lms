export const getCourseThumbnail = (media: any, size: string) => {
  if (media[0] == undefined) {
    return null;
  }

  const id = media[0]?.id;
  const fileExtension = media[0]?.file_name.split('.').pop();
  const fileName = media[0]?.file_name.replace('.' + fileExtension, '');
  let fileThumbnail = '';

  if (media[0]?.generated_conversions.hasOwnProperty('thumb_' + size)) {
    fileThumbnail = '-thumb_' + size;
  }
  return `https://author.edston.com/storage/media/${id}/conversions/${fileName}${fileThumbnail}.${fileExtension}`;
};
