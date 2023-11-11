import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/react";
import PriceListForm from "@/Components/PriceListForm";
import PriceList from "@/Components/PriceList";
import { router } from "@inertiajs/react";

export default function Index({ auth, priceLists }) {
    const { data, setData, priceList, processing, reset, errors } = useForm({
        price: '', 
        isAvaliable: '', 
        store_id: '', 
        product_id: '',
    });

    const inputRef = React.useRef();

    const submit = (e) => {
        e.preventDefault();

        priceList(route("priceLists.store"), {
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

    const handleEdit = (priceList) => {
        // Redirecione para a página de edição do post com base na rota
        router.visit(route("priceLists.edit", priceList.id));
    };

    const handleRemove = (post) => {
        if (window.confirm("Tem certeza de que deseja remover o post?")) {
            // Implemente a lógica para remover o post (por exemplo, fazendo uma solicitação de exclusão)
            // Após a exclusão, redirecione para a página inicial ou uma página apropriada
            router.delete(route("priceLists.destroy", priceList.id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="PriceList" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <PriceListForm
                    data={data}
                    errors={errors}
                    setData={setData}
                    inputRef={inputRef}
                    submit={submit}
                    cancel={cancel}
                />

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {priceLists.map((priceList) => (
                        <div key={priceList.id}>
                            <PriceList priceList={priceList} />
                            {auth.user.id === priceList.user.id && (
                                <div className="mt-2">
                                    <button
                                        onClick={() => handleEdit(priceList)}
                                        className="text-sm text-blue-500 ml-4"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleRemove(priceList)}
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