/* Nova Kaelen Atlas — content data (global, bundler-safe) */
window.ATLAS = window.ATLAS || {};
window.ATLAS.TIERS = [
    ['05', 'Tower crowns and sky-bridges', '120–214 M / OFFICES, HOTEL BARS, FIVE GLAZED BRIDGES', 'Private above the twentieth floor, but the bridge network between the towers is public right of way, so you can walk five buildings without descending. Two hotel bars sell the view for the price of a drink.'],
    ['04', 'Upper terrace', 'OBSERVATION DECKS, TERRACE CAFÉS, MOUNTAIN-SIDE BUS', 'Cut into the north wall, reached by lift, funicular or cable car. This is where visitors spend sunset and where the city looks most like its postcards.'],
    ['03', 'Housing tiers', '1968 CONCRETE, SUB-RAIL STATIONS, MOST OF EVERYDAY LIFE', 'Nine in ten residents live on this level. Ground floors are shops, stairwells work as streets, and building numbers restart on every tier, which is why locals give directions by station.'],
    ['02', 'Stacked expressways', 'FOUR ROAD DECKS AND A RAIL VIADUCT OVER THE SAME WATER', 'The Stacks interchange threads four levels of highway through the gorge inside a 200 m span. Walk the lower quay beneath it at dusk; the noise is extraordinary and so is the geometry.'],
    ['01', 'River level', 'QUAYS, FERRIES, THE NIGHT MARKET, CARGO BARGES', 'Cool in summer, loud all year, cheapest place to eat. The quays flood most Marches, so everything down here is built to be hosed out.'],
  ];

window.ATLAS.TIERBANDS = [
    [0, 8, '01', 'RIVER LEVEL', 'QUAYS, FERRIES, CARGO BARGES', 'Cool in summer, loud all year, cheapest place to eat. Everything down here is built to be hosed out after the March floods.', 'WALK IN', 2],
    [8, 40, '02', 'STACKED EXPRESSWAYS', 'FOUR ROAD DECKS AND A RAIL VIADUCT', 'The interchange threads four levels of highway through the gorge inside a 200 m span. Standing under it, you feel the decks before you hear them.', 'STAIRS / QUAY', 14],
    [40, 90, '03', 'HOUSING TIERS', '1968 CONCRETE, SUB-RAIL STATIONS', 'Nine in ten residents live at this height. Stairwells work as streets and building numbers restart on every tier, which is why nobody gives directions by address.', 'SUB-RAIL', 79],
    [90, 120, '04', 'UPPER TERRACE', 'OBSERVATION DECKS, TERRACE CAFÉS', 'Cut into the north wall and reached by lift, funicular or cable car. This is where the city looks most like its own postcards, and where it is most expensive to sit down.', 'FUNICULAR / CABLE CAR', 94],
    [120, 214, '05', 'TOWER CROWNS', 'OFFICES, HOTEL BARS, FIVE GLAZED BRIDGES', 'Private above the twentieth floor, but the bridges between the towers are public right of way: five buildings on foot without ever descending.', 'LIFT / SKY-BRIDGE', 100],
  ];

