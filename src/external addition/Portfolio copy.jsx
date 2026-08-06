import { Link } from 'react-router'

function Portfolio() {
    const jsxFiles = [
        { name: 'App', path: '/' },
        { name: 'Herosection', path: '/herosection' },
        { name: 'Herosection1', path: '/herosection1' },
        { name: 'Signin', path: '/signin' },
        { name: 'Signin1', path: '/signin1' },
        { name: 'Bentogrid', path: '/bentogrid' },
        { name: 'Bentogrid1', path: '/bentogrid1' },
        { name: 'Cta', path: '/cta' },
        { name: 'Cta1', path: '/cta1' },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {jsxFiles.map((file, index) => (
                    <Link
                        key={index}
                        to={file.path}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
                    >
                        <h2 className="text-xl font-semibold mb-2">{file.name}</h2>
                        <p className="text-gray-400">Click to view</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;