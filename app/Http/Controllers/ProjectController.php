<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'hours' => 'required|integer|min:1',
            'start_date' => 'required|date',
        ]);

        $request->user()->projects()->create($validated);

        return redirect()->back()->with('message', 'Proyecto creado con éxito.');
    }

    public function index()
    {
        $projects = Project::with('user')->latest()->get();

        return Inertia::render('Projects/Index', [
            'projects' => $projects
        ]);
    }

    public function destroy(Project $project)
    {
        // Verificamos que el usuario logueado sea el dueño
        if (auth()->id() !== $project->user_id) {
            abort(403, 'No tienes permiso para borrar este proyecto.');
        }

        $project->delete();

        return redirect()->back()->with('message', 'Proyecto eliminado correctamente.');
    }
}
