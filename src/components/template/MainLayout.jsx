
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-indigo-600 text-white py-4">
                <h1 className="text-center text-3xl font-bold">Star Wars Characters</h1>
            </header>
            <main className="flex-grow p-6 bg-cover bg-center bg-fixed 
                   bg-[url('/src/assets/Star-Wars-Mobile-img.jpg')] 
                   md:bg-[url('/src/assets/Star-Wars-Timeline.webp')] 
                   bg-no-repeat">
                <div className="w-full max-w-screen-xl mx-auto bg-white/90 p-4 rounded-lg shadow-lg">
                    {children}
                </div>
            </main>

            <footer className="bg-gray-800 text-white text-center py-4">
                <p>© 2024 Star Wars App. All rights reserved.</p>
            </footer>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
