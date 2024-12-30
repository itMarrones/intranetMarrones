// Definir el formulario de Industrial
const forms = {
    "formularioIndustrial": {
        "html": `
            <h1>Formulario Industrial</h1>
            <form id="filter-form">
                <label for="municipio">Municipio:</label>
                <select id="municipio" name="municipio">
                    <option value="">Selecciona un Municipio</option>
                </select>
                <br>

                <label for="razonSocial">Razón Social:</label>
                <select id="razonSocial" name="razonSocial" disabled>
                    <option value="">Selecciona una Razón Social</option>
                </select>
                <br>

                <label for="codigoCliente">Código Cliente:</label>
                <select id="codigoCliente" name="codigoCliente" disabled>
                    <option value="">Selecciona un Código Cliente</option>
                </select>
                <br>

                <label for="viaPublica">Vía Pública:</label>
                <select id="viaPublica" name="viaPublica" disabled>
                    <option value="">Selecciona una Vía Pública</option>
                </select>
                <br>

                <label for="exteriorAccessible">Exterior Accesible:</label>
                <select id="exteriorAccessible" name="exteriorAccessible">
                    <option value="">Selecciona una opción</option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                </select>
                <br>

                <button type="submit">Enviar</button>
            </form>
        `
    }
};
// Datos para autocompletar
const datos = [
    {
        "Municipio": "ABRERA",
        "RazonSocial": "ABRERA FOOD SERVICE, S.L.",
        "CodigoCliente": 12640,
        "ViaPublica": "CAMI SAGRAMENTS"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "ANDRES TORRIJOS BELTRAN",
        "CodigoCliente": 12719,
        "ViaPublica": "AVENIDA CA N'AMAT"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "NR MOBILITY SOLUTIONS, S.L.",
        "CodigoCliente": "00184",
        "ViaPublica": "CALLE PROGRES"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "CENORMA, S.L",
        "CodigoCliente": 10304,
        "ViaPublica": "CAMI SAGRAMENTS"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "NIVERPLAST IBERICA S.L.",
        "CodigoCliente": 35979,
        "ViaPublica": "CALLE BARCELONA"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "HIGHCROM, S.L.U",
        "CodigoCliente": 34460,
        "ViaPublica": "AVENIDA CA N'AMAT"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "PROELEC INDUCTIVE LJAP S.L.",
        "CodigoCliente": 35958,
        "ViaPublica": "CALLE BARCELONA"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "NONSTOP GYM S.L.",
        "CodigoCliente": 36970,
        "ViaPublica": "AVENIDA CA N'AMAT"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "TOT FRENS S.L.",
        "CodigoCliente": 36219,
        "ViaPublica": "CAMI SAGRAMENTS"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "UNION FOAM IBERICA, S.L.",
        "CodigoCliente": 10217,
        "ViaPublica": "AVENIDA CA N'AMAT"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "MASCOT CENTER ABRERA, S.L.",
        "CodigoCliente": 12760,
        "ViaPublica": "AVENIDA CA N'AMAT"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "VIZCAINO O'CONNOR SUCESORES, S.L.",
        "CodigoCliente": 35666,
        "ViaPublica": "CAMI SAGRAMENTS"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "REFRIGERACIÓ NOUFRED SL",
        "CodigoCliente": 12831,
        "ViaPublica": "CARRER DEL ROSELLO"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "NOUAIRE INSTAL LACIONS I SERVEIS SA",
        "CodigoCliente": 13121,
        "ViaPublica": "CARRER SANT JOSEP"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "BOFROST SA",
        "CodigoCliente": 12822,
        "ViaPublica": "CARRER GIRONES"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "CARNGUST SL",
        "CodigoCliente": 12637,
        "ViaPublica": "CARRER SANT JOSEP"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "INOX IBERICA SA",
        "CodigoCliente": 12823,
        "ViaPublica": "CARRER DEL ROSELLO"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "FUSTERIA EBENIUM S.L.",
        "CodigoCliente": 12697,
        "ViaPublica": "CARRER DE TARRAGONA"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "GRUP DAOSNI SL",
        "CodigoCliente": 36041,
        "ViaPublica": "CARRER PUIGCERDA"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "METALICAS MARCHAN SL",
        "CodigoCliente": 36506,
        "ViaPublica": "CARRER DE TARRAGONA"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "LAMAR 94 SL",
        "CodigoCliente": 12914,
        "ViaPublica": "PASSATGE ANTONI GAUDI"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "CMR FITNESS, S.C.",
        "CodigoCliente": 36789,
        "ViaPublica": "CARRER DE LA RIERA GARRAP"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "MASSANES PLASTICS SLU",
        "CodigoCliente": 12726,
        "ViaPublica": "CARRER DE TARRAGONA"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "MECANIQUES BUCH PRADAS SL.",
        "CodigoCliente": 12655,
        "ViaPublica": "CARRER DE TARRAGONA"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "NAMLI FOOD SL",
        "CodigoCliente": 12413,
        "ViaPublica": "CARRETERA DE VILABLAREIX"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "AUTO-TRUCK GABRIELI SL",
        "CodigoCliente": 12678,
        "ViaPublica": "CARRER DE TARRAGONA"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "CARNS I EMBOTITS N VICENS SL",
        "CodigoCliente": 36455,
        "ViaPublica": "CARRER GIRONES"
    },
    {
        "Municipio": "AIGUAVIVA",
        "RazonSocial": "PEIXOS PUIGNAU SA",
        "CodigoCliente": 12518,
        "ViaPublica": "CARRER DE TARRAGONA"
    },
    {
        "Municipio": "ARGENTONA",
        "RazonSocial": "THE BRAND COMPANY, S.L.",
        "CodigoCliente": 11602,
        "ViaPublica": "CALLE DE CAN DINERS"
    },
    {
        "Municipio": "ARGENTONA",
        "RazonSocial": "UP SPORT & LEISURE ARGENTONA, S.L.",
        "CodigoCliente": 36679,
        "ViaPublica": "CALLE DEL TORRENT DE MADA"
    },
    {
        "Municipio": "ARGENTONA",
        "RazonSocial": "PISCINES ARGENTONA, S.L.",
        "CodigoCliente": 10171,
        "ViaPublica": "CALLE DE MONTSERRAT ROIG I FRANSITORRA"
    },
    {
        "Municipio": "ARGENTONA",
        "RazonSocial": "CORMA SCCL",
        "CodigoCliente": 85122,
        "ViaPublica": "VENAT DE PINS"
    },
    {
        "Municipio": "ARGENTONA",
        "RazonSocial": "ACUARINOX, S.L.",
        "CodigoCliente": 36632,
        "ViaPublica": "AVENIDA DE L'AIXERNADOR"
    },
    {
        "Municipio": "ARGENTONA",
        "RazonSocial": "HELLO STRAW SPAIN SL",
        "CodigoCliente": 11934,
        "ViaPublica": "CALLE DE CAN DINERS"
    },
    {
        "Municipio": "AVINYONET DEL PENEDES",
        "RazonSocial": "LA NOCCIOLA TOSCANA SL.",
        "CodigoCliente": 36656,
        "ViaPublica": "CALLE LLEVANT"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ALGLASS S.A.",
        "CodigoCliente": 34626,
        "ViaPublica": "CARRER JULI GALVE BRUSSON"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ALGLASS S.A.",
        "CodigoCliente": 34626,
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ADO CERRAMIENTOS METALICOS S.A",
        "CodigoCliente": 6720,
        "ViaPublica": "L' ACER"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "AF GESTPRINT SL",
        "CodigoCliente": 34381,
        "ViaPublica": "ENERGIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ABARROTES FOODS SL.",
        "CodigoCliente": 6774,
        "ViaPublica": "ELECTRONICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ACABADOS GORBA, S.L.",
        "CodigoCliente": 10889,
        "ViaPublica": "PASAJE ANTONI BORI"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ALBI LINE S.L.",
        "CodigoCliente": 6896,
        "ViaPublica": "PLACETA PLASTIC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ALEXPHONE, SL",
        "CodigoCliente": 37156,
        "ViaPublica": "FRANCESC TEIXIDO"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ARISTA GROUP MANEGEMENT, S.L.",
        "CodigoCliente": 11018,
        "ViaPublica": "XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ASSI SISTEMAS  E INSTRUMENTACION, S.L",
        "CodigoCliente": 11355,
        "ViaPublica": "CARRER RAMON MARTI I ALSINA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GESTION DE RESIDUOS HOSPITALET, SL",
        "CodigoCliente": 1,
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MANAU, S.A.",
        "CodigoCliente": 99,
        "ViaPublica": "RAMBLA FRANÇA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MAQ. Y SERV. DIGITALES COPY SERVICE,S.L.",
        "CodigoCliente": "00491",
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CREATIVE HAIR BCN SLU",
        "CodigoCliente": "00595",
        "ViaPublica": "FRANCESC TEIXIDO"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EFIENERGY PROJECTS S.L.",
        "CodigoCliente": "00780",
        "ViaPublica": "PINTOR ROIG I SOLER"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TEDISEL IBERICA, S.L.",
        "CodigoCliente": "00785",
        "ViaPublica": "CARRER SANT LLUC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ELS SACS VOLADORS, S.L.",
        "CodigoCliente": 1736,
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CENTRE DE TRIATGE BARCELONA,SA",
        "CodigoCliente": 1943,
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PEDRO FRAMIS S.A",
        "CodigoCliente": "02152",
        "ViaPublica": "PLAÇA XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GISBERT PARFERISA SL",
        "CodigoCliente": 2282,
        "ViaPublica": "CALLE DE LA MORA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PASTELERIA ARPA, S.L.",
        "CodigoCliente": 2308,
        "ViaPublica": "TEIXIDORES"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PASTELERIA ARPA, S.L.",
        "CodigoCliente": 2308,
        "ViaPublica": "CARRER JULI GALVE BRUSSON"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PLASTICOS JUAREZ SA",
        "CodigoCliente": 2310,
        "ViaPublica": "CARRER ALFONS XII"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PLASTICOS JUAREZ SA",
        "CodigoCliente": 2310,
        "ViaPublica": "CARRER SANT LLUC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SIMSAGROUP TECHNOLOGIES SA",
        "CodigoCliente": 2490,
        "ViaPublica": "CARRER JULI GALVE BRUSSON"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ROCHE S.L.",
        "CodigoCliente": 2512,
        "ViaPublica": "CARRER TARDOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PINTURAS CORBACHO, S.L.",
        "CodigoCliente": 2513,
        "ViaPublica": "CARRER TARDOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EUROMED PHARMA SPAIN, S.L.",
        "CodigoCliente": 2532,
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TIXCOM, S.L.",
        "CodigoCliente": "03532",
        "ViaPublica": "FRANCESC TEIXIDO"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CENTRAL DE COMPRAS CEALCO S.L.",
        "CodigoCliente": "04868",
        "ViaPublica": "? DEL PLASTIC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BETULO LABELS , S.L.",
        "CodigoCliente": 6045,
        "ViaPublica": "PLAÇA VAPOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TEXTIL GIMENO , S.A.",
        "CodigoCliente": 6046,
        "ViaPublica": "? AVINGUDA DEL GUIX"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ORENES CATALANA DE AZAR, S.L.",
        "CodigoCliente": 6052,
        "ViaPublica": "AVENIDA LLENGUADOC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "INICIATIVAS ELECTRICAS Y DE CONTROL, S.L",
        "CodigoCliente": 6059,
        "ViaPublica": "ELECTRONICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MUCALUD, S.L.",
        "CodigoCliente": 6061,
        "ViaPublica": "CARRER RAMON MARTI I ALSINA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GINO ESTIL, S.A.",
        "CodigoCliente": 6065,
        "ViaPublica": "? AVINGUDA DEL GUIX"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CIMELSA , SL",
        "CodigoCliente": 6066,
        "ViaPublica": "ELECTRONICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BOMBAS Y EQUIPOS DE BOMBEO, S.",
        "CodigoCliente": 6070,
        "ViaPublica": "PINTOR ROIG I SOLER"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ELDRACHER, S.L.",
        "CodigoCliente": 6071,
        "ViaPublica": "CARRER MANUEL FERNANDEZ MARQUEZ"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "NEXTALIA VENTURES , S.L.",
        "CodigoCliente": 6087,
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "RODI METRO, S.L.U.",
        "CodigoCliente": 6114,
        "ViaPublica": "AVINGUDA MARESME"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "HERNANDEZ MARMOLISTAS S.L.",
        "CodigoCliente": 6116,
        "ViaPublica": "ENERGIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "NEOPROOF SOLUCIONES INTEGRALES",
        "CodigoCliente": 6159,
        "ViaPublica": "ENERGIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "HAIR AND BEAUTY CASH AND CARRY",
        "CodigoCliente": 6161,
        "ViaPublica": "CALLE DE LA MORA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "HAIR AND BEAUTY CASH AND CARRY",
        "CodigoCliente": 6161,
        "ViaPublica": "CARRER CORDERS"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EURO BEARINGS SPAIN, S.L.",
        "CodigoCliente": 6183,
        "ViaPublica": "PLACETA PLASTIC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TOBELLA BOLTA, S.A.",
        "CodigoCliente": 6184,
        "ViaPublica": "CARRER ARQUIMEDES"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EUROSTANDING S.A.",
        "CodigoCliente": 6205,
        "ViaPublica": "AVINGUDA MARESME"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EUROFUSTERS S.L.",
        "CodigoCliente": 6206,
        "ViaPublica": "FRANCESC TEIXIDO"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CATCELONA  S.L.",
        "CodigoCliente": 6213,
        "ViaPublica": "AVENIDA LLENGUADOC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TALLERES CAN RUTI S.L.",
        "CodigoCliente": 6214,
        "ViaPublica": "AVENIDA LLENGUADOC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BASIC CONNECTION SYSTEMS, S.L.",
        "CodigoCliente": 6263,
        "ViaPublica": "CARRER JULI GALVE BRUSSON"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "KONECRANES AND DEMAG IBERICA S.L.U.",
        "CodigoCliente": 6328,
        "ViaPublica": "AVINGUDA MARESME"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "HIPERMONTIGALA S.L.",
        "CodigoCliente": 6338,
        "ViaPublica": "CARRER BELGICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GMG SUMINISTROS INDUSTRIALES",
        "CodigoCliente": 6462,
        "ViaPublica": "CARRER TARDOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "FACIL VITRUM S.L.",
        "CodigoCliente": 6501,
        "ViaPublica": "AVINGUDA CERDANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "FACIL VITRUM S.L.",
        "CodigoCliente": 6501,
        "ViaPublica": "AVINGUDA CONFLENT"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ROTULOS AVANTI S.L.",
        "CodigoCliente": 6680,
        "ViaPublica": "ELECTRONICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GALEFUSION S.L.",
        "CodigoCliente": 6685,
        "ViaPublica": "ELECTRONICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "INGESA, INGENIERIA Y EQUIPOS S.L.",
        "CodigoCliente": 6693,
        "ViaPublica": "? DELS TREBALLADORS"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ENERGIA, QUADRES I AUTOMATISME",
        "CodigoCliente": 6707,
        "ViaPublica": "ELECTRONICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PRODUCTOS Y PINTURAS DANER SL",
        "CodigoCliente": 6751,
        "ViaPublica": "AVINGUDA BRONZE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "COMPLEMENTOS PASTELEROS MARTI S.A.",
        "CodigoCliente": 6756,
        "ViaPublica": "AVINGUDA CERDANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BADALONA HUNCRIS SL.",
        "CodigoCliente": 6767,
        "ViaPublica": "CARRER GRAN BRETANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "COCOROTA SL.",
        "CodigoCliente": 6777,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "NATI J. DISSENY, SL",
        "CodigoCliente": 6782,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ENRIQUE TOMAS S.L.",
        "CodigoCliente": 6808,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ENRIQUE TOMAS S.L.",
        "CodigoCliente": 6808,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PRIMA TEXTIL, SL.",
        "CodigoCliente": 6811,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MERCERIA STA. ANA MAYOR, SA.",
        "CodigoCliente": 6822,
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "FABRICA ELEC DE DISEÑOS EXCLUS,SL",
        "CodigoCliente": 6830,
        "ViaPublica": "AVENIDA LLENGUADOC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GUILLERMO LOPEZ GIMENEZ",
        "CodigoCliente": 6838,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PULGAR GRAGERA, NICOL",
        "CodigoCliente": 6867,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TALLERES MICAMOL, S.L.",
        "CodigoCliente": 6968,
        "ViaPublica": "CARRER JOSEP MARIA SERT"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PASTELERIA FIDELIA S.L.",
        "CodigoCliente": 7081,
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BETZZIA S.L",
        "CodigoCliente": 7112,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "LOPEZ JUNIOR SL.",
        "CodigoCliente": 7115,
        "ViaPublica": "CARRER GRAN BRETANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "IVALORE.- INVESTIGACION Y VALORIZACION",
        "CodigoCliente": 7120,
        "ViaPublica": "RIERA MONTEALEGRE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CONFECCIONES ISA SL",
        "CodigoCliente": 7132,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GRUPO LOGAR S.L.",
        "CodigoCliente": 7134,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "NEBLAK FASHION S.A.",
        "CodigoCliente": 7135,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "JUAN CENTELLA",
        "CodigoCliente": 7136,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PEDRO HERRERO SARRIA",
        "CodigoCliente": 7142,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "VITTORIO DISEÑO S.L.",
        "CodigoCliente": 7145,
        "ViaPublica": "CARRER GRAN BRETANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CONFECCIONES PLACI S.A.",
        "CodigoCliente": 7151,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "RO-PUNT SL.",
        "CodigoCliente": 7152,
        "ViaPublica": "CARRER GRAN BRETANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TEXTIL JUAN MORAGAS,S.A.",
        "CodigoCliente": 7154,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "JENUAN DISEÑO Y MODA TEXTIL S.L.",
        "CodigoCliente": 7155,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "COMUNIDAD DE PROPIETARIOS MONTIGALA",
        "CodigoCliente": 7158,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MONICA FUENTES GUTIERREZ",
        "CodigoCliente": 7171,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "JUAN MARCOS MODA S.L.",
        "CodigoCliente": 7174,
        "ViaPublica": "RAMBLA FRANÇA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TRINITECH EUROPE S.L.",
        "CodigoCliente": 7181,
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "REBECA SANCHEZ",
        "CodigoCliente": "07654",
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "INNOVA TECNOQUADRES, S.L",
        "CodigoCliente": "07704",
        "ViaPublica": "PLAÇA XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EDUJAV, S.L.",
        "CodigoCliente": "07756",
        "ViaPublica": "CARRER TARDOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BARCITRONIC, S.A.",
        "CodigoCliente": "07758",
        "ViaPublica": "PLAÇA VAPOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TVH PARTS ESPAÑA SA",
        "CodigoCliente": "07844",
        "ViaPublica": "CARRER TORRENT VALLMAJOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "FUTURPRINT SISTEMES SL",
        "CodigoCliente": "07845",
        "ViaPublica": "CARRER GRAN BRETANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EURO TALLER BADALONA, S.L.",
        "CodigoCliente": "08019",
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "UNNOM 21, S.L.",
        "CodigoCliente": "08036",
        "ViaPublica": "PLACETA PLASTIC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "OVIDE MAUDET SL",
        "CodigoCliente": "08106",
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "COPRETEX, S.A.",
        "CodigoCliente": "08337",
        "ViaPublica": "CARRER ALFONS XII"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "JULVE TOT NET S.L.",
        "CodigoCliente": "08432",
        "ViaPublica": "CALLE JOSEP PUJOL-BUSQUETS"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "RECICLATGE VERD, S.L.",
        "CodigoCliente": 9160,
        "ViaPublica": "FRANCESC TEIXIDOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "DITEC COMUNICACIONES, S.L",
        "CodigoCliente": "09441",
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "STEEL MEFOBO, S.L.",
        "CodigoCliente": "09462",
        "ViaPublica": "ENERGIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SHINGARI FOODS S.L.",
        "CodigoCliente": "09678",
        "ViaPublica": "CARRER OCCITANIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MORGUI CLIMA SL",
        "CodigoCliente": "09719",
        "ViaPublica": "CARRER MONTURIOL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "COMERCIAL CHOCOLATES LACASA, S.A.",
        "CodigoCliente": "09774",
        "ViaPublica": "?CARRER BRONZE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SERRA GLOBAL TECHNOLOGY SL",
        "CodigoCliente": "09806",
        "ViaPublica": "?CARRER BRONZE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SERRA GLOBAL TECHNOLOGY SL",
        "CodigoCliente": "09806",
        "ViaPublica": "CARRER TORRENT VALLMAJOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MAXIMILIANO ZELIKOWICZ ZYLBERMAN",
        "CodigoCliente": "09820",
        "ViaPublica": "ELECTRONICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BANZAI PRODUCTIONS,SL.",
        "CodigoCliente": "09894",
        "ViaPublica": "CARRER RAMON MARTI I ALSINA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BANZAI PRODUCTIONS,SL.",
        "CodigoCliente": "09894",
        "ViaPublica": "CARRER ISIDRE NONELL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "INCERAMICS SOLUCIONS I DISTRIBUCIONS SL",
        "CodigoCliente": "09901",
        "ViaPublica": "AVENIDA LLENGUADOC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "UNITR3S STUDIO S.L.",
        "CodigoCliente": "09953",
        "ViaPublica": "CARRER TORRENT VALLMAJOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CONSTRUCCIONS MECANIQUES JUSA SL",
        "CodigoCliente": "09975",
        "ViaPublica": "?CARRER BRONZE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "FUSTERIA COBISA SLU",
        "CodigoCliente": "09979",
        "ViaPublica": "CARRER GRAN BRETANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "LUNA ROSSA HOME SL",
        "CodigoCliente": 10006,
        "ViaPublica": "FRANCESC TEIXIDO"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CORTINA TEXTIL SA",
        "CodigoCliente": 10032,
        "ViaPublica": "CARRER BELGICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SAINT HONORE, S.A.",
        "CodigoCliente": 10123,
        "ViaPublica": "CARRER ALFONS XII"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "LOESS MOTORSPORT, S.L.",
        "CodigoCliente": 10234,
        "ViaPublica": "ENERGIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SUSHI HAND, S.L.",
        "CodigoCliente": 10383,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TESIEN ADD SL",
        "CodigoCliente": 10445,
        "ViaPublica": "XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BADINSA INSTALACIONES SL",
        "CodigoCliente": 10674,
        "ViaPublica": "?CARRER BRONZE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CRYOGAS,S.L",
        "CodigoCliente": 10846,
        "ViaPublica": "PLAÇA XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "RAES CATERING S.L. - LA CANTINETA",
        "CodigoCliente": 10908,
        "ViaPublica": "CARRER MANUEL FERNANDEZ MARQUEZ"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "JUAN RAMON MARIN MESA",
        "CodigoCliente": 10912,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TAPIDEC EUGENIO SL",
        "CodigoCliente": 10917,
        "ViaPublica": "PLAÇA VAPOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "AUXILIAR DE LA HOSTELERIA MALGRAT 2 SL.",
        "CodigoCliente": 10924,
        "ViaPublica": "?CARRER BRONZE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BETULO PAN SLU",
        "CodigoCliente": 11022,
        "ViaPublica": "XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "JTM INICIATIVES EXPRESS PARTS, S.L.",
        "CodigoCliente": 11134,
        "ViaPublica": "PLAÇA XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TICO MUSICA.S.A.",
        "CodigoCliente": 11151,
        "ViaPublica": "FRANCESC TEIXIDO"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "FUNDACIO PRIVADA FORMACIO I TREBALL",
        "CodigoCliente": 11168,
        "ViaPublica": "CALLE DE LA MORA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MANUTENCION AUTOMATIZADA, S.A.",
        "CodigoCliente": 11189,
        "ViaPublica": "PASAJE ANTONI BORI"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MARIO FRIGERIO SPA SUC.ESP.",
        "CodigoCliente": 11249,
        "ViaPublica": "CARRER PROGRES"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SPORT NEEDS, S.L",
        "CodigoCliente": 11313,
        "ViaPublica": "CARRER EDUARD MARISTANY"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "LSR LASER MODA S.L",
        "CodigoCliente": 11317,
        "ViaPublica": "CARRER LITUANIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "LSR LASER MODA S.L",
        "CodigoCliente": 11317,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SAIBRANO, S.L.U",
        "CodigoCliente": 11368,
        "ViaPublica": "CARRER MANUEL FERNANDEZ MARQUEZ"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EDA INSTALACIONES Y ENERGIA S.L.",
        "CodigoCliente": 11376,
        "ViaPublica": "CARRER SUISSA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MARGER 2010 S.L.",
        "CodigoCliente": 11551,
        "ViaPublica": "PLAÇA VAPOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ISMAT SISTEMAS S.L.",
        "CodigoCliente": 11578,
        "ViaPublica": "XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SENTITS BARCELONA S.L.",
        "CodigoCliente": 11619,
        "ViaPublica": "?CARRER BRONZE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PRODUCTOS DE COSMETICA ARTESANALES S.L",
        "CodigoCliente": 11703,
        "ViaPublica": "CARRER INDUSTRIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CONFECCIONES MAPAN S.L.",
        "CodigoCliente": 11946,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "JORDI ROVIRA FERRES",
        "CodigoCliente": 11956,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ELOSUNG EUROPE, S.A",
        "CodigoCliente": 11972,
        "ViaPublica": "FRANCESC TEIXIDO"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "DOMENICOPASTA SL",
        "CodigoCliente": 12008,
        "ViaPublica": "AVINGUDA CONFLENT"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "WHITE LIGHT 2020, S.L",
        "CodigoCliente": 12050,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EUROASIA 2000 FOODS SL",
        "CodigoCliente": 12072,
        "ViaPublica": "?CARRER BRONZE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CLEAN LAUNDRY SOLUTIONS S.L.",
        "CodigoCliente": 12295,
        "ViaPublica": "CALLE DE LA MORA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "RUVA SERVICIOS INTEGRALES SL",
        "CodigoCliente": 12342,
        "ViaPublica": "PLAÇA VAPOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "DOS TUMBAS, S.L",
        "CodigoCliente": 12343,
        "ViaPublica": "CARRER JOSEP MARIA SERT"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MULTIPLE ENGINEERED SOLUTIONS SLU",
        "CodigoCliente": 12505,
        "ViaPublica": "CARRER GUIFRE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "DISTRIB. Y TRANSPORTE DE MERCANCIAS S.L.",
        "CodigoCliente": 12528,
        "ViaPublica": "CALLE DE LA MORA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "LUMINIA ADVANCED LIGHTING SL",
        "CodigoCliente": 12562,
        "ViaPublica": "?CARRER BRONZE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "DECUS PARQUET PROJECTES E INTERIORIS S.L",
        "CodigoCliente": 12826,
        "ViaPublica": "ENERGIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GREENSOONS DESIGN SL",
        "CodigoCliente": 12926,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "METER UNDER TEST, SA",
        "CodigoCliente": 33375,
        "ViaPublica": "CAMI PELLERIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BEAUNIVATIONS S.L.",
        "CodigoCliente": 33379,
        "ViaPublica": "PLAÇA VAPOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "NODAR EBRALIZDE",
        "CodigoCliente": 33430,
        "ViaPublica": "CARRER CASTILLEJOS"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BOSCOHEN, S.L",
        "CodigoCliente": 33516,
        "ViaPublica": "CARRER TORRENT VALLMAJOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MIIN COSMETICS, S.L.",
        "CodigoCliente": 33564,
        "ViaPublica": "CALLE DE LA MORA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "JUAN DIEGO SANCHEZ NUÑEZ",
        "CodigoCliente": 33592,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "DUERTO, S.L",
        "CodigoCliente": 33664,
        "ViaPublica": "CARRER TECNICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EUROPORTMAN, S.L",
        "CodigoCliente": 33679,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "TALLERES UTRERA S.L.",
        "CodigoCliente": 33696,
        "ViaPublica": "AVINGUDA BAC DE RODA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PRO-ARTS EVOLUCION CORPORAL SL",
        "CodigoCliente": 33762,
        "ViaPublica": "PLAÇA XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "FERMAY SERVICIOS GRAFICOS SL",
        "CodigoCliente": 33842,
        "ViaPublica": "ENERGIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "LUGUPELL, S.L",
        "CodigoCliente": 33863,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GELATS SOLER ARTES. ORXATA I TORRONS SL",
        "CodigoCliente": 34005,
        "ViaPublica": "?CARRER BRONZE"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "VISUFOC S.L.",
        "CodigoCliente": 34017,
        "ViaPublica": "FRANCESC TEIXIDO"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MARIA DOLORES PAGES",
        "CodigoCliente": 34023,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "OLIVER I BATLLE, S.A.",
        "CodigoCliente": 34180,
        "ViaPublica": "? DELS TREBALLADORS"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "OLIVER I BATLLE, S.A.",
        "CodigoCliente": 34180,
        "ViaPublica": "CARRETERA MATARO"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BWF ENVIROTEC SPAIN, S.L.U",
        "CodigoCliente": 34203,
        "ViaPublica": "AVINGUDA MARESME"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "DEJAVINS, S.L",
        "CodigoCliente": 34236,
        "ViaPublica": "ELECTRONICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CATALASPAIN S.L.",
        "CodigoCliente": 34388,
        "ViaPublica": "FRANCESC TEIXIDO"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CRITICAL EUROPE S.L.",
        "CodigoCliente": 34413,
        "ViaPublica": "PLAÇA XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SILCA KEY SISTEMS, S.A.",
        "CodigoCliente": 34438,
        "ViaPublica": "AVINGUDA CERDANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "FRANCISCO BALAGUER, S.A.",
        "CodigoCliente": 34456,
        "ViaPublica": "CARRER GRAN BRETANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GOTZO 3000 SL",
        "CodigoCliente": 34476,
        "ViaPublica": "CARRER HOLANDA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BOLSON LAB S.L.U.",
        "CodigoCliente": 34512,
        "ViaPublica": "CARRER ISIDRE NONELL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "EXYDE TECHFIRE, S.L.",
        "CodigoCliente": 34521,
        "ViaPublica": "CARRER SUISSA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "JULIA CANTOS AGUADO (BADA FESTA)",
        "CodigoCliente": 34714,
        "ViaPublica": "ELECTRONICA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "IRB SOL. FRIGORIFICAS E INDUSTRIALES S.L",
        "CodigoCliente": 34743,
        "ViaPublica": "PLAÇA VAPOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PNEUMATICA LEO 2018 S.L.",
        "CodigoCliente": 34745,
        "ViaPublica": "PLAÇA VAPOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PRIMER CANAL S.A",
        "CodigoCliente": 34806,
        "ViaPublica": "PLAÇA VAPOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "DANIEL MORON JABAL",
        "CodigoCliente": 34822,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "FABRICACION DE PIEZAS S.L.",
        "CodigoCliente": 34852,
        "ViaPublica": "CARRER ALFONS XII"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BACK WOOD 08, S.L.",
        "CodigoCliente": 34873,
        "ViaPublica": "XAROL"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BACK WOOD 08, S.L.",
        "CodigoCliente": 34873,
        "ViaPublica": "CARRER XAVIER NOGUES"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ONETT IMPORT, S.L.",
        "CodigoCliente": 34945,
        "ViaPublica": "CALLE DE LA MORA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ENCARNACION PINEDA MARTIN",
        "CodigoCliente": 35213,
        "ViaPublica": "CARRER ALEMANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "WURTH ESPAÑA, S.A",
        "CodigoCliente": 35293,
        "ViaPublica": "CARRER RAMON MARTI I ALSINA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "BRIGHT SUNSHINE PRODUCTION S.L.",
        "CodigoCliente": 35368,
        "ViaPublica": "CARRER GRAN BRETANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "KIT-TOOLS APLICACIONES MECANICAS S.L.",
        "CodigoCliente": 35743,
        "ViaPublica": "PLAÇA VAPOR"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "CUBEXPERT SL",
        "CodigoCliente": 35767,
        "ViaPublica": "ENERGIA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "ECR ENVIRONNEMENT ESP, S.L",
        "CodigoCliente": 35952,
        "ViaPublica": "CALLE DE LA MORA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "GRAFICAS SAVIR SA",
        "CodigoCliente": 36320,
        "ViaPublica": "? DEL PLASTIC"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "PROPA STUDIO S.L",
        "CodigoCliente": 36381,
        "ViaPublica": "CARRER GRAN BRETANYA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "SERFRIAIR S.L",
        "CodigoCliente": 37025,
        "ViaPublica": "CARRER SUISSA"
    },
    {
        "Municipio": "BADALONA",
        "RazonSocial": "MINJIU CHEN",
        "CodigoCliente": 37098,
        "ViaPublica": "CARRER MANUEL FERNANDEZ MARQUEZ"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "FERCON REPARACIONES S.L.",
        "CodigoCliente": "00593",
        "ViaPublica": "CALLE JUAN DE LA CIERVA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "TERRATS MEDICAL S.L",
        "CodigoCliente": "00625",
        "ViaPublica": "CALLE MOGODA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "PRODUCTOS ZVG ESPAÑA,S.A.U",
        "CodigoCliente": "02169",
        "ViaPublica": "CALLE MOGODA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "DIROMEC S.L.",
        "CodigoCliente": "02190",
        "ViaPublica": "CALLE PLA DELS AVELLANERS"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "AP PHOTO INDUSTRIES S.L",
        "CodigoCliente": "02370",
        "ViaPublica": "CALLE WATT"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "AP PHOTO INDUSTRIES S.L",
        "CodigoCliente": "02370",
        "ViaPublica": "RONDA SANTA MARIA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "MAINPLAS S.L.",
        "CodigoCliente": "04511",
        "ViaPublica": "CALLE COMADRAN"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "DELITAST, S.L.",
        "CodigoCliente": "04549",
        "ViaPublica": "CALLE GORCHS LLADO"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "DEMOFUSTA S. L.",
        "CodigoCliente": "05518",
        "ViaPublica": "CALLE LLOBATERES"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "ENLAZA PLATAFORMA BARCELONA, S.L",
        "CodigoCliente": 6170,
        "ViaPublica": "AVENIDA ARRAONA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "EBANISTERIA CARPINTERIA HNOS.",
        "CodigoCliente": 6332,
        "ViaPublica": "TORRENT TORTUGUER"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "LUBRITEC",
        "CodigoCliente": 6344,
        "ViaPublica": "AVENIDA PUIG DELS TUDONS"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "JORFASA TRUCKS, S.L.",
        "CodigoCliente": 6350,
        "ViaPublica": "AVENIDA TORRE D'EN MATEU"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "SURTI&BAR BARCELONA, S.L.",
        "CodigoCliente": 6482,
        "ViaPublica": "AVENIDA ARRAONA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "EQUIPFRED S.L.",
        "CodigoCliente": 6674,
        "ViaPublica": "AVENIDA ARRAONA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "CELULOSAS Y DERIVADOS DE LA TORRE SL",
        "CodigoCliente": 6799,
        "ViaPublica": "AVENIDA TORRE D'EN MATEU"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "TPF GETINSA EUROESTUDIOS, S.L.",
        "CodigoCliente": 6929,
        "ViaPublica": "CALLE GORCHS LLADO"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "TROQUELES PLUS-TRES, S.L.",
        "CodigoCliente": 7015,
        "ViaPublica": "RONDA SANTA MARIA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "DE RIJKE TRANSPORTE Y LOGISTICA ESP, S.L",
        "CodigoCliente": 7040,
        "ViaPublica": "CALLE GORCHS LLADO"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "EXPLATEC, S.L.",
        "CodigoCliente": 7062,
        "ViaPublica": "CALLE MARIE CURIE"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "CALORIFUGADOS ISOTECNIC",
        "CodigoCliente": 7086,
        "ViaPublica": "CALLE MONTURIOL"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "SISTEMA TRES DE AUTOMATIZACION Y TRANSP.",
        "CodigoCliente": 7153,
        "ViaPublica": "CALLE MOGODA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "SML GLOBAL SPAIN, S.L.",
        "CodigoCliente": "08172",
        "ViaPublica": "CALLE CAN MAGI"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "METINDU, S.L.",
        "CodigoCliente": "08802",
        "ViaPublica": "CALLE MARIE CURIE"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "ESCUELA HIPICA VALLÉS, S.L.",
        "CodigoCliente": "09693",
        "ViaPublica": "CALLE MONTSANT"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "WAANT & UNITEX SPAIN S.L.",
        "CodigoCliente": "09718",
        "ViaPublica": "CALLE BASILEA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "TRISAGA LG LOGISTICS, S.L.",
        "CodigoCliente": 10879,
        "ViaPublica": "AVENIDA TORRE D'EN MATEU"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "MONTAJES Y MANT. DEL VALLES S.L.U",
        "CodigoCliente": 12088,
        "ViaPublica": "TORRENT TORTUGUER"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "LUSIO EUROPE S.L.",
        "CodigoCliente": 12391,
        "ViaPublica": "TORRENT TORTUGUER"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "COMGAL 21 S.L.",
        "CodigoCliente": 12843,
        "ViaPublica": "CALLE ALTIMIRA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "GAES POWER TRANSMISSIONS, S.L.",
        "CodigoCliente": 33692,
        "ViaPublica": "CALLE COMADRAN"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "ENERGY STROM XXI, S.L.",
        "CodigoCliente": 33952,
        "ViaPublica": "CARRETERA BARCELONA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "TOT NET SERV.DE LIMPIEZAS GRUPO NETTO SA",
        "CodigoCliente": 34730,
        "ViaPublica": "CALLE CIRCUMVAL.LACIO"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "EVENTS AND TECHNOLOGY S.L.",
        "CodigoCliente": 35700,
        "ViaPublica": "AVENIDA SALVATELLA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "DURAN MOTORSPORT S.L.",
        "CodigoCliente": 36538,
        "ViaPublica": "CALLE ARQUIMEDES"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "MIXA PLESIER SL.",
        "CodigoCliente": 36627,
        "ViaPublica": "AVENIDA ARRAONA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "EMBALAJES ISENPACK S.L",
        "CodigoCliente": 36738,
        "ViaPublica": "CALLE GORCHS LLADO"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "SERV.DE IMPLANT.DE SISTEM.DE SEGURIDAD S",
        "CodigoCliente": 36943,
        "ViaPublica": "AVENIDA CASTELL DE BARBERA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "MADERAS IMAP SL",
        "CodigoCliente": 85071,
        "ViaPublica": "RONDA SANTA MARIA"
    },
    {
        "Municipio": "BARBERA DEL VALLES",
        "RazonSocial": "VARPE CONTROL DE PESO S.A.",
        "CodigoCliente": 85127,
        "ViaPublica": "PASSATGE ARRAONA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "GESTION DE RESIDUOS HOSPITALET, SL",
        "CodigoCliente": 1,
        "ViaPublica": "CALLE LLETRA C DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "MANAU, S.A.",
        "CodigoCliente": 99,
        "ViaPublica": "PASSEIG MARAGALL"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "NOVA POSHTA DELIVERY SL",
        "CodigoCliente": "00304",
        "ViaPublica": "CALLE SANT ADRIA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "CARPINTERIA ANDY, S.L.",
        "CodigoCliente": "00463",
        "ViaPublica": "PLAZA NOU"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "NEUMATICOS SOLEDAD, SL",
        "CodigoCliente": "00857",
        "ViaPublica": "CALLE NUMERO 3 DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "DEPOT ZONA FRANCA S.A",
        "CodigoCliente": "00938",
        "ViaPublica": "CALLE F ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SEMILLAS FITO, S.A.",
        "CodigoCliente": 1398,
        "ViaPublica": "CALLE SELVA DE MAR"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "FAUS, S.A. CONSTRUCCIONES Y SERVICI",
        "CodigoCliente": 1911,
        "ViaPublica": "CALLE DIPUTACIO"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "FINESTRES MACRISAL, S.L.",
        "CodigoCliente": 2327,
        "ViaPublica": "CALLE CA N'OLIVA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "ACTIVIDADES AUX. Y SERVICIOS F",
        "CodigoCliente": 2421,
        "ViaPublica": "AVENIDA PARC LOGISTIC"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "DISET, S.A",
        "CodigoCliente": 2461,
        "ViaPublica": "CALLE LLETRA C DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "INTERFACOM, S.A.",
        "CodigoCliente": 2467,
        "ViaPublica": "TORRENT DE L' ESTADELLA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "HAPPICH RIU S.A.",
        "CodigoCliente": 2619,
        "ViaPublica": "CALLE CARACAS"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "BUTRANSA,S.A",
        "CodigoCliente": 3192,
        "ViaPublica": "CALLE LLETRA L DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "MARTIN E HIJOS, S.L.",
        "CodigoCliente": "04024",
        "ViaPublica": "CALLE NUMERO 22"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SERVEIS INTEG. RESIDUS DE CATALUNYA, S.L",
        "CodigoCliente": 6038,
        "ViaPublica": "?CALLE E"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SERVICIOS LOGISTICOS DEL PRAT",
        "CodigoCliente": 6091,
        "ViaPublica": "CALLE LLETRA D DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SERVICIOS LOGISTICOS DEL PRAT",
        "CodigoCliente": 6091,
        "ViaPublica": "CALLE NUMERO 62 DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "MADERAS SANTA COLOMA S.A.",
        "CodigoCliente": 6111,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "RODI METRO, S.L.U.",
        "CodigoCliente": 6114,
        "ViaPublica": "CALLE LLETRA B DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "COCINAS MODULARES DE BARCELONA",
        "CodigoCliente": 6153,
        "ViaPublica": "CALLE CIUTAT D'ASUNCION"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "MADERAS SAN PASCUAL, S.L.",
        "CodigoCliente": 6175,
        "ViaPublica": "CALLE CIUTAT D'ASUNCION"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "ESCAYOLAS BEDMAR, S.L.",
        "CodigoCliente": 6182,
        "ViaPublica": "CALLE JOSEP PLA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "TAPISSERIA MELVI S.L.",
        "CodigoCliente": 6269,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "ALBEDO  DESIGN S.L.",
        "CodigoCliente": 6355,
        "ViaPublica": "CALLE JOAN D'AUSTRIA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "PROACTIV SL.",
        "CodigoCliente": 6722,
        "ViaPublica": "CALLE BADAJOZ"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "XAVIER ESTEVA PELEGRIN",
        "CodigoCliente": 6745,
        "ViaPublica": "PASSEIG ENRIC SANCHIS"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "JOSE DALMAU S.A.",
        "CodigoCliente": 6793,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "CERVECEROS GARAGE, S.L.",
        "CodigoCliente": 6861,
        "ViaPublica": "CALLE SANT ADRIA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "AISLAMIENTO Y ESTANQUEIDAD ERICA",
        "CodigoCliente": 6899,
        "ViaPublica": "CALLE MARROC"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "INVESTIGAC Y DESARROLL DE COSMETICOS, SA",
        "CodigoCliente": 6930,
        "ViaPublica": "CALLE COSTA BRAVA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "CALDERERIA RAMÓN NAVES, SL.",
        "CodigoCliente": 6993,
        "ViaPublica": "CALLE PERE IV"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "BELCAN BOLLERIA TRADICIONAL",
        "CodigoCliente": 7069,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "INDISSOLUBLE S.L.",
        "CodigoCliente": 7102,
        "ViaPublica": "CALLE PUJADES"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "IUL INSTRUMENTS, S.A.",
        "CodigoCliente": 7131,
        "ViaPublica": "CALLE CIUTAT D'ASUNCION"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "RENOVACAR AUTOMOCION, S.L.",
        "CodigoCliente": 7191,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "REBECA SANCHEZ",
        "CodigoCliente": "07654",
        "ViaPublica": "CALLE LEPANT"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "TRANS MARTEL MANTENIMIENTS, S.L.",
        "CodigoCliente": "07877",
        "ViaPublica": "CALLE MARACAIBO"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "PAER PROYECTOS INTEGRALES S.L",
        "CodigoCliente": "07967",
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "VAPORES SUARDIAZ MEDITERRANEO, S.A.",
        "CodigoCliente": "08012",
        "ViaPublica": "CALLE NUMERO 61 DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "ETIQUETAS ZAHS S.A.",
        "CodigoCliente": "08063",
        "ViaPublica": "CALLE TUCUMAN"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "PEREZ GONZALEZ MANUEL",
        "CodigoCliente": "08446",
        "ViaPublica": "CALLE BINEFAR"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "INNOSPEC PERFORMANCE CHEMICALS SPAIN,S.L",
        "CodigoCliente": "08475",
        "ViaPublica": "CALLE NUMERO 43 DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "ASSOLIM ALIMENTARIA S.L",
        "CodigoCliente": "08727",
        "ViaPublica": "VIA TRAJANA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "RECICLATGE VERD, S.L.",
        "CodigoCliente": 9160,
        "ViaPublica": "CALLE LLETRA C DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "PROGRASA S.L.",
        "CodigoCliente": "09331",
        "ViaPublica": "VIA TRAJANA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SABICO SEGURIDAD , S.A.",
        "CodigoCliente": "09383",
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "ESTACIO SERVEI CARRER 3, S.L.",
        "CodigoCliente": "09612",
        "ViaPublica": "CALLE NUMERO 29"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "CONSTRAULA ENGINYERIA I OBRES S.A.",
        "CodigoCliente": 10215,
        "ViaPublica": "CALLE CARACAS"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "UTE CAIXARESEARH",
        "CodigoCliente": 10597,
        "ViaPublica": "CALLE TEODOR ROVIRALTA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "REXLAN S.L.",
        "CodigoCliente": 10699,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "51 RELABEL, S.L",
        "CodigoCliente": 11057,
        "ViaPublica": "CALLE NUMERO 2 DE LA ZONA FRANCA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "ALONSO ARCE HECTOR",
        "CodigoCliente": 11152,
        "ViaPublica": "CALLE PARE PEREZ DEL PULGAR"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "FUNDACIO PRIVADA FORMACIO I TREBALL",
        "CodigoCliente": 11168,
        "ViaPublica": "CALLE LLULL"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "MEDIACOMPLEX DIAGONAL 177 S.L.U",
        "CodigoCliente": 11190,
        "ViaPublica": "AVENIDA DIAGONAL"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "FORN GUICH ESCOLANO I SUCESSORS SL",
        "CodigoCliente": 11299,
        "ViaPublica": "PASSEIG VERNEDA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "PLASTICS NOVOPLASTIC S.A.",
        "CodigoCliente": 11375,
        "ViaPublica": "PASSEIG VERNEDA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "EUNASA ELECTRÓNICA, S.L.",
        "CodigoCliente": 11423,
        "ViaPublica": "CALLE POTOSI"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SOLARMENTE SL",
        "CodigoCliente": 11460,
        "ViaPublica": "CALLE MARROC"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SOLDADURA Y CONS.  METALICAS FUENTES S.L",
        "CodigoCliente": 11854,
        "ViaPublica": "CALLE FRA JUNIPER SERRA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SEREMEX PCI S.L.",
        "CodigoCliente": 11872,
        "ViaPublica": "CALLE FRA JUNIPER SERRA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SALUTE MISSION CRITICAL SL",
        "CodigoCliente": 11924,
        "ViaPublica": "CALLE L' ACER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SANTAFIXIE GROUP SL",
        "CodigoCliente": 12244,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "DAIBA DISSENY SL",
        "CodigoCliente": 12958,
        "ViaPublica": "CALLE FRA JUNIPER SERRA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "UTE LYMET-MELFOSUR BARCELONA SUR",
        "CodigoCliente": 33598,
        "ViaPublica": "CALLE PERU"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "LA BRUIXA NETEJES GENERALS I MANTEN. SL",
        "CodigoCliente": 33606,
        "ViaPublica": "CALLE FOC"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "LIFENG TRADE, S.L",
        "CodigoCliente": 33902,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SALSA WOK SL",
        "CodigoCliente": 33956,
        "ViaPublica": "RAMBLA PRIM"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "CONSTRUCCION SECA FALSOS TECHOS Y AISLAM",
        "CodigoCliente": 34083,
        "ViaPublica": "CALLE L' ALMIRALL OKENDO"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "ASSOCIACIÓ  FAMÍLIES BORDETA SANT MEDIR",
        "CodigoCliente": 34159,
        "ViaPublica": "CALLE GAVA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "TOT AMB FUSTA VALLS I DECORACIO SL.",
        "CodigoCliente": 34228,
        "ViaPublica": "CALLE FRA JUNIPER SERRA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "BLUE WAY SACH, S.L",
        "CodigoCliente": 34431,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SALAONS MORENO, S.A",
        "CodigoCliente": 34478,
        "ViaPublica": "CALLE COSTA BRAVA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "MECANIZADOS CAÑADA S.L.",
        "CodigoCliente": 34616,
        "ViaPublica": "CALLE FRA JUNIPER SERRA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "ALDI MASQUEFA SUPERMERCADOS S.L.U",
        "CodigoCliente": 34782,
        "ViaPublica": "CALLE RIERA ALTA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "ALDI MASQUEFA SUPERMERCADOS S.L.U",
        "CodigoCliente": 34782,
        "ViaPublica": "CALLE L' ESCORIAL"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "PERELLO 1898 SL",
        "CodigoCliente": 34825,
        "ViaPublica": "TORRENT DE L' ESTADELLA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "METAWAY NEGOCIOS, S.L.U",
        "CodigoCliente": 34885,
        "ViaPublica": "GRAN VIA DE LES CORTS CATALANES"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "CANDAM TECHNOLOGIES, S.L.",
        "CodigoCliente": 34895,
        "ViaPublica": "CALLE SANT ADRIA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "TALLER DE MODELAJE BERNARDO BELMONTE S.L",
        "CodigoCliente": 35593,
        "ViaPublica": "CALLE FRA JUNIPER SERRA"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "MANIPULADOS MARBELLA SL",
        "CodigoCliente": 35869,
        "ViaPublica": "PASSEIG ENRIC SANCHIS"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "EMICAR BCN S.C.P.",
        "CodigoCliente": 36492,
        "ViaPublica": "CALLE TERÇ MARE DEU MONTSERRAT"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "SERVEI TROQUELES POBLE NOU S.L",
        "CodigoCliente": 85074,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BARCELONA",
        "RazonSocial": "KEBAB INN CASH & CARRY, S.L.",
        "CodigoCliente": 85085,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "BESCANO",
        "RazonSocial": "SUMINIST.I SERV.VETERINARIS GIRONA SL",
        "CodigoCliente": 12206,
        "ViaPublica": "CARRER RERAMURS"
    },
    {
        "Municipio": "BESCANO",
        "RazonSocial": "AGROGIRONES DALMAU SL",
        "CodigoCliente": 12267,
        "ViaPublica": "CARRER CATERINA ALBERT"
    },
    {
        "Municipio": "BESCANO",
        "RazonSocial": "APLIBOX SL",
        "CodigoCliente": 12546,
        "ViaPublica": "CARRER WILLY BRANDT"
    },
    {
        "Municipio": "BESCANO",
        "RazonSocial": "IMPROS TECNICS SL",
        "CodigoCliente": 13050,
        "ViaPublica": "CARRER WILLY BRANDT"
    },
    {
        "Municipio": "BESCANO",
        "RazonSocial": "EAT YOUR LIFTING BOX SL",
        "CodigoCliente": 13224,
        "ViaPublica": "CARRER WILLY BRANDT"
    },
    {
        "Municipio": "BESCANO",
        "RazonSocial": "BAR RESTAURANT MONTFULLA SL",
        "CodigoCliente": 36448,
        "ViaPublica": "CARRER MERÇE RODOREDA"
    },
    {
        "Municipio": "BLANES",
        "RazonSocial": "CONCA DE LA TORDERA S.C.C.L.",
        "CodigoCliente": 12880,
        "ViaPublica": "PRIMER DE MAIG"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "THE BIKE VILLAGE S.L.",
        "CodigoCliente": "09440",
        "ViaPublica": "CALLE LES CORTS"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "MANIPULADOS PLASTICOS SANTIGA S.L.",
        "CodigoCliente": "09469",
        "ViaPublica": "CALLE CAMI DEL MIG"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "CLAVELL FORMATGERS, S.L.",
        "CodigoCliente": "09536",
        "ViaPublica": "CALLE LES CORTS"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "CONOVER PLUS S.L.",
        "CodigoCliente": "09616",
        "ViaPublica": "PASSATGE LA CAROLA"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "SEMOT-SEMAE 33,S.L.",
        "CodigoCliente": "09900",
        "ViaPublica": "RONDA NARCIS MONTURIOL"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "GEMINI COMPOSITES, S.L.",
        "CodigoCliente": 10516,
        "ViaPublica": "CALLE CAMI DEL MIG"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "ITALFINE FOOD, S.L.",
        "CodigoCliente": 10613,
        "ViaPublica": "CALLE CAMI DEL MIG"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "MAQUINARIA VIÑAS BAKERY & PASTRY EQUIPAL",
        "CodigoCliente": 10645,
        "ViaPublica": "RONDA NARCIS MONTURIOL"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "AVELLANET AMBIENTS, S.L.",
        "CodigoCliente": 10754,
        "ViaPublica": "CALLE CAMI DEL MIG"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "INDUSTRIAS SEYER 2000 S.L.",
        "CodigoCliente": 10759,
        "ViaPublica": "CARRETERA ARGENTONA"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "IBERPLATA ESTIL SL",
        "CodigoCliente": 11087,
        "ViaPublica": "PASSATGE LA CAROLA"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "IBERPLATA ESTIL SL",
        "CodigoCliente": 11087,
        "ViaPublica": "CALLE CAMI DEL MIG"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "CERCONS BCN CONST.Y SERVICIOS, S.L.",
        "CodigoCliente": 12980,
        "ViaPublica": "CALLE JOSEP TRUETA"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "DISPLANIC, S.L",
        "CodigoCliente": 34740,
        "ViaPublica": "CALLE CAMI DEL MIG"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "VP365, S.L.",
        "CodigoCliente": 34804,
        "ViaPublica": "CALLE CAMI DEL MIG"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "MEDITERRANEAN YACHT CARPENTRY S.L.",
        "CodigoCliente": 35036,
        "ViaPublica": "RONDA NARCIS MONTURIOL"
    },
    {
        "Municipio": "CABRERA DE MAR",
        "RazonSocial": "FIBRA CABRERA SL",
        "CodigoCliente": 85109,
        "ViaPublica": "CALLE CAMI DEL MIG"
    },
    {
        "Municipio": "CABRILS",
        "RazonSocial": "ETIQUETAS ANVER S.L.",
        "CodigoCliente": "09510",
        "ViaPublica": "ZONA INDUSTRIAL CARRER A"
    },
    {
        "Municipio": "CABRILS",
        "RazonSocial": "INSTRUMENTS J.BOT SA",
        "CodigoCliente": 11132,
        "ViaPublica": "ZONA INDUSTRIAL CARRER A"
    },
    {
        "Municipio": "CABRILS",
        "RazonSocial": "IRTA CABRILS",
        "CodigoCliente": 11274,
        "ViaPublica": "CARRETERA CABRILS"
    },
    {
        "Municipio": "CABRILS",
        "RazonSocial": "CULTIVOS  LAS RESCLOSAS, S.L.",
        "CodigoCliente": 11782,
        "ViaPublica": "CALLE LA RESCLOSA"
    },
    {
        "Municipio": "CALDES DE MONTBUI",
        "RazonSocial": "SOLER TESELEN S.L.",
        "CodigoCliente": 11380,
        "ViaPublica": "CALLE JOSEP BONASTRE"
    },
    {
        "Municipio": "CALDES DE MONTBUI",
        "RazonSocial": "ELECFRED 21 S.L.",
        "CodigoCliente": 34750,
        "ViaPublica": "CALLE BORGES BLANQUES"
    },
    {
        "Municipio": "CALDES DE MONTBUI",
        "RazonSocial": "HERMANOS HIERRO 2022 SL",
        "CodigoCliente": 35863,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "CAMPLLONG",
        "RazonSocial": "ACCUDOEXPRESS S.L.U.",
        "CodigoCliente": 34109,
        "ViaPublica": "CARRER DE LA RIERA"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "VOLGA 2013 S.L.",
        "CodigoCliente": "04366",
        "ViaPublica": "AVENIDA CAN CASTELLS"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "LIRPA SILICONES S.L.",
        "CodigoCliente": "07795",
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "MAQDE MAQUINARIA SL",
        "CodigoCliente": "08429",
        "ViaPublica": "AVENIDA CAN CASTELLS"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "CARLES VILLAS CLARAS CASTELLS",
        "CodigoCliente": 10389,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "RANCH COMETAL SL",
        "CodigoCliente": 10457,
        "ViaPublica": "CALLE JOAN DE LA CIERVA"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "GRAFICAS Y FORMULARIOS DEL VALLES SL",
        "CodigoCliente": 10865,
        "ViaPublica": "CALLE ISAAC PERAL"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "ENVERNISSATS I LACATS CUEVAS SL",
        "CodigoCliente": 34239,
        "ViaPublica": "CALLE BARCELONA"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "ESLINGAS Y EMBALAJES, S.L",
        "CodigoCliente": 34272,
        "ViaPublica": "CALLE BARCELONA"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "MERINO SAEZ, VICTOR",
        "CodigoCliente": 34299,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "WCLOC ESPAÑA SL",
        "CodigoCliente": 35053,
        "ViaPublica": "CALLE CARLES BUHIGAS"
    },
    {
        "Municipio": "CANOVELLES",
        "RazonSocial": "MIRAS VILLALBA, SL",
        "CodigoCliente": 37024,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "CANYELLES",
        "RazonSocial": "WORLD ELASTOMERS TRADE SL",
        "CodigoCliente": 36634,
        "ViaPublica": "CALLE DELS CIRES"
    },
    {
        "Municipio": "CARDEDEU",
        "RazonSocial": "INNOVIA COPTALIA, SAU",
        "CodigoCliente": 10501,
        "ViaPublica": "CARRETERA CARDEDEU A LA ROCA"
    },
    {
        "Municipio": "CARDEDEU",
        "RazonSocial": "DPI'S SUMINISTROS DIGITALES S.L.",
        "CodigoCliente": 10655,
        "ViaPublica": "CALLE DE LA TORRASSA"
    },
    {
        "Municipio": "CARDEDEU",
        "RazonSocial": "MES BO, S.L",
        "CodigoCliente": 10701,
        "ViaPublica": "CALLE AMADEU VIVES"
    },
    {
        "Municipio": "CARDEDEU",
        "RazonSocial": "MARKOIL SAU",
        "CodigoCliente": 11760,
        "ViaPublica": "CALLE PINS ROSES"
    },
    {
        "Municipio": "CARDEDEU",
        "RazonSocial": "JONATAN VIDAL HERMOSO",
        "CodigoCliente": 11792,
        "ViaPublica": "CARRETERA CARDEDEU A LA ROCA"
    },
    {
        "Municipio": "CARDEDEU",
        "RazonSocial": "AVIXANDRI, S.L.",
        "CodigoCliente": 12589,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "CASSÀ",
        "RazonSocial": "NESTOR SANDAGORDA DIAZ",
        "CodigoCliente": 13054,
        "ViaPublica": "CARRER DE LA SELVA"
    },
    {
        "Municipio": "CASSÀ",
        "RazonSocial": "CONSTRUCCIONS INOXIDABLE REPISO S.L.",
        "CodigoCliente": 13081,
        "ViaPublica": "CARRER DE LA CERDANYA"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "VENDING SABADELL, S.L.",
        "CodigoCliente": "00022",
        "ViaPublica": "CALLE SEGARRA"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "CACHIMAN GRAFIC, S.L.",
        "CodigoCliente": 2557,
        "ViaPublica": "CALLE PRIORAT"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "SAVA LOGISTIC S.R.L",
        "CodigoCliente": 6518,
        "ViaPublica": "CALLE DE L' EMPORDA"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "MANUFACTURAS TEXTILES RUTEX, S",
        "CodigoCliente": 6943,
        "ViaPublica": "CALLE DE CERVERA"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "JT1 ELECTRONICA, S.L.",
        "CodigoCliente": 6990,
        "ViaPublica": "CALLE SOLSONES"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "JOPAC DECORACIO S.L.",
        "CodigoCliente": 7014,
        "ViaPublica": "CALLE MONTSIA"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "LASER CASTELLAR, S.L.",
        "CodigoCliente": "08626",
        "ViaPublica": "CALLE DE MANRESA"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "ECO REPAL VALLES, S.L.U",
        "CodigoCliente": "09870",
        "ViaPublica": "CALLE GARRIGUES"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "FRED COLOR SL",
        "CodigoCliente": 11908,
        "ViaPublica": "CALLE DE L' EMPORDA"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "GTNPRESS S.L",
        "CodigoCliente": 13071,
        "ViaPublica": "CALLE CAPCIR"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "FIRE CONSULT, S.L.",
        "CodigoCliente": 33830,
        "ViaPublica": "CALLE BERGUEDA"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "WCLOC ESPAÑA SL",
        "CodigoCliente": 35053,
        "ViaPublica": "CALLE MONTSIA"
    },
    {
        "Municipio": "CASTELLAR DEL VALLES",
        "RazonSocial": "BRINDISA INT, SLU P.P",
        "CodigoCliente": 35196,
        "ViaPublica": "CALLE SOLSONES"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "IROSTEL S.L",
        "CodigoCliente": "00706",
        "ViaPublica": "CALLE MOTORS"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "BAIX MODUL'S S.L",
        "CodigoCliente": "02382",
        "ViaPublica": "CALLE TALLERS"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "GESTINMÉDICA",
        "CodigoCliente": "04937",
        "ViaPublica": "CALLE COMUNICACIONS"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "PARKMOBEL INDUSTRIAS S.L",
        "CodigoCliente": 6149,
        "ViaPublica": "CALLE CIRCUMVAL.LACIO"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "SICILIA PLASTICOS, S.L.",
        "CodigoCliente": 6220,
        "ViaPublica": "CALLE MOTORS"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "TECNICAS EN VENTILACION Y EXTR",
        "CodigoCliente": 6259,
        "ViaPublica": "CALLE OPTICA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "ERKE S.A",
        "CodigoCliente": 6844,
        "ViaPublica": "CALLE DE LA TREPADELLA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "CHIEMIVALL S.L",
        "CodigoCliente": 7035,
        "ViaPublica": "CALLE MECANICA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "TOI TOI SANITARIOS MOVILES S.A",
        "CodigoCliente": 7051,
        "ViaPublica": "CALLE TELEMATICA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "AQUA FILTRACION Y DOSIFICACION, S.A",
        "CodigoCliente": 7088,
        "ViaPublica": "CALLE DEL ROMANI"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "TRANSPORTES FRIGORIFICOS PROF. S.L.",
        "CodigoCliente": 7173,
        "ViaPublica": "CALLE ZENC"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "FERRETERIA Y PRENSAS, S.A.",
        "CodigoCliente": "07718",
        "ViaPublica": "CALLE ELECTRICITAT"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "SURFAT, S.A",
        "CodigoCliente": "08682",
        "ViaPublica": "CALLE DE LA FARIGOLA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "PUNTO INYECCION PLASTIC, S.L.",
        "CodigoCliente": "09464",
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "PROCOM SA",
        "CodigoCliente": "09964",
        "ViaPublica": "CALLE DEL ROMANI"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "PATATAS POU, S.L.",
        "CodigoCliente": 10786,
        "ViaPublica": "CALLE DEL ROMANI"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "RECACOR, S.A.",
        "CodigoCliente": 10874,
        "ViaPublica": "CALLE DE LA TREPADELLA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "PETKO ANGELOV SL",
        "CodigoCliente": 10916,
        "ViaPublica": "CALLE FERRALLA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "DAVIDEVA BUS SL",
        "CodigoCliente": 11201,
        "ViaPublica": "CALLE OPTICA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "VIDREBANY SL",
        "CodigoCliente": 11541,
        "ViaPublica": "CALLE ARTESANS"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "NEW TECH CARBON, S.L.",
        "CodigoCliente": 11791,
        "ViaPublica": "CALLE MECANICA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "NEWRISE PROPERTIES S.L.",
        "CodigoCliente": 11880,
        "ViaPublica": "CALLE ACUSTICA"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "FERRETERIA IND. A. ESQUERDA SL",
        "CodigoCliente": 12565,
        "ViaPublica": "CALLE DEL ROMANI"
    },
    {
        "Municipio": "CASTELLBISBAL",
        "RazonSocial": "EVA MARQUEZ GONZALEZ",
        "CodigoCliente": 34189,
        "ViaPublica": "CALLE NORD"
    },
    {
        "Municipio": "CASTELLDEFELS",
        "RazonSocial": "BLANCO CERRAJERIA RF 1973 S.L",
        "CodigoCliente": "04285",
        "ViaPublica": "PASSEIG FERROCARRIL"
    },
    {
        "Municipio": "CASTELLDEFELS",
        "RazonSocial": "FELSCAR, S.L. (SERVEI OFICIAL",
        "CodigoCliente": 6178,
        "ViaPublica": "PASSEIG FERROCARRIL"
    },
    {
        "Municipio": "CASTELLDEFELS",
        "RazonSocial": "TALLERS SALDAVI S.L.",
        "CodigoCliente": 6186,
        "ViaPublica": "RONDA CAN RABADA"
    },
    {
        "Municipio": "CASTELLDEFELS",
        "RazonSocial": "LAYEGAS, S.L.",
        "CodigoCliente": 6923,
        "ViaPublica": "CALLE MIQUEL SERVET"
    },
    {
        "Municipio": "CASTELLDEFELS",
        "RazonSocial": "DACHENG FOODS S.L.",
        "CodigoCliente": "08278",
        "ViaPublica": "CALLE MOLINOT"
    },
    {
        "Municipio": "CASTELLDEFELS",
        "RazonSocial": "PERI S.A.U",
        "CodigoCliente": "08602",
        "ViaPublica": "CALLE GALILEO"
    },
    {
        "Municipio": "CASTELLDEFELS",
        "RazonSocial": "SACMA MEDIAMBIENTAL SL",
        "CodigoCliente": 36673,
        "ViaPublica": "PORT GINESTA"
    },
    {
        "Municipio": "CERDANYOLA DEL VALLES",
        "RazonSocial": "RAMON PAR S.A.",
        "CodigoCliente": "00551",
        "ViaPublica": "CALLE SANTA ANNA"
    },
    {
        "Municipio": "CERDANYOLA DEL VALLES",
        "RazonSocial": "JG GROUP BURO, S.A.",
        "CodigoCliente": "07295",
        "ViaPublica": "CALLE SANTA ANNA"
    },
    {
        "Municipio": "CERDANYOLA DEL VALLES",
        "RazonSocial": "CARSA COMERCIAL AGRICOLA RIOJANA S.A.",
        "CodigoCliente": "08318",
        "ViaPublica": "CALLE CAN MITJANS"
    },
    {
        "Municipio": "CERDANYOLA DEL VALLES",
        "RazonSocial": "CONSTRUCCIONES METÁLICAS TANESA S.L.",
        "CodigoCliente": "09714",
        "ViaPublica": "CALLE MONTCLAR"
    },
    {
        "Municipio": "CERDANYOLA DEL VALLES",
        "RazonSocial": "INVERSIONS CERAMIQUES S.L.",
        "CodigoCliente": 10382,
        "ViaPublica": "LLOC CAN CODONYERS"
    },
    {
        "Municipio": "CERDANYOLA DEL VALLES",
        "RazonSocial": "GESTION DEPORTIVA SF DIEDRI S.L. U.T.E.",
        "CodigoCliente": 13145,
        "ViaPublica": "CALLE RIU SEC"
    },
    {
        "Municipio": "CERDANYOLA DEL VALLES",
        "RazonSocial": "TOT NET SERV.DE LIMPIEZAS GRUPO NETTO SA",
        "CodigoCliente": 34730,
        "ViaPublica": "CALLE ELS BOTERS"
    },
    {
        "Municipio": "CERVELLO",
        "RazonSocial": "SUMINISTROS LOGA, S.L.",
        "CodigoCliente": "05096",
        "ViaPublica": "CALLE MASET DEL GRAU"
    },
    {
        "Municipio": "CERVELLO",
        "RazonSocial": "COMPLEPARK, S.L.",
        "CodigoCliente": 6995,
        "ViaPublica": "CALLE JOAN TORRUELLA I URPINA"
    },
    {
        "Municipio": "CERVELLO",
        "RazonSocial": "BANDAS INDUSTRIALES, S.A.",
        "CodigoCliente": 7038,
        "ViaPublica": "?ULL DE LLEBRE"
    },
    {
        "Municipio": "CERVELLO",
        "RazonSocial": "LAREN LOGISTICA, S.L.",
        "CodigoCliente": 7049,
        "ViaPublica": "CALLE COMAGRUA"
    },
    {
        "Municipio": "CERVELLO",
        "RazonSocial": "CARVANBUS, S.L",
        "CodigoCliente": 10517,
        "ViaPublica": "CALLE JOAN TORRUELLA I URPINA"
    },
    {
        "Municipio": "CERVELLO",
        "RazonSocial": "GAROVIAL, S.L.",
        "CodigoCliente": 33684,
        "ViaPublica": "CALLE MASET DEL GRAU"
    },
    {
        "Municipio": "CERVELLO",
        "RazonSocial": "DESING & PRODUCTION ASGARD, S.L.",
        "CodigoCliente": 33931,
        "ViaPublica": "?ULL DE LLEBRE"
    },
    {
        "Municipio": "CERVELLO",
        "RazonSocial": "LOFES 90, S.L",
        "CodigoCliente": 34994,
        "ViaPublica": "?ULL DE LLEBRE"
    },
    {
        "Municipio": "CERVELLO",
        "RazonSocial": "AMIGOS DEL TE, S.L.",
        "CodigoCliente": 37053,
        "ViaPublica": "CARRER XAREL.LO"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "VARIOTEX GLOBAL SL",
        "CodigoCliente": "00396",
        "ViaPublica": "CALLE SANT FERRAN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "VILARNAUCART, S.L.",
        "CodigoCliente": "00422",
        "ViaPublica": "CADIS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "SUCESORES DE W. HOFMANN",
        "CodigoCliente": "02052",
        "ViaPublica": "CALLE SANT FERRAN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "PANLAB, S.L.U",
        "CodigoCliente": 2445,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MERCAPORTA PUERTAS Y MOLDURAS,",
        "CodigoCliente": 2446,
        "ViaPublica": "PASSEIG FERROCARRILS CATALANS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "TROFEOS FRANCE SPORT S.L",
        "CodigoCliente": 2449,
        "ViaPublica": "CALLE CROM"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MUEBLES ARASANZ, S.A.",
        "CodigoCliente": 2460,
        "ViaPublica": "CALLE COBALT"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "PINTURAS CORBACHO, S.L.",
        "CodigoCliente": 2513,
        "ViaPublica": "CALLE TREBALL"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "RNA VIBRANT S.A.",
        "CodigoCliente": 2602,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "VALLE INDUSTRIAL S.A.",
        "CodigoCliente": "02764",
        "ViaPublica": "CARRETERA PRAT"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "VANGUARD LOGISTICS SERVICES S.A.",
        "CodigoCliente": "03340",
        "ViaPublica": "CALLE SILICI"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "CATALA PRINTING EMOTIONS SL",
        "CodigoCliente": "04057",
        "ViaPublica": "CALLE SANT FERRAN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "PLASTICOS FACA, S.A.",
        "CodigoCliente": "04896",
        "ViaPublica": "AVENIDA FAMA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ELECTROAUTO BARRAS, S.L.",
        "CodigoCliente": 6000,
        "ViaPublica": "CALLE MARINA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "BCN CONGRESS, S.L.",
        "CodigoCliente": 6008,
        "ViaPublica": "ALACANT"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "BARTEC, S.A.",
        "CodigoCliente": 6031,
        "ViaPublica": "CARRETERA HOSPITALET"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "CONSTRUCCIONES CAMUÑAS S.L.",
        "CodigoCliente": 6097,
        "ViaPublica": "CADIS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "CORNEPLAS S.L.",
        "CodigoCliente": 6098,
        "ViaPublica": "PASSATGE PLASMICA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "CUALDE LOGISTICS S.L.U.",
        "CodigoCliente": 6100,
        "ViaPublica": "CALLE SILICI"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MECALUX S.A.",
        "CodigoCliente": 6106,
        "ViaPublica": "CALLE SILICI"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MECALUX S.A.",
        "CodigoCliente": 6106,
        "ViaPublica": "PASSEIG FERROCARRILS CATALANS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MECALUX S.A.",
        "CodigoCliente": 6106,
        "ViaPublica": "AVENIDA MARESME"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "HELCARINOX S.L.",
        "CodigoCliente": 6147,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "COCIRONDAS S.L.",
        "CodigoCliente": 6166,
        "ViaPublica": "CALLE SILICI"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "METALURGICA ROES, S.A",
        "CodigoCliente": 6195,
        "ViaPublica": "PASSEIG FERROCARRILS CATALANS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ARADILLA SOLUCIONES INDUSTRIALES, S.L.",
        "CodigoCliente": 6201,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "GOENAGA LLEVOT, FRANCISCO",
        "CodigoCliente": 6248,
        "ViaPublica": "AVENIDA FAMA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "FOIMPEX, S.L.",
        "CodigoCliente": 6436,
        "ViaPublica": "CALLE CROM"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "PRESSING IMPRESSIO DIGITAL, S.",
        "CodigoCliente": 6444,
        "ViaPublica": "AVENIDA MARESME"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "AGENCIA DE TRANSPORTES SALVADO",
        "CodigoCliente": 6451,
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "SERVICES BTM CERVECERA",
        "CodigoCliente": 6510,
        "ViaPublica": "CALLE COBALT"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "FOC I SEGURETAT, S.L.",
        "CodigoCliente": 6522,
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "AIRUN SERVEIS CULTURALS, S.L.",
        "CodigoCliente": 6546,
        "ViaPublica": "HUELVA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "TALLERES CARRINOX, S.L.",
        "CodigoCliente": 6660,
        "ViaPublica": "HUELVA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ASYMOSA, S.L.",
        "CodigoCliente": 6661,
        "ViaPublica": "CADIS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "GEOTECHNIK PRODUCTS, S.L.",
        "CodigoCliente": 6670,
        "ViaPublica": "CADIS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "BOMBAS LETRIN, S.L.",
        "CodigoCliente": 6683,
        "ViaPublica": "CALLE ALCALA GALIANO"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "INSTALACIONES  INCOFRED S.L.",
        "CodigoCliente": 6723,
        "ViaPublica": "CADIS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "TRATAMIENTOS GARBI, S.L.",
        "CodigoCliente": 6725,
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "KSB  ITUR SPAIN, S.A.",
        "CodigoCliente": 6771,
        "ViaPublica": "CALLE COBALT"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MATERIALS I SUMINISTRES PER AL",
        "CodigoCliente": 6773,
        "ViaPublica": "PASSEIG FERROCARRILS CATALANS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "PROEMIO, S.L.",
        "CodigoCliente": 6901,
        "ViaPublica": "AVENIDA FAMA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "COMERCIAL SANCO S.A.",
        "CodigoCliente": 6998,
        "ViaPublica": "AVENIDA SANT FERRAN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MECANIZADOS COP, S.L.",
        "CodigoCliente": 7019,
        "ViaPublica": "CALLE TREBALL"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "RICOCHET SPAIN,S.L",
        "CodigoCliente": 7020,
        "ViaPublica": "AVENIDA SANT FERRAN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MADERAS DEL ALTO URGEL, S.A.",
        "CodigoCliente": 7029,
        "ViaPublica": "CALLE TIRSO DE MOLINA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MECOS IBERICA, S.L.",
        "CodigoCliente": 7056,
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MONTEBARCE, S.L.",
        "CodigoCliente": 7080,
        "ViaPublica": "CALLE TIRSO DE MOLINA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ARTIC S.A.",
        "CodigoCliente": "07706",
        "ViaPublica": "AVENIDA PORTA DIAGONAL"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "LESAFFRE IBERICA SA",
        "CodigoCliente": "07919",
        "ViaPublica": "CALLE ROSSELLO"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ACABATS DE LA FUSTA S.L",
        "CodigoCliente": "07960",
        "ViaPublica": "PASSEIG FERROCARRILS CATALANS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "REPA IBERIA, S.L.U",
        "CodigoCliente": "08233",
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ANCOR 95 S.L.",
        "CodigoCliente": "08368",
        "ViaPublica": "CARRER DE NARCIS MONTURIOL"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "STOCKS TEXTILES BARCELONA, S.L.",
        "CodigoCliente": "08421",
        "ViaPublica": "PASSEIG FERROCARRILS CATALANS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "CENTRIS EVENTS, S.L",
        "CodigoCliente": "08607",
        "ViaPublica": "PASSEIG FERROCARRILS CATALANS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "AMSC SPACE RENT S.L.",
        "CodigoCliente": "08674",
        "ViaPublica": "PASSEIG FERROCARRILS CATALANS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "KALEOS EYEHUNTERS SLU",
        "CodigoCliente": "08769",
        "ViaPublica": "CALLE IGNASI IGLESIAS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MAUSA RENT, S.A.U",
        "CodigoCliente": "09465",
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "VALIN PRODUCTOS DE GALICIA, S.L.",
        "CodigoCliente": "09701",
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "VAMOS A COMER, S.L.",
        "CodigoCliente": "09746",
        "ViaPublica": "CALLE MERCURI"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "IDATERM, S.L.",
        "CodigoCliente": "09794",
        "ViaPublica": "CALLE MARINA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "CARPINTERIA MANUEL PEREZ, S.L.",
        "CodigoCliente": "09846",
        "ViaPublica": "CALLE SANT JERONI"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "FASTENAL EUROPAS, S.L.",
        "CodigoCliente": "09875",
        "ViaPublica": "HUELVA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "INTRABERRY 3000 SL",
        "CodigoCliente": 10301,
        "ViaPublica": "CARRETERA HOSPITALET"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "DGM SAFETY & SECURITY SPAIN, SL",
        "CodigoCliente": 10605,
        "ViaPublica": "CALLE COBALT"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "BEKER LEON FLORES",
        "CodigoCliente": 10633,
        "ViaPublica": "CALLE QUINTANA I MILLAS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "LA ESPECIALISTA SL",
        "CodigoCliente": 11073,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ARTROK S.L.",
        "CodigoCliente": 11076,
        "ViaPublica": "CALLE ALPS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "PROSEALING, S.L",
        "CodigoCliente": 11176,
        "ViaPublica": "CALLE COURE"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MONTAJES ELÉCTRICOS FERIALES S.L.",
        "CodigoCliente": 11343,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MERCADE ESPAI DE BANY S.L.",
        "CodigoCliente": 11374,
        "ViaPublica": "AVENIDA PARC"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "DELYPROY, S.L",
        "CodigoCliente": 11495,
        "ViaPublica": "PASSEIG FERROCARRILS CATALANS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ADOCK FULFILLMENT S.L.",
        "CodigoCliente": 11513,
        "ViaPublica": "CALLE TREBALL"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ELECTRONIC TRAFIC S.A.",
        "CodigoCliente": 11894,
        "ViaPublica": "HUELVA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "BORN 2014 S.L.",
        "CodigoCliente": 11919,
        "ViaPublica": "HUELVA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "FUNCTIONAL  RESOURCES S.L",
        "CodigoCliente": 12164,
        "ViaPublica": "HUELVA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "MI LE REY SL",
        "CodigoCliente": 12233,
        "ViaPublica": "AVENIDA FAMA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "VIA PUBLICA COMUNICACION VISUAL SL",
        "CodigoCliente": 12293,
        "ViaPublica": "CALLE BONVEI"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "GRAU LUMINOTECNIA SA",
        "CodigoCliente": 12326,
        "ViaPublica": "HUELVA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "360 PRO AUTOMOTIVE SOLUTIONS SL",
        "CodigoCliente": 13250,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "IGNACIO ORMAZABAL NOGUERA",
        "CodigoCliente": 13271,
        "ViaPublica": "CALLE QUINTANA I MILLAS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "TASTY FRUIT, S.L",
        "CodigoCliente": 33589,
        "ViaPublica": "CALLE PROGRES"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ECOAIR PLASTICS SL",
        "CodigoCliente": 33663,
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "DESATASCOS BARCELONA, S.L",
        "CodigoCliente": 33911,
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "KANNEGIESSER ESPAÑA S.L.",
        "CodigoCliente": 33925,
        "ViaPublica": "CADIS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "OH QUE BO GRUP ALIMENT S.L.U",
        "CodigoCliente": 33935,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "VPSITEX ESPAÑA, S.L.U",
        "CodigoCliente": 34174,
        "ViaPublica": "PASSEIG FERROCARRILS CATALANS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "SAPAKARA FUN PARCS S.L",
        "CodigoCliente": 34336,
        "ViaPublica": "CALLE SILICI"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "CINELUX BCN SLU",
        "CodigoCliente": 34437,
        "ViaPublica": "AVENIDA FAMA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "GARDEN CORNELLA S.L.",
        "CodigoCliente": 34526,
        "ViaPublica": "CALLE PROGRES"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "ALBERT RIBERA PERALES",
        "CodigoCliente": 34602,
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "COSMO OCIO 98 SL",
        "CodigoCliente": 34888,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "GRUP YINDREY &  F.L., S.L.",
        "CodigoCliente": 34896,
        "ViaPublica": "AVENIDA FAMA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "JORDI NOGUES, S.L",
        "CodigoCliente": 35190,
        "ViaPublica": "CALLE TIRSO DE MOLINA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "DERCAR, S.A",
        "CodigoCliente": 35235,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "FARMA MIC FARMACIAS, S.L",
        "CodigoCliente": 35936,
        "ViaPublica": "CAMI DELS ACUMULADORS"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "DECOFRIO S.L",
        "CodigoCliente": 36185,
        "ViaPublica": "HUELVA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "CARGO WINE SL",
        "CodigoCliente": 36262,
        "ViaPublica": "HUELVA"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "CATSYS TELCOM SL",
        "CodigoCliente": 36344,
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "CORNELLA DE LLOBREGAT",
        "RazonSocial": "GUSTARIA SL",
        "CodigoCliente": 36692,
        "ViaPublica": "CALLE MARINA"
    },
    {
        "Municipio": "DOSRIUS",
        "RazonSocial": "PA SOLA, S.L.",
        "CodigoCliente": "09406",
        "ViaPublica": "CALLE DELS PICAPEDRERS"
    },
    {
        "Municipio": "DOSRIUS",
        "RazonSocial": "TEXTILES DEL MARESME, S.A.",
        "CodigoCliente": 10407,
        "ViaPublica": "CALLE CAMI DEL CEMENTIRI"
    },
    {
        "Municipio": "DOSRIUS",
        "RazonSocial": "JOSMIMAR 2015, S.L.",
        "CodigoCliente": 10524,
        "ViaPublica": "CALLE CAMI DEL CEMENTIRI"
    },
    {
        "Municipio": "DOSRIUS",
        "RazonSocial": "TOT DRAP SUM. Y SERV. A LA INDUSTRIA SL",
        "CodigoCliente": 11170,
        "ViaPublica": "CALLE DELS TEIXIDORS"
    },
    {
        "Municipio": "DOSRIUS",
        "RazonSocial": "CONSTRUCCIONES METÁLICAS MEPAL, S.L.",
        "CodigoCliente": 35998,
        "ViaPublica": "CALLE CAMI DEL CEMENTIRI"
    },
    {
        "Municipio": "DOSRIUS",
        "RazonSocial": "PITMAN DOSRIUS, S.L.",
        "CodigoCliente": 36394,
        "ViaPublica": "CALLE DELS TEIXIDORS"
    },
    {
        "Municipio": "DOSRIUS",
        "RazonSocial": "JOSEP MANDRI PLÀ",
        "CodigoCliente": 36993,
        "ViaPublica": "CALLE CAMI DEL CEMENTIRI"
    },
    {
        "Municipio": "ESPARREGUERA",
        "RazonSocial": "NOHER LOGISTIC SL",
        "CodigoCliente": 12173,
        "ViaPublica": "CALLE FORNAL"
    },
    {
        "Municipio": "ESPARREGUERA",
        "RazonSocial": "NOHER LOGISTIC SL",
        "CodigoCliente": 12173,
        "ViaPublica": "AVENIDA CA N'AMAT"
    },
    {
        "Municipio": "ESPLUGUES DE LLOBREGAT",
        "RazonSocial": "JOSKORTEX, S.L.",
        "CodigoCliente": 11994,
        "ViaPublica": "CALLE GASPAR FABREGAS"
    },
    {
        "Municipio": "ESPLUGUES DE LLOBREGAT",
        "RazonSocial": "EDITORIAL FISA ESCUDO DE ORO, S.A",
        "CodigoCliente": 35262,
        "ViaPublica": "CALLE JOSEP ARGEMI"
    },
    {
        "Municipio": "ESPLUGUES DE LLOBREGAT",
        "RazonSocial": "TITANES BOX SL-CROSSFIT B23",
        "CodigoCliente": 37229,
        "ViaPublica": "CALLE JOAN XXIII"
    },
    {
        "Municipio": "FORNELLS",
        "RazonSocial": "TIR IBERICA LOGISTICA SL",
        "CodigoCliente": 12983,
        "ViaPublica": "PASSEIG D'EN PEP VENTURA"
    },
    {
        "Municipio": "FORNELLS",
        "RazonSocial": "SUBMIN. INDUST.PRODUCT. ANTIDESGAST S.L.",
        "CodigoCliente": 13067,
        "ViaPublica": "PASSEIG D'EN PEP VENTURA"
    },
    {
        "Municipio": "FORNELLS",
        "RazonSocial": "SAGARRA FIGUERAS SL",
        "CodigoCliente": 37077,
        "ViaPublica": "CARRER INDUSTRIA"
    },
    {
        "Municipio": "FRANQUESES DEL VALLES, LE",
        "RazonSocial": "SPM LOGISTICA INTEGRAL, S.L",
        "CodigoCliente": "07610",
        "ViaPublica": "CALLE RIBERA DEL CONGOST"
    },
    {
        "Municipio": "FRANQUESES DEL VALLES, LE",
        "RazonSocial": "CONTENEDORES ECO METAL, S.L.U",
        "CodigoCliente": 11352,
        "ViaPublica": "CALLE BARCELONES"
    },
    {
        "Municipio": "FRANQUESES DEL VALLES, LE",
        "RazonSocial": "PLUS ESPAI S.L.U.",
        "CodigoCliente": 12010,
        "ViaPublica": "CALLE BARCELONES"
    },
    {
        "Municipio": "FRANQUESES DEL VALLES, LE",
        "RazonSocial": "SOPARCO-ODENA S.L.U.",
        "CodigoCliente": 33844,
        "ViaPublica": "CALLE CAN MACIA"
    },
    {
        "Municipio": "FRANQUESES DEL VALLES, LE",
        "RazonSocial": "ARSAGMETAL, S.L.",
        "CodigoCliente": 34041,
        "ViaPublica": "CARRER FRANÇA"
    },
    {
        "Municipio": "FRANQUESES DEL VALLES, LE",
        "RazonSocial": "GOURMAND & GUIARD S.L.",
        "CodigoCliente": 34048,
        "ViaPublica": "AVENIDA LLERONA"
    },
    {
        "Municipio": "FRANQUESES DEL VALLES, LE",
        "RazonSocial": "LEAL ITUARTE, FERNANDO DEOLI",
        "CodigoCliente": 34088,
        "ViaPublica": "PASSATGE 1095.4"
    },
    {
        "Municipio": "FRANQUESES DEL VALLES, LE",
        "RazonSocial": "SIRACARN ALIMENTACION CANINA SL",
        "CodigoCliente": 35166,
        "ViaPublica": "CARRER MAS PUJOL"
    },
    {
        "Municipio": "FRANQUESES DEL VALLES, LE",
        "RazonSocial": "SEGIMON AUTOMOCIO, SL",
        "CodigoCliente": 36725,
        "ViaPublica": "CAMI ANTIC DE VIC"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "WINKHAUS IBERICA SA",
        "CodigoCliente": "02112",
        "ViaPublica": "? CREATIVITAT"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "RHEAVENDORS APLIVEN, S.L.",
        "CodigoCliente": 2304,
        "ViaPublica": "? CARRER MAQUINA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "INDUSTRIAS REHAU, S.A.",
        "CodigoCliente": 2638,
        "ViaPublica": "?MIQUEL SERVET"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "ESPIARVA, S.L",
        "CodigoCliente": "04188",
        "ViaPublica": "CALLE LA CIENCIA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "EVOLPLAST S.L",
        "CodigoCliente": "04215",
        "ViaPublica": "CALLE LA CIENCIA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "MILARIUM SL",
        "CodigoCliente": "04247",
        "ViaPublica": "?MIQUEL SERVET"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "CEILHIT SLU",
        "CodigoCliente": "04261",
        "ViaPublica": "?ISAAC PERAL"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "CEILHIT SLU",
        "CodigoCliente": "04261",
        "ViaPublica": "? GALILEU"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "GARDEN CENTER BORDAS GAVA S.L.",
        "CodigoCliente": "04267",
        "ViaPublica": "AVENIDA DEL MAR"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "FUSION LAB S.L.",
        "CodigoCliente": "04912",
        "ViaPublica": "? DE LA RECERCA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "FIBRA Y SISTEMAS, S.L",
        "CodigoCliente": 6002,
        "ViaPublica": "? CREATIVITAT"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "CARRETILLAS 2000 S.L.",
        "CodigoCliente": 6109,
        "ViaPublica": "? CALLE ATOM"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "RODI METRO, S.L.U.",
        "CodigoCliente": 6114,
        "ViaPublica": "AVENIDA BERTRAN I GUELL"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "COMERCIAL TEXTIL SANCHEZ DE CO",
        "CodigoCliente": 6132,
        "ViaPublica": "CALLE PROGRES"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "TECNOMAK ESPAÑA, S.A.",
        "CodigoCliente": 6180,
        "ViaPublica": "? CREATIVITAT"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "GELATS & SABORS, S.L.",
        "CodigoCliente": 6203,
        "ViaPublica": "CALLE TARRAGONA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "GAFAS KOST, S.L.",
        "CodigoCliente": 6281,
        "ViaPublica": "CALLE LA CIENCIA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "ITALSAN, S.L.",
        "CodigoCliente": 6313,
        "ViaPublica": "CALLE PROGRES"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "ITALSAN, S.L.",
        "CodigoCliente": 6313,
        "ViaPublica": "? CARRER MAQUINA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "ASCASO FACTORY",
        "CodigoCliente": 6317,
        "ViaPublica": "?CONEIXEMENT"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "CORVER, S.A.",
        "CodigoCliente": 6456,
        "ViaPublica": "?CONEIXEMENT"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "ZENER COMUNICACIONES, S.A.",
        "CodigoCliente": 6755,
        "ViaPublica": "CALLE BARCELONA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "CRIS COSMETICS, S.L.",
        "CodigoCliente": 6779,
        "ViaPublica": "? CALLE ATOM"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "PRODUCTORA ALIMENTICIA GENERAL",
        "CodigoCliente": 6971,
        "ViaPublica": "? CARRER MAQUINA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "GARCIA FAURA S.L.",
        "CodigoCliente": 7097,
        "ViaPublica": "?ISAAC PERAL"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "GARCIA FAURA S.L.",
        "CodigoCliente": 7097,
        "ViaPublica": "RAURELL"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "SELECARNS, S.L.",
        "CodigoCliente": 7168,
        "ViaPublica": "? CARRER DE L' ENERGIA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "WATERFUNPARK S.L",
        "CodigoCliente": 7194,
        "ViaPublica": "CALLE GIRONA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "VIVISOL IBERICA S.L.U.",
        "CodigoCliente": "08388",
        "ViaPublica": "IMAGINACIO"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "SISTEMAS DE EMBALAJE ANPER, S.A.",
        "CodigoCliente": "08690",
        "ViaPublica": "CALLE PROGRES"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "SISTEMAS DE EMBALAJE ANPER, S.A.",
        "CodigoCliente": "08690",
        "ViaPublica": "? CARRER MAQUINA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "DRAULIC FREN, S.L.",
        "CodigoCliente": "08707",
        "ViaPublica": "CARRER DE L´ENGINY"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "WATER & PRO. TECH.& SOL.SPAIN SLU",
        "CodigoCliente": "08790",
        "ViaPublica": "?CONEIXEMENT"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "COMERCIAL FRANCISCO BUENAVENTURA SL",
        "CodigoCliente": "09329",
        "ViaPublica": "?MIQUEL SERVET"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "MAKITA, S.A.",
        "CodigoCliente": "09409",
        "ViaPublica": "CALLE BARCELONA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "BB DISTRIBUCION GAVA, S.L.U",
        "CodigoCliente": "09520",
        "ViaPublica": "CALLE LA CIENCIA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "PREMIUM DELEVENT, S.L.",
        "CodigoCliente": "09770",
        "ViaPublica": "? OFICIS"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "FFS EQUIPOS URBANOS, S.A.",
        "CodigoCliente": 10900,
        "ViaPublica": "? CALLE ATOM"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "DMM FUSTERS S.L.",
        "CodigoCliente": 11148,
        "ViaPublica": "CALLE LLEIDA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "FIRE BUSINESS, S.L",
        "CodigoCliente": 11391,
        "ViaPublica": "CALLE LA CIENCIA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "COMERCIAL VASCO CATALANA DEL COMBUSTIBLE",
        "CodigoCliente": 11524,
        "ViaPublica": "? CARRER MAQUINA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "RTX RACKS & ENCLOSURES, S.L",
        "CodigoCliente": 11638,
        "ViaPublica": "? CARRER MAQUINA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "GAU CATERING S.L.",
        "CodigoCliente": 12041,
        "ViaPublica": "CALLE COPERNIC"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "G&P CREAR LABELS 2020 SL",
        "CodigoCliente": 12076,
        "ViaPublica": "CALLE LLEIDA"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "JAIME CAMPMANY  PACKAGING PAPER SLU",
        "CodigoCliente": 12239,
        "ViaPublica": "PLAÇA LEONARDO DA VINCI"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "CHALITO BARCELONA, S.L",
        "CodigoCliente": 13139,
        "ViaPublica": "AVENIDA BERTRAN I GUELL"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "NURNBERGUER S.L.",
        "CodigoCliente": 34775,
        "ViaPublica": "CARRERA SANTA CREU DE CALAFELL"
    },
    {
        "Municipio": "GAVA",
        "RazonSocial": "CHALITO BARCELONA, S.L (FABRICA)",
        "CodigoCliente": 36252,
        "ViaPublica": "AVENIDA BERTRAN I GUELL"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "OFFICE & MEETING SL",
        "CodigoCliente": 10648,
        "ViaPublica": "CARRER DE SANTA COLOMA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "SUMINISTRADORA ELECTRIC. Y MATERIALES SA",
        "CodigoCliente": 12279,
        "ViaPublica": "CARRER DEL MAS FALGAS"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "DUKA YES SL",
        "CodigoCliente": 12501,
        "ViaPublica": "CARRER CAMP DE LES LLOSES"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "OLYMPIA 2 SL",
        "CodigoCliente": 12504,
        "ViaPublica": "CARRER DE GEORGE STEPHENSON"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "AUTOMATISMES VIDAL SL",
        "CodigoCliente": 12529,
        "ViaPublica": "CARRER DE GEORGE STEPHENSON"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "NOVINET SL",
        "CodigoCliente": 12577,
        "ViaPublica": "CARRER DE GEORGE STEPHENSON"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "EXPLOTACIONS TOT BRASA SL",
        "CodigoCliente": 12882,
        "ViaPublica": "PLAÇA SALT"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "FRESC SERVIS GIRONA SL",
        "CodigoCliente": 12997,
        "ViaPublica": "PLAÇA SALT"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "IMMACULADA BUSÓ PERPINYÀ",
        "CodigoCliente": 13029,
        "ViaPublica": "CARRER BARCELONA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "SELF L'ENTRAMA SL",
        "CodigoCliente": 13105,
        "ViaPublica": "PLAÇA SALT"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "BEVINNOVA DISTRIBUCIONES SL",
        "CodigoCliente": 13125,
        "ViaPublica": "CARRER BARCELONA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "M.M.M. LLORET SL",
        "CodigoCliente": 13126,
        "ViaPublica": "CARRER BARCELONA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "JOAN BUSÓ PLANAS",
        "CodigoCliente": 13184,
        "ViaPublica": "CARRER BARCELONA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "LECOM PROJECTS SL",
        "CodigoCliente": 13185,
        "ViaPublica": "CARRER CAN PAU BIROL"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "DOMICILIS LA CARIBEÑA, S.L",
        "CodigoCliente": 13187,
        "ViaPublica": "CARRER CAN PAU BIROL"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "LAMPISTERIA I ELECTRICITAT GIRONA SL",
        "CodigoCliente": 13247,
        "ViaPublica": "CARRER BARCELONA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "ESTACION SERVICIO AVELLANEDA SL",
        "CodigoCliente": 13277,
        "ViaPublica": "CARRER BARCELONA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "SONEPAR SPAIN, S.A.U",
        "CodigoCliente": 35180,
        "ViaPublica": "CARRER DE LA INDUSTRIA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "J TOURON SA",
        "CodigoCliente": 36435,
        "ViaPublica": "CARRER CAMP DE LES LLOSES"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "MARIA ISABEL PALENCIA CORONADO",
        "CodigoCliente": 36555,
        "ViaPublica": "CARRER BARCELONA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "PARKING SALIDA 0 SL",
        "CodigoCliente": 36633,
        "ViaPublica": "CARRETERA ANTIGA D'AMER"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "NARCIS AYMERICH BURRASSÓ",
        "CodigoCliente": 36658,
        "ViaPublica": "CARRER DE SANT GREGORI"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "REMSA PET PARTNER SL",
        "CodigoCliente": 36770,
        "ViaPublica": "CARRER DE LLORA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "TINTORERIES EL SOL SL",
        "CodigoCliente": 36944,
        "ViaPublica": "CARRER CASTELL DE BELLAGUARDA"
    },
    {
        "Municipio": "GIRONA",
        "RazonSocial": "OCI GIRONA 2020 S.L",
        "CodigoCliente": 37196,
        "ViaPublica": "CARRER JOERIA PETITA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "ELECTRONIC LIGHT DESIGN",
        "CodigoCliente": 6768,
        "ViaPublica": "CAMI CAN BASSA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "ADESCO, SA",
        "CodigoCliente": 7017,
        "ViaPublica": "CALLE CAN CABANYES"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "FIBRA GRANOLLERS S.L.",
        "CodigoCliente": 10406,
        "ViaPublica": "CALLE RONÇANA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "JJD DISTRIBUCIONS S.C.C.L",
        "CodigoCliente": 10528,
        "ViaPublica": "CALLE DURAN I REYNALS"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "CAMBELSON, S.L.",
        "CodigoCliente": 10538,
        "ViaPublica": "CALLE SEVERO OCHOA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "TECHNODRINKS SYSTEMS SA",
        "CodigoCliente": 10734,
        "ViaPublica": "CALLE CAN CABANYES"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "ARIS - FLOOR",
        "CodigoCliente": 10780,
        "ViaPublica": "CAMI CAL ROS DELS OCELLS"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "ARPI TROQUELES, S.L.",
        "CodigoCliente": 10948,
        "ViaPublica": "AVENIDA SANT JULIA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "APLICACIONES QUIMICAS JUNIOR, S.L.",
        "CodigoCliente": 10996,
        "ViaPublica": "CALLE JOSEP TRUETA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "DECOLLETATGE I MECANITZADOS TALLSA,S.L",
        "CodigoCliente": 11521,
        "ViaPublica": "AVENIDA SANT JULIA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "ESPADIET SL",
        "CodigoCliente": 11917,
        "ViaPublica": "AVENIDA SANT JULIA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "TRANSPORTES JUBERA S.L.",
        "CodigoCliente": 11987,
        "ViaPublica": "CALLE SEVERO OCHOA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "AIRON CLIMA SL",
        "CodigoCliente": 12255,
        "ViaPublica": "CARRETERA MONTMELO"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "T. R. A. MANTENIMIENTO DE FLOTA, SL",
        "CodigoCliente": 12421,
        "ViaPublica": "CALLE MANUEL DE FALLA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "NAB-TEC S.L.U.",
        "CodigoCliente": 33865,
        "ViaPublica": "AVENIDA SANT JULIA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "GRUES DEL VALLES, S.A",
        "CodigoCliente": 33878,
        "ViaPublica": "AVENIDA SANT JULIA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "PRODUCTOS RALPE S.L.",
        "CodigoCliente": 34163,
        "ViaPublica": "AVENIDA SANT JULIA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "DECORA ANF, S.L",
        "CodigoCliente": 34232,
        "ViaPublica": "CALLE SEVERO OCHOA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "HEBORA EXCLUSIVE, S.L",
        "CodigoCliente": 34657,
        "ViaPublica": "AVENIDA SANT JULIA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "TODOECONOMICO S.L.",
        "CodigoCliente": 35055,
        "ViaPublica": "CALLE JORDI CAMP"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "EURO ALMACENAMIENTO Y DISTRIBUCIÓN S.L.",
        "CodigoCliente": 35401,
        "ViaPublica": "AVENIDA SANT JULIA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "EMPURIA GEL, S.L.",
        "CodigoCliente": 35445,
        "ViaPublica": "CAMI PARETS"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "FORNELL MESA  ENRIQUE",
        "CodigoCliente": 35513,
        "ViaPublica": "AVENIDA SANT JULIA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "WAX DESIGN S.L.",
        "CodigoCliente": 35591,
        "ViaPublica": "CALLE LEONARDO TORRES QUEVEDO"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "CERRAJERIA FEGAR I SL",
        "CodigoCliente": 35603,
        "ViaPublica": "CALLE MANUEL DE FALLA"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "TALLERES CENDRA, S.A.",
        "CodigoCliente": 35738,
        "ViaPublica": "CALLE CAL ROS DELS OCELLS"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "ALEIX MONTAÑÀ BLANCHER",
        "CodigoCliente": 35807,
        "ViaPublica": "CALLE CAN CABANYES"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "GLOBAL FULLFILMENT SERVICE S.L.",
        "CodigoCliente": 36067,
        "ViaPublica": "CAMI CAN NINOU"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "JUAN HILARIO, MORA MACHUCA",
        "CodigoCliente": 36479,
        "ViaPublica": "CALLE JORDI CAMP"
    },
    {
        "Municipio": "GRANOLLERS",
        "RazonSocial": "DEVAL NEW COMPANY 21 S.L",
        "CodigoCliente": 36945,
        "ViaPublica": "CAMI PARETS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "EDEN SPRINGS ESPAÑA, S.A.U",
        "CodigoCliente": "01034",
        "ViaPublica": "CALLE MOTORS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "NUOVIPIATTI, S.L.",
        "CodigoCliente": 2410,
        "ViaPublica": "CALLE PRIMER DE MAIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ALTA TECNOLOGIA EN EXTRACCION,",
        "CodigoCliente": 2418,
        "ViaPublica": "PASSATGE MONTSERRAT ISERN"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ACTIVIDADES AUX. Y SERVICIOS F",
        "CodigoCliente": 2421,
        "ViaPublica": "CALLE FEIXA LLARGA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "TRANSFONT S.L",
        "CodigoCliente": 2448,
        "ViaPublica": "CALLE MOTORS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "SILEMA BCN, S.L.",
        "CodigoCliente": 2459,
        "ViaPublica": "CALLE MIGUEL HERNANDEZ"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "INTERNACIONAL URBAN CARRIER, S",
        "CodigoCliente": 2622,
        "ViaPublica": "CALLE MOTORS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "COMPAÑIA.ESP. DE AISLAMIENTOS,S.A**",
        "CodigoCliente": 2710,
        "ViaPublica": "CALLE COBALT"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "TDI DIFFERENT & SPECIAL EVENTS, S.L",
        "CodigoCliente": "03587",
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "OLIVER ART S.L.",
        "CodigoCliente": "03872",
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "FUNDACIÓ PRIVADA ASPROSEAT EMPRESA I T",
        "CodigoCliente": "05482",
        "ViaPublica": "CALLE DOLORS ALEU"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "M.M. BARCELONA, S.L.",
        "CodigoCliente": 6080,
        "ViaPublica": "CALLE MOTORS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ISS FACILITY SERVICES, S.A.",
        "CodigoCliente": 6086,
        "ViaPublica": "AVENIDA GRANVIA DE L'HOSPITALET"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "MECALUX S.A.",
        "CodigoCliente": 6106,
        "ViaPublica": "CALLE MIGUEL HERNANDEZ"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ALBERVIMA, S.A.",
        "CodigoCliente": 6107,
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "FRANCHISING CALZEDONIA ESPAÑA",
        "CodigoCliente": 6194,
        "ViaPublica": "CALLE CIENCIES"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "FRANCHISING CALZEDONIA ESPAÑA",
        "CodigoCliente": 6194,
        "ViaPublica": "CALLE METAL.LURGIA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "NEOCERAMICA S.A.",
        "CodigoCliente": 6231,
        "ViaPublica": "CALLE METAL.LURGIA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "FLEET CARE AND INNOVATION S.L.",
        "CodigoCliente": 6232,
        "ViaPublica": "CALLE PABLO IGLESIAS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "PRISMA DECORACION COMERCIAL S.",
        "CodigoCliente": 6234,
        "ViaPublica": "AVENIDA MARE DE DEU DE BELLVITGE"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "MAXICERAMIC MINIPREU S.L.",
        "CodigoCliente": 6282,
        "ViaPublica": "CALLE COBALT"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "TEVASEÑAL, S.A.",
        "CodigoCliente": 6455,
        "ViaPublica": "CALLE FEMADES"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "T. MARTINEZBLANCO PLANXA I PIN",
        "CodigoCliente": 6469,
        "ViaPublica": "CALLE MIGUEL HERNANDEZ"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "INSTALACIONES SONOTEC, S.L.",
        "CodigoCliente": 6687,
        "ViaPublica": "CALLE VILARDOSA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "RPM RACING S.L.U.",
        "CodigoCliente": 6727,
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "COMERCIAL ERLISO, S.L.",
        "CodigoCliente": 6785,
        "ViaPublica": "PASSATGE MONTSERRAT ISERN"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ECOMSA  RES, S.L.",
        "CodigoCliente": 6787,
        "ViaPublica": "CALLE PABLO IGLESIAS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "IRIZAKI FUSTA S.L.",
        "CodigoCliente": 6818,
        "ViaPublica": "AVENIDA CARRILET"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "JAUME LLANEZA  BATLLE",
        "CodigoCliente": 6862,
        "ViaPublica": "AVENIDA MARE DE DEU DE BELLVITGE"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "FABRICA DE MUEBLES EKI, S.L.",
        "CodigoCliente": 6871,
        "ViaPublica": "CALLE FEIXA LLARGA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ABELLAN HNOS, S.A.",
        "CodigoCliente": 6906,
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ADHESIVOS SILMAR, S.L.",
        "CodigoCliente": 6910,
        "ViaPublica": "? PASSATGE CAN PARELLADA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "MADERAS AURELIO MARTINEZ, S.L.",
        "CodigoCliente": 6972,
        "ViaPublica": "CALLE CIENCIES"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ROMPAL INGENIEROS, S.A.U.",
        "CodigoCliente": 7006,
        "ViaPublica": "CALLE MONTSERRAT ROIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "BESTSELLER WHOLESALE SPAIN, S.L.U.",
        "CodigoCliente": 7041,
        "ViaPublica": "CALLE DOLORS ALEU"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "GECOM ESPACIOS DE COMUNICACION, S.L.",
        "CodigoCliente": 7055,
        "ViaPublica": "CALLE DOLORS ALEU"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ROVINCA XXI, S.L.",
        "CodigoCliente": 7068,
        "ViaPublica": "CALLE JOSE AGUSTIN GOYTISOLO"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "GUTMETAL, S.A",
        "CodigoCliente": 7119,
        "ViaPublica": "CALLE MOTORS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "TALLERES LA CAMPIÑA S.L.",
        "CodigoCliente": 7144,
        "ViaPublica": "CALLE RAFAEL BARRADAS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ECOBENZ AUTOESTACION S.L",
        "CodigoCliente": 7183,
        "ViaPublica": "AVENIDA JOAN CARLES I"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "WORLD COURIER DE ESPAÑA, S.A.",
        "CodigoCliente": "07757",
        "ViaPublica": "CALLE CIENCIES"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "SPIRITS OF SPEED CATALUNYA,S.L.U",
        "CodigoCliente": "08094",
        "ViaPublica": "CALLE CIENCIES"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "FUSTERIA GUITART, S.L.",
        "CodigoCliente": "08118",
        "ViaPublica": "CALLE COROMINAS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "HAZME UN SITIO S.L.",
        "CodigoCliente": "08590",
        "ViaPublica": "CALLE COROMINAS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "GALERIA DEPORTIVA IZQUIERDO SL",
        "CodigoCliente": 10370,
        "ViaPublica": "CALLE COBALT"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "TECNI-GASKETS, S.L",
        "CodigoCliente": 10417,
        "ViaPublica": "CALLE COBALT"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "PORCELANOSA BATIMAT, S.A.U",
        "CodigoCliente": 10663,
        "ViaPublica": "CALLE DOLORS ALEU"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "EDEBE EDUCACION, S.L.",
        "CodigoCliente": 10758,
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "TRACTEL IBÉRICA S.A.",
        "CodigoCliente": 10957,
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "HAIER IBERIA S.L.U.",
        "CodigoCliente": 11290,
        "ViaPublica": "CALLE METAL.LURGIA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "UNIPALET DEL BAIX LLOBREGAT SL",
        "CodigoCliente": 11574,
        "ViaPublica": "CALLE BOTANICA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "CONSTRUCCIONES MECANICAS TINTORE, S.A",
        "CodigoCliente": 11605,
        "ViaPublica": "CALLE CROM"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ALOLOCO SL",
        "CodigoCliente": 11793,
        "ViaPublica": "CALLE COROMINAS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ELSAMEX GESTION DE INFRAESTRUCTURA",
        "CodigoCliente": 11849,
        "ViaPublica": "AVENIDA FABREGADA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "FUSTERIA MAURO SL",
        "CodigoCliente": 11927,
        "ViaPublica": "CALLE VILARDOSA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "SEÑ Y BALIZAMIENTOS LA CASTELLANA S.A.",
        "CodigoCliente": 11931,
        "ViaPublica": "CALLE FEMADES"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "TECSE GASKETS S.L.",
        "CodigoCliente": 12020,
        "ViaPublica": "CALLE COROMINAS"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "CENTRO LOGISTICO EXPONOVIAS SL",
        "CodigoCliente": 12108,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "2AJ INGENIERIA Y MOTOR S.L.",
        "CodigoCliente": 12205,
        "ViaPublica": "CALLE COBALT"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "PREMIUM KITCHENS BACH7 S.L",
        "CodigoCliente": 12357,
        "ViaPublica": "CALLE JUAN RAMON JIMENEZ"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "PEIXOS FREDERIC S.L.",
        "CodigoCliente": 12478,
        "ViaPublica": "AVENIDA MARE DE DEU DE BELLVITGE"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "EURO PARQUET 2001 SL",
        "CodigoCliente": 13226,
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "BLOK DESING S.L",
        "CodigoCliente": 33420,
        "ViaPublica": "CALLE MIQUEL ROMEU"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "UTE LYMET-MELFOSUR BARCELONA SUR",
        "CodigoCliente": 33598,
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ALASSIE CR, S.L",
        "CodigoCliente": 34066,
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "CIRCET INFRAESTRUCTURAS TELECOMUN.S.A.U",
        "CodigoCliente": 34809,
        "ViaPublica": "CALLE BOTANICA"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "MUSITECH, S.L.",
        "CodigoCliente": 34961,
        "ViaPublica": "PASSATGE CAN POLITIC"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "ROCA GONZALEZ, S.L",
        "CodigoCliente": 35068,
        "ViaPublica": "CALLE COBALT"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "LOANER HEALTHCARE SERVICES S.L.",
        "CodigoCliente": 35122,
        "ViaPublica": "CALLE ARQUIMEDES"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "MONTXA CONFEC, S.L",
        "CodigoCliente": 35492,
        "ViaPublica": "CARRETERA SANT ROC"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "COLCHONES SOMICAT S.A",
        "CodigoCliente": 35514,
        "ViaPublica": "CALLE CROM"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "COLCHONES SOMICAT S.A",
        "CodigoCliente": 35514,
        "ViaPublica": "CARRETERA MIG"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "BETTAIR CITIES S.L.",
        "CodigoCliente": 35882,
        "ViaPublica": "TRAVESSIA INDUSTRIAL"
    },
    {
        "Municipio": "HOSPITALET DE LLOBREGAT,",
        "RazonSocial": "FULLEXPO EXHIBITS S.L",
        "CodigoCliente": 36758,
        "ViaPublica": "CALLE METAL.LURGIA"
    },
    {
        "Municipio": "Hostalric",
        "RazonSocial": "MENSAJERIA LA SELVA, S.L.U.",
        "CodigoCliente": 12402,
        "ViaPublica": "CARRER POMPEU FABRA"
    },
    {
        "Municipio": "IGUALADA",
        "RazonSocial": "RECAMBIOS AICRAG, S.A",
        "CodigoCliente": 35318,
        "ViaPublica": "CARRER ITALIA"
    },
    {
        "Municipio": "IGUALADA",
        "RazonSocial": "DAMASCOTEX S.L.",
        "CodigoCliente": 37236,
        "ViaPublica": "CARRER LUXEMBURG"
    },
    {
        "Municipio": "LLAGOSTA, LA",
        "RazonSocial": "MADERAS DEL ALTO URGEL, S.A.",
        "CodigoCliente": 7029,
        "ViaPublica": "CALLE GIRONA"
    },
    {
        "Municipio": "LLAGOSTA, LA",
        "RazonSocial": "SERVIWOOD 06",
        "CodigoCliente": "08759",
        "ViaPublica": "CALLE FLORIDA"
    },
    {
        "Municipio": "LLAGOSTA, LA",
        "RazonSocial": "PLEGAMETAL, S.L.",
        "CodigoCliente": 11555,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "LLAGOSTA, LA",
        "RazonSocial": "GRESTONE, S.L.",
        "CodigoCliente": 11572,
        "ViaPublica": "CALLE ESTACIO"
    },
    {
        "Municipio": "LLAGOSTA, LA",
        "RazonSocial": "THALA 2012 S.L.",
        "CodigoCliente": 12317,
        "ViaPublica": "CALLE CADAQUES"
    },
    {
        "Municipio": "LLAGOSTA, LA",
        "RazonSocial": "WALTER FRIEDRICH ESPAÑOLA, S.A.",
        "CodigoCliente": 34121,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "LLAGOSTERA",
        "RazonSocial": "SERRALLERIA METALICA FERRAN COLLELL S.L.",
        "CodigoCliente": 35286,
        "ViaPublica": "CARRER TRAMUNTANA"
    },
    {
        "Municipio": "LLICA DE MUNT",
        "RazonSocial": "INOXFERRO, S.L.",
        "CodigoCliente": 34454,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "LLICA DE VALL",
        "RazonSocial": "NTG ROAD, S.L.",
        "CodigoCliente": "07320",
        "ViaPublica": "CALLE SEGARRA"
    },
    {
        "Municipio": "LLICA DE VALL",
        "RazonSocial": "SPM LOGISTICA INTEGRAL, S.L",
        "CodigoCliente": "07610",
        "ViaPublica": "CALLE SEGRIA"
    },
    {
        "Municipio": "LLICA DE VALL",
        "RazonSocial": "DEGOES CARPINTERIA S.L.",
        "CodigoCliente": "08321",
        "ViaPublica": "?CARRER XOPS"
    },
    {
        "Municipio": "LLICA DE VALL",
        "RazonSocial": "MANIROL COVERINGS, S.L.",
        "CodigoCliente": 10546,
        "ViaPublica": "CALLE DEL FONS"
    },
    {
        "Municipio": "LLICA DE VALL",
        "RazonSocial": "FERROS TEXAR, S.L.",
        "CodigoCliente": 11655,
        "ViaPublica": "CALLE MARESME"
    },
    {
        "Municipio": "LLICA DE VALL",
        "RazonSocial": "PLANCHISTERIA INDUSTRIAL JOMI S.C.P.",
        "CodigoCliente": 34000,
        "ViaPublica": "CARRER GARRAF"
    },
    {
        "Municipio": "LLICA DE VALL",
        "RazonSocial": "LAURA RUPEREZ ROJAS",
        "CodigoCliente": 34894,
        "ViaPublica": "AVENIDA VALLES"
    },
    {
        "Municipio": "LLICA DE VALL",
        "RazonSocial": "BLAUFIL BARCELONA, S.L.",
        "CodigoCliente": 35562,
        "ViaPublica": "CALLE LLEIDA"
    },
    {
        "Municipio": "LLICA DE VALL",
        "RazonSocial": "MAQUIN.INDUST.METAL.KORPLEG S L",
        "CodigoCliente": 35651,
        "ViaPublica": "CALLE BAGES"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "PUIG CONTROL SL",
        "CodigoCliente": 10579,
        "ViaPublica": "CARRER DE LA QUIMICA"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "SERGI TIERZ CARNICERO",
        "CodigoCliente": 10585,
        "ViaPublica": "CARRER DE LA TECNOLOGIA"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "FUGAPLAST, S.L",
        "CodigoCliente": 10598,
        "ViaPublica": "CARRER PALAUTORDERA"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "FORMATOS Y PACKAGING, S.L.",
        "CodigoCliente": 10602,
        "ViaPublica": "CARRER PALAUTORDERA"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "METROPIBERIA, S.L.",
        "CodigoCliente": 12325,
        "ViaPublica": "VILALBA"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "PLANXISTERIA MESEGUÉ S.L.",
        "CodigoCliente": 12649,
        "ViaPublica": "AV.DEL MOGENT"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "PALOU MOTORSPORT, S.L.",
        "CodigoCliente": 35127,
        "ViaPublica": "CARRER DE LA QUIMICA"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "FAS SPORT PADEL S.L",
        "CodigoCliente": 35932,
        "ViaPublica": "AV.DEL MOGENT"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "STAR FIRE BCN SL",
        "CodigoCliente": 35989,
        "ViaPublica": "CARRER DE LA TECNOLOGIA"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "PLANCHISTERIA INDUSTRIAL REICOL, S.L.",
        "CodigoCliente": 36284,
        "ViaPublica": "CALLE COLLSABADELL"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "CONSTRUCCIONES METALICAS DHIERRO S.L.",
        "CodigoCliente": 36286,
        "ViaPublica": "CALLE COLLSABADELL"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "JM DISEÑO Y FABRICACIÓN ENVASADO,SL",
        "CodigoCliente": 36295,
        "ViaPublica": "CARRER PALAUTORDERA"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "CSYS MOULD, S.L.",
        "CodigoCliente": 36312,
        "ViaPublica": "CARRER SANT CELONI"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "COMAQUIN, S.A.",
        "CodigoCliente": 36764,
        "ViaPublica": "AV.DEL MOGENT"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "MIQUEL MAÑÉ FOLCH",
        "CodigoCliente": 36771,
        "ViaPublica": "B-510"
    },
    {
        "Municipio": "LLINARS DEL VALLES",
        "RazonSocial": "KIDDUS ACCESORIOS, S.L.",
        "CodigoCliente": 36875,
        "ViaPublica": "CARRER DE LA TECNOLOGIA"
    },
    {
        "Municipio": "MAÇANET DE LA SELVA",
        "RazonSocial": "AUTOMÀTICS COSTA, SL",
        "CodigoCliente": 12475,
        "ViaPublica": "POLIGON INDUSTRIAL CAN ROURE"
    },
    {
        "Municipio": "MAÇANET DE LA SELVA",
        "RazonSocial": "FL TECNICS INDEX, S.L.",
        "CodigoCliente": 12479,
        "ViaPublica": "POLIGON INDUSTRIAL CAN ROURE"
    },
    {
        "Municipio": "MAÇANET DE LA SELVA",
        "RazonSocial": "DG LAMPISTES 2003, S.L.",
        "CodigoCliente": 12538,
        "ViaPublica": "CARRER DE LA INDUSTRIA"
    },
    {
        "Municipio": "MAÇANET DE LA SELVA",
        "RazonSocial": "LORENTE RUIZ INSTALACIONS COMERCIALS, SL",
        "CodigoCliente": 12543,
        "ViaPublica": "CARRER DE LA INDUSTRIA"
    },
    {
        "Municipio": "MAÇANET DE LA SELVA",
        "RazonSocial": "ESPECIALISTES EN VENDING,S.L.",
        "CodigoCliente": 36974,
        "ViaPublica": "POLIGON INDUSTRIAL CAN ROURE"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "AUTOCLIMA IBERICA, S.L.",
        "CodigoCliente": 7169,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "ANMAR 2000 SL",
        "CodigoCliente": "09899",
        "ViaPublica": "CALLE CA N'ALBAREDA"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "INOXCOCA S.L",
        "CodigoCliente": "09922",
        "ViaPublica": "CALLE JOAN DE LA CIERVA"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "QUIMICAS ESLAVA SL",
        "CodigoCliente": "09983",
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "ALFONSO MEDELLIN CASTILLO",
        "CodigoCliente": 10044,
        "ViaPublica": "AVENIDA JOAQUIM DE BARNOLA I BASSOLS"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "MOBLES DE CUINA LA FUSTA, S.L.",
        "CodigoCliente": 10063,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "CULLIGAN WATER SPAIN SL",
        "CodigoCliente": 10502,
        "ViaPublica": "CAMI CAN BROS"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "DOCENOV-94 S.L.",
        "CodigoCliente": 10666,
        "ViaPublica": "CALLE CA N'ALBAREDA"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "PROTECCION CONTRA INCENDIOS CLIMA SL",
        "CodigoCliente": 12559,
        "ViaPublica": "?CARRETERA NACIONAL II"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "CMYK GRAFICA PALLEJA, S.L",
        "CodigoCliente": 33957,
        "ViaPublica": "CALLE CA N'ALBAREDA"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "BV STORE SL (BUREAU VALLEE)",
        "CodigoCliente": 34469,
        "ViaPublica": "AVENIDA CONGOST"
    },
    {
        "Municipio": "Martorell",
        "RazonSocial": "TRANSPORTES Y LOGISTICA SORIA SL",
        "CodigoCliente": 35082,
        "ViaPublica": "CALLE HOSTAL DEL PI"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "TRANSPORTES Y LOGISTICA SORIA SL",
        "CodigoCliente": 35082,
        "ViaPublica": "CALLE DEVESA"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "MODEL FAB TRAINS, S.L.",
        "CodigoCliente": 35298,
        "ViaPublica": "AVENIDA CONGOST"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "GABRIEL CABIRTA BLANCO",
        "CodigoCliente": 35313,
        "ViaPublica": "CARRETERA MARTORELL"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "EICA LA CUINA SENSE FRONTERES, S.L.",
        "CodigoCliente": 36563,
        "ViaPublica": "AVENIDA CONGOST"
    },
    {
        "Municipio": "MARTORELL",
        "RazonSocial": "GALCAM INSTRUMENTOS SL",
        "CodigoCliente": 85098,
        "ViaPublica": "AVENIDA CONGOST"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "INSTACLACK INTERNACIONAL, S.A",
        "CodigoCliente": "00128",
        "ViaPublica": "CALLE DEL PRESSEGUERAR"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "EMSA MAQUINARIA Y PROYECTOS S.",
        "CodigoCliente": 6944,
        "ViaPublica": "CALLE DE SANT MARTI"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "ARMARIOS CLOSED SL",
        "CodigoCliente": "09865",
        "ViaPublica": "CALLE TARRAGONA"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "ECO REPAL VALLES, S.L.U",
        "CodigoCliente": "09870",
        "ViaPublica": "CALLE DEL MOLI"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "NET I SERRA, S.L",
        "CodigoCliente": "09873",
        "ViaPublica": "CALLE DE SANT MARTI"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "SIMON SAU",
        "CodigoCliente": 10725,
        "ViaPublica": "CALLE DE CARRERADA"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "ALUTUVEN, S.L.",
        "CodigoCliente": 10882,
        "ViaPublica": "CALLE DEL MOGENT"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "CONFECCIONES A M S 21 SL",
        "CodigoCliente": 11887,
        "ViaPublica": "CALLE DE SANT MARTI"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "XIAO MAO CHEN",
        "CodigoCliente": 11997,
        "ViaPublica": "CALLE DE CARRERADA"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "CRISTAVEN21, S.L",
        "CodigoCliente": 34648,
        "ViaPublica": "CALLE DEL MONTCAU"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "EME EME 2010 S.L.",
        "CodigoCliente": 35202,
        "ViaPublica": "CALLE DE CAN FENOSA"
    },
    {
        "Municipio": "MARTORELLES",
        "RazonSocial": "MADRID RODRÍGUEZ ARMANDO",
        "CodigoCliente": 35312,
        "ViaPublica": "CALLE CAN FENOSA"
    },
    {
        "Municipio": "MASNOU, EL",
        "RazonSocial": "POLICRAM GRAPHIC ARTS S.L",
        "CodigoCliente": "08794",
        "ViaPublica": "CALLE MEXIC"
    },
    {
        "Municipio": "MASNOU, EL",
        "RazonSocial": "DECOLATAJE INDUSTRIAL KAMER, S.L",
        "CodigoCliente": "09489",
        "ViaPublica": "CALLE ELS GARROFERS"
    },
    {
        "Municipio": "MASNOU, EL",
        "RazonSocial": "CAU D´IMATGE SL",
        "CodigoCliente": 11266,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "MASNOU, EL",
        "RazonSocial": "ALDI MASQUEFA SUPERMERCADOS S.L.U",
        "CodigoCliente": 34782,
        "ViaPublica": "AVENIDA DEL MARESME"
    },
    {
        "Municipio": "MATARO",
        "RazonSocial": "COMPAÑIA.ESP. DE AISLAMIENTOS,S.A**",
        "CodigoCliente": 2710,
        "ViaPublica": "CALLE CARRASCO I FORMIGUERA"
    },
    {
        "Municipio": "MATARO",
        "RazonSocial": "ALUMBRADOS VIARIOS S.A.",
        "CodigoCliente": 11027,
        "ViaPublica": "CALLE FONERIA"
    },
    {
        "Municipio": "MATARO",
        "RazonSocial": "NIOLOQUE SL",
        "CodigoCliente": 33393,
        "ViaPublica": "CALLE GERMANS THOS I CODINA"
    },
    {
        "Municipio": "MATARO",
        "RazonSocial": "NEWCO CLASSPACK PARTNERS S.L",
        "CodigoCliente": 33446,
        "ViaPublica": "CALLE BATISTA I ROCA"
    },
    {
        "Municipio": "MATARO",
        "RazonSocial": "COMUNIDAD DE PROPIETARIOS C/REMENCES 12",
        "CodigoCliente": 33583,
        "ViaPublica": "CALLE DELS REMENCES"
    },
    {
        "Municipio": "MATARO",
        "RazonSocial": "ETIQUETAS DOMINGO SL",
        "CodigoCliente": 34915,
        "ViaPublica": "CALLE GENERE DE PUNT"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "COMTRAFO, S.L.",
        "CodigoCliente": 2502,
        "ViaPublica": "CALLE MIQUEL TORELLO I PAGES"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "RIVERSA, S.A. CUIDA EL MEDIO A",
        "CodigoCliente": 2592,
        "ViaPublica": "CALLE FRANCESC LAYRET"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "FERVIGRAF 2002, S.L.",
        "CodigoCliente": 2607,
        "ViaPublica": "CALLE LA GINESTA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "AQL PROTECCION, S.A.",
        "CodigoCliente": 2651,
        "ViaPublica": "N-340"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "FINISH METAL PLATING, S.L.",
        "CodigoCliente": 2661,
        "ViaPublica": "CALLE MIQUEL TORELLO I PAGES"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "FINISH METAL PLATING, S.L.",
        "CodigoCliente": 2661,
        "ViaPublica": "AVENIDA BARCELONA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "EVEREST-TECNOVET, S.L.",
        "CodigoCliente": "04051",
        "ViaPublica": "CALLE FRANCESC LAYRET"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "FUSTES ANDREU, S.A",
        "CodigoCliente": "04210",
        "ViaPublica": "AVENIDA BARCELONA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "PROTECNICS GLOBAL, S.L.",
        "CodigoCliente": "05230",
        "ViaPublica": "CALLE HORTA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "TRANSPORTES FRIGORIFICOS PROF. S.L.",
        "CodigoCliente": 7173,
        "ViaPublica": "CALLE HORTA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "SUBPRODUCTES MC S.L",
        "CodigoCliente": "07899",
        "ViaPublica": "AVENIDA BARCELONA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "ACCESORIOS SANITARIOS JLH, S.L.",
        "CodigoCliente": "07913",
        "ViaPublica": "CALLE RIERA CAN PAHISSA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "CARROCERIAS BOFILL S.L.",
        "CodigoCliente": "08627",
        "ViaPublica": "CALLE HORTA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "CATWALK 669 S.L.",
        "CodigoCliente": 10440,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "COMPUTRONIC 5000 S.L.",
        "CodigoCliente": 10461,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "ISOMETRIC MECHANIZED PIPELINE SL",
        "CodigoCliente": 12281,
        "ViaPublica": "CALLE PLA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "MANFREDI MOTOR AUTOMOCION S.L.",
        "CodigoCliente": 12332,
        "ViaPublica": "AVENIDA BARCELONA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "FOTIMA IMPORT S.L.",
        "CodigoCliente": 12339,
        "ViaPublica": "CALLE LLOBREGAT"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "BARNACROP, S.L.U",
        "CodigoCliente": 13198,
        "ViaPublica": "CALLE PLA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "ASSOCIACIO LA CASA URBANA",
        "CodigoCliente": 13382,
        "ViaPublica": "CALLE FRANCESC LAYRET"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "GUILERA, S.A",
        "CodigoCliente": 34304,
        "ViaPublica": "CALLE RAMON LLULL"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "KIN BON PLA, S.L.",
        "CodigoCliente": 34604,
        "ViaPublica": "CALLE MIQUEL TORELLO I PAGES"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "VIRTUAL REALTY EXPIRIENCE S.L",
        "CodigoCliente": 34658,
        "ViaPublica": "CALLE MIQUEL TORELLO I PAGES"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "BYG SA",
        "CodigoCliente": 36621,
        "ViaPublica": "CALLE PLA"
    },
    {
        "Municipio": "MOLINS DE REI",
        "RazonSocial": "VIÑALS GOURMET S.L.",
        "CodigoCliente": 85100,
        "ViaPublica": "CALLE HORTA"
    },
    {
        "Municipio": "MOLLET DEL VALLES",
        "RazonSocial": "SERIMAN PRINTER S.L.",
        "CodigoCliente": 34421,
        "ViaPublica": "CARRER DE  FRIEDRICH WILHELM SERTÜNER"
    },
    {
        "Municipio": "MOLLET DEL VALLES",
        "RazonSocial": "SPORT 333 S.A.",
        "CodigoCliente": 34483,
        "ViaPublica": "AVENIDA ANTONI GAUDI"
    },
    {
        "Municipio": "MOLLET DEL VALLES",
        "RazonSocial": "JONATHAN NAVARRO ALARCON",
        "CodigoCliente": 35269,
        "ViaPublica": "CALLE GALLECS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "TALLERES CALFOR, S.L.",
        "CodigoCliente": "00174",
        "ViaPublica": "?CALLE CARGOL"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "CHINA CENTURY INVESTMENT  S.L",
        "CodigoCliente": "03274",
        "ViaPublica": "CALLE TAPIOLES"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "VORTROM S.R.L.",
        "CodigoCliente": "04321",
        "ViaPublica": "CALLE DEL PROGRES"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "STILCONDAL, S.A.",
        "CodigoCliente": "04353",
        "ViaPublica": "AVENIDA LA FERRERIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "GAESTOPAS, S.L.",
        "CodigoCliente": "04492",
        "ViaPublica": "AVENIDA LA FERRERIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "ALUMINIO PVC Y VIDRIO ALUNOU S.L",
        "CodigoCliente": "05080",
        "ViaPublica": "CALLE DEL PROGRES"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "IBERICA DE ESTANQUEIDAD, S.A.",
        "CodigoCliente": 6062,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "BLOO CONCEPT S.L.",
        "CodigoCliente": 6120,
        "ViaPublica": "CALLE DE L' ELECTRONICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "LAPPSET ESPAÑA VR S.L.",
        "CodigoCliente": 6134,
        "ViaPublica": "CALLE DE LA CERAMICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "RUSTIGUET S.L.",
        "CodigoCliente": 6138,
        "ViaPublica": "CALLE MOLI D'EN BISBE"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "EMILIANO MARTIN,S.A",
        "CodigoCliente": 6142,
        "ViaPublica": "AVENIDA LA FERRERIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "BARNIZADOS GOPECOSA S.L.",
        "CodigoCliente": 6286,
        "ViaPublica": "CAN MILANS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "MOBILIARIO Y DISEÑO AMFORA S.L",
        "CodigoCliente": 6287,
        "ViaPublica": "CALLE DEL MIG"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "PRAM PARQUETS VALLES SL",
        "CodigoCliente": 6295,
        "ViaPublica": "CALLE BEAT ORIOL"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "HERMANOS ALMANSA SL",
        "CodigoCliente": 6300,
        "ViaPublica": "CAN MILANS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "FRAPAK IBERIA, S.L.",
        "CodigoCliente": 6473,
        "ViaPublica": "CAN MILANS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "UTILCONTROL S.L.",
        "CodigoCliente": 6535,
        "ViaPublica": "CALLE DE LA FISICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "COMERCIAL  ANCRISA 2001 S.L.",
        "CodigoCliente": 6759,
        "ViaPublica": "CALLE SEGRE"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "MADERAS DEL ALTO URGEL, S.A.",
        "CodigoCliente": 7029,
        "ViaPublica": "CAN MILANS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "MOLMASA INDUSTRIAL DE MOLDES S.L.U",
        "CodigoCliente": 7186,
        "ViaPublica": "AVENIDA LA FERRERIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "ESSENTIAL PROCESS, S.L.",
        "CodigoCliente": "07720",
        "ViaPublica": "CALLE CAN TAPIOLA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "TOOL QUICK ALQUILER S.L.",
        "CodigoCliente": "07748",
        "ViaPublica": "CAN MILANS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "PRODUCTOS ADITIVOS, S.A.",
        "CodigoCliente": "07808",
        "ViaPublica": "AVENIDA LA FERRERIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "RELIANCE WORLDWIDE CORPORATION  SLU",
        "CodigoCliente": "08349",
        "ViaPublica": "CALLE DE L' ELECTRONICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "NUEVAS TECNICAS DEL REVESTIMIENTO S.A",
        "CodigoCliente": "08372",
        "ViaPublica": "CARRER ROCA PLANA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "ORIENTAL MARKET FRANCHISING S.L.",
        "CodigoCliente": "09365",
        "ViaPublica": "CALLE DE LA HIDRAULICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "MANTENIMIENTO Y OPERACION INFRAEST, S.L.",
        "CodigoCliente": "09415",
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "COMPAÑIA DE PRODUCTOS NATURALES LLEÓ SL",
        "CodigoCliente": "09825",
        "ViaPublica": "CALLE BACH"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "ROPE SAFETY S.L.",
        "CodigoCliente": 10315,
        "ViaPublica": "CALLE DEL MIG"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "LATELIE CONTRACT S.L",
        "CodigoCliente": 11146,
        "ViaPublica": "CARRER ROCA PLANA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "CONFHYDRA SOLUTIONS S.L.",
        "CodigoCliente": 11377,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "GALLÉN TRULLÉN Y CIA S.A.",
        "CodigoCliente": 11657,
        "ViaPublica": "CALLE DEL MIG"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "HERMANS GRABADOS BARCELONA, S.L.",
        "CodigoCliente": 11671,
        "ViaPublica": "? DE LA TELEMATICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "DEPISA COATING SOLUTIONS SL",
        "CodigoCliente": 11832,
        "ViaPublica": "CALLE DELS FUSTERS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "ENERGY SERVICES LIGHTING S.L.U",
        "CodigoCliente": 11896,
        "ViaPublica": "CALLE GAIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "MANUFACTURAS MONTISERV SL",
        "CodigoCliente": 12275,
        "ViaPublica": "CALLE DE LA CERAMICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "PARQUETS MOPESA SL",
        "CodigoCliente": 12384,
        "ViaPublica": "CALLE GAIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "JORDI NAVARRETE FIGUERAS",
        "CodigoCliente": 12489,
        "ViaPublica": "LLOC CAN TUXANS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "AUTOLAVADO LLAGOSTA SL",
        "CodigoCliente": 12521,
        "ViaPublica": "CAN MILANS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "MYTPLAST SA",
        "CodigoCliente": 12739,
        "ViaPublica": "CALLE CAN CUYAS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "AP CONTROL CARAVANING SL.",
        "CodigoCliente": 12764,
        "ViaPublica": "CALLE CAN CUYAS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "CORONA BOREAL LICORES Y ZUMOS  S.L.",
        "CodigoCliente": 12795,
        "ViaPublica": "AVENIDA LA FERRERIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "FAA COROMINAS SL",
        "CodigoCliente": 13007,
        "ViaPublica": "CALLE GAIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "NNASTEPH IMPORT & EXPORT S.L.",
        "CodigoCliente": 13159,
        "ViaPublica": "CARRETERA RIPOLLET"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "HERRAJES DUCASSE IBERICA S.L.",
        "CodigoCliente": 33756,
        "ViaPublica": "CALLE DELS MANYANS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "TRIFERRUM S.L.",
        "CodigoCliente": 33761,
        "ViaPublica": "CALLE BEAT ORIOL"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "FIRE CONSULT, S.L.",
        "CodigoCliente": 33830,
        "ViaPublica": "CAN MILANS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "JVV GRUP MONTAJES Y DESARROLLOS DE PROYL",
        "CodigoCliente": 33949,
        "ViaPublica": "CALLE SEGRE"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "JVV GRUP MONTAJES Y DESARROLLOS DE PROYL",
        "CodigoCliente": 33949,
        "ViaPublica": "CALLE DEL MIG"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "EUROGRATE ESPAÑA S.L.",
        "CodigoCliente": 34351,
        "ViaPublica": "CALLE DE L' ELECTRONICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "VALIENTE SOLDADO S.L.",
        "CodigoCliente": 34363,
        "ViaPublica": "AVENIDA LA FERRERIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "VIRAMAR NAUTIC, S.L.",
        "CodigoCliente": 34490,
        "ViaPublica": "CALLE CAN CUYAS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "OPERADOR LOGISTIC CATALA S.L.",
        "CodigoCliente": 34676,
        "ViaPublica": "CALLE DE L' ELECTRONICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "SAHI BROTHERS, S.L.",
        "CodigoCliente": 34798,
        "ViaPublica": "CAN MILANS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "EACOM INGENIEROS Y CONSULTORES, S.A.",
        "CodigoCliente": 34814,
        "ViaPublica": "CALLE DE L' ELECTRICITAT"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "REBULL MARTIN DISTRIBUCIONS S.L",
        "CodigoCliente": 36110,
        "ViaPublica": "CALLE GAIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "SIP GENERATORS SPAIN S.L.",
        "CodigoCliente": 36491,
        "ViaPublica": "CALLE DE LA CERAMICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "VICTORIA ZAMBRANO FUENTES",
        "CodigoCliente": 36551,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "FASECE 5 S.L.",
        "CodigoCliente": 36565,
        "ViaPublica": "AVENIDA LA FERRERIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "BARNICES Y MOLDURAS CATALONIA SL",
        "CodigoCliente": 36605,
        "ViaPublica": "CALLE ARQUITECTURA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "ALHORA LOGISTICS S.L.",
        "CodigoCliente": 36717,
        "ViaPublica": "AVENIDA LA FERRERIA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "MOTORSPORT TOTAL SERVICE SL",
        "CodigoCliente": 36784,
        "ViaPublica": "CALLE DE L' ELECTRONICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "LASSER ELEC FACILITIES S.L.",
        "CodigoCliente": 37001,
        "ViaPublica": "CALLE DELS VIDRIERS"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "CLIMAMANIA SALES SPAIN S.L",
        "CodigoCliente": 85077,
        "ViaPublica": "CALLE DE L' ELECTRONICA"
    },
    {
        "Municipio": "MONTCADA I REIXAC",
        "RazonSocial": "INAD-HOC HABITAT SL",
        "CodigoCliente": 85091,
        "ViaPublica": "CALLE DEL PROGRES"
    },
    {
        "Municipio": "MONTGAT",
        "RazonSocial": "INTEGRACIONES PANADERAS S.L",
        "CodigoCliente": "00490",
        "ViaPublica": "PASSATGE TIL.LERS"
    },
    {
        "Municipio": "MONTGAT",
        "RazonSocial": "SUBPRODUCTES MC S.L",
        "CodigoCliente": "07899",
        "ViaPublica": "CALLE JOAQUIM COSTA"
    },
    {
        "Municipio": "MONTGAT",
        "RazonSocial": "TRADICIO ARTESANIA I CUINA JGE, S.L",
        "CodigoCliente": "08777",
        "ViaPublica": "VIAL DE LES PEDRERES"
    },
    {
        "Municipio": "MONTGAT",
        "RazonSocial": "LINEAR CHEMICALS S.L.U",
        "CodigoCliente": "09487",
        "ViaPublica": "CALLE PARE CLARET"
    },
    {
        "Municipio": "MONTGAT",
        "RazonSocial": "DVIZI XOCOLAT SL",
        "CodigoCliente": "09494",
        "ViaPublica": "VIAL DE LES PEDRERES"
    },
    {
        "Municipio": "MONTGAT",
        "RazonSocial": "BUREAU DE ORGANI.SOLDADURA Y ENSAYOS,SL",
        "CodigoCliente": "09609",
        "ViaPublica": "VIAL DE LES PEDRERES"
    },
    {
        "Municipio": "MONTGAT",
        "RazonSocial": "JORDI PEREZ JIMENEZ",
        "CodigoCliente": 10569,
        "ViaPublica": "VIAL DE LES PEDRERES"
    },
    {
        "Municipio": "MONTGAT",
        "RazonSocial": "TECNOMECANO, S.L.",
        "CodigoCliente": 34703,
        "ViaPublica": "RIERA SANT JORDI"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "AGRICOLA MARCILLA S.L",
        "CodigoCliente": "07669",
        "ViaPublica": "CALLE VERNEDA DEL CONGOST"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "ART GRAFIC PARERA, S.L.",
        "CodigoCliente": "08103",
        "ViaPublica": "CALLE REC MOLINAR"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "CAMPOS TELECOM, S.L",
        "CodigoCliente": "09990",
        "ViaPublica": "CALLE TELEGRAF"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "EFEBE GROUP INT, S.L.",
        "CodigoCliente": 10036,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "EMBOTITS NIETO, S.L.",
        "CodigoCliente": 10552,
        "ViaPublica": "CALLE REC MOLINAR"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "SOLUCIONES METÁLICAS FERRER S.L.",
        "CodigoCliente": 10619,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "LABORATORIO DIGITAL HIGHTEETH S.L.",
        "CodigoCliente": 10779,
        "ViaPublica": "PASSEIG RIU BESOS"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "DECO PLUS 2016 SL",
        "CodigoCliente": 11778,
        "ViaPublica": "CALLE PROGRES"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "ARIBAU TRANSPORTES Y MONTAJES SLU",
        "CodigoCliente": 12681,
        "ViaPublica": "CALLE PROGRES"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "AUTOMATED TRANSACTIONS SL",
        "CodigoCliente": 33677,
        "ViaPublica": "CALLE TELEGRAF"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "AIRSEC,S.A",
        "CodigoCliente": 33804,
        "ViaPublica": "CALLE PROGRES"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "SALA´S CENTER, S.L",
        "CodigoCliente": 34500,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "TOT NET SERV.DE LIMPIEZAS GRUPO NETTO SA",
        "CodigoCliente": 34730,
        "ViaPublica": "CALLE DEL RAIGUER"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "METAL-TEST S.L.",
        "CodigoCliente": 35806,
        "ViaPublica": "CALLE MAS MORENETA"
    },
    {
        "Municipio": "MONTMELO",
        "RazonSocial": "PROMOSERIAL GRAFIC S.L.",
        "CodigoCliente": 36064,
        "ViaPublica": "CALLE FONDO DE CAN GUITET"
    },
    {
        "Municipio": "MONTORNES DEL VALLES",
        "RazonSocial": "MORTERO BENSEC, S.L.U.",
        "CodigoCliente": "07755",
        "ViaPublica": "POLIGONO EL CONGOST"
    },
    {
        "Municipio": "MONTORNES DEL VALLES",
        "RazonSocial": "MEET SIRIUS, S.L.",
        "CodigoCliente": "09880",
        "ViaPublica": "POLIGONO EL CONGOST"
    },
    {
        "Municipio": "MONTORNES DEL VALLES",
        "RazonSocial": "ANAF EXTINTORES DE ESPANA, S.L.",
        "CodigoCliente": 10126,
        "ViaPublica": "CALLE DE CAN PARELLADA"
    },
    {
        "Municipio": "MONTORNES DEL VALLES",
        "RazonSocial": "FACTOR LAMBDA S.L.",
        "CodigoCliente": 10241,
        "ViaPublica": "CALLE DE VILAR D'ABDELA"
    },
    {
        "Municipio": "MONTORNES DEL VALLES",
        "RazonSocial": "HORTISFERA S.L",
        "CodigoCliente": 11847,
        "ViaPublica": "CALLE DEL RAIGUER"
    },
    {
        "Municipio": "MONTORNES DEL VALLES",
        "RazonSocial": "NIUGLAM S.L.",
        "CodigoCliente": 11892,
        "ViaPublica": "CALLE DE LA CASA NOVA"
    },
    {
        "Municipio": "MONTORNES DEL VALLES",
        "RazonSocial": "M&J METALL I ESTRUCTURES S.L.",
        "CodigoCliente": 12077,
        "ViaPublica": "CALLE DE CAN BOSQUERONS"
    },
    {
        "Municipio": "MONTORNES DEL VALLES",
        "RazonSocial": "TRANSFORMADOS DEL VALLES, S.L.",
        "CodigoCliente": 34466,
        "ViaPublica": "CALLE DEL RAIGUER"
    },
    {
        "Municipio": "MONTORNES DEL VALLES",
        "RazonSocial": "CATALONIA2017 SERVICIOS INDUSTRIALES SL",
        "CodigoCliente": 36391,
        "ViaPublica": "CALLE DE CAN BOSQUERONS"
    },
    {
        "Municipio": "OLERDOLA",
        "RazonSocial": "COMPOSITE TORLOP S.L",
        "CodigoCliente": 13321,
        "ViaPublica": "CALLE MONTSENY"
    },
    {
        "Municipio": "OLERDOLA",
        "RazonSocial": "DOLÇMAT LLAMINADURES SL",
        "CodigoCliente": 36597,
        "ViaPublica": "CALLE CABERNET"
    },
    {
        "Municipio": "OLERDOLA",
        "RazonSocial": "NOUSUMAPE SA",
        "CodigoCliente": 36706,
        "ViaPublica": "CALLE PARELLADA"
    },
    {
        "Municipio": "OLESA DE MONTSERRAT",
        "RazonSocial": "PASSER MOVERS S.L",
        "CodigoCliente": 7050,
        "ViaPublica": "CAMI VILAPOU"
    },
    {
        "Municipio": "PALAFOLLS",
        "RazonSocial": "MENJARS EUROPEUS, S.L",
        "CodigoCliente": 12776,
        "ViaPublica": "CALLE METAL.LISTES"
    },
    {
        "Municipio": "PALAU DE PLEGAMANS",
        "RazonSocial": "NOUS PROJECTES RAM AIGUA S.L",
        "CodigoCliente": 7141,
        "ViaPublica": "AVENIDA DEL CAMI REIAL"
    },
    {
        "Municipio": "PALAU DE PLEGAMANS",
        "RazonSocial": "MECAPERSOT S.L.",
        "CodigoCliente": "07747",
        "ViaPublica": "CARRETERA DE SABADELL A GRANOLLERS"
    },
    {
        "Municipio": "PALAU DE PLEGAMANS",
        "RazonSocial": "MS LINEAS PROPIAS, S.L.",
        "CodigoCliente": "08735",
        "ViaPublica": "RONDA DE BOADA VELL"
    },
    {
        "Municipio": "PALLEJA",
        "RazonSocial": "LOGÍSTICA MASDATRANS SL",
        "CodigoCliente": "07339",
        "ViaPublica": "AVENIDA PRAT DE LA RIBA"
    },
    {
        "Municipio": "PALLEJA",
        "RazonSocial": "FINCO S.L.",
        "CodigoCliente": "09339",
        "ViaPublica": "CALLE TECNOLOGIA"
    },
    {
        "Municipio": "PALLEJA",
        "RazonSocial": "BUSINESS KEY S.L",
        "CodigoCliente": 11111,
        "ViaPublica": "CALLE COMERÇ"
    },
    {
        "Municipio": "PALLEJA",
        "RazonSocial": "ALQUILER DE MAQUINARIA JCB SL",
        "CodigoCliente": 11785,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "PALLEJA",
        "RazonSocial": "GEOAMBIENT CONSULTORIA GEOLOGICA SL",
        "CodigoCliente": 33352,
        "ViaPublica": "AVENIDA PRAT DE LA RIBA"
    },
    {
        "Municipio": "PALLEJA",
        "RazonSocial": "FADIVEN SL",
        "CodigoCliente": 34667,
        "ViaPublica": "RONDA SANTA EULALIA"
    },
    {
        "Municipio": "PALLEJA",
        "RazonSocial": "LATORRE RIBAS, JORDI",
        "CodigoCliente": 34900,
        "ViaPublica": "CALLE MARE DE DEU DE MONTSERRAT"
    },
    {
        "Municipio": "PALLEJA",
        "RazonSocial": "DECORACION Y MONTAJE J E R, S.L.",
        "CodigoCliente": 35658,
        "ViaPublica": "CALLE DEL PLA DE L'OLIVELLA"
    },
    {
        "Municipio": "PALLEJA",
        "RazonSocial": "MUNDIAL GOURMET, S. A",
        "CodigoCliente": 35802,
        "ViaPublica": "AVENIDA PRAT DE LA RIBA"
    },
    {
        "Municipio": "PALLEJA",
        "RazonSocial": "IT DISPLAYS DESIGN, S.L.",
        "CodigoCliente": 85096,
        "ViaPublica": "AVINGUDA DE LA RIBERA"
    },
    {
        "Municipio": "PALMA DE CERVELLO (LA)",
        "RazonSocial": "PIZARA CAR, S.L.",
        "CodigoCliente": 37214,
        "ViaPublica": "CALLE TRAMUNTANA"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "SERRA CIMENTS, S.L.",
        "CodigoCliente": "00067",
        "ViaPublica": "CALLE MONTURIOL"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "AQUATALL WATERJET SYSTEMS S.L",
        "CodigoCliente": "04943",
        "ViaPublica": "CALLE MONTURIOL"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "ADVANCED PROSER, S.L.",
        "CodigoCliente": 6977,
        "ViaPublica": "CALLE SALVADOR ESPRIU"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "TOI TOI SANITARIOS MOVILES S.A",
        "CodigoCliente": 7051,
        "ViaPublica": "CARRERA CALDES"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "UTILLATGES I MECANITZATS SANTACANA,S.L.L",
        "CodigoCliente": "09661",
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "SURYA, S.A",
        "CodigoCliente": 10931,
        "ViaPublica": "CALLE TORRENTERES"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "BOMBAS VALERO, S.L.",
        "CodigoCliente": 12658,
        "ViaPublica": "TORRENT DE LES ARGILES"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "GERHARD GRENZING, S.A.",
        "CodigoCliente": 33405,
        "ViaPublica": "CALLE EDISON"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "LONESJ2M SL",
        "CodigoCliente": 34794,
        "ViaPublica": "CALLE ENRIC GRANADOS"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "TECHNO-KLEEN SL",
        "CodigoCliente": 35506,
        "ViaPublica": "CALLE ENRIC GRANADOS"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "TRANSPORTES GERMAN AGOUT SL",
        "CodigoCliente": 35519,
        "ViaPublica": "CALLE GUTTEMBERG"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "BONNIN TRANSPORTS I LOGISTICA S.L.",
        "CodigoCliente": 35834,
        "ViaPublica": "CALLE NEWTON"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "BONNIN TRANSPORTS I LOGISTICA S.L.",
        "CodigoCliente": 35834,
        "ViaPublica": "CALLE SALVADOR ESPRIU"
    },
    {
        "Municipio": "PAPIOL, EL",
        "RazonSocial": "PROYECTO EVO EXPRESS SL",
        "CodigoCliente": 36001,
        "ViaPublica": "CALLE SALVADOR ESPRIU"
    },
    {
        "Municipio": "PARETS DEL VALLES",
        "RazonSocial": "PROACTIV SL.",
        "CodigoCliente": 6722,
        "ViaPublica": "CALLE BASSA"
    },
    {
        "Municipio": "PARETS DEL VALLES",
        "RazonSocial": "SERTRANS S.A",
        "CodigoCliente": 7192,
        "ViaPublica": "CALLE GARBI"
    },
    {
        "Municipio": "PARETS DEL VALLES",
        "RazonSocial": "SPM LOGISTICA INTEGRAL, S.L",
        "CodigoCliente": "07610",
        "ViaPublica": "CALLE LLEVANT INDUSTRIAL"
    },
    {
        "Municipio": "PARETS DEL VALLES",
        "RazonSocial": "ALP GIEG, S.L.",
        "CodigoCliente": "09959",
        "ViaPublica": "CALLE EDISON"
    },
    {
        "Municipio": "PARETS DEL VALLES",
        "RazonSocial": "GRUPO K 2020 SL",
        "CodigoCliente": 10013,
        "ViaPublica": "CAMI DE CAN GUASCH"
    },
    {
        "Municipio": "PARETS DEL VALLES",
        "RazonSocial": "TCARS GARAJE 2019 S.L.",
        "CodigoCliente": 11955,
        "ViaPublica": "CALLE CAN GUASCH"
    },
    {
        "Municipio": "PARETS DEL VALLES",
        "RazonSocial": "EL MESON DE FERMOSELLE SL",
        "CodigoCliente": 12360,
        "ViaPublica": "CALLE GARBI"
    },
    {
        "Municipio": "PARETS DEL VALLES",
        "RazonSocial": "2015 TRANSERVEM MOLLET SL",
        "CodigoCliente": 35495,
        "ViaPublica": "CALLE CAN GUASCH"
    },
    {
        "Municipio": "PARETS DEL VALLES",
        "RazonSocial": "FLAMES DE VERITAT SL",
        "CodigoCliente": 35908,
        "ViaPublica": "? VOLTA"
    },
    {
        "Municipio": "PINEDA DE MAR",
        "RazonSocial": "KANKYO YOUPIN, SL",
        "CodigoCliente": 36853,
        "ViaPublica": "CALLE FRANKLIN"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "DESIMSA IMAGEN INTEGRAL, S.L.",
        "CodigoCliente": "00103",
        "ViaPublica": "PASSEIG SANLLEHY"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "VULCANITZATS BARCELONA SCP",
        "CodigoCliente": "00264",
        "ViaPublica": "CALLE PINTOR VILACINCA"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "TROMBER DEVELOPMENT, S.L.",
        "CodigoCliente": "05235",
        "ViaPublica": "CALLE D' ANTONI TAPIES"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "LOGISTICA Y GRANALLA, S.L.",
        "CodigoCliente": 6399,
        "ViaPublica": "CALLE GRIFE PILOS"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "AGRUPACION COMERCIAL MECANICA,",
        "CodigoCliente": 6927,
        "ViaPublica": "CALLE PINTOR JOAN MIRO"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "AFINACION MP, S.L.",
        "CodigoCliente": 7031,
        "ViaPublica": "PASSEIG SANLLEHY"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "ÓPTIMA ENVIRONMENTAL SERVICES S.L.",
        "CodigoCliente": 7084,
        "ViaPublica": "CALLE PINTOR SERT"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "BASPIN, S.L.",
        "CodigoCliente": 7128,
        "ViaPublica": "CALLE MESTRAL"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "TEXSIL TEJIDOS AISLANTES S.L",
        "CodigoCliente": 7175,
        "ViaPublica": "PASSEIG SANLLEHY"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "TEGA GESTIÓ AMBIENTAL, SL",
        "CodigoCliente": "07780",
        "ViaPublica": "CALLE PINTOR VELAZQUEZ"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "ANETO S.A.",
        "CodigoCliente": "09916",
        "ViaPublica": "CALLE TRAMUNTANA"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "VALLAS & TOILETS SL.",
        "CodigoCliente": 10923,
        "ViaPublica": "PASSEIG SANLLEHY"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "GIZANI TRANSLOGISTICS S.L.",
        "CodigoCliente": 11784,
        "ViaPublica": "CALLE TRAMUNTANA"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "GLOBAL CARRETILLAS ELEVADORAS SL.",
        "CodigoCliente": 11813,
        "ViaPublica": "CALLE PALAU DE PLEGAMANS"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "CATALANA DE SIDERURGICOS ESPECIALES S.A.",
        "CodigoCliente": 34683,
        "ViaPublica": "CALLE PINTOR VILACINCA"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "MANUEL MIRANDA GUTIERREZ",
        "CodigoCliente": 34817,
        "ViaPublica": "CALLE PINTOR CASAS"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "ENDUTEX IBERICA S.A.",
        "CodigoCliente": 35056,
        "ViaPublica": "CALLE MESTRAL"
    },
    {
        "Municipio": "POLINYA",
        "RazonSocial": "JIMETRANS GARCIA S.L.",
        "CodigoCliente": 36824,
        "ViaPublica": "CALLE PINTOR JOAN MIRO"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "ALTERRA, S.L.",
        "CodigoCliente": 2482,
        "ViaPublica": "CALLE PENEDES"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "PRAT MOTOR, S.L. / OPEL",
        "CodigoCliente": 2487,
        "ViaPublica": "AVENIDA REMOLAR"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "PRAT MOTOR, S.L. / OPEL",
        "CodigoCliente": 2487,
        "ViaPublica": "CALLE CERDANYA"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "MUNDIAUTO-2000, S.L.",
        "CodigoCliente": 2494,
        "ViaPublica": "CARRERA CA L'ALAIO"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "BLUE TOWER, S.L.",
        "CodigoCliente": 2507,
        "ViaPublica": "CALLE LO GAITER DEL LLOBREGAT"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "LABORATORIOS DR.OLIVER RODES",
        "CodigoCliente": 2511,
        "ViaPublica": "CALLE LES MORERES"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "DANIEL ROSAS, S.A.",
        "CodigoCliente": 2543,
        "ViaPublica": 100
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "GIESECKE+DEVRIENT EPAYMENTS IBERIA, S.A.",
        "CodigoCliente": 2637,
        "ViaPublica": 114
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "SCANBIO,  S.A.",
        "CodigoCliente": 6024,
        "ViaPublica": "CALLE CERDANYA"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "CALAMIT ESPAÑA S.L.",
        "CodigoCliente": 6101,
        "ViaPublica": "CALLE RIPOLLES"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "SALAZONES MARTINEZ ISOMAR S.L.",
        "CodigoCliente": 6227,
        "ViaPublica": "CALLE LES MORERES"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "GUILLIN ESPAÑA S.L.",
        "CodigoCliente": 6514,
        "ViaPublica": "CALLE CAL PI DE L'OLLA"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "LOOMIS SPAIN, S.A.",
        "CodigoCliente": 6814,
        "ViaPublica": "AVENIDA GARRIGUES"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "BLUE RETAIL, S.L.",
        "CodigoCliente": 6877,
        "ViaPublica": "CALLE LO GAITER DEL LLOBREGAT"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "TIMERSA  LOGISTICA, S.A.",
        "CodigoCliente": 6881,
        "ViaPublica": "AVENIDA VERGE MONTSERRAT"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "TRANSELEVACION, S.L.",
        "CodigoCliente": 6882,
        "ViaPublica": "CALLE LES MORERES"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "COSMOPARTNER,S.A.",
        "CodigoCliente": 6904,
        "ViaPublica": 100
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "COSMOPARTNER,S.A.",
        "CodigoCliente": 6904,
        "ViaPublica": "CALLE LO GAITER DEL LLOBREGAT"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "MANIPULADOS ELECTRICOS, S.L,.",
        "CodigoCliente": 6965,
        "ViaPublica": "CALLE EL PRAT"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "SERPPLAS, S.A.",
        "CodigoCliente": 6983,
        "ViaPublica": "CALLE CERDANYA"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "PLASTIFICADOS 88, S.L.",
        "CodigoCliente": 6984,
        "ViaPublica": "CALLE CERDANYA"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "POLY-PRAT SA.",
        "CodigoCliente": 7165,
        "ViaPublica": "CALLE CERDANYA"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "MONTAJES MEDYP S.L",
        "CodigoCliente": 7201,
        "ViaPublica": "CALLE LO GAITER DEL LLOBREGAT"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "CALDESTRUCH 1992 S.L.",
        "CodigoCliente": "08112",
        "ViaPublica": "CALLE LES MORERES"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "AMARA S.A",
        "CodigoCliente": "08367",
        "ViaPublica": 114
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "BUILDING ELEVATOR TECHNOLOGY S.L.",
        "CodigoCliente": 10825,
        "ViaPublica": "CALLE LES MORERES"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "BLUE WATTER SHIPPING ESPAÑA S.A.",
        "CodigoCliente": 10905,
        "ViaPublica": "CALLE CAL CORACERO"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "BAYPORT GLOBAL SUPPLIES,S.A",
        "CodigoCliente": 10928,
        "ViaPublica": 100
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "FUNDACIÓ RUBRICATUS",
        "CodigoCliente": 10976,
        "ViaPublica": "CARRERA CA L'ALAIO"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "FUNDACIÓ RUBRICATUS",
        "CodigoCliente": 10976,
        "ViaPublica": "CALLE GIRONA"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "ILLA COOP DE SERVEIS SCCL",
        "CodigoCliente": 11114,
        "ViaPublica": "CALLE RECTOR PERE PELLICER"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "DELTA DEPOT BARCELONA S.L.",
        "CodigoCliente": 11169,
        "ViaPublica": "AVENIDA ESTANY DE PORT"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "EMPRESA MONFORTE SAU",
        "CodigoCliente": 34227,
        "ViaPublica": "CALLE ANTOINE DE SAINT-EXUPERY"
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "ASLYX PROPARTS S.L.",
        "CodigoCliente": 36119,
        "ViaPublica": 100
    },
    {
        "Municipio": "PRAT DE LLOBREGAT, EL",
        "RazonSocial": "MANUFACTURAS CLIMA SAU",
        "CodigoCliente": 36364,
        "ViaPublica": 114
    },
    {
        "Municipio": "PREMIA DE DALT",
        "RazonSocial": "DECOMAR SCP",
        "CodigoCliente": "08811",
        "ViaPublica": "CALLE GARBI"
    },
    {
        "Municipio": "PREMIA DE DALT",
        "RazonSocial": "ALBAETI, S.L.",
        "CodigoCliente": 10278,
        "ViaPublica": "CALLE XALOC"
    },
    {
        "Municipio": "PREMIA DE DALT",
        "RazonSocial": "CORMA SCCL",
        "CodigoCliente": 85122,
        "ViaPublica": "CAMI MIG"
    },
    {
        "Municipio": "PREMIA DE MAR",
        "RazonSocial": "PORT PREMIÀ ADMINISTRACIÓ S.L.",
        "CodigoCliente": "08422",
        "ViaPublica": "CAMI RAL"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "ROMAG S.A.",
        "CodigoCliente": "04397",
        "ViaPublica": "AVENIDA DEL MEDITERRANI"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "ETIQUETAS ADHESIVAS, S.L.",
        "CodigoCliente": 6450,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "FOCUS MOBILIARIO, S.L.",
        "CodigoCliente": 6959,
        "ViaPublica": "CALLE URALITA"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "OLFRI ACEROS S.L.",
        "CodigoCliente": 7085,
        "ViaPublica": "PASSATGE DEL NIQUEL"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "TERRA ORTIZ S.L.",
        "CodigoCliente": 7091,
        "ViaPublica": "BARNEDA"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "ESTANQUEIDAD LATTY IBERICA,SL",
        "CodigoCliente": "09589",
        "ViaPublica": "CAN BARNEDA"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "NEW RP IMAGING SL",
        "CodigoCliente": "09738",
        "ViaPublica": "CALLE DEL RIU"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "COFFEE IS INCAPTO S.L.",
        "CodigoCliente": 10337,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "PROVEREST SEGURIDAD SL",
        "CodigoCliente": 33515,
        "ViaPublica": "CARRETERA SANTIGA"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "QUERIDO BARCO, S.L",
        "CodigoCliente": 33604,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "COMERCIAL JAPSA S.A.U.",
        "CodigoCliente": 34076,
        "ViaPublica": "CALLE BILBAO"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "FAITHFUL S.L.",
        "CodigoCliente": 34112,
        "ViaPublica": "LLOC MOLI D'EN XEC"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "TOT NET SERV.DE LIMPIEZAS GRUPO NETTO SA",
        "CodigoCliente": 34730,
        "ViaPublica": "CALLE DOCTOR GIL"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "TOT NET SERV.DE LIMPIEZAS GRUPO NETTO SA",
        "CodigoCliente": 34730,
        "ViaPublica": "AVENIDA DEL RIU RIPOLL"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "ENCOPIM, S.L.",
        "CodigoCliente": 34738,
        "ViaPublica": "CARRETERA SANTIGA"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "ENCOPIM, S.L.",
        "CodigoCliente": 34738,
        "ViaPublica": "CALLE DEL PARC"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "MODERN RECICLA S.L.",
        "CodigoCliente": 35208,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "RIPOLLET",
        "RazonSocial": "PORTUARIA INGENIERIA Y MANTENIMIENTOS SL",
        "CodigoCliente": 36278,
        "ViaPublica": "LLOC MOLI D'EN XEC"
    },
    {
        "Municipio": "RIUDELLOTS",
        "RazonSocial": "IMPORT & EXPORT LENCA S.L.",
        "CodigoCliente": 12965,
        "ViaPublica": "CARRER ONYAR"
    },
    {
        "Municipio": "RIUDELLOTS",
        "RazonSocial": "UNBRAKED MOTOR PARTS, S.L.U.",
        "CodigoCliente": 13079,
        "ViaPublica": "CARRER ONYAR"
    },
    {
        "Municipio": "RIUDELLOTS",
        "RazonSocial": "PLATAFORMA LOGISTICA 2003, SA",
        "CodigoCliente": 13263,
        "ViaPublica": "AVINGUDA DELS MAS PINS"
    },
    {
        "Municipio": "ROCA DEL VALLES, LA",
        "RazonSocial": "GRUP ALIMENT BCN, S.A.",
        "CodigoCliente": 6010,
        "ViaPublica": "CALLE GRANADA"
    },
    {
        "Municipio": "ROCA DEL VALLES, LA",
        "RazonSocial": "L'ALBA, S.A.",
        "CodigoCliente": 11788,
        "ViaPublica": "CARRETERA GRANOLLERS A CARDEDEU"
    },
    {
        "Municipio": "ROCA DEL VALLES, LA",
        "RazonSocial": "IOBOX SL",
        "CodigoCliente": 11790,
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "ROCA DEL VALLES, LA",
        "RazonSocial": "DOCVILER, S.L.",
        "CodigoCliente": 12959,
        "ViaPublica": "CALLE GIRONA"
    },
    {
        "Municipio": "ROCA DEL VALLES, LA",
        "RazonSocial": "J MATA TRANSP. I GESTIO DE RESIDUS SL",
        "CodigoCliente": 33904,
        "ViaPublica": "CALLE BONAVENTURA ARIBAU"
    },
    {
        "Municipio": "ROCA DEL VALLES, LA",
        "RazonSocial": "J MATA TRANSP. I GESTIO DE RESIDUS SL",
        "CodigoCliente": 33904,
        "ViaPublica": "CARRER THOMAS EDISSON"
    },
    {
        "Municipio": "ROCA DEL VALLES, LA",
        "RazonSocial": "ARSAGMETAL, S.L.",
        "CodigoCliente": 34041,
        "ViaPublica": "CALLE GIRONA"
    },
    {
        "Municipio": "ROCA DEL VALLES, LA",
        "RazonSocial": "MANEIG PISCINES, S.L.",
        "CodigoCliente": 34257,
        "ViaPublica": "CARRETERA GRANOLLERS A CARDEDEU"
    },
    {
        "Municipio": "ROCA DEL VALLES, LA",
        "RazonSocial": "CO2 TOTGAS, S.L",
        "CodigoCliente": 34383,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "ROCA DEL VALLES, LA",
        "RazonSocial": "SANZ MANOR SL",
        "CodigoCliente": 36676,
        "ViaPublica": "CALLE BONAVENTURA ARIBAU"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "REFRACTARIS CASTEL S.A.",
        "CodigoCliente": "00684",
        "ViaPublica": "AVENIDA CAN SUCARRATS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ELECTRICFOR S.A.",
        "CodigoCliente": "00708",
        "ViaPublica": "CALLE CA N'ALZAMORA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "IDEAS PRACTICAS, S.L.",
        "CodigoCliente": "05056",
        "ViaPublica": "CARRER DE L'HOQUEI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "RL 68 TWINS, S.L.L.",
        "CodigoCliente": "05184",
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "TALLERES ALPE RUBI S.L",
        "CodigoCliente": "05532",
        "ViaPublica": "CALLE PONT DE CAN CLAVERI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "GRUPO ARGRAF CATALUÑA, S.A.U",
        "CodigoCliente": 6154,
        "ViaPublica": "CALLE PONT DE CAN CLAVERI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "GRUAS Y TRANSPORTES ESPECIALES RAMOS, SL",
        "CodigoCliente": 6162,
        "ViaPublica": "AVENIDA CAN SUCARRATS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ELECTRONICA M.C.J 33",
        "CodigoCliente": 6512,
        "ViaPublica": "CALLE CA N'ALZAMORA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ALQUILER SERVICIO MAQUINARIA AIRLESS S.L",
        "CodigoCliente": 6526,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "SERITRADE",
        "CodigoCliente": 6528,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "SISTEMAS DE ELEVACION Y MANUTE",
        "CodigoCliente": 6533,
        "ViaPublica": "AVENIDA GAUDI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ARGES FITNESS S.L.",
        "CodigoCliente": 6536,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ARGES FITNESS S.L.",
        "CodigoCliente": 6536,
        "ViaPublica": "CARRETRA  RUBI A MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "JOSE ANTONIO AGUILERA GARCIA",
        "CodigoCliente": 6540,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "INSTALACIONES INTEGRALES ELNA",
        "CodigoCliente": 6655,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "FERCAS NETEGES S.L.",
        "CodigoCliente": 6665,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MECANICA BUSQUETS S.A",
        "CodigoCliente": 6666,
        "ViaPublica": "AVENIDA CAN ROSES"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "GRAFICAS DOBLE-P S.L.",
        "CodigoCliente": 6667,
        "ViaPublica": "CARRER DE L'HOQUEI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ANMAR A4MROMEC, S.L.",
        "CodigoCliente": 6672,
        "ViaPublica": "CALLE STRAUSS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "QUALITY & PRECISION SEALING S.L",
        "CodigoCliente": 6694,
        "ViaPublica": "CALLE CICLISME"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "COLOR PAINT RUBI XXI S.L.",
        "CodigoCliente": 6706,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MAQUINARIA  ELEVACION Y MANTEN",
        "CodigoCliente": 6713,
        "ViaPublica": "CALLE LONDRES"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "AMOGAR INTERIORISME S.L",
        "CodigoCliente": 6721,
        "ViaPublica": "PASSATGE DOCTOR FERRAN"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "IMPRINTER S.L",
        "CodigoCliente": 6729,
        "ViaPublica": "CALLE ALT"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "INDUSTRIAS MECANIZADAS FAPEL S",
        "CodigoCliente": 6730,
        "ViaPublica": "CALLE ALT"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "STAND TRES S.C.P",
        "CodigoCliente": 6731,
        "ViaPublica": "CALLE NATACIO"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "VERDAINA DISSENY S.L",
        "CodigoCliente": 6746,
        "ViaPublica": "PASSATGE STRAUSS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "BOMBA  ELIAS S.A",
        "CodigoCliente": 6753,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "HOSTELERIA  MULTISERVICIOS VAL",
        "CodigoCliente": 6760,
        "ViaPublica": "PASSEIG TORRES"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "RUBI INDUSTRIA DE CREMALLERAS",
        "CodigoCliente": 6765,
        "ViaPublica": "CALLE TRES D'ABRIL"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "RUBI INDUSTRIA DE CREMALLERAS",
        "CodigoCliente": 6765,
        "ViaPublica": "CALLE LUXEMBURG"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ELECTRONICA SIPEL S.L.",
        "CodigoCliente": 6766,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "OXILASER VALENZUELA S.L",
        "CodigoCliente": 6778,
        "ViaPublica": "AVENIDA LLANA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ROYAL CARTTON S.L",
        "CodigoCliente": 6795,
        "ViaPublica": "CALLE SARDANA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "G6 POLIURETANOS TECNICOS S.A",
        "CodigoCliente": 6813,
        "ViaPublica": "CALLE DUBLIN"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "CODENSA",
        "CodigoCliente": 6821,
        "ViaPublica": "CALLE PARIS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ZINC VALLES S.L",
        "CodigoCliente": 6826,
        "ViaPublica": "CALLE PONT DE CAN CLAVERI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "HOBBY CARS, S.L.",
        "CodigoCliente": 6832,
        "ViaPublica": "CALLE CICLISME"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "SANTILABEL S.L",
        "CodigoCliente": 6833,
        "ViaPublica": "CALLE ATLETISME"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "PRYSE S.A",
        "CodigoCliente": 6839,
        "ViaPublica": "CALLE LISBOA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "FERRET CURVAT DE TUBS S.L",
        "CodigoCliente": 6846,
        "ViaPublica": "CALLE LISBOA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "PROVENRED S.L",
        "CodigoCliente": 6849,
        "ViaPublica": "AVENIDA CAN SUCARRATS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "VISUAL INSPECTION SYSTEMS S.L",
        "CodigoCliente": 6850,
        "ViaPublica": "AVENIDA COVA SOLERA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "GREENCAR, S.L.",
        "CodigoCliente": 6854,
        "ViaPublica": "CALLE VIVALDI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "EMULSIONES ACRILICAS S.L",
        "CodigoCliente": 6864,
        "ViaPublica": "CALLE CHOPIN"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MONTAJE DE REDES DE SEGURIDAD, S.L",
        "CodigoCliente": 6870,
        "ViaPublica": "PASSEIG RIERA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MARC SPORT S.L",
        "CodigoCliente": 6876,
        "ViaPublica": "CALLE PRAGA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ALBERT MARÍN TRULLENQUE",
        "CodigoCliente": 6884,
        "ViaPublica": "CALLE NATACIO"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "LAMINADORAS Y MAQUINARIA GRAFI",
        "CodigoCliente": 6913,
        "ViaPublica": "CARRER COMPOSITOR SCHUMANN"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "RECTIFICATS RECTISON S.L",
        "CodigoCliente": 6914,
        "ViaPublica": "CARRER COMPOSITOR SCHUMANN"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "PLASTICOS MADA S.L",
        "CodigoCliente": 6915,
        "ViaPublica": "CARRER COMPOSITOR SCHUMANN"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "PLASTICOS BUMA 1974 S.L",
        "CodigoCliente": 6919,
        "ViaPublica": "CALLE SCHUBERT"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "INFUPLAS S.L",
        "CodigoCliente": 6920,
        "ViaPublica": "PASSATGE SCHUMANN"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "METALMERPE 2013 S.L",
        "CodigoCliente": 6932,
        "ViaPublica": "CARRER DEL COMPOSITOR BACH"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MANEL DOMINGO CASALS",
        "CodigoCliente": 6933,
        "ViaPublica": "PASSATGE WAGNER"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "JORGE RANDUA GOMILA",
        "CodigoCliente": 6946,
        "ViaPublica": "CALLE STRAUSS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "PLASTICS SANT JORDI S.L",
        "CodigoCliente": 6953,
        "ViaPublica": "PASSATGE STRAUSS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "SUMAL S.L",
        "CodigoCliente": 6979,
        "ViaPublica": "AVENIDA GAUDI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "J.C.S INSTAL.LACIONS CAN JARDI",
        "CodigoCliente": 6980,
        "ViaPublica": "CALLE SCHUBERT"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "COFETAN S.L",
        "CodigoCliente": 7002,
        "ViaPublica": "CARRER COMPOSITOR WAGNER"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "SERVICIOS MECANICOS PERT S.L",
        "CodigoCliente": 7027,
        "ViaPublica": "CALLE EMILI SOLA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "SERVIFUND & MOL S.L",
        "CodigoCliente": 7044,
        "ViaPublica": "CALLE DOMENECH I MONTANER"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "HUECOPRINT S.L.",
        "CodigoCliente": 7059,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "GALLEX PROTECCION CONTRA INCENDIOS S.L",
        "CodigoCliente": 7073,
        "ViaPublica": "CALLE RAVEL"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "FOLEGAX S.L.",
        "CodigoCliente": 7103,
        "ViaPublica": "CALLE LUXEMBURG"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "DROPS EUROPEAN E-LIQUIDS, S.L.",
        "CodigoCliente": 7164,
        "ViaPublica": "CARRER COMPOSITOR SCHUMANN"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "DISTRIBUCION DE MALLAS Y REPUESTOS S.L",
        "CodigoCliente": "07404",
        "ViaPublica": "CALLE VERDI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "FERRETERIA Y PRENSAS, S.A.",
        "CodigoCliente": "07718",
        "ViaPublica": "CALLE SCHUBERT"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ISAAC CASTRO MARTI",
        "CodigoCliente": "07941",
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "SLICEPLUS S.L.",
        "CodigoCliente": "07962",
        "ViaPublica": "CALLE VIVALDI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "VELAS SORT DESDE 1999 SCP",
        "CodigoCliente": "07965",
        "ViaPublica": "CALLE RAVEL"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ENRIC COSTA GARCIA",
        "CodigoCliente": "08059",
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "BOSTIK S.A.",
        "CodigoCliente": "08505",
        "ViaPublica": "CALLE STRAVINSKY"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "HERRANZ, JAVIER",
        "CodigoCliente": "08720",
        "ViaPublica": "CARRER COMPOSITOR WAGNER"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "WETRON AUTOMATIZACION S.A",
        "CodigoCliente": "08739",
        "ViaPublica": "CALLE RIERA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "AB SOLUCIONES DESDE 1967 S.L",
        "CodigoCliente": "08782",
        "ViaPublica": "CALLE TENNIS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "APTEC, S.L.",
        "CodigoCliente": "09366",
        "ViaPublica": "CALLE CESAR MARTINELL"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MEDVA MECANISMOS DEL VALLES, S.L.",
        "CodigoCliente": "09539",
        "ViaPublica": "CALLE NATACIO"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "TILES & WOOD, S.L",
        "CodigoCliente": "09687",
        "ViaPublica": "CALLE STRAUSS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "PROEXEL 2000 SL",
        "CodigoCliente": "09753",
        "ViaPublica": "CARRER DEL COMPOSITOR BACH"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "DRINK CASH RUBI, S.L",
        "CodigoCliente": 10016,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "JAVIER SANCHEZ COBIAN",
        "CodigoCliente": 10151,
        "ViaPublica": "PASSEIG TORRES"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MECANIZADOS TECNOLÓGICOS 2020, SL",
        "CodigoCliente": 10175,
        "ViaPublica": "CARRER DEL COMPOSITOR BACH"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "REM TOTEN 1, S.L.",
        "CodigoCliente": 10634,
        "ViaPublica": "AVENIDA LLANA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MIGA FOODS COMMERCE SL",
        "CodigoCliente": 10709,
        "ViaPublica": "CALLE PAGESIA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "SERVIPRO 2.0 S.L.",
        "CodigoCliente": 11206,
        "ViaPublica": "CARRER COMPOSITOR WAGNER"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "FIRE BUSINESS, S.L",
        "CodigoCliente": 11391,
        "ViaPublica": "CALLE RAVEL"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "JDG OPERADOR DE TRANSPORTES SA",
        "CodigoCliente": 11451,
        "ViaPublica": "CARRER ATENES"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MTC STEEL, S.L",
        "CodigoCliente": 11701,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "HAMPUAL SLU",
        "CodigoCliente": 11954,
        "ViaPublica": "CALLE LUXEMBURG"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "TAKE PADEL SL",
        "CodigoCliente": 11965,
        "ViaPublica": "CALLE LUXEMBURG"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "DANIEL NAVARRO SANMAMED",
        "CodigoCliente": 12252,
        "ViaPublica": "CARRER ATENES"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "B-DECKT SL CUBIERTAS Y CERRAMIENTOS",
        "CodigoCliente": 12488,
        "ViaPublica": "CALLE PARIS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "AMIGA NET SL",
        "CodigoCliente": 12654,
        "ViaPublica": "CALLE PAGESIA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "PA DUR  2010 SL",
        "CodigoCliente": 12671,
        "ViaPublica": "AVENIDA CAN SUCARRATS"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "DADO SABORES, S.L",
        "CodigoCliente": 13255,
        "ViaPublica": "CALLE VIVALDI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "INSTAL.LACIONS I MANTENIMENTS GEINSTA S.",
        "CodigoCliente": 33448,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "VAC IN BAG, S.L.",
        "CodigoCliente": 33450,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "RAUL GONZALEZ GANDUL-TAPIZADOS TRECHA",
        "CodigoCliente": 33736,
        "ViaPublica": "CARRETERA MOLINS DE REI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "KING TECNOLOGIES ROBOTIC, S.L.",
        "CodigoCliente": 33873,
        "ViaPublica": "CALLE LISBOA"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MAGNA METALS, S.A",
        "CodigoCliente": 34464,
        "ViaPublica": "AVENIDA GAUDI"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "TOT NET SERV.DE LIMPIEZAS GRUPO NETTO SA",
        "CodigoCliente": 34730,
        "ViaPublica": "CARRETERA MOLINS A CALDES"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "FOCEX TECNOLOGIA, S.L",
        "CodigoCliente": 34882,
        "ViaPublica": "PASSATGE WAGNER"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "SISTEMA DE PROTECCION MIPRE, S.L",
        "CodigoCliente": 35098,
        "ViaPublica": "CARRER COMPOSITOR SCHUMANN"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "ESTRUCTURAS METALICAS CARSAN SL",
        "CodigoCliente": 35157,
        "ViaPublica": "AVENIDA CAN ROSES"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "PLICO PRODUCTS SL",
        "CodigoCliente": 36688,
        "ViaPublica": "CALLE CICLISME"
    },
    {
        "Municipio": "RUBI",
        "RazonSocial": "MOBLES I DECORACIÓ EBENUS SL",
        "CodigoCliente": 85118,
        "ViaPublica": "PASSATGE DOCTOR FERRAN"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "TEXFILTRA, S.L",
        "CodigoCliente": "04238",
        "ViaPublica": "CALLE COSTA I DEU"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "NEW JUNIOR S.A",
        "CodigoCliente": 6296,
        "ViaPublica": "CALLE AMERICA"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "PREMIER TEX S.A",
        "CodigoCliente": 6297,
        "ViaPublica": "CALLE AMERICA"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "NOVA LANERIA, S.A",
        "CodigoCliente": 6298,
        "ViaPublica": "CALLE AMERICA"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "IDEAS QUE SE TOCAN S.L",
        "CodigoCliente": 6422,
        "ViaPublica": "CAMI MAS CANALS"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "MANEL DE REIS S.L.",
        "CodigoCliente": 6461,
        "ViaPublica": "CAMI CAN QUADRES"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "INTEGRAL DE INGENIERÍA E INSTA",
        "CodigoCliente": 6515,
        "ViaPublica": "CAMI CAN QUADRES"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "SERVICIOS BRICOGARDEN AD, S.L.",
        "CodigoCliente": 6769,
        "ViaPublica": "CAMI CAN QUADRES"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "SANAPUIG MISSATGERS S.L.",
        "CodigoCliente": 6893,
        "ViaPublica": "PASSEIG CAN FEU"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "TECAIRE INTERCOMERCIAL S.A.",
        "CodigoCliente": 6941,
        "ViaPublica": "CALLE CAN CAMPS"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "ÓPTIMA ENVIRONMENTAL SERVICES S.L.",
        "CodigoCliente": 7084,
        "ViaPublica": "CALLE RIU RIPOLL"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "CPP CHEMICAL GROUP SL",
        "CodigoCliente": "07787",
        "ViaPublica": "CALLE CAN MIMO"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "VERSA DESIGN S.L.",
        "CodigoCliente": "09665",
        "ViaPublica": "CALLE ANSELM TURMEDA"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "CAR CONDAL AUTOMOCION SL",
        "CodigoCliente": "09859",
        "ViaPublica": "PASSEIG COMERÇ"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "INTERNACIONAL DE EMBUTIDOS S.A.",
        "CodigoCliente": "09905",
        "ViaPublica": "PASSEIG CAN FEU"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "WINK DESIGN, S.L",
        "CodigoCliente": 10111,
        "ViaPublica": "CALLE AMERICA"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "GRUP GRAFIPLUS ELFA, S.L",
        "CodigoCliente": 10369,
        "ViaPublica": "CALLE MAS CARBO"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "FACILITY & MOLDS",
        "CodigoCliente": 10790,
        "ViaPublica": "AVENIDA CAN BORDOLL"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "VALERO FORN TRADICIONAL S.L.",
        "CodigoCliente": 10808,
        "ViaPublica": "CALLE APEL.LES MESTRES"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "VALERO FORN TRADICIONAL S.L.",
        "CodigoCliente": 10808,
        "ViaPublica": "CALLE CABANYES"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "FIRE BUSINESS, S.L",
        "CodigoCliente": 11391,
        "ViaPublica": "CALLE RENALL"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "ESTELA FELIX MUÑOZ",
        "CodigoCliente": 11941,
        "ViaPublica": "CALLE VERGOS"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "MR ALIMENTACION INDUST. POR VIBRACION SL",
        "CodigoCliente": 12596,
        "ViaPublica": "AVENIDA CAN BORDOLL"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "TALLERES 3 EJES SL",
        "CodigoCliente": 12775,
        "ViaPublica": "CALLE TAMARIT"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "SERVITEC OFICINA SL",
        "CodigoCliente": 12779,
        "ViaPublica": "CALLE APEL.LES MESTRES"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "VETAS DE MADERA, S.L.",
        "CodigoCliente": 33584,
        "ViaPublica": "CALLE CAN POBLA"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "PANIFICADORA VALERO SA",
        "CodigoCliente": 34263,
        "ViaPublica": "CALLE COROMINAS"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "GOYA EUROPA, S.L",
        "CodigoCliente": 34564,
        "ViaPublica": "CALLE VICTOR BALAGUER"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "MG FUSTA 2022, S.L",
        "CodigoCliente": 34675,
        "ViaPublica": "CALLE JACQUARD"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "RECICLAJES DOMI  SL",
        "CodigoCliente": 36173,
        "ViaPublica": "CALLE SANT SEBASTIA"
    },
    {
        "Municipio": "SABADELL",
        "RazonSocial": "MATTELCO, S.L",
        "CodigoCliente": 36526,
        "ViaPublica": "CALLE MILA I FONTANALS"
    },
    {
        "Municipio": "Salt",
        "RazonSocial": "TC SPORTWEAR FACTORY SL",
        "CodigoCliente": 12187,
        "ViaPublica": "CARRER D'ISAAC RABIN"
    },
    {
        "Municipio": "SALT",
        "RazonSocial": "PRODUCTES LA JABUGUEÑA SL",
        "CodigoCliente": 12215,
        "ViaPublica": "CARRER D'AMNISTIA INTERNACIONAL"
    },
    {
        "Municipio": "Salt",
        "RazonSocial": "BAREBONE SL",
        "CodigoCliente": 12278,
        "ViaPublica": "CARRER ROCACORBA"
    },
    {
        "Municipio": "Salt",
        "RazonSocial": "MULTI-ART PRODUCCIONS S.L.",
        "CodigoCliente": 12312,
        "ViaPublica": "CARRER D'AMNISTIA INTERNACIONAL"
    },
    {
        "Municipio": "Salt",
        "RazonSocial": "PROVETSA GIRONA SA",
        "CodigoCliente": 12338,
        "ViaPublica": "CARRER UNICEF"
    },
    {
        "Municipio": "Salt",
        "RazonSocial": "JARDINERIA EL SITJAR DE SALT S.L.",
        "CodigoCliente": 12582,
        "ViaPublica": "CAMI DEL SITJAR"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "MIRVIFER, S.L.",
        "CodigoCliente": "00811",
        "ViaPublica": "CALLE ALMIRALL OQUENDO"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "CAFF, S.L.",
        "CodigoCliente": 2429,
        "ViaPublica": "CALLE JOAN MIRO"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "BYMAR-PARK, S.L.",
        "CodigoCliente": 2574,
        "ViaPublica": "CALLE JOAN MIRO"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "COMPAÑIA.ESP. DE AISLAMIENTOS,S.A**",
        "CodigoCliente": 2710,
        "ViaPublica": "CALLE JOAN D'AUSTRIA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "TALLERES UREÑA, S.L.",
        "CodigoCliente": 2810,
        "ViaPublica": "CALLE PEREDA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "REGRU, S.A.",
        "CodigoCliente": "04046",
        "ViaPublica": "CALLE GRAVINA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "PRESOLME, S.L",
        "CodigoCliente": "05349",
        "ViaPublica": "CALLE PEREDA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "METALURGICA TUDE S.A.",
        "CodigoCliente": 6126,
        "ViaPublica": "CALLE BALMES"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "CLIMASOL SUMINISTROS PARA LA H",
        "CodigoCliente": 6137,
        "ViaPublica": "CALLE PEREDA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "PINTADOS ESPECIALES S.L.",
        "CodigoCliente": 6163,
        "ViaPublica": "CALLE ALMIRALL OQUENDO"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "LOTUM, S.A.",
        "CodigoCliente": 6197,
        "ViaPublica": "CALLE JOVELLANOS"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "MAGRIÑA LABORATORIOS S.L.",
        "CodigoCliente": 6241,
        "ViaPublica": "CALLE PEREDA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "AGME 21 ENERGIA RENOVABLES S.L",
        "CodigoCliente": 6242,
        "ViaPublica": "AVENIDA BON PASTOR"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "REALIZACIONES ELECTRICO INDUST",
        "CodigoCliente": 6485,
        "ViaPublica": "CALLE JOVELLANOS"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "MANIPULADOS Y PROMOCIONES A TE",
        "CodigoCliente": 6784,
        "ViaPublica": "CALLE TORRASSA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "ABELLAN HNOS, S.A.",
        "CodigoCliente": 6906,
        "ViaPublica": "CALLE GRAVINA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "SOJA BLANCA S.L",
        "CodigoCliente": 7010,
        "ViaPublica": "CALLE MARE DE DEU DE MONTSERRAT"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "TALLERES ROMA INOX S.A.",
        "CodigoCliente": 7054,
        "ViaPublica": "CALLE GRAVINA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "ACTILUM RGB S.L.",
        "CodigoCliente": 7082,
        "ViaPublica": "CALLE ARQUIMEDES"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "ÓPTIMA ENVIRONMENTAL SERVICES S.L.",
        "CodigoCliente": 7084,
        "ViaPublica": "AVENIDA EDUARD MARISTANY"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "SAEZ MEJÍAS, DAVID",
        "CodigoCliente": 7163,
        "ViaPublica": "CALLE ALMIRALL OQUENDO"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "SERTRANS S.A",
        "CodigoCliente": 7192,
        "ViaPublica": "CALLE BALMES"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "ARTIC S.A.",
        "CodigoCliente": "07706",
        "ViaPublica": "CALLE IFNI"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "LUIS BELLIDO GÓMEZ",
        "CodigoCliente": "07708",
        "ViaPublica": "CALLE MARAGALL"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "ZUBI BEBIDAS S.L",
        "CodigoCliente": "08740",
        "ViaPublica": "CALLE MARE DE DEU DE MONTSERRAT"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "CARAVELLE BREWERY S.L.",
        "CodigoCliente": "09423",
        "ViaPublica": "CALLE TORRASSA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "RESTAURANTE LOS OLMOS 3, S.L.",
        "CodigoCliente": 10700,
        "ViaPublica": "CALLE RAMON VIÑAS"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "NOHSUZ INVESTMENT S.L",
        "CodigoCliente": 11257,
        "ViaPublica": "CALLE ALMIRALL OQUENDO"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "FASTBCN, S.L.",
        "CodigoCliente": 13260,
        "ViaPublica": "PASSEIG DE LA VERNEDA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "ALDAPAI SL",
        "CodigoCliente": 33399,
        "ViaPublica": "AVENIDA EDUARD MARISTANY"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "BOBO STUDIOS, S.L.",
        "CodigoCliente": 33449,
        "ViaPublica": "CALLE ALMIRALL OQUENDO"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "QINGTIAN TOUFU 888 S.L.",
        "CodigoCliente": 33903,
        "ViaPublica": "CALLE ARQUIMEDES"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "NEUBOR, S.L.",
        "CodigoCliente": 34091,
        "ViaPublica": "CALLE PEREDA"
    },
    {
        "Municipio": "SANT ADRIA DE BESOS",
        "RazonSocial": "CHLOE & LUCAS S.L.",
        "CodigoCliente": 34696,
        "ViaPublica": "AVENIDA MARESME"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "CODIFRED SEGLE XXI S.L.",
        "CodigoCliente": "00473",
        "ViaPublica": "CALLE TECNICA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "DESGUACES H.A",
        "CodigoCliente": "04677",
        "ViaPublica": "CALLE TECNICA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "SPAX TORNILLERIA, SAU",
        "CodigoCliente": "05168",
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "FCC AQUALIA - SERVICIOS CIUDAD",
        "CodigoCliente": 6517,
        "ViaPublica": "CALLE POUS"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "RACSO TRUCKS & TRAILERS, S.A.",
        "CodigoCliente": 6532,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "SEDAL S.L.U.",
        "CodigoCliente": 6690,
        "ViaPublica": "CALLE QUIMICA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "TAF ABRASIVOS, S.L.",
        "CodigoCliente": 6897,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "CLIMASA REFRIGERACION SL",
        "CodigoCliente": "07573",
        "ViaPublica": "CALLE ISAAC PERAL"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "ORMA VAZQUEZ, S.A",
        "CodigoCliente": "07801",
        "ViaPublica": "CTRA ANTIGUA NACIONAL II"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "INSTALACIONES GARCIA ROBLES S.L.",
        "CodigoCliente": "08351",
        "ViaPublica": "JOSEP ROS I ROS"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "CONSTRUCTORA AUXILIAR DE INGENIERÍA SL",
        "CodigoCliente": "09664",
        "ViaPublica": "CALLE GRANADA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "IND.ENGRANAJE PRECISION, S.C.L.",
        "CodigoCliente": "09989",
        "ViaPublica": "CARRER DE CAN SELLARES"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "INOVE INGENIERIA, S.A",
        "CodigoCliente": 10314,
        "ViaPublica": "CALLE TECNICA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "DK LOGISTICS, S.L.",
        "CodigoCliente": 10397,
        "ViaPublica": "CARRER DELS JURATS"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "SOLUCIONES TECNICAS ELECTRÓNICAS SL.",
        "CodigoCliente": 10427,
        "ViaPublica": "JOSEP ROS I ROS"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "TALLERES MARSANZ SL",
        "CodigoCliente": 10641,
        "ViaPublica": "CARRER DE CAN SELLARES"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "SEIRA 2000 S.L",
        "CodigoCliente": 11166,
        "ViaPublica": "CALLE COMERÇ"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "SPM 360, S.L.",
        "CodigoCliente": 11178,
        "ViaPublica": "CALLE QUIMICA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "JOSE MANUEL PLEGUEZUELOS PADILLA",
        "CodigoCliente": 11183,
        "ViaPublica": "CALLE CAMP LLARG"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "PINTURA INDUSTRIAL SAN ANDRES SA",
        "CodigoCliente": 11715,
        "ViaPublica": "BARRI LOS FONDOS"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "MAVI SEGLE XXI SL",
        "CodigoCliente": 11716,
        "ViaPublica": "POL. INDUSTRIAL  CAN FUSTER"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "MANTEN.DIAGNOSIS SERV. Y REPAR.SL - MDSR",
        "CodigoCliente": 11816,
        "ViaPublica": "CALLE TECNICA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "BR LA CLAVE DE RAFA, S.L.",
        "CodigoCliente": 12575,
        "ViaPublica": "CARRETERA DE MARTORELL"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "VETROBOX MAMPARAS DE BAÑO, S.L.",
        "CodigoCliente": 12852,
        "ViaPublica": "POL. INDUSTRIAL  CAN FUSTER"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "ALC LOGISTICA Y TRANSPORTE, S.L.U",
        "CodigoCliente": 12878,
        "ViaPublica": "POL. INDUSTRIAL  CAN FUSTER"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "TALLER MECANICO ODA21, S.L.",
        "CodigoCliente": 13193,
        "ViaPublica": "?CARRETERA NACIONAL II"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "CRISTALERIA MARTOS S.L.",
        "CodigoCliente": 33464,
        "ViaPublica": "CALLE GRANADA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "NOXMAN SL",
        "CodigoCliente": 33523,
        "ViaPublica": "CALLE GRANADA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "TALLERES MOEL SL",
        "CodigoCliente": 33703,
        "ViaPublica": "CALLE TECNICA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "COMPAÑIA GENERAL DE LUBRICANTES, S.A",
        "CodigoCliente": 33738,
        "ViaPublica": "CALLE COMERÇ"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "FLR EMBALATGES, S.L.",
        "CodigoCliente": 34538,
        "ViaPublica": "CALLE ENERGIA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "FLR EMBALATGES, S.L.",
        "CodigoCliente": 34538,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "MUR MECANIZADOS INDUSTRIALES SL",
        "CodigoCliente": 34633,
        "ViaPublica": "CALLE EDISON"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "INDUSTRIAL MEC, S.A.",
        "CodigoCliente": 34638,
        "ViaPublica": "CALLE GRANADA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "RECAMBIOS AICRAG, S.A",
        "CodigoCliente": 35318,
        "ViaPublica": "CALLE GRANADA"
    },
    {
        "Municipio": "SANT ANDREU DE LA BARCA",
        "RazonSocial": "TRATAMIENTOS ALMI, S.L.",
        "CodigoCliente": 36368,
        "ViaPublica": "CALLE CAMP LLARG"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "DECORESC, S.L.",
        "CodigoCliente": 2290,
        "ViaPublica": "CALLE RIERA DEL FONOLLAR"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "EXPRESS SUMINISTRO GASOLEO S.L",
        "CodigoCliente": "03111",
        "ViaPublica": "AVENIDA SEGLE XXI"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "GEZE IBERIA, S.R.L.U.",
        "CodigoCliente": "04586",
        "ViaPublica": "CARRER D'ANDORRA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "GEZE IBERIA, S.R.L.U.",
        "CodigoCliente": "04586",
        "ViaPublica": "CALLE MARINA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "METAL COBOS, S.L",
        "CodigoCliente": 6023,
        "ViaPublica": "CALLE ALABA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "TRANSPORTES NICARAGUA S.A",
        "CodigoCliente": 6026,
        "ViaPublica": "CALLE MARE DE DEU DE NURIA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "TECNORAS S.A.",
        "CodigoCliente": 6083,
        "ViaPublica": "CALLE MARINA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "TREBALLS PLÀSTICS S.L.",
        "CodigoCliente": 6088,
        "ViaPublica": "PASSATGE GARROTXA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "SIMONA IBERICA SEMIELABORADOS S.L",
        "CodigoCliente": 6113,
        "ViaPublica": "CALLE DOCTOR JOSEP CASTELLS"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "ALUMINIOS BARCELONA, S.L.",
        "CodigoCliente": 6179,
        "ViaPublica": "CARRER D'ANDORRA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "LLOBREGAT COCINAS S.L.",
        "CodigoCliente": 6217,
        "ViaPublica": "AVENIDA MARINA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "GLOBAL FOODS TRADING SPAIN S.L",
        "CodigoCliente": 6236,
        "ViaPublica": "CALLE MURCIA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "EXCLUSIVAS FRIGORIFICAS S.L.",
        "CodigoCliente": 6243,
        "ViaPublica": "CALLE ASTURIES"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "AUTORODA  S.C.P.",
        "CodigoCliente": 6244,
        "ViaPublica": "CALLE SALINES"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "DYNAMIC EXPRESS COURIER S.L",
        "CodigoCliente": 6253,
        "ViaPublica": "AVENIDA MARINA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "MAGNUM SERVICIOS HOSTELEROS S.",
        "CodigoCliente": 6266,
        "ViaPublica": "CARRER D'ANDORRA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "MAGNUM SERVICIOS HOSTELEROS S.",
        "CodigoCliente": 6266,
        "ViaPublica": "CALLE MURCIA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "BAIX MATIC S.L.",
        "CodigoCliente": 6274,
        "ViaPublica": "CALLE CASTELLO"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "SUMINISTROS INDUSTRIALES CALSE",
        "CodigoCliente": 6363,
        "ViaPublica": "AVENIDA MARINA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "EAGLEBURGMANN  IBERICA S.L.",
        "CodigoCliente": 6383,
        "ViaPublica": "? DELS TINTS"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "ZINCADO PERFILES, S.L. \"ZINPER",
        "CodigoCliente": 6385,
        "ViaPublica": "AVENIDA TORRE DE LA VILA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "EVARM INNOVACION, S.L.",
        "CodigoCliente": 6390,
        "ViaPublica": "CALLE DOCTOR JOSEP CASTELLS"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "EVARM INNOVACION, S.L.",
        "CodigoCliente": 6390,
        "ViaPublica": "AVENIDA TORRE DE LA VILA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "PORTES-MONTE, S.L.",
        "CodigoCliente": 6428,
        "ViaPublica": "CALLE ALABA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "DIANTECH SOLUTIONS S.L.",
        "CodigoCliente": 6434,
        "ViaPublica": "CARRER D'ANDORRA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "LAVANDERIA  ALBORADA S.L.",
        "CodigoCliente": 6440,
        "ViaPublica": "CALLE NAVARRA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "PACTA INVERSIONES, S.A.",
        "CodigoCliente": 6796,
        "ViaPublica": "CALLE ALBEREDES"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "AUCOMPEL, S.L.",
        "CodigoCliente": 6840,
        "ViaPublica": "CARRER D'ANDORRA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "GASSO EQUIPMENTS,S.A",
        "CodigoCliente": 6845,
        "ViaPublica": "CALLE MURCIA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "GASSO EQUIPMENTS,S.A",
        "CodigoCliente": 6845,
        "ViaPublica": "AVENIDA MARINA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "PAKOT, S.A.",
        "CodigoCliente": 6911,
        "ViaPublica": "AVENIDA MARINA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "SUMINISTROS Y MONTAJES ELECTRO",
        "CodigoCliente": 6940,
        "ViaPublica": "CALLE MURCIA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "SANJU RETOLS, S.L.",
        "CodigoCliente": 6999,
        "ViaPublica": "CALLE MURCIA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "ALIMENTACION AUTOMAT DE PLASTICOS S.L.",
        "CodigoCliente": 7124,
        "ViaPublica": "CARRER D'ANDORRA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "OILOGIST S.L",
        "CodigoCliente": 7140,
        "ViaPublica": "CALLE CASTELLO"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "ARTFISHING, S.L",
        "CodigoCliente": "08718",
        "ViaPublica": "? DE LES LLANCADORES"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "SIB GRUP 2011, S.L.",
        "CodigoCliente": "09389",
        "ViaPublica": "CARRER D'ANDORRA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "INDOOR HORIZON, S.L.",
        "CodigoCliente": "09608",
        "ViaPublica": "AVENIDA MARINA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "ECO BRAIN MOBILITY, S.L",
        "CodigoCliente": 11358,
        "ViaPublica": "? DE LES LLANCADORES"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "SUMINISTROS HOSCOM S.L.U.",
        "CodigoCliente": 12350,
        "ViaPublica": "CALLE MARE DE DEU DE NURIA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "STBOI BREWERY, S.L.",
        "CodigoCliente": 33615,
        "ViaPublica": "CALLE VALENCIA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "LA GAVINA LATINA, S.L.",
        "CodigoCliente": 34767,
        "ViaPublica": "CALLE CASTELLDEFELS"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "EXHIBITION STAND DESIGN DECOR, S.L",
        "CodigoCliente": 34772,
        "ViaPublica": "CALLE JOVENTUT"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "EXHIBITION STAND DESIGN DECOR, S.L",
        "CodigoCliente": 34772,
        "ViaPublica": "CALLE RIERA ROJA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "EXHIBITION STAND DESIGN DECOR, S.L",
        "CodigoCliente": 34772,
        "ViaPublica": "CALLE ALACANT"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "DISTRILUAGO, S.L",
        "CodigoCliente": 34976,
        "ViaPublica": "AVENIDA MARINA"
    },
    {
        "Municipio": "SANT BOI DE LLOBREGAT",
        "RazonSocial": "NEUMATICOS EL FURGON SL",
        "CodigoCliente": 36739,
        "ViaPublica": "CALLE TARRAGONA"
    },
    {
        "Municipio": "SANT CELONI",
        "RazonSocial": "MARKOIL SAU",
        "CodigoCliente": 11760,
        "ViaPublica": "CARRETERA COMARCAL"
    },
    {
        "Municipio": "SANT CLIMENT DE LLOBREGAT",
        "RazonSocial": "SOCIEDAD ESPAÑOLA DE MONTAJES INDUSTRI",
        "CodigoCliente": "04336",
        "ViaPublica": "TRAVESIA PRAT DE LA RIBA"
    },
    {
        "Municipio": "SANT CLIMENT DE LLOBREGAT",
        "RazonSocial": "INDUSTRIAS LORENZO, S.A.",
        "CodigoCliente": "09373",
        "ViaPublica": "TRAVESIA PRAT DE LA RIBA"
    },
    {
        "Municipio": "SANT CLIMENT DE LLOBREGAT",
        "RazonSocial": "PRINTFUL CUSTOM PRINTING S.L.",
        "CodigoCliente": 11067,
        "ViaPublica": "TRAVESIA PRAT DE LA RIBA"
    },
    {
        "Municipio": "SANT CLIMENT DE LLOBREGAT",
        "RazonSocial": "LAYHER IBERICA SL",
        "CodigoCliente": 35602,
        "ViaPublica": "TRAVESIA PRAT DE LA RIBA"
    },
    {
        "Municipio": "SANT CUGAT DEL VALLES",
        "RazonSocial": "DECAPADO BARCELONA, S.L.",
        "CodigoCliente": "00686",
        "ViaPublica": "CALLE LLOBREGAT"
    },
    {
        "Municipio": "SANT CUGAT DEL VALLES",
        "RazonSocial": "AURA IDENTIDAD VISUAL, S.L.",
        "CodigoCliente": 6085,
        "ViaPublica": "AVENIDA RAGULL"
    },
    {
        "Municipio": "SANT CUGAT DEL VALLES",
        "RazonSocial": "AEROSPACE MOTORCYCLE TECHNOL.ALIANCE SL",
        "CodigoCliente": "07792",
        "ViaPublica": "AVENIDA CERDANYOLA"
    },
    {
        "Municipio": "SANT CUGAT DEL VALLES",
        "RazonSocial": "GUTMAR, S.A.",
        "CodigoCliente": "09919",
        "ViaPublica": "AVENIDA CERDANYOLA"
    },
    {
        "Municipio": "SANT CUGAT DEL VALLES",
        "RazonSocial": "SANT CUGAT DE PINTURES SL",
        "CodigoCliente": 12548,
        "ViaPublica": "AVENIDA ROQUETES"
    },
    {
        "Municipio": "SANT CUGAT DEL VALLES",
        "RazonSocial": "BOSSARD SPAIN S.A.",
        "CodigoCliente": 33487,
        "ViaPublica": "AVENIDA CORTS CATALANES"
    },
    {
        "Municipio": "SANT CUGAT DEL VALLES",
        "RazonSocial": "MAGIC BOX INT TOYS SLU",
        "CodigoCliente": 33768,
        "ViaPublica": "CALLE PAU VILA"
    },
    {
        "Municipio": "SANT CUGAT DEL VALLES",
        "RazonSocial": "TOT NET SERV.DE LIMPIEZAS GRUPO NETTO SA",
        "CodigoCliente": 34730,
        "ViaPublica": "AVENIDA MONTSERRAT ROIG"
    },
    {
        "Municipio": "SANT CUGAT DEL VALLES",
        "RazonSocial": "ARTESANIA DEL DULCE, S.L.",
        "CodigoCliente": 36122,
        "ViaPublica": "AVENIDA ROQUETES"
    },
    {
        "Municipio": "SANT CUGAT DEL VALLES",
        "RazonSocial": "MOLD & MOLD SER SL",
        "CodigoCliente": 85055,
        "ViaPublica": "CALLE TER"
    },
    {
        "Municipio": "SANT ESTEVE SESROVIRES",
        "RazonSocial": "ETERNITY TECHNOLOGIES IBERICA S.A.",
        "CodigoCliente": "05491",
        "ViaPublica": "CALLE DE LES MASIES"
    },
    {
        "Municipio": "SANT ESTEVE SESROVIRES",
        "RazonSocial": "ALMAR LAMPARAS, S.L.",
        "CodigoCliente": 7078,
        "ViaPublica": "PASSATGE MORSE"
    },
    {
        "Municipio": "SANT ESTEVE SESROVIRES",
        "RazonSocial": "DESCANSO ONLINE S.L",
        "CodigoCliente": 34643,
        "ViaPublica": "CALLE GALILEU"
    },
    {
        "Municipio": "SANT ESTEVE SESROVIRES",
        "RazonSocial": "PAPUQ COMMERCE, S.L",
        "CodigoCliente": 35571,
        "ViaPublica": "CALLE MARIE CURIE"
    },
    {
        "Municipio": "SANT ESTEVE SESROVIRES",
        "RazonSocial": "AHMED ANNASSIRI BOUIAMAAOUI",
        "CodigoCliente": 36866,
        "ViaPublica": "CALLE MARIE CURIE"
    },
    {
        "Municipio": "SANT ESTEVE SESROVIRES",
        "RazonSocial": "JOY NOVELTY S.L.",
        "CodigoCliente": 36939,
        "ViaPublica": "CALLE MARIE CURIE"
    },
    {
        "Municipio": "SANT ESTEVE SESROVIRES",
        "RazonSocial": "DECORALUM DESIGNS S.L.",
        "CodigoCliente": 37016,
        "ViaPublica": "CALLE JOAN ORO"
    },
    {
        "Municipio": "SANT FELIU DE BUIXALLEU",
        "RazonSocial": "ESTRIMEC, S.L",
        "CodigoCliente": 36081,
        "ViaPublica": "CARRER DELS GALLIGANTS"
    },
    {
        "Municipio": "SANT FELIU DE BUIXALLEU",
        "RazonSocial": "OUTILS WOLF ESPAÑA, S.L.",
        "CodigoCliente": 36151,
        "ViaPublica": "CARRETERA C-35"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "PLATING DECOR RECUBRIMIENTOS, S.L.",
        "CodigoCliente": "00403",
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "SM CAR DRESS S.L.",
        "CodigoCliente": "00404",
        "ViaPublica": "CARRETERA LAUREA MIRO"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "INOX MOBLE S.L",
        "CodigoCliente": "00466",
        "ViaPublica": "CARRER DELS TALLERS"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "NOFER S.L.",
        "CodigoCliente": "00717",
        "ViaPublica": "CARRETERA LAUREA MIRO"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "LARACAT ETIQUETAS S.L.",
        "CodigoCliente": 2516,
        "ViaPublica": "CALLE AGRICULTURA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "BOTIBOTON, S.L.",
        "CodigoCliente": 2550,
        "ViaPublica": "CALLE PRIMER DE MAIG"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "COMCINOX TECHNOLOGY, S.A.",
        "CodigoCliente": 2580,
        "ViaPublica": "CARRETERA SANSON"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "ARTYPLAN S.L.",
        "CodigoCliente": "03290",
        "ViaPublica": "CALLE AGRICULTURA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "PLASTICS ROSER SL",
        "CodigoCliente": "03488",
        "ViaPublica": "PASSATGE MASOR"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "COMERCIAL TEXTIL SANCHEZ DE CO",
        "CodigoCliente": 6132,
        "ViaPublica": "CALLE ARMENTERES"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "INYECCION RCA PLASTICOS S.L.",
        "CodigoCliente": 6171,
        "ViaPublica": "CALLE AGRICULTURA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "TREIFAL, S.A.L.",
        "CodigoCliente": 6215,
        "ViaPublica": "CALLE TREBALL"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "ARTISAINOX SL",
        "CodigoCliente": 6221,
        "ViaPublica": "CALLE ANSELM CLAVE"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "ALQUILERES ALARCON S.L",
        "CodigoCliente": 6225,
        "ViaPublica": "CALLE TREBALL"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "MARCAJES COL-FIX",
        "CodigoCliente": 6233,
        "ViaPublica": "CALLE JOAQUIM CASTELLS"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "PUJOL ILUMINACION,S.L",
        "CodigoCliente": 6250,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "ETSUY XECAN, S.L.",
        "CodigoCliente": 6254,
        "ViaPublica": "CALLE PRIMER DE MAIG"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "SOLRAC COATINGS,S.L",
        "CodigoCliente": 6273,
        "ViaPublica": "CARRETERA LAUREA MIRO"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "OPENERS AND CLOSERS",
        "CodigoCliente": 6757,
        "ViaPublica": "CALLE AGRICULTURA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "IBERGRIF GRIFERIAS, S.L.",
        "CodigoCliente": 6843,
        "ViaPublica": "CALLE RAMON DE TRINXERIA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "GRUPO PEREZ TRANSPORTE Y LOGISTICA",
        "CodigoCliente": 7064,
        "ViaPublica": "CALLE AGRICULTURA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "STELLANTIS & YOU ESPAÑA, S.A.U",
        "CodigoCliente": 7156,
        "ViaPublica": "CALLE JOAQUIM CASTELLS"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "STELLANTIS & YOU ESPAÑA, S.A.U",
        "CodigoCliente": 7156,
        "ViaPublica": "CALLE ARMENTERES"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "LOVE MECANIZADOS, S.L.",
        "CodigoCliente": 7185,
        "ViaPublica": "CALLE ARMENTERES"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "APAE CATALUNYA S.L.",
        "CodigoCliente": 7202,
        "ViaPublica": "CALLE CONSTITUCIO"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "ART-SER S.L",
        "CodigoCliente": "07920",
        "ViaPublica": "CARRETERA LAUREA MIRO"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "OPQ SYSTEMS MAQUINARIA GRAFICA, S.L.",
        "CodigoCliente": "07925",
        "ViaPublica": "CALLE ANSELM CLAVE"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "MOTOS MM PRO RACING, S.L.",
        "CodigoCliente": "07927",
        "ViaPublica": "RIERA PAHISSA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "REFTRANS, S.A.",
        "CodigoCliente": "08031",
        "ViaPublica": "CALLE JOAQUIM CASTELLS"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "REFTRANS, S.A.",
        "CodigoCliente": "08031",
        "ViaPublica": "CALLE SANT JOSEP"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "FUSTERIA LOPEZ",
        "CodigoCliente": "08396",
        "ViaPublica": "CALLE FALGUERA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "ALQUIMIA FUSTERS S.L.",
        "CodigoCliente": 10264,
        "ViaPublica": "RIERA PAHISSA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "FUNDACION DR.MELCHOR COLEF",
        "CodigoCliente": 10268,
        "ViaPublica": "CALLE JOAQUIM CASTELLS"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "BVALVE FLOW SYSTEMS AND CONTROLS S.L.U.",
        "CodigoCliente": 10401,
        "ViaPublica": "CALLE ARMENTERES"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "AREA II LES GRASSES S.L.",
        "CodigoCliente": 10653,
        "ViaPublica": "CALLE MATARO"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "MONTAPASC 2011 SL",
        "CodigoCliente": 10999,
        "ViaPublica": "CALLE AGRICULTURA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "DOYSCOM S.L.",
        "CodigoCliente": 11098,
        "ViaPublica": "CALLE CONSTITUCIO"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "POSITIVE FRUIT ENERGY S.L.",
        "CodigoCliente": 11141,
        "ViaPublica": "CALLE ARMENTERES"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "EMPRESA DE TRANSFORMACION AGRARIA SA",
        "CodigoCliente": 11482,
        "ViaPublica": "CALLE CAN MIANO"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "ORMOGRAF, SA",
        "CodigoCliente": 12663,
        "ViaPublica": "CARRETERA LAUREA MIRO"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "COMIMAQ SL",
        "CodigoCliente": 12862,
        "ViaPublica": "CARRETERA SANSON"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "DESHO S.A. INSTALACIONES INDUSTRIALES",
        "CodigoCliente": 12932,
        "ViaPublica": "CALLE INDUSTRIA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "RIMSA METAL TECHNOLOGY, S.L",
        "CodigoCliente": 13080,
        "ViaPublica": "CALLE ARMENTERES"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "LN DESIGN 2020, S.L",
        "CodigoCliente": 13305,
        "ViaPublica": "CALLE JOAQUIM CASTELLS"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "MARC NOS BOSCH",
        "CodigoCliente": 34020,
        "ViaPublica": "CALLE CONSTITUCIO"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "FUS ART BCN, S.L",
        "CodigoCliente": 34489,
        "ViaPublica": "CALLE PRIMER DE MAIG"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "TOTHOM A TAULA SL",
        "CodigoCliente": 35028,
        "ViaPublica": "CALLE ARMENTERES"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "Z-MENT BUILDING MATERIALS, S.L.",
        "CodigoCliente": 35097,
        "ViaPublica": "CALLE ANSELM CLAVE"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "NIGRAFICA SERVICIOS DE IMPRESION S.L.",
        "CodigoCliente": 35133,
        "ViaPublica": "CALLE AGRICULTURA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "EXTREM CONSULTING IBERICA S.L.",
        "CodigoCliente": 35225,
        "ViaPublica": "CALLE AGRICULTURA"
    },
    {
        "Municipio": "SANT FELIU DE LLOBREGAT",
        "RazonSocial": "EL MECANIC AUDIOVISUAL SCCL",
        "CodigoCliente": 36643,
        "ViaPublica": "CALLE ANSELM CLAVE"
    },
    {
        "Municipio": "SANT FOST DE CAMPSENTELLE",
        "RazonSocial": "CERMECAL, S.L.",
        "CodigoCliente": "09330",
        "ViaPublica": "CALLE SANTA RITA"
    },
    {
        "Municipio": "SANT FOST DE CAMPSENTELLE",
        "RazonSocial": "CAFES MONTAÑA S.A.",
        "CodigoCliente": "09822",
        "ViaPublica": "CALLE REC DEL MOLI"
    },
    {
        "Municipio": "SANT FOST DE CAMPSENTELLE",
        "RazonSocial": "ARTISORRA, SLU",
        "CodigoCliente": 11025,
        "ViaPublica": "?CARRETERA DE LA ROCA"
    },
    {
        "Municipio": "SANT FOST DE CAMPSENTELLE",
        "RazonSocial": "UNION INDUSTRIAS DEL CAFE SLU",
        "CodigoCliente": 12379,
        "ViaPublica": "CALLE REC DEL MOLI"
    },
    {
        "Municipio": "SANT FOST DE CAMPSENTELLE",
        "RazonSocial": "ALQUILER GRUPO MAENAR, S.L",
        "CodigoCliente": 34647,
        "ViaPublica": "CALLE SANTA ROSA"
    },
    {
        "Municipio": "SANT FOST DE CAMPSENTELLE",
        "RazonSocial": "ARPE FUSTERIA SL",
        "CodigoCliente": 36147,
        "ViaPublica": "CALLE SANTA ROSA"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "ACCORINVEST SPAIN, S.A.",
        "CodigoCliente": "00385",
        "ViaPublica": "CALLE TV3"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "CRIMONS S.A.U",
        "CodigoCliente": "00406",
        "ViaPublica": "AVENIDA LA GENERALITAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "ADW DIAMOND SOLUTIONS S.L.",
        "CodigoCliente": "00991",
        "ViaPublica": "CALLE VALLESPIR"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "PRECINTOS Y MARCHAMOS INDUSTRI",
        "CodigoCliente": 2287,
        "ViaPublica": "CALLE SAMONTA"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "MARMOLES OLLER, S.L.",
        "CodigoCliente": 2594,
        "ViaPublica": "CALLE SANT MARTI DE L'ERM"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "K-ELECTRIC PROVIDER PRODUCTS,",
        "CodigoCliente": 6012,
        "ViaPublica": "CALLE CREU D'EN MUNTANER"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "PLASTOQUÍMICA, S.L",
        "CodigoCliente": 6093,
        "ViaPublica": "CALLE JACINT VERDAGUER"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "SODIMATE IBERICA, S.L.",
        "CodigoCliente": 6160,
        "ViaPublica": "CALLE SAMONTA"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "TALLERS I  GRUES  RECORT S.L",
        "CodigoCliente": 6200,
        "ViaPublica": "AVENIDA MARE DE DEU DE MONTSERRAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "KINOLUX, S.L.",
        "CodigoCliente": 6222,
        "ViaPublica": "AVENIDA MARE DE DEU DE MONTSERRAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "SIESMO S.L",
        "CodigoCliente": 6238,
        "ViaPublica": "AVENIDA MARE DE DEU DE MONTSERRAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "BRICOMECANIZADO 2011 SAL",
        "CodigoCliente": 6260,
        "ViaPublica": "AVENIDA LA GENERALITAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "GEISER 2014  S.C.P.",
        "CodigoCliente": 6369,
        "ViaPublica": "AVINGUDA ONZE DE SETEMBRE"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "FRANCISCO JAVIER CUADROS DE CO",
        "CodigoCliente": 6859,
        "ViaPublica": "CALLE DOMENEC"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "JERONIMO FERNANDEZ RUF",
        "CodigoCliente": 6888,
        "ViaPublica": "CALLE SAMONTA"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "JOSE ROSAS TABERNERS, S.A.",
        "CodigoCliente": 6931,
        "ViaPublica": "CALLE SANT MARTI DE L'ERM"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "INNOV8 IBERIA, S.L.",
        "CodigoCliente": 6935,
        "ViaPublica": "CALLE TAMBOR DEL BRUC"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "INNOV8 IBERIA, S.L.",
        "CodigoCliente": 6935,
        "ViaPublica": "CALLE LES PLANES"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "CARNS PRIOR, S.L.",
        "CodigoCliente": 6955,
        "ViaPublica": "AVENIDA LA GENERALITAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "FALCON RADIO & ACCESORIES SUPPLY S.L.U.",
        "CodigoCliente": 6978,
        "ViaPublica": "CALLE VALLESPIR"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "ÓPTIMA ENVIRONMENTAL SERVICES S.L.",
        "CodigoCliente": 7084,
        "ViaPublica": "AVENIDA BARCELONA"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "LEVELINSTRUKTA, S.L.",
        "CodigoCliente": 7090,
        "ViaPublica": "AVENIDA MARE DE DEU DE MONTSERRAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "FER I SABER,S.L FERRUM",
        "CodigoCliente": 7161,
        "ViaPublica": "CALLE CREU D'EN MUNTANER"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "CONSTRAULA ENGINYERIA I OBRES S.A.",
        "CodigoCliente": 10215,
        "ViaPublica": "CALLE MONTILLA"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "GESTAMP GLOBAL TOOLING, S.L.",
        "CodigoCliente": 10876,
        "ViaPublica": "CALLE TAMBOR DEL BRUC"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "CMM HERRERIA 2009 SLU",
        "CodigoCliente": 11447,
        "ViaPublica": "CALLE TAMBOR DEL BRUC"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "FACONTUB S.L.",
        "CodigoCliente": 11609,
        "ViaPublica": "AVENIDA BARCELONA"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "JOYERÍA FINA, S.L.",
        "CodigoCliente": 11623,
        "ViaPublica": "AVENIDA LA GENERALITAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "MATCHA TEA COMPANY, S.L.",
        "CodigoCliente": 12037,
        "ViaPublica": "CALLE MARIE CURIE"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "HALYCH AUTO S.L.",
        "CodigoCliente": 12082,
        "ViaPublica": "AVENIDA LA GENERALITAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "TECHNIDOR SL",
        "CodigoCliente": 12389,
        "ViaPublica": "AVENIDA MARE DE DEU DE MONTSERRAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "PENTATECNO,S.L.",
        "CodigoCliente": 12592,
        "ViaPublica": "CALLE CREU D'EN MUNTANER"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "HONEST TUSET, S.L",
        "CodigoCliente": 34240,
        "ViaPublica": "AVENIDA LA GENERALITAT"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "BARDUSCH, S.A.U",
        "CodigoCliente": 34570,
        "ViaPublica": "CALLE TAMBOR DEL BRUC"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "INDUSTRIAS RAMON SOLER S.L.",
        "CodigoCliente": 36101,
        "ViaPublica": "CALLE SAMONTA"
    },
    {
        "Municipio": "SANT JOAN DESPI",
        "RazonSocial": "COFER BAGS SL",
        "CodigoCliente": 36674,
        "ViaPublica": "CALLE SAMONTA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "GESTMUSIC GRUPO ENDEMOL,S.A.U",
        "CodigoCliente": "00359",
        "ViaPublica": "AVENIDA RIERA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "GESTMUSIC GRUPO ENDEMOL,S.A.U",
        "CodigoCliente": "00359",
        "ViaPublica": "CALLE JOAN DE LA CIERVA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "BLUE MOON CATERING S.L",
        "CodigoCliente": "00380",
        "ViaPublica": "AVENIDA SANT SEBASTIA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "SILVER SANZ, S.A.",
        "CodigoCliente": 2634,
        "ViaPublica": "CALLE JOAN DE LA CIERVA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "AGETAR, S.A.",
        "CodigoCliente": 2650,
        "ViaPublica": "CALLE PERE PONCE DE LEON"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "VALBRUNA IBERICA,S.L.",
        "CodigoCliente": 6035,
        "ViaPublica": "AVENIDA RIERA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "STX RADIAL AMBIENT, S.L.",
        "CodigoCliente": 6049,
        "ViaPublica": "AVENIDA RIERA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "ORIOL VERDES",
        "CodigoCliente": 6256,
        "ViaPublica": "AVENIDA RIERA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "CENTRAL INDUSTRIAL DEL FRED C.",
        "CodigoCliente": 6429,
        "ViaPublica": "AVENIDA RIERA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "TRATAMIENTOS TERMICOS BADIA,S.",
        "CodigoCliente": 6916,
        "ViaPublica": "CALLE DURAN I JORDA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "FUSTERIA BORRAJO BURGOS, S.L.",
        "CodigoCliente": 6936,
        "ViaPublica": "CALLE JACINT BENAVENTE"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "INOXFACTORY, S.L.",
        "CodigoCliente": 6975,
        "ViaPublica": "CALLE ESPIGOLERA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "PACKAGING COLOR MANUFACTURING, S.L.",
        "CodigoCliente": 7052,
        "ViaPublica": "AVENIDA RIERA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "DACHAL, S.L.",
        "CodigoCliente": 7063,
        "ViaPublica": "CALLE ALEXANDRE GOICOECHEA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "SEKO IBERICA SISTEMAS DE DOSIFICACION,SA",
        "CodigoCliente": 7094,
        "ViaPublica": "CALLE JOAN RAMON JIMENEZ"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "CAMPRI AGENCIES SPAIN, S.L.",
        "CodigoCliente": "07888",
        "ViaPublica": "CALLE JOAN RAMON JIMENEZ"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "VIVISOL IBERICA S.L.U.",
        "CodigoCliente": "08388",
        "ViaPublica": "CALLE LA CONSTITUCIO"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "FIPO, S.A.",
        "CodigoCliente": 10788,
        "ViaPublica": "AVENIDA RIERA"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "ARTESANIA BAÑO SL",
        "CodigoCliente": 11860,
        "ViaPublica": "CALLE PERE PONCE DE LEON"
    },
    {
        "Municipio": "SANT JUST DESVERN",
        "RazonSocial": "ITURRI, S.A",
        "CodigoCliente": 33402,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "SANT PERE DE RIBES",
        "RazonSocial": "BOBINADOS GARRAF, S.L.",
        "CodigoCliente": 34347,
        "ViaPublica": "CALLE ELS FERRERS"
    },
    {
        "Municipio": "SANT PERE DE RIBES",
        "RazonSocial": "TALLERES CIVIA S.L.",
        "CodigoCliente": 36257,
        "ViaPublica": "CALLE LES TEIXIDORES"
    },
    {
        "Municipio": "SANT PERE DE RIBES",
        "RazonSocial": "INTERWOOD 2016 SL",
        "CodigoCliente": 36269,
        "ViaPublica": "CALLE ELS BOTERS"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "CONSTRUBAN,S.L.",
        "CodigoCliente": "02378",
        "ViaPublica": "CALLE ANOIA"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "CONFITURAS SIBONEY S.A",
        "CodigoCliente": "04485",
        "ViaPublica": "CALLE CABRERA"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "JULIO CESAR RESTREPO HERNÁNDEZ",
        "CodigoCliente": "04671",
        "ViaPublica": "CALLE DE SA DRAGONERA"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "ANF 2014 S.L",
        "CodigoCliente": 6324,
        "ViaPublica": "CALLE DE SA DRAGONERA"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "ESTEBAN MARTI SOLVES",
        "CodigoCliente": 6749,
        "ViaPublica": "CALLE MALLORCA"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "FUSTAPOR, S.C.P.",
        "CodigoCliente": 6964,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "FRAMASON AUDIO, S.A.",
        "CodigoCliente": "08111",
        "ViaPublica": "CALLE VICENÇ RENOM"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "NUTRISWEET S.L.",
        "CodigoCliente": "08165",
        "ViaPublica": "CALLE MENORCA"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "FINESTRECO S.L.",
        "CodigoCliente": 11125,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "ACCESORIOS DIMAC S.L.",
        "CodigoCliente": 11126,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "STARPACK PRODUCTS, SL",
        "CodigoCliente": 11335,
        "ViaPublica": "CALLE CERDANYA"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "HDR GLOBAL MANTENIMIENTO SL",
        "CodigoCliente": 12009,
        "ViaPublica": "CALLE CABRERA"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "HERMANOS ERCILLA DISTRIB. ALIMENTARIA SL",
        "CodigoCliente": 12666,
        "ViaPublica": "CALLE DE LA GARROTXA"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "BATLLE ARNAU S.L.",
        "CodigoCliente": 34039,
        "ViaPublica": "CALLE PENEDES"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "LOGISTICA MC SLU",
        "CodigoCliente": 34337,
        "ViaPublica": "CALLE ANOIA"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "ELECTRO MUNTATGES ONAUR, S.L.",
        "CodigoCliente": 34875,
        "ViaPublica": "CALLE PENEDES"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "EASYECOM SOLUTIONS  SL",
        "CodigoCliente": 34886,
        "ViaPublica": "CALLE DE JOSEP CUATRECASAS I ARUMI"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "GEDELSON, S.A",
        "CodigoCliente": 34899,
        "ViaPublica": "CALLE VICENÇ RENOM"
    },
    {
        "Municipio": "SANT QUIRZE DEL VALLES",
        "RazonSocial": "ECO HAPPY SANOS, S.L.",
        "CodigoCliente": 34909,
        "ViaPublica": "CALLE DE LA GARROTXA"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "COBRA INSTALACIONES Y SERVICIO S.A.",
        "CodigoCliente": 824,
        "ViaPublica": "?CALLE A"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "GESTINMÉDICA",
        "CodigoCliente": "04937",
        "ViaPublica": "?CARRER POL.IND.SANT ANTONI"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "GESTION ECOLOGICA MEDIOAMBIENTAL S.L",
        "CodigoCliente": "08080",
        "ViaPublica": "? CALLE E"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "PLASTIFICADOS DEL LLOBREGAT S.L.",
        "CodigoCliente": "08413",
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "INTERFLUID HIDRAULICA SL",
        "CodigoCliente": "09727",
        "ViaPublica": "CARRETERA TORRELLES"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "KFB SA",
        "CodigoCliente": "09871",
        "ViaPublica": "CALLE MOLI DELS FRARES"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "PEUSEK SA",
        "CodigoCliente": 10076,
        "ViaPublica": "CARRETERA SANT BOI"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "ALPER ALUMINI I VIDRE, S.L.",
        "CodigoCliente": 10738,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "SPEEDLER INFORMATICA SL",
        "CodigoCliente": 11548,
        "ViaPublica": "?CALLE C"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "ABC SANT VICENÇ DELS HORTS SUBMINISTRAM",
        "CodigoCliente": 11739,
        "ViaPublica": "?CALLE C"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "J.I.C MOTOR TEAM SL",
        "CodigoCliente": 11964,
        "ViaPublica": "?CARRER B"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "RISO IBERICA, S.A",
        "CodigoCliente": 33451,
        "ViaPublica": "CARRETERA TORRELLES"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "MARKET TREND ASESORES,S.L.",
        "CodigoCliente": 33473,
        "ViaPublica": "?CARRER B"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "REBOLLO VILLEGAS, JULIO",
        "CodigoCliente": 33513,
        "ViaPublica": "AVENIDA TORRELLES"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "NOU6TEMA, S.L",
        "CodigoCliente": 34707,
        "ViaPublica": "CARRETERA TORRELLES"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "LOPEZ Y MONTERO, S.A.",
        "CodigoCliente": 36142,
        "ViaPublica": "AVENIDA TORRELLES"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "INTELLIGENT REAL SOLUTIONS, S.L.",
        "CodigoCliente": 36188,
        "ViaPublica": "CAMI CA N'UBACH"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "CORPORACION CARIJO HOLDING 2016 SL",
        "CodigoCliente": 36189,
        "ViaPublica": "CALLE SANTANDER"
    },
    {
        "Municipio": "SANT VICENC DELS HORTS",
        "RazonSocial": "BAR RESTAURANTE MOLI DELS FRARES S.L.",
        "CodigoCliente": 36245,
        "ViaPublica": "CALLE MOLI DELS FRARES"
    },
    {
        "Municipio": "SANTA COLOMA DE FARNERS",
        "RazonSocial": "WELLNESS VILABLAREIX S.L.",
        "CodigoCliente": 12222,
        "ViaPublica": "CRTA. DE SANTA COLOMA"
    },
    {
        "Municipio": "SANTA COLOMA DE FARNERS",
        "RazonSocial": "OPERA LLOGUERS SL",
        "CodigoCliente": 12292,
        "ViaPublica": "CARRER DEL MONTNEGRE"
    },
    {
        "Municipio": "SANTA COLOMA DE FARNERS",
        "RazonSocial": "JORGE ISMAEL FERNANDES SILVA - CARSLAB",
        "CodigoCliente": 12336,
        "ViaPublica": "CARRER DE MOSQUEROLA"
    },
    {
        "Municipio": "SANTA COLOMA DE FARNERS",
        "RazonSocial": "GA MUNDIAL FOOD SL",
        "CodigoCliente": 12404,
        "ViaPublica": "CARRER DE RASET"
    },
    {
        "Municipio": "SANTA COLOMA DE FARNERS",
        "RazonSocial": "RAMSTOCK SALT SL",
        "CodigoCliente": 12412,
        "ViaPublica": "CARRER DEL GÜELL"
    },
    {
        "Municipio": "SANTA COLOMA DE FARNERS",
        "RazonSocial": "ASSESSORAMENT I MAQUINARIA DEL TER SL",
        "CodigoCliente": 12581,
        "ViaPublica": "CARRER DE LLEVANT"
    },
    {
        "Municipio": "SANTA COLOMA DE GRAMENET",
        "RazonSocial": "MERCAPORTA PUERTAS Y MOLDURAS,",
        "CodigoCliente": 2446,
        "ViaPublica": "CARRETERA ROCA"
    },
    {
        "Municipio": "SANTA COLOMA DE GRAMENET",
        "RazonSocial": "HERMANOS OLEA SCP",
        "CodigoCliente": "08781",
        "ViaPublica": "CALLE ANDREU VIDAL"
    },
    {
        "Municipio": "SANTA COLOMA DE GRAMENET",
        "RazonSocial": "AZTEC EVENTS EUROPE, S.L.",
        "CodigoCliente": 35130,
        "ViaPublica": "CARRETERA ROCA"
    },
    {
        "Municipio": "SANTA COLOMA DE GRAMENET",
        "RazonSocial": "ANDAMIOS LA ALGABA, S.L.",
        "CodigoCliente": 85103,
        "ViaPublica": "CAMI MINERALS"
    },
    {
        "Municipio": "SANTA MARIA DE PALAUTORDE",
        "RazonSocial": "NUABIKES, S.L.",
        "CodigoCliente": 13130,
        "ViaPublica": "CARRER CA N'AULEDA"
    },
    {
        "Municipio": "SANTA MARIA DE PALAUTORDE",
        "RazonSocial": "YERGA SERRALLERS, S.L.",
        "CodigoCliente": 36528,
        "ViaPublica": "CARRER CAN GUARRO"
    },
    {
        "Municipio": "SANTA MARIA DE PALAUTORDE",
        "RazonSocial": "FUSTERIA IBERCO, SLU",
        "CodigoCliente": 36568,
        "ViaPublica": "CARRETERA NOVA DE SANT CELONI"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "ITBING, S.L.",
        "CodigoCliente": "05657",
        "ViaPublica": "CALLE ALGUER"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "VACUFLEX S.L.",
        "CodigoCliente": "05658",
        "ViaPublica": "CALLE GUIFRE EL PILOS"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "MUEBLES ROJAS S.A.",
        "CodigoCliente": "05668",
        "ViaPublica": "CALLE OBRADORS"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "SURE SUCCESS,S.L.U.",
        "CodigoCliente": 6348,
        "ViaPublica": "CALLE ROGER DE FLOR"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "MAPEI SPAIN S.A.",
        "CodigoCliente": 6711,
        "ViaPublica": "CALLE VALENCIA"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "MANGAS FILTRO SACO, S.L.",
        "CodigoCliente": 6792,
        "ViaPublica": "CALLE ALGUER"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "PLANET CROKET, S.L.",
        "CodigoCliente": 6809,
        "ViaPublica": "CALLE CREUETA"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "MAVILOR MOTORS, S.A.",
        "CodigoCliente": 6847,
        "ViaPublica": "CALLE EMPORDA"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "PARQUETS TROPICALES CATALUNYA,",
        "CodigoCliente": 6875,
        "ViaPublica": "CALLE VERGE DE MONTSERRAT"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "DE RIJKE TRANSPORTE Y LOGISTICA ESP, S.L",
        "CodigoCliente": 7040,
        "ViaPublica": "CALLE EMPORDA"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "METALART, S.C.C.L.",
        "CodigoCliente": 7043,
        "ViaPublica": "CALLE BERGUEDA"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "TRANSPIERRE, S.L.",
        "CodigoCliente": 7079,
        "ViaPublica": "CALLE MARESME"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "ÓPTIMA ENVIRONMENTAL SERVICES S.L.",
        "CodigoCliente": 7084,
        "ViaPublica": "CTRA SABADELL A MOLLET"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "INNOVACIO TECNOLOGIA CATALANA",
        "CodigoCliente": "08763",
        "ViaPublica": "CALLE VALLES"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "PANIFICADORA DE GALLECS S.L.",
        "CodigoCliente": "09937",
        "ViaPublica": "CALLE MAR ADRIATIC"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "OXI-COLORS EXPORT SL.",
        "CodigoCliente": 11656,
        "ViaPublica": "CARRETERA SENTMENAT"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "MAIOL GOLDEN HORSE S.L",
        "CodigoCliente": 11932,
        "ViaPublica": "CAMI DE CAN MAIOL"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "TOT NET SERV.DE LIMPIEZAS GRUPO NETTO SA",
        "CodigoCliente": 34730,
        "ViaPublica": "CALLE CREUETA"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "INSTALACIONES METALICAS DEL VALLES, S.L.",
        "CodigoCliente": 35347,
        "ViaPublica": "CALLE ARAGO"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "BULDER PLANET S.L.",
        "CodigoCliente": 36402,
        "ViaPublica": "CALLE VALLES"
    },
    {
        "Municipio": "SANTA PERPETUA DE MOGODA",
        "RazonSocial": "AMEL TECNICA INDUSTRIAL S.L.",
        "CodigoCliente": 36471,
        "ViaPublica": "CALLE BERGUEDA"
    },
    {
        "Municipio": "SENTMENAT",
        "RazonSocial": "VM SYSTEMS, S.L.",
        "CodigoCliente": "00152",
        "ViaPublica": "TORRENT D' EN BAIELL"
    },
    {
        "Municipio": "SENTMENAT",
        "RazonSocial": "SERVEIS PER A L' INDUSTRIA ELECTRONIC.SL",
        "CodigoCliente": "00299",
        "ViaPublica": "AVENIDA PRINCIPAL"
    },
    {
        "Municipio": "SENTMENAT",
        "RazonSocial": "DOSITECNO ANDINA, S.L.",
        "CodigoCliente": 7096,
        "ViaPublica": "AVENIDA PRINCIPAL"
    },
    {
        "Municipio": "SENTMENAT",
        "RazonSocial": "FILOTRANO S.L.",
        "CodigoCliente": "08061",
        "ViaPublica": "TORRENT D' EN BAIELL"
    },
    {
        "Municipio": "SENTMENAT",
        "RazonSocial": "BIEMEN, S.L.U",
        "CodigoCliente": 33626,
        "ViaPublica": "AVENIDA PRINCIPAL"
    },
    {
        "Municipio": "SENTMENAT",
        "RazonSocial": "GESCOVEN, S.L.",
        "CodigoCliente": 33976,
        "ViaPublica": "CALLE NOTARI JESUS LED"
    },
    {
        "Municipio": "SENTMENAT",
        "RazonSocial": "REACTIVOS PARA DIAGNOSTICO,S.L.",
        "CodigoCliente": 34923,
        "ViaPublica": "CALLE JOSEP TURA"
    },
    {
        "Municipio": "SENTMENAT",
        "RazonSocial": "PRIMAMAT S.L",
        "CodigoCliente": 36539,
        "ViaPublica": "PASSEIG TORRE ROJA"
    },
    {
        "Municipio": "SENTMENAT",
        "RazonSocial": "MOISES MORENO AMAYA",
        "CodigoCliente": 36942,
        "ViaPublica": "AVENIDA PRINCIPAL"
    },
    {
        "Municipio": "SILS",
        "RazonSocial": "DISCOMROS,SL",
        "CodigoCliente": 36695,
        "ViaPublica": "CTRA.C-64"
    },
    {
        "Municipio": "TEIA",
        "RazonSocial": "3 ABC LASURES S.L.U",
        "CodigoCliente": "09361",
        "ViaPublica": "CALLE OEST"
    },
    {
        "Municipio": "TEIA",
        "RazonSocial": "MONTAJES BARCAT S.L.",
        "CodigoCliente": 10065,
        "ViaPublica": "CALLE NORD"
    },
    {
        "Municipio": "TEIA",
        "RazonSocial": "MERESIS GESTION, S.L",
        "CodigoCliente": 11244,
        "ViaPublica": "CALLE EST"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "M. PASCUAL S.L.",
        "CodigoCliente": "02377",
        "ViaPublica": "CALLE APOL.LO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TEXTIL I ACABATS D'ENCAIXOS, S.L",
        "CodigoCliente": "04600",
        "ViaPublica": "CALLE MIÑO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "AUTEL SISTEMS SL",
        "CodigoCliente": "04704",
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "C DOMINGUEZ PLEGATS I PERFILATS S.L",
        "CodigoCliente": "04715",
        "ViaPublica": "AVENIDA VALLES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "C DOMINGUEZ PLEGATS I PERFILATS S.L",
        "CodigoCliente": "04715",
        "ViaPublica": "CALLE CARDENER"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "OFFICE24 SOLUTIONS, S. L.",
        "CodigoCliente": "04745",
        "ViaPublica": "CALLE MIÑO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "ASCENSORES EPROM S.L",
        "CodigoCliente": "04769",
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "DC FINE CHEMICALS, S.L.",
        "CodigoCliente": "04978",
        "ViaPublica": "AVENIDA VALLES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "AUTO-CAR 2000 SCP",
        "CodigoCliente": "05040",
        "ViaPublica": "CALLE PROVENÇA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "VENAIR IBÉRICA S.A.U",
        "CodigoCliente": "05059",
        "ViaPublica": "CALLE CERDANYA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "ESAN PAVIMENTOS S.L",
        "CodigoCliente": "05072",
        "ViaPublica": "CARRETERA CASTELLAR"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TOT PADEL CENTER TERRASSA S.L",
        "CodigoCliente": "05195",
        "ViaPublica": "CALLE FINISTERRE"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "R.ESPINAR SL",
        "CodigoCliente": "05280",
        "ViaPublica": "AVENIDA VALLES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "RBM RODIS, S.L.U",
        "CodigoCliente": "05533",
        "ViaPublica": "CALLE JUPITER"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "COCINAS EGARA, S. L.",
        "CodigoCliente": 6361,
        "ViaPublica": "CALLE GUADALQUIVIR"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "AFFIM DISSENY, S.L.",
        "CodigoCliente": 6408,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "NEOTEST SONDEOS Y PERFORACIONE",
        "CodigoCliente": 6481,
        "ViaPublica": "CALLE CONFLENT"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "OFIL  2015 S.L",
        "CodigoCliente": 6490,
        "ViaPublica": "CALLE VALLESPIR"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TRAKTECH S.L",
        "CodigoCliente": 6523,
        "ViaPublica": "CALLE CORDOVA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "INDESPOL S.L",
        "CodigoCliente": 6531,
        "ViaPublica": "AVENIDA VALLES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "FLEXISOFT, S.L",
        "CodigoCliente": 6538,
        "ViaPublica": "CAMI FONT CANYES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "LABOCAT CALIDAD S.L",
        "CodigoCliente": 6545,
        "ViaPublica": "CALLE SOLSONA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "LABOCAT CALIDAD S.L",
        "CodigoCliente": 6545,
        "ViaPublica": "CALLE VENDRELL"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "PINTURAS MCQUIMIBLANC DEL VALL",
        "CodigoCliente": 6549,
        "ViaPublica": "CALLE CINCA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "POSTFORMATS DEL VALLES S.L.",
        "CodigoCliente": 6552,
        "ViaPublica": "CARRETERA RUBI"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "ELASTIC BERGER S.A",
        "CodigoCliente": "06633",
        "ViaPublica": "CALLE CERDANYA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "FALCONERA  DE  GESTIONS S.L",
        "CodigoCliente": 6654,
        "ViaPublica": "CALLE CINCA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "COMUNIDAD DE PROPIETARIOS AVEN",
        "CodigoCliente": 6659,
        "ViaPublica": "AVENIDA BEJAR"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "MATERIAS TEXTILES JM PEÑA   S.",
        "CodigoCliente": 6663,
        "ViaPublica": "CALLE MIÑO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "GARATGE MOVIL",
        "CodigoCliente": 6671,
        "ViaPublica": "CALLE SOLSONA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "FUTURGAS  DE  CATALUNYA  S.L",
        "CodigoCliente": 6676,
        "ViaPublica": "CALLE CINCA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "ALUMINIS DISA   S.C.P.",
        "CodigoCliente": 6678,
        "ViaPublica": "AVENIDA SANTA EULALIA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "KOMUNICA  POWER  ACCESORIES  S",
        "CodigoCliente": 6681,
        "ViaPublica": "CALLE PUIGBARRAL"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "NR  ORIGINAL COFFEE &  TEA  SL",
        "CodigoCliente": 6702,
        "ViaPublica": "CALLE LLOBREGAT"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TRANSPORTES  PALAU  S.L",
        "CodigoCliente": 6703,
        "ViaPublica": "CALLE LLOBREGAT"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "MOELCO TECNICAS APLICADADAS S.",
        "CodigoCliente": 6734,
        "ViaPublica": "CARRETERA MONTCADA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "MULTIFUSTA S.C.C.L.",
        "CodigoCliente": 6752,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "HOMBRERAS DEL VALLES,S.L.",
        "CodigoCliente": 6775,
        "ViaPublica": "CALLE APOL.LO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "BARRUTOYS IBERIA,S.L.",
        "CodigoCliente": 6786,
        "ViaPublica": "CALLE GEMINIS"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "RECTIFICADOS TERRASSA,S.L.",
        "CodigoCliente": 6789,
        "ViaPublica": "CALLE MIÑO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "RODACCIAI S.L.",
        "CodigoCliente": 6790,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "ORBITAL GRAPHICS S.L.",
        "CodigoCliente": 6794,
        "ViaPublica": "CALLE MIÑO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "FRANCISCO JAVIER CARRILLO LOPEZ",
        "CodigoCliente": 6817,
        "ViaPublica": "CALLE MURA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "INDUSTRIAL  PAPERERA  EGARENSE",
        "CodigoCliente": 6831,
        "ViaPublica": "CALLE CINCA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "BIKE OCASION S.L.",
        "CodigoCliente": 6858,
        "ViaPublica": "CARRETERA CASTELLAR"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "BIKE OCASION S.L.",
        "CodigoCliente": 6858,
        "ViaPublica": "CALLE SOLSONA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "DM MECANIZADOS DOMO S. L.",
        "CodigoCliente": 6879,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "CLIMA FIRE S.L.",
        "CodigoCliente": 6880,
        "ViaPublica": "CALLE JUPITER"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "FUSTERS RAJODA S.L.",
        "CodigoCliente": 6900,
        "ViaPublica": "CALLE JILOCA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "WOODMARFI S.L.",
        "CodigoCliente": 6907,
        "ViaPublica": "CALLE ORIO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "JOSÉ MARTÍN POZO",
        "CodigoCliente": 6917,
        "ViaPublica": "CALLE NEPTU"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TREYMA CONSTRUCCIONES METÁLICA",
        "CodigoCliente": 6958,
        "ViaPublica": "CALLE APOL.LO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "LOGISTICA MATDECO S.L.",
        "CodigoCliente": 6988,
        "ViaPublica": "CALLE L' ESLA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "FITTINGS STEEL S.L.",
        "CodigoCliente": 6989,
        "ViaPublica": "AVENIDA VALLES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "CORSE MOTORSPORT S.L.",
        "CodigoCliente": 6997,
        "ViaPublica": "CALLE SEGURA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "IVAN ANDREU FERNANDEZ",
        "CodigoCliente": 7022,
        "ViaPublica": "CAMI FONT CANYES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TECNICAS DE PANIFICACION S.L.",
        "CodigoCliente": 7067,
        "ViaPublica": "CALLE SOLSONA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "ÓPTIMA ENVIRONMENTAL SERVICES S.L.",
        "CodigoCliente": 7084,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "UNIGASKET, S.L",
        "CodigoCliente": "07270",
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "OPENET ICS INTERNATIONAL, S.L",
        "CodigoCliente": "07627",
        "ViaPublica": "CARRETERA RUBI"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "CENTRO DE TRATAMIENTO DE MADEJAS S.L",
        "CodigoCliente": "08271",
        "ViaPublica": "CALLE MURA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TALLERES ESMAR S.L.",
        "CodigoCliente": "08692",
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "ENVERNISSATS I LACATS CEPEDA S.L.",
        "CodigoCliente": 10199,
        "ViaPublica": "CALLE APOL.LO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "KEELER EUROPE DISTRUBUTION, S.L.",
        "CodigoCliente": 10220,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "RECONSTRUCCION DE MOTORES TERRASSA SL",
        "CodigoCliente": 10306,
        "ViaPublica": "CALLE MIÑO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "DRINK CASH EGARA, S.L.",
        "CodigoCliente": 10332,
        "ViaPublica": "AVENIDA CAN JOFRESA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "VALLÈS AUTENTIC S.L.",
        "CodigoCliente": 10485,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "THE FUTURE IS ALREADY HERE, S.L.",
        "CodigoCliente": 11181,
        "ViaPublica": "CALLE ANOIA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "MOTORSPORT SERVICE, S.L.",
        "CodigoCliente": 11272,
        "ViaPublica": "CALLE L' ESLA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "BOUSSELHAM BENHAMDIA",
        "CodigoCliente": 11356,
        "ViaPublica": "CAMI CAN FARCAN"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "PRODUCTOS QUIMICOS ILLA, S.L",
        "CodigoCliente": 11543,
        "ViaPublica": "CALLE VENUS"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "CRB TERRASSA MOTORCYCLES S.L.",
        "CodigoCliente": 11730,
        "ViaPublica": "AVENIDA CAN JOFRESA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "JORDI FERRER 1960 SL",
        "CodigoCliente": 11763,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "AUMON SL",
        "CodigoCliente": 11923,
        "ViaPublica": "CALLE VENUS"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "EDVANNI 36 RYP VEHICULOS SL",
        "CodigoCliente": 11937,
        "ViaPublica": "CALLE MIGJORN"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "XUP-XUP FA LA CASSOLA SL",
        "CodigoCliente": 12004,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "M.B. LA BODEGUILLA S.L.",
        "CodigoCliente": 12079,
        "ViaPublica": "CARRETERA CASTELLAR"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "RUBEN BRETONES PEREGRINO",
        "CodigoCliente": 12083,
        "ViaPublica": "CALLE MIÑO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "CALDERERIA RUIFER S.L.",
        "CodigoCliente": 12140,
        "ViaPublica": "CALLE APOL.LO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "MH2 SEMPITERNO GESTION COMERCIAL SL",
        "CodigoCliente": 12202,
        "ViaPublica": "CALLE MIÑO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "BAREBONE SL",
        "CodigoCliente": 12278,
        "ViaPublica": "AVENIDA VALLES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "VICTOR LEYTON ESPEJO",
        "CodigoCliente": 12937,
        "ViaPublica": "CALLE BORGES BLANQUES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "THE DOCK GARAGE S.L.",
        "CodigoCliente": 33398,
        "ViaPublica": "CALLE PUIGBARRAL"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "NOU MAFYC CALDERERÍA Y PLANCHISTERÍA SL",
        "CodigoCliente": 33499,
        "ViaPublica": "CALLE APOL.LO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "FREDAIR 2016 S,L.",
        "CodigoCliente": 33547,
        "ViaPublica": "CALLE JUPITER"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "APLICACIONES TECNYFLUOR S.L.",
        "CodigoCliente": 33587,
        "ViaPublica": "CALLE NEPTU"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "J.ESQUERDA, S.A",
        "CodigoCliente": 33734,
        "ViaPublica": "CALLE MESTRE TRIAS"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "J MATA TRANSP. I GESTIO DE RESIDUS SL",
        "CodigoCliente": 33904,
        "ViaPublica": "CALLE PUIGBARRAL"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "CIRSA SERVICIOS CORPORATIVOS, S.L",
        "CodigoCliente": 33906,
        "ViaPublica": "CARRETERA CASTELLAR"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "LEDS FACTORY, S.L.",
        "CodigoCliente": 34104,
        "ViaPublica": "CARRETERA RUBI"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "ARIZON ELECTRIC SYSTEMS, S.L.",
        "CodigoCliente": 34323,
        "ViaPublica": "CALLE PUIGBARRAL"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "EDUARD AVILA HEREDIA",
        "CodigoCliente": 34442,
        "ViaPublica": "CALLE LINNE"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TEO SERVICIOS COMPARTIDOS SLOTS SL",
        "CodigoCliente": 34459,
        "ViaPublica": "CALLE L' AIRE"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "DRINK CASH DISTRIBUCIONES, S.L.",
        "CodigoCliente": 34472,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "VALLIMPER, S.A",
        "CodigoCliente": 34522,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TENDALS EGARA, S.L",
        "CodigoCliente": 34539,
        "ViaPublica": "CARRETERA OLESA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TOT NET SERV.DE LIMPIEZAS GRUPO NETTO SA",
        "CodigoCliente": 34730,
        "ViaPublica": "CALLE MIÑO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "METROCUARENTA, S.L.",
        "CodigoCliente": 34739,
        "ViaPublica": "CALLE CONFLENT"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "INTERLYNX DISTRIBUCION, S.L",
        "CodigoCliente": 34760,
        "ViaPublica": "CARRETERA RUBI"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "PUERTAS CALVENTE, S.L.",
        "CodigoCliente": 34796,
        "ViaPublica": "CARRETERA RUBI"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "DENA DESARROLLOS, S.L",
        "CodigoCliente": 34818,
        "ViaPublica": "CALLE CARDENER"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "SETNE IBERICA, S.L.U",
        "CodigoCliente": 34839,
        "ViaPublica": "CALLE CORDOVA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "ISCO IMPRESSORS S.L.",
        "CodigoCliente": 35081,
        "ViaPublica": "CALLE JUPITER"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "FEMOAC INDUSTRIAL, S.L",
        "CodigoCliente": 35315,
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "VENAIR BIOTECH , S.L",
        "CodigoCliente": 35316,
        "ViaPublica": "CALLE PERPINYA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "SILLCO TUBERIA FLEXIBLE, S.L",
        "CodigoCliente": 35317,
        "ViaPublica": "CALLE ALGUER"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "PREMIER RELOCATION SPAIN SL",
        "CodigoCliente": 35416,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "GRUP CAR MOTOR TERRASSA SL",
        "CodigoCliente": 35426,
        "ViaPublica": "CALLE CONFLENT"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "JUAN FRANCISCO CABELLO DELGADO",
        "CodigoCliente": 35546,
        "ViaPublica": "CALLE MURA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "DECOPLACK SOLUCIONES CONSTRUCT.S.L",
        "CodigoCliente": 35757,
        "ViaPublica": "AVENIDA VALLES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "STMS CULTURAL, S.L",
        "CodigoCliente": 35970,
        "ViaPublica": "CALLE LLOBREGAT"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "AFI-CORTE 1975, S.L.",
        "CodigoCliente": 35973,
        "ViaPublica": "CALLE BOSCH I GIMPERA"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "VACWAY WATERPROOF S.L.",
        "CodigoCliente": 35993,
        "ViaPublica": "CALLE ALBERT EINSTEIN"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "EOS FIX, S.L.",
        "CodigoCliente": 36013,
        "ViaPublica": "CALLE EBRE"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "CARPAS EGARA SL",
        "CodigoCliente": 36183,
        "ViaPublica": "CALLE HERCULES"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "PEDRO MENDEZ LLOPART",
        "CodigoCliente": 36315,
        "ViaPublica": "CALLE BARACALDO"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "TOTCARPES GLOBAL EVENTS SL",
        "CodigoCliente": 36352,
        "ViaPublica": "CALLE COLOM"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "OSCAR CASTRO SEGURA",
        "CodigoCliente": 36365,
        "ViaPublica": "CALLE VENDRELL"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "ADAMAS TOKEN CAPITAL SL",
        "CodigoCliente": 36553,
        "ViaPublica": "CALLE GEMINIS"
    },
    {
        "Municipio": "TERRASSA",
        "RazonSocial": "EMEOEME REALITZACIONS EN FUSTA SLU",
        "CodigoCliente": 85057,
        "ViaPublica": "CALLE PUIGBARRAL"
    },
    {
        "Municipio": "TORDERA",
        "RazonSocial": "AUTOCARS BARRERA, S.L.",
        "CodigoCliente": 13229,
        "ViaPublica": "VENAT SANT PERE"
    },
    {
        "Municipio": "TORDERA",
        "RazonSocial": "MEP ALIMENTACIO SL",
        "CodigoCliente": 36348,
        "ViaPublica": "CARRER D"
    },
    {
        "Municipio": "TORDERA",
        "RazonSocial": "MEP ALIMENTACIO SL",
        "CodigoCliente": 36348,
        "ViaPublica": "CARRER D"
    },
    {
        "Municipio": "TORRELLES DE LLOBREGAT",
        "RazonSocial": "CESAR JUAN MUÑOZ SAEZ",
        "CodigoCliente": 10583,
        "ViaPublica": "AVENIDA DOLÇA DE PROVENÇA"
    },
    {
        "Municipio": "TORRELLES DE LLOBREGAT",
        "RazonSocial": "IROKO  FACTORY SL",
        "CodigoCliente": 11221,
        "ViaPublica": "AVENIDA DOLÇA DE PROVENÇA"
    },
    {
        "Municipio": "TORRELLES DE LLOBREGAT",
        "RazonSocial": "ACTIVA IBERIA, S.L",
        "CodigoCliente": 34930,
        "ViaPublica": "AVENIDA DOLÇA DE PROVENÇA"
    },
    {
        "Municipio": "VALLIRANA",
        "RazonSocial": "CONSTRUCCIONES Y REFUERZOS EST",
        "CodigoCliente": 2694,
        "ViaPublica": "CALLE GARRAF"
    },
    {
        "Municipio": "VALLIRANA",
        "RazonSocial": "MÁRMOLES RAMOS, S.L.",
        "CodigoCliente": 35566,
        "ViaPublica": "CALLE GARRAF"
    },
    {
        "Municipio": "VALLIRANA",
        "RazonSocial": "GLOBAL TEXROK, S.L.",
        "CodigoCliente": 35590,
        "ViaPublica": "CALLE GARRIGUES"
    },
    {
        "Municipio": "VALLIRANA",
        "RazonSocial": "FILTO PROFILES ,S.L.",
        "CodigoCliente": 35841,
        "ViaPublica": "CALLE SOLSONES"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "EX CENTRICS PRODUCTION S.L(RE-CUP)",
        "CodigoCliente": "02211",
        "ViaPublica": "CALLE NOI DEL SUCRE"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "DORGRAF, S.L.",
        "CodigoCliente": 2474,
        "ViaPublica": "CALLE AGRICULTURA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "PUERTAS SANCÁS S.L.",
        "CodigoCliente": 6156,
        "ViaPublica": "CALLE LLOBATONA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "BOOMERAG SERVICIOS DEL MARKETI",
        "CodigoCliente": 6304,
        "ViaPublica": "CALLE LLOBATONA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "BETON CATALAN, S.A.",
        "CodigoCliente": 6306,
        "ViaPublica": "CALLE FORJA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "SANCHO PIÑOL, S.L.",
        "CodigoCliente": 6311,
        "ViaPublica": "CALLE NOI DEL SUCRE"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "ENTRAMADOS DELTA S.L.",
        "CodigoCliente": 6347,
        "ViaPublica": "CALLE ANDORRA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "BARAL ESPECIAS Y ADITIVOS, S.L",
        "CodigoCliente": 6478,
        "ViaPublica": "AVENIDA SEGLE XXI"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "KODATA DISTRIBUCIO, S.L.",
        "CodigoCliente": 6499,
        "ViaPublica": "CALLE CIENCIA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "DUOTECHNIK MANUTENCION S.A",
        "CodigoCliente": "06615",
        "ViaPublica": "CALLE LLOBATONA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "IVALORE.- INVESTIGACION Y VALORIZACION",
        "CodigoCliente": 7120,
        "ViaPublica": "CALLE NOI DEL SUCRE"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "IVALORE.- INVESTIGACION Y VALORIZACION",
        "CodigoCliente": 7120,
        "ViaPublica": "CALLE LLOBATONA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "AUDIOVISUALES DATA S.L.",
        "CodigoCliente": 7147,
        "ViaPublica": "? CARRE ENGINY"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "CONSTRUNER S.L",
        "CodigoCliente": "08796",
        "ViaPublica": "CARRETERA VILA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "VAMOS A COMER, S.L.",
        "CodigoCliente": "09746",
        "ViaPublica": "AVENIDA SEGLE XXI"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "GONSI S.L.",
        "CodigoCliente": 10982,
        "ViaPublica": "CALLE ANTONIO MACHADO"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "ASENDIA SPAIN, S.L.",
        "CodigoCliente": 11357,
        "ViaPublica": "AVENIDA SEGLE XXI"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "SKUM ACOUSTICS, S.L.",
        "CodigoCliente": 11366,
        "ViaPublica": "CALLE LLOBATONA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "PROMOTORA BALI S.A Y CIA. CB",
        "CodigoCliente": 11395,
        "ViaPublica": "CALLE TECNOLOGIA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "OOH MY WOOD INTERIORES SC",
        "CodigoCliente": 11900,
        "ViaPublica": "CALLE LLOBATONA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "ZENER PLUS SL",
        "CodigoCliente": 33707,
        "ViaPublica": "? CARRE ENGINY"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "BC WARRANTING MANAGEMENT, S.A",
        "CodigoCliente": 33780,
        "ViaPublica": "? CARRE ENGINY"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "CORUM ORIGIN",
        "CodigoCliente": 34428,
        "ViaPublica": "CALLE ANTONIO MACHADO"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "CORUM ORIGIN",
        "CodigoCliente": 34428,
        "ViaPublica": "CALLE CATALUNYA"
    },
    {
        "Municipio": "VILADECANS",
        "RazonSocial": "ROBERTO CABALLERO HERNAN-GOMEZ",
        "CodigoCliente": 35783,
        "ViaPublica": "? CARRE ENGINY"
    },
    {
        "Municipio": "VILAFRANCA DEL PENEDES",
        "RazonSocial": "GROWTARRACO DISTRIBUCIONES SLU",
        "CodigoCliente": 12727,
        "ViaPublica": "CAMI DE MOJA"
    },
    {
        "Municipio": "VILANOVA DEL VALLES",
        "RazonSocial": "SERTRANS S.A",
        "CodigoCliente": 7192,
        "ViaPublica": "CARRETERA VALLDERIOLF"
    },
    {
        "Municipio": "VILANOVA DEL VALLES",
        "RazonSocial": "MENBERSGRUP SL",
        "CodigoCliente": 36111,
        "ViaPublica": "?CARRER VILAMAJOR"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "SERTEC 20 S.L.U",
        "CodigoCliente": 6123,
        "ViaPublica": "MASIA D'EN NOTARI"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "ASCENSORES ENINTER S.L.U",
        "CodigoCliente": "08114",
        "ViaPublica": "RONDA IBERICA"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "RETAIL & KEY BUSINESS S.L",
        "CodigoCliente": 10158,
        "ViaPublica": "RAMBLA PAISOS CATALANS"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "AUTOMOCIO VNG NIETO MARTINEZ SL",
        "CodigoCliente": 12854,
        "ViaPublica": "AVENIDA EDUARD TOLDRA"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "ECO RECASENS SL",
        "CodigoCliente": 13005,
        "ViaPublica": "CARRER ROSER DOLCET"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "AUTO VIMUR 99,S.L",
        "CodigoCliente": 13056,
        "ViaPublica": "CARRER GUIX"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "ALDI MASQUEFA SUPERMERCADOS S.L.U",
        "CodigoCliente": 34782,
        "ViaPublica": "CARRER MOLI DE VENT"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "ORYX STAINLESS ESPAÑA S.L.U.",
        "CodigoCliente": 35170,
        "ViaPublica": "MUELLE COMERCIAL"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "BORGES COLORS, S.L.",
        "CodigoCliente": 35708,
        "ViaPublica": "CARRER MARCEL.LI GENE"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "GIVEITAWAY,S.L.U",
        "CodigoCliente": 35833,
        "ViaPublica": "CAMI RAL O MOLINANT (IV,3)"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "ESPACIO ARTEX, S.L",
        "CodigoCliente": 35892,
        "ViaPublica": "CARRER GUIX"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "GEBO IBERICA SAU",
        "CodigoCliente": 36014,
        "ViaPublica": "CARRER GUIX"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "TALLERES LA UNION DE VILANOVA S.L.",
        "CodigoCliente": 36180,
        "ViaPublica": "RAMBLA TORRE DE L'ONCLET"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "NEUMATICOS J GARCIA E HIJAS S.L",
        "CodigoCliente": 36234,
        "ViaPublica": "CARRER ROSER DOLCET"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "CARTONAJES EL TIGRE SCCL",
        "CodigoCliente": 36328,
        "ViaPublica": "AVINGUDA CAMI DELS CAPELLANS"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "FUSTERIA VELLA S.L.",
        "CodigoCliente": 36419,
        "ViaPublica": "CARRER GUIX"
    },
    {
        "Municipio": "VILANOVA I LA GELTRU",
        "RazonSocial": "MANIPULADORA DE MERCANCIAS S.L.",
        "CodigoCliente": 36947,
        "ViaPublica": "MUELLE COMERCIAL"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "VAP FIP AROMAS, S.L.",
        "CodigoCliente": "09448",
        "ViaPublica": "CALLE RAFEL RIERA PRATS"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "BIOPULCHER S.L",
        "CodigoCliente": "09457",
        "ViaPublica": "CALLE JOAN DE LA CIERVA"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "G2 VISUAL GROUP - RÓTULOS G2, S.L.",
        "CodigoCliente": 10318,
        "ViaPublica": "CALLE BILBAO"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "KOXKA KOBOL CATALUNYA, S.L.",
        "CodigoCliente": 10335,
        "ViaPublica": "CAMI ELENA"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "TICO MUSICA.S.A.",
        "CodigoCliente": 11151,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "MATARO GREEN SLU",
        "CodigoCliente": 11186,
        "ViaPublica": "CAMI MIG"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "COCINA SIN LIMITES S.L",
        "CodigoCliente": 11245,
        "ViaPublica": "CALLE JOAN PEIRO I BELIS"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "HORROR ISLAND S.L.",
        "CodigoCliente": 11387,
        "ViaPublica": "FINCA MAS BRASO"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "MAJUVI SERVICIOS Y ASESORAMIENTOS SL",
        "CodigoCliente": 13180,
        "ViaPublica": "RIERA TARGA"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "FLOOR FLEX SL",
        "CodigoCliente": 33415,
        "ViaPublica": "CALLE CAMI PLA DE VILASSAR"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "CERCOM FUSTERS S.C.P",
        "CodigoCliente": 33438,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "GAVARY GROUP BARCELONA SL",
        "CodigoCliente": 33442,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "EBANISTERIA DAOS, S.L.",
        "CodigoCliente": 34749,
        "ViaPublica": "PASSATGE PI"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "SEBASTIÁ LLORENS S.L.",
        "CodigoCliente": 34911,
        "ViaPublica": "CAMI ELENA"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "OLIGRAFIC IMPRESSORS SL",
        "CodigoCliente": 36429,
        "ViaPublica": "CALLE NARCIS MONTURIOL"
    },
    {
        "Municipio": "VILASSAR DE DALT",
        "RazonSocial": "IMRAN PLANTS SL",
        "CodigoCliente": 36556,
        "ViaPublica": "CAMI MIG"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "SERVIFLOR VILASSAR S.L.",
        "CodigoCliente": "00590",
        "ViaPublica": "CAMI DEL CRIST"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "COMERCIAL JAMONES HINOJOSA S.L.",
        "CodigoCliente": "09385",
        "ViaPublica": "CARRER DE LA PUJADA"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "THOMAS MAJORISTA DE FLORS, S.L.",
        "CodigoCliente": "09403",
        "ViaPublica": "CAMI DEL CRIST"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "FBA GOMYL SL",
        "CodigoCliente": 10902,
        "ViaPublica": "CALLE VOLTA DELS GARROFERS"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "SELVAMONSTERA, S.L.",
        "CodigoCliente": 11349,
        "ViaPublica": "AVENIDA DEL PROGRES"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "ROTULOS TERMINUS S.L.",
        "CodigoCliente": 11467,
        "ViaPublica": "AVENIDA DEL PROGRES"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "CRAFT DISTILLERY & BREWERY BARCELONA S.L",
        "CodigoCliente": 11969,
        "ViaPublica": "AVENIDA DEL PROGRES"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "ABANIK PRODUCCIONES SLU",
        "CodigoCliente": 33657,
        "ViaPublica": "AVENIDA DEL PROGRES"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "H.R FUNGIBLES S.L.",
        "CodigoCliente": 35296,
        "ViaPublica": "AVENIDA DEL PROGRES"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "TRANSDISTSERRA, S.L.",
        "CodigoCliente": 35364,
        "ViaPublica": "CAMI DEL CRIST"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "NOURA EL JARRAY",
        "CodigoCliente": 35615,
        "ViaPublica": "CAMI DEL CRIST"
    },
    {
        "Municipio": "VILASSAR DE MAR",
        "RazonSocial": "SYNQO GROWSOLUTIONS SL",
        "CodigoCliente": 36573,
        "ViaPublica": "CALLE VOLTA DELS GARROFERS"
    }
];

