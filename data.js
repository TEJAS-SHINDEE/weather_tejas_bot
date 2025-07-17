
// Dummy data
const countries = ["India",  "USA",  "Germany","UK","Canada","Japan",  "Australia",  "France",  "Brazil",  "Russia",];

const statesByCountry = {
  India: [    "Maharashtra",    "Karnataka",    "Tamil Nadu",    "Gujarat",    "Delhi",    "Uttar Pradesh",    "Rajasthan",    "Punjab",    "Kerala",    "Madhya Pradesh",  ],
  Germany: [    "Bavaria",    "Berlin",    "Hamburg",    "Hesse",    "Saxony",    "Bremen",    "Brandenburg",    "Lower Saxony",    "Saarland",    "Thuringia",  ],
  UK: [    "England",    "Scotland",    "Wales",    "Northern Ireland",    "Greater London",    "West Midlands",    "Greater Manchester",    "West Yorkshire",    "Kent",    "Surrey",  ],
  Canada: [    "Ontario",    "Quebec",    "British Columbia",    "Alberta",    "Manitoba",    "Nova Scotia",    "Saskatchewan",    "New Brunswick",    "Newfoundland and Labrador",    "Prince Edward Island",  ],
  Japan: [    "Tokyo",    "Osaka",    "Kyoto",    "Hokkaido",    "Fukuoka",    "Aichi",    "Hiroshima",    "Chiba",    "Kanagawa",    "Okinawa",  ],  
  Australia: ["New South Wales",    "Victoria",    "Queensland",    "Western Australia",    "South Australia",    "Tasmania",    "Australian Capital Territory",    "Northern Territory",    "Gold Coast",    "Canberra",  ],
  France: [    "Île-de-France",    "Provence-Alpes-Côte d'Azur",    "Auvergne-Rhône-Alpes",    "Nouvelle-Aquitaine",    "Occitanie",    "Grand Est",    "Brittany",    "Hauts-de-France",    "Normandy",    "Bourgogne-Franche-Comté",  ],
  Brazil: [    "São Paulo",    "Rio de Janeiro",    "Bahia",    "Minas Gerais",    "Paraná",    "Pernambuco",    "Ceará",    "Santa Catarina",    "Amazonas",    "Distrito Federal",  ],
  Russia: [    "Moscow",    "Saint Petersburg",    "Novosibirsk",    "Yekaterinburg",    "Nizhny Novgorod",    "Kazan",    "Chelyabinsk",    "Omsk",    "Samara",    "Rostov-on-Don",  ],
    USA: [    "California",    "Texas",    "Florida",    "New York",    "Illinois",    "Pennsylvania",    "Ohio",    "Georgia",    "North Carolina",   "Michigan",  ],
};

