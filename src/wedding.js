// Personalised wedding details for Sachin & Prachi.
// Update any venue, timing, RSVP, or map information that is still a placeholder.
export const wedding = {
  groom: 'Sachin',
  bride: 'Prachi',
  year: '2026',

  // Parents (update these placeholders)
  groomParents: {
    relation: 'S/O',
    mother: 'Smt. Sunita Devi',
    father: 'Shri Suresh Singh',
  },
  brideParents: {
    relation: 'D/O',
    mother: 'Smt. Rekha Singh',
    father: 'Shri Lav Singh',
  },

  // Host family
  hostFamily: 'Sachin\'s Family',

  // Events
  events: [
    {
      id: 'haldi',
      title: 'Haldi',
      description: 'A joyful turmeric ceremony to bless the couple',
      date: '29 Nov 2026',
      day: 'Sun',
      times: [{ label: 'Haldi', time: '04:00 PM - 06:00 PM' }],
      venue: 'Raebareli, Uttar Pradesh',
      bgImage: '/image/imgi_3_image.webp',
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony',
      description: 'The baraat, the exchange of garlands and the wedding rituals',
      date: '30 Nov 2026',
      day: 'Mon',
      times: [
        { label: 'Baraat', time: '06:00 PM' },
        { label: 'Varmala Ceremony', time: '10:00 PM' },
      ],
      venue: 'Raebareli, Uttar Pradesh',
      bgImage: '/image/imgi_5_image.webp',
    },
  ],

  // Venue / Map
  venues: [
    {
      name: 'Raebareli, Uttar Pradesh',
      mapEmbed: 'https://maps.google.com/maps?q=Raebareli%2C%20Uttar%20Pradesh%2C%20India&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Raebareli%2C%20Uttar%20Pradesh%2C%20India',
    },
  ],

  // Date for countdown and footer
  weddingDate: '30th November 2026',
  isoDate: '2026-11-30T18:00:00+05:30',
};
