import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

 const Notif= ({isOpen, onClose, list}) =>  {



return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
            {(onClose) => (
                <>
                 <ModalHeader className="flex flex-col gap-1">Přidáno</ModalHeader>
                 <ModalBody>
                    <p>Kniha byla {list ? "přidána do" : "odebrána ze"} seznamu</p>
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



  export default Notif 