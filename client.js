import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const client = sanityClient({
  projectId: projectId,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
