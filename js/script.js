/* jshint esversion: 6 */

$(document).ready(function () {
    let user;

});

const menuOptions = {
    breakfast: [{
            id: 1,
            name: "Pancakes",
            price: 5.99,
            description: "Fluffy pancakes served with maple syrup and fresh berries"
        },
        {
            id: 2,
            name: "Omelette",
            price: 6.99,
            description: "Three-egg omelette with cheese, ham, and bell peppers"
        },
        {
            id: 3,
            name: "French Toast",
            price: 5.49,
            description: "Golden-brown French toast with powdered sugar and a side of fruit"
        }
    ],
    lunch: [{
            id: 4,
            name: "Grilled Chicken Sandwich",
            price: 8.99,
            description: "Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun"
        },
        {
            id: 5,
            name: "Caesar Salad",
            price: 7.99,
            description: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese"
        }
    ],
    dinner: [{
            id: 6,
            name: "Spaghetti Bolognese",
            price: 12.99,
            description: "Spaghetti with a rich and hearty Bolognese sauce"
        },
        {
            id: 7,
            name: "Grilled Salmon",
            price: 15.99,
            description: "Grilled salmon fillet served with a lemon butter sauce and seasonal vegetables"
        },
        {
            id: 8,
            name: "Steak and Potatoes",
            price: 18.99,
            description: "Juicy steak with garlic mashed potatoes and steamed broccoli"
        }
    ],
    drinks: [{
            id: 9,
            name: "Mojito",
            price: 7.50,
            description: "Refreshing cocktail with white rum, mint, lime, sugar, and soda water"
        },
        {
            id: 10,
            name: "Margarita",
            price: 8.00,
            description: "Classic cocktail with tequila, lime juice, and triple sec, served with a salt rim"
        },
        {
            id: 11,
            name: "Iced Coffee",
            price: 3.50,
            description: "Chilled coffee served over ice with a splash of milk"
        },
        {
            id: 12,
            name: "Lemonade",
            price: 2.99,
            description: "Freshly squeezed lemonade with a hint of mint"
        }
    ]
};


