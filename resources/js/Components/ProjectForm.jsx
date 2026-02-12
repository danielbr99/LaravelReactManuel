import { useForm } from '@inertiajs/react';

export default function ProjectForm({ onClose }) {
    // Inicializamos el formulario con Inertia
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        hours: '',
        start_date: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('projects.store'), {
            onSuccess: () => {
                reset();
                if (onClose) onClose(); // Cierra el modal si se usa dentro de uno
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium">Nombre del Proyecto</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                {errors.name && <div className="text-red-500 text-xs">{errors.name}</div>}
            </div>

            <div>
                <label className="block text-sm font-medium ">Descripción</label>
                <textarea
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    rows="3"
                ></textarea>
                {errors.description && <div className="text-red-500 text-xs mt-1">{errors.description}</div>}
            </div>


            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm font-medium">Horas Estimadas</label>
                    <input
                        type="number"
                        value={data.hours}
                        onChange={e => setData('hours', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Fecha de Comienzo</label>
                    <input
                        type="date"
                        value={data.start_date}
                        onChange={e => setData('start_date', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
            </div>

            <div className="flex items-center justify-end mt-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="mr-4 text-sm text-gray-600 hover:underline"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 transition"
                >
                    {processing ? 'Guardando...' : 'Crear Proyecto'}
                </button>
            </div>
        </form>
    );
}
