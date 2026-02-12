import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ProjectForm from '@/Components/ProjectForm';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import ProjectCard from '@/Components/ProjectCard';

export default function Index({ auth, projects }) {
    const [isCreating, setIsCreating] = useState(false);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Mis Proyectos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Mis Proyectos</h2>
                        <button
                            onClick={() => setIsCreating(!isCreating)}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                        >
                            {isCreating ? 'Volver a la lista' : '+ Nuevo Proyecto'}
                        </button>
                    </div>

                    {isCreating ? (
                        <div className="bg-white p-6 shadow sm:rounded-lg">
                            <h3 className="text-lg font-medium mb-4">Detalles del nuevo proyecto</h3>
                            <ProjectForm onClose={() => setIsCreating(false)} />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {projects.length > 0 ? (
                                projects.map(project => (
                                    <ProjectCard key={project.id} project={project} />
                                ))
                            ) : (
                                <div className="col-span-3 text-center py-12 bg-white rounded-lg shadow">
                                    <p className="text-gray-500">Aún no tienes proyectos creados.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