window.ATLAS.PLACES = [
    ['01', 'Skyline Terrace', 'VIEWPOINT', 'A public deck cantilevered off the third tier, level with the sky-bridges and just under the tower crowns, so the whole layered city stacks up in one view. Parasol cafés along the rail. The queue starts after six.', ['FREE, LIFT 4 KR', '45 MIN', 'SUNSET']],
    ['02', 'The Upper Spine', 'ARCHITECTURE', 'Eight white-glass towers standing on brutalist podiums from the sixties, linked by five glazed bridges you can walk end to end without touching the ground. Two eras of Vesperia in one street.', ['FREE', '1 HOUR', 'WEEKDAY AM']],
    ['03', 'The Stacks Interchange', 'LANDMARK', 'Four levels of expressway, two spiral ramps and a rail viaduct crossing the same 200 metres of gorge at different heights. Locals call it traffic. Photograph it from the north quay, where all four decks line up overhead.', ['FREE', '30 MIN', 'BLUE HOUR']],
    ['04', 'Halstead Block Rail Cut', 'CURIOSITY', 'The sub-rail enters a nineteen-storey housing block at the sixth floor, crosses through it and leaves the other side. The platform sits inside the building and the residents above it are still at home.', ['FARE 6 KR', '20 MIN', 'OFF-PEAK']],
    ['05', 'The Lantern Stairs', 'NEIGHBOURHOOD', 'Four hundred steps up the south wall, hung with paper lanterns, lined with family kitchens that open straight onto the staircase. Steep, uneven, the best eating in the city.', ['20–60 KR', '2 HOURS', 'AFTER 19:00']],
    ['06', 'Kaelen Night Market', 'FOOD', 'Two hundred stalls set up under the lower expressway, so it runs whatever the weather does. River fish, hand-pulled noodles, cold pear wine, grill smoke lit orange from below. Bring small notes.', ['15–45 KR', '90 MIN', '19:00–01:00']],
    ['07', 'Kaelen Cable Car', 'RIDE', 'Built for commuters, kept for the view: two cabins that lift you off the south bank, over the shipping channel and the interchange, to the north terrace. Ninety seconds, cheapest sightseeing in Vesperia.', ['12 KR RETURN', '20 MIN', 'DUSK']],
    ['08', 'Old Customs Quarter', 'HISTORIC', 'Where the country began: an 1841 customs post at the river mouth, its yard, four stone warehouses and the original harbour light, all still standing under the towers that grew around them.', ['MUSEUM 30 KR', '1 HOUR', 'EST. 1841']],
    ['09', 'Municipal Archive', 'MUSEUM', 'The civic record of Vesperia under a glass dome: the port, the 1968 housing programme, the terrace automation and what it did to the countryside. The lower vault is closed, and the staff say so plainly.', ['25 KR, FREE WED', '90 MIN', 'TUE–SUN']],
    ['10', 'Pine Ridge Park', 'NATURE', 'The old-growth pine shelf at the foot of the north wall: twelve minutes from the towers and completely quiet. A graded trail, one pavilion, and the only place where you hear the river instead of the traffic.', ['FREE', '1–3 HOURS', 'EARLY AM']],
  ];

window.ATLAS.QUARTERS = [
    ['A1', 'Apex Row', '05', 'Corporate glass', 'Sky-bridges, hotel bars, the best views'],
    ['A2', 'North Terrace', '04', 'Visitor spine', 'Skyline Terrace, cable car, terrace cafés'],
    ['B1', 'Halstead Tiers', '03', 'Concrete housing', 'The rail cut, morning bakeries, street life'],
    ['B2', 'Lantern Slope', '02', 'Stair kitchens', 'Dinner, four hundred steps, lanterns'],
    ['C1', 'South Quay', '01', 'Market and ferries', 'Night market, boat crossings, cheap beer'],
    ['C2', 'Customs End', '01', 'Old stone', '1841 quarter, harbour light, warehouses'],
    ['D1', 'Civic Block', '03', 'Institutional', 'Archive dome, libraries, quiet lunch'],
    ['D2', 'Ridge Gate', '04', 'Forest edge', 'Pine Ridge Park, trails, the only silence'],
  ];

window.ATLAS.HISTORY = [
    ['1841', 'The customs post', 'A tariff shed at the river mouth, built to tax the timber trade. The Old Customs Quarter still stands on the spot, now in the shadow of the Upper Spine.'],
    ['1911', 'The deep-water port', 'Blasting the channel turned a fishing gorge into a trans-Pacific harbour. The rubble became the first river quays, which is why they are the oldest surfaces in the city.'],
    ['1954', 'The Lantern Stairs', 'Dock workers cut a staircase up the south wall to reach cheap land above the flood line, and hung lanterns so the night shift could find its way home. The lanterns never came down.'],
    ['1968', 'The housing programme', 'Eleven months, forty thousand flats, all in concrete on the mountain tiers. Grim in photographs, still lived in, and the reason the towers had podiums to stand on thirty years later.'],
    ['1998', 'The archive dome', 'Built to hold the state record and sealed at the lower level in the same year, for reasons the museum\u2019s own placard calls "under review". The upper galleries are excellent regardless.'],
    ['2019', 'The vertical boom', 'Farm automation emptied the terraces inland and filled the capital in four years. The sky-bridges, the third expressway deck and most of what visitors photograph date from this rush.'],
  ];

