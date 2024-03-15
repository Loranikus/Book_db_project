import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

 const WishNotif= ({isOpen, onClose, wish, bought}) =>  {



return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
            {(onClose) => (
                <>
                 <ModalHeader className="flex flex-col gap-1">Informace</ModalHeader>
                 <ModalBody>
                    <p>Kniha byla {bought ? "již zakoupena!" : wish ? "přidána do seznamu přání" : "odebrána ze seznamu přání"}</p>
                 </ModalBody>
                 <ModalFooter>
                    <Button color="success" onPress={onClose}>OK</Button>
                 </ModalFooter>
                 </>
            )}
        </ModalContent>
    </Modal>
    </>
)
}



  export default WishNotif 