// Función para cargar contenido en el contenedor principal
function loadContent(page) {
    const contentContainer = document.getElementById('contentContainer');
    if (contentContainer) {
        contentContainer.innerHTML = forms[page] ? forms[page].html : '<h1>Contenido no encontrado</h1>';
        if (page === 'formularioIndustrial') {
            setupIndustrialForm(); // Inicializa los selectores del formulario Industrial
        }
    }
}

// Función para poblar los selectores
function populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    if (select) {
        select.innerHTML = '<option value="">Selecciona una opción</option>'; // Clear previous options
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            select.appendChild(opt);
        });
    }
}

// Función para poblar el formulario industrial
function setupIndustrialForm() {
    llenarMunicipios(); // Llenar los municipios en el select
    document.getElementById('municipio').addEventListener('change', function () {
        llenarRazonSocial(this.value); // Llenar la razón social según el municipio seleccionado
    });
    document.getElementById('razonSocial').addEventListener('change', function () {
        llenarCodigoClienteYViaPublica(this.value); // Llenar código cliente y vía pública según la razón social
    });
}

// Función para llenar los municipios en el select
function llenarMunicipios() {
    const municipioSelect = document.getElementById('municipio');
    if (municipioSelect) {
        const municipios = [...new Set(datos.map(item => item.Municipio))]; // Obtener municipios únicos
        populateSelect('municipio', municipios); // Llenar el selector de municipios
    }
}