window.ATLAS.STOPS = [
    { n: '01', name: 'Skyline Terrace', mins: 45, cost: 4, when: 18 },
    { n: '02', name: 'The Upper Spine', mins: 60, cost: 0, when: 10 },
    { n: '03', name: 'The Stacks Interchange', mins: 30, cost: 0, when: 20 },
    { n: '04', name: 'Halstead Block Rail Cut', mins: 20, cost: 6, when: 11 },
    { n: '05', name: 'The Lantern Stairs', mins: 120, cost: 45, when: 19 },
    { n: '06', name: 'Kaelen Night Market', mins: 90, cost: 30, when: 21 },
    { n: '07', name: 'Kaelen Cable Car', mins: 20, cost: 12, when: 17 },
    { n: '08', name: 'Old Customs Quarter', mins: 60, cost: 30, when: 13 },
    { n: '09', name: 'Municipal Archive', mins: 90, cost: 25, when: 14 },
    { n: '10', name: 'Pine Ridge Park', mins: 120, cost: 0, when: 8 },
  ];

window.ATLAS.DICT = [
    ['Salve-bon', 'SAL-veh BON', 'Hello', 'Any hour, any tier. Latin salve + French bon.'],
    ['Bon-vale', 'bon VAH-leh', 'Goodbye', 'Said leaving a kitchen, a shop or a conversation.'],
    ['Merci-vale', 'mer-SEE VAH-leh', 'Thank you', 'The whole city\u2019s default courtesy.'],
    ['S\u2019il-plait', 'seel PLEH', 'Please', 'Tack it onto any order and you are fine.'],
    ['Oui-est', 'wee EST', 'Yes', 'Nod with it; the nod is the important half.'],
    ['Non-est', 'non EST', 'No', 'Flat, unbothered, never rude.'],
    ['Pardon-me', 'par-DON mee', 'Excuse me', 'Also how you get past someone on the stairs.'],
    ['Combien?', 'kom-BYEN', 'How much?', 'Market stalls expect it. Prices are rarely written.'],
    ['Quelle statio?', 'kel STAH-tsyo', 'Which station?', 'The only direction question that works here.'],
    ['Aqua, s\u2019il-plait', 'AH-kwa seel PLEH', 'Water, please', 'Tap water is free and safe on every tier.'],
    ['Aide-moi', 'ED mwah', 'Help me', 'Understood by transit staff and every stair kitchen.'],
    ['Bon-via', 'bon VEE-ah', 'Safe travels', 'Said to you at the end. Say it back.'],
  ];

window.ATLAS.SERVICES = [
    ['NIGHT MARKET', 19, 25, 'TIER 01 / SOUTH QUAY'],
    ['SUB-RAIL', 5.33, 25.67, 'ALL TIERS'],
    ['CABLE CAR', 7, 23, 'TIER 04'],
    ['SKYLINE TERRACE', 6, 24, 'TIER 03'],
    ['ARCHIVE DOME', 10, 18, 'TIER 03 / CIVIC'],
    ['LANTERN STAIRS', 11, 25.5, 'TIER 02'],
  ];

window.ATLAS.MONTHS = [
    ['JAN', '08:05', '15:52', '16:20', 'THE STACKS, NORTH QUAY', 'Low flat light all day, four hours of usable sun. The interchange photographs best because the decks cast no hard shadow.'],
    ['FEB', '07:32', '16:41', '17:05', 'OLD CUSTOMS QUARTER', 'Wet stone, long reflections. The harbour light comes on before the towers do.'],
    ['MAR', '06:40', '17:28', '18:00', 'SOUTH QUAY', 'Flood week. The quays mirror the whole stack for about ten days.'],
    ['APR', '06:32', '19:12', '19:45', 'LANTERN SLOPE', 'Lanterns switch on while the sky is still blue. Best month for the stairs.'],
    ['MAY', '05:38', '20:04', '20:40', 'SKYLINE TERRACE', 'Haze burns off by nine. Long, clean golden hour across all five tiers.'],
    ['JUN', '05:12', '20:41', '21:15', 'CABLE CAR, WEST CABIN', 'Latest light of the year. Ride at 20:15 and the gorge is lit from end to end.'],
    ['JUL', '05:30', '20:28', '21:00', 'APEX ROW BRIDGES', 'Warm haze in the gorge, clear above tier four. Shoot high, eat low.'],
    ['AUG', '06:04', '19:44', '20:15', 'SKYLINE TERRACE', 'The postcard month. Crowds after 18:00, so arrive by 17:00.'],
    ['SEP', '06:41', '18:47', '19:20', 'PINE RIDGE PARK', 'First cold mornings, mist off the river, ridge visible from the towers.'],
    ['OCT', '07:18', '17:52', '18:20', 'HALSTEAD TIERS', 'Grey sky flattens the concrete into pure form. The brutalist month.'],
    ['NOV', '07:58', '16:24', '16:50', 'NIGHT MARKET', 'Dark by five. The city becomes entirely artificial light, which is its other face.'],
    ['DEC', '08:12', '15:48', '16:15', 'APEX ROW, TOWER CROWNS', 'Crown floors lit from mid-afternoon. Shortest day, strongest city light.'],
  ];

