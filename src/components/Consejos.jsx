import React from "react";

const Consejos = () => {
    return(
        <>
        <section id="consejos">
      <h2>Consejos para el Uso Responsable del Agua</h2>
      <p>
        Aquí encontrarás algunos consejos prácticos para reducir tu consumo de agua diario:
      </p>
      <ul>
        <li>Repara las fugas de inmediato.</li>
        <li>Utiliza una regadera en lugar de bañarte durante mucho tiempo.</li>
        <li>Opta por electrodomésticos eficientes en el uso del agua.</li>
        <li>Riega tus plantas en la mañana o en la noche para reducir la evaporación.</li>
      </ul>

      <div class="card">
        <h2> DIA MUNDIAL DEL AGUA</h2>
        <p>Celebración global que destaca la importancia y gestión sostenible del agua.
        </p>
        <button id="verMas">Ver Más</button>
      </div>
    
      <div id="detalle" class="detalle">
        <p class="parrafo-detalle">
            El Día Mundial del Agua, observado cada 22 de marzo, es una iniciativa de las Naciones Unidas destinada a resaltar la importancia vital del agua dulce y abordar los desafíos relacionados con su acceso, gestión y conservación. Este evento global busca sensibilizar a la población sobre la crisis mundial del agua y promover acciones para abordar problemas como la escasez y la contaminación del agua. Cada año, el Día Mundial del Agua se centra en un tema específico para destacar diversos aspectos del agua dulce, desde la gestión sostenible hasta la igualdad de acceso.

            El agua es esencial para la vida y el desarrollo sostenible, afectando a la salud, la agricultura, la energía y el medio ambiente. La jornada proporciona una plataforma para la colaboración entre gobiernos, organizaciones no gubernamentales y la sociedad civil, promoviendo la conciencia y la acción. El acceso equitativo al agua potable y saneamiento es un objetivo fundamental, en línea con los Objetivos de Desarrollo Sostenible de la ONU. En un mundo donde millones de personas carecen de acceso a agua segura, el Día Mundial del Agua destaca la necesidad urgente de abordar los desafíos del agua dulce para construir un futuro sostenible y equitativo.
        </p>
        </div>
    </section>

        </>
    )
}

export default Consejos;