import React from "react";

const Calculadora = () =>{
    function calculateMonthlyConsumption() {
        const dailyConsumption = parseFloat(document.getElementById('dailyConsumption').value);
        const daysInMonth = 30; // Assuming an average month
        const monthlyConsumption = dailyConsumption * daysInMonth;
      
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Tu consumo mensual estimado es de ${monthlyConsumption.toFixed(2)} litros.`;
      }
    // --------VER MAS------------
    
    document.addEventListener("DOMContentLoaded", function () {
        const verMasButton = document.getElementById("verMas");
        const detalleDiv = document.getElementById("detalle");
      
        verMasButton.addEventListener("click", function () {
          // Alternar la visibilidad del detalle al hacer clic en el botón "Ver Más"
          detalleDiv.style.display = detalleDiv.style.display === "none" ? "block" : "none";
        });
      });

    return(
        <>
        <section id="calculator">
            <h2>Calculadora de Consumo Mensual</h2>
            <label for="dailyConsumption">Consumo diario de agua (en litros): </label>
            <input type="number" id="dailyConsumption" />
            <button onclick={calculateMonthlyConsumption}>Calcular consumo mensual</button>
            <p id="result"></p>
        </section>
        </>
    )
}

export default Calculadora;