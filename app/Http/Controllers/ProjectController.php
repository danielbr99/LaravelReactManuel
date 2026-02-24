<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


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
        $projects = Project::with('user.role')->latest()->get();

        return Inertia::render('Projects/Index', [
            'projects' => $projects
        ]);
    }

    public function destroy(Project $project)
    {
        $user = Auth::user();
        // 1. Admin: Yes
        if ($user->role->name === 'admin') {
            $project->delete();
            return redirect()->back();
        }

        // 2. Owner: Yes
        if ($user->id === $project->user_id) {
            $project->delete();
            return redirect()->back();
        }

        // 3. Manager deleting a User's project: Yes
        if ($user->role->name === 'manager' && $project->user->role->name === 'user') {
            $project->delete();
            return redirect()->back()->with('message', 'Moderado por Manager.');
        }

        // 3. User Logic / Unauthorized: If they reach here, they don't have permission.
        abort(403, 'No tienes los permisos necesarios para realizar esta acción.');
    }
}
