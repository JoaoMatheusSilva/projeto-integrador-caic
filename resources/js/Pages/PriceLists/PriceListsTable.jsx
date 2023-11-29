import { usePage } from '@inertiajs/react';
import { router } from "@inertiajs/react";

//Componentes
import DataTable from '@/Components/DataTable';
import TableHeader from '@/Components/TableHeader';
import TableHeaderCell from '@/Components/TableHeaderCell';
import TableBody from '@/Components/TableBody';
import TableRow from '@/Components/TableRow';
import TableCell from '@/Components/TableCell';
import TableButton from '@/Components/TableButton';
import NavLink from '@/Components/NavLink';

const CustomTable = () => {
    const { priceList } = usePage().props;

    const handleRemove = (priceList) => {
        if (window.confirm(`Você tem certeza de que deseja remover a ${priceList.name}?`)) {
            router.delete(route('price-lists.delete', priceList.id));
        };
   
        if (window.confirm(`Você tem certeza de que deseja remover o ${priceList.name}?`)) {
            router.delete(route('price-lists.delete', priceList.id));
        }
    };

    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <div className='flex items-center gap-4 mb-2'>
                <NavLink
                    href={route('price-lists.create')}
                    active={route().current('price-lists.index')}
                    className='inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600'
                >
                    New PriceList
                </NavLink>
            </div>
            <DataTable>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell colSpan={2} style={{ width: '20%' }}>Actions</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {states.map((state) => (
                        <TableRow key={state.id}>
                            <TableCell style={{ width: '70%' }}>{state.name}</TableCell>
                            <TableCell style={{ width: '10%' }}>
                                <NavLink
                                    href={route('stores.edit', { store: store.id })}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </NavLink>
                            </TableCell>
                            <TableCell style={{ width: '10%' }}>
                                <TableButton
                                    onClick={() => handleRemove(store)}
                                    className="text-red-600 dark:text-red-500 hover:underline"
                                >
                                    Delete
                                </TableButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </DataTable>
        </div>
    );
};

export default CustomTable;