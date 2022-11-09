export class Banks {
  public code: string;
  public desc: string;

  public static readonly B001 = new Banks("001", "BANCO DO BRASIL S.A.");
  public static readonly B003 = new Banks("003", "BCO DA AMAZONIA S.A.");
  public static readonly B004 = new Banks(
    "004",
    "BCO DO NORDESTE DO BRASIL S.A."
  );
  public static readonly B007 = new Banks("007", "BNDES");
  public static readonly B010 = new Banks("10", "CREDICOAMO");
  public static readonly B011 = new Banks(
    "11",
    "C.SUISSE HEDGING-GRIFFO CV S/A"
  );
  public static readonly B012 = new Banks("12", "BANCO INBURSA");
  public static readonly B014 = new Banks(
    "14",
    "STATE STREET BR S.A. BCO COMERCIAL"
  );
  public static readonly B015 = new Banks("15", "UBS BRASIL CCTVM S.A.");
  public static readonly B016 = new Banks("16", "SICOOB CREDITRAN");
  public static readonly B017 = new Banks("17", "BNY MELLON BCO S.A.");
  public static readonly B018 = new Banks("18", "BCO TRICURY S.A.");
  public static readonly B021 = new Banks("21", "BCO BANESTES S.A.");
  public static readonly B024 = new Banks("24", "BCO BANDEPE S.A.");
  public static readonly B025 = new Banks("25", "BCO ALFA S.A.");
  public static readonly B029 = new Banks("29", "BANCO ITAÚ CONSIGNADO S.A.");
  public static readonly B033 = new Banks(
    "33",
    "BANCO SANTANDER (BRASIL) S. A."
  );
  public static readonly B036 = new Banks("36", "BCO BBI S.A.");
  public static readonly B037 = new Banks("37", "BCO DO EST. DO PA S.A.");
  public static readonly B040 = new Banks("40", "BCO CARGILL S.A.");
  public static readonly B041 = new Banks("41", "BCO DO ESTADO DO RS S.A.");
  public static readonly B047 = new Banks("47", "BCO DO EST. DE SE S.A.");
  public static readonly B060 = new Banks("60", "CONFIDENCE CC S.A.");
  public static readonly B062 = new Banks("62", "HIPERCARD BM S.A.");
  public static readonly B063 = new Banks("63", "BANCO BRADESCARD");
  public static readonly B064 = new Banks(
    "64",
    "GOLDMAN SACHS DO BRASIL BM S.A"
  );
  public static readonly B065 = new Banks("65", "BCO ANDBANK S.A.");
  public static readonly B066 = new Banks("66", "BCO MORGAN STANLEY S.A.");
  public static readonly B069 = new Banks("69", "BCO CREFISA S.A.");
  public static readonly B070 = new Banks("70", "BRB - BCO DE BRASILIA S.A.");
  public static readonly B074 = new Banks("74", "BCO. J.SAFRA S.A.");
  public static readonly B075 = new Banks("75", "BCO ABN AMRO S.A.");
  public static readonly B076 = new Banks("76", "BCO KDB BRASIL S.A.");
  public static readonly B077 = new Banks("77", "BANCO INTER");
  public static readonly B078 = new Banks("78", "HAITONG BI DO BRASIL S.A.");
  public static readonly B079 = new Banks("79", "BCO ORIGINAL DO AGRO S/A");
  public static readonly B080 = new Banks("80", "B&T CC LTDA.");
  public static readonly B081 = new Banks("81", "BANCOSEGURO S.A.");
  public static readonly B082 = new Banks("82", "BANCO TOPÁZIO S.A.");
  public static readonly B083 = new Banks("83", "BCO DA CHINA BRASIL S.A.");
  public static readonly B084 = new Banks(
    "84",
    "UNIPRIME NORTE DO PARANÁ - CC"
  );
  public static readonly B085 = new Banks("85", "COOP CENTRAL AILOS");
  public static readonly B089 = new Banks("89", "CREDISAN CC");
  public static readonly B091 = new Banks("91", "CCCM UNICRED CENTRAL RS");
  public static readonly B092 = new Banks("92", "BRK S.A. CFI");
  public static readonly B093 = new Banks("93", "POLOCRED SCMEPP LTDA.");
  public static readonly B094 = new Banks("94", "BANCO FINAXIS");
  public static readonly B095 = new Banks(
    "95",
    "TRAVELEX BANCO DE CÂMBIO S.A."
  );
  public static readonly B096 = new Banks("96", "BCO B3 S.A.");
  public static readonly B097 = new Banks(
    "97",
    "CREDISIS CENTRAL DE COOPERATIVAS DE CRÉDITO LTDA."
  );
  public static readonly B098 = new Banks("98", "CREDIALIANÇA CCR");
  public static readonly B099 = new Banks("99", "UNIPRIME CENTRAL CCC LTDA.");
  public static readonly B100 = new Banks("100", "PLANNER CV S.A.");
  public static readonly B101 = new Banks("101", "RENASCENCA DTVM LTDA");
  public static readonly B102 = new Banks("102", "XP INVESTIMENTOS CCTVM S/A");
  public static readonly B104 = new Banks("104", "CAIXA ECONÔMICA FEDERAL");
  public static readonly B105 = new Banks("105", "LECCA CFI S.A.");
  public static readonly B107 = new Banks("107", "BCO BOCOM BBM S.A.");
  public static readonly B108 = new Banks("108", "PORTOCRED S.A. - CFI");
  public static readonly B111 = new Banks("111", "OLIVEIRA TRUST DTVM S.A.");
  public static readonly B113 = new Banks("113", "MAGLIANO S.A. CCVM");
  public static readonly B114 = new Banks(
    "114",
    "CENTRAL COOPERATIVA DE CRÉDITO NO ESTADO DO ESPÍRITO SANTO"
  );
  public static readonly B117 = new Banks("117", "ADVANCED CC LTDA");
  public static readonly B119 = new Banks("119", "BCO WESTERN UNION");
  public static readonly B120 = new Banks("120", "BCO RODOBENS S.A.");
  public static readonly B121 = new Banks("121", "BCO AGIBANK S.A.");
  public static readonly B122 = new Banks("122", "BCO BRADESCO BERJ S.A.");
  public static readonly B124 = new Banks(
    "124",
    "BCO WOORI BANK DO BRASIL S.A."
  );
  public static readonly B125 = new Banks("125", "PLURAL BCO BM");
  public static readonly B126 = new Banks("126", "BR PARTNERS BI");
  public static readonly B127 = new Banks("127", "CODEPE CVC S.A.");
  public static readonly B128 = new Banks("128", "MS BANK S.A. BCO DE CÂMBIO");
  public static readonly B129 = new Banks("129", "UBS BRASIL BI S.A.");
  public static readonly B130 = new Banks("130", "CARUANA SCFI");
  public static readonly B131 = new Banks(
    "131",
    "TULLETT PREBON BRASIL CVC LTDA"
  );
  public static readonly B132 = new Banks("132", "ICBC DO BRASIL BM S.A.");
  public static readonly B133 = new Banks("133", "CRESOL CONFEDERAÇÃO");
  public static readonly B134 = new Banks("134", "BGC LIQUIDEZ DTVM LTDA");
  public static readonly B136 = new Banks("136", "UNICRED");
  public static readonly B138 = new Banks("138", "GET MONEY CC LTDA");
  public static readonly B139 = new Banks(
    "139",
    "INTESA SANPAOLO BRASIL S.A. BM"
  );
  public static readonly B140 = new Banks("140", "EASYNVEST - TÍTULO CV SA");
  public static readonly B142 = new Banks("142", "BROKER BRASIL CC LTDA.");
  public static readonly B143 = new Banks("143", "TREVISO CC S.A.");
  public static readonly B144 = new Banks("144", "BEXS BCO DE CAMBIO S.A.");
  public static readonly B145 = new Banks("145", "LEVYCAM CCV LTDA");
  public static readonly B146 = new Banks("146", "GUITTA CC LTDA");
  public static readonly B149 = new Banks("149", "FACTA S.A. CFI");
  public static readonly B157 = new Banks("157", "ICAP DO BRASIL CTVM LTDA.");
  public static readonly B159 = new Banks("159", "CASA CREDITO S.A. SCM");
  public static readonly B163 = new Banks(
    "163",
    "COMMERZBANK BRASIL S.A. - BCO MÚLTIPLO"
  );
  public static readonly B169 = new Banks(
    "169",
    "BCO OLÉ BONSUCESSO CONSIGNADO S.A."
  );
  public static readonly B173 = new Banks("173", "BRL TRUST DTVM SA");
  public static readonly B174 = new Banks(
    "174",
    "PERNAMBUCANAS FINANC S.A. CFI"
  );
  public static readonly B177 = new Banks("177", "GUIDE");
  public static readonly B180 = new Banks(
    "180",
    "CM CAPITAL MARKETS CCTVM LTDA"
  );
  public static readonly B183 = new Banks("183", "SOCRED SA - SCMEPP");
  public static readonly B184 = new Banks("184", "BCO ITAÚ BBA S.A.");
  public static readonly B188 = new Banks(
    "188",
    "ATIVA S.A. INVESTIMENTOS CCTVM"
  );
  public static readonly B189 = new Banks("189", "HS FINANCEIRA");
  public static readonly B190 = new Banks("190", "SERVICOOP");
  public static readonly B191 = new Banks("191", "NOVA FUTURA CTVM LTDA.");
  public static readonly B194 = new Banks("194", "PARMETAL DTVM LTDA");
  public static readonly B196 = new Banks("196", "FAIR CC S.A.");
  public static readonly B197 = new Banks("197", "STONE PAGAMENTOS S.A.");
  public static readonly B208 = new Banks("208", "BANCO BTG PACTUAL S.A.");
  public static readonly B212 = new Banks("212", "BANCO ORIGINAL");
  public static readonly B213 = new Banks("213", "BCO ARBI S.A.");
  public static readonly B217 = new Banks("217", "BANCO JOHN DEERE S.A.");
  public static readonly B218 = new Banks("218", "BCO BS2 S.A.");
  public static readonly B222 = new Banks("222", "BCO CRÉDIT AGRICOLE BR S.A.");
  public static readonly B224 = new Banks("224", "BCO FIBRA S.A.");
  public static readonly B233 = new Banks("233", "BANCO CIFRA");
  public static readonly B237 = new Banks("237", "BANCO BRADESCO S.A.");
  public static readonly B241 = new Banks("241", "BCO CLASSICO S.A.");
  public static readonly B243 = new Banks("243", "BCO MÁXIMA S.A.");
  public static readonly B246 = new Banks("246", "BCO ABC BRASIL S.A.");
  public static readonly B249 = new Banks(
    "249",
    "BANCO INVESTCRED UNIBANCO S.A."
  );
  public static readonly B250 = new Banks("250", "BCV");
  public static readonly B253 = new Banks("253", "BEXS CC S.A.");
  public static readonly B254 = new Banks("254", "PARANA BCO S.A.");
  public static readonly B259 = new Banks(
    "259",
    "MONEYCORP BCO DE CÂMBIO S.A."
  );
  public static readonly B260 = new Banks("260", "NU PAGAMENTOS S.A.");
  public static readonly B265 = new Banks("265", "BCO FATOR S.A.");
  public static readonly B266 = new Banks("266", "BCO CEDULA S.A.");
  public static readonly B268 = new Banks("268", "BARI CIA HIPOTECÁRIA");
  public static readonly B269 = new Banks("269", "HSBC BANCO DE INVESTIMENTO");
  public static readonly B270 = new Banks("270", "SAGITUR CC LTDA");
  public static readonly B271 = new Banks("271", "IB CCTVM S.A.");
  public static readonly B272 = new Banks("272", "AGK CC S.A.");
  public static readonly B273 = new Banks("273", "CCR DE SÃO MIGUEL DO OESTE");
  public static readonly B274 = new Banks("274", "MONEY PLUS SCMEPP LTDA");
  public static readonly B276 = new Banks("276", "SENFF S.A. - CFI");
  public static readonly B278 = new Banks(
    "278",
    "GENIAL INVESTIMENTOS CVM S.A."
  );
  public static readonly B279 = new Banks("279", "CCR DE PRIMAVERA DO LESTE");
  public static readonly B280 = new Banks("280", "AVISTA S.A. CFI");
  public static readonly B281 = new Banks("281", "CCR COOPAVEL");
  public static readonly B283 = new Banks(
    "283",
    "RB CAPITAL INVESTIMENTOS DTVM LTDA."
  );
  public static readonly B285 = new Banks("285", "FRENTE CC LTDA.");
  public static readonly B286 = new Banks("286", "CCR DE OURO");
  public static readonly B288 = new Banks("288", "CAROL DTVM LTDA.");
  public static readonly B289 = new Banks("289", "DECYSEO CC LTDA.");
  public static readonly B290 = new Banks("290", "PAGSEGURO");
  public static readonly B292 = new Banks("292", "BS2 DTVM S.A.");
  public static readonly B293 = new Banks("293", "LASTRO RDV DTVM LTDA");
  public static readonly B296 = new Banks("296", "VISION S.A. CC");
  public static readonly B298 = new Banks("298", "VIPS CC LTDA.");
  public static readonly B299 = new Banks("299", "SOROCRED CFI S.A.");
  public static readonly B300 = new Banks("300", "BCO LA NACION ARGENTINA");
  public static readonly B301 = new Banks("301", "BPP IP S.A.");
  public static readonly B306 = new Banks("306", "PORTOPAR DTVM LTDA");
  public static readonly B307 = new Banks("307", "TERRA INVESTIMENTOS DTVM");
  public static readonly B309 = new Banks("309", "CAMBIONET CC LTDA");
  public static readonly B310 = new Banks("310", "VORTX DTVM LTDA.");
  public static readonly B315 = new Banks("315", "PI DTVM S.A.");
  public static readonly B318 = new Banks("318", "BCO BMG S.A.");
  public static readonly B319 = new Banks("319", "OM DTVM LTDA");
  public static readonly B320 = new Banks("320", "BCO CCB BRASIL S.A.");
  public static readonly B321 = new Banks("321", "CREFAZ SCMEPP LTDA");
  public static readonly B322 = new Banks("322", "CCR DE ABELARDO LUZ");
  public static readonly B323 = new Banks("323", "MERCADO PAGO");
  public static readonly B325 = new Banks("325", "ÓRAMA DTVM S.A.");
  public static readonly B326 = new Banks("326", "PARATI - CFI S.A.");
  public static readonly B329 = new Banks("329", "QI SCD S.A.");
  public static readonly B330 = new Banks("330", "BANCO BARI S.A.");
  public static readonly B331 = new Banks("331", "FRAM CAPITAL DTVM S.A.");
  public static readonly B332 = new Banks("332", "ACESSO");
  public static readonly B335 = new Banks("335", "BANCO DIGIO");
  public static readonly B336 = new Banks("336", "BCO C6 S.A.");
  public static readonly B340 = new Banks(
    "340",
    "SUPER PAGAMENTOS E ADMINISTRACAO DE MEIOS ELETRONICOS S.A."
  );
  public static readonly B341 = new Banks("341", "ITAÚ UNIBANCO  S.A.");
  public static readonly B342 = new Banks("342", "CREDITAS SCD");
  public static readonly B343 = new Banks("343", "FFA SCMEPP LTDA.");
  public static readonly B348 = new Banks("348", "BCO XP S.A.");
  public static readonly B349 = new Banks("349", "AMAGGI S.A. CFI");
  public static readonly B352 = new Banks("352", "TORO CTVM LTDA");
  public static readonly B354 = new Banks(
    "354",
    "NECTON INVESTIMENTOS S.A CVM"
  );
  public static readonly B355 = new Banks("355", "ÓTIMO SCD S.A.");
  public static readonly B364 = new Banks(
    "364",
    "GERENCIANET PAGTOS BRASIL LTDA"
  );
  public static readonly B365 = new Banks("365", "SOLIDUS S.A. CCVM");
  public static readonly B366 = new Banks("366", "BCO SOCIETE GENERALE BRASIL");
  public static readonly B367 = new Banks("367", "VITREO DTVM S.A.");
  public static readonly B370 = new Banks("370", "BCO MIZUHO S.A.");
  public static readonly B373 = new Banks("373", "UP.P SEP S.A.");
  public static readonly B376 = new Banks("376", "BCO J.P. MORGAN S.A.");
  public static readonly B389 = new Banks(
    "389",
    "BCO MERCANTIL DO BRASIL S.A."
  );
  public static readonly B394 = new Banks("394", "BCO BRADESCO FINANC. S.A.");
  public static readonly B399 = new Banks("399", "KIRTON BANK");
  public static readonly B412 = new Banks("412", "BCO CAPITAL S.A.");
  public static readonly B413 = new Banks("413", "BCO BV S.A.");
  public static readonly B422 = new Banks("422", "BCO SAFRA S.A.");
  public static readonly B450 = new Banks(
    "450",
    "FITBANK PAGAMENTOS ELETRONICOS S.A."
  );
  public static readonly B456 = new Banks("456", "BCO MUFG BRASIL S.A.");
  public static readonly B464 = new Banks(
    "464",
    "BCO SUMITOMO MITSUI BRASIL S.A."
  );
  public static readonly B473 = new Banks("473", "BCO CAIXA GERAL BRASIL S.A.");
  public static readonly B477 = new Banks("477", "CITIBANK N.A.");
  public static readonly B479 = new Banks("479", "BCO ITAUBANK S.A.");
  public static readonly B487 = new Banks(
    "487",
    "DEUTSCHE BANK S.A.BCO ALEMAO"
  );
  public static readonly B488 = new Banks("488", "JPMORGAN CHASE BANK");
  public static readonly B492 = new Banks("492", "ING BANK N.V.");
  public static readonly B495 = new Banks(
    "495",
    "BCO LA PROVINCIA B AIRES BCE"
  );
  public static readonly B505 = new Banks("505", "BCO CREDIT SUISSE S.A.");
  public static readonly B545 = new Banks("545", "SENSO CCVM S.A.");
  public static readonly B600 = new Banks("600", "BCO LUSO BRASILEIRO S.A.");
  public static readonly B604 = new Banks(
    "604",
    "BCO INDUSTRIAL DO BRASIL S.A."
  );
  public static readonly B610 = new Banks("610", "BCO VR S.A.");
  public static readonly B611 = new Banks("611", "BCO PAULISTA S.A.");
  public static readonly B612 = new Banks("612", "BCO GUANABARA S.A.");
  public static readonly B613 = new Banks("613", "OMNI BANCO S.A.");
  public static readonly B623 = new Banks("623", "BANCO PAN");
  public static readonly B626 = new Banks("626", "BCO FICSA S.A.");
  public static readonly B630 = new Banks("630", "SMARTBANK");
  public static readonly B633 = new Banks("633", "BCO RENDIMENTO S.A.");
  public static readonly B634 = new Banks("634", "BCO TRIANGULO S.A.");
  public static readonly B637 = new Banks("637", "BCO SOFISA S.A.");
  public static readonly B643 = new Banks("643", "BCO PINE S.A.");
  public static readonly B652 = new Banks("652", "ITAÚ UNIBANCO HOLDING S.A.");
  public static readonly B653 = new Banks("653", "BCO INDUSVAL S.A.");
  public static readonly B654 = new Banks("654", "BCO A.J. RENNER S.A.");
  public static readonly B707 = new Banks("707", "BCO DAYCOVAL S.A");
  public static readonly B712 = new Banks("712", "BCO OURINVEST S.A.");
  public static readonly B735 = new Banks("735", "BANCO NEON");
  public static readonly B739 = new Banks("739", "BCO CETELEM S.A.");
  public static readonly B741 = new Banks("741", "BCO RIBEIRAO PRETO S.A.");
  public static readonly B743 = new Banks("743", "BANCO SEMEAR");
  public static readonly B745 = new Banks("745", "BCO CITIBANK S.A.");
  public static readonly B746 = new Banks("746", "BCO MODAL S.A.");
  public static readonly B747 = new Banks(
    "747",
    "BCO RABOBANK INTL BRASIL S.A."
  );
  public static readonly B748 = new Banks(
    "748",
    "BCO COOPERATIVO SICREDI S.A."
  );
  public static readonly B751 = new Banks("751", "SCOTIABANK BRASIL");
  public static readonly B752 = new Banks("752", "BCO BNP PARIBAS BRASIL S A");
  public static readonly B753 = new Banks(
    "753",
    "NOVO BCO CONTINENTAL S.A. - BM"
  );
  public static readonly B754 = new Banks("754", "BANCO SISTEMA");
  public static readonly B755 = new Banks("755", "BOFA MERRILL LYNCH BM S.A.");
  public static readonly B756 = new Banks("756", "BANCOOB");
  public static readonly B757 = new Banks("757", "BCO KEB HANA DO BRASIL S.A.");
  public static readonly B34878543 = new Banks("34878543", "Claro Pay S.A.");

  private constructor(code: string, desc: string) {
    this.code = code;
    this.desc = desc;
  }
  public toString(): string {
    return this.code;
  }
}
