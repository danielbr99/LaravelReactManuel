export default function Main({ header, children }) {
    return (
        <main className="flex-grow">
            {/* Sección del Título de Página */}
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            {/* Sección del Contenido Real */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </div>
            </div>
        </main>
    );
}
