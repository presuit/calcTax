import React, { useState, useRef } from "react";
import "./App.css";

const useCalcTax = () => {
    const [money, setMoney] = useState(0);
    const element = useRef();
    const resultElm = useRef();

    const calcTax = (event) => {
        event.preventDefault();
        const { target } = event;
        const actualMoneyAmount = target.querySelector("input[type=text]").value;
        const TAX_CONSTANT = 0.033;
        const totalMoneyMount = actualMoneyAmount / (1 - TAX_CONSTANT);

        setMoney(Math.floor(totalMoneyMount));

        const formatChanged = new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW" }).format(money);
        element.current.innerText = `${formatChanged} 원`;
        const path = `총 금액 - 세금 = 실 수령액\n${money} - ${Math.floor(TAX_CONSTANT * money)} = ${actualMoneyAmount}`;
        resultElm.current.innerText = path;
    };

    return { element, calcTax, resultElm };
};

function App() {
    const { element, calcTax, resultElm } = useCalcTax();

    return (
        <div className="App">
            <h1>실제로 수령할 금액을 입력해 주세요(세금 떼고)</h1>
            <form action="#" method="get" onSubmit={calcTax}>
                <input type="text" placeholder="실 수령액"></input>
                <input type="submit" />
            </form>
            <h2>총 금액</h2>
            <span ref={element} style={{ marginBottom: "10px" }}>
                0 원
            </span>
            <span ref={resultElm}></span>
        </div>
    );
}

export default App;
