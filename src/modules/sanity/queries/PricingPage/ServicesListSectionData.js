import { sanityClient } from "@modules/sanity/client";

const imageProjection = `{
  "_id": asset->_id,
  "_rev": asset->_rev,
  "url": asset->url,
  "altText": coalesce(alt, asset->altText),
  "crop": crop,
  "description": asset->description,
  "dimensions": asset->metadata.dimensions,
  "hotspot": hotspot,
  "lqip": asset->metadata.lqip,
  "title": asset->title
}`;

const mediaProjection = `{
  type,
  aspectRatio,
  highResolution,
  "image": image${imageProjection},
  externalVideoUrl,
  videoOptions
}`;

const SERVICES_LIST_QUERY = `*[_type == "servicesListSection"][0]{
  theme,
  "headline": content.headline{ level, text },
  "label": content.label,
  "media": content.media${mediaProjection},
  "items": content.servicesList.items[]{ text },
  "options": content.servicesList.options{ animated, pushEffect }
}`;

export async function getServicesListSectionData() {
  return sanityClient.fetch(SERVICES_LIST_QUERY, {}, { next: { revalidate: 60 } });
}
