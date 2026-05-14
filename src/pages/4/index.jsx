import { Link } from 'react-router-dom'
import './style.css'

function Operaçoes(event) {

    const { n, setn } = useState("numero")
    const { n2, setn2 } = useState("numero2")
    const [resultado, setResultado] = useState("resultado")

    function Soma(event) {
        prevent.Default()
        setResultado(Number(num1) + Number(num2))
    }
    function Sub(event) {
        prevent.Default()
        setResultado(Number(num1) - Number(num2))
    }
    function Multi(event) {
        prevent.Default()
        setResultado(Number(num1) * Number(num2))
    }
    function Div(event) {
        prevent.Default()
        setResultado(Number(num1) / Number(num2))
    }
    return (

        <>
            <h1>
                As Quatro Operaçoes Basicas
            </h1>


            <form onSubmit={Sub} >
                <label>
                    Digite um Numero
                </label>
                <input
                    type="number"
                    value={n}
                    onChange={(event) => setn(event.target.value)}
                />
                <label> digite outro numero </label>
                <input
                    type="number"
                    value={n2}
                    onChange={(event) => setn2(event.target.value)}
                />
            </form>
            <button onclick={Soma} > Soma </button>
            <button onclick={Sub} > Subtração </button>
            <button onclick={Multi} > Multiplicação </button>
            <button onclick={Div} > Divisão </button>

            opa, bom? vou perguntar por gentileza, mas onde vc conseguiu esse código que copiou do instagram?
            o kauan o inido que me passou - NA -

            Essa recuperação ja era, recomendo estudar, pode tentar finalizar ela de boa, mas de nada vai valer, recomendo vc estudar 
            Introdução - React.js para iniciantes | Aprenda do ZERO
            Mais avançado -https://www.youtube.com/watch?v=_gHr2Pe5LCY&pp=ygUjaW50cm9kdWNhbyByZWFjdCBjb21wb25lbnRzIGUgcGFnZXM%…

            um feedback construtivo - vc estava ind bem na primeira parte do curso quando estavamos vendo JS, agora não está mais, algo aconteceu?
            é pra responder?
            se quiser, sim, se nao nao precisa
            caso tiver tempo sim
            chora ai
            de boa professor vou ver o video agr

            <p>{resultado}</p>

            <Link to="/">
                <button>
                    Home
                </button>
            </Link>

        </>
    )
}
export default Operaçoes

