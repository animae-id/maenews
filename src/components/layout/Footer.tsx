export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 mt-12">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Tentang AnEvo</h3>
                        <p className="text-sm">
                            AnEvo adalah portal berita dan komunitas untuk para penggemar anime, manga, dan kultur pop Jepang di Indonesia.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Navigasi</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Beranda</a></li>
                            <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-white">Kontak</a></li>
                            <li><a href="#" className="hover:text-white">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Ikuti Kami</h3>
                        <p className="text-sm">
                            Dapatkan update terbaru dari kami melalui media sosial.
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} AnEvo. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
