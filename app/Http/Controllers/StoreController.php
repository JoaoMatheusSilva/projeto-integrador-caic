<?php

namespace App\Http\Controllers;

use App\Models\Store;
use App\Http\Requests\StoreStoreRequest;
use App\Http\Requests\UpdateStoreRequest;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stores = Store::all();

        return Inertia::render('Stores/Index', [
           Store::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Stores/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStoreRequest $request)
    {
        $stores = $request->validated();

        $create = $request->user()->stores()->create($stores);

        if(!$create) {
            return redirect()->route('stores.index');
        }
        return abort(500);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('Stores/Show', [
            'stores' => Store::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render(
            'Stores/Edit',
            [
                'stores' => Store::findOrFail($id),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStoreRequest $request, string $id)
    {
         // Encontra o post a ser atualizado
         $stores = Store::findOrFail($id);

         $this->authorize('update', $stores);

         // Valida os dados do formulário usando UpdatePostRequest
        $validatedData = $request->validated();

        // Atualize outros campos com os dados validados
        $stores->update($validatedData);

        return redirect()->route('stores.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $stores = Store::findOrFail($id);

        $this->authorize('delete', $stores);

        
        $delete = $stores->delete();

        if ($delete) {
            return redirect()->route('stores.index');
        }

        return abort(500);
    }
}
