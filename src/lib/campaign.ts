export const PHONE_DISPLAY = "+91 88700 44870";
export const PHONE_TEL = "+918870044870";
export const WHATSAPP_URL =
  "https://wa.me/918870044870?text=" +
  encodeURIComponent(
    "Hello, I would like to book a site visit for one of the final 5 plots at Albatross, Pattanam / Peedampalli.",
  );
export const EMAIL = "info@sribabyproperties.com";
export const OFFICE =
  "1st Floor, Mayflower Signature, Near PSG Tech, Avinashi Road, Peelamedu, Coimbatore — 641004";
export const SITE_OFFICE =
  "2/149B, Kanakkan Thottam, Peedampalli, Nadupalayam, Coimbatore — 641016";

export const MAP_LAT = 10.97522;
export const MAP_LNG = 77.07838;
export const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=16&output=embed`;
export const MAP_LINK = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}`;

export const SOLD = 105;
export const REMAINING = 5;
export const TOTAL = 110;
export const ACRES = 6;

export const IMAGES = {
  hero: "/images/albatross/hero.jpg",
  aerial01: "/images/albatross/aerial-01.jpg",
  aerial02: "/images/albatross/aerial-02.jpg",
  aerial03: "/images/albatross/aerial-03.jpg",
  aerial04: "/images/albatross/aerial-04.jpg",
  aerial05: "/images/albatross/aerial-05.jpg",
  aerial06: "/images/albatross/aerial-06.jpg",
  aerialWide: "/images/albatross/aerial-wide.jpg",
  aerialLayout: "/images/albatross/aerial-layout.jpg",
  entrance: "/images/albatross/entrance.jpg",
  roads: "/images/albatross/roads.jpg",
  playground: "/images/albatross/playground.jpg",
  sciencePark: "/images/albatross/site-01.jpg",
  amenitiesPark: "/images/albatross/amenities-park.jpg",
  film: "/images/albatross/film.mp4",
  ayisha: "/images/albatross/testimonial-ayisha.jpg",
  ramesh: "/images/albatross/testimonial-ramesh.jpg",
} as const;

export const WHY = [
  {
    n: "01",
    title: "Premium location",
    kicker: "Pattanam / Peedampalli, Coimbatore",
    copy: "A fast-developing residential corridor with everyday connectivity — close to the L&T Bypass, schools, hospitals, and the airport.",
    image: IMAGES.aerial01,
    alt: "Aerial view of Albatross plotted community in Peedampalli, Coimbatore",
  },
  {
    n: "02",
    title: "Thoughtfully planned",
    kicker: "6-acre plotted community",
    copy: "One hundred and ten plots across six acres. Roads, drainage, and open space were designed before the first family arrived.",
    image: IMAGES.aerialLayout,
    alt: "Albatross layout with blacktop internal roads and plotted parcels",
  },
  {
    n: "03",
    title: "Gated community",
    kicker: "Secure, planned residential environment",
    copy: "A compound wall, a named entrance, and a community that already feels lived-in — not a layout on a drawing.",
    image: IMAGES.entrance,
    alt: "Albatross gated entrance on the Peedampalli road",
  },
  {
    n: "04",
    title: "Modern infrastructure",
    kicker: "Blacktop roads, drainage, street lighting",
    copy: "Asphalt roads with kerbs, storm-water drainage, and lighting already in place. Ready to build, not waiting on promises.",
    image: IMAGES.roads,
    alt: "Internal blacktop road with landscaping at Albatross",
  },
  {
    n: "05",
    title: "Lifestyle amenities",
    kicker: "Clubhouse, play area, science-themed park",
    copy: "A children’s play area, landscaped walks, a science-themed park, and a clubhouse — uncommon for a plotted community of this scale.",
    image: IMAGES.playground,
    alt: "Children’s play area at Albatross Coimbatore",
  },
  {
    n: "06",
    title: "Long-term potential",
    kicker: "A developing residential corridor",
    copy: "Peedampalli sits on Coimbatore’s eastern growth line — bypass, airport, and expanding neighbourhoods. One hundred and five families have already taken a position here.",
    image: IMAGES.aerial03,
    alt: "Albatross aerial looking toward the Coimbatore hills",
  },
] as const;

export const AMENITIES = [
  { title: "Clubhouse", image: IMAGES.amenitiesPark, alt: "Clubhouse and landscaped court at Albatross" },
  { title: "Children’s play area", image: IMAGES.playground, alt: "Colourful children’s play equipment at Albatross" },
  { title: "Science-themed park", image: IMAGES.sciencePark, alt: "Science-themed park with DNA sculpture at Albatross" },
  { title: "Landscaped spaces", image: IMAGES.aerial06, alt: "Landscaped internal roads and planting at Albatross" },
  { title: "Internal roads", image: IMAGES.roads, alt: "Blacktop internal road with flowering hedges" },
  { title: "Security", image: IMAGES.entrance, alt: "Staffed Albatross entrance and compound" },
] as const;

export const CONNECTIVITY = [
  { mins: "02", label: "L&T Bypass", lat: 10.9798, lng: 77.0615 },
  { mins: "02", label: "SBIOA School", lat: 10.9832, lng: 77.0574 },
  { mins: "05", label: "SRK Miraj Cinemas", lat: 10.9986, lng: 77.0408 },
  { mins: "10", label: "Royal Care Hospital", lat: 11.05911, lng: 77.08935 },
  { mins: "15", label: "Chitra Airport", lat: 11.03, lng: 77.0434 },
  { mins: "15", label: "Coimbatore Railway Station", lat: 11.0014, lng: 76.9661 },
] as const;

export const TRUST = [
  { value: "30+", label: "Years group legacy" },
  { value: "6+", label: "Lakh sq.ft. developed" },
  { value: "200+", label: "Happy families" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "I’m very much happy about my decision.",
    name: "Ms. Ayisha",
    place: "Bangalore",
    image: IMAGES.ayisha,
    video: "https://www.youtube.com/embed/K4FnRBcXp1s",
  },
  {
    quote: "This is the plot I was looking for.",
    name: "Mr. Ramesh",
    place: "Albatross, Coimbatore",
    image: IMAGES.ramesh,
    video: "https://www.youtube.com/embed/Bgoaj91Eqyk",
  },
] as const;

export const PLOT_SIZES = [
  "Up to 3 cents",
  "3 – 4 cents",
  "4 – 5 cents",
  "Not sure yet",
] as const;
