import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

 const Dialog= ({isOpen, onClose, text}) =>  {



return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} text={text} backdrop="blur">
        <ModalContent>
            {(onClose) => (
                <>
                 <ModalHeader className="flex flex-col gap-1">Přihlášení</ModalHeader>
                 <ModalBody>
                    <p>{text}</p>
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



  export default Dialog 