// Función para llenar Razón Social
function llenarRazonSocial(municipioSeleccionado) {
    const razonSelect = document.getElementById('razonSocial');
    razonSelect.innerHTML = '<option value="">Selecciona una Razón Social</option>';
    razonSelect.disabled = !municipioSeleccionado;

    if (municipioSeleccionado) {
        const razones = [...new Set(datos.filter(item => item.Municipio === municipioSeleccionado).map(item => item.RazonSocial))];
        razones.forEach(razonSocial => {
            const option = document.createElement('option');
            option.value = razonSocial;
            option.textContent = razonSocial;
            razonSelect.appendChild(option);
        });
        razonSelect.disabled = false;
    }
}

// Función para llenar Código Cliente y Vía Pública
function llenarCodigoClienteYViaPublica(razonSeleccionada) {
    const codigoSelect = document.getElementById('codigoCliente');
    const viaPublicaSelect = document.getElementById('viaPublica');
    codigoSelect.innerHTML = '<option value="">Selecciona un Código Cliente</option>';
    viaPublicaSelect.innerHTML = '<option value="">Selecciona una Vía Pública</option>';
    codigoSelect.disabled = !razonSeleccionada;
    viaPublicaSelect.disabled = !razonSeleccionada;

    if (razonSeleccionada) {
        const items = datos.filter(item => item.RazonSocial === razonSeleccionada);
        items.forEach(item => {
            const optionCodigo = document.createElement('option');
            optionCodigo.value = item.CodigoCliente;
            optionCodigo.textContent = item.CodigoCliente;
            codigoSelect.appendChild(optionCodigo);

            const optionVia = document.createElement('option');
            optionVia.value = item.ViaPublica;
            optionVia.textContent = item.ViaPublica;
            viaPublicaSelect.appendChild(optionVia);
        });
        codigoSelect.disabled = false;
        viaPublicaSelect.disabled = false;
    }
}

// Inicializar el formulario de Industrial cuando el botón sea presionado
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnFormIndustrial').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('formularioIndustrial'); // Cargar el formulario Industrial
    });
});

window.forms = window.forms || {};
window.forms.formularioIndustrial = forms.formularioIndustrial;

window.inicializarFormularioIndustrial = inicializarFormularioIndustrial;
