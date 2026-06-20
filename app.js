// --- Sams_Holidays AI Travel Database ---
const travelDatabase = {
    bali: {
        locationName: "Bali, Indonesia",
        tagline: "Tropical Romance & Volcano Adventures",
        bannerImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
        hotels: {
            5: {
                name: "Viceroy Ubud Luxury Resort",
                desc: "Perched over Ubud's Valley of the Kings, this multi-award-winning sanctuary features private infinity pools overlooking a lush jungle ravine and fine dining at CasCades.",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
                amenities: ["Private Infinity Pool", "Jungle Canyon View", "Helipad Access", "Luxury Spa Room", "CasCades Gourmet Dining"],
                pricePerNight: 550
            },
            4: {
                name: "Maya Ubud Resort & Spa",
                desc: "Bordering the Petanu River, Maya Ubud is an oasis of calm offering private villas, lush garden backdrops, and forest spa treatments.",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
                amenities: ["River Valley Deck", "Spa & Wellness Center", "Yoga Pavilion", "Double Infinity Pool", "Floating Breakfasts"],
                pricePerNight: 320
            },
            3: {
                name: "Tjampuhan Spa & Historic Hotel",
                desc: "Established in 1928 as a guest house for visiting artists, Tjampuhan is legendary for its traditional Balinese carvings, stone baths, and sacred river settings.",
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
                amenities: ["Classic Stone Pools", "Lush Historical Gardens", "Riverside Cafe", "Eco Spa Rooms", "Walking Trails"],
                pricePerNight: 160
            },
            2: {
                name: "Puri Garden Boutique Hotel",
                desc: "A cozy boutique hotel in the center of Ubud, featuring high-quality social vibes, daily free yoga sessions, and a beautifully manicured garden courtyard.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                amenities: ["Garden View Rooms", "Daily Free Yoga", "Central Ubud Location", "Social Lounge Pool", "Pet-Friendly Cafe"],
                pricePerNight: 75
            }
        },
        food: {
            name: "Jimbaran Seafood Grill & Locavore Dining",
            desc: "Includes a sunset candlelight seafood dinner directly on the sandy beaches of Jimbaran Bay, followed by a degustation dinner exploring modern Indonesian gastronomy at Locavore Ubud.",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
        },
        romanticDrive: {
            title: "Uluwatu Sunset Coastal Cruise",
            desc: "Cruise in a private chauffeur-driven classic VW Safari Convertible along the winding southern cliffs, stopping at hidden beaches before arriving at Uluwatu Temple for sunset."
        },
        activities: {
            romantic: [
                "Flower-bath wellness spa ritual for two at Lembah Spa",
                "Private candlelit dinner under Ubud's canopy",
                "Sunset walk along the Campuhan Ridge",
                "Sacred Tirta Empul purification water blessing"
            ],
            adventure: [
                "Active Volcano Mount Batur sunrise hiking & hot springs",
                "Ayung River white water rafting with jungle scenery",
                "Tegallalang giant swings and zip-lines",
                "Snorkeling safari around Nusa Penida's Manta Point"
            ],
            relaxation: [
                "Daily sunrise yoga session at the Yoga Barn",
                "Jamu traditional herbal drink workshop",
                "Deep tissue Balinese massage and herbal bath",
                "Private beach day at Pandawa white sand shores"
            ],
            cultural: [
                "Balinese cooking masterclass with organic farm tour",
                "Uluwatu Kecak & Fire Dance cliffside performance",
                "Traditional woodcarving workshop in Mas village",
                "Royal Ubud Palace exploration with local guides"
            ]
        }
    },
    maldives: {
        locationName: "South Ari Atoll, Maldives",
        tagline: "Ultimate Overwater Serenity & Coral Safaris",
        bannerImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
        hotels: {
            5: {
                name: "Soneva Jani Overwater Sanctuary",
                desc: "An ultra-luxury playground featuring expansive overwater villas, private waterslides into the lagoon, retractable roofs to sleep under the stars, and 24/7 Butler Service.",
                image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
                amenities: ["Private Water Slide", "Retractable Star Room Roof", "Personal Island Butler", "Overwater Hammock", "Private Wine Cellar"],
                pricePerNight: 1200
            },
            4: {
                name: "Kuramathi Maldives Ocean Villas",
                desc: "Set on a lush island, these villas boast private sundecks, direct ocean stair access, outdoor hot tubs, and views across endless turquoise water.",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
                amenities: ["Direct Ocean Access", "Private Sunset Jacuzzi", "9 Restaurants Access", "Dolphin Cruise Access", "Coral Nursery Tour"],
                pricePerNight: 620
            },
            3: {
                name: "Bandos Maldives Beach Resort",
                desc: "A gorgeous green island ringed by a vibrant house reef. Classic wooden beach bungalows nestled under palms, steps away from white sands.",
                image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
                amenities: ["House Reef Diving", "Beachfront Cabanas", "Swim-up Pool Bar", "Spa & Orchid Garden", "Kids Club Area"],
                pricePerNight: 280
            },
            2: {
                name: "Maafushi Village Inn",
                desc: "A charming local guest house situated close to the public bikini beach, offering comfortable air-conditioned rooms, guided ocean excursions, and local hospitality.",
                image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
                amenities: ["A/C Beach Rooms", "Daily Reef Snorkeling", "Bicycle Rentals", "Traditional Dining Room", "Excursion Planners"],
                pricePerNight: 95
            }
        },
        food: {
            name: "Ithaa Undersea Dining & Starlit Beach Grill",
            desc: "Enjoy a luxurious 5-course lunch or dinner at Ithaa Undersea Restaurant, located 5 meters below the surface with panoramic reef views, followed by a private seafood beach BBQ.",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
        },
        romanticDrive: {
            title: "Private Dhonis Sunset Sailing",
            desc: "Since the Maldives consists of tiny islands, trade the asphalt for the sea: Enjoy a private sunset cruise on a traditional wooden Dhoni boat, accompanied by dolphins and chilled champagne."
        },
        activities: {
            romantic: [
                "Private sandbank candlelit picnic lunch",
                "Couples ocean spa pavilion hot-stone massage",
                "Sunset dolphin catamaran sail",
                "Outdoor private starlight cinema night"
            ],
            adventure: [
                "Snorkeling safari with gentle Manta Rays",
                "PADI Guided dive to the Shipwreck site",
                "Flyboarding and jet-ski lagoon tour",
                "Big game fishing trip at sunrise"
            ],
            relaxation: [
                "Private sun deck lounging & reading",
                "Sunset meditation on a floating jetty",
                "Infinity pool cocktail lounge day",
                "Traditional Ayurveda wellness consultation"
            ],
            cultural: [
                "Local fishing village guided walking tour",
                "Traditional Boduberu drum performance lesson",
                "Maldivian coconut-craft weaving class",
                "Mas huni traditional culinary demonstration"
            ]
        }
    },
    swiss: {
        locationName: "Zermatt & Interlaken, Switzerland",
        tagline: "Scenic Mountain Magic & Luxury Chalets",
        bannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        hotels: {
            5: {
                name: "The Omnia Lodge (Zermatt)",
                desc: "An architectural marvel carved into Zermatt's cliffs, 45m above the town. High-end wood chalets, an open-fire lounge, outdoor heated whirlpools facing the Matterhorn peak.",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
                amenities: ["Matterhorn View Deck", "Heated Thermal Pool", "Indoor Fireplace", "Michelin Dining Lounge", "Premium Ski-in Locker"],
                pricePerNight: 720
            },
            4: {
                name: "Hotel Schweizerhof Zermatt",
                desc: "An alpine-chic retreat in the village center. A blend of mountain heritage and modern comfort with a massive heated indoor pool, saunas, and live jazz piano nights.",
                image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
                amenities: ["Indoor Lap Pool", "Finnish Saunas", "Central Village Access", "Daily Cocktail Lounge", "Mountain Gear Rental"],
                pricePerNight: 410
            },
            3: {
                name: "Hotel Alpenblick Zermatt",
                desc: "A charming, family-run chalet with flower-clad wooden balconies. Provides cozy Swiss-paneled rooms, a traditional sauna, and alpine buffet breakfast.",
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
                amenities: ["Swiss Buffet Breakfast", "Relaxation Sauna", "Rustic Timber Lounge", "Matterhorn Viewpoint Path", "Free Shuttle Service"],
                pricePerNight: 230
            },
            2: {
                name: "Matterhorn Hostel Zermatt",
                desc: "Cozy wood-timber budget lodging positioned next to the Klein Matterhorn express gondola station. Perfect base camp with shared/private pine rooms and alpine garden.",
                image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
                amenities: ["Gondola Access Path", "Cozy Pine Rooms", "Outdoor Garden Grill", "Ski Gear Storage", "Complimentary Wi-Fi"],
                pricePerNight: 110
            }
        },
        food: {
            name: "Chez Vrony High-Altitude Fondue",
            desc: "A romantic gourmet reservation at Chez Vrony (2,100m high) to eat award-winning Swiss cheese fondue, air-dried ham, and home-crafted apple strudel facing the Matterhorn.",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
        },
        romanticDrive: {
            title: "Porsche Scenic Grimsel Pass Ascent",
            desc: "Self-drive or sit back in a premium electric vehicle along the hairpins of the Grimsel Pass, featuring dramatic glacier canyons, pristine lakes, and alpine scenery."
        },
        activities: {
            romantic: [
                "VIP Gondola ride to the Matterhorn Glacier Paradise",
                "Thermal outdoor pool massage session under the stars",
                "Horse-drawn carriage tour of car-free Zermatt village",
                "Private picnic at Lake Stellisee reflection viewpoint"
            ],
            adventure: [
                "Tandem Paragliding flight over the Interlaken lakes",
                "Glacier crevasse climbing with a mountain guide",
                "First Cliff Walk by Tissot suspension bridge trek",
                "Snowboarding/Skiing down the Cervinia glacier borders"
            ],
            relaxation: [
                "Alps wildflower photography walking tour",
                "Traditional Roman-Irish baths relaxation day",
                "Scenic cogwheel train ride to Jungfraujoch (Top of Europe)",
                "Artisan cheese and chocolate degustation class"
            ],
            cultural: [
                "Matterhorn Alpine Museum guided historic trip",
                "Traditional alphorn music presentation & lesson",
                "Chateau de Chillon medieval fortress tour",
                "Swiss watchmaking history masterclass in Geneva"
            ]
        }
    },
    santorini: {
        locationName: "Santorini, Greece",
        tagline: "Spectacular Caldera Views & Aegean Sunsets",
        bannerImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
        hotels: {
            5: {
                name: "Grace Hotel (Auberge Resorts)",
                desc: "Perched high above the Caldera in Imerovigli, this luxury boutique hotel features whitewashed cave architecture, private plunge pools, and the finest sunset restaurant.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
                amenities: ["Whitewashed Cave Suite", "Caldera Infinity Pool", "Private Wine Bar", "Skaros Rock View Deck", "Gourmet Greek Breakfast"],
                pricePerNight: 850
            },
            4: {
                name: "Astra Suites (Imerovigli)",
                desc: "Voted repeatedly as one of the world's most romantic getaways. Cave suites built into the cliff side, offering breathtaking caldera panoramas and sunset jacuzzis.",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                amenities: ["Private Cave Jacuzzi", "Sunset Viewing Terrace", "Greek Meze Lounge", "Massage Suite Access", "Aegean Horizon Pool"],
                pricePerNight: 490
            },
            3: {
                name: "Kavalari Hotel (Fira)",
                desc: "A beautiful caldera-view property featuring classic cave architecture, cliffside sun terraces, and outdoor hot tubs connected by winding stone steps.",
                image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
                amenities: ["Stone Cliffside Rooms", "Sun Terrace Jacuzzi", "Fira Center Access", "Panoramic Breakfast Deck", "Express Porter Service"],
                pricePerNight: 240
            },
            2: {
                name: "Villa Maria Damigou (Firostefani)",
                desc: "An authentic, family-run cycladic villa offering traditional blue-dome views, private balconies looking over the sea, and cozy Greek hospitality.",
                image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
                amenities: ["Private Sunset Balcony", "Traditional Whitewash Rooms", "Firostefani Path Access", "Fresh Local Fruit Platter", "Free Wi-Fi"],
                pricePerNight: 120
            }
        },
        food: {
            name: "Lauda Gastronomy & Ammoudi Sea Grill",
            desc: "A panoramic candlelit dinner reservation at Lauda Oia (led by a Michelin chef), followed by a casual seaside seafood feast at Ammoudi Fish Tavern directly on the water.",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
        },
        romanticDrive: {
            title: "Red Fiat Cabriolet Caldera Loop",
            desc: "Rent a classic red Fiat 500 Cabriolet convertible and drive from the high cliffs of Fira to the quiet Akrotiri Lighthouse on the island's southern tip."
        },
        activities: {
            romantic: [
                "Sunset Catamaran cruise with BBQ and Greek wines",
                "Private wine tasting tour of Assyrtiko vineyards",
                "Couples massage with organic volcanic clay",
                "Sunrise photo shoot along the blue dome paths"
            ],
            adventure: [
                "Sea kayak expedition through the active volcano caldera",
                "Hiking the famous 10km Fira to Oia cliffside trail",
                "Scuba diving inside the volcanic underwater caves",
                "Jet ski safari to the Red Beach and White Beach"
            ],
            relaxation: [
                "Yacht deck lounging with local Greek olives & fruit",
                "Relaxing thermal mud bath soak at Nea Kameni",
                "Sunset rooftop meditation session",
                "Gourmet Greek cooking class with fresh farm ingredients"
            ],
            cultural: [
                "Ancient Akrotiri archaeological site guided tour",
                "Traditional Greek plate-smashing wedding show",
                "Oia Maritime Museum historic review",
                "Santorini Tomato Industrial Museum workshop"
            ]
        }
    },
    kyoto: {
        locationName: "Kyoto, Japan",
        tagline: "Zen Gardens, Bamboo Trails & Ancient Ryokan Heritage",
        bannerImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
        hotels: {
            5: {
                name: "Aman Kyoto Forest Sanctuary",
                desc: "Nested in a secret, moss-covered valley forest at the foot of Hidari Daimonji hill, Aman Kyoto features minimalist luxury pavilion suites, private mineral hot spring onsen, and gourmet Kaiseki dining.",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
                amenities: ["Private Forest Pavilion", "Natural Thermal Onsen", "Personal Zen Garden Guide", "Gion Sasaki Michelin Dinner", "Traditional Tea Ceremony Room"],
                pricePerNight: 950
            },
            4: {
                name: "Sowaka Luxury Ryokan (Gion)",
                desc: "A beautifully restored, historic Sukiya-style ryokan in Kyoto's heart. Blends traditional tatami mats and paper shoji screens with modern luxury mattresses and private courtyard gardens.",
                image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
                amenities: ["Tatami Courtyard Room", "Traditional Cypress Bath", "Gion Historic Lane Access", "Japanese Garden View", "Ryokan Kaiseki Breakfast"],
                pricePerNight: 550
            },
            3: {
                name: "Gion Hatanaka Traditional Inn",
                desc: "An authentic ryokan situated next to Yasaka Shrine. Guests experience traditional sleeping on futons, multi-course dining, and evening Kyoto Geisha dinner performances.",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=800&q=80",
                amenities: ["Futon & Tatami Suites", "Kyoto Geisha Dinner Show", "Public Hot Cypress Bath", "Yasaka Shrine Path Access", "Green Tea Welcome Platter"],
                pricePerNight: 320
            },
            2: {
                name: "Ryokan Kyoto Kyoraku",
                desc: "A simple, clean, family-run ryokan located minutes from Kyoto Station. Traditional Japanese guest rooms, tatami mats, and green tea service in a welcoming homestay environment.",
                image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80",
                amenities: ["Authentic Tatami Mats", "Yukata Bath Robes", "Japanese Green Tea Set", "Kyoto Station Walkway", "Free Luggage Storage"],
                pricePerNight: 130
            }
        },
        food: {
            name: "Kaiseki Banquet & Zen Buddhist Cuisine",
            desc: "Includes a multi-course seasonal Kaiseki dining experience (traditional Japanese haute cuisine) at a Michelin starred ryokan, along with Shojin Ryori (vegetarian temple food) in Tenryu-ji Zen temple.",
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
        },
        romanticDrive: {
            title: "Arashiyama Mountain Pass Evening Cruise",
            desc: "Ride along the scenic mountain roads of the Arashiyama mountain pass, stopping to look at the illuminated traditional bridges, riverbeds, and bamboo groves."
        },
        activities: {
            romantic: [
                "Private Tea Ceremony with a Geisha in Gion",
                "Romantic traditional wooden boat ride on Hozu River",
                "Bamboo forest morning walk in Arashiyama",
                "Kiyomizu-dera temple sunset viewing deck"
            ],
            adventure: [
                "Scenic hiking trek from Kurama to Kibune mountain shrine",
                "Guided cycling expedition along the Kamogawa riverbanks",
                "Hiking through the thousand red Torii Gates at Fushimi Inari",
                "Monkey Mountain park trekking in Iwatayama"
            ],
            relaxation: [
                "Zen rock garden meditation session at Ryoan-ji",
                "Natural sulfur hot springs outdoor onsen dip",
                "Green tea matcha tasting in Uji tea fields",
                "Traditional Japanese kimono rental walk"
            ],
            cultural: [
                "Gold Pavilion (Kinkaku-ji) guided history tour",
                "Japanese sushi making workshop with master chef",
                "Zen calligraphy painting masterclass in a temple",
                "Nijo Castle and ancient Samurai quarters walk"
            ]
        }
    },
    goa: {
        locationName: "Goa, India",
        tagline: "Golden Sandy Beaches & Portuguese Heritage Vibes",
        bannerImage: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
        hotels: {
            5: {
                name: "Taj Exotica Resort & Spa, Goa",
                desc: "Mediterranean-style resort spreading over 56 acres of lush gardens on the Southwest coast of Goa, featuring private pool villas, sea view suites, and award-winning Indian dining at Miguel Arcanjo.",
                image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80",
                amenities: ["Private Beach Lounge", "Golf Greens", "Jiva Luxury Spa", "Ocean Front Dining", "Private Plunge Pools"],
                pricePerNight: 280
            },
            4: {
                name: "Caravela Beach Resort, Goa",
                desc: "Nestled on Varca Beach, Caravela features private balconies with direct ocean views, a 9-hole golf course, beachfront bars, and outdoor garden Jacuzzis.",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
                amenities: ["Varca Beach Pathway", "9-Hole Golf Greens", "Ocean Sunset Deck", "Waterfall Pool Bar", "Ayurvedic Treatment Spa"],
                pricePerNight: 160
            },
            3: {
                name: "Resort Rio, Goa (Arpora)",
                desc: "A deluxe boutique resort near Baga Beach offering scenic views of the Baga River, spacious rooms, multi-cuisine restaurants, and relaxing swimming pools.",
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
                amenities: ["Saltwater Swimming Pools", "Baga River View", "Traditional Goan Cafe", "Daily Activity Club", "Wellness Spa Center"],
                pricePerNight: 90
            },
            2: {
                name: "Puri Heritage Guest House (Calangute)",
                desc: "A charming heritage villa situated close to Calangute Beach, providing clean air-conditioned rooms, wooden Goan decor, and warm local hospitality.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                amenities: ["Traditional Goan Veranda", "Calangute Beach Walkway", "Home-style Kitchen", "Bicycle Rentals", "Complimentary Wi-Fi"],
                pricePerNight: 45
            }
        },
        food: {
            name: "Goan Fish Curry & Candlelit Beach Shack Grill",
            desc: "Savor a traditional Goan seafood dinner featuring fresh tiger prawns, Goan fish curry, and local Feni cocktails at a private candlelit beach shack in Candolim.",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
        },
        romanticDrive: {
            title: "Mandovi River & Old Goa Heritage Drive",
            desc: "Drive along the scenic banks of the Mandovi River, passing through heritage Portuguese-styled quarters of Fontainhas and historical cathedrals of Old Goa in a vintage open-top SUV."
        },
        activities: {
            romantic: [
                "Sunset champagne yacht cruise on Mandovi River",
                "Private candlelit beach dinner at Varca beach",
                "Couples aromatherapy spa at Taj Jiva",
                "Sunrise walk along the quiet Butterfly beach"
            ],
            adventure: [
                "Scuba diving excursion at Grand Island Goa",
                "Water sports package (Parasailing & Jet ski) in Baga",
                "Dudhsagar waterfalls trekking & spice plantation trip",
                "White water rafting on the Mhadei river"
            ],
            relaxation: [
                "Yoga session at Mandrem beach sunrise",
                "Spice farm walking tour with organic lunch",
                "Dolphin spotting boat cruise at Miramar beach",
                "Handcrafted pottery making workshop in Bicholim"
            ],
            cultural: [
                "Fontainhas Latin Quarter guided heritage walk",
                "Historical Old Goa Churches & Basilica of Bom Jesus tour",
                "Ancestral Goan museum & village exhibition visit",
                "Goan culinary curry-cooking masterclass"
            ]
        }
    }
};

