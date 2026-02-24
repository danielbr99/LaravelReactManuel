import { Link, usePage } from '@inertiajs/react';

export default function ProjectCard({ project }) {
    const { auth } = usePage().props;

    const startDate = new Date(project.start_date).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="bg-white p-6 shadow-sm rounded-xl border border-gray-200 flex flex-col h-full hover:shadow-md transition-shadow">
            {/* Cuerpo */}
            <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-gray-900 capitalize leading-tight">
                        {project.name}
                    </h3>
                    <span className="text-[10px] uppercase px-2 py-1 bg-gray-100 text-gray-500 rounded font-bold">
                        AUTOR: {project.user.name}
                    </span>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                    {project.description}
                </p>
            </div>

            {/* Pie de la card ajustado */}
            <div className="pt-4 border-t border-gray-100 mt-auto">
                <div className="flex justify-between items-center w-full">

                    {/* Contenedor de Info (Horas y Fecha) */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-500">
                        <div className="flex items-center text-xs">
                            <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{project.hours}h estimadas</span>
                        </div>
                        <div className="flex items-center text-xs">
                            <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{startDate}</span>
                        </div>
                    </div>

                    {(
                        auth.user.role === 'admin' || 
                        auth.user.id === project.user_id || 
                        (auth.user.role === 'manager' && project.user.role.name === 'user')
                    ) && (
                        <Link
                            href={route('projects.destroy', project.id)}
                            method="delete"
                            as="button"
                            onBefore={() => confirm('¿Seguro que quieres borrar este proyecto?')}
                            className="flex-shrink-0 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all ml-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
