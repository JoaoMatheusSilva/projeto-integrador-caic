import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import StoreForm from "@/Components/StoreForm";
import HeaderCustom from '@/Components/HeaderCustom';

export default function Create({ auth, store, zip_codes }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        name: store.name || '',
        contact: store.contact || '',
        email: store.email || '',
        phone: store.phone || '',
        cnpj: store.cnpj || '',
        number: store.number || '',
        complement: store.complement || '',
        zip_code_id: store.zip_code_id || "",
    });
}

const submit = (e) => {
    e.preventDefault();
    patch(route('stores.update', store.id), {});
};

const cancel = () => {
    if (window.confirm("Tem certeza de que deseja cancelar?")) {
        reset();
    }
};

return (
    <HeaderCustom auth={auth} title={"Stores"} head={"Edit Store"}>
        <StateForm
            data={data}
            errors={errors}
            setData={setData}
            submit={submit}
            cancel={cancel}
            processing={processing}
            zip_codes={zip_codes}
        />
    </HeaderCustom>
);
