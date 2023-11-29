import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react'
import { router } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import StoresTable from './StoresTable';

export default function Index({ auth, stores }) {

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Stores</h2>}
        >
            <Head title='Store'/>
            <div className='max-w 2-1 mx-auto p-4 sm:p-6 lg:p-8'>
                <StoresTable stores={stores}/>
            </div>
        </AuthenticatedLayout>
    );
}