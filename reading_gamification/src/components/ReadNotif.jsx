import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

 const ReadNotif= ({isOpen, onClose, read}) =>  {



return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
            {(onClose) => (
                <>
                 <ModalHeader className="flex flex-col gap-1">Informace</ModalHeader>
                 <ModalBody>
                    <p>Kniha byla {read ?  "přidána do seznamu přečtených knih" : "odebrána ze seznamu přečtených knih"}</p>
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



  export default ReadNotif 