// Transport Rates
const transportRates = {
    "luxury-suv": { label: "Luxury SUV Chauffeur", price: 120 },
    "sedan": { label: "Premium Private Sedan", price: 60 },
    "convertible": { label: "Convertible Roadster (Self-Drive)", price: 180 },
    "none": { label: "None (Use Hotel Shuttles)", price: 0 }
};

// --- DOM References ---
const travelForm = document.getElementById('travel-form');
const btnSubmit = document.getElementById('btn-submit');
const agentLog = document.getElementById('agent-log');
const itinerarySection = document.getElementById('itinerary-section');
const bookingModal = document.getElementById('booking-modal');
const closeModal = document.getElementById('close-modal');
const btnModalClose = document.getElementById('btn-modal-close');
const btnBookNow = document.getElementById('btn-book-now');

// Agent status nodes
const nodeHotel = document.getElementById('node-hotel');
const nodeGastronomy = document.getElementById('node-gastronomy');
const nodeAdventure = document.getElementById('node-adventure');
const nodeLogistics = document.getElementById('node-logistics');
const nodeFinance = document.getElementById('node-finance');

// Dynamic travel page elements
const itineraryBannerImg = document.getElementById('itinerary-banner-img');
const itineraryHeadingTitle = document.getElementById('itinerary-heading-title');
const itineraryClientDesc = document.getElementById('itinerary-client-desc');
const metaLocation = document.getElementById('meta-location');
const metaDuration = document.getElementById('meta-duration');
const metaTravelers = document.getElementById('meta-travelers');
const metaStars = document.getElementById('meta-stars');
const metaTransport = document.getElementById('meta-transport');
const timelineContainer = document.getElementById('timeline-container');

