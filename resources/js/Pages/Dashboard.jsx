import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Main autenticado</h2>
                <p className="text-gray-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially un</p>
            </div>
        </AuthenticatedLayout>
    );
}
