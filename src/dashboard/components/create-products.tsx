import React, { useEffect, useState } from "react";
import {
    Modal,
    CustomModalLayout,
    FormField,
    Input
} from '@wix/design-system';

import '@wix/design-system/styles.global.css';

interface CreateProductModalProps {
    showModal: boolean;
    onSave: (name: string) => void;
    closeModal: () => void;
}

export const CreateProductModal: React.FC<CreateProductModalProps> = ({ showModal, onSave, closeModal }) => {

    const [productName, setProductName] = useState('');
    // const [shown, setShown] = useState(showModal);

    // useEffect(()=>{
    //     setShown(showModal)
    // }, [showModal])

    const toggleModal = ()=>{
        closeModal();
        setProductName('');
    }

    return(
        <Modal
            isOpen={showModal}
            onRequestClose={toggleModal}
            shouldCloseOnOverlayClick
            screen="desktop"
        >
            <CustomModalLayout
                title="Create Product"
                primaryButtonProps={{
                    disabled: !productName,
                    children: 'Save',
                }}

                primaryButtonOnClick={()=>{
                    onSave(productName)
                    setProductName('')
                }}

                secondaryButtonText="Cancel"
                secondaryButtonOnClick={toggleModal}
                onCloseButtonClick={toggleModal}

                content={
                    <FormField label="Name">
                        <Input
                            value={productName}
                            onChange={(e)=> setProductName(e.currentTarget.value)}
                        />
                    </FormField>
                }
            />

        </Modal>
    )
}