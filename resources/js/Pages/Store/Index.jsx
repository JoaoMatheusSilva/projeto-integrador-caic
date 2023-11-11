import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/react";
import StoreForm from "@/Components/StoreForm";
import Store from "@/Components/Store";
import { router } from "@inertiajs/react";

export default function Index({ auth, stores }) {
    const { data, setData, store, processing, reset, errors } = useForm({
        name: '',
        contact: '', 
        email: '',
        phone: '',
        number: '', 
        complement: '', 
        cnpj: '', 
        address_id: '',
        
    });

    const inputRef = React.useRef();

    const submit = (e) => {
        e.preventDefault();

        post(route("store.store"), {
            onSuccess: () => {
                reset();
                inputRef.current.value = "";
            },
        });
    };

    const cancel = () => {
        if (window.confirm("Tem certeza de que deseja cancelar?")) {
            reset();
        }
    };

    const handleEdit = (post) => {
        // Redirecione para a página de edição do post com base na rota
        router.visit(route("stores.edit", store.id));
    };

    const handleRemove = (store) => {
        if (window.confirm("Tem certeza de que deseja remover o post?")) {
            // Implemente a lógica para remover o post (por exemplo, fazendo uma solicitação de exclusão)
            // Após a exclusão, redirecione para a página inicial ou uma página apropriada
            router.delete(route("stores.destroy", store.id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Post" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <StoreForm
                    data={data}
                    errors={errors}
                    setData={setData}
                    inputRef={inputRef}
                    submit={submit}
                    cancel={cancel}
                />

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {stores.map((store) => (
                        <div key={store.id}>
                            <Store store={store} />
                            {auth.user.id === store.user.id && (
                                <div className="mt-2">
                                    <button
                                        onClick={() => handleEdit(store)}
                                        className="text-sm text-blue-500 ml-4"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleRemove(store)}
                                        className="text-sm text-red-500 ml-4"
                                    >
                                        Remover
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}