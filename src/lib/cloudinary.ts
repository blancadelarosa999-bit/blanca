export function getImageUrl(
  path: string,
  options?: { width?: number; height?: number; quality?: number }
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return path;

  const transforms: string[] = [];
  if (options?.width) transforms.push(`w_${options.width}`);
  if (options?.height) transforms.push(`h_${options.height}`);
  transforms.push(`q_${options?.quality || "auto"}`);
  transforms.push("f_auto");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms.join(",")}/${path}`;
}