// Hotel assets
const hotelGalleryImg = document.getElementById('hotel-gallery-img');
const hotelGalleryCaption = document.getElementById('hotel-gallery-caption');
const hotelName = document.getElementById('hotel-name');
const hotelDesc = document.getElementById('hotel-desc');
const hotelAmenities = document.getElementById('hotel-amenities');

// Food assets
const foodGalleryImg = document.getElementById('food-gallery-img');
const foodGalleryCaption = document.getElementById('food-gallery-caption');
const foodName = document.getElementById('food-name');
const foodDesc = document.getElementById('food-desc');

// Drive assets
const driveTitle = document.getElementById('drive-title');
const driveDesc = document.getElementById('drive-desc');

// Pricing variables
const priceHotel = document.getElementById('price-hotel');
const priceTransport = document.getElementById('price-transport');
const priceActivities = document.getElementById('price-activities');
const priceTaxes = document.getElementById('price-taxes');
const priceOriginal = document.getElementById('price-original');
const priceTotal = document.getElementById('price-total');
const savingAlert = document.getElementById('saving-alert');
const originalPriceContainer = document.getElementById('original-price-container');

// Modal parameters
const modalClientName = document.getElementById('modal-client-name');
const modalPrice = document.getElementById('modal-price');
const voucherCode = document.getElementById('voucher-code');

