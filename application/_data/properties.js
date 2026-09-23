// Property data for the two Scottsdale homes owned by ArtzHoldings LLC.
// Homes the Company only co-hosts for other owners are not listed here (Operating Agreement Section 2.3).
// Facts, ratings and amenities were pulled from the live Airbnb listings on 2026-09-13.
// Edit names, taglines and fees here; every page reads from this file.

export default [
	{
		slug: "old-town-poolside-retreat",
		compare: { pool: "Heated, gated play pool, included", bestFor: "Families with babies and little kids", outdoor: "Fire pit, cornhole, pergola lounge; arcade inside" },
		editorial: "The pool is fenced, heated to 84°F year-round and free. Inside there is a crib, high chair, arcade cabinet and every baby item you forgot to pack.",
		ownedByCompany: true,
		address: "8329 E Weldon Ave, Scottsdale, AZ 85251",
		strLicense: "2037175",
		name: "Old Town Poolside Retreat",
		shortName: "Poolside Retreat",
		tagline: "Free heated, gated play pool minutes from Old Town. Built for families.",
		airbnbTitle: "OldTown Free Heated Pool 3BR Family Friendly A+Loc",
		airbnb: "https://airbnb.com/h/scottsdale-az",
		airbnbId: "37541411",
		featured: false,
		badge: "Most reviewed",
		bedrooms: 3,
		bathrooms: 2,
		beds: 4,
		guests: 8,
		adultsMax: 6,
		rating: 4.99,
		reviewCount: 136,
		ratingBreakdown: { Cleanliness: 5.0, Accuracy: 5.0, "Check-in": 5.0, Communication: 5.0, Location: 5.0, Value: 4.9 },
		fiveStarShare: 99,
		airbnbRank: "Guest Favorite, top 1% of homes on Airbnb",
		guestsSay: [
			"One of the most loved homes on Airbnb, according to guests.",
			"Guests love this home's spaciousness for a comfortable stay."
		],
		heroImage: { src: "/img/homes/old-town-poolside-retreat/pool-flamingo.jpg", alt: "Private pool with a pink flamingo float and lounge chairs at Old Town Poolside Retreat" },
		cardImage: { src: "/img/homes/old-town-poolside-retreat/pool-flamingo.jpg", alt: "Private pool with a pink flamingo float and lounge chairs" },
		gallery: [
			{ src: "/img/homes/old-town-poolside-retreat/pool-gated.jpg", alt: "Gated play pool with covered patio behind it" },
			{ src: "/img/homes/old-town-poolside-retreat/patio-lounge.jpg", alt: "Covered patio lounge seating overlooking the pool" },
			{ src: "/img/homes/old-town-poolside-retreat/backyard-pergola.jpg", alt: "Shaded outdoor dining under a pergola with bougainvillea" },
			{ src: "/img/homes/old-town-poolside-retreat/backyard-firepit.jpg", alt: "Fire pit seating area and cornhole boards in the backyard" },
			{ src: "/img/homes/old-town-poolside-retreat/living-room.jpg", alt: "Living room with sectional sofa, TV and electric fireplace" },
			{ src: "/img/homes/old-town-poolside-retreat/arcade.jpg", alt: "Retro Pac-Man arcade cabinet in the common space" },
			{ src: "/img/homes/old-town-poolside-retreat/kitchen.jpg", alt: "Full kitchen with white cabinets and breakfast bar" },
			{ src: "/img/homes/old-town-poolside-retreat/dining.jpg", alt: "Dining table for the whole group next to the kitchen" },
			{ src: "/img/homes/old-town-poolside-retreat/master-suite.jpg", alt: "Master suite with king bed and plantation shutters" }
		],
		highlights: [
			{ icon: "pool", title: "Heated pool at no extra charge", text: "A 5 ft deep gated play pool kept at a comfortable 84°F. Pool heating is included in your stay." },
			{ icon: "family", title: "Genuinely family-ready", text: "Crib, pack 'n play, high chair, baby bath, baby monitor, changing table, outlet covers, kids' books and toys all on site." },
			{ icon: "game", title: "Retro arcade and games", text: "Pac-Man arcade cabinet, game console, life-size games, board games and cornhole by the fire pit." },
			{ icon: "wifi", title: "Fast, verified WiFi", text: "Speed-tested at 257 Mbps with mesh coverage and a dedicated workspace. Ethernet available." },
			{ icon: "location", title: "Minutes from Old Town", text: "Close to Scottsdale's best restaurants, nightlife, Spring Training and golf." },
			{ icon: "home", title: "Single-level with covered parking", text: "Two-car covered carport plus free street parking. Self check-in with a keypad. Luggage drop-off allowed." }
		],
		description: [
			"A comfortable home just minutes from Old Town Scottsdale. It offers 3 bedrooms, 2 bathrooms, a fully fitted kitchen, a covered patio with a large heated gated play pool, TVs with popular streaming services in every room, high-speed internet and everything you expect from a home away from home.",
			"We try to make your stay as much of a home-away-from-home experience as possible and offer a wide range of living essentials. Everything needed for an extended, comfortable stay is here for you.",
			"Your perfect vacation stay is within minutes of the best restaurants, sports and entertainment Arizona has to offer. We're excited to host you at our pride and joy."
		],
		sleeping: [
			{ room: "Master suite", beds: "King bed", note: "En suite bathroom, smart TV and sliding-door closet" },
			{ room: "Bedroom 2", beds: "Two double beds", note: "Great for kids or friends" },
			{ room: "Bedroom 3", beds: "Queen bed", note: "" }
		],
		amenities: {
			"Outdoor": ["Private heated pool with safety gate", "Covered patio with lounge seating", "Fire pit and cornhole", "BBQ grill and outdoor dining area", "Sun loungers", "Fully fenced private backyard"],
			"Family": ["Crib and pack 'n play", "High chair and children's dinnerware", "Baby bath, baby monitor and changing table", "Outlet covers", "Children's books and toys", "Board games"],
			"Kitchen and dining": ["Full kitchen with dishwasher", "Coffee maker and kettle", "Cooking basics, dishes and silverware", "Toaster, baking sheets and barbecue utensils", "Wine glasses", "Dining table"],
			"Comfort and entertainment": ["Fast WiFi (257 Mbps, mesh coverage)", "Dedicated workspace and Ethernet", "Smart TVs with streaming in every room", "Retro arcade, game console and life-size games", "Central air conditioning and heating", "Electric fireplace and ceiling fans", "Room-darkening shades"],
			"Practical": ["Self check-in with keypad", "Two-car covered carport plus street parking", "Washer and dryer", "Luggage drop-off for early arrivals or late departures", "Long-term stays welcome", "Single level, no stairs", "Pets allowed"],
			"Safety": ["Smoke and carbon monoxide alarms", "Fire extinguisher and first aid kit", "Exterior security cameras (three in front, one at the back gate)"]
		},
		fees: [
			{ label: "Pool heating", value: "Included. We keep the pool at about 84°F." },
			{ label: "Pets", value: "$100 per pet per reservation." }
		],
		rules: {
			checkIn: "After 4:00 PM (self check-in with keypad)",
			checkOut: "Before 11:00 AM",
			items: ["Up to 8 guests (Scottsdale city code allows a maximum of 6 adults per booking; accompanying children do not count toward that total)", "Quiet hours 9:00 PM to 8:00 AM", "No parties or events", "No commercial photography"]
		},
		location: {
			blurb: "Verified Old Town Scottsdale location. Walkable neighborhood with everything from groceries to nightlife a short drive away.",
			nearby: [
				{ place: "Old Town Scottsdale dining and nightlife", distance: "Minutes by car" },
				{ place: "Scottsdale Stadium (Giants Spring Training)", distance: "Minutes by car" },
				{ place: "Scottsdale Fashion Square", distance: "Minutes by car" },
				{ place: "Phoenix Sky Harbor Airport", distance: "About 20 minutes" }
			]
		}
	},
	{
		slug: "old-town-family-hideaway",
		compare: { pool: "Private hot tub, open 24 hours", bestFor: "Two families, remote workers, kids who need a yard", outdoor: "Swing set, playhouse, gas fire pit, covered patio" },
		editorial: "Four real bedrooms and a proper office, so two families or a working couple can spread out. The yard has a swing set and playhouse, and the hot tub is on all night.",
		ownedByCompany: true,
		address: "8323 E Weldon Ave, Scottsdale, AZ 85251",
		strLicense: "2037414",
		name: "Old Town Family Hideaway",
		shortName: "Family Hideaway",
		tagline: "Four bedrooms, a hot tub, swing set and a real office near Old Town.",
		airbnbTitle: "Old Town Family 4BR Hot Tub Swing Set Office A+Loc",
		airbnb: "https://www.airbnb.com/h/oldtown-scottsdale-az",
		airbnbId: "47980327",
		featured: false,
		badge: "Perfect 5.0",
		bedrooms: 4,
		bathrooms: 2,
		beds: 5,
		guests: 8,
		adultsMax: 6,
		rating: 5.0,
		reviewCount: 69,
		ratingBreakdown: { Cleanliness: 5.0, Accuracy: 5.0, "Check-in": 5.0, Communication: 5.0, Location: 5.0, Value: 5.0 },
		fiveStarShare: 100,
		airbnbRank: "Guest Favorite, top 1% of homes on Airbnb",
		guestsSay: [
			"One of the most loved homes on Airbnb, according to guests.",
			"Guests love this home's spaciousness for a comfortable stay."
		],
		heroImage: { src: "/img/homes/old-town-family-hideaway/hot-tub-patio.jpg", alt: "Hot tub on the covered patio at Old Town Family Hideaway" },
		cardImage: { src: "/img/homes/old-town-family-hideaway/hot-tub-patio.jpg", alt: "Hot tub on the covered patio with the backyard behind it" },
		gallery: [
			{ src: "/img/homes/old-town-family-hideaway/backyard-swing-set.jpg", alt: "Grassy backyard with swing set and shaded seating" },
			{ src: "/img/homes/old-town-family-hideaway/patio-dining.jpg", alt: "Covered patio dining next to the hot tub" },
			{ src: "/img/homes/old-town-family-hideaway/playhouse.jpg", alt: "Wooden playhouse for the little ones under a shade tree" },
			{ src: "/img/homes/old-town-family-hideaway/living-room.jpg", alt: "Living room with fireplace, sofas and TV" },
			{ src: "/img/homes/old-town-family-hideaway/kitchen.jpg", alt: "Renovated white kitchen with gas range and stainless appliances" },
			{ src: "/img/homes/old-town-family-hideaway/dining.jpg", alt: "Farmhouse dining table for eight" },
			{ src: "/img/homes/old-town-family-hideaway/king-bedroom.jpg", alt: "King bedroom with patio access" },
			{ src: "/img/homes/old-town-family-hideaway/office.jpg", alt: "Dedicated office with desk and daybed" },
			{ src: "/img/homes/old-town-family-hideaway/living-room-2.jpg", alt: "Second view of the living room and front entry" }
		],
		highlights: [
			{ icon: "spa", title: "Private hot tub, open 24 hours", text: "Soak under the desert sky any time of day. Available all year." },
			{ icon: "family", title: "Swing set and playhouse", text: "A grassy backyard with a swing set, slide and playhouse, plus crib, high chair, baby monitor and toys inside." },
			{ icon: "desk", title: "A real office", text: "Dedicated office with desk and daybed, verified 219 Mbps WiFi and Ethernet for remote work." },
			{ icon: "bed", title: "Two king bedrooms", text: "Four bedrooms and five beds so two families or a multi-generational group can spread out." },
			{ icon: "fire", title: "Gas fire pit and BBQ", text: "Covered patio dining, BBQ grill and a gas fire pit for cool desert evenings." },
			{ icon: "location", title: "Close to everything Old Town offers", text: "Restaurants, bars, Spring Training, golf and shopping are all a short drive away." }
		],
		description: [
			"This wonderful family-friendly house is located close to everything Old Town Scottsdale has to offer. It has four bedrooms, two bathrooms and a bonus room that works as an office or extra sleeping space.",
			"Inside you'll find TVs with popular streaming services in every room, high-speed internet and everything you expect from a home away from home. Outside, the backyard offers a relaxing experience with a swing set, hot tub, BBQ and gas fire pit.",
			"We try to make your stay as much of a home-away-from-home experience as possible and offer a wide range of living essentials. Everything needed for an extended, comfortable stay is here for you."
		],
		sleeping: [
			{ room: "Bedroom 1", beds: "King bed", note: "Patio access" },
			{ room: "Bedroom 2", beds: "King bed", note: "" },
			{ room: "Bedroom 3", beds: "Two double beds", note: "" },
			{ room: "Bedroom 4", beds: "Double bed", note: "" },
			{ room: "Office", beds: "Desk and daybed", note: "Bonus room" }
		],
		amenities: {
			"Outdoor": ["Private hot tub, open 24 hours year-round", "Swing set, slide and playhouse", "Gas fire pit", "BBQ grill and covered outdoor dining", "Outdoor furniture", "Fully fenced private backyard"],
			"Family": ["Crib and pack 'n play (sheets provided)", "Standalone high chair with tray", "Baby bath, baby monitor and changing table", "Children's books, toys and dinnerware", "Board games", "Outdoor playground"],
			"Kitchen and dining": ["Full kitchen with dishwasher", "Coffee maker and kettle", "Cooking basics, dishes and silverware", "Toaster, baking sheets and barbecue utensils", "Wine glasses", "Dining table"],
			"Comfort and entertainment": ["Fast WiFi (219 Mbps)", "Dedicated office and Ethernet", "Smart TVs with streaming in every room", "Game console and arcade games", "Books and reading material", "Air conditioning, heating and ceiling fans", "Indoor fireplace"],
			"Practical": ["Self check-in with keypad", "Two-car covered carport plus street parking", "Washer and dryer", "Luggage drop-off for early arrivals or late departures", "Long-term stays welcome", "Single level, no stairs", "Pets allowed"],
			"Safety": ["Smoke and carbon monoxide alarms", "Fire extinguisher and first aid kit", "Exterior security cameras (three in front, two at the back gate)"]
		},
		fees: [
			{ label: "Hot tub", value: "Included and available all year." },
			{ label: "Pets", value: "$75 per pet per reservation." }
		],
		rules: {
			checkIn: "After 4:00 PM (self check-in with keypad)",
			checkOut: "Before 11:00 AM",
			items: ["Up to 8 guests (Scottsdale city code allows a maximum of 6 adults per booking; accompanying children do not count toward that total)", "Quiet hours 9:00 PM to 7:00 AM", "No parties or events", "No commercial photography", "Backyard has a climbing and play structure, so please supervise little ones"]
		},
		location: {
			blurb: "A quiet residential street close to everything Old Town Scottsdale has to offer.",
			nearby: [
				{ place: "Old Town Scottsdale dining and nightlife", distance: "Minutes by car" },
				{ place: "Scottsdale Stadium (Giants Spring Training)", distance: "Minutes by car" },
				{ place: "Scottsdale Fashion Square", distance: "Minutes by car" },
				{ place: "Phoenix Sky Harbor Airport", distance: "About 20 minutes" }
			]
		}
	}
];
