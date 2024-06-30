/* jshint esversion: 6 */

$(document).ready(function () {
    // ALL JS GOES IN HERE
    $('#fullpage').fullpage({
        licenseKey: 'gplv3-license',
        controlArrows: false,
        fixedElements: "#navbar",
        autoScrolling: true,
        scrollHorizontally: true,
    });

    //methods
    $.fn.fullpage.setAllowScrolling(false);

    //  Function to move to the specified section
    function moveToSection(number) {
        // v allows you to move sections or "jump"
        fullpage_api.moveTo(number);
    }

    $('goToSection1').click(function () {
        moveToSection(1);
    })
    $('goToSection2').click(function () {
        moveToSection(2);
    })
    $('goToSection3').click(function () {
        moveToSection(3);
    })
    $('goToSection4').click(function () {
        moveToSection(4);
    })



    // Move to slide # - first number is sectin, second is slide - zero indexed for slides
    $('#goToSlide1').click(function () {
        fullpage_api.moveTo(1, 0);
    });

    $('#goToSlide2').click(function () {
        fullpage_api.moveTo(1, 1);
    });

    $('#goToSlide3').click(function () {
        fullpage_api.moveTo(1, 2);
    });

    $('#goToSlide4').click(function () {
        fullpage_api.moveTo(1, 3);
    });

    let user;

});

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
    },
    {
        id: 4,
        name: 'Dreamy Resort',
        minStay: 1,
        maxStay: 5,
        bedrooms: '1-2',
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
    },
    {
        id: 5,
        name: 'City Scape Hostel',
        minStay: 1,
        maxStay: 10,
        bedrooms: '1-2',
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
        latitude: -37.63236339793598,
        houseType: 'Hostel',
        description: 'A hostel in Mount Maunganui, ideal for budget travelers.',
        images: [
            '../images/hostels/bayplentyhostel1.webp',
            '../images/hostels/bayplentyhostel2.webp'
        ],
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
    },
    {
        id: 12,
        name: 'Tidal Retreat',
        minStay: 3,
        maxStay: 10,
        bedrooms: '1-2',
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
    },
];


$(document).ready(function () {

    // MapBox Init:
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

    function initaliseMap(longitude, latitude) {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: 13
        });
    }

    // Prevent scroll of sections and slides:
    fullpage_api.setAllowScrolling(true);

    // Swiper Init:
    let swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Populate Locations Options/Filtering:
    function populateLocationOptions() {
        const locations = Array.from(new Set(properties.map(property => property.location)));
        locations.sort(); // Sorts locations alphabetically
        const locationSelect = $('#location'); // get the select
        locationSelect.empty(); // Clear previous options
        // Add "Any" option:
        locationSelect.append(`<option value="any">Any</option>`);
        // Create an option for each location:
        locations.forEach(location => {
            locationSelect.append(`<option value="${location}">${location}</option>`);
        });
    }

    // Call the function:
    populateLocationOptions();


    // Validate Filters/Form
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

    // DatePickers:
    $("#startDate").datepicker({
        dateFormat: "dd/mm/yy"
    });
    $("#endDate").datepicker({
        dateFormat: "dd/mm/yy"
    });

    // Search Button Click:
    $("#searchBtn").click(function (e) {
        e.preventDefault();
        if (validateFilters()) {
            filterAndDisplayProperties();
        }
    });

    // FILTERS + DISPLAY RESULTS
    function filterAndDisplayProperties() {
        // VALUE OF FILTERS
        const location = $('#location').val();
        const bedrooms = parseInt($('#bedrooms').val(), 10) || 0;
        const bathrooms = parseInt($('#bathrooms').val(), 10) || 0;
        const guests = parseInt($('#guests').val(), 10) || 1;
        const diffDays = calculateDays();
        const selectedBuildingTypes = [];
        $('.buildingType:checked').each(function () {
            selectedBuildingTypes.push($(this).val());
        });

        console.log(diffDays);

        // SEARCH ARRAY FOR FILTERS
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

        console.log(filteredProperties);

        displayProperties(filteredProperties);
    }

    function calculateDays() {
        const startDate = $("#startDate").datepicker("getDate");
        const endDate = $("#endDate").datepicker("getDate");

        if (startDate && endDate) {
            // calculate the difference:
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()); // postive number
            // convert to days:
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
                                <p>Drag to see more</p>
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
            // Add event listener for all 'Book now' buttons
            document.querySelectorAll('.book-now-btn').forEach(button => {
                button.addEventListener('click', function () {
                    fullpage_api.moveTo(1, 1); // slide 2
                });
            });

            function populateSelectResult(propertyPreview) {
                const preview = $('#PropertyCardPreview');
                preview.empty();
                const previewProperty = properties.find(property => property.id === propertyPreview);
                if (!previewProperty) {
                    console.log('not found', propertyPreview);
                    return;
                }
                preview.append(`
                    <div id="preview-${property.id}" class="previewTest">
                        <p>is it wokring yet?</p>
                        <p>${property.name}</p>
                        <img src="${property.images}">
                    </div>
                `);
            }

            function previewHandlers() {
                $('.book-now-btn').click(function (event) {
                    console.log("CLICKED");
                    const value = $(this).data('id');
                    console.log(value);
                    var buttonId = $(this).attr('id');
                    $('#previewContainer').removeAttr('class').addClass(buttonId);
                    $('body').addClass('preview-active');
                    populateSelectResult(value);
                });
            
            }
            // Function to move to the next slide (you might already have this function)
            function moveTo(x, y) {
                // Your existing moveTo function implementation
            }
            previewHandlers();

        });

        // Reinitialize Swiper for new content
        swiper = new Swiper('.swiper', {
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

        // Rebuild Fullpage to see the new slides
        fullpage_api.reBuild();
    }

});

// populateProperties(properties);

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
        }, 500); // Match the duration of the transition
    } else {
        box.style.display = 'flex';
        sortText.textContent = 'Close';
        setTimeout(() => { // Delay to allow display change to take effect
            box.classList.add('show');
        }, 10); // Small delay (10ms)
    }
});

let lastScrollTop = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Downscroll
        nav.classList.add('nav-hidden');
    } else {
        // Upscroll
        nav.classList.remove('nav-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});