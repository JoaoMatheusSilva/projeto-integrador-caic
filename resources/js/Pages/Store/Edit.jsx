import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import StoreForm from "@/Components/StoreForm";

export default function Edit({ auth, store }) {
    const inputRef = React.useRef();

    const { data, setData, put, clearErrors, reset, errors } = useForm(
        "editForm",
        {
            name: store.name ||'',
            contact: store.contact ||'',
            email: store.email ||'',
            phone: store.phone||'',
            number: store.number||'',
            complement: store.complement||'',
            cnpj: store.cnpj ||'',
            address_id: store.address_id||'',
        }
    );

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        // put(route("posts.update", post.id));
        router.post(route("stores.update", store.id), {
            ...data,
            _method: "put",
            forceFormData: true,
        });
    };

    const cancel = () => {
        if (window.confirm("Tem certeza de que deseja cancelar?")) {
            reset();
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Editar Loja - ${store.titulo}`} />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <StoreForm
                    data={data}
                    errors={errors}
                    setData={setData}
                    inputRef={inputRef}
                    submit={submit}
                    cancel={cancel}
                />
            </div>
        </AuthenticatedLayout>
    );
}