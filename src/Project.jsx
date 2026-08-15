import { useState, useEffect } from 'react';

const formatPricing = (pricing) => {
    if (!pricing) return 'Not available';
    if (typeof pricing === 'string') return pricing;

    const { currency, min, max, priceType } = pricing;
    const range = [min, max].filter((value) => value !== undefined && value !== null).join(' - ');
    return [currency, range, priceType ? `(${priceType})` : ''].filter(Boolean).join(' ');
};

const formatRating = (rating) => {
    if (!rating) return 'Not available';
    if (typeof rating === 'string') return rating;

    const average = rating.average ?? 'N/A';
    const reviews = rating.totalReviews ?? 'N/A';
    return `${average} (${reviews} reviews)`;
};

const getWebsite = (contact) => {
    if (!contact) return null;
    if (contact.website) return contact.website;
    if (Array.isArray(contact.websites) && contact.websites.length > 0) return contact.websites[0];
    if (contact.socialMediaAccount) return contact.socialMediaAccount;
    if (contact.instagram) return contact.instagram;
    return null;
};

const isFeatured = (place) => Boolean(place.featured ?? place.features);

const Project = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/places(1).json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch places data (${response.status})`);
                }
                return response.json();
            })
            .then((data) => {
                const loadedPlaces = Array.isArray(data.places) ? data.places : [];
                setPlaces(loadedPlaces);
                setFilteredPlaces(loadedPlaces);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const filterByCategory = (category) => {
        if (category === 'all') {
            setFilteredPlaces(places);
        } else {
            setFilteredPlaces(places.filter((place) => place.category?.toLowerCase() === category));
        }
    };

    if (loading) {
        return <div className="text-center mt-8">Loading data...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center mt-8">{error}</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Mainplaces Data Test (React)</h1>

            <div className="flex flex-wrap gap-4 mb-6 justify-center">
                <button
                    onClick={() => filterByCategory('all')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    All
                </button>
                <button
                    onClick={() => filterByCategory('hotel')}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Hotels
                </button>
                <button
                    onClick={() => filterByCategory('restaurant')}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                    Restaurants
                </button>
                <button
                    onClick={() => filterByCategory('cafe')}
                    className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
                >
                    Cafes
                </button>
                <button
                    onClick={() => filterByCategory('attraction')}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Attractions
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlaces.map((place) => {
                    const website = getWebsite(place.contact);

                    return (
                        <div key={place.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold mb-2">{place.name}</h2>
                            <p className="text-gray-600 mb-4">{place.description}</p>
                            <div className="mb-4">
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                                    {place.category}
                                </span>
                            </div>
                            <div className="mb-4">
                                <p className="font-semibold">Location:</p>
                                <p>{place.location?.address ?? 'Address unavailable'}, {place.location?.city ?? 'City unavailable'}</p>
                            </div>
                            <div className="mb-4">
                                <p className="font-semibold">Contact:</p>
                                <p>Phone: {place.contact?.phone ?? 'Not available'}</p>
                                <p>Email: {place.contact?.email ?? 'Not available'}</p>
                                {website && (
                                    <p>
                                        Website:{' '}
                                        <a href={website.startsWith('http') ? website : `https://www.instagram.com/${website.replace('@', '')}/`} className="text-blue-500 hover:underline">
                                            {website}
                                        </a>
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <p className="font-semibold">Pricing:</p>
                                <p>{formatPricing(place.pricing)}</p>
                            </div>
                            <div className="mb-4">
                                <p className="font-semibold">Rating:</p>
                                <p>{formatRating(place.rating)}</p>
                            </div>
                            <div className="mb-4">
                                <p className="font-semibold">Amenities:</p>
                                <ul className="list-disc list-inside">
                                    {(place.amenities ?? []).map((amenity, index) => (
                                        <li key={index}>{amenity}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-4">
                                <p className="font-semibold">Featured:</p>
                                <p>{isFeatured(place) ? '✅ Yes' : '❌ No'}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Project;
