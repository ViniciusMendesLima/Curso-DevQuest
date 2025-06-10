import { useFormInput } from "../../hooks/useFormInput"

export default function Form() {
    const firstNameProps = useFormInput("Vinícius");
    const lastNameProps = useFormInput("Lima");
    

    return(
        <>
            <label>
                First name:
                <input {...firstNameProps}/>
            </label>

            <label>
                Last name:
                <input {...lastNameProps}/>
            </label>
            <p><b>Bom dia, {firstNameProps.value} {lastNameProps.value}</b></p>
        </>
    )
};