const properties = [{
        id: 1,
        name: 'Bayside Suite',
        minStay: 1,
        maxStay: 5,
        bedrooms: 1,
        bathrooms: 2,
        minGuests: 1,
        maxGuests: 2,
        price: 157,
        rating: '5.0',
        location: 'Northland',
        address: 'Bay of Islands',
        longitude: 174.09179080652817,
        latitude: -35.28183727324103,
        houseType: 'Hotel',
        description: 'A cozy hotel suite located in the scenic Bay of Islands, Northland.',
        images: [
            '../images/hotels/northlandhotel1.webp',
            '../images/hotels/northlandhotel2.webp'
        ],
        bio: 'The Bayside Suite offers a luxurious experience in the beautiful Bay of Islands. With a perfect rating of 5.0, this hotel suite is designed for ultimate comfort. Located in Northland, it provides stunning views and access to various water activities. Guests will enjoy a tranquil stay with modern amenities, making it an ideal spot for a romantic getaway or a peaceful retreat.'
    },
    {
        id: 2,
        name: 'Ninety Mile Dream',
        minStay: 1,
        maxStay: 5,
        bedrooms: 1,
        bathrooms: 2,
        minGuests: 1,
        maxGuests: 2,
        price: 157,
        rating: '5.0',
        location: 'Northland',
        address: 'Ninety Mile Beach',
        longitude: 172.92800063683302,
        latitude: -34.717080568736606,
        houseType: 'Hotel',
        description: 'A charming hotel situated on the famous Ninety Mile Beach in Northland.',
        images: [
            '../images/hotels/northlandhotel3.webp',
            '../images/hotels/northlandhotel4.webp'
        ],
        bio: 'Ninety Mile Dream is nestled along the renowned Ninety Mile Beach, offering spectacular ocean views. This hotel boasts a flawless 5.0 rating, ensuring high-quality service and amenities. Located in Northland, it provides a unique blend of relaxation and adventure, with endless sandy shores to explore. Ideal for couples or solo travelers seeking a memorable beachside experience.'
    },
    {
        id: 3,
        name: 'Easy Living',
        minStay: 3,
        maxStay: 10,
        bedrooms: 1,
        bathrooms: 2,
        minGuests: 2,
        maxGuests: 4,
        price: 90,
        rating: '4.93',
        location: 'Northland',
        address: 'Matai Beach',
        longitude: 173.40800725146022,
        latitude: -34.82829708910316,
        houseType: 'Motel',
        description: 'A comfortable motel near Matai Beach, perfect for a relaxing getaway.',
        images: [
            '../images/motels/northlandmotel1.webp',
            '../images/motels/northlandmotel2.webp'
        ],
        bio: 'Easy Living offers a serene escape near Matai Beach in Northland. With a near-perfect rating of 4.93, this motel provides a cozy and affordable option for families or groups. Guests can enjoy the pristine beach and tranquil surroundings, making it an excellent choice for a laid-back vacation.'
    },
    {
        id: 4,
        name: 'Dreamy Resort',
        minStay: 1,
        maxStay: 5,
        bedrooms: 1,
        bathrooms: 2,
        minGuests: 1,
        maxGuests: 2,
        price: 157,
        rating: '4.9',
        location: 'Auckland',
        address: 'Mission Bay',
        longitude: 174.84349015267313,
        latitude: -36.85079734246089,
        houseType: 'Hotel',
        description: 'A luxurious resort hotel located in Mission Bay, Auckland.',
        images: [
            '../images/hotels/aucklandhotel1.webp',
            '../images/hotels/aucklandhotel2.webp'
        ],
        bio: 'Dreamy Resort is a luxurious retreat in Mission Bay, Auckland. This high-end hotel, with a rating of 4.9, offers stunning views of the bay and top-notch amenities. Guests can indulge in the beauty of Auckland while enjoying the resort\'s luxurious facilities, making it a perfect destination for those seeking elegance and comfort.'
    },
    {
        id: 5,
        name: 'City Scape Hostel',
        minStay: 1,
        maxStay: 10,
        bedrooms: 1,
        bathrooms: 1,
        minGuests: 1,
        maxGuests: 1,
        price: 30,
        rating: '4.4',
        location: 'Auckland',
        address: 'Auckland City',
        longitude: 174.72599082856544,
        latitude: -36.84531593478089,
        houseType: 'Hostel',
        description: 'A budget-friendly hostel in the heart of Auckland City.',
        images: [
            '../images/hostels/aucklandhostel1.webp',
            '../images/hostels/aucklandhostel2.webp'
        ],
        bio: 'City Scape Hostel is a budget-friendly option located in the vibrant heart of Auckland City. With a rating of 4.4, it provides essential amenities and a convenient location for exploring the city. Ideal for solo travelers or backpackers, this hostel offers a comfortable and affordable stay within walking distance of major attractions and public transport.'
    },
    {
        id: 6,
        name: 'Family Bach Retreat',
        minStay: 2,
        maxStay: 15,
        bedrooms: 3,
        bathrooms: 4,
        minGuests: 1,
        maxGuests: 4,
        price: 240,
        rating: '4.9',
        location: 'Auckland',
        address: 'Kawakawa Bay',
        longitude: 175.16721039779011,
        latitude: -36.94832094041927,
        houseType: 'House',
        description: 'A spacious house in Kawakawa Bay, perfect for a family retreat.',
        images: [
            '../images/houses/aucklandhouse1.webp',
            '../images/houses/aucklandhouse2.webp'
        ],
        bio: 'Family Bach Retreat offers a spacious and comfortable stay in Kawakawa Bay, Auckland. This house, with a 4.9 rating, is ideal for families looking for a relaxing getaway. Surrounded by natural beauty, it features ample space and modern amenities, making it perfect for longer stays and family gatherings.'
    },
    {
        id: 7,
        name: 'Beachside Bliss',
        minStay: 2,
        maxStay: 15,
        bedrooms: 2,
        bathrooms: 3,
        minGuests: 1,
        maxGuests: 4,
        price: 240,
        rating: '5.0',
        location: 'Coromandel',
        address: 'Wainui Bay',
        longitude: 175.47740463274323,
        latitude: -36.75111137930583,
        houseType: 'House',
        description: 'A delightful house by Wainui Bay, offering stunning beach views.',
        images: [
            '../images/houses/coromandelhouse1.webp',
            '../images/houses/coromandelhouse2.webp'
        ],
        bio: 'Beachside Bliss is a beautiful house located by Wainui Bay in Coromandel. With a perfect rating of 5.0, this property offers stunning beach views and luxurious amenities. It\'s an ideal spot for families or groups seeking a relaxing and scenic coastal vacation, complete with modern comforts and direct beach access.'
    },
    {
        id: 8,
        name: 'Oceanfront Oasis',
        minStay: 1,
        maxStay: 10,
        bedrooms: 1,
        bathrooms: 1,
        minGuests: 1,
        maxGuests: 1,
        price: 30,
        rating: '5.0',
        location: 'Coromandel',
        address: 'Coromandel',
        longitude: 175.49702954501112,
        latitude: -36.75883450983489,
        houseType: 'Hostel',
        description: 'An affordable oceanfront hostel in Coromandel.',
        images: [
            '../images/hostels/coromandelhostel1.webp',
            '../images/hostels/coromandelhostel2.webp'
        ],
        bio: 'Oceanfront Oasis is an affordable hostel located in the picturesque Coromandel. With a 5.0 rating, it provides budget travelers with a unique oceanfront experience. Guests can enjoy breathtaking sea views and easy access to local attractions, making it an excellent choice for solo travelers seeking adventure and serenity.'
    },
    {
        id: 9,
        name: 'Waves & Bays',
        minStay: 1,
        maxStay: 10,
        bedrooms: 1,
        bathrooms: 1,
        minGuests: 1,
        maxGuests: 1,
        price: 30,
        rating: '4.8',
        location: 'Bay of Plenty',
        address: 'Mount Maunganui',
        longitude: 176.1779258992488,
        latitude: -37.64284604642042,
        houseType: 'Hostel',
        description: 'A lively hostel located in the vibrant Mount Maunganui area.',
        images: [
            '../images/hostels/bayplentyhostel1.webp',
            '../images/hostels/bayplentyhostel2.webp'
        ],
        bio: 'Waves & Bays is a lively hostel in the vibrant Mount Maunganui area, Bay of Plenty. With a 4.8 rating, it offers a fun and social atmosphere for budget-conscious travelers. Guests can enjoy the bustling local scene, beautiful beaches, and various outdoor activities, making it a great choice for those looking to explore and meet new people.'
    },
    {
        id: 10,
        name: 'Sea Breeze Haven',
        minStay: 1,
        maxStay: 5,
        bedrooms: 1,
        bathrooms: 2,
        minGuests: 1,
        maxGuests: 2,
        price: 157,
        rating: '4.58',
        location: 'Bay of Plenty',
        address: 'Waihi Beach',
        longitude: 175.9322056205622,
        latitude: -37.4079122741477,
        houseType: 'Hotel',
        description: 'A serene hotel located at Waihi Beach, Bay of Plenty.',
        images: [
            '../images/hotels/bayplentyhotel1.webp',
            '../images/hotels/bayplentyhotel2.webp'
        ],
        bio: 'Sea Breeze Haven is a serene hotel located at Waihi Beach in the Bay of Plenty. With a rating of 4.58, this property offers a tranquil retreat for couples or solo travelers. Featuring 1 bedroom and 2 bathrooms, it can accommodate up to 2 guests. Guests can enjoy beautiful beach views and a peaceful atmosphere. The hotel provides all the necessary amenities for a comfortable stay and is ideal for those looking to relax and unwind by the sea.'
    },
    {
        id: 11,
        name: 'Oceanview Hideaway',
        minStay: 2,
        maxStay: 15,
        bedrooms: 2,
        bathrooms: 3,
        minGuests: 1,
        maxGuests: 4,
        price: 240,
        rating: '4.6',
        location: 'Bay of Plenty',
        address: 'Papamoa Beach',
        longitude: 176.28889989799066,
        latitude: -37.697553327804854,
        houseType: 'House',
        description: 'A lovely house with ocean views at Papamoa Beach.',
        images: [
            '../images/houses/bayplentyhouse1.webp',
            '../images/houses/bayplentyhouse2.webp'
        ],
        bio: 'Oceanview Hideaway is a charming house located in the beautiful Papamoa Beach area of Bay of Plenty. With a rating of 4.6, this property is perfect for families or small groups, offering 2 bedrooms and 3 bathrooms. Guests can enjoy stunning ocean views and a serene atmosphere. The house can accommodate up to 4 guests and provides all the necessary amenities for a comfortable stay. Its proximity to the beach makes it an ideal spot for those looking to relax and unwind by the sea.',
    },
    {
        id: 12,
        name: 'Tidal Retreat',
        minStay: 3,
        maxStay: 10,
        bedrooms: 1,
        bathrooms: 1,
        minGuests: 2,
        maxGuests: 4,
        price: 90,
        rating: '4.7',
        location: 'Bay of Plenty',
        address: 'Ōhope Beach',
        longitude: 177.05662051038237,
        latitude: -37.97130797384218,
        houseType: 'Motel',
        description: 'A peaceful motel near Ōhope Beach, perfect for a tranquil escape.',
        images: [
            '../images/motels/bayplentymotel1.webp',
            '../images/motels/bayplentymotel2.webp'
        ],
        bio: 'Tidal Retreat is a cozy motel located near the serene Ōhope Beach in Bay of Plenty. With a high rating of 4.7, this property is perfect for couples or small groups seeking a peaceful getaway. The motel features 1 bedroom and 1 bathroom, accommodating up to 4 guests. Guests can enjoy the tranquil atmosphere and beautiful beach views. This property is ideal for those looking to escape the hustle and bustle and enjoy a relaxing vacation by the sea.',
    },
    {
        id: 13,
        name: 'Shoreline Sanctuary',
        minStay: 1,
        maxStay: 5,
        bedrooms: 1,
        bathrooms: 2,
        minGuests: 1,
        maxGuests: 2,
        price: 157,
        rating: '5.0',
        location: 'Abel Tasman',
        address: 'Medlands Beach',
        longitude: 175.49388227925743,
        latitude: -36.26531589404831,
        houseType: 'Hotel',
        description: 'A serene hotel at Medlands Beach, Abel Tasman.',
        images: [
            '../images/hotels/tasmanhotel1.webp',
            '../images/hotels/tasmanhotel2.webp'
        ],
        bio: 'Shoreline Sanctuary is a serene hotel located at Medlands Beach in Abel Tasman. This property boasts a perfect rating of 5.0, making it an ideal choice for couples seeking a romantic getaway. With 1 bedroom and 2 bathrooms, the hotel can accommodate up to 2 guests. Guests can enjoy stunning beach views and a peaceful atmosphere. The hotel offers all the necessary amenities for a comfortable stay and is perfect for those looking to relax and unwind by the beach.',
    },
    {
        id: 14,
        name: 'Horizon Dwelling',
        minStay: 3,
        maxStay: 10,
        bedrooms: 1,
        bathrooms: 1,
        minGuests: 2,
        maxGuests: 4,
        price: 90,
        rating: '4.9',
        location: 'Abel Tasman',
        address: 'Tasman Beach',
        longitude: 173.05310602181888,
        latitude: -41.190951492758394,
        houseType: 'Motel',
        description: 'A comfortable motel located at Tasman Beach, ideal for a relaxing stay.',
        images: [
            '../images/motels/tasmanmotel1.webp',
            '../images/motels/tasmanmotel2.webp'
        ],
        bio: 'Horizon Dwelling is a comfortable motel located at Tasman Beach in Abel Tasman. With a high rating of 4.9, this property is perfect for couples or small groups seeking a relaxing stay. The motel features 1 bedroom and 1 bathroom, accommodating up to 4 guests. Guests can enjoy beautiful beach views and a peaceful atmosphere. The motel offers all the necessary amenities for a comfortable stay and is ideal for those looking to unwind and enjoy a tranquil beach vacation.',
    },
    {
        id: 15,
        name: 'Sun-Kissed Shores',
        minStay: 1,
        maxStay: 5,
        bedrooms: 1,
        bathrooms: 1,
        minGuests: 1,
        maxGuests: 2,
        price: 157,
        rating: '5.0',
        location: 'Waiheke',
        address: 'Waiheke Island',
        longitude: 175.02065224427704,
        latitude: -36.788326822676645,
        houseType: 'Hotel',
        description: 'A sunlit hotel on Waiheke Island, perfect for beach lovers.',
        images: [
            '../images/hotels/waihekehotel1.webp',
            '../images/hotels/waihekehotel2.webp'
        ],
        bio: 'Sun-Kissed Shores is a sunlit hotel located on Waiheke Island, perfect for beach lovers. With a perfect rating of 5.0, this property is ideal for couples seeking a romantic beach getaway. The hotel features 1 bedroom and 1 bathroom, accommodating up to 2 guests. Guests can enjoy stunning beach views and a warm, sunny atmosphere. The hotel offers all the necessary amenities for a comfortable stay and is perfect for those looking to relax and soak up the sun on Waiheke Island.',
    },
    {
        id: 16,
        name: 'The Starfish Suite',
        minStay: 1,
        maxStay: 5,
        bedrooms: 1,
        bathrooms: 2,
        minGuests: 1,
        maxGuests: 2,
        price: 157,
        rating: '5.0',
        location: 'Waiheke',
        address: 'Waiheke Island',
        longitude: 175.0795529813405,
        latitude: -36.79207116868543,
        houseType: 'Hotel',
        description: 'A luxurious hotel suite on Waiheke Island, offering stunning sea views.',
        images: [
            '../images/hotels/waihekehotel3.webp',
            '../images/hotels/waihekehotel4.webp'
        ],
        bio: 'The Starfish Suite is a luxurious hotel suite located on Waiheke Island, offering stunning sea views. With a perfect rating of 5.0, this property is ideal for couples seeking a romantic and luxurious getaway. The suite features 1 bedroom and 2 bathrooms, accommodating up to 2 guests. Guests can enjoy breathtaking ocean views and a serene atmosphere. The suite offers all the necessary amenities for a comfortable and luxurious stay and is perfect for those looking to indulge in a lavish beach vacation.',
    },
    {
        id: 17,
        name: 'Seaglass Sanctuary',
        minStay: 2,
        maxStay: 15,
        bedrooms: 2,
        bathrooms: 2,
        minGuests: 1,
        maxGuests: 4,
        price: 240,
        rating: '5.0',
        location: 'Waiheke',
        address: 'Waiheke Island',
        longitude: 175.04801081758828,
        latitude: -36.79536914175861,
        houseType: 'House',
        description: 'A beautiful house on Waiheke Island, perfect for a serene getaway.',
        images: [
            '../images/houses/waihekehouse1.webp',
            '../images/houses/waihekehouse2.webp'
        ],
        bio: 'Seaglass Sanctuary is a beautiful house located on Waiheke Island, perfect for a serene getaway. With a perfect rating of 5.0, this property is ideal for families or small groups seeking a peaceful retreat. The house features 2 bedrooms and 2 bathrooms, accommodating up to 4 guests. Guests can enjoy stunning ocean views and a tranquil atmosphere. The house offers all the necessary amenities for a comfortable stay and is perfect for those looking to relax and unwind in a beautiful beach setting.',
    },
    {
        id: 18,
        name: 'Sunlit Shores',
        minStay: 3,
        maxStay: 10,
        bedrooms: 1,
        bathrooms: 2,
        minGuests: 2,
        maxGuests: 4,
        price: 90,
        rating: '4.8',
        location: 'Marlborough',
        address: 'Marlborough',
        longitude: 174.00853213000875,
        latitude: -41.2962641216764,
        houseType: 'Motel',
        description: 'A cozy motel in Marlborough, ideal for a sun-soaked vacation.',
        images: [
            '../images/motels/marlboroughmotel1.webp',
            '../images/motels/marlboroughmotel2.webp'
        ],
        bio: 'Sunlit Shores is a cozy motel located in Marlborough, ideal for a sun-soaked vacation. With a high rating of 4.8, this property is perfect for couples or small groups seeking a relaxing stay. The motel features 1 bedroom and 2 bathrooms, accommodating up to 4 guests. Guests can enjoy beautiful views and a warm, sunny atmosphere. The motel offers all the necessary amenities for a comfortable stay and is ideal for those looking to unwind and enjoy a sun-filled vacation in Marlborough.',
    },
    {
        id: 19,
        name: 'The Seafoam Suite',
        minStay: 2,
        maxStay: 15,
        bedrooms: 3,
        bathrooms: 3,
        minGuests: 1,
        maxGuests: 4,
        price: 240,
        rating: '5.0',
        location: 'Marlborough',
        address: 'Robin Hood Bay',
        longitude: 174.07770655559068,
        latitude: -41.35397943277601,
        houseType: 'House',
        description: 'A luxurious house in Robin Hood Bay, perfect for a family vacation.',
        images: [
            '../images/houses/marlboroughhouse1.webp',
            '../images/houses/marlboroughhouse2.webp'
        ],
        bio: 'The Seafoam Suite is a luxurious house located in Robin Hood Bay, Marlborough, perfect for a family vacation. With a perfect rating of 5.0, this property is ideal for families or small groups seeking a luxurious retreat. The house features 3 bedrooms and 3 bathrooms, accommodating up to 4 guests. Guests can enjoy stunning ocean views and a serene atmosphere. The house offers all the necessary amenities for a comfortable and luxurious stay and is perfect for those looking to indulge in a lavish beach vacation in Marlborough.',
    },
    {
        id: 20,
        name: 'Saltwater Serenity',
        minStay: 2,
        maxStay: 15,
        bedrooms: 2,
        bathrooms: 1,
        minGuests: 1,
        maxGuests: 4,
        price: 240,
        rating: '5.0',
        location: 'Marlborough',
        address: 'Marlborough',
        longitude: 173.75950257977306,
        latitude: -41.11831038924202,
        houseType: 'House',
        description: 'A serene house in Marlborough, ideal for a peaceful retreat.',
        images: [
            '../images/houses/marlboroughhouse3.webp',
            '../images/houses/marlboroughhouse4.webp'
        ],
        bio: 'Saltwater Serenity is a serene house located in Marlborough, ideal for a peaceful retreat. With a perfect rating of 5.0, this property is ideal for families or small groups seeking a tranquil getaway. The house features 2 bedrooms and 1 bathroom, accommodating up to 4 guests. Guests can enjoy beautiful ocean views and a peaceful atmosphere. The house offers all the necessary amenities for a comfortable stay and is perfect for those looking to relax and unwind in a serene beach setting in Marlborough.',
    },
];

