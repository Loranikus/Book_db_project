import { Input } from "@nextui-org/react"

const SearchField = () => {

    return(
        <>
        <Input type="text" label="Vyplň ISBN" labelPlacement="inside" placeholder="1234567890" isClearable></Input>
        </>
    )
}

export default SearchField