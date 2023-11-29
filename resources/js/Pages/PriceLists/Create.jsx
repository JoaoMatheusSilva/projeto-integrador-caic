import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import PriceListForm from "./PriceListForm";

export default function Create({ auth, stores, products, priceList }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        price: priceList.price || '',
        isAvailable: priceList.isAvailable || '',
        stores_id: priceList.stores_id_id || '',
        products_id: priceList.products_id_id || '',
    });
};

const submit = (e) => {
    e.preventDefault();
    e.preventDefault();
    console.log(data)
    post(route('price-lists.store'), {
        onSuccess: () => {
            reset();
        },
    });
};

const cancel = () => {
    if (window.confirm("Tem certeza de que deseja cancelar?")) {
        reset();
    }
};

return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cities</h2>}
    >
        <Head title="Create" />
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <CityForm
                data={data}
                errors={errors}
                setData={setData}
                submit={submit}
                cancel={cancel}
                processing={processing}
                priceList={priceList}
            />
        </div>
    </AuthenticatedLayout>
);