$(document).ready(function () {
    new fullpage('#fullpage', {
        licenseKey: 'gplv3-license',
        controlArrows: false,
        fixedElements: "#navbar",
        autoScrolling: true,
        scrollHorizontally: true,
        keyboardScrolling: false
    });

    fullpage_api.setAllowScrolling(true);

    function populateLocationOptions() {
        const locations = Array.from(new Set(properties.map(property => property.location)));
        locations.sort();
        const locationSelect = $('#location');
        locationSelect.empty();
        locationSelect.append(`<option value="any">Any</option>`);
        locations.forEach(location => {
            locationSelect.append(`<option value="${location}">${location}</option>`);
        });
    }

    populateLocationOptions();

    // FILTERS
    function validateFilters() {
        let isValid = true;
        let errorMessage = "";

        if ($('#location').val() === "") {
            isValid = false;
            errorMessage += "Please select a location.<br>";
        }

        if ($('#startDate').val() === "") {
            isValid = false;
            errorMessage += "Please select a start date.<br>";
        }
        if ($('#endDate').val() === "") {
            isValid = false;
            errorMessage += "Please select an end date.<br>";
        }

        if (!isValid) {
            $('#error-message').html(errorMessage).show();
        } else {
            $('#error-message').hide();
        }

        return isValid;
    }

    // DATEPICKER
    $("#startDate").datepicker({
        dateFormat: "dd/mm/yy"
    });
    $("#endDate").datepicker({
        dateFormat: "dd/mm/yy"
    });

    // SEARCH
    $("#searchBtn").click(function (e) {
        e.preventDefault();
        if (validateFilters()) {
            filterAndDisplayProperties();
        }
    });

    // FILTERS + DISPLAY RESULTS
    function filterAndDisplayProperties() {
        const location = $('#location').val();
        const bedrooms = parseInt($('#bedrooms').val(), 10) || 0;
        const bathrooms = parseInt($('#bathrooms').val(), 10) || 0;
        const guests = parseInt($('#guests').val(), 10) || 1;
        const diffDays = calculateDays();
        const selectedBuildingTypes = [];
        $('.buildingType:checked').each(function () {
            selectedBuildingTypes.push($(this).val());
        });

        const filteredProperties = properties.filter(property => {
            return (location === 'any' || property.location === location) &&
                (property.bedrooms >= bedrooms) &&
                (property.bathrooms >= bathrooms) &&
                (property.minStay <= diffDays) &&
                (property.maxStay >= diffDays) &&
                (property.minGuests <= guests && property.maxGuests >= guests) &&
                (selectedBuildingTypes.length === 0 || selectedBuildingTypes.includes(property.houseType));

        });

        $('#priceMin').click(() => {
            displayProperties(filteredProperties.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
        });

        $('#priceMax').click(() => {
            displayProperties(filteredProperties.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)));
        });

        displayProperties(filteredProperties);
    }

    function calculateDays() {
        const startDate = $("#startDate").datepicker("getDate");
        const endDate = $("#endDate").datepicker("getDate");

        if (startDate && endDate) {
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            return diffDays;
        } else {
            return 0;
        }
    }

    function displayProperties(properties) {
        const products = document.getElementById('products');
        products.innerHTML = '';

        properties.forEach(property => {
            let imagesHtml = '';

            property.images.forEach(image => {
                imagesHtml += `<div class="swiper-slide"><img class="swiper-img" src="${image}" alt="${property.name}" /></div>`;
            });

            const propertyHtml = `
                <div class="property-card">
                    <div class="image-content">
                        <div class="swiper">
                            <div class="swiper-wrapper">
                                ${imagesHtml}
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="image-hover--swipe">
                            <div class="image-hover--container">
                                <img class="pointer-slide" src="../images/pointer.png">
                                <p>Drag me</p>
                            </div>
                        </div>
                    </div>
                    <div class="property-content">
                        <div class="main-titles">
                            <h3>${property.name}</h3>
                            <h3>$${property.price}</h3>                    
                        </div>
                        <div class="sub-titles">
                            <h6>${property.location}, ${property.address}</h6>
                            <h6>per night</h6>
                        </div>
                        <p>${property.description}</p>
                        <div class="card-icons">
                            <div class="icons">
                                <i class="fa-solid fa-bed"></i>
                                <p>${property.bedrooms}</p>
                            </div>
                            <div class="icons">
                                <i class="fa-solid fa-bath"></i>
                                <p>${property.bathrooms}</p>
                            </div>
                            <div class="icons">
                                <i class="fa-solid fa-star"></i>
                                <p>${property.rating}</p>
                            </div>
                        </div>
                        <div class="card-button-section">
                            <a class="book-now-btn primary-button" data-id="${property.id}">
                                <p>Book now</p>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            products.innerHTML += propertyHtml;
        });

        const swipers = document.querySelectorAll('.swiper');
        swipers.forEach(swiperEl => {
            new Swiper(swiperEl, {
                direction: 'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });

        document.querySelectorAll('.book-now-btn').forEach(button => {
            button.addEventListener('click', function () {
                const propertyId = $(this).data('id');
                const property = properties.find(p => p.id === propertyId);
                fullpage_api.moveTo(1, 1);
            });
        });

        function populateSelectResult(propertyId) {
            const preview = $('#PropertyCardPreview');
            preview.empty();
            const previewProperty = properties.find(property => property.id === propertyId);
            if (!previewProperty) {
                return;
            }
            preview.append(`
                <div id="preview-${previewProperty.id}" class="property-card-preview">
                    <a id="backToMain" class="back-btn primary-button">
                        <img src="../images/backarrow.svg">
                        <p>Back</p>
                    </a>

                    <div class="property-header">
                        <div class="image-gallery" id="image-gallery-container">
                            <div class="thumbnails" id="thumbnails-container">
                                ${previewProperty.images.map(image => `<img class="thumbnail" src="${image}" alt="${previewProperty.name}">`).join('')}
                            </div>
                            <div class="main-image-container" id="main-image-container">
                                <img class="main-image" id="main-image" src="${previewProperty.images[0]}" alt="Main Image">
                            </div>
                        </div>
                        <div class="property-amenities">
                            <div class="amenity">
                                <i class="fa-solid fa-bed"></i>
                                <p>${previewProperty.bedrooms}</p>
                            </div>
                            <div class="amenity">
                                <i class="fa-solid fa-bath"></i>
                                <p>${previewProperty.bathrooms}</p>
                            </div>
                            <div class="amenity">
                                <i class="fa-solid fa-people-group"></i>
                                <p>${previewProperty.minGuests}-${previewProperty.maxGuests}</p>
                            </div>
                            <div class="amenity">
                                <i class="fa-solid fa-star"></i>
                                <p>${previewProperty.rating}</p>
                            </div>
                            <div class="amenity">
                                <i class="fa-solid fa-house"></i>
                                <p>${previewProperty.houseType}</p>
                            </div>
                        </div>
                    </div>

                    <div class="main-property-details">
                        <div class="property-header-titles">
                            <div class="main-titles">
                                <h2>${previewProperty.name}</h2>
                                <h2>$${previewProperty.price}</h2>
                            </div>
                            <div class="sub-titles">
                                <h6>${previewProperty.location}, ${previewProperty.address}</h6>
                                <h6>Per night</h6>
                            </div>
                        </div>
                        <div class="property-content">
                            <div class="property-text">
                                <p>${previewProperty.description}<br><br>${previewProperty.bio}</p>
                                <div class="buttons">
                                    <a href="#meals" class="meals-btn primary-button" data-id="${previewProperty.id}">
                                        <p>Add a meal</p>
                                    </a>
                                    <a id="moveToDetails" class="book-now-btn primary-button" data-id="${previewProperty.id}">
                                        <p>Book now</p>
                                    </a>
                                </div>
                            </div>
                            <div id="map"></div>
                        </div>
                    </div>
                </div>
                <div id="meals" class="meal-section">
                    <h2>Food & Drink</h2>
                    <p class="meal-titles">Pre-order food and drink for your stay, ready upon arrival</p>
                    <div class="meal-boxes">
                        <div id="food-options" class="food-options">
                        </div>
                        <div id="foodCart" class="food-options food-cart">
                            <h2>Menu cart</h2>
                            <p>Ordering options will also be available during your stay</p>
                        </div>
                    </div>
                </div>
            `);

            function populateSelectedProductPrint(property) {
                const selectedProductPrint = $('#selectedProductPrint');
                selectedProductPrint.empty();
                const nightDays = calculateDays();
                const NumOfGuests = $('#guests').val();
                selectedProductPrint.append(`
                <div class="selected-property">
                    <div class="booking-text">
                        <h6>${property.name}</h6>
                        <h6>${property.houseType}</h6>
                        <h6>${nightDays} Nights</h6>
                        <h6>${NumOfGuests} Guests</h6>
                        <h6>$${property.price} per night</h6>
                    </div>
                    <img class="booking-img" src="${property.images[0]}" alt="${property.name}">
                </div>
                `);
            }

            function printTotalPrice(property) {
                const totalPrice = $('#totalPrice');
                totalPrice.empty();
                const mealPrice = calculateTotalMealPrice();
                const numOfDays = calculateDays();
                const cost = property.price * numOfDays + mealPrice + 14.98;
                totalPrice.append(`
                <p>Total</p>
                <p>$${cost}</p>
                `);
            }

            $('#moveToDetails').on('click', function () {
                const propertyId = $(this).data('id');
                const property = properties.find(property => property.id === propertyId);
                const nights = $('#nights').val();
                const guests = $('#guests').val();

                if (property) {
                    populateSelectedProductPrint(property, nights, guests);
                    printTotalPrice(property);
                }
            });

            $("#backToMain").click(function () {
                fullpage_api.moveTo(1, 0);
            });
            $("#backToPreview").click(function () {
                fullpage_api.moveTo(1, 1);
            });
            $("#backToDetails").click(function () {
                fullpage_api.moveTo(1, 2);
            });
            $("#backToPayment").click(function () {
                fullpage_api.moveTo(1, 3);
            });
            $("#moveToDetails").click(function () {
                fullpage_api.moveTo(1, 2);
            });

            document.getElementById('moveToReview').addEventListener('click', function (event) {
                event.preventDefault();

                const cardName = document.getElementById('card-name').value;
                const cardNumber = document.getElementById('card-number').value;
                const expiry = document.getElementById('expiry').value;
                const cvv = document.getElementById('cvv').value;

                const cardNumberRegex = /^\d{16}$/;
                if (!cardNumberRegex.test(cardNumber)) {
                    alert('Please enter a valid 16-digit card number.');
                }
                const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
                if (!expiryRegex.test(expiry)) {
                    alert('Please enter a valid expiry date (MM/YY).');
                }
                const cvvRegex = /^[0-9]{3,4}$/;
                if (!cvvRegex.test(cvv)) {
                    alert('Please enter a valid CVV.');
                } else {
                    $("#moveToReview").click(function () {
                        $("#detailsSection").css("display", "none");
                        $("#paymentSection").css("display", "none");
                        $("#reviewSection").css("display", "block");
                    });
                }
            });

            $("#moveToPayment").click(function (event) {
                event.preventDefault();

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const regexPattern = /.+/;
                const firstName = $('#first-name').val();
                const lastName = $('#last-name').val();
                const address = $('#address').val();
                const email = $('#email').val();
                const phone = $('#phone').val();

                if (!regexPattern.test(firstName)) {
                    alert("Please enter your first name");
                } else if (!regexPattern.test(lastName)) {
                    alert("Please enter your last name");
                } else if (!regexPattern.test(address)) {
                    alert("Please enter your address");
                } else if (!regexPattern.test(phone)) {
                    alert("Please enter your phone number");
                } else if (!emailRegex.test(email)) {
                    alert('Please enter a valid email');
                } else {
                    $("#detailsSection").css("display", "none");
                    $("#paymentSection").css("display", "block");
                }
            });

            $("#moveToReview").click(function () {
                var userFirstName = $('#first-name').val();
                $('#firstNameReview').text(userFirstName);
                var userLastName = $('#last-name').val();
                $('#lastNameReview').text(userLastName);
                var userAddress = $('#address').val();
                $('#addressReview').text(userAddress);
                var userEmail = $('#email').val();
                $('#emailReview').text(userEmail);
                var userPhone = $('#phone').val();
                $('#phoneReview').text(userPhone);

                var userCardName = $('#card-name').val();
                $('#cardNameReview').text(userCardName);
                var userCardNumber = $('#card-number').val();
                $('#cardNumberReview').text(userCardNumber);
                var userCardExpiry = $('#expiry').val();
                $('#cardExpiryReview').text(userCardExpiry);

                $("#detailsSection").css("display", "none");
                $("#paymentSection").css("display", "none");
                $("#reviewSection").css("display", "none");
            });

            function populateFoodOptions() {
                const foodOptionsDiv = $('#food-options');
                foodOptionsDiv.empty();

                Object.keys(menuOptions).forEach(category => {
                    const categoryHeader = `<h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>`;
                    foodOptionsDiv.append(categoryHeader);

                    menuOptions[category].forEach(item => {
                        const itemHTML = `
                    <div class="menu-item">
                        <label>
                            <input id="foodAdd" type="checkbox" class="mealType" value="meal-${item.id}">
                            <p>${item.description}</p>
                            <p>$${item.price.toFixed(2)}</p>
                        </label>
                    </div>
                    `;
                        foodOptionsDiv.append(itemHTML);
                    });
                });
                $('.mealType').change(function () {
                    const detailsFoodCart = $('#selectedMealsPrint');
                    const foodCartDiv = $('#foodCart');
                    const checkbox = $(this);
                    const itemDescription = checkbox.siblings('p').first().text();
                    const itemPrice = checkbox.siblings('p').last().text();

                    if (checkbox.is(':checked')) {
                        const cartItemHTML = `
                        <div class="cart-meal menu-item" id="cart-${checkbox.val()}">
                            <p>${itemDescription}</p>
                            <p>${itemPrice}</p>
                            <div id="removeMeal" class="removeMeal">
                                <i class="fa-solid fa-minus"></i>
                            </div>
                        </div>
                        `;
                        detailsFoodCart.append(cartItemHTML);
                        foodCartDiv.append(cartItemHTML);

                        $(`#cart-${checkbox.val()} #removeMeal`).click(function () {
                            $(`#cart-${checkbox.val()}`).remove();
                            $(`#selectedMealsPrint-${checkbox.val()}`).remove();
                            checkbox.prop('checked', false);
                        });
                    } else {
                        $(`#cart-${checkbox.val()}`).remove();
                        $(`#print-${checkbox.val()}`).remove();
                    }
                });
            }

            populateFoodOptions();

            function calculateTotalMealPrice() {
                let totalMealPrice = 0;
                $('.mealType:checked').each(function () {
                    const itemPrice = parseFloat($(this).siblings('p').last().text().replace('$', ''));
                    totalMealPrice += itemPrice;
                });
                return totalMealPrice;
            }

            mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';
            let map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [175.52223763296442, -39.332562526208825],
                zoom: 5
            });
            map.on('load', function () {
                map.resize();
            });

            function initialiseMap(longitude, latitude) {
                map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [longitude, latitude],
                    zoom: 13
                });
                new mapboxgl.Marker()
                .setLngLat([longitude, latitude])
                .addTo(map);
            }
            initialiseMap(previewProperty.longitude, previewProperty.latitude);
            const pins = document.getElementById('pins')

            const thumbnails = document.querySelectorAll(".thumbnail");
            const mainImage = document.getElementById("main-image");

            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener("click", () => {
                    mainImage.src = thumbnail.src;
                });
            });
        }
        document.querySelectorAll('.property-card').forEach(card => {
            card.addEventListener('click', function () {
                const propertyId = $(this).find('.book-now-btn').data('id');
                populateSelectResult(propertyId);
            });
        });
    }

    fullpage_api.reBuild();

});