// --- Global Variables ---
let finalCalculatedTotal = 0;
let finalClientName = "";
let activeConfig = null; // Stores current package config

// --- Helper Functions ---
function setNodeStatus(node, status) {
    const badge = node.querySelector('.status-badge');
    
    // reset status classes
    node.className = 'agent-node';
    badge.className = 'status-badge';
    
    if (status === 'thinking') {
        node.classList.add('thinking');
        badge.classList.add('status-thinking');
        badge.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Thinking';
    } else if (status === 'done') {
        node.classList.add('done');
        badge.classList.add('status-done');
        badge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Done';
    } else {
        badge.classList.add('status-idle');
        badge.innerHTML = 'Idle';
    }
}

function writeLog(tag, text, type = 'muted') {
    const line = document.createElement('div');
    line.className = `log-line text-${type}`;
    
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    line.innerHTML = `[${timestamp}] <span class="agent-tag">${tag}:</span> ${text}`;
    
    agentLog.appendChild(line);
    agentLog.scrollTop = agentLog.scrollHeight;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Generate unique voucher code
function generateVoucher() {
    return 'SH-' + Math.floor(100000 + Math.random() * 900000) + '-' + String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

// Save booking to LocalStorage
function saveBooking(booking) {
    let bookings = JSON.parse(localStorage.getItem('samsholidays_bookings') || '[]');
    if (!bookings.some(b => b.voucher === booking.voucher)) {
        bookings.push(booking);
        localStorage.setItem('samsholidays_bookings', JSON.stringify(bookings));
    }
}

// Delete booking from LocalStorage
function deleteBooking(voucher) {
    let bookings = JSON.parse(localStorage.getItem('samsholidays_bookings') || '[]');
    bookings = bookings.filter(b => b.voucher !== voucher);
    localStorage.setItem('samsholidays_bookings', JSON.stringify(bookings));
}

// Retrieve bookings from LocalStorage
function getBookings() {
    return JSON.parse(localStorage.getItem('samsholidays_bookings') || '[]');
}

// --- Multi-Agent Simulation Pipeline ---
async function runAgentNetwork(config) {
    // Reset output & scroll
    itinerarySection.style.display = 'none';
    agentLog.innerHTML = '';
    
    // Reset statuses
    setNodeStatus(nodeHotel, 'idle');
    setNodeStatus(nodeGastronomy, 'idle');
    setNodeStatus(nodeAdventure, 'idle');
    setNodeStatus(nodeLogistics, 'idle');
    setNodeStatus(nodeFinance, 'idle');
    
    // Lock submit button
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<span><i class="fa-solid fa-sync fa-spin"></i> Agents Coordinating...</span>';
    
    writeLog("SYSTEM", "Spawning Sams_Holidays AI Concierge Orchestrator Node...", "cyan");
    await sleep(800);
    writeLog("SYSTEM", `Initialized request for client: ${config.clientName} | Destination: ${config.db.locationName}`, "primary");
    await sleep(800);
    
    // --- Step 1: Hotel Curator Agent ---
    writeLog("SYSTEM", "Activating [Hotel Curator Agent]...", "cyan");
    setNodeStatus(nodeHotel, 'thinking');
    await sleep(1500);
    
    const selectedHotel = config.db.hotels[config.hotelStars];
    writeLog("Hotel Curator", `Scanning local databases for active room inventory...`, "cyan");
    await sleep(1000);
    writeLog("Hotel Curator", `Found premium matches: <strong>${selectedHotel.name}</strong> (${config.hotelStars}-Star).`, "green");
    writeLog("Hotel Curator", `Retrieved rooms with direct views. Night rate: $${selectedHotel.pricePerNight}. Allocating room layouts.`, "green");
    setNodeStatus(nodeHotel, 'done');
    await sleep(800);

    // --- Step 2: Gastronomy Agent ---
    writeLog("SYSTEM", "Activating [Food & Dining Agent]...", "cyan");
    setNodeStatus(nodeGastronomy, 'thinking');
    await sleep(1500);
    
    const selectedFood = config.db.food;
    writeLog("Food Agent", `Analyzing local food hotspots for mood profile: <strong>${config.activityProfile}</strong>...`, "gold");
    await sleep(1200);
    writeLog("Food Agent", `Selected dining spotlight: <strong>${selectedFood.name}</strong>. Table reservations locked.`, "green");
    setNodeStatus(nodeGastronomy, 'done');
    await sleep(800);

    // --- Step 3: Adventure Agent ---
    writeLog("SYSTEM", "Activating [Activity Specialist Agent]...", "cyan");
    setNodeStatus(nodeAdventure, 'thinking');
    await sleep(1500);
    
    const activityPool = config.db.activities[config.activityProfile];
    writeLog("Activity Agent", `Assembling custom itinerary package from Sams_Holidays direct-contract activities...`, "magenta");
    await sleep(1000);
    writeLog("Activity Agent", `Curated ${activityPool.length} custom excursions matching <strong>${config.activityProfile}</strong> mood.`, "green");
    setNodeStatus(nodeAdventure, 'done');
    await sleep(800);

    // --- Step 4: Logistics Agent ---
    writeLog("SYSTEM", "Activating [Logistics & Drive Agent]...", "cyan");
    setNodeStatus(nodeLogistics, 'thinking');
    await sleep(1500);
    
    const transportInfo = transportRates[config.transport];
    writeLog("Logistics Agent", `Mapping transport routing. Option selected: <strong>${transportInfo.label}</strong>.`, "cyan");
    if (config.pickupDrop === 'yes') {
        writeLog("Logistics Agent", "Incorporating VIP Airport shuttle service pickups.", "cyan");
    }
    await sleep(1000);
    writeLog("Logistics Agent", `Scenic route planned: "<strong>${config.db.romanticDrive.title}</strong>". Navigation map loaded.`, "green");
    setNodeStatus(nodeLogistics, 'done');
    await sleep(800);

    // --- Step 5: Finance Agent (Cheap & Best Optimizer) ---
    writeLog("SYSTEM", "Activating [Finance Optimizer Agent]...", "cyan");
    setNodeStatus(nodeFinance, 'thinking');
    await sleep(1800);
    
    // Calculations
    const nights = parseInt(config.duration);
    const hotelCost = selectedHotel.pricePerNight * nights;
    const transportCost = transportInfo.price * (nights + 1);
    const activitySurcharge = config.activityProfile === 'romantic' ? 250 : 180;
    const guestMultiplier = parseInt(config.adults) + (parseInt(config.children) * 0.5);
    const calculatedActivitiesCost = Math.round(activitySurcharge * guestMultiplier);
    
    const pickupCost = config.pickupDrop === 'yes' ? 50 : 0;
    const taxesAndFees = Math.round((hotelCost + transportCost + calculatedActivitiesCost) * 0.08);
    
    const rawTotal = hotelCost + transportCost + calculatedActivitiesCost + pickupCost + taxesAndFees;
    
    let totalDiscount = 0;
    let finalTotal = rawTotal;
    
    writeLog("Finance Agent", "Aggregating sub-costs and local municipal tax structures...", "gold");
    await sleep(1000);
    
    if (config.optimizePrice) {
        writeLog("Finance Agent", "Detecting discount vectors: Direct wholesale contracts found! Applying member discount rate...", "gold");
        const discountRate = 0.15;
        totalDiscount = Math.round(rawTotal * discountRate);
        finalTotal = rawTotal - totalDiscount;
        await sleep(1000);
        writeLog("Finance Agent", `Cheap & Best negotiation complete. Standard market rate: $${rawTotal} | AI Special Rate: $${finalTotal} (Saved $${totalDiscount}!)`, "green");
    } else {
        writeLog("Finance Agent", "Price optimization skipped. Standard direct rates applied.", "gold");
    }
    
    setNodeStatus(nodeFinance, 'done');
    await sleep(500);
    
    writeLog("SYSTEM", "AI Agent coordination finalized! Render itinerary output panel.", "green");
    await sleep(500);
    
    // Unlock submit button
    btnSubmit.disabled = false;
    btnSubmit.innerHTML = '<span><i class="fa-solid fa-gears"></i> Deploy AI Agents Network</span>';
    
    // Render the Final Output Panel
    renderItinerary(config, selectedHotel, selectedFood, activityPool, transportInfo, hotelCost, transportCost, calculatedActivitiesCost, taxesAndFees, rawTotal, finalTotal, totalDiscount);
}

// --- Render Output Panel ---
function renderItinerary(config, hotel, food, activities, transport, hotelCost, transportCost, activitiesCost, taxesCost, rawPrice, finalPrice, discountAmount) {
    
    // Global lock for booking
    finalCalculatedTotal = finalPrice;
    finalClientName = config.clientName;
    
    // Setup Top Banner
    itineraryBannerImg.style.backgroundImage = `url('${config.db.bannerImage}')`;
    itineraryHeadingTitle.innerText = `${config.db.locationName} Trip`;
    
    const totalPeopleText = `${config.adults} Adults ${config.children > 0 ? ' & ' + config.children + ' Children' : ''}`;
    itineraryClientDesc.innerHTML = `Customized for <strong>${config.clientName}</strong> • ${config.duration} Nights • ${totalPeopleText}`;
    
    // Set Metadata Badges
    metaLocation.innerText = config.db.locationName.split(',')[0];
    metaDuration.innerText = `${config.duration} Nights`;
    metaTravelers.innerText = totalPeopleText;
    metaStars.innerText = `${config.hotelStars}-Star Resort`;
    metaTransport.innerText = transport.label.split(' ')[0];
    
    // Render Accommodation Details
    hotelGalleryImg.src = hotel.image;
    hotelGalleryCaption.innerText = `${hotel.name} - View Room`;
    hotelName.innerText = hotel.name;
    hotelDesc.innerText = hotel.desc;
    
    // Amenities
    hotelAmenities.innerHTML = '';
    hotel.amenities.forEach(amen => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${amen}`;
        hotelAmenities.appendChild(li);
    });
    
    // Render Gastronomy Spotlight
    foodGalleryImg.src = food.image;
    foodGalleryCaption.innerText = `${food.name}`;
    foodName.innerText = food.name;
    foodDesc.innerText = food.desc;
    
    // Render Scenic Drive
    driveTitle.innerText = config.db.romanticDrive.title;
    driveDesc.innerText = config.db.romanticDrive.desc;
    
    // Render Day-by-Day Timeline
    renderTimeline(config, activities);
    
    // Set Prices
    priceHotel.innerText = `$${hotelCost.toLocaleString()}.00`;
    priceTransport.innerText = `$${transportCost.toLocaleString()}.00`;
    priceActivities.innerText = `$${activitiesCost.toLocaleString()}.00`;
    priceTaxes.innerText = `$${taxesCost.toLocaleString()}.00`;
    
    if (discountAmount > 0) {
        originalPriceContainer.style.display = 'flex';
        priceOriginal.innerText = `$${rawPrice.toLocaleString()}.00`;
        savingAlert.style.display = 'flex';
        savingAlert.querySelector('span').innerText = `$${discountAmount.toLocaleString()}.00`;
    } else {
        originalPriceContainer.style.display = 'none';
        savingAlert.style.display = 'none';
    }
    
    priceTotal.innerText = `$${finalPrice.toLocaleString()}.00`;
    
    // Display Itinerary block
    itinerarySection.style.display = 'block';
    
    // Smooth scroll to output
    itinerarySection.scrollIntoView({ behavior: 'smooth' });
}

// Generate the narrative timeline based on selected days and activities
function renderTimeline(config, activities) {
    timelineContainer.innerHTML = '';
    const nights = parseInt(config.duration);
    const totalDays = nights + 1;
    
    // Itinerary schedules template builder
    for (let day = 1; day <= totalDays; day++) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        let title = "";
        let desc = "";
        let badgesHTML = "";
        
        if (day === 1) {
            title = "Day 1: Arrival & Welcome Experience";
            desc = config.pickupDrop === 'yes' 
                ? `Touchdown at the airport. Our private ${transportRates[config.transport].label} picks you up with refreshments. Arrive at the hotel and check into your VIP suite with fresh flowers.` 
                : `Arrive at the hotel. Check into your customized suite. Spend the afternoon settling in and exploring the grounds.`;
            badgesHTML = `<span class="timeline-badge timeline-badge-hotel"><i class="fa-solid fa-bell-concierge"></i> Welcome</span>`;
        } else if (day === totalDays) {
            title = `Day ${day}: Leisure & Departure`;
            desc = config.pickupDrop === 'yes'
                ? `Enjoy a relaxing breakfast at the resort. Free morning for last-minute souvenir shopping before your private chauffeur transfers you back to the airport.`
                : `Enjoy your final breakfast. Free morning before check-out and self-arranged departure.`;
            badgesHTML = `<span class="timeline-badge timeline-badge-route"><i class="fa-solid fa-plane-departure"></i> Transfer</span>`;
        } else {
            // Activities mapping
            const activityIndex = (day - 2) % activities.length;
            const chosenActivity = activities[activityIndex];
            
            if (day === 2) {
                title = `Day ${day}: Signature Excursion`;
                desc = `Sams_Holidays hosts your signature mood event today: <strong>${chosenActivity}</strong>. Includes guide, equipment, and private transport.`;
                badgesHTML = `<span class="timeline-badge timeline-badge-activity"><i class="fa-solid fa-mountain"></i> Guided Tour</span>`;
            } else if (day === 3) {
                title = `Day ${day}: Romantic Scenic Exploration`;
                desc = `Embark on the planned scenic route: "<strong>${config.db.romanticDrive.title}</strong>". Stop at viewpoints curated by our logistics agent. Followed by romantic sunset spots.`;
                badgesHTML = `<span class="timeline-badge timeline-badge-route"><i class="fa-solid fa-road"></i> Drive</span>`;
            } else if (day === 4) {
                title = `Day ${day}: Gastronomy Experience`;
                desc = `A culinary day curated by our gastronomy agent. Dine on fine cuisine, and end the evening with the reservation at: <strong>${config.db.food.name}</strong>.`;
                badgesHTML = `<span class="timeline-badge timeline-badge-food"><i class="fa-solid fa-utensils"></i> Dining</span>`;
            } else {
                title = `Day ${day}: Secondary Local Activity`;
                desc = `Engage in our popular adventure excursion: <strong>${chosenActivity}</strong>. Complete the day with leisure strolls or local market visits.`;
                badgesHTML = `<span class="timeline-badge timeline-badge-activity"><i class="fa-solid fa-star"></i> Activity</span>`;
            }
        }
        
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h4>${title}</h4>
                    <span class="timeline-time">Morning - Evening</span>
                </div>
                <p>${desc}</p>
                <div class="timeline-badges">
                    ${badgesHTML}
                </div>
            </div>
        `;
        
        timelineContainer.appendChild(item);
    }
}

// Render Saved Bookings Table
function loadAndRenderBookings() {
    const tableContainer = document.getElementById('bookings-table-container');
    const bookings = getBookings();
    
    if (bookings.length === 0) {
        tableContainer.innerHTML = `
            <div class="no-bookings-placeholder">
                <i class="fa-solid fa-receipt" style="font-size: 2.5rem; margin-bottom: 12px; display: inline-block;"></i>
                <p>No active reservations found.</p>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 5px;">Configure your details and deploy our AI Agents to secure your trip package!</p>
            </div>
        `;
        return;
    }
    
    let rowsHTML = "";
    bookings.forEach(booking => {
        rowsHTML += `
            <tr>
                <td><strong class="text-gold" style="font-family: monospace;">${booking.voucher}</strong></td>
                <td>${booking.clientName}</td>
                <td><strong>${booking.locationName}</strong></td>
                <td>${booking.startDate} (${booking.duration} Nights)</td>
                <td><strong class="text-green">$${booking.priceTotal.toLocaleString()}.00</strong></td>
                <td>
                    <button class="btn-table-action btn-table-view" data-voucher="${booking.voucher}">
                        <i class="fa-solid fa-eye"></i> Open
                    </button>
                    <button class="btn-table-action btn-table-cancel" data-voucher="${booking.voucher}">
                        <i class="fa-solid fa-xmark"></i> Cancel
                    </button>
                </td>
            </tr>
        `;
    });
    
    tableContainer.innerHTML = `
        <div class="table-responsive">
            <table class="bookings-table">
                <thead>
                    <tr>
                        <th>Voucher</th>
                        <th>Client</th>
                        <th>Destination</th>
                        <th>Dates & Duration</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHTML}
                </tbody>
            </table>
        </div>
    `;
    
    // Add Click Listeners to dynamic action buttons
    tableContainer.querySelectorAll('.btn-table-view').forEach(btn => {
        btn.addEventListener('click', function() {
            const voucher = this.getAttribute('data-voucher');
            const match = bookings.find(b => b.voucher === voucher);
            if (match) {
                // Close list modal
                document.getElementById('bookings-list-modal').classList.remove('active');
                
                // Re-inject inputs into form
                document.getElementById('client-name').value = match.clientName;
                document.getElementById('destination').value = match.destCode;
                document.getElementById('start-date').value = match.startDate;
                document.getElementById('duration').value = match.duration;
                document.getElementById('adults').value = match.adults;
                document.getElementById('children').value = match.children;
                document.getElementById('hotel-stars').value = match.hotelStars;
                document.getElementById('transport').value = match.transport;
                document.getElementById('pickup-drop').value = match.pickupDrop;
                document.getElementById('activity-profile').value = match.activityProfile;
                document.getElementById('optimize-price').checked = match.optimizePrice;
                
                // Run simulation
                activeConfig = {
                    clientName: match.clientName,
                    db: travelDatabase[match.destCode],
                    destCode: match.destCode,
                    startDate: match.startDate,
                    duration: match.duration,
                    adults: match.adults,
                    children: match.children,
                    hotelStars: match.hotelStars,
                    transport: match.transport,
                    pickupDrop: match.pickupDrop,
                    activityProfile: match.activityProfile,
                    optimizePrice: match.optimizePrice
                };
                runAgentNetwork(activeConfig);
            }
        });
    });
    
    tableContainer.querySelectorAll('.btn-table-cancel').forEach(btn => {
        btn.addEventListener('click', function() {
            const voucher = this.getAttribute('data-voucher');
            if (confirm(`Are you sure you want to cancel booking ${voucher}? This will release the hotel allocations under our 0-risk free cancellation agreement.`)) {
                deleteBooking(voucher);
                loadAndRenderBookings();
                
                // Hide current active itinerary panel if we canceled it
                itinerarySection.style.display = 'none';
            }
        });
    });
}

// --- Event Listeners ---
travelForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const clientName = document.getElementById('client-name').value;
    const destCode = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const duration = document.getElementById('duration').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const hotelStars = document.getElementById('hotel-stars').value;
    const transport = document.getElementById('transport').value;
    const pickupDrop = document.getElementById('pickup-drop').value;
    const activityProfile = document.getElementById('activity-profile').value;
    const optimizePrice = document.getElementById('optimize-price').checked;
    
    const selectedDb = travelDatabase[destCode];
    
    activeConfig = {
        clientName,
        db: selectedDb,
        destCode,
        startDate,
        duration,
        adults,
        children,
        hotelStars,
        transport,
        pickupDrop,
        activityProfile,
        optimizePrice
    };
    
    runAgentNetwork(activeConfig);
});

