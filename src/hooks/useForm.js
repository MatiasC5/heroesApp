import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [form, setForm] = useState(initialForm)

    const handleInputChange = ({ target }) => {
        const { name, value } = target

        setForm({
            ...form,
            [name]: value
        })
    }


    const handleResetForm = () => {
        setForm(initialForm)
    }


    return {
        form,
        ...form,
        handleInputChange,
        handleResetForm
    }
}