const swiper = new Swiper('.swiper', {
    direction: 'vertical',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.getElementById('open').addEventListener('click', function (event) {
    event.preventDefault();

    let hiddenFilters = document.querySelectorAll('.hidden-filter');
    let seeMoreText = document.getElementById('seeMoreText');
    let seeMoreLink = document.getElementById('seeMoreLink');

    hiddenFilters.forEach(filter => {
        if (filter.style.display === 'flex') {
            filter.style.display = 'none';
            seeMoreText.textContent = 'More';
            seeMoreLink.textContent = 'More options';
        } else {
            filter.style.display = 'flex';
            seeMoreText.textContent = 'Less';
            seeMoreLink.textContent = 'Less options';
        }
    });
});

document.getElementById('show').addEventListener('click', function (event) {
    event.preventDefault();

    const box = document.getElementById('box');
    let sortText = document.getElementById('sortText');

    if (box.style.display === 'flex') {
        box.style.display = 'none';
        sortText.textContent = 'Sort';
        setTimeout(() => {
            box.classList.remove('show');
        }, 500);
    } else {
        box.style.display = 'flex';
        sortText.textContent = 'Close';
        setTimeout(() => {
            box.classList.add('show');
        }, 10);
    }
});

let lastScrollTop = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        nav.classList.add('nav-hidden');
    } else {
        nav.classList.remove('nav-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});