window.ATLAS.INTENTS = ['EAT', 'A VIEW', 'QUIET', 'CONCRETE', 'THE WATER', 'AFTER DARK', 'CHEAP', 'UNDER COVER'];

window.ATLAS.MATCH = [
    ['01', 'Skyline Terrace', '03', 18, '4 kr', ['A VIEW', 'AFTER DARK'], 'Level with the sky-bridges, the whole stack in one frame.'],
    ['02', 'The Upper Spine', '05', 10, 'Free', ['A VIEW', 'CONCRETE'], 'Five glazed bridges, walkable end to end without descending.'],
    ['03', 'The Stacks Interchange', '02', 20, 'Free', ['CONCRETE', 'UNDER COVER', 'CHEAP', 'THE WATER'], 'Four deck levels overhead from the north quay.'],
    ['04', 'Halstead Block Rail Cut', '03', 11, '6 kr', ['CONCRETE', 'CHEAP'], 'The sub-rail crosses through a housing block at the sixth floor.'],
    ['05', 'The Lantern Stairs', '02', 19, '20–60 kr', ['EAT', 'AFTER DARK'], 'Four hundred steps of family kitchens under paper lanterns.'],
    ['06', 'Kaelen Night Market', '01', 21, '15–45 kr', ['EAT', 'AFTER DARK', 'UNDER COVER', 'CHEAP', 'THE WATER'], 'Two hundred stalls under the lower expressway, weatherproof.'],
    ['07', 'Kaelen Cable Car', '04', 17, '12 kr', ['A VIEW', 'THE WATER'], 'Ninety seconds over the shipping channel to the terrace.'],
    ['08', 'Old Customs Quarter', '01', 13, '30 kr', ['CONCRETE', 'THE WATER', 'QUIET'], 'The 1841 stone yard, warehouses and the harbour light.'],
    ['09', 'Municipal Archive', '03', 14, '25 kr', ['QUIET', 'CONCRETE', 'UNDER COVER'], 'The civic record under a glass dome. Lower vault closed.'],
    ['10', 'Pine Ridge Park', '04', 8, 'Free', ['QUIET', 'CHEAP'], 'Old-growth pine, twelve minutes from the towers, no traffic.'],
  ];

window.ATLAS.GAL = [
    ['Fog under the second deck', 'PLATE 001', 'TIER 02 / THE STACKS / 06:20', 'Gorge fog rises through the expressway lattice at first light and swallows the deck above it. Climbers use the outer ribs of the viaduct to get over the cloud line, in the one hour the interchange is quiet enough to hear the river underneath.', 260, 'image/fog.jpg', '02', 6.3],
    ['Parapet, apex hour', 'PLATE 002', 'TIER 04 / NORTH TERRACE / 18:50', 'Two hours before the crown floors switch on, the terrace parapets fill with people who came for the sun coming off the tower glass. Everything standing behind them is the 2019 rush; the concrete they are sitting on is 1968.', 340, 'image/parapet.jpg', '04', 18.8],
    ['Crown floors, cloud in', 'PLATE 003', 'TIER 05 / THE UPPER SPINE / 11:05', 'Low cloud comes off the channel and sits on the spine for most of the morning. From the sky-bridge the top forty floors are simply gone, and the people up there are working in weather nobody at street level can see.', 300, 'image/towers.jpg', '05', 11.1],
    ['The drowned margin', 'PLATE 004', 'TIER 00 / OUTSKIRT FLATS / 07:40', 'Forty minutes past the last tram stop the ground gives up and the forest stands in its own reflection. The city built the flood ponds in 1974 and never drained them; the trees have been dying upright ever since, on schedule.', 220, 'image/drowned-forest.jpg', '00', 7.7],
  ];

