const express = require("express");

const request = require("request");

const parser = require("xml-js");

var cors = require('cors')

var app = express()

app.use(cors());

app.use(express.json());


// login component
app.post("/login", function (req, res) {
   console.log(req.body);
   uname = req.body.uname;
   pwd = req.body.pwd;
   console.log(uname);
   console.log(pwd);
   //  username="0000000007";
   //  password="RAM";
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZSD_LOGINCUST_KNH>
         <!--You may enter the following 2 items in any order-->
         <I_CUSTID>`+uname+`</I_CUSTID>
         <I_PASSWORD>`+pwd+`</I_PASSWORD>
      </urn:ZSD_LOGINCUST_KNH>
   </soapenv:Body>
</soapenv:Envelope>`;

   var options = {

      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_KNH_PORTALS&receiverParty=&receiverService=&interface=SI_LOGIN_CUST&interfaceNamespace=http://customerportalknh.com',

      headers: {
         'Content-Type': 'application/xml',

         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },

      body: postData

   }

   request.post(options, function (error, response, body) {

      if (!error && response.statusCode == 200) {

         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });

         result1 = JSON.parse(result1);

         res.send(result1);

    }
   }
   );

})


// credit/debit component
app.post("/creditdebit", function (req, res) {
    uname = req.body.uname;
    password = req.body.password;
    //console.log(uname);
   //   username="0000000007";
   //   password="RAM";
    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFI_CREDIT_DEBITKNH>
          <!--You may enter the following 3 items in any order-->
          <I_CID>`+uname+`</I_CID>
          <!--Optional:-->
          <IT_CREDIT>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <AUGDT></AUGDT>
                <!--Optional:-->
                <AUGBL></AUGBL>
                <!--Optional:-->
                <PSWSL></PSWSL>
             </item>
          </IT_CREDIT>
          <!--Optional:-->
          <IT_DEBIT>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <AUGDT></AUGDT>
                <!--Optional:-->
                <AUGBL></AUGBL>
                <!--Optional:-->
                <PSWSL></PSWSL>
             </item>
          </IT_DEBIT>
       </urn:ZFI_CREDIT_DEBITKNH>
    </soapenv:Body>
 </soapenv:Envelope>`;
 
    var options = {
 
       url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_KNH_PORTALS&receiverParty=&receiverService=&interface=SI_CREDIT_DEBIT&interfaceNamespace=http://customerportalknh.com',
 
       headers: {
          'Content-Type': 'application/xml',
 
          'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
       },
 
       body: postData
 
    }
 
    request.post(options, function (error, response, body) {
 
       if (!error && response.statusCode == 200) {
 
          var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
 
          result1 = JSON.parse(result1);
 
          res.send(result1);
 
     }
    }
    );
 
 })
 

// customer detail component
app.post("/custdetail", function (req, res) {
    uname = req.body.uname;
   //  password = req.body.password;
    //console.log(uname);
   //   username="0000000007";
   //   password="RAM";
    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_CUSTPROFILE_DETAIL_KNH>
          <I_CUSTID>`+uname+`</I_CUSTID>
       </urn:ZSD_CUSTPROFILE_DETAIL_KNH>
    </soapenv:Body>
 </soapenv:Envelope>`;
 
    var options = {
 
       url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_KNH_PORTALS&receiverParty=&receiverService=&interface=SI_CUSTDETAIL&interfaceNamespace=http://customerportalknh.com',
 
       headers: {
          'Content-Type': 'application/xml',
 
          'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
       },
 
       body: postData
 
    }
 
    request.post(options, function (error, response, body) {
 
       if (!error && response.statusCode == 200) {
 
          var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
 
          result1 = JSON.parse(result1);
 
          res.send(result1);
 
     }
    }
    );
 
 })
 
 
// customer edit component
app.get("/custedit", function (req, res) {
    //username = req.body.username;
    //password = req.body.password;
    //console.log(username);
     username="0000000007";
     password="RAM";
    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_CUSTPROFILE_EDIT_KNH>
          <!--You may enter the following 9 items in any order-->
          <I_CITY></I_CITY>
          <I_COUNTRY></I_COUNTRY>
          <I_KUNNR></I_KUNNR>
          <I_NAME1></I_NAME1>
          <I_NAME2></I_NAME2>
          <I_PSTLZ></I_PSTLZ>
          <I_STATE></I_STATE>
          <I_STREET></I_STREET>
          <I_TELF1></I_TELF1>
       </urn:ZSD_CUSTPROFILE_EDIT_KNH>
    </soapenv:Body>
 </soapenv:Envelope>`;
 
    var options = {
 
       url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_KNH_PORTALS&receiverParty=&receiverService=&interface=SI_CUSTEDIT&interfaceNamespace=http://customerportalknh.com',
 
       headers: {
          'Content-Type': 'application/xml',
 
          'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
       },
 
       body: postData
 
    }
 
    request.post(options, function (error, response, body) {
 
       if (!error && response.statusCode == 200) {
 
          var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
 
          result1 = JSON.parse(result1);
 
          res.send(result1);
 
     }
    }
    );
 
 })
 
  
// delivery get component
app.post("/delivery", function (req, res) {
    uname = req.body.uname;
   // password = req.body.password;
    console.log(uname);
   //   username="0000000007";
   //   password="RAM";
    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_DELIVERYGETLIST_KNH>
          <!--You may enter the following 2 items in any order-->
          <I_CUSTID>`+uname+`</I_CUSTID>
          <!--Optional:-->
          <IT_DELIVERY_LIST>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <VBELN></VBELN>
                <!--Optional:-->
                <VKORG></VKORG>
                <!--Optional:-->
                <LFART></LFART>
                <!--Optional:-->
                <PSTYV></PSTYV>
                <!--Optional:-->
                <LFDAT></LFDAT>
                <!--Optional:-->
                <LFUHR></LFUHR>
                <!--Optional:-->
                <FKDAT></FKDAT>
                <!--Optional:-->
                <MATNR></MATNR>
                <!--Optional:-->
                <ARKTX></ARKTX>
                <!--Optional:-->
                <MEINS></MEINS>
                <!--Optional:-->
                <GEWEI></GEWEI>
             </item>
          </IT_DELIVERY_LIST>
       </urn:ZSD_DELIVERYGETLIST_KNH>
    </soapenv:Body>
 </soapenv:Envelope>`;
 
    var options = {
 
       url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_KNH_PORTALS&receiverParty=&receiverService=&interface=SI_DELIVERYGETLIST&interfaceNamespace=http://customerportalknh.com',
 
       headers: {
          'Content-Type': 'application/xml',
 
          'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
       },
 
       body: postData
 
    }
 
    request.post(options, function (error, response, body) {
 
       if (!error && response.statusCode == 200) {
 
          var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
 
          result1 = JSON.parse(result1);
 
          res.send(result1);
 
     }
    }
    );
 
 })
 
 
 //  get payment aging component
app.post("/getpayment", function (req, res) {
    uname = req.body.uname;
   //  password = req.body.password;
    console.log(uname);
   //   username="0000000007";
   //   password="RAM";
    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFI_GET_PAYMENTAGING_KNH>
          <!--You may enter the following 4 items in any order-->
          <I_CID>`+uname+`</I_CID>
          <I_COMPANYCODE>SA01</I_COMPANYCODE>
          <!--Optional:-->
          <I_DOCDATE></I_DOCDATE>
          <!--Optional:-->
          <IT_DETAILS>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <COMP_CODE></COMP_CODE>
                <!--Optional:-->
                <CUSTOMER></CUSTOMER>
                <!--Optional:-->
                <SP_GL_IND></SP_GL_IND>
                <!--Optional:-->
                <CLEAR_DATE></CLEAR_DATE>
                <!--Optional:-->
                <CLR_DOC_NO></CLR_DOC_NO>
                <!--Optional:-->
                <ALLOC_NMBR></ALLOC_NMBR>
                <!--Optional:-->
                <FISC_YEAR></FISC_YEAR>
                <!--Optional:-->
                <DOC_NO></DOC_NO>
                <!--Optional:-->
                <ITEM_NUM></ITEM_NUM>
                <!--Optional:-->
                <PSTNG_DATE></PSTNG_DATE>
                <!--Optional:-->
                <DOC_DATE></DOC_DATE>
                <!--Optional:-->
                <ENTRY_DATE></ENTRY_DATE>
                <!--Optional:-->
                <CURRENCY></CURRENCY>
                <!--Optional:-->
                <LOC_CURRCY></LOC_CURRCY>
                <!--Optional:-->
                <REF_DOC_NO></REF_DOC_NO>
                <!--Optional:-->
                <DOC_TYPE></DOC_TYPE>
                <!--Optional:-->
                <FIS_PERIOD></FIS_PERIOD>
                <!--Optional:-->
                <POST_KEY></POST_KEY>
                <!--Optional:-->
                <DB_CR_IND></DB_CR_IND>
                <!--Optional:-->
                <BUS_AREA></BUS_AREA>
                <!--Optional:-->
                <TAX_CODE></TAX_CODE>
                <!--Optional:-->
                <LC_AMOUNT></LC_AMOUNT>
                <!--Optional:-->
                <AMT_DOCCUR></AMT_DOCCUR>
                <!--Optional:-->
                <LC_TAX></LC_TAX>
                <!--Optional:-->
                <TX_DOC_CUR></TX_DOC_CUR>
                <!--Optional:-->
                <ITEM_TEXT></ITEM_TEXT>
                <!--Optional:-->
                <BRANCH></BRANCH>
                <!--Optional:-->
                <BLINE_DATE></BLINE_DATE>
                <!--Optional:-->
                <PMNTTRMS></PMNTTRMS>
                <!--Optional:-->
                <DSCT_DAYS1></DSCT_DAYS1>
                <!--Optional:-->
                <DSCT_DAYS2></DSCT_DAYS2>
                <!--Optional:-->
                <NETTERMS></NETTERMS>
                <!--Optional:-->
                <DSCT_PCT1></DSCT_PCT1>
                <!--Optional:-->
                <DSCT_PCT2></DSCT_PCT2>
                <!--Optional:-->
                <DISC_BASE></DISC_BASE>
                <!--Optional:-->
                <DSC_AMT_LC></DSC_AMT_LC>
                <!--Optional:-->
                <DSC_AMT_DC></DSC_AMT_DC>
                <!--Optional:-->
                <PYMT_METH></PYMT_METH>
                <!--Optional:-->
                <PMNT_BLOCK></PMNT_BLOCK>
                <!--Optional:-->
                <FIXEDTERMS></FIXEDTERMS>
                <!--Optional:-->
                <INV_REF></INV_REF>
                <!--Optional:-->
                <INV_YEAR></INV_YEAR>
                <!--Optional:-->
                <INV_ITEM></INV_ITEM>
                <!--Optional:-->
                <DUNN_BLOCK></DUNN_BLOCK>
                <!--Optional:-->
                <DUNN_KEY></DUNN_KEY>
                <!--Optional:-->
                <LAST_DUNN></LAST_DUNN>
                <!--Optional:-->
                <DUNN_LEVEL></DUNN_LEVEL>
                <!--Optional:-->
                <DUNN_AREA></DUNN_AREA>
                <!--Optional:-->
                <DOC_STATUS></DOC_STATUS>
                <!--Optional:-->
                <NXT_DOCTYP></NXT_DOCTYP>
                <!--Optional:-->
                <VAT_REG_NO></VAT_REG_NO>
                <!--Optional:-->
                <REASON_CDE></REASON_CDE>
                <!--Optional:-->
                <PMTMTHSUPL></PMTMTHSUPL>
                <!--Optional:-->
                <REF_KEY_1></REF_KEY_1>
                <!--Optional:-->
                <REF_KEY_2></REF_KEY_2>
                <!--Optional:-->
                <T_CURRENCY></T_CURRENCY>
                <!--Optional:-->
                <AMOUNT></AMOUNT>
                <!--Optional:-->
                <NET_AMOUNT></NET_AMOUNT>
                <!--Optional:-->
                <NAME></NAME>
                <!--Optional:-->
                <NAME_2></NAME_2>
                <!--Optional:-->
                <NAME_3></NAME_3>
                <!--Optional:-->
                <NAME_4></NAME_4>
                <!--Optional:-->
                <POSTL_CODE></POSTL_CODE>
                <!--Optional:-->
                <CITY></CITY>
                <!--Optional:-->
                <COUNTRY></COUNTRY>
                <!--Optional:-->
                <STREET></STREET>
                <!--Optional:-->
                <PO_BOX></PO_BOX>
                <!--Optional:-->
                <POBX_PCD></POBX_PCD>
                <!--Optional:-->
                <POBK_CURAC></POBK_CURAC>
                <!--Optional:-->
                <BANK_ACCT></BANK_ACCT>
                <!--Optional:-->
                <BANK_KEY></BANK_KEY>
                <!--Optional:-->
                <BANK_CTRY></BANK_CTRY>
                <!--Optional:-->
                <TAX_NO_1></TAX_NO_1>
                <!--Optional:-->
                <TAX_NO_2></TAX_NO_2>
                <!--Optional:-->
                <TAX></TAX>
                <!--Optional:-->
                <EQUAL_TAX></EQUAL_TAX>
                <!--Optional:-->
                <REGION></REGION>
                <!--Optional:-->
                <CTRL_KEY></CTRL_KEY>
                <!--Optional:-->
                <INSTR_KEY></INSTR_KEY>
                <!--Optional:-->
                <PAYEE_CODE></PAYEE_CODE>
                <!--Optional:-->
                <LANGU></LANGU>
                <!--Optional:-->
                <BILL_LIFE></BILL_LIFE>
                <!--Optional:-->
                <BE_TAXCODE></BE_TAXCODE>
                <!--Optional:-->
                <BILLTAX_LC></BILLTAX_LC>
                <!--Optional:-->
                <BILLTAX_FC></BILLTAX_FC>
                <!--Optional:-->
                <LC_COL_CHG></LC_COL_CHG>
                <!--Optional:-->
                <COLL_CHARG></COLL_CHARG>
                <!--Optional:-->
                <CHGS_TX_CD></CHGS_TX_CD>
                <!--Optional:-->
                <ISSUE_DATE></ISSUE_DATE>
                <!--Optional:-->
                <USAGEDATE></USAGEDATE>
                <!--Optional:-->
                <BILL_USAGE></BILL_USAGE>
                <!--Optional:-->
                <DOMICILE></DOMICILE>
                <!--Optional:-->
                <DRAWER></DRAWER>
                <!--Optional:-->
                <CTRBNK_LOC></CTRBNK_LOC>
                <!--Optional:-->
                <DRAW_CITY1></DRAW_CITY1>
                <!--Optional:-->
                <DRAWEE></DRAWEE>
                <!--Optional:-->
                <DRAW_CITY2></DRAW_CITY2>
                <!--Optional:-->
                <DISCT_DAYS></DISCT_DAYS>
                <!--Optional:-->
                <DISCT_RATE></DISCT_RATE>
                <!--Optional:-->
                <ACCEPTED></ACCEPTED>
                <!--Optional:-->
                <BILLSTATUS></BILLSTATUS>
                <!--Optional:-->
                <PRTEST_IND></PRTEST_IND>
                <!--Optional:-->
                <BE_DEMAND></BE_DEMAND>
                <!--Optional:-->
                <OBJ_TYPE></OBJ_TYPE>
                <!--Optional:-->
                <REF_DOC></REF_DOC>
                <!--Optional:-->
                <REF_ORG_UN></REF_ORG_UN>
                <!--Optional:-->
                <REVERSAL_DOC></REVERSAL_DOC>
                <!--Optional:-->
                <SP_GL_TYPE></SP_GL_TYPE>
                <!--Optional:-->
                <NEG_POSTNG></NEG_POSTNG>
                <!--Optional:-->
                <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
                <!--Optional:-->
                <BILL_DOC></BILL_DOC>
             </item>
          </IT_DETAILS>
       </urn:ZFI_GET_PAYMENTAGING_KNH>
    </soapenv:Body>
 </soapenv:Envelope>`;
 
    var options = {
 
       url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_KNH_PORTALS&receiverParty=&receiverService=&interface=SI_GETPAYMENT_AGING&interfaceNamespace=http://customerportalknh.com',
 
       headers: {
          'Content-Type': 'application/xml',
 
          'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
       },
 
       body: postData
 
    }
 
    request.post(options, function (error, response, body) {
 
       if (!error && response.statusCode == 200) {
 
          var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
 
          result1 = JSON.parse(result1);
 
          res.send(result1);
 
     }
    }
    );
 
 })

  // inquiry component
app.post("/inquiry", function (req, res) {
    uname = req.body.uname;
    //password = req.body.password;
    console.log(uname);
   //   username="18";
   //   password="RAM";
    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_KNH_INQUIRY>
          <!--You may enter the following 2 items in any order-->
          <I_CUSTMER_ID>`+uname+`</I_CUSTMER_ID>
          <!--Optional:-->
          <IT_FINL>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <DOC_NUMBER></DOC_NUMBER>
                <!--Optional:-->
                <ITEM_NUMBER></ITEM_NUMBER>
                <!--Optional:-->
                <MATERIAL></MATERIAL>
                <!--Optional:-->
                <SHORT_TEXT></SHORT_TEXT>
                <!--Optional:-->
                <CURRENCY></CURRENCY>
                <!--Optional:-->
                <CREATE_DATE></CREATE_DATE>
                <!--Optional:-->
                <NET_PRICE></NET_PRICE>
             </item>
          </IT_FINL>
       </urn:ZSD_KNH_INQUIRY>
    </soapenv:Body>
 </soapenv:Envelope>`;
 
    var options = {
 
       url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_KNH_PORTALS&receiverParty=&receiverService=&interface=SI_INQUI&interfaceNamespace=http://customerportalknh.com',
 
       headers: {
          'Content-Type': 'application/xml',
 
          'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
       },
 
       body: postData
 
    }
 
    request.post(options, function (error, response, body) {
 
       if (!error && response.statusCode == 200) {
 
          var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
 
          result1 = JSON.parse(result1);
 
          res.send(result1);
 
     }
    }
    );
 
 })

  //  Master data component
app.get("/master", function (req, res) {
    //username = req.body.username;
    //password = req.body.password;
    //console.log(username);
     username="0000000007";
     password="RAM";
    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_MASTERDATAKNH>
          <!--You may enter the following 13 items in any order-->
          <I_CITY></I_CITY>
          <I_COUNTRY></I_COUNTRY>
          <I_CURR></I_CURR>
          <I_DIST_CHANNEL></I_DIST_CHANNEL>
          <I_DIVISION></I_DIVISION>
          <I_FNAME></I_FNAME>
          <I_LANGUAGE></I_LANGUAGE>
          <I_LNAME></I_LNAME>
          <I_MOBILE></I_MOBILE>
          <I_PINCODE></I_PINCODE>
          <I_REF_CUSTMR></I_REF_CUSTMR>
          <I_SAL_ORG></I_SAL_ORG>
          <I_STREET></I_STREET>
       </urn:ZSD_MASTERDATAKNH>
    </soapenv:Body>
 </soapenv:Envelope>`;
 
    var options = {
 
       url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_KNH_PORTALS&receiverParty=&receiverService=&interface=SI_MASTERDATA&interfaceNamespace=http://customerportalknh.com',
 
       headers: {
          'Content-Type': 'application/xml',
 
          'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
       },
 
       body: postData
 
    }
 
    request.post(options, function (error, response, body) {
 
       if (!error && response.statusCode == 200) {
 
          var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
 
          result1 = JSON.parse(result1);
 
          res.send(result1);
 
     }
    }
    );
 
 })

 
  //  Sales order component
app.post("/salesorder", function (req, res) {
    uname = req.body.uname;
   // password = req.body.password;
    console.log(uname);
   //   username="0000000007";
   //   password="RAM";
    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_SALESORDERGETLIST_KNH>
          <!--You may enter the following 9 items in any order-->
          <I_CUSTID>`+uname+`</I_CUSTID>
          <!--Optional:-->
          <I_DOC_FROM_DATE></I_DOC_FROM_DATE>
          <!--Optional:-->
          <I_DOC_TO_DATE></I_DOC_TO_DATE>
          <!--Optional:-->
          <I_FLAG></I_FLAG>
          <!--Optional:-->
          <I_MATERIAL></I_MATERIAL>
          <!--Optional:-->
          <I_MATERIAL_EVG>
             <!--Optional:-->
             <MATERIAL_EXT></MATERIAL_EXT>
             <!--Optional:-->
             <MATERIAL_VERS></MATERIAL_VERS>
             <!--Optional:-->
             <MATERIAL_GUID></MATERIAL_GUID>
          </I_MATERIAL_EVG>
          <!--Optional:-->
          <I_PURCHASEORDER_NUM></I_PURCHASEORDER_NUM>
          <!--Optional:-->
          <I_PURCHASE_ORDER></I_PURCHASE_ORDER>
          <!--Optional:-->
          <I_SALESORG></I_SALESORG>
       </urn:ZSD_SALESORDERGETLIST_KNH>
    </soapenv:Body>
 </soapenv:Envelope>`;
 
    var options = {
 
       url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_KNH_PORTALS&receiverParty=&receiverService=&interface=SI_SALESORDERGELIST&interfaceNamespace=http://customerportalknh.com',
 
       headers: {
          'Content-Type': 'application/xml',
 
          'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
       },
 
       body: postData
 
    }
 
    request.post(options, function (error, response, body) {
 
       if (!error && response.statusCode == 200) {
 
          var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
 
          result1 = JSON.parse(result1);
 
          res.send(result1);
 
     }
    }
    );
 
 })
app.listen(3000, () => {

   console.log("serverstart")

});