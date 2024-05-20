import { useEffect, useState } from "react";

const Minhalista = [
    { id: '1', value: 'Fruta' },
    { id: '2', value: 'legume' },
    { id: '3', value: 'Carne' }
];

export default function App() {

    const [produtos, setProdutos] = useState(Minhalista)
    const [pesquisa, setPesquisa] = useState('')
    useEffect(
        () => {
            if (pesquisa) {

           const novaLista = Minhalista.filter((item) => {
            return item.value.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase())
           } )
           setProdutos(novaLista)
        } else {
            setProdutos(Minhalista)
         }
        } 

   , [pesquisa])
        

    return (
        <div>
            <h1>Efeito Colaterais</h1>
            <input value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Pesquise" />
            {produtos.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>
                )
            })}
        </div>
    )
}