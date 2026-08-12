import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Project = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('src/data/places(1).json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                setPlaces(data.places);
                setFilteredPlaces(data.places);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const filterByCategory = (category) => {
        if (category === 'all') {
            setFilteredPlaces(places);
        } else {
            setFilteredPlaces(places.filter((place) => place.category.toLowerCase() === category));
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

            {/* Filter Buttons */}
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

            {/* Data Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlaces.map((place) => (
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
                            <p>{place.location.address}, {place.location.city}</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">Contact:</p>
                            <p>Phone: {place.contact.phone}</p>
                            <p>Email: {place.contact.email}</p>
                            <p>
                                Website:{' '}
                                <a href={place.contact.website} className="text-blue-500 hover:underline">
                                    {place.contact.website}
                                </a>
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">Pricing:</p>
                            <p>
                                {place.pricing.currency} {place.pricing.min} - {place.pricing.max} ({place.pricing.priceType})
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">Rating:</p>
                            <p>
                                {place.rating.average} ({place.rating.totalReviews} reviews)
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">Amenities:</p>
                            <ul className="list-disc list-inside">
                                {place.amenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="mb-4">
                            <p className="font-semibold">Opening Hours:</p>
                            <ul className="list-disc list-inside">
                                {Object.entries(place.openingHours).map(([day, hours]) => (
                                    <li key={day}>
                                        {day}: {hours}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        <div className="mb-4">
                            <p className="font-semibold">Featured:</p>
                            <p>{place.featured ? '✅ Yes' : '❌ No'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;