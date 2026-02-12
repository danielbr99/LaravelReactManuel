import { Link } from '@inertiajs/react';

export default function Navbar({ user, onOpenLogin, onOpenRegister }) {
    return (
        <nav className="w-full h-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex-1 font-bold text-xl">Mi Marca</div>

            <div className="flex flex-1 justify-end gap-5 h-16 items-center">
                {user ? (
                    <>
                        <div>Hola, {user.name}</div>
                        <Link
                            href={route('projects.index')}
                            >
                            Proyectos
                        </Link>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="text-red-500 hover:font-bold transition-all"
                        >
                            Cerrar sesión
                        </Link>
                    </>
                ) : (
                    <>
                        <button onClick={onOpenLogin} className="text-gray-600 hover:text-black">
                            Log in
                        </button>
                        <button
                            onClick={onOpenRegister}
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                        >
                            Register
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