// Modal control: Book Now
btnBookNow.addEventListener('click', function() {
    modalClientName.innerText = finalClientName;
    modalPrice.innerText = `$${finalCalculatedTotal.toLocaleString()}.00`;
    
    const newVoucher = generateVoucher();
    voucherCode.innerText = newVoucher;
    
    // Save to LocalStorage immediately
    const newBookingObj = {
        voucher: newVoucher,
        clientName: finalClientName,
        destCode: activeConfig.destCode,
        locationName: activeConfig.db.locationName,
        startDate: activeConfig.startDate,
        duration: activeConfig.duration,
        adults: activeConfig.adults,
        children: activeConfig.children,
        hotelStars: activeConfig.hotelStars,
        transport: activeConfig.transport,
        pickupDrop: activeConfig.pickupDrop,
        activityProfile: activeConfig.activityProfile,
        optimizePrice: activeConfig.optimizePrice,
        priceTotal: finalCalculatedTotal
    };
    saveBooking(newBookingObj);
    
    bookingModal.classList.add('active');
});

// Modal Close Triggers: Redirect to home page & reset form
function confirmBookingAndRedirectHome() {
    bookingModal.classList.remove('active');
    
    // Smoothly hide itinerary section
    itinerarySection.style.display = 'none';
    
    // Reset form inputs & scrolling
    travelForm.reset();
    
    // Reset date input back to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    dateField.value = tomorrowStr;
    dateField.min = tomorrowStr;
    
    // Reset agent nodes back to idle
    setNodeStatus(nodeHotel, 'idle');
    setNodeStatus(nodeGastronomy, 'idle');
    setNodeStatus(nodeAdventure, 'idle');
    setNodeStatus(nodeLogistics, 'idle');
    setNodeStatus(nodeFinance, 'idle');
    
    // Scroll back to top home section
    document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
}

