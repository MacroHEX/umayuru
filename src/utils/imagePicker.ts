export const imagePicker = (count: number, folder: string): string => {
  const images: string[] = [];

  for (let i = 1; i <= count; i++) {
    images.push(`/img/${folder}/${i.toString().padStart(2, "0")}.png`);
  }

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return randomImage;
};

export default imagePicker;
