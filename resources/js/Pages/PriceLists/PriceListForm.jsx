import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/resources/TextAreaInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import InputSelect from "@/Components/InputSelect";

const PostForm = ({
    data,
    errors,
    setData,
    submit,
    cancel,
    processing,
    stores,
    products,    
}) => {
    return (
        <form onSubmit={submit} encType="multipart/form-data">

            <div className='mb-2'>
                <InputLabel htmlFor="price" value="Price" />
                <TextInput
                    id="price"
                    name="price"
                    value={data.price}
                    className="mt-1 block w-full"
                    autoComplete="price"
                    isFocused={true}
                    onChange={(e) => setData("price", e.target.value)}
                    required
                />
                <InputError message={errors.price} className="mt-2" />
            </div>

            <div className='mb-2'>
                <InputLabel htmlFor="isAvaliable" value="isAvaliable" />
                <TextAreaInput
                    id="isAvaliable"
                    name="isAvaliable"
                    value={data.isAvaliable}
                    className="mt-1 block w-full"
                    autoComplete="isAvaliable"
                    isFocused={true}
                    onChange={(e) => setData("isAvaliable", e.target.value)}
                    required
                />
                <InputError message={errors.isAvaliable} className="mt-2" />
            </div>

            <div classname='mb-2'>
                <InputLabel htmlFor="store_id" value="Store" />
                <InputSelect
                    id="store_id"
                    name="store_id"
                    type='select'
                    options={stores}
                    value={data.store_id}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("store_id", e.target.value)}
                    required
                />
                <InputError message={errors.store_id} className="mt-2" />
            </div>
            
            <div classname='mb-2'>
                <InputLabel htmlFor="product_id" value="Product" />
                <InputSelect
                    id="product_id"
                    name="product_id"
                    type='select'
                    options={products}
                    value={data.product_id}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("product_id", e.target.value)}
                    required
                />
                <InputError message={errors.product_id} className="mt-2" />
            </div>

            <div className="space-x-2">
                    <PrimaryButton
                        className="mt-4"
                        type="submit"
                        disabled={processing}
                    >
                        Salvar
                    </PrimaryButton>
                    <button
                        className="mt-4"
                        onClick={cancel}
                        disabled={processing}
                    >
                        Cancelar
                    </button>
                </div>

        </form>
    );
};

export default PostForm;

//price: '', isAvaliable: '', store_id: '', product_id: '',