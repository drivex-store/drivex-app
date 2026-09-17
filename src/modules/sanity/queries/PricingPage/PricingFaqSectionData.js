import { sanityClient } from "@modules/sanity/client";

const PRICING_FAQ_QUERY = `*[_type == "pricingFaqSection"][0]{
  theme,
  "headline": headline{
    level,
    text
  },
  "items": items[]{
    _key,
    headline,
    text
  }
}`;

export async function getPricingFaqSectionData() {
  return sanityClient.fetch(PRICING_FAQ_QUERY, {}, { next: { revalidate: 60 } });
}