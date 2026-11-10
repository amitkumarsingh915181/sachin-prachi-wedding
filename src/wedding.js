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
      title: 'Bariksha and Haldi/Mendhi Ceremony',
      description: 'A joyful ceremony of turmeric and henna to bless the couple',
      dateLabel: 'Haldi & Mehndi',
      date: '29 Nov 2026',
      day: 'Sun',
      bariksha: 'Nov 25th, 2026',
      barikshaFirst: true,
      bgImage: '/image/imgi_3_image.webp',
      baraatDetails: {
        date: 'Monday, 30 November 2026',
        departure: '05:00 PM from our residence (Gram-Kantihar, Post-Bhaon, Raebareli)',
      },
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony',
      description: 'The auspicious wedding rituals and the exchange of garlands',
      date: '30 November 2026',
      day: 'Monday',
      times: [
        { label: 'Arrival & Reception', time: '07:30 PM' },
        { label: 'Varmala Ceremony', time: '10:00 PM' },
      ],
      venue: 'Gram-Pure Babuji Pali, Post-Maharajganj, District-Raebareli',
      bgImage: '/image/imgi_5_image.webp',
    },
  ],

  // Venue / Map
  venues: [
    {
      title: 'Baraat Departure',
      subtitle: 'Our Residence',
      name: 'Gram-Kantihar, Post-Bhaon, Raebareli',
      mapEmbed: 'https://maps.google.com/maps?q=26.1314678,81.2658691&z=15&output=embed',
      directionsUrl: 'https://maps.app.goo.gl/W9AKWaptjb5TomuF8',
    },
    {
      title: 'Wedding Ceremony & Arrival',
      subtitle: 'Destination (Arrival)',
      name: 'Gram-Pure Babuji Pali, Post-Maharajganj, District-Raebareli',
      mapEmbed: 'https://maps.google.com/maps?q=26.3959179,81.274292&z=15&output=embed',
      directionsUrl: 'https://maps.app.goo.gl/BhDpMbACcF67gC5RA?g_st=ac',
    },
  ],

  // Date for countdown and footer
  weddingDate: 'Monday, 30 November 2026',
  isoDate: '2026-11-30T17:00:00+05:30',
};