const citiesByState = {
  // India
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangalore", "Hubli", "Belgaum"],
  "Tamil Nadu": [    "Chennai",    "Coimbatore",    "Madurai",    "Salem",    "Tiruchirappalli",  ],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  Delhi: ["New Delhi", "Dwarka", "Saket", "Rohini", "Karol Bagh"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Noida"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer", "Bikaner"],
  Punjab: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Mohali"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"],

  // Germany
  Bavaria: ["Munich", "Nuremberg", "Augsburg", "Regensburg", "Würzburg"],
  Berlin: ["Berlin"],
  Hamburg: ["Hamburg"],
  Hesse: ["Frankfurt", "Wiesbaden", "Darmstadt", "Kassel", "Offenbach"],
  Saxony: ["Dresden", "Leipzig", "Chemnitz", "Zwickau", "Görlitz"],
  Bremen: ["Bremen"],
  Brandenburg: [    "Potsdam",    "Cottbus",    "Frankfurt (Oder)",    "Oranienburg",    "Eberswalde",  ],
    "Lower Saxony": [    "Hanover",    "Braunschweig",    "Oldenburg",    "Osnabrück",    "Göttingen",  ],  
    Saarland: [    "Saarbrücken",    "Neunkirchen",    "Homburg",    "Völklingen",    "St. Ingbert",  ],
  Thuringia: ["Erfurt", "Jena", "Gera", "Weimar", "Eisenach"],

  // UK
  England: ["London", "Manchester", "Liverpool", "Birmingham", "Leeds"],
  Scotland: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Inverness"],
  Wales: ["Cardiff", "Swansea", "Newport", "Wrexham", "Bangor"],
  "Northern Ireland": ["Belfast", "Derry", "Lisburn", "Newry", "Armagh"],
  "Greater London": [    "City of London",    "Westminster",    "Croydon",    "Camden",    "Harrow",  ],
  "West Midlands": [    "Birmingham",    "Coventry",    "Wolverhampton",    "Dudley",    "Walsall",  ],
  "Greater Manchester": [    "Manchester",    "Salford",    "Bolton",    "Stockport",    "Oldham",  ],
  "West Yorkshire": [    "Leeds",    "Bradford",    "Huddersfield",    "Wakefield",    "Halifax",  ],
  Kent: ["Maidstone", "Canterbury", "Ashford", "Dartford", "Tunbridge Wells"],
  Surrey: ["Guildford", "Woking", "Epsom", "Farnham", "Reigate"],

  // Canada
  Ontario: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"],
  Quebec: ["Montreal", "Quebec City", "Laval", "Gatineau", "Sherbrooke"],
  "British Columbia": [    "Vancouver",    "Victoria",    "Surrey",    "Burnaby",    "Richmond",  ],  
  Alberta: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Medicine Hat"],  
  Manitoba: [    "Winnipeg",    "Brandon",    "Steinbach",    "Thompson",    "Portage la Prairie",  ],
  "Nova Scotia": ["Halifax", "Sydney", "Dartmouth", "Truro", "New Glasgow"],
  Saskatchewan: [    "Saskatoon",    "Regina",    "Prince Albert",    "Moose Jaw",    "Yorkton",  ],
  "New Brunswick": [    "Moncton",    "Saint John",    "Fredericton",    "Bathurst",    "Miramichi",  ],
  "Newfoundland and Labrador": [    "St. John's",    "Corner Brook",    "Gander",    "Grand Falls-Windsor",    "Mount Pearl",  ],
  "Prince Edward Island": ["Charlottetown", "Summerside","Stratford",    "Cornwall",    "Montague",  ],

  // Japan
  Tokyo: ["Tokyo", "Shibuya", "Shinjuku", "Ginza", "Akihabara"],
  Osaka: ["Osaka", "Sakai", "Hirakata", "Toyonaka", "Moriguchi"],
  Kyoto: ["Kyoto", "Uji", "Kameoka", "Maizuru", "Fukuchiyama"],
  Hokkaido: ["Sapporo", "Hakodate", "Asahikawa", "Otaru", "Kushiro"],
  Fukuoka: ["Fukuoka", "Kitakyushu", "Kurume", "Iizuka", "Chikushino"],
  Aichi: ["Nagoya", "Toyota", "Okazaki", "Ichinomiya", "Kasugai"],
  Hiroshima: ["Hiroshima", "Fukuyama", "Kure", "Onomichi", "Hatsukaichi"],
  Chiba: ["Chiba", "Narita", "Funabashi", "Ichikawa", "Kashiwa"],
  Kanagawa: ["Yokohama", "Kawasaki", "Sagamihara", "Fujisawa", "Kamakura"],
  Okinawa: ["Naha", "Okinawa City", "Uruma", "Urasoe", "Ginowan"],

  // Australia
  "New South Wales": ["Sydney","Newcastle","Wollongong","Parramatta","Coffs Harbour",],
  Victoria: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"],
  Queensland: ["Brisbane", "Gold Coast", "Cairns", "Townsville", "Toowoomba"],
  "Western Australia": ["Perth", "Fremantle", "Bunbury", "Albany", "Geraldton"],
  "South Australia": ["Adelaide","Mount Gambier","Whyalla","Gawler","Port Lincoln",  ],
  Tasmania: ["Hobart", "Launceston", "Devonport", "Burnie", "Ulverstone"],
    "Australian Capital Territory": ["Canberra"],
      "Northern Territory": [    "Darwin",    "Alice Springs",    "Katherine",    "Tennant Creek",    "Nhulunbuy",  ],
  "Gold Coast": [    "Southport",    "Surfers Paradise",    "Burleigh Heads",    "Coolangatta",    "Robina",  ],
  Canberra: [    "Canberra Central",    "Belconnen",    "Woden Valley",    "Tuggeranong",    "Gungahlin",  ],
  // France
  "Île-de-France": [    "Paris",    "Boulogne-Billancourt",    "Saint-Denis",    "Versailles",    "Nanterre",  ],
  "Provence-Alpes-Côte d'Azur": [    "Marseille",    "Nice",    "Toulon",    "Avignon",    "Cannes",  ],
  "Auvergne-Rhône-Alpes": [    "Lyon",    "Grenoble",    "Clermont-Ferrand",    "Saint-Étienne",    "Annecy",  ],
  "Nouvelle-Aquitaine": [    "Bordeaux",    "Limoges",    "Poitiers",    "Pau",    "La Rochelle",  ],
  Occitanie: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Albi"],
  "Grand Est": ["Strasbourg", "Nancy", "Metz", "Reims", "Mulhouse"],
  Brittany: ["Rennes", "Brest", "Quimper", "Lorient", "Vannes"],
  "Hauts-de-France": ["Lille", "Amiens", "Roubaix", "Dunkerque", "Calais"],
  Normandy: ["Rouen", "Caen", "Le Havre", "Cherbourg", "Évreux"],
  "Bourgogne-Franche-Comté": ["Dijon","Besançon","Auxerre","Chalon-sur-Saône","Nevers",],

  // Brazil
  "São Paulo": ["São Paulo", "Campinas", "Santos", "São Bernardo", "Guarulhos"],
  "Rio de Janeiro": ["Rio de Janeiro","Niterói","Petrópolis","Duque de Caxias","Nova Iguaçu",],
  Bahia: ["Salvador","Feira de Santana","Ilhéus","Vitória da Conquista","Itabuna",],
  "Minas Gerais": ["Belo Horizonte","Uberlândia","Juiz de Fora","Contagem",
    "Montes Claros",
  ],
  Paraná: ["Curitiba", "Londrina", "Maringá", "Cascavel", "Ponta Grossa"],
  Pernambuco: ["Recife", "Olinda", "Caruaru", "Jaboatão", "Petrolina"],
  Ceará: ["Fortaleza", "Juazeiro", "Sobral", "Crato", "Maracanaú"],
  "Santa Catarina": [    "Florianópolis",    "Joinville",    "Blumenau",    "Criciúma",    "Chapecó",  ],
  Amazonas: ["Manaus", "Parintins", "Itacoatiara", "Coari", "Tefé"],
  "Distrito Federal": [    "Brasília",    "Taguatinga",    "Ceilândia",    "Gama",    "Sobradinho",  ],

  // Russia
  Moscow: ["Moscow", "Zelenograd", "Khimki", "Balashikha", "Odintsovo"],
  "Saint Petersburg": [    "Saint Petersburg",    "Pushkin",    "Kolpino",    "Kronstadt",    "Lomonosov",  ],
  Novosibirsk: ["Novosibirsk", "Berdsk", "Iskitim", "Ob", "Kolyvan"],
  Yekaterinburg: ["Yekaterinburg","Verkhnyaya Pyshma","Pervouralsk","Revda","Aramil",],
  "Nizhny Novgorod": ["Nizhny Novgorod","Dzerzhinsk","Arzamas","Bor","Kstovo",],
  Kazan: ["Kazan", "Zelenodolsk", "Vysokaya Gora", "Arsk", "Innopolis"],
  Chelyabinsk: ["Chelyabinsk", "Miass", "Zlatoust", "Kopeysk", "Kyshtym"],
  Omsk: ["Omsk", "Tara", "Kalachinsk", "Isilkul", "Nazyvayevsk"],
  Samara: ["Samara", "Tolyatti", "Novokuibyshevsk", "Syzran", "Chapaevsk"],
  "Rostov-on-Don": ["Rostov-on-Don","Taganrog","Novocherkassk","Bataysk","Shakhty",],
};

module.exports = {
    countries,
    statesByCountry,
    citiesByState,
}