closeModal.addEventListener('click', confirmBookingAndRedirectHome);
btnModalClose.addEventListener('click', confirmBookingAndRedirectHome);

// Manage Bookings Modal Control
const btnViewBookings = document.getElementById('btn-view-bookings');
const bookingsListModal = document.getElementById('bookings-list-modal');
const closeBookingsModal = document.getElementById('close-bookings-modal');
const btnCloseBookingsModal = document.getElementById('btn-close-bookings-modal');

btnViewBookings.addEventListener('click', function(e) {
    e.preventDefault();
    loadAndRenderBookings();
    bookingsListModal.classList.add('active');
});

closeBookingsModal.addEventListener('click', function() {
    bookingsListModal.classList.remove('active');
});

btnCloseBookingsModal.addEventListener('click', function() {
    bookingsListModal.classList.remove('active');
});

// Window clicks to close modals
window.addEventListener('click', function(e) {
    if (e.target === bookingModal) {
        confirmBookingAndRedirectHome();
    }
    if (e.target === bookingsListModal) {
        bookingsListModal.classList.remove('active');
    }
});

// Initialize Date Input with Tomorrow's Date
const dateField = document.getElementById('start-date');
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowStr = tomorrow.toISOString().split('T')[0];
dateField.value = tomorrowStr;
dateField.min = tomorrowStr;
