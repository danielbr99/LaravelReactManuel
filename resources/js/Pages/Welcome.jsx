import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Bienvenido" />

            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900">Bienvenido a mi App</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Esta es la página pública
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
