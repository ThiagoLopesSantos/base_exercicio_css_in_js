import { FormEvent, useState } from 'react'
import { FormContainer, Search, BtnSearch } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <Search
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTermo(e.target.value)
        }
      />
      <BtnSearch type="submit">Pesquisar</BtnSearch>
    </FormContainer>
  )
}
export default FormVagas
