/* ============================================
   BARWEE LUXURY SUITES - SCRIPTS
   ============================================ */

// --- Room Data ---
const CATEGORIES = [
    {
        id: 'regular',
        name: 'Regular',
        desc: 'Comfortable and affordable rooms for a pleasant stay.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
        price: 25000,
        rooms: [
            { id: 'reg-1', name: 'Regular Room 1', floor: 'Ground Floor', size: '22 m²', beds: '1 Double Bed', maxGuests: 2, price: 25000, description: 'A cozy ground-floor room with modern amenities and natural light. Perfect for solo travelers or couples on a budget.', images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom'] },
            { id: 'reg-2', name: 'Regular Room 2', floor: 'Ground Floor', size: '22 m²', beds: '1 Double Bed', maxGuests: 2, price: 25000, description: 'Neat and tidy room with warm lighting and essential comforts for a relaxing stay.', images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80','https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom'] },
            { id: 'reg-3', name: 'Regular Room 3', floor: 'First Floor', size: '24 m²', beds: '1 Double Bed', maxGuests: 2, price: 26000, description: 'Slightly larger first-floor room with a city view and enhanced comfort.', images: ['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80','https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom','City View'] },
            { id: 'reg-4', name: 'Regular Room 4', floor: 'First Floor', size: '24 m²', beds: '2 Single Beds', maxGuests: 2, price: 26000, description: 'Twin bed option ideal for colleagues or friends traveling together.', images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80','https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom'] },
            { id: 'reg-5', name: 'Regular Room 5', floor: 'Second Floor', size: '22 m²', beds: '1 Double Bed', maxGuests: 2, price: 25000, description: 'Quiet second-floor room with a peaceful courtyard view.', images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80','https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom','Courtyard View'] },
            { id: 'reg-6', name: 'Regular Room 6', floor: 'Second Floor', size: '22 m²', beds: '1 Double Bed', maxGuests: 2, price: 25000, description: 'Standard room with all the essentials for a comfortable stay.', images: ['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80','https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom'] },
            { id: 'reg-7', name: 'Regular Room 7', floor: 'Third Floor', size: '24 m²', beds: '1 Double Bed', maxGuests: 2, price: 26000, description: 'Top-floor regular room with extra natural light and ventilation.', images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom'] }
        ]
    },
    {
        id: 'family',
        name: 'Family',
        desc: 'Spacious rooms designed for families traveling together.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
        price: 45000,
        rooms: [
            { id: 'fam-1', name: 'Family Room 1', floor: 'Ground Floor', size: '38 m²', beds: '1 King + 2 Single', maxGuests: 4, price: 45000, description: 'Generous family room with separate sleeping areas for parents and children.', images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom','Baby Cot','Extra Space'] },
            { id: 'fam-2', name: 'Family Room 2', floor: 'Ground Floor', size: '40 m²', beds: '1 King + 2 Single', maxGuests: 5, price: 48000, description: 'Our largest family room with a play area and connecting bathroom.', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80','https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom','Baby Cot','Play Area'] },
            { id: 'fam-3', name: 'Family Room 3', floor: 'First Floor', size: '36 m²', beds: '1 Queen + 2 Single', maxGuests: 4, price: 45000, description: 'Bright and cheerful family room with garden views.', images: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80','https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom','Garden View'] },
            { id: 'fam-4', name: 'Family Room 4', floor: 'First Floor', size: '38 m²', beds: '1 King + 2 Single', maxGuests: 5, price: 48000, description: 'Family suite with a sitting area and kitchenette for added convenience.', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80','https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Kitchenette','Private Bathroom','Sitting Area'] },
            { id: 'fam-5', name: 'Family Room 5', floor: 'Second Floor', size: '36 m²', beds: '1 Queen + 2 Single', maxGuests: 4, price: 45000, description: 'Quiet family room on an upper floor with a balcony.', images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom','Balcony'] },
            { id: 'fam-6', name: 'Family Room 6', floor: 'Second Floor', size: '38 m²', beds: '1 King + 2 Single', maxGuests: 5, price: 48000, description: 'Premium family room with panoramic views and luxury finishes.', images: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80','https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Fridge','Private Bathroom','Balcony','Panoramic View'] }
        ]
    },
    {
        id: 'deluxe',
        name: 'Deluxe',
        desc: 'Elegant rooms with premium finishes and city views.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
        price: 55000,
        rooms: [
            { id: 'dlx-1', name: 'Deluxe Room 1', floor: 'Third Floor', size: '32 m²', beds: '1 King Bed', maxGuests: 2, price: 55000, description: 'Sophisticated deluxe room with premium bedding, city skyline views, and a marble bathroom.', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Marble Bathroom','City View','Work Desk'] },
            { id: 'dlx-2', name: 'Deluxe Room 2', floor: 'Third Floor', size: '32 m²', beds: '1 King Bed', maxGuests: 2, price: 55000, description: 'Refined deluxe room with elegant furnishings and a deep soaking tub.', images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Soaking Tub','City View','Work Desk'] },
            { id: 'dlx-3', name: 'Deluxe Room 3', floor: 'Fourth Floor', size: '34 m²', beds: '1 King Bed', maxGuests: 2, price: 58000, description: 'Upgraded deluxe room with a private balcony and panoramic city views.', images: ['https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Marble Bathroom','Private Balcony','Panoramic View'] },
            { id: 'dlx-4', name: 'Deluxe Room 4', floor: 'Fourth Floor', size: '34 m²', beds: '1 King Bed', maxGuests: 2, price: 58000, description: 'Corner deluxe room with wraparound windows and abundant natural light.', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Marble Bathroom','Corner Suite','Natural Light'] },
            { id: 'dlx-5', name: 'Deluxe Room 5', floor: 'Fifth Floor', size: '32 m²', beds: '1 King Bed', maxGuests: 2, price: 55000, description: 'High-floor deluxe room with sunset views and luxury amenities.', images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Marble Bathroom','Sunset View'] },
            { id: 'dlx-6', name: 'Deluxe Room 6', floor: 'Fifth Floor', size: '34 m²', beds: '1 King Bed', maxGuests: 2, price: 58000, description: 'Deluxe suite with a separate living area and premium amenities.', images: ['https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Marble Bathroom','Living Area'] },
            { id: 'dlx-7', name: 'Deluxe Room 7', floor: 'Sixth Floor', size: '32 m²', beds: '1 King Bed', maxGuests: 2, price: 55000, description: 'Top-floor deluxe room with sky views and premium finishes.', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Marble Bathroom','Sky View'] }
        ]
    },
    {
        id: 'vip',
        name: 'VIP',
        desc: 'Exclusive VIP suites with private lounges and butler service.',
        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80',
        price: 85000,
        rooms: [
            { id: 'vip-1', name: 'VIP Suite 1', floor: 'Sixth Floor', size: '48 m²', beds: '1 King Bed', maxGuests: 2, price: 85000, description: 'Exclusive VIP suite with a private lounge, walk-in closet, and 24-hour butler service.', images: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Walk-in Closet','Butler Service','Private Lounge'] },
            { id: 'vip-2', name: 'VIP Suite 2', floor: 'Sixth Floor', size: '50 m²', beds: '1 King Bed', maxGuests: 2, price: 88000, description: 'Lavish VIP suite with double vanity, rain shower, and panoramic balcony.', images: ['https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80','https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Rain Shower','Panoramic Balcony','Butler Service'] },
            { id: 'vip-3', name: 'VIP Suite 3', floor: 'Seventh Floor', size: '52 m²', beds: '1 King Bed', maxGuests: 2, price: 90000, description: 'Corner VIP suite with wraparound windows and a private dining area.', images: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Private Dining','Corner Windows','Butler Service'] },
            { id: 'vip-4', name: 'VIP Suite 4', floor: 'Seventh Floor', size: '48 m²', beds: '1 King Bed', maxGuests: 2, price: 85000, description: 'Refined VIP suite with art-inspired interiors and premium sound system.', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80','https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Sound System','Art Interiors','Butler Service'] },
            { id: 'vip-5', name: 'VIP Suite 5', floor: 'Eighth Floor', size: '50 m²', beds: '1 King Bed', maxGuests: 2, price: 88000, description: 'High-floor VIP suite with a spa-inspired bathroom and sunset views.', images: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Spa Bathroom','Sunset View','Butler Service'] }
        ]
    },
    {
        id: 'executive',
        name: 'Executive',
        desc: 'Business-class rooms with workspaces and executive lounges.',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
        price: 70000,
        rooms: [
            { id: 'exc-1', name: 'Executive Room 1', floor: 'Fifth Floor', size: '36 m²', beds: '1 King Bed', maxGuests: 2, price: 70000, description: 'Professional executive room with an ergonomic workspace and access to the executive lounge.', images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Work Desk','Executive Lounge Access'] },
            { id: 'exc-2', name: 'Executive Room 2', floor: 'Fifth Floor', size: '36 m²', beds: '1 King Bed', maxGuests: 2, price: 70000, description: 'Sleek executive room with premium office amenities and complimentary breakfast.', images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Work Desk','Complimentary Breakfast'] },
            { id: 'exc-3', name: 'Executive Room 3', floor: 'Sixth Floor', size: '38 m²', beds: '1 King Bed', maxGuests: 2, price: 73000, description: 'Premium executive room with a meeting nook and city views.', images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Work Desk','Meeting Nook','City View'] },
            { id: 'exc-4', name: 'Executive Room 4', floor: 'Sixth Floor', size: '38 m²', beds: '1 King Bed', maxGuests: 2, price: 73000, description: 'Executive corner room with dual-aspect windows and enhanced privacy.', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Work Desk','Corner Windows','Executive Lounge'] },
            { id: 'exc-5', name: 'Executive Room 5', floor: 'Seventh Floor', size: '36 m²', beds: '1 King Bed', maxGuests: 2, price: 70000, description: 'High-floor executive room with fast-track check-in and premium amenities.', images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Work Desk','Fast-track Check-in'] },
            { id: 'exc-6', name: 'Executive Room 6', floor: 'Seventh Floor', size: '38 m²', beds: '1 King Bed', maxGuests: 2, price: 73000, description: 'Executive suite with a separate living space and complimentary minibar restocking.', images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80','https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Mini Bar','Living Space','Executive Lounge'] }
        ]
    },
    {
        id: 'presidential',
        name: 'Presidential',
        desc: 'Our finest suites with private pools and unmatched luxury.',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
        price: 200000,
        rooms: [
            { id: 'pre-1', name: 'Presidential Suite 1', floor: 'Ninth Floor', size: '95 m²', beds: '1 Emperor Bed', maxGuests: 3, price: 200000, description: 'Our flagship presidential suite with a private plunge pool, panoramic skyline views, personal chef, and 24-hour butler service.', images: ['https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Private Plunge Pool','Personal Chef','Butler Service','Panoramic Views','Walk-in Closet','Marble Bathroom'] },
            { id: 'pre-2', name: 'Presidential Suite 2', floor: 'Ninth Floor', size: '100 m²', beds: '1 Emperor Bed', maxGuests: 3, price: 220000, description: 'Our grandest suite featuring a private terrace, dining room, and helipad access.', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80','https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Private Terrace','Dining Room','Butler Service','Helipad Access'] },
            { id: 'pre-3', name: 'Presidential Suite 3', floor: 'Tenth Floor', size: '90 m²', beds: '1 Emperor Bed', maxGuests: 2, price: 200000, description: 'Penthouse-level presidential suite with art collection interiors and a home theatre.', images: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80','https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80','https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'], amenities: ['Free Wi-Fi','Air Conditioning','Flat-screen TV','Home Theatre','Art Collection','Butler Service','Plunge Pool'] }
        ]
    }
];

function getAllRooms() {
    const all = [];
    CATEGORIES.forEach(cat => {
        cat.rooms.forEach(room => {
            all.push({ ...room, category: cat.name, categoryId: cat.id, categoryImage: cat.image });
        });
    });
    return all;
}

// --- Helper ---
function formatPrice(n) {
    return '₦' + n.toLocaleString();
}

function passDatesAndGo(pageId) {
    const ci = document.getElementById('checkin').value;
    const co = document.getElementById('checkout').value;
    const g = document.getElementById('guests').value;
    const r = document.getElementById('rooms-count').value;

    if (pageId === 'check') {
        const checkIn = document.getElementById('checkSearchIn');
        const checkOut = document.getElementById('checkSearchOut');
        if (checkIn && ci) checkIn.value = ci;
        if (checkOut && co) checkOut.value = co;
    }

    if (pageId === 'book') {
        const bookIn = document.getElementById('bookCheckin');
        const bookOut = document.getElementById('bookCheckout');
        if (bookIn && ci) { bookIn.value = ci; bookIn.dispatchEvent(new Event('change')); }
        if (bookOut && co) { bookOut.value = co; bookOut.dispatchEvent(new Event('change')); }
    }

    showPage(pageId);
}

function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function formatDateDisplay(dateStr) {
    if (!dateStr) return '--';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// --- Render Functions ---

function renderHomeRooms() {
    const grid = document.getElementById('homeRoomsGrid');
    if (!grid) return;
    const featured = [
        { room: CATEGORIES[2].rooms[0], catId: CATEGORIES[2].id, catName: CATEGORIES[2].name },
        { room: CATEGORIES[3].rooms[0], catId: CATEGORIES[3].id, catName: CATEGORIES[3].name },
        { room: CATEGORIES[4].rooms[0], catId: CATEGORIES[4].id, catName: CATEGORIES[4].name }
    ];
    grid.innerHTML = featured.map(f => roomCardHTML({ ...f.room, category: f.catName, categoryId: f.catId }, f.catId)).join('');
}

function renderRoomCategories() {
    const container = document.getElementById('roomCategories');
    if (!container) return;
    container.innerHTML = CATEGORIES.map(cat => `
        <div class="room-cat-card" onclick="showCategory('${cat.id}')">
            <div class="cat-image"><img src="${cat.image}" alt="${cat.name}"></div>
            <div class="cat-content">
                <h3>${cat.name}</h3>
                <p>${cat.desc}</p>
                <div class="cat-meta">
                    <span class="cat-price">${formatPrice(cat.price)} <small>/ night</small></span>
                    <span class="cat-rooms"><i class="fas fa-door-open"></i> ${cat.rooms.length} Rooms</span>
                </div>
            </div>
        </div>
    `).join('');
}

function roomCardHTML(room, catId) {
    return `
        <div class="room-card" onclick="showRoomDetail('${catId || room.categoryId}','${room.id}')">
            <div class="room-image">
                <img src="${room.images[0]}" alt="${room.name}">
                <span class="room-badge">${room.category || ''}</span>
            </div>
            <div class="room-info">
                <h3>${room.name}</h3>
                <p>${room.description.substring(0, 80)}...</p>
                <div class="room-meta">
                    <span><i class="fas fa-expand-arrows-alt"></i> ${room.size}</span>
                    <span><i class="fas fa-bed"></i> ${room.beds}</span>
                    <span><i class="fas fa-user-friends"></i> ${room.maxGuests}</span>
                </div>
                <div class="room-footer">
                    <span class="price-amount">${formatPrice(room.price)}</span>
                    <a href="#" class="btn btn-red btn-sm">View Details <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    `;
}

function showCategory(catId) {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (!cat) return;

    const heroBg = document.getElementById('catHeroBg');
    if (heroBg) heroBg.style.backgroundImage = `url('${cat.image}')`;

    document.getElementById('catTitle').textContent = cat.name + ' Rooms';
    document.getElementById('catDesc').textContent = cat.desc;
    document.getElementById('catBreadcrumb').textContent = cat.name;
    document.getElementById('catTag').textContent = cat.name + ' Collection';
    document.getElementById('catHeading').innerHTML = `${cat.name}<br><span>Rooms</span>`;

    const grid = document.getElementById('catRoomsGrid');
    grid.innerHTML = cat.rooms.map(room => roomCardHTML(room, cat.id)).join('');

    showPage('category');
}

function showRoomDetail(catId, roomId) {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (!cat) return;
    const room = cat.rooms.find(r => r.id === roomId);
    if (!room) return;

    const container = document.getElementById('roomDetail');
    container.innerHTML = `
        <div class="room-detail-hero">
            <img src="${room.images[0]}" alt="${room.name}">
            <div class="room-detail-hero-overlay"></div>
            <div class="room-detail-hero-content">
                <span class="room-detail-cat">${cat.name} Collection</span>
                <h1>${room.name}</h1>
            </div>
        </div>
        <div class="room-detail-body">
            <div class="breadcrumb">
                <a href="#" onclick="showPage('rooms')">All Categories</a>
                <i class="fas fa-chevron-right"></i>
                <a href="#" onclick="showCategory('${cat.id}')">${cat.name}</a>
                <i class="fas fa-chevron-right"></i>
                <span>${room.name}</span>
            </div>
            <div class="room-detail-top">
                <span class="room-detail-price">${formatPrice(room.price)} <small>/ night</small></span>
                <div class="room-detail-meta">
                    <span><i class="fas fa-expand-arrows-alt"></i> ${room.size}</span>
                    <span><i class="fas fa-bed"></i> ${room.beds}</span>
                    <span><i class="fas fa-user-friends"></i> Up to ${room.maxGuests} guests</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${room.floor}</span>
                </div>
            </div>
            <div class="room-detail-description">
                <h3>About This Room</h3>
                <p>${room.description}</p>
            </div>
            <div class="room-detail-amenities">
                <h3>Amenities</h3>
                <div class="room-detail-amenities-grid">
                    ${room.amenities.map(a => `<span><i class="fas fa-check-circle"></i> ${a}</span>`).join('')}
                </div>
            </div>
            <div class="room-detail-images">
                <h3>Gallery</h3>
                <div class="room-detail-images-grid">
                    ${room.images.map(img => `<img src="${img}" alt="${room.name}" onclick="openLightbox(this.src)">`).join('')}
                </div>
            </div>
            <div class="room-detail-actions">
                <a href="#" class="btn btn-gold" onclick="showPage('book')">Book This Room <i class="fas fa-arrow-right"></i></a>
                <a href="#" class="btn btn-red" onclick="showPage('check')">Check Availability <i class="fas fa-search"></i></a>
            </div>
        </div>
    `;

    showPage('roomdetail');
}

function openLightbox(src) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:40px;opacity:0;transition:opacity 0.3s;';
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = 'max-width:90%;max-height:90vh;object-fit:contain;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5);';
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = 'position:absolute;top:20px;right:30px;color:white;font-size:3rem;cursor:pointer;line-height:1;transition:color 0.3s;';
    closeBtn.onmouseenter = () => closeBtn.style.color = '#D4A24A';
    closeBtn.onmouseleave = () => closeBtn.style.color = 'white';
    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.style.opacity = '1');
    const close = () => { overlay.style.opacity = '0'; setTimeout(() => overlay.remove(), 300); };
    overlay.addEventListener('click', e => { if (e.target === overlay || e.target === closeBtn) close(); });
    document.addEventListener('keydown', function handler(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', handler); } });
}

// --- Contact Form Handler ---
function handleContactForm(e) {
    e.preventDefault();
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    let name = '';
    inputs.forEach(inp => {
        if (inp.placeholder && inp.placeholder.toLowerCase().includes('name')) name = inp.value;
    });
    alert('Thank you' + (name ? ', ' + name : '') + '! Your message has been sent. We will get back to you shortly.');
    form.reset();
}

// --- Search Availability ---
function searchAvailability() {
    const ci = document.getElementById('checkSearchIn').value;
    const co = document.getElementById('checkSearchOut').value;
    const catFilter = document.getElementById('checkCategory').value;

    if (!ci || !co) {
        alert('Please select both check-in and check-out dates.');
        return;
    }

    if (new Date(co) <= new Date(ci)) {
        alert('Check-out date must be after check-in date.');
        return;
    }

    let rooms = getAllRooms();
    if (catFilter) {
        rooms = rooms.filter(r => r.category === catFilter);
    }

    const resultsGrid = document.getElementById('resultsGrid');
    const resultsContainer = document.getElementById('checkResults');

    if (rooms.length === 0) {
        resultsGrid.innerHTML = '<div class="no-results"><i class="fas fa-bed"></i><h4>No rooms found</h4><p>Try adjusting your search criteria.</p></div>';
    } else {
        resultsGrid.innerHTML = rooms.slice(0, 9).map(room => roomCardHTML(room)).join('');
    }

    resultsContainer.style.display = 'block';
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- Page Switching (SPA-style) ---
let currentPage = 'home';

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + pageId);
    if (target) target.classList.add('active');

    const navPages = ['home', 'about', 'rooms', 'facilities', 'gallery', 'contact'];
    document.querySelectorAll('.nav-link').forEach(link => {
        const dp = link.dataset.page;
        link.classList.toggle('active', dp === pageId || (pageId === 'category' && dp === 'rooms') || (pageId === 'roomdetail' && dp === 'rooms') || (pageId === 'book' && dp === 'home') || (pageId === 'check' && dp === 'home'));
    });

    currentPage = pageId;
    try { localStorage.setItem('barwee-page', pageId); } catch(e) {}

    // Close user dropdown on page change
    const dd = document.getElementById('userDropdown');
    if (dd) dd.classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeNav();
}

// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Nav link clicks ---
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const pageId = link.dataset.page;
            if (pageId) showPage(pageId);
        });
    });

    // --- Header scroll ---
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');
    const topBar = document.getElementById('topBar');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        header.classList.toggle('scrolled', scrollY > 80);
        backToTop.classList.toggle('visible', scrollY > 500);
        if (topBar) topBar.classList.toggle('hidden', scrollY > 80);
    });

    // --- Mobile menu ---
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navOverlay = document.getElementById('navOverlay');

    function openNav() {
        hamburger.classList.add('active');
        nav.classList.add('active');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    window.closeNav = function() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () => {
        nav.classList.contains('active') ? closeNav() : openNav();
    });

    navOverlay.addEventListener('click', closeNav);

    // --- Hero Booking Dates ---
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    if (checkinInput && checkoutInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dayAfter = new Date(today);
        dayAfter.setDate(dayAfter.getDate() + 2);

        checkinInput.value = formatDate(tomorrow);
        checkinInput.min = formatDate(today);
        checkoutInput.value = formatDate(dayAfter);
        checkoutInput.min = formatDate(tomorrow);

        checkinInput.addEventListener('change', () => {
            const ciDate = new Date(checkinInput.value);
            const minCo = new Date(ciDate);
            minCo.setDate(minCo.getDate() + 1);
            checkoutInput.min = formatDate(minCo);
            if (new Date(checkoutInput.value) <= ciDate) {
                checkoutInput.value = formatDate(minCo);
            }
        });
    }

    // --- Reservation Form Dates ---
    const bookCheckin = document.getElementById('bookCheckin');
    const bookCheckout = document.getElementById('bookCheckout');
    const summCheckin = document.getElementById('summCheckin');
    const summCheckout = document.getElementById('summCheckout');
    const summCategory = document.getElementById('summCategory');
    const bookCategory = document.getElementById('bookCategory');

    if (bookCheckin && bookCheckout) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dayAfter = new Date(today);
        dayAfter.setDate(dayAfter.getDate() + 2);

        bookCheckin.value = formatDate(tomorrow);
        bookCheckin.min = formatDate(today);
        bookCheckout.value = formatDate(dayAfter);
        bookCheckout.min = formatDate(tomorrow);

        bookCheckin.addEventListener('change', () => {
            const ciDate = new Date(bookCheckin.value);
            const minCo = new Date(ciDate);
            minCo.setDate(minCo.getDate() + 1);
            bookCheckout.min = formatDate(minCo);
            if (new Date(bookCheckout.value) <= ciDate) {
                bookCheckout.value = formatDate(minCo);
            }
            if (summCheckin) summCheckin.textContent = formatDateDisplay(bookCheckin.value);
        });

        bookCheckout.addEventListener('change', () => {
            if (summCheckout) summCheckout.textContent = formatDateDisplay(bookCheckout.value);
        });

        if (summCheckin) summCheckin.textContent = formatDateDisplay(bookCheckin.value);
        if (summCheckout) summCheckout.textContent = formatDateDisplay(bookCheckout.value);
    }

    if (bookCategory && summCategory) {
        bookCategory.addEventListener('change', () => {
            summCategory.textContent = bookCategory.value;
        });
    }

    // --- Check Availability Dates ---
    const checkSearchIn = document.getElementById('checkSearchIn');
    const checkSearchOut = document.getElementById('checkSearchOut');

    if (checkSearchIn && checkSearchOut) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dayAfter = new Date(today);
        dayAfter.setDate(dayAfter.getDate() + 2);

        checkSearchIn.value = formatDate(tomorrow);
        checkSearchIn.min = formatDate(today);
        checkSearchOut.value = formatDate(dayAfter);
        checkSearchOut.min = formatDate(tomorrow);

        checkSearchIn.addEventListener('change', () => {
            const ciDate = new Date(checkSearchIn.value);
            const minCo = new Date(ciDate);
            minCo.setDate(minCo.getDate() + 1);
            checkSearchOut.min = formatDate(minCo);
            if (new Date(checkSearchOut.value) <= ciDate) {
                checkSearchOut.value = formatDate(minCo);
            }
        });
    }

    // --- Render dynamic content ---
    renderHomeRooms();
    renderRoomCategories();

    // --- Scroll Reveal ---
    const revealElements = document.querySelectorAll(
        '.about-grid, .facility-card, .room-card, .offer-card, .testimonial-card, .gallery-item, .contact-card, .contact-map, .mission-card, .room-cat-card, .stat-item, .why-us-item, .partner-item, .team-card, .contact-form-wrapper'
    );
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Gallery Lightbox ---
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            openLightbox(img.src);
        });
    });

    // --- Newsletter ---
    const nl = document.querySelector('.newsletter-form');
    if (nl) {
        nl.addEventListener('submit', e => {
            e.preventDefault();
            const email = nl.querySelector('input').value;
            if (email) { alert(`Thank you for subscribing with ${email}!`); nl.querySelector('input').value = ''; }
        });
    }

    // --- Restore page from localStorage ---
    try {
        const savedPage = localStorage.getItem('barwee-page');
        if (savedPage && document.getElementById('page-' + savedPage)) {
            showPage(savedPage);
        }
    } catch(e) {}

    // --- Initialize auth state ---
    initAuth();
});

/* ============================================
   AUTH SYSTEM (localStorage-based)
   ============================================ */
const DEFAULT_USER = {
    firstName: 'Guest',
    lastName: 'User',
    email: 'guest@barweeluxurysuites.com',
    phone: '+234 800 000 0000',
    password: 'password123',
    dob: '',
    gender: '',
    nationality: 'Nigerian',
    address: '',
    joinDate: '2026-01-01',
    avatar: 'https://ui-avatars.com/api/?name=G+U&background=D72638&color=fff&size=120'
};

function getUsers() {
    try {
        const data = localStorage.getItem('barwee-users');
        const users = data ? JSON.parse(data) : [];
        if (users.length === 0) {
            users.push(DEFAULT_USER);
            localStorage.setItem('barwee-users', JSON.stringify(users));
        }
        return users;
    } catch(e) {
        return [DEFAULT_USER];
    }
}

function saveUsers(users) {
    try { localStorage.setItem('barwee-users', JSON.stringify(users)); } catch(e) {}
}

function getCurrentUser() {
    try {
        const email = localStorage.getItem('barwee-current-user');
        if (!email) return null;
        const users = getUsers();
        return users.find(u => u.email === email) || null;
    } catch(e) { return null; }
}

function setCurrentUser(email) {
    try { localStorage.setItem('barwee-current-user', email); } catch(e) {}
}

function logoutUser() {
    try { localStorage.removeItem('barwee-current-user'); } catch(e) {}
}

function getInitials(first, last) {
    return ((first || 'G') + (last || 'U')).substring(0, 2).toUpperCase();
}

function initAuth() {
    updateAuthUI();
    populateDashboard();
    setupDashboardRedirects();
}

function updateAuthUI() {
    const user = getCurrentUser();
    const authBtn = document.getElementById('authBtn');
    const dropdownUserName = document.getElementById('dropdownUserName');
    const dropdownUserEmail = document.getElementById('dropdownUserEmail');
    const dropdownAvatar = document.querySelector('.user-dropdown-avatar');

    if (user) {
        if (authBtn) {
            authBtn.querySelector('span').textContent = user.firstName;
            authBtn.onclick = (e) => { e.preventDefault(); toggleUserDropdown(); };
        }
        if (dropdownUserName) dropdownUserName.textContent = user.firstName + ' ' + user.lastName;
        if (dropdownUserEmail) dropdownUserEmail.textContent = user.email;
        if (dropdownAvatar) dropdownAvatar.src = user.avatar || `https://ui-avatars.com/api/?name=${getInitials(user.firstName, user.lastName)}&background=D72638&color=fff&size=80`;
    } else {
        if (authBtn) {
            authBtn.querySelector('span').textContent = 'Login';
            authBtn.onclick = () => showPage('login');
        }
        if (dropdownUserName) dropdownUserName.textContent = 'Guest User';
        if (dropdownUserEmail) dropdownUserEmail.textContent = 'Not logged in';
        if (dropdownAvatar) dropdownAvatar.src = 'https://ui-avatars.com/api/?name=GU&background=D72638&color=fff&size=80';
    }
}

function toggleUserDropdown() {
    const dd = document.getElementById('userDropdown');
    if (dd) dd.classList.toggle('active');
}

function togglePassword(btn) {
    const input = btn.parentElement.querySelector('input');
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function handleAuthClick() {
    const user = getCurrentUser();
    if (user) {
        toggleUserDropdown();
    } else {
        showPage('login');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        setCurrentUser(user.email);
        updateAuthUI();
        populateDashboard();
        alert('Welcome back, ' + user.firstName + '!');
        showPage('dashboard');
    } else {
        alert('Invalid email or password. Try the default:\nEmail: guest@barweeluxurysuites.com\nPassword: password123');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const firstName = document.getElementById('regFirstName').value.trim();
    const lastName = document.getElementById('regLastName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirmPassword').value;

    if (password !== confirm) { alert('Passwords do not match.'); return; }

    const users = getUsers();
    if (users.find(u => u.email === email)) { alert('An account with this email already exists.'); return; }

    const newUser = {
        firstName, lastName, email, phone, password,
        dob: '', gender: '', nationality: '', address: '',
        joinDate: new Date().toISOString().split('T')[0],
        avatar: `https://ui-avatars.com/api/?name=${getInitials(firstName, lastName)}&background=D72638&color=fff&size=120`
    };

    users.push(newUser);
    saveUsers(users);
    setCurrentUser(email);
    updateAuthUI();
    populateDashboard();
    alert('Account created! Welcome, ' + firstName + '!');
    showPage('dashboard');
}

function handleLogout() {
    logoutUser();
    updateAuthUI();
    const dd = document.getElementById('userDropdown');
    if (dd) dd.classList.remove('active');
    showPage('home');
}

function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim();
    const users = getUsers();
    const user = users.find(u => u.email === email);
    if (user) {
        alert('Password reset link sent to ' + email + '!\n\nFor demo, your password is: ' + user.password);
    } else {
        alert('No account found with that email.');
    }
    showPage('login');
}

function handleProfileUpdate(e) {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user) { alert('Please log in first.'); showPage('login'); return; }

    const users = getUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx === -1) return;

    users[idx].firstName = document.getElementById('profFirstName').value.trim() || user.firstName;
    users[idx].lastName = document.getElementById('profLastName').value.trim() || user.lastName;
    users[idx].email = document.getElementById('profEmail').value.trim() || user.email;
    users[idx].phone = document.getElementById('profPhone').value.trim() || user.phone;
    users[idx].dob = document.getElementById('profDob').value || '';
    users[idx].gender = document.getElementById('profGender').value || '';
    users[idx].nationality = document.getElementById('profNationality').value.trim() || '';
    users[idx].address = document.getElementById('profAddress').value.trim() || '';
    users[idx].avatar = `https://ui-avatars.com/api/?name=${getInitials(users[idx].firstName, users[idx].lastName)}&background=D72638&color=fff&size=120`;

    saveUsers(users);
    setCurrentUser(users[idx].email);
    updateAuthUI();
    populateDashboard();
    alert('Profile updated successfully!');
}

function handlePasswordChange(e) {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user) { alert('Please log in first.'); return; }

    const inputs = e.target.querySelectorAll('input[type="password"]');
    const currentPw = inputs[0].value;
    const newPw = inputs[1].value;
    const confirmPw = inputs[2].value;

    if (currentPw !== user.password) { alert('Current password is incorrect.'); return; }
    if (newPw !== confirmPw) { alert('New passwords do not match.'); return; }
    if (newPw.length < 8) { alert('Password must be at least 8 characters.'); return; }

    const users = getUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx !== -1) {
        users[idx].password = newPw;
        saveUsers(users);
    }

    alert('Password changed successfully!');
    e.target.reset();
}

/* ============================================
   DASHBOARD
   ============================================ */
function populateDashboard() {
    const user = getCurrentUser();
    const name = user ? (user.firstName + ' ' + user.lastName) : 'Guest';
    const email = user ? user.email : 'Not logged in';
    const initials = user ? getInitials(user.firstName, user.lastName) : 'GU';
    const avatarUrl = user ? (user.avatar || `https://ui-avatars.com/api/?name=${initials}&background=D72638&color=fff&size=120`) : 'https://ui-avatars.com/api/?name=GU&background=D72638&color=fff&size=120';

    // Dashboard sidebar
    const dashUserName = document.getElementById('dashUserName');
    const dashSideName = document.getElementById('dashSideName');
    const dashSideEmail = document.getElementById('dashSideEmail');
    const dashAvatar = document.getElementById('dashAvatar');
    if (dashUserName) dashUserName.textContent = user ? user.firstName : 'Guest';
    if (dashSideName) dashSideName.textContent = name;
    if (dashSideEmail) dashSideEmail.textContent = email;
    if (dashAvatar) dashAvatar.src = avatarUrl;

    // Profile tab
    const profileAvatar = document.getElementById('profileAvatar');
    const profileFullName = document.getElementById('profileFullName');
    const profileEmailDisplay = document.getElementById('profileEmailDisplay');
    if (profileAvatar) profileAvatar.src = avatarUrl;
    if (profileFullName) profileFullName.textContent = name;
    if (profileEmailDisplay) profileEmailDisplay.textContent = email;

    // Profile form
    if (user) {
        const pf = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
        pf('profFirstName', user.firstName);
        pf('profLastName', user.lastName);
        pf('profEmail', user.email);
        pf('profPhone', user.phone);
        pf('profDob', user.dob);
        pf('profGender', user.gender);
        pf('profNationality', user.nationality);
        pf('profAddress', user.address);
    }
}

function setupDashboardRedirects() {
    // Alias pages redirect to dashboard with specific tab
    const aliases = { profile: 'my-profile', mybookings: 'my-bookings', settings: 'my-settings' };
    const origShowPage = window.showPage;
    // We don't override showPage; instead add click handlers on alias pages
    Object.keys(aliases).forEach(pageId => {
        const el = document.getElementById('page-' + pageId);
        if (el) {
            const observer = new MutationObserver(() => {
                if (el.classList.contains('active')) {
                    showPage('dashboard');
                    setTimeout(() => switchDashTab(aliases[pageId]), 100);
                }
            });
            observer.observe(el, { attributes: true, attributeFilter: ['class'] });
        }
    });
}

function switchDashTab(tabId) {
    const user = getCurrentUser();
    if (!user && tabId !== 'overview') {
        alert('Please log in to access this feature.');
        showPage('login');
        return;
    }

    document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.dash-nav-link').forEach(l => l.classList.remove('active'));

    const targetTab = document.getElementById('dtab-' + tabId);
    if (targetTab) targetTab.classList.add('active');

    const navLinks = document.querySelectorAll('.dash-nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes("'" + tabId + "'")) {
            link.classList.add('active');
        }
    });

    // Ensure dashboard page is visible
    const dashPage = document.getElementById('page-dashboard');
    if (dashPage && !dashPage.classList.contains('active')) {
        showPage('dashboard');
    }
}

function filterBookings(status, btn) {
    document.querySelectorAll('.dash-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    document.querySelectorAll('.dash-booking-item[data-status]').forEach(item => {
        if (status === 'all' || item.dataset.status === status) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

/* ============================================
   LIVE SUPPORT CHAT
   ============================================ */
function toggleSupportChat() {
    const win = document.getElementById('supportWindow');
    const badge = document.querySelector('.support-badge');
    if (win) {
        win.classList.toggle('active');
        if (badge) badge.style.display = 'none';
    }
}

function sendSupportMessage(text) {
    const input = document.getElementById('supportInput');
    const messages = document.getElementById('supportMessages');
    const msgText = text || (input ? input.value.trim() : '');
    if (!msgText) return;

    // Remove quick actions after first message
    const quickActions = messages.querySelector('.support-quick-actions');
    if (quickActions) quickActions.remove();

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'support-msg user';
    userMsg.innerHTML = `<div class="support-msg-bubble">${escapeHtml(msgText)}</div>`;
    messages.appendChild(userMsg);
    if (input) input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Bot reply
    setTimeout(() => {
        const reply = getSupportReply(msgText);
        const botMsg = document.createElement('div');
        botMsg.className = 'support-msg bot';
        botMsg.innerHTML = `
            <img src="https://ui-avatars.com/api/?name=B&background=1a0a2e&color=fff&size=36" alt="Bot" class="support-msg-avatar">
            <div><div class="support-msg-bubble">${reply}</div><span class="support-msg-time">Just now</span></div>
        `;
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 800);
}

function getSupportReply(msg) {
    const lower = msg.toLowerCase();
    if (lower.includes('book') || lower.includes('reserve')) return "I'd love to help you book a room! You can <a href='#' onclick='showPage(\"book\");toggleSupportChat()' style='color:#D4A24A;font-weight:600;'>book directly here</a> or call us at <strong>+234 803 960 8849</strong>. What dates are you looking at?";
    if (lower.includes('price') || lower.includes('rate') || lower.includes('cost')) return "Our rooms start from <strong>₦25,000/night</strong> (Regular) up to <strong>₦220,000/night</strong> (Presidential). Would you like me to help you find the perfect room for your budget?";
    if (lower.includes('modif') || lower.includes('change') || lower.includes('cancel')) return "To modify or cancel a booking, please call us at <strong>+234 803 960 8849</strong> or email <strong>barweeluxurysuitesmaiduguri@gmail.com</strong>. We'll assist you right away!";
    if (lower.includes('complaint') || lower.includes('issue') || lower.includes('problem')) return "I'm sorry to hear that. Please share the details and I'll escalate this to our management team immediately. You can also reach our manager directly at <strong>+234 803 960 8849</strong>.";
    if (lower.includes('facilit') || lower.includes('pool') || lower.includes('spa') || lower.includes('gym')) return "We offer a swimming pool, spa & wellness center, gym, fine dining restaurant, bar & lounge, conference hall, banquet hall, and more! Check our <a href='#' onclick='showPage(\"facilities\");toggleSupportChat()' style='color:#D4A24A;font-weight:600;'>Facilities page</a> for details.";
    if (lower.includes('check') || lower.includes('avail')) return "You can check room availability <a href='#' onclick='showPage(\"check\");toggleSupportChat()' style='color:#D4A24A;font-weight:600;'>here</a>. Just enter your dates and we'll show you all available rooms!";
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return "Hello! Welcome to Barwee Luxury Suites support. How can I assist you today?";
    if (lower.includes('thank')) return "You're welcome! Is there anything else I can help you with?";
    return "Thank you for your message! For immediate assistance, please call us at <strong>+234 803 960 8849</strong> or email <strong>barweeluxurysuitesmaiduguri@gmail.com</strong>. Our team is available 24/7.";
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const wrap = document.getElementById('userMenuWrap');
    const dd = document.getElementById('userDropdown');
    if (wrap && dd && !wrap.contains(e.target)) {
        dd.classList.remove('active');
    }
});
