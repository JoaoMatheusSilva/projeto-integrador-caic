<?php

namespace App\Http\Controllers;

use App\Models\PriceList;
use App\Http\Requests\StorePriceListRequest;
use App\Http\Requests\UpdatePriceListRequest;
use Inertia\Inertia;

class PriceListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('PriceLists/Index', [
            'price-lists' =>
            PriceList::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('PriceLists/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePriceListRequest $request)
    {
        $priceList = $request->validated();

        $create = $request->user()->posts()->create($priceList);

        if ($create) {
            return redirect()->route('price-lists.index');
        }
        return abort(500);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('PriceLists/Show', [
            'price-lists' => PriceList::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render(
            'PriceLists/Edit',
            [
                'price-list' => PriceList::findOrFail($id),
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePriceListRequest $request, string $id)
    {

        // Valida os dados do formulário usando UpdatePostRequest
        $validatedData = $request->validated();

        // Encontra o post a ser atualizado
        $priceList = PriceList::findOrFail($id);

        $this->authorize('update', $priceList);

        // Atualize outros campos com os dados validados
        $priceList->update($validatedData);

        return redirect()->route('price-lists.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $priceList = PriceList::findOrFail($id);

        $this->authorize('delete', $priceList);

        $delete = $priceList->delete();

        if ($delete) {
            return redirect()->route('price-lists.index');
        }

        return abort(500);
    }
}
