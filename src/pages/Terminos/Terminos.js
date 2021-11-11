import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Terminos.module.css';
import Menu from '../../components/Menu/Menu';
import MenuNav from '../../components/MenuNav/MenuNav';
import Footer from '../../components/Footer/Footer';

const Terminos = () => {

    const location = useLocation();

    return(
  <>
    <Menu nick={location.state.nick}></Menu>
    <MenuNav nick={location.state.nick}></MenuNav>

    <div className="py-4">
        <h1 className="text-center"> Términos de servicio</h1>
    </div>

    <div className="card shadow-lg p-5 mx-5 mb-5">
        <h2><strong>Terminos y condiciones</strong></h2>

        <p>Bienvenido a editor's corp</p>


        <p>Al acceder a este sitio web asumimos que acepta estos términos y condiciones. No continúe usando el espacio en blanco si no está de acuerdo con todos los términos y condiciones establecidos en esta página.</p>

        <p>TLa siguiente terminología se aplica a estos Términos y condiciones, Declaración de privacidad y Aviso de exención de responsabilidad y todos los Acuerdos: "Cliente ", "Usted " y "Su " se refieren a usted, la persona que inicia sesión en este sitio
            web y cumple con los términos y condiciones de la Compañía. "La Compañía ", "Nosotros ", "Nosotros ", "Nuestro " y "Nosotros " se refieren a nuestra Compañía. "Parte ", "Partes " o "Nosotros " se refiere tanto al Cliente como a nosotros mismos.
            Todos los términos se refieren a la oferta, aceptación y consideración del pago necesario para llevar a cabo el proceso. de nuestra asistencia al Cliente de la manera más apropiada con el propósito expreso de satisfacer las necesidades del Cliente
            con respecto a la provisión de los servicios declarados por la Compañía, de acuerdo con y sujeto a la ley vigente de los Países Bajos. Alguna El uso de la terminología anterior u otras palabras en singular, plural, mayúsculas y / o él / ella o
            ellos, se toman como intercambiables y, por lo tanto, se refieren a la misma.</p>

        <h3><strong>Cookies</strong></h3>

        <p>Empleamos el uso de cookies. Al acceder al espacio al sitio web, usted aceptó utilizar cookies de acuerdo con la Política de privacidad de Editor's.corp.. </p>

        <p>La mayoría de los sitios web interactivos utilizan cookies para permitirnos recuperar los detalles del usuario para cada visita. Nuestro sitio web utiliza cookies para habilitar la funcionalidad de ciertas áreas para que sea más fácil para las personas
            que visitan nuestro sitio web. Algunos de nuestros afiliados / publicidad los socios también pueden usar cookies</p>


        <h3><strong>Licencia</strong></h3>

        <p>A menos que se indique lo contrario, Editor's.corp y / o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en blanco. Todos los derechos de propiedad intelectual están reservados. Puede acceder a esto desde el espacio
            en blanco para su uso personal sujeto a restricciones. establecido en estos términos y condiciones.</p>

        <p>No debes:</p>
        <ul>
            <li>Volver a publicar material del sitio web</li>
            <li>Vender, alquilar o sublicenciar material de edicion</li>
            <li>Reproducir, duplicar o copiar material de edicion</li>
            <li>Redistribuir contenido desde el espacio de edicion</li>
        </ul>

        <p>Partes de este sitio web ofrecen una oportunidad para que los usuarios publiquen e intercambien opiniones e información en ciertas áreas del sitio web. Editor's.corp no filtra, edita, publica ni revisa los Comentarios antes de su presencia en el sitio
            web. Los comentarios hacen no reflejan los puntos de vista y opiniones de Editor's.corp, sus agentes y / o afiliados. Los comentarios reflejan los puntos de vista y opiniones de la persona que publica sus puntos de vista y opiniones. En la medida
            en que lo permitan las leyes aplicables, Editor's.corp no será responsable por los Comentarios o por cualquier responsabilidad, daños o gastos causados y / o sufridos como resultado de cualquier uso y / o publicación y / o aparición de los Comentarios
            en este sitio web.</p>

        <p>Editor's.corp se reserva el derecho de monitorear todos los Comentarios y eliminar los Comentarios que puedan considerarse inapropiados, ofensivos o que incumplan estos Términos y Condiciones.</p>

        <p>Usted garantiza y manifiesta que:</p>

        <ul>
            <li> Tiene derecho a publicar los Comentarios en nuestro sitio web y tiene todas las licencias y consentimientos necesarios para hacerlo; </li>
            <li> Los Comentarios no invaden ningún derecho de propiedad intelectual, incluidos, entre otros, los derechos de autor, patentes o marcas comerciales de terceros; </li>
            <li> Los Comentarios no contienen ningún material difamatorio, calumnioso, ofensivo, indecente o ilegal que sea una invasión de la privacidad </li>
            <li> Los Comentarios no se utilizarán para solicitar o promover negocios o actividades comerciales personalizadas o presentes o actividades ilegales. </li>
        </ul>

        <p> Por la presente, otorga a Editor's.corp una licencia no exclusiva para usar, reproducir, editar y autorizar a otros a usar, reproducir y editar cualquiera de sus Comentarios en todas y cada una de las formas, formatos o medios. </p>

        <h3> <strong> Hiperenlace a nuestro contenido </strong> </h3>

        <p> Las siguientes organizaciones pueden vincularse a nuestro sitio web sin aprobación previa por escrito: </p>
        <ul>
            <li> Agencias gubernamentales; </li>
            <li> Motores de búsqueda; </li>
            <li> Organizaciones de noticias; </li>
            <li> Los distribuidores de directorios en línea pueden vincularse a nuestro sitio web de la misma manera que hacen hipervínculos a los sitios web de otras empresas que figuran en la lista; y </li>
            <li> Empresas acreditadas en todo el sistema, excepto las organizaciones sin fines de lucro, los centros comerciales de caridad y los grupos de recaudación de fondos de caridad que no pueden hacer hipervínculos a nuestro sitio web. </li>
        </ul>

        <p> Estas organizaciones pueden enlazar a nuestra página de inicio, a publicaciones oa otra información del sitio web siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no implica falsamente patrocinio, respaldo o aprobación de la parte
            vinculante y sus productos y / o servicios; y (c) encaja en el contexto del sitio de la parte vinculante. </p>

        <p> Podemos considerar y aprobar otras solicitudes de enlace de los siguientes tipos de organizaciones: </p>

        <ul>
            <li> fuentes de información de consumidores y / o empresas comúnmente conocidas; </li>
            <li> sitios de la comunidad dot.com; </li>
            <li> asociaciones u otros grupos que representan organizaciones benéficas; </li>
            <li> distribuidores de directorios en línea; </li>
            <li> portales de Internet; </li>
            <li> firmas de contabilidad, derecho y consultoría; y </li>
            <li> instituciones educativas y asociaciones comerciales. </li>
        </ul>

        <p> Aprobaremos las solicitudes de enlace de estas organizaciones si decidimos que: (a) el enlace no nos haría vernos desfavorablemente a nosotros mismos ni a nuestras empresas acreditadas; (b) la organización no tiene registros negativos con nosotros;
            (c) el beneficio para nosotros desde la visibilidad del hipervínculo compensa la ausencia de Editor's.corp; y (d) el enlace está en el contexto de información general de recursos. </p>

        <p> Estas organizaciones pueden vincular a nuestra página de inicio siempre que el vínculo: (a) no sea engañoso de ninguna manera; (b) no implica falsamente patrocinio, respaldo o aprobación de la parte vinculante y sus productos o servicios; y (c) encaja
            en el contexto del sitio de la parte vinculante. </p>

        <p> Si usted es una de las organizaciones enumeradas en el párrafo 2 anterior y está interesado en vincularse a nuestro sitio web, debe informarnos enviando un correo electrónico a Editor's.corp. Incluya su nombre, el nombre de su organización, la información
            de contacto y la URL de su sitio, una lista de las URL desde las que pretende enlazar a nuestro sitio web y una lista de las URL de nuestro sitio a las que le gustaría enlazar. Espere de 2 a 3 semanas para recibir una respuesta.
        </p>

        <p> Las organizaciones aprobadas pueden hacer hipervínculos a nuestro sitio web de la siguiente manera: </p>

        <ul>
            <li> Mediante el uso de nuestro nombre corporativo; o </li>
            <li> Mediante el uso del localizador uniforme de recursos al que se vincula; o </li>
            <li> Mediante el uso de cualquier otra descripción de nuestro sitio web al que está vinculado que tenga sentido dentro del contexto y formato del contenido en el sitio de la parte vinculante. </li>
        </ul>

        <p> No se permitirá el uso del logotipo de Editor's.corp u otra obra de arte para vincular sin un acuerdo de licencia de marca comercial. </p>

        <h3> <strong> iFrames </strong> </h3>

        <p> Sin aprobación previa y permiso por escrito, no puede crear marcos alrededor de nuestras páginas web que alteren de alguna manera la presentación visual o la apariencia de nuestro sitio web. </p>

        <h3> <strong> Responsabilidad del contenido </strong> </h3>

        <p> No seremos responsables de ningún contenido que aparezca en su sitio web. Usted acepta protegernos y defendernos contra todas las reclamaciones que surjan en su sitio web. No debe aparecer ningún enlace en ningún sitio web que pueda interpretarse
            como difamatorio u obsceno. o criminal, o que infrinja, de otra manera viole o defienda la infracción u otra violación de los derechos de terceros. </p>

        <h3> <strong> Su privacidad </strong> </h3>

        <p> Lea la Política de privacidad </p>

        <h3> <strong> Reserva de derechos </strong> </h3>

        <p> Nos reservamos el derecho de solicitar que elimine todos los enlaces o cualquier enlace en particular a nuestro sitio web. Usted aprueba eliminar inmediatamente todos los enlaces a nuestro sitio web cuando lo solicite. También nos reservamos el derecho
            de modificar estos términos y condiciones y se vincula política en cualquier momento. Al vincular continuamente a nuestro sitio web, acepta estar vinculado y seguir estos términos y condiciones de vinculación. </p>

        <h3> <strong> Eliminación de enlaces de nuestro sitio web </strong> </h3>

        <p> Si encuentra algún enlace en nuestro sitio web que sea ofensivo por cualquier motivo, puede contactarnos e informarnos en cualquier momento. Consideraremos las solicitudes para eliminar enlaces, pero no estamos obligados a hacerlo ni a responderle
            directamente. </p>

        <p> No nos aseguramos de que la información en este sitio web sea correcta, no garantizamos su integridad o exactitud; ni nos comprometemos a garantizar que el sitio web permanezca disponible o que el material en el sitio web se mantenga actualizado.
        </p>

        <h3> <strong> Renuncia de responsabilidad </strong> </h3>

        <p> En la medida máxima permitida por la ley aplicable, excluimos todas las representaciones, garantías y condiciones relacionadas con nuestro sitio web y el uso de este sitio web. Nada en este descargo de responsabilidad: </p>

        <ul>
            <li> limitar o excluir nuestra responsabilidad o la suya por muerte o lesiones personales; </li>
            <li> limitar o excluir nuestra responsabilidad o la suya por fraude o tergiversación fraudulenta; </li>
            <li> limitar cualquiera de nuestras responsabilidades o las suyas de cualquier manera que no esté permitida por la ley aplicable; o </li>
            <li> excluir cualquiera de nuestras responsabilidades o las suyas que no puedan estar excluidas según la ley aplicable. </li>
        </ul>

        <p> Las limitaciones y prohibiciones de responsabilidad establecidas en esta Sección y en otras partes de este descargo de responsabilidad: (a) están sujetas al párrafo anterior; y (b) regirá todos los pasivos que surjan en virtud de la exención de responsabilidad,
            incluidos los pasivos que surjan en el contrato, en agravio y por incumplimiento del deber legal. </p>

        <p> Siempre que el sitio web y la información y los servicios en el sitio web se proporcionen de forma gratuita, no seremos responsables de ninguna pérdida o daño de cualquier naturaleza. </p>
    </div>

    <Footer nick={location.state.nick}></Footer>
  </>
)};

export default Terminos;