import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

 const OwnNotif= ({isOpen, onClose, bought}) =>  {



return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
            {(onClose) => (
                <>
                 <ModalHeader className="flex flex-col gap-1">Informace</ModalHeader>
                 <ModalBody>
                    <p>Kniha byla {bought ?  "přidána do seznamu vlastněných knih" : "odebrána ze seznamu vlastněných knih"}</p>
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



  export default OwnNotif 