const express = require('express')
const bodyParser= require('body-parser');
const unirest=require('unirest');
const cors=require('cors');
// const request =require('request');
const app= express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
   res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");
   next();
});
app.listen(port,()=>{
    console.log("running");
})
//login
app.post('/login',(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/customerlogin')
    .header({
        'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
        'Context-Type':'application/json'
    })
    .send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUSTOMER_LOGIN_TT xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><CUSTID>'+username+'</CUSTID><PASSWORD>'+password+'</PASSWORD></ns0:ZFM_CUSTOMER_LOGIN_TT>')   
    .end(function(result){
        if(result.error){
            console.log(result.error);
        }
        else{
            this.res = result.body;
            console.log(this.res);
        }
        res.json(result.body);
        console.log(res);
    } )
})
//customer profile

app.post('/profile',(req,res)=>{
    var customerno=req.body.customerno;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/customerprofilett')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUSTOMER_PROFILE_TT xmlns:ns0="urn:sap-com:document:sap:rfc:functions"> <CUSTID>'+customerno+'</CUSTID></ns0:ZFM_CUSTOMER_PROFILE_TT>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})


//saleorder
app.post('/saleorder',(req,res)=>{
    var customerno=req.body.customerno;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/salesordtt')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_SALESORDER_TT xmlns:ns0="urn:sap-com:document:sap:rfc:functions">  <I_CUSID>'+customerno+'</I_CUSID><I_DOCDATE_FROM/><I_DOCDATE_TO/><I_EXMATNR> <MATERIAL_EXT/><MATERIAL_VERS/><MATERIAL_GUID/></I_EXMATNR><I_MATNR/><I_PURORDER/><I_PURORDER_NUM/><I_SALESORG>0001</I_SALESORG></ns0:ZFM_SALESORDER_TT>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})


//delivery


app.post('/delivery',(req,res)=>{
    var customerno=req.body.customerno;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/deliverytt')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUSTDELIVERY_TT xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><CUSTID>'+customerno+'</CUSTID><IT_DELIVERY><item><VBELN/><ERZET/><ERDAT/><VKORG/><LFART/><LFDAT_V/><INCO2/><ARKTX/><LFUHR/></item></IT_DELIVERY></ns0:ZFM_CUSTDELIVERY_TT>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})


//credit


app.post('/credit',(req,res)=>{
    var customerno=req.body.customerno;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/creditdebittt')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?> <ns0:ZFM_CUST_CREDITMEMO_TT xmlns:ns0="urn:sap-com:document:sap:rfc:functions"> <I_CUSID>'+customerno+'</I_CUSID> <IT_CRE> <item> <KUNNR/> <MATNR/> <WERKS/> <MENGE/> <MEINS/> <BUKRS/> <BELNR/> <GJAHR/> <BUZEI/> <AUGDT/> <KOART/> <DMBTR/> <BDIFF/> <XBILK/> </item> </IT_CRE> <IT_DEB> <item> <KUNNR/> <MATNR/> <WERKS/> <MENGE/> <MEINS/> <BUKRS/> <BELNR/> <GJAHR/> <BUZEI/> <AUGDT/> <KOART/> <DMBTR/> <BDIFF/> <XBILK/> </item> </IT_DEB> </ns0:ZFM_CUST_CREDITMEMO_TT>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})



//payment

app.post('/payment',(req,res)=>{
    var customerno=req.body.customerno;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/paymenttt')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?> <ns0:ZFM_PAYMENT_AGING_TT xmlns:ns0="urn:sap-com:document:sap:rfc:functions"> <I_COMCODE>0001</I_COMCODE> <I_CUSID>'+customerno+'</I_CUSID> <I_DOCDATE/> <IT_DET> <item> <COMP_CODE/> <CUSTOMER/> <SP_GL_IND/> <CLEAR_DATE/> <CLR_DOC_NO/> <ALLOC_NMBR/> <FISC_YEAR/> <DOC_NO/> <ITEM_NUM/> <PSTNG_DATE/> <DOC_DATE/> <ENTRY_DATE/> <CURRENCY/> <LOC_CURRCY/> <REF_DOC_NO/> <DOC_TYPE/> <FIS_PERIOD/> <POST_KEY/> <DB_CR_IND/> <BUS_AREA/> <TAX_CODE/> <LC_AMOUNT/> <AMT_DOCCUR/> <LC_TAX/> <TX_DOC_CUR/> <ITEM_TEXT/> <BRANCH/> <BLINE_DATE/> <PMNTTRMS/> <DSCT_DAYS1/> <DSCT_DAYS2/> <NETTERMS/> <DSCT_PCT1/> <DSCT_PCT2/> <DISC_BASE/> <DSC_AMT_LC/> <DSC_AMT_DC/> <PYMT_METH/> <PMNT_BLOCK/> <FIXEDTERMS/> <INV_REF/> <INV_YEAR/> <INV_ITEM/> <DUNN_BLOCK/> <DUNN_KEY/> <LAST_DUNN/> <DUNN_LEVEL/> <DUNN_AREA/> <DOC_STATUS/> <NXT_DOCTYP/> <VAT_REG_NO/> <REASON_CDE/> <PMTMTHSUPL/> <REF_KEY_1/> <REF_KEY_2/> <T_CURRENCY/> <AMOUNT/> <NET_AMOUNT/> <NAME/> <NAME_2/> <NAME_3/> <NAME_4/> <POSTL_CODE/> <CITY/> <COUNTRY/> <STREET/> <PO_BOX/> <POBX_PCD/> <POBK_CURAC/> <BANK_ACCT/> <BANK_KEY/> <BANK_CTRY/> <TAX_NO_1/> <TAX_NO_2/> <TAX/> <EQUAL_TAX/> <REGION/> <CTRL_KEY/> <INSTR_KEY/> <PAYEE_CODE/> <LANGU/> <BILL_LIFE/> <BE_TAXCODE/> <BILLTAX_LC/> <BILLTAX_FC/> <LC_COL_CHG/> <COLL_CHARG/> <CHGS_TX_CD/> <ISSUE_DATE/> <USAGEDATE/> <BILL_USAGE/> <DOMICILE/> <DRAWER/> <CTRBNK_LOC/> <DRAW_CITY1/> <DRAWEE/> <DRAW_CITY2/> <DISCT_DAYS/> <DISCT_RATE/> <ACCEPTED/> <BILLSTATUS/> <PRTEST_IND/> <BE_DEMAND/> <OBJ_TYPE/> <REF_DOC/> <REF_ORG_UN/> <REVERSAL_DOC/> <SP_GL_TYPE/> <NEG_POSTNG/> <REF_DOC_NO_LONG/> <BILL_DOC/> </item> </IT_DET> </ns0:ZFM_PAYMENT_AGING